import fs from 'node:fs';
import vm from 'node:vm';
import assert from 'node:assert/strict';
import {additions,reviews,roleplaySets,pageAudit} from '../scan-source.mjs';
import {decisions} from '../scan-decisions.mjs';
const context={window:{}};
for(const file of ['mock-data.js','mock-data-extra.js','practice-answers.js','shared-scripts.js','course-data.js','course-layout.js','course-sync.js'])vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{filename:file});
const baseline=JSON.parse(JSON.stringify(context.window));
for(const file of ['scan-data.js','scan-sync.js'])vm.runInNewContext(fs.readFileSync(file,'utf8'),context,{filename:file});
const data=context.window.OPIC_COURSE,layout=context.window.OPIC_STUDY_LAYOUT,scan=context.window.OPIC_SCAN;
const selectedTargets=new Set(scan.selections.filter(s=>s.target).map(s=>'lesson-'+s.target));
const changedPractice=new Set([33,...scan.selections.flatMap(s=>s.practice||[]),...Object.entries(baseline.OPIC_COURSE_PRACTICE_LINKS).filter(([,n])=>selectedTargets.has('lesson-'+n)).map(([i])=>Number(i))]);
for(const [index,answer] of Object.entries(baseline.OPIC_PRACTICE_ANSWERS))if(!changedPractice.has(Number(index)))assert.equal(JSON.stringify(context.window.OPIC_PRACTICE_ANSWERS[index]),JSON.stringify(answer),'Preserve unrelated practice answer '+index);
for(const exam of baseline.OPIC_MOCK_EXAMS)for(const old of exam.questions){
  const selection=scan.selections.find(s=>s.mocks?.some(([e,n])=>exam.id==='mock-'+e&&n===old.number)||(s.target&&baseline.OPIC_COURSE.lessons.find(p=>p.id==='lesson-'+s.target).english&&old.answer===baseline.OPIC_COURSE.lessons.find(p=>p.id==='lesson-'+s.target).english));
  const actual=context.window.OPIC_MOCK_EXAMS.find(e=>e.id===exam.id).questions.find(q=>q.number===old.number);
  assert.equal(actual.answer,selection?selection.text:old.answer,exam.id+'/'+old.number+' scoped whole-answer selection');
  assert.equal(actual.question,old.question,'Preserve mock question');
  if(selection)assert.equal(actual.lessonId,'lesson-'+selection.number);
}
assert.equal(data.sourceSha256,baseline.OPIC_COURSE.sourceSha256);
assert.equal(new Set(data.lessons.map(p=>p.id)).size,data.lessons.length);
for(const old of baseline.OPIC_COURSE.lessons){
  const part=data.lessons.find(p=>p.id===old.id);
  if(!selectedTargets.has(old.id)){
    assert.equal(JSON.stringify(part.blocks.slice(0,old.blocks.length)),JSON.stringify(old.blocks),'Preserve unrelated source blocks');
    if(old.english)assert.equal(part.english,old.english,'Preserve unrelated answer');
  }
}
assert.equal(new Set(pageAudit.map(p=>p[0])).size,24);
assert.equal(layout.scanScenarios.length,roleplaySets.length);
const noop=()=>{},stub={classList:{contains:()=>true},setAttribute:noop,addEventListener:noop,parentElement:{append:noop},hidden:true};
Object.assign(context,{document:{getElementById:()=>stub,querySelectorAll:()=>[],createElement:()=>({...stub}),addEventListener:noop},localStorage:{getItem:()=>null},q:stub,prompts:context.window.OPIC_COURSE_PRACTICE,location:{hash:'#/home'}});
context.window.addEventListener=noop;vm.createContext(context);
vm.runInContext(fs.readFileSync('course-app.js','utf8'),context);
const pages=[];
function render(route){context.location.hash=route;const page=vm.runInContext('({prep:renderPrep,answers:renderAnswerGuide,grammar:renderGrammar,expressions:renderExpressions,scripts:renderScripts}[resolveStudyRoute().view])(resolveStudyRoute())',context);pages.push(page);return page;}
const decode=text=>text.replace(/<[^>]+>/g,' ').replace(/&amp;/g,'&').replace(/&#39;/g,"'").replace(/&quot;/g,'"').replace(/&lt;/g,'<').replace(/&gt;/g,'>');
const normalize=text=>text.replace(/\s|\*\*/g,'');
for(const entry of scan.additions){
  const part=entry.target?data.lessons.find(p=>p.id==='lesson-'+entry.target):data.lessons.find(p=>p.scanId===entry.id);
  assert(part,entry.id+' has source data');
  const page=render('#/course/'+part.id),text=normalize(decode(page));
  if(entry.kind==='expressions')for(const line of entry.text.split('\n'))for(const cell of line.split(' → '))assert(text.includes(normalize(cell)),entry.id+' expression rendered');
  else assert(text.includes(normalize(entry.text)),entry.id+' full source rendered');
  for(const q of entry.questions)assert(text.includes(normalize(q)),entry.id+' full question rendered');
  if(entry.kind==='script')assert.equal(part.english,entry.text,'Only exact source scripts can become answers');
  else assert.equal(part.english,'','Do not invent a complete answer for a template/opening/question');
}
const scenarioPage=render('#/course/scripts/scenarios');
for(const set of roleplaySets){const actual=layout.scanScenarios.find(s=>s.id===set.id);assert.equal(actual.parts.length,set.questions.length);set.questions.forEach((q,i)=>{const part=data.lessons.find(p=>p.id==='lesson-'+actual.parts[i]);assert.equal(part.questions[0],q);assert.equal(part.english,'');assert(normalize(decode(scenarioPage)).includes(normalize(q)));assert(render('#/course/'+part.id).includes('data-part="'+part.id+'"'));});}
for(const p of context.window.OPIC_COURSE_PRACTICE){const part=data.lessons.find(l=>l.id===p.lessonId);assert(part);assert.equal(p.answer,part.english);assert.equal(p.questionOnly,!p.answer);}
assert.equal(decisions.length,18);assert.equal(new Set(decisions.map(d=>d.id)).size,18);
assert.equal(decisions.filter(d=>d.choice==='textbook').length,11);
for(const selection of scan.selections){
  const part=data.lessons.find(p=>p.id==='lesson-'+selection.number);
  assert.equal(part.english,selection.text,'Whole selected answer, no mixing: '+selection.id);
  const rendered=normalize(decode(render('#/course/'+part.id)));
  assert(rendered.includes(normalize(selection.text)),'Selected script rendered: '+selection.id);
  for(const question of selection.questions)assert(rendered.includes(normalize(question)),'Question rendered: '+selection.id);
  for(const i of selection.practice||[])assert.equal(context.window.OPIC_PRACTICE_ANSWERS[i],selection.text);
  if(selection.choice==='textbook'){
    assert(reviews.find(r=>r.id===selection.id).text.includes(selection.text),'Exact textbook paragraph');
    const old=baseline.OPIC_COURSE.lessons.find(p=>p.id===part.id)?.english;
    if(old)assert(!JSON.stringify(data.lessons).includes(old),'Superseded source removed');
  }else assert.equal(selection.text,baseline.OPIC_PRACTICE_ANSWERS[12]);
}
const hotel=layout.scenarios.find(s=>s.id==='hotel');assert.equal(hotel.parts.length,3);
const hotelPage=normalize(decode(render('#/course/scripts/roleplay/hotel')));
for(const n of hotel.parts)assert(hotelPage.includes(normalize(data.lessons.find(p=>p.id==='lesson-'+n).english)));
const active=JSON.stringify(context.window)+pages.join('\n');
const comparison=fs.readFileSync('docs/교재스캔-차이점-검토.md','utf8');
for(const r of reviews){assert(comparison.includes(r.text),r.id+' review preserves readable text');assert(comparison.includes(r.difference));if(decisions.find(d=>d.id===r.id).choice==='current')assert(!active.includes(r.text),r.id+' rejected alternative excluded');}
assert(!comparison.includes('선택: 미정'));
const html=fs.readFileSync('index.html','utf8');
assert(html.indexOf('src="course-sync.js"')<html.indexOf('src="scan-sync.js"'));
assert(html.indexOf('src="scan-sync.js"')<html.indexOf('const prompts='));
const sourceIds=new Set(additions.map(e=>e.id));assert.equal(sourceIds.size,additions.length);
console.log(`PASS: ${pageAudit.length} scanned pages; ${scan.additions.length} additions; ${roleplaySets.length} question groups; all 18 decisions verified (7 current, 11 textbook); whole answers rendered and synchronized; hotel trio rendered; unrelated questions and answers preserved.`);
