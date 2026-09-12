const fs = require('node:fs');
const vm = require('node:vm');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const source = fs.readFileSync('opic종합정리.md','utf8').replace(/\r\n/g,'\n');
const html = fs.readFileSync('index.html','utf8');
const context = {window:{}};
for (const file of ['mock-data.js','mock-data-extra.js','practice-answers.js','shared-scripts.js','course-data.js','course-sync.js']) {
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
assert.equal(data.lessons.length,97);
assert.equal(data.quizzes.filter(q=>q.type==='grammar').length,61);
assert.equal(data.quizzes.filter(q=>q.type==='idiom').length,29);
assert.equal(data.quizzes.filter(q=>q.type==='connective').length,18);
assert.equal(data.quizzes.filter(q=>q.type==='filler').length,14);
data.quizzes.forEach(q=>{assert.equal(new Set(q.o).size,4,q.id+' unique choices');assert(q.o.includes(q.a));assert(data.lessons.some(l=>l.id===q.lessonId))});
context.window.OPIC_COURSE_PRACTICE.forEach(p=>assert(p.answer.length>200,p.lessonId+' full answer'));
for (const exam of context.window.OPIC_MOCK_EXAMS) {
  assert.equal(exam.questions.length,15);
  for(const q of exam.questions) {assert(q.answer.length>(q.number===1?20:100),`${exam.id}/${q.number} answer`);assert(q.cues.length);}
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
console.log(`PASS: ${covered.size} source content lines rendered, ${data.lessons.length} lessons, ${data.quizzes.length} recall questions, ${context.window.OPIC_COURSE_PRACTICE.length} new speaking prompts, 150 mock questions, script syntax and local assets.`);
