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
})();
