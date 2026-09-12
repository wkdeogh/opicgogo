const courseData = window.OPIC_COURSE;
const courseRoot = document.getElementById('course');
const courseEscape = value => String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function readCourseProgress() {
  try {
    const saved=JSON.parse(localStorage.getItem('opicCourseProgress')||'{}');
    return {done:Array.isArray(saved.done)?saved.done:[],stars:Array.isArray(saved.stars)?saved.stars:[],last:typeof saved.last==='string'?saved.last:null};
  } catch { return {done:[],stars:[],last:null}; }
}
const courseProgress=readCourseProgress();
let courseMode='read', courseFilter='all', courseTerm='';
function saveCourseProgress() {
  try { localStorage.setItem('opicCourseProgress',JSON.stringify(courseProgress)); }
  catch { const status=document.getElementById('courseStatus');if(status)status.textContent='기기 저장 공간을 사용할 수 없어 이번 학습 중에만 기록됩니다.'; }
  renderCourseResume();
}
function lessonLabel(item) {
  const parent=item.path.at(-2);
  return parent && parent!==item.title && !['문장력 올리기','OPIc 시험 개요와 전략','유형별 실전 문제와 답변 스크립트','문제 유형과 아이디어 정리','문장 구조','실전에서 바로 바꿔 끼우는 표현'].includes(parent)?`${parent} · ${item.title}`:item.title;
}
function renderCourseResume() {
  const target=courseData.lessons.find(l=>l.id===courseProgress.last) || courseData.lessons.find(l=>!courseProgress.done.includes(l.id)) || courseData.lessons[0];
  document.getElementById('courseResume').innerHTML=`<div><span class="priority-badge">나의 학습</span><h2>한 단원씩, 말할 수 있을 때까지</h2><p>${courseProgress.done.length} / ${courseData.lessons.length} 단원 완료</p><progress max="${courseData.lessons.length}" value="${courseProgress.done.length}" aria-label="전체 단원 학습 진도"></progress></div><a class="course-button primary" href="#/course/${target.id}">${courseProgress.last?'이어서 학습':'학습 시작'} →</a>`;
}
function courseRoute() {
  const parts=location.hash.replace(/^#\/?/,'').split('/');
  const aliases={strategy:'strategy','al-core':'strategy',answer:'flow',patterns:'patterns',vocab:'lesson-044',idioms:'lesson-041',examples:'patterns',misc:'lesson-045',connectives:'lesson-042',fillers:'lesson-043'};
  return parts[0]==='course'?(parts[1]||'all'):(aliases[parts[0]]||'all');
}
function renderCourse() {
  const route=courseRoute(), item=courseData.lessons.find(l=>l.id===route);
  if (item) { renderLesson(item); return; }
  const group=courseData.groups.find(g=>g.id===route);
  courseRoot.innerHTML=`<div class="section-head"><div><span class="priority-badge">${courseData.lessons.length}개 단원 · ${courseData.quizzes.length}개 회상 문제</span><h2>${group?group.title:'전체 학습'}</h2><p class="desc">${group?group.description:'전략과 답변 구조를 익히고, 표현을 떠올리며 소리 내어 말하세요.'}</p></div></div>
    <nav class="course-tabs" aria-label="학습 영역"><a href="#/course"${!group?' aria-current="page"':''}>전체</a>${courseData.groups.map(g=>`<a href="#/course/${g.id}"${group?.id===g.id?' aria-current="page"':''}>${g.title}</a>`).join('')}</nav>
    <div class="course-controls"><input id="courseSearch" type="search" placeholder="단원·표현·예문 검색" aria-label="단원 검색" value="${courseEscape(courseTerm)}"><select id="courseFilter" aria-label="학습 상태"><option value="all">전체 단원</option><option value="remaining">아직 학습하지 않은 단원</option><option value="starred">즐겨찾기</option><option value="done">학습 완료</option></select></div><p id="courseCount" class="mini" role="status"></p><div id="courseList"></div><p id="courseStatus" role="status"></p>`;
  document.getElementById('courseFilter').value=courseFilter;
  const renderList=()=>{
    const term=courseTerm.toLocaleLowerCase();
    const filtered=courseData.lessons.filter(l=>(!group||l.group===group.id)&&(!term||(l.path.join(' ')+' '+l.text).toLocaleLowerCase().includes(term))&&(courseFilter==='all'||courseFilter==='remaining'&&!courseProgress.done.includes(l.id)||courseFilter==='done'&&courseProgress.done.includes(l.id)||courseFilter==='starred'&&courseProgress.stars.includes(l.id)));
    document.getElementById('courseCount').textContent=`${filtered.length}개 단원`;
    document.getElementById('courseList').innerHTML=filtered.length?courseData.groups.map(g=>{
      const items=filtered.filter(l=>l.group===g.id);
      if (!items.length) return '';
      return `<div class="course-group"><h3>${g.title}</h3><div class="lesson-grid">${items.map(l=>`<a class="lesson-card" href="#/course/${l.id}"><span class="lesson-meta">${courseProgress.done.includes(l.id)?'✓ 학습 완료':String(courseData.lessons.indexOf(l)+1).padStart(2,'0')}${courseProgress.stars.includes(l.id)?' · ★':''}</span><b>${courseEscape(lessonLabel(l))}</b><span>${l.blocks.filter(b=>b.kind==='recall').length?l.blocks.filter(b=>b.kind==='recall').length+'개 회상 연습':l.english.length>250?'스크립트 · 말하기':'개념 · 답변 소재'}</span></a>`).join('')}</div></div>`;
    }).join(''):'<div class="course-empty">해당하는 단원이 없습니다. 검색어나 학습 상태를 바꿔 보세요.</div>';
  };
  document.getElementById('courseSearch').addEventListener('input',event=>{courseTerm=event.target.value;renderList()});
  document.getElementById('courseFilter').addEventListener('change',event=>{courseFilter=event.target.value;renderList()});
  renderList();
}
function renderLesson(item) {
  courseProgress.last=item.id; saveCourseProgress();
  const index=courseData.lessons.indexOf(item), group=courseData.groups.find(g=>g.id===item.group);
  const speech=item.blocks.flatMap(b=>b.kind==='recall'?b.answers: b.kind==='line'?[b.text]:[]).map(t=>t.replace(/\\([\[\]*_~.!&])/g,'$1').replace(/\*\*/g,'').replace(/^→\s*/,'').replace(/^\* /,'')).filter(t=>!/[가-힣]/.test(t)&&/[a-z]{2}/i.test(t)).join('\n');
  const practiceIndex=prompts.findIndex(p=>p.lessonId===item.id);
  const quiz=courseData.quizzes.find(q=>q.lessonId===item.id);
  courseRoot.innerHTML=`<a class="course-back" href="#/course/${group.id}">← ${group.title}</a><div class="lesson-header"><div><span class="lesson-meta">${index+1} / ${courseData.lessons.length}</span><h2 tabindex="-1" id="lessonTitle">${courseEscape(lessonLabel(item))}</h2></div><button class="course-button" id="lessonStar" aria-label="단원 즐겨찾기" aria-pressed="${courseProgress.stars.includes(item.id)}">${courseProgress.stars.includes(item.id)?'★':'☆'}</button></div>
    <div class="lesson-toolbar"><div class="course-segment" aria-label="학습 모드"><button data-course-mode="read" aria-pressed="${courseMode==='read'}">전체 보기</button><button data-course-mode="recall" aria-pressed="${courseMode==='recall'}">회상 연습</button></div>${speech?'<button class="course-button" id="lessonSpeak" aria-pressed="false">▶ 영어 듣기</button>':''}${practiceIndex>=0?'<button class="course-button" id="lessonPractice">말하기 연습 →</button>':''}${quiz?'<button class="course-button" id="lessonQuiz">퀴즈 풀기 →</button>':''}</div>
    <article class="lesson-content" id="lessonContent" aria-label="학습 내용">${item.html}</article>
    <div class="lesson-bottom"><button id="lessonDone" class="course-button primary" aria-pressed="${courseProgress.done.includes(item.id)}">${courseProgress.done.includes(item.id)?'✓ 학습 완료':'학습 완료 표시'}</button><div>${index>0?`<a class="course-button" href="#/course/${courseData.lessons[index-1].id}" aria-label="이전 단원">← 이전</a>`:''}${index<courseData.lessons.length-1?`<a class="course-button" href="#/course/${courseData.lessons[index+1].id}" aria-label="다음 단원">다음 →</a>`:'<a class="course-button" href="#/course">전체 학습 →</a>'}</div></div><p id="courseStatus" role="status"></p>`;
  const setMode=mode=>{
    courseMode=mode;
    const content=document.getElementById('lessonContent');
    content.innerHTML=item.html;
    content.querySelectorAll('.recall').forEach(el=>el.open=mode==='read');
    if(mode==='recall') content.querySelectorAll('.english-line').forEach(el=>{
      if(el.textContent.split(' ').length<6)return;
      const details=document.createElement('details'),summary=document.createElement('summary');
      details.className='recall script-recall';summary.textContent=el.textContent.split(' ').slice(0,4).join(' ')+' …';
      details.append(summary);el.replaceWith(details);details.append(el);
    });
    if(mode==='recall') content.querySelectorAll('tbody tr').forEach(row=>{
      [...row.cells].slice(1).forEach(cell=>{const details=document.createElement('details'),summary=document.createElement('summary'),body=document.createElement('div');summary.textContent='정답 보기';body.innerHTML=cell.innerHTML;details.append(summary,body);cell.replaceChildren(details)});
    });
    document.querySelectorAll('[data-course-mode]').forEach(b=>b.setAttribute('aria-pressed',String(b.dataset.courseMode===mode)));
  };
  document.querySelectorAll('[data-course-mode]').forEach(b=>b.addEventListener('click',()=>setMode(b.dataset.courseMode)));
  setMode(courseMode);
  document.getElementById('lessonStar').addEventListener('click',event=>{
    courseProgress.stars=courseProgress.stars.includes(item.id)?courseProgress.stars.filter(id=>id!==item.id):[...courseProgress.stars,item.id];
    event.currentTarget.textContent=courseProgress.stars.includes(item.id)?'★':'☆';event.currentTarget.setAttribute('aria-pressed',String(courseProgress.stars.includes(item.id)));saveCourseProgress();
  });
  document.getElementById('lessonDone').addEventListener('click',event=>{
    courseProgress.done=courseProgress.done.includes(item.id)?courseProgress.done.filter(id=>id!==item.id):[...courseProgress.done,item.id];
    event.currentTarget.textContent=courseProgress.done.includes(item.id)?'✓ 학습 완료':'학습 완료 표시';event.currentTarget.setAttribute('aria-pressed',String(courseProgress.done.includes(item.id)));saveCourseProgress();
  });
  document.getElementById('lessonSpeak')?.addEventListener('click',event=>{if(!toggleSpeech(event.currentTarget,speech))document.getElementById('courseStatus').textContent='이 브라우저는 음성 읽기를 지원하지 않습니다.'});
  document.getElementById('lessonPractice')?.addEventListener('click',()=>{state.prompt=practiceIndex;renderPrompt();location.hash='/practice'});
  document.getElementById('lessonQuiz')?.addEventListener('click',()=>{
    const select=document.getElementById('quizMode');
    select.querySelector('[data-lesson-option]')?.remove();
    const option=document.createElement('option');option.value=item.id;option.textContent=item.title;option.dataset.lessonOption='true';select.append(option);select.value=item.id;
    state.currentQuiz=null;pickQuiz();location.hash='/quiz';
  });
}
function renderGlobalSearch() {
  const term=q.value.trim().toLocaleLowerCase(), output=document.getElementById('globalResults');
  output.hidden=!term;
  if(!term){output.innerHTML='';return}
  const lessons=courseData.lessons.filter(l=>(l.path.join(' ')+' '+l.text).toLocaleLowerCase().includes(term));
  const questions=typeItems.filter(l=>(l.question+' '+l.kr+' '+l.answer+' '+l.searchAliases).toLocaleLowerCase().includes(term));
  output.innerHTML=`<div class="search-results-head"><b>학습 ${lessons.length} · 문제 ${questions.length}</b><button type="button" id="closeSearch" aria-label="검색 결과 닫기">✕</button></div>${lessons.slice(0,30).map(l=>`<a href="#/course/${l.id}"><small>${courseData.groups.find(g=>g.id===l.group).title}</small><b>${courseEscape(lessonLabel(l))}</b></a>`).join('')}${questions.length?'<a href="#/types" id="searchQuestions"><b>일치하는 문제 모두 보기 →</b></a>':''}${lessons.length>30?'<a href="#/course" id="searchAllLessons"><b>일치하는 단원 모두 보기 →</b></a>':''}${!lessons.length&&!questions.length?'<p>검색 결과가 없습니다.</p>':''}`;
  document.getElementById('closeSearch').addEventListener('click',()=>{q.value='';output.hidden=true});
  document.getElementById('searchQuestions')?.addEventListener('click',()=>{document.getElementById('typeSearch').value=term;renderTypeBrowser()});
  document.getElementById('searchAllLessons')?.addEventListener('click',()=>{courseTerm=term;courseFilter='all';renderCourse()});
  output.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{output.hidden=true;q.value=''}));
}
q.addEventListener('input',renderGlobalSearch);
document.addEventListener('keydown',event=>{if(event.key==='Escape')document.getElementById('globalResults').hidden=true});
document.addEventListener('click',event=>{if(!event.target.closest('.search'))document.getElementById('globalResults').hidden=true});
window.addEventListener('hashchange',()=>{document.getElementById('globalResults').hidden=true;if(!courseRoot.classList.contains('route-hidden'))renderCourse()});
renderCourseResume();
document.querySelectorAll('[data-course-count]').forEach(el=>el.textContent=courseData.lessons.length);
document.querySelectorAll('[data-recall-count]').forEach(el=>el.textContent=courseData.quizzes.length);
if(!courseRoot.classList.contains('route-hidden'))renderCourse();
