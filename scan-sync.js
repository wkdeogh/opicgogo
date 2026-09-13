(function(){
  const scan=window.OPIC_SCAN,course=window.OPIC_COURSE,layout=window.OPIC_STUDY_LAYOUT;
  let sequence=2000;
  const newGroups={experience:'경험',detail:'세부사항',reason:'이유',travel:'여행 종합',scenarios:'롤플레이 문제'};
  const number=part=>Number(part.id.split('-')[1]);
  function create(entry){
    const id='lesson-'+(++sequence),blocks=[];
    for(const text of entry.questions||[])blocks.push({kind:'line',role:'question',text});
    if(entry.kind==='expressions')for(const line of entry.text.split('\n')){const [prompt,answer]=line.split(' → ');blocks.push({kind:'recall',prompt:answer,answers:[prompt]});}
    else if(entry.kind==='script')blocks.push({kind:'line',role:'answer',text:entry.text});
    else for(const text of (entry.text||'').split('\n').filter(Boolean))blocks.push({kind:'line',role:'note',text});
    const part={id,title:entry.title,path:['교재스캔',entry.section,entry.title],group:'scan',questions:entry.questions||[],english:entry.kind==='script'?entry.text:'',text:[entry.title,...(entry.questions||[]),entry.text||''].join('\n'),blocks,scanPage:entry.page,scanId:entry.id};
    course.lessons.push(part);
    if(entry.cues)layout.hints[number(part)]=entry.cues;
    return part;
  }
  function practice(part,stage){
    const type={change:part.scanId==='hiking-change'?'pastPresent1':'pastPresent2',activity:'activityDescription',compare:'compareContrast',reason:'reasonOpinion',detail:'detailDescription',experience:'specificExperience'}[part.path[1]?.split('/')[1]]||'detailDescription';
    part.questions.forEach(en=>window.OPIC_COURSE_PRACTICE.push({year:'교재',type:stage?'roleplay':'random',tag:part.title,en,kr:part.title,lessonId:part.id,lectureType:stage==='문제 해결하기'?'roleplaySolve':stage==='관련 경험'?'roleplayExperience':stage?'roleplayAsk':type,answer:part.english,questionOnly:!part.english,tips:layout.hints[number(part)]||[]}));
  }
  for(const entry of scan.additions){
    if(entry.target){
      const part=course.lessons.find(p=>number(p)===entry.target);
      if(part.english)throw new Error('Scan must not replace an existing answer: '+part.id);
      part.blocks.push({kind:'line',role:entry.kind==='script'?'answer':'note',text:entry.text});part.text+='\n'+entry.text;part.scanPage=entry.page;
      if(entry.kind==='script'){
        part.english=entry.text;layout.hints[entry.target]=entry.cues;
        window.OPIC_COURSE_PRACTICE.filter(p=>p.lessonId===part.id).forEach(p=>Object.assign(p,{answer:entry.text,questionOnly:false,tips:entry.cues}));
        // A previously empty hiking answer can now use the actual scanned script.
        if(entry.target===1007)window.OPIC_PRACTICE_ANSWERS[33]=entry.text;
      }
      continue;
    }
    const [view,groupId]=entry.section.split('/');
    let group=layout[view].find(g=>g.id===groupId);
    if(!group){group={id:groupId,title:newGroups[groupId]||'이유 표현',parts:[]};layout[view].push(group);}
    const part=create(entry);group.parts.push(number(part));
    if(entry.kind==='template')window.OPIC_COURSE_TEMPLATES.push({id:part.id,lessonId:part.id,number:'교재',title:part.title,category:groupId==='roleplay'?'roleplay':['compare','change'].includes(groupId)?'compare':groupId==='reason'||groupId==='issue'?'opinion':'describe',types:group.title,use:'빈칸에 자신의 내용을 넣어 말하세요.',script:entry.text});
    if(entry.kind==='script')practice(part);
    else if(entry.questions.length)practice(part);
  }
  const questionGroup={id:'scenarios',title:'롤플레이 문제',parts:[]};layout.scripts.push(questionGroup);
  layout.scanScenarios=scan.roleplaySets.map(set=>({id:set.id,title:set.title,parts:set.questions.map((question,index)=>{
    const stage=(set.stages[index]||['질문하기','문제 해결하기','관련 경험'][index]||'질문하기').split(' · ')[0];
    const pageOverride=set.stages[index]?.match(/PDF (\d+)쪽/);
    const part=create({id:set.id+'-'+index,page:pageOverride?Number(pageOverride[1]):set.page,title:set.title+' · '+stage,section:'scripts/scenarios',questions:[question]});
    const mode=['cancel-outing','walking','flight-cancelled','travel-dates'].includes(set.id)?'문제 해결하기':set.id==='eva'||set.id==='booking'?'질문하기':stage;
    questionGroup.parts.push(number(part));practice(part,mode);return number(part);
  })}));
  const selectedCues={
    'weather-experience':['2~3년 전 동탄 해변','아내와 물놀이','홍수 경보와 도로 침수','젖은 옷으로 귀가'],
    'concert-stage':['가족과 ABC 콘서트','가수가 무대로 부름','관객 앞에서 노래','음이탈한 기억'],
    'house-repair':['7년 전 이사','벗겨지고 변색된 페인트','아내와 8시간 재도색','달라진 집 분위기'],
    'hiking-injury':['2~3개월 전 동탄산','친구들과 하이킹','발목 부상과 병원','한 달 깁스와 주의'],
    'subway-reason':['지하철','저렴한 요금','교통비 부담','교통체증을 피함'],
    'travel-new-zealand':['New Zealand','맑은 날씨','야외 활동','산과 해변 경치'],
    'industry-employment':['IT 산업','반도체·디스플레이','Samsung·LG','미래·평판·복리후생'],
    recliner:['리클라이너','높이 조절','품질과 색상','마사지 기능'],
    'cancel-movie-experience':['한 달 전 영화 약속','심한 감기','영화 취소','나중에 저녁 식사'],
    'hotel-booking':['다음 주말 2박','더블룸과 총요금','조식·Wi-Fi','취소 규정'],
    'hotel-problem':['좁고 더러운 객실','즉시 객실 교체','업그레이드 또는 할인','환불'],
    'hotel-experience':['1년 전 발리','결혼 20주년','옆방 소음','오션뷰 객실로 변경']
  };
  const hotel=[];
  for(const entry of scan.selections){
    const cues=selectedCues[entry.id],id='lesson-'+entry.number;
    let part=course.lessons.find(p=>p.id===id);
    const oldAnswer=part?.english;
    if(part){
      part.blocks=part.blocks.filter(b=>b.role!=='answer');
      if(!part.questions.length){part.questions=entry.questions;part.blocks.unshift(...entry.questions.map(text=>({kind:'line',role:'question',text})));}
      part.blocks.push({kind:'line',role:'answer',text:entry.text});
      part.english=entry.text;part.text=part.blocks.map(b=>b.text||'').join('\n');
      delete part.html;part.scanId=entry.id;part.scanPage=entry.page;
    }else{
      sequence=entry.number-1;part=create(entry);
      layout.scripts.find(g=>g.id===entry.section.split('/')[1]).parts.push(entry.number);
      practice(part,entry.id==='hotel-booking'?'질문하기':entry.id==='hotel-problem'?'문제 해결하기':entry.id==='hotel-experience'?'관련 경험':undefined);
    }
    layout.hints[entry.number]=cues;
    const linkedPractice=new Set(entry.practice||[]);
    for(const [index,n] of Object.entries(window.OPIC_COURSE_PRACTICE_LINKS))if(n===entry.number)linkedPractice.add(Number(index));
    linkedPractice.forEach(index=>{
      window.OPIC_PRACTICE_ANSWERS[index]=entry.text;
      window.OPIC_COURSE_PRACTICE_LINKS[index]=entry.number;
      if(window.OPIC_PRACTICE_META)delete window.OPIC_PRACTICE_META[index];
    });
    window.OPIC_COURSE_PRACTICE.filter(p=>p.lessonId===id).forEach(p=>Object.assign(p,{answer:entry.text,questionOnly:false,tips:cues}));
    for(const exam of window.OPIC_MOCK_EXAMS)for(const q of exam.questions){
      const explicit=entry.mocks?.some(([e,n])=>exam.id==='mock-'+e&&q.number===n);
      if(explicit||(oldAnswer&&q.answer===oldAnswer))Object.assign(q,{answer:entry.text,lessonId:id,cues,questionOnly:false,fixed:false,templateId:undefined,templateName:undefined,focus:'질문에 맞춰 답변하기'});
    }
    window.OPIC_COURSE_TEMPLATES.filter(t=>t.lessonId===id&&oldAnswer&&t.script===oldAnswer).forEach(t=>{t.script=entry.text;});
    if(entry.id.startsWith('hotel-'))hotel.push(entry.number);
    if(entry.opening){
      const appliance=course.lessons.find(p=>p.id==='lesson-1008');
      appliance.blocks.push({kind:'line',role:'note',text:entry.opening});
      appliance.text+='\n'+entry.opening;appliance.scanPage=entry.page;
    }
  }
  layout.scenarios.push({id:'hotel',title:'호텔',parts:hotel});
  // The Korean beach example is a domestic destination, not an overseas answer.
  for(const n of [1014,1015]){
    const part=course.lessons.find(p=>number(p)===n);
    part.title=part.title.replace('/해외여행지','');
    part.path=part.path.map(s=>s.replace('/해외여행지',''));
    window.OPIC_COURSE_PRACTICE.filter(p=>p.lessonId===part.id).forEach(p=>{p.tag=p.tag.replace('/해외여행지','');p.kr=p.kr.replace('/해외여행지','');});
  }
})();
