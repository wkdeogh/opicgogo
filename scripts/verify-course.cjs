const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const source = fs.readFileSync('opic종합정리.md','utf8').replace(/\r\n/g,'\n');
const html = fs.readFileSync('index.html','utf8');
const context = {window:{}};
for (const file of ['mock-data.js','mock-data-extra.js','practice-answers.js','shared-scripts.js','course-data.js','course-layout.js','course-sync.js']) {
  vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{filename:file});
}
const data=context.window.OPIC_COURSE;
assert.equal(crypto.createHash('sha256').update(source).digest('hex'),data.sourceSha256,'Source hash must match');
assert.equal(data.sections.map(s=>[s.heading,...s.lines].join('\n')).join('\n'),source,'Every source line must be retained in order (LF line endings)');
const lines=source.split('\n');
const covered=new Map();
const decode=s=>s.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&lt;/g,'<').replace(/&gt;/g,'>').replace(/&quot;/g,'"').replace(/&#39;/g,"'");
const normalize=s=>s.replace(/\\([\\`*_{}\[\]()#+.!~>&-])/g,'$1').replace(/\*\*/g,'').replace(/^>\s?/,'').replace(/\s/g,'');
for (const lesson of data.lessons) {
  assert(data.groups.some(g=>g.id===lesson.group),lesson.id+' group');
  const rendered=normalize(decode(lesson.html));
  for (const block of lesson.blocks) for (const line of block.sourceLines) {
    assert(!covered.has(line),`Duplicate line ${line}`);
    covered.set(line,lesson.id);
    const cells=block.kind==='table'?lines[line-1].trim().slice(1,-1).split('|'):[lines[line-1].trim()];
    for (const cell of cells) assert(rendered.includes(normalize(cell)),`Line ${line} missing from rendered ${lesson.id}: ${cell}`);
  }
}
lines.forEach((line,index)=>{
  const value=line.trim();
  if(!value || /^(#{1,4}\s|<\/?aside>|[💡👉]$|\\?---$|>\s*$|\|[\s:|\-]+\|$)/.test(value))return;
  assert(covered.has(index+1),`Uncovered source line ${index+1}: ${value}`);
});
assert.equal(data.lessons.length,113);
assert.equal(data.quizzes.filter(q=>q.type==='grammar').length,61);
assert.equal(data.quizzes.filter(q=>q.type==='idiom').length,29);
assert.equal(data.quizzes.filter(q=>q.type==='connective').length,18);
assert.equal(data.quizzes.filter(q=>q.type==='filler').length,14);
data.quizzes.forEach(q=>{assert.equal(new Set(q.o).size,4,q.id+' unique choices');assert(q.o.includes(q.a));assert(data.lessons.some(l=>l.id===q.lessonId))});
context.window.OPIC_COURSE_PRACTICE.forEach(p=>{const part=data.lessons.find(l=>l.id===p.lessonId);assert.equal(p.answer,part.english,p.lessonId+' exact current answer');assert(p.en);if(p.questionOnly)assert.equal(p.answer,'');else assert(p.answer.length>200);});
for (const exam of context.window.OPIC_MOCK_EXAMS) {
  assert.equal(exam.questions.length,15);
  for(const q of exam.questions) {if(q.questionOnly)assert.equal(q.answer,'');else assert(q.answer.length>(q.number===1?20:100),`${exam.id}/${q.number} answer`);assert(q.cues.length);}
}
const ids=[...html.matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
assert.equal(new Set(ids).size,ids.length,'Unique HTML IDs');
for(const match of html.matchAll(/<script\b([^>]*)>([\s\S]*?)<\/script>/g)) {
  const src=match[1].match(/src="([^"]+)"/);
  new vm.Script(src?fs.readFileSync(src[1],'utf8'):match[2],{filename:src?src[1]:'index inline'});
}
for (const match of html.matchAll(/(?:src|href)="([^"#]+)"/g)) {
  const value=decodeURIComponent(match[1]);
  if(!value.startsWith('http'))assert(fs.existsSync(value),`Missing asset ${value}`);
}
// Exercise the actual workspace renderers, including legacy links. Source storage
// alone must never count as successful coverage of the learning interface.
const layout=context.window.OPIC_STUDY_LAYOUT;
const allocated=[...layout.prep,6,36,...['answers','grammar','expressions','scripts'].flatMap(view=>layout[view].flatMap(group=>group.parts))];
assert.equal(new Set(allocated).size,data.lessons.length,'Every source fragment has a workspace');
assert.equal(allocated.length,data.lessons.length,'No accidental duplicate allocation');
assert.equal(layout.views[0].id,'answers','Survey must not be the learning entry point');
layout.scenarios.forEach(scene=>assert.equal(scene.parts.length,3,'All three roleplay answers share a page'));
const noop=()=>{};
const stub={classList:{contains:()=>true},setAttribute:noop,addEventListener:noop,parentElement:{append:noop},hidden:true};
Object.assign(context,{document:{getElementById:()=>stub,querySelectorAll:()=>[],createElement:()=>({...stub}),addEventListener:noop},localStorage:{getItem:()=>null},q:stub,prompts:context.window.OPIC_COURSE_PRACTICE,location:{hash:'#/home'}});
context.window.addEventListener=noop;
vm.createContext(context);
vm.runInContext(fs.readFileSync('course-app.js','utf8'),context,{filename:'course-app.js'});
const actualPages=[];
function render(route,expression){context.location.hash=route;const page=vm.runInContext(expression||'({prep:renderPrep,answers:renderAnswerGuide,grammar:renderGrammar,expressions:renderExpressions,scripts:renderScripts}[resolveStudyRoute().view])(resolveStudyRoute())',context);actualPages.push(page);return page;}
render('#/course/prep');render('#/course/answers');
for(const view of ['grammar','expressions','scripts'])for(const group of layout[view])render('#/course/'+view+'/'+group.id);
for(const scene of layout.scenarios){const page=render('#/course/scripts/roleplay/'+scene.id);scene.parts.forEach(n=>assert(page.includes('data-part="lesson-'+String(n).padStart(3,'0')+'"')));assert.equal((page.match(/class="study-paper script-card"/g)||[]).length,3);}
const renderedText=normalize(decode(actualPages.join('\n'))).replace(/→/g,'');
for(const [line,part] of covered){
  const value=lines[line-1];
  if(part==='lesson-036'){assert(actualPages.some(page=>page.includes('>영작 연습</button>')),'The source writing instruction must become a real exercise');continue;}
  const cells=value.trim().startsWith('|')?value.trim().slice(1,-1).split('|'):[value];
  for(const cell of cells)for(const phrase of cell.split('→'))assert(renderedText.includes(normalize(phrase).replace(/^\*/,''))||renderedText.includes(normalize(phrase).replace(/^\d+\./,'')),`Actual workspace omits source line ${line}: ${phrase}`);
}
const grammarLegacy=render('#/course/lesson-036');
assert.equal((grammarLegacy.match(/class="writing-row"/g)||[]).length,24,'The old empty page must open the complete writing worksheet');
assert(!grammarLegacy.includes('(영작 연습 필요)'),'Do not display a placeholder as a lesson');
for(const part of data.lessons){const page=render('#/course/'+part.id);assert(page.includes('data-part="'+part.id+'"'),'Broken legacy material link: '+part.id);}
assert(!actualPages.some(page=>/학습 완료 표시|회상 연습|36 \/ 97/.test(page)),'No fragment-completion UI');
assert(!html.includes('data-course-count'),'Do not advertise internal source fragments as lessons');
assert.equal([...html.matchAll(/src="course-layout.js"/g)].length,1,'Load current layout once, before sync');
assert(html.indexOf('src="course-layout.js"')<html.indexOf('src="course-sync.js"'));
for(const [oldId,newId] of Object.entries(layout.legacyLinks)){const page=render('#/course/lesson-'+oldId.padStart(3,'0'));assert(page.includes('data-part="lesson-'+String(newId).padStart(3,'0')+'"'),'Old link must open current content');}
layout.placePairs.forEach(pair=>assert.equal(pair.parts.filter(n=>data.lessons.find(l=>l.id==='lesson-'+n).english).length,2,'Keep both place variants together'));
const tail=data.lessons.filter(l=>Number(l.id.split('-')[1])>1000);
assert.equal(tail.filter(l=>l.path[1]==='사회 이슈').length,12);
assert.equal(tail.filter(l=>l.path[1]==='과거·현재 비교 2').length,7);
assert(!data.lessons.some(l=>Number(l.id.split('-')[1])>=46&&Number(l.id.split('-')[1])<=97),'Retire old script identities');
const currentAnswers=tail.map(l=>l.english).join('\n');
for(const stale of ['Gwanggyo Lake Park','small studio apartment in Suwon','contact a neighbor who has a spare key','checking maps, and keeping in touch with people'])assert(!currentAnswers.includes(stale),'Retired answer remains: '+stale);
assert(currentAnswers.includes('try getting into the house through a window'));
assert(currentAnswers.includes('5 bedrooms'));
const previousSource=require('node:child_process').execFileSync('git',['show','90d9324:opic종합정리.md'],{encoding:'utf8'}).replace(/\r\n/g,'\n');
const previousTail=previousSource.split('# 유형별 실전 문제와 답변 스크립트')[1];
assert(previousTail,'Comparison baseline must include the superseded section');
const currentSourceText=normalize(source);
const obsoleteParagraphs=previousTail.split('\n').map(line=>line.trim()).filter(line=>line.length>100 && /^[A-Za-z*]/.test(line) && !/[가-힣]/.test(line) && !currentSourceText.includes(normalize(line)));
const activeText=normalize(actualPages.join('\n')+'\n'+JSON.stringify(context.window.OPIC_MOCK_EXAMS)+'\n'+JSON.stringify(context.window.OPIC_COURSE_TEMPLATES)+'\n'+JSON.stringify(context.window.OPIC_COURSE_PRACTICE)+'\n'+JSON.stringify(context.window.OPIC_PRACTICE_ANSWERS));
obsoleteParagraphs.forEach(line=>assert(!activeText.includes(normalize(line)),'Superseded paragraph remains in active content: '+line));
console.log(`PASS: ${obsoleteParagraphs.length} superseded English paragraphs absent from study, template, mock and practice content.`);
console.log(`PASS: ${covered.size} source content lines in actual study workspaces; meaningful grouping, writing worksheet, three-answer roleplays and all legacy links; ${data.quizzes.length} quiz questions, ${context.window.OPIC_COURSE_PRACTICE.length} speaking prompts, 150 mock questions, JavaScript and local assets.`);
