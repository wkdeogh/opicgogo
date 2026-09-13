const courseData = window.OPIC_COURSE;
const studyLayout = window.OPIC_STUDY_LAYOUT;
const courseRoot = document.getElementById('course');
const studyEscape = value => String(value ?? '').replace(/[&<>"']/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[char]));
const studyUnescape = value => String(value).replace(/\\([\\`*_{}\[\]()#+.!~>&-])/g,'$1');
const studyPlain = value => studyUnescape(value).replace(/\*\*/g,'').replace(/^\* /,'');
const studyInline = value => studyEscape(studyUnescape(value)).replace(/\*\*(.*?)\*\*/g,'<strong>$1</strong>').replace(/^\* /,'');
const sourcePart = value => {const n=typeof value==='number'?value:Number(String(value).split('-')[1]);const id='lesson-'+String(studyLayout.legacyLinks[n]||n).padStart(3,'0');return courseData.lessons.find(item=>item.id===id);};
const partNumber = item => Number(item.id.split('-')[1]);
let studySaved = {};
try { studySaved = JSON.parse(localStorage.getItem('opicStudyDesk') || '{}') || {}; } catch {}
const studyState = {drafts:studySaved.drafts && typeof studySaved.drafts === 'object' ? studySaved.drafts : {}, last:typeof studySaved.last === 'string' ? studySaved.last : '', grammarMode:'read', hideExpressions:false};
function saveStudy(){try {localStorage.setItem('opicStudyDesk',JSON.stringify({drafts:studyState.drafts,last:studyState.last}));} catch {}}
function partLocation(number){
  if(number===36)return {view:'grammar',tab:'relatives'};
  if(number===6)return {view:'answers'};
  if(studyLayout.prep.includes(number))return {view:'prep'};
  for(const view of ['answers','grammar','expressions','scripts']){
    const group=studyLayout[view].find(item=>item.parts.includes(number));
    if(group)return {view,tab:view==='answers'?undefined:group.id};
  }
  return {view:'answers'};
}
function studyHref(value){const part=sourcePart(value);if(!part)return '#/course/answers';const loc=partLocation(partNumber(part));return '#/course/'+loc.view+(loc.tab?'/'+loc.tab:'')+'/'+part.id;}
function resolveStudyRoute(){
  const bits=location.hash.replace(/^#\/?/,'').split('/');
  const aliases={strategy:['prep'],'al-core':['prep'],survey:['prep','lesson-001'],answer:['answers'],patterns:['grammar'],examples:['grammar'],vocab:['expressions','vocab'],idioms:['expressions','idioms'],misc:['expressions','konglish'],connectives:['expressions','connectives'],fillers:['expressions','fillers']};
  let path=bits[0]==='course'?bits.slice(1):(aliases[bits[0]]||['answers']);
  const outdated=path.find(item=>/^lesson-\d+$/.test(item)&&studyLayout.legacyLinks[Number(item.split('-')[1])]);
  if(outdated)path=studyHref(outdated).split('/').slice(2);
  if(path[0]?.startsWith('lesson-'))path=studyHref(path[0]).split('/').slice(2);
  const old={strategy:['prep'],flow:['answers'],patterns:['grammar'],unexpected:['scripts','weather'],roleplay:['scripts','roleplay']};
  if(old[path[0]])path=old[path[0]];
  const view=studyLayout.views.some(item=>item.id===path[0])?path[0]:'answers';
  const groups=['grammar','expressions','scripts'].includes(view)?studyLayout[view]:null;
  const tab=groups?(groups.find(item=>item.id===path[1])||groups[0]).id:undefined;
  return {view,tab,anchor:path.find(item=>/^lesson-\d+$/.test(item)),scenario:path.find(item=>studyLayout.scenarios.some(scene=>scene.id===item))};
}
function studyLabel(part){const loc=partLocation(partNumber(part));const view=studyLayout.views.find(item=>item.id===loc.view);const group=loc.tab?studyLayout[loc.view].find(item=>item.id===loc.tab):null;return view.title+(group?' · '+group.title:'');}
function sourceLine(block){
  if(block.role==='question')return '<p class="script-question" lang="en">'+studyEscape(studyPlain(block.text).replace(/^\d+\.\s*/,''))+'</p>';
  if(block.role==='answer')return studyPlain(block.text).split(/(?<=[.!?])\s+(?=[A-Z])/).map(line=>'<p class="english-line">'+studyEscape(line)+'</p>').join('');
  if(block.kind==='table')return '<div class="study-table-wrap"><table class="study-table"><thead><tr>'+block.rows[0].map(cell=>'<th scope="col">'+studyInline(cell)+'</th>').join('')+'</tr></thead><tbody>'+block.rows.slice(1).map(row=>'<tr>'+row.map((cell,i)=>'<td data-label="'+studyEscape(studyPlain(block.rows[0][i]))+'">'+studyInline(cell)+'</td>').join('')+'</tr>').join('')+'</tbody></table></div>';
  if(block.kind==='recall')return '<div class="study-pair"><div class="study-prompt">'+studyInline(block.prompt)+'</div><div class="study-answer">'+block.answers.map(answer=>'<p>'+studyInline(answer)+'</p>').join('')+'</div></div>';
  if(/^[💡👉]$/.test(block.text.trim()))return '';
  return '<p class="'+(!/[가-힣]/.test(block.text)?'english-line':'source-line')+'">'+studyInline(block.text)+'</p>';
}
function readPart(value,heading=false){const part=sourcePart(value);return '<div class="source-fragment" data-part="'+part.id+'" id="source-'+part.id+'">'+(heading?'<h3>'+studyEscape(typeof heading==='string'?heading:part.title)+'</h3>':'')+part.blocks.map(sourceLine).join('')+'</div>';}
function subTabs(view,active){return '<nav class="study-subtabs" aria-label="'+studyLayout.views.find(item=>item.id===view).title+' 분류">'+studyLayout[view].map(item=>'<a href="#/course/'+view+'/'+item.id+'" '+(item.id===active?'aria-current="page"':'')+'>'+studyEscape(item.title)+'</a>').join('')+'</nav>';}
function reference(title,body,open=false){return '<details class="study-reference"'+(open?' open':'')+'><summary>'+title+'</summary><div class="reference-body">'+body+'</div></details>';}
function renderPrep(){return '<div class="prep-grid"><article class="study-paper">'+readPart(3,true)+'</article><article class="study-paper">'+readPart(4,true)+readPart(2,true)+'</article></div>'+reference('Survey 선택안 · 시험 전 참고',readPart(1)+readPart(5,true));}
function renderAnswerGuide(route){
  const focused=route.anchor?studyLayout.answers.find(item=>item.parts.includes(partNumber(sourcePart(route.anchor)||{id:'lesson-0'}))):null;
  return '<div class="type-jumps">'+studyLayout.answers.map(item=>'<button class="study-button" data-jump="'+item.id+'">'+item.title+'</button>').join('')+'</div><div class="study-tools"><button class="study-text-button" id="expandAnswerTypes">모든 유형 펼치기</button></div>'+studyLayout.answers.map((item,index)=>'<details class="answer-family" id="type-'+item.id+'"'+((focused?focused.id===item.id:index===0)?' open':'')+'><summary><b>'+item.title+'</b><span>'+item.flow+'</span></summary><div class="answer-family-body">'+item.parts.map(n=>readPart(n,n<18?'출제 특징':sourcePart(n).blocks[0].kind!=='recall')).join('')+(item.example?'<a class="lesson-link" href="'+studyHref(item.example)+'">'+(item.id==='person'?'인물 표현 보기':item.id==='object'?'예시 문제 보기':'예문에 적용하기')+' →</a>':'')+'</div></details>').join('')+reference('전체 출제 유형',readPart(6));
}
function renderGrammar(route){
  const group=studyLayout.grammar.find(item=>item.id===route.tab),part=sourcePart(group.parts[0]);
  return subTabs('grammar',route.tab)+'<div class="study-tools"><div class="study-switch" data-part="lesson-036" id="source-lesson-036"><button data-writing-mode="read" aria-pressed="'+(studyState.grammarMode==='read')+'">예문 함께 보기</button><button data-writing-mode="write" aria-pressed="'+(studyState.grammarMode==='write')+'">영작 연습</button></div><button class="study-button" data-quiz="'+part.id+'">문장 퀴즈 →</button></div><article class="writing-sheet" data-part="'+part.id+'" id="source-'+part.id+'" data-mode="'+studyState.grammarMode+'"><h3>'+studyEscape(part.title)+'</h3>'+part.blocks.map((block,index)=>{
    if(block.kind!=='recall')return '<div class="writing-subhead">'+sourceLine(block)+'</div>';
    const key=part.id+'-'+index;
    return '<div class="writing-row"><div class="writing-prompt">'+studyInline(block.prompt)+'</div><div class="writing-work"><textarea data-draft="'+key+'" lang="en" aria-label="영작: '+studyEscape(studyPlain(block.prompt))+'" placeholder="영어로 써 보세요" spellcheck="false">'+studyEscape(studyState.drafts[key]||'')+'</textarea><details class="writing-answer"'+(studyState.grammarMode==='read'?' open':'')+'><summary>모범 답안 보기</summary>'+block.answers.map(answer=>'<p lang="en">'+studyInline(answer.replace(/^→\s*/,''))+'</p>').join('')+'</details></div></div>';
  }).join('')+'</article>';
}
function expressionParts(numbers){return numbers.map(n=>{
  const part=sourcePart(n);let rows='',content='';
  const flush=()=>{if(rows){content+='<table class="expression-table"><thead><tr><th scope="col">뜻 · 기본 표현</th><th scope="col">활용할 표현</th></tr></thead><tbody>'+rows+'</tbody></table>';rows='';}};
  part.blocks.forEach(block=>{if(block.kind==='recall')rows+='<tr class="expression-row"><th scope="row">'+studyInline(block.prompt)+'</th><td><button class="expression-reveal study-text-button" aria-expanded="false">표현 보기</button><div class="expression-answer">'+block.answers.map(answer=>'<p>'+studyInline(answer.replace(/^→\s*/,''))+'</p>').join('')+'</div></td></tr>';else{flush();content+=sourceLine(block);}});flush();
  return '<article class="study-paper expression-part" data-part="'+part.id+'" id="source-'+part.id+'"><h3>'+studyEscape(part.title)+'</h3>'+content+'</article>';
}).join('');}
function renderExpressions(route){
  const group=studyLayout.expressions.find(item=>item.id===route.tab),hasRows=group.parts.some(n=>sourcePart(n).blocks.some(b=>b.kind==='recall'));
  const quiz=courseData.quizzes.some(item=>item.lessonId===sourcePart(group.parts[0]).id);
  return subTabs('expressions',route.tab)+'<div class="study-tools">'+(hasRows?'<input id="expressionSearch" type="search" class="study-search" aria-label="현재 표현 찾기" placeholder="뜻이나 표현 찾기"><label class="study-check"><input type="checkbox" id="hideExpressions" '+(studyState.hideExpressions?'checked':'')+'> 영어 가리기</label>':'')+(quiz?'<button class="study-button" data-quiz="'+sourcePart(group.parts[0]).id+'">표현 퀴즈 →</button>':'')+'</div><div id="expressionList" class="expression-list'+(studyState.hideExpressions?' hide-english':'')+'">'+expressionParts(group.parts)+'</div><p id="expressionEmpty" role="status" hidden>일치하는 표현이 없습니다.</p>';
}
function scriptCard(n,stage){
  const part=sourcePart(n),index=prompts.findLastIndex(item=>item.lessonId===part.id),prompt=index>=0?prompts[index]:null;
  const actions=(part.english?'<button class="study-button" data-listen="'+part.id+'">답변 듣기</button>':'')+(studyLayout.hints[n]?'<button class="study-button" data-cues aria-pressed="false">가리고 말하기</button>':'')+(prompt?'<button class="study-text-button" data-practice="'+index+'">타이머·녹음 →</button>':'');
  return '<article class="study-paper script-card'+(!part.english?' question-only':'')+'">'+(stage?'<span class="script-stage">'+stage+'</span>':'')+'<h3>'+studyEscape(part.title)+'</h3>'+(prompt&&!part.questions.length?'<p class="script-question" lang="en">'+studyEscape(prompt.en)+'</p>':'')+'<div class="script-copy">'+readPart(n)+'</div>'+(studyLayout.hints[n]?'<ol class="script-hints" hidden>'+studyLayout.hints[n].map(hint=>'<li>'+studyEscape(hint)+'</li>').join('')+'</ol>':'')+(actions?'<div class="script-actions">'+actions+'</div>':'')+'</article>';
}
function renderRoleplay(route){
  const n=partNumber(sourcePart(route.anchor)||{id:'lesson-0'}),scene=studyLayout.scenarios.find(item=>item.parts.includes(n)||item.id===route.scenario)||studyLayout.scenarios[0];
  return '<nav class="scenario-tabs" aria-label="롤플레이 상황">'+studyLayout.scenarios.map(item=>'<a href="#/course/scripts/roleplay/'+item.id+'" '+(item.id===scene.id?'aria-current="page"':'')+'>'+item.title+'</a>').join('')+'</nav><div class="roleplay-trio">'+scene.parts.map((num,index)=>scriptCard(num,['01 · 질문하기','02 · 문제 해결하기','03 · 관련 경험'][index])).join('')+'</div>';
}
function scriptTopic(title,parts,open){return '<details class="study-topic"'+(open?' open':'')+'><summary>'+studyEscape(title)+'</summary><div class="scripts-document">'+parts.map(n=>scriptCard(n)).join('')+'</div></details>';}
function renderScripts(route){
  const group=studyLayout.scripts.find(item=>item.id===route.tab);
  let body;
  if(route.tab==='roleplay')body=renderRoleplay(route);
  else if(route.tab==='place')body=studyLayout.placePairs.map((pair,i)=>scriptTopic(pair.title,pair.parts,i===0)).join('');
  else if(['change','compare','issue'].includes(route.tab))body=group.parts.map((n,i)=>sourcePart(n).english?scriptTopic(sourcePart(n).title,[n],i===0||i===1&&route.tab==='compare'):reference(sourcePart(n).title,readPart(n),true)).join('');
  else body='<div class="scripts-document">'+group.parts.map(n=>sourcePart(n).title==='예시 문제'?reference('예시 문제',readPart(n)):scriptCard(n)).join('')+'</div>';
  return subTabs('scripts',route.tab)+body;
}
function renderCourseResume(){const el=document.getElementById('courseResume');if(!el)return;const bits=studyState.last.split('/'),view=studyLayout.views.find(item=>item.id===bits[2]);el.hidden=!view;if(!view)return;const group=bits[3]&&studyLayout[view.id]?.find?.(item=>item.id===bits[3]);el.innerHTML='<span>최근 학습 <b>'+studyEscape(view.title+(group?' · '+group.title:''))+'</b></span><a href="'+studyEscape(studyState.last)+'">이어서 보기 →</a>';}
function renderCourse(){
  renderCourseResume();document.querySelectorAll('[data-study-link]').forEach(link=>link.classList.remove('active'));if(courseRoot.classList.contains('route-hidden'))return;
  const route=resolveStudyRoute(),view=studyLayout.views.find(item=>item.id===route.view);
  courseRoot.innerHTML='<header class="study-heading"><div><h2>'+view.title+'</h2><p>'+view.description+'</p></div></header><nav class="study-main-tabs" aria-label="학습 메뉴">'+studyLayout.views.map(item=>'<a href="#/course/'+item.id+'" '+(route.view===item.id?'aria-current="page"':'')+'>'+item.title+'</a>').join('')+'</nav><div class="study-content">'+({prep:renderPrep,answers:renderAnswerGuide,grammar:renderGrammar,expressions:renderExpressions,scripts:renderScripts}[route.view])(route)+'</div>';
  document.getElementById('topbarPage').textContent=view.title;document.title=view.title+' · DH OPIc';
  document.querySelectorAll('[data-study-link]').forEach(link=>link.classList.toggle('active',link.dataset.studyLink===route.view));
  const scene=route.view==='scripts'&&route.tab==='roleplay'?(studyLayout.scenarios.find(item=>item.parts.includes(partNumber(sourcePart(route.anchor)||{id:'lesson-0'})))?.id||route.scenario):null;
  studyState.last='#/course/'+route.view+(route.tab?'/'+route.tab:'')+(scene?'/'+scene:'');saveStudy();bindStudyEvents();
  if(route.anchor&&route.anchor!=='lesson-036'){const target=document.getElementById('source-'+route.anchor);if(target){for(let el=target.parentElement;el&&el!==courseRoot;el=el.parentElement)if(el.tagName==='DETAILS')el.open=true;requestAnimationFrame(()=>(target.closest('.script-card')||target).scrollIntoView({block:'start',behavior:'instant'}));}}
}
function bindStudyEvents(){
  courseRoot.querySelectorAll('[data-jump]').forEach(button=>button.addEventListener('click',()=>{const target=document.getElementById('type-'+button.dataset.jump);target.open=true;target.scrollIntoView({block:'start',behavior:'smooth'});}));
  courseRoot.querySelector('#expandAnswerTypes')?.addEventListener('click',event=>{const items=[...courseRoot.querySelectorAll('.answer-family')],open=items.some(item=>!item.open);items.forEach(item=>item.open=open);event.currentTarget.textContent=open?'모든 유형 접기':'모든 유형 펼치기';});
  courseRoot.querySelectorAll('[data-writing-mode]').forEach(button=>button.addEventListener('click',()=>{studyState.grammarMode=button.dataset.writingMode;courseRoot.querySelector('.writing-sheet').dataset.mode=studyState.grammarMode;courseRoot.querySelectorAll('.writing-answer').forEach(item=>item.open=studyState.grammarMode==='read');courseRoot.querySelectorAll('[data-writing-mode]').forEach(item=>item.setAttribute('aria-pressed',String(item===button)));}));
  courseRoot.querySelectorAll('[data-draft]').forEach(input=>input.addEventListener('input',()=>{studyState.drafts[input.dataset.draft]=input.value;saveStudy();}));
  courseRoot.querySelectorAll('[data-quiz]').forEach(button=>button.addEventListener('click',()=>{const select=document.getElementById('quizMode'),id=button.dataset.quiz;if(![...select.options].some(option=>option.value===id))select.add(new Option(sourcePart(id).title,id));select.value=id;state.currentQuiz=null;pickQuiz();location.hash='/quiz';}));
  courseRoot.querySelector('#hideExpressions')?.addEventListener('change',event=>{studyState.hideExpressions=event.target.checked;courseRoot.querySelector('#expressionList').classList.toggle('hide-english',studyState.hideExpressions);courseRoot.querySelectorAll('.expression-row').forEach(row=>row.classList.remove('revealed'));courseRoot.querySelectorAll('.expression-reveal').forEach(button=>button.setAttribute('aria-expanded','false'));});
  courseRoot.querySelectorAll('.expression-reveal').forEach(button=>button.addEventListener('click',()=>{const visible=button.closest('tr').classList.toggle('revealed');button.setAttribute('aria-expanded',String(visible));button.textContent=visible?'다시 가리기':'표현 보기';}));
  courseRoot.querySelector('#expressionSearch')?.addEventListener('input',event=>{const term=event.target.value.trim().toLocaleLowerCase(),rows=[...courseRoot.querySelectorAll('.expression-row')];rows.forEach(row=>row.hidden=!row.textContent.toLocaleLowerCase().includes(term));document.getElementById('expressionEmpty').hidden=rows.some(row=>!row.hidden);});
  courseRoot.querySelectorAll('[data-listen]').forEach(button=>button.addEventListener('click',()=>toggleSpeech(button,sourcePart(button.dataset.listen).english,.88)));
  courseRoot.querySelectorAll('[data-cues]').forEach(button=>button.addEventListener('click',()=>{const card=button.closest('.script-card'),hide=!card.querySelector('.script-copy').hidden;card.querySelector('.script-copy').hidden=hide;card.querySelector('.script-hints').hidden=!hide;button.textContent=hide?'스크립트 보기':'가리고 말하기';button.setAttribute('aria-pressed',String(hide));}));
  courseRoot.querySelectorAll('[data-practice]').forEach(button=>button.addEventListener('click',()=>{document.getElementById('promptCategory').value='all';state.prompt=Number(button.dataset.practice);renderPrompt();document.getElementById('timerReset').click();location.hash='/practice';}));
}
const studySearchResults=document.createElement('div');studySearchResults.className='global-results';studySearchResults.id='studySearchResults';studySearchResults.hidden=true;q.parentElement.append(studySearchResults);q.setAttribute('aria-controls',studySearchResults.id);
q.addEventListener('input',()=>{
  const term=q.value.trim().toLocaleLowerCase();studySearchResults.hidden=!term;if(!term)return;
  const matches=courseData.lessons.filter(part=>(part.title+' '+part.text).toLocaleLowerCase().includes(term));
  studySearchResults.innerHTML='<div class="search-results-head">학습 자료 검색</div>'+(matches.length?matches.map(part=>'<a href="'+studyHref(part.id)+'"><small>'+studyEscape(studyLabel(part))+'</small><b>'+studyEscape(part.title)+'</b></a>').join(''):'<p>일치하는 학습 자료가 없습니다.</p>');
});
studySearchResults.addEventListener('click',event=>{if(event.target.closest('a'))studySearchResults.hidden=true;});
document.addEventListener('click',event=>{if(!q.parentElement.contains(event.target))studySearchResults.hidden=true;});
document.addEventListener('keydown',event=>{if(event.key==='Escape')studySearchResults.hidden=true;});
window.addEventListener('hashchange',()=>{studySearchResults.hidden=true;renderCourse();});
renderCourse();
