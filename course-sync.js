(function () {
  const course=window.OPIC_COURSE, layout=window.OPIC_STUDY_LAYOUT;
  const lesson=number=>course.lessons.find(item=>Number(item.id.split('-')[1])===number);
  const script=number=>lesson(number).english;
  const pick=layout.pick;
  const exams=window.OPIC_MOCK_EXAMS, practice=window.OPIC_PRACTICE_ANSWERS;
  const set=(targets,answer,number)=>targets.forEach(([examId,question])=>{
    const item=exams.find(exam=>exam.id===`mock-${examId}`)?.questions.find(item=>item.number===question);
    if(!item)throw new Error('Missing mock question '+examId+'/'+question);
    Object.assign(item,{answer,questionOnly:!answer,cues:layout.hints[number]||['이름과 용도','외형','특징','활용'],focus:'질문에 맞춰 답변하기',fixed:false,templateId:undefined,templateName:undefined,lessonId:lesson(number).id});
  });
  const home=pick('장소 묘사 1 & 2','집 — 장소 1');
  const home2=pick('장소 묘사 1 & 2','집 — 장소 2');
  const park=pick('장소 묘사 1 & 2','자주 가는 공원/조깅하는 곳/걷는 곳/하이킹하는 곳 — 장소 1');
  const beach=pick('장소 묘사 1 & 2','자주 가는 해변/국내여행지/해외여행지 — 장소 1');
  const restaurant=pick('장소 묘사 1 & 2','돌발: 자주 가는 음식점 — 장소 1');
  const weather=pick('돌발 — 날씨','기억에 남는 날씨 관련 경험');
  const updates=[
    [home,[[1,2],[4,5],[6,5]]],[home2,[[3,2]]],[park,[[2,5],[10,8]]],
    [beach,[[3,7],[5,2],[6,2],[6,3],[6,4],[8,8]]],
    [restaurant,[[6,8],[9,5]]],[weather,[[1,13],[4,10],[5,4],[8,10]]],
    [pick('돌발 — 날씨','한국의 사계절'),[[4,2]]],
    [pick('돌발 — 날씨','오늘 날씨'),[[4,3]]],
    [pick('돌발 — 날씨','과거와 현재의 날씨'),[[4,4]]],
    [pick('과거·현재 비교 2','Fashion — 문제와 답변'),[[5,7]]],
    [pick('과거·현재 비교 2','Technology — mobile'),[[9,9]]],
    [pick('과거·현재 비교 2','Bank'),[[8,4]]],
    [pick('과거·현재 비교 2','Recycling'),[[7,13]]],
    [pick('사회 이슈','식품 오염'),[[2,15]]],
    [pick('사회 이슈','하우징 이슈'),[[8,15]]],
    [pick('사회 이슈','친구들과 이야기하는 영화 이슈'),[[1,7],[9,4]]],
    [pick('사회 이슈','이웃 국가와 관련된 뉴스'),[[6,14],[6,15]]],
    [pick('사회 이슈','여행의 이슈'),[[7,15]]],
    [pick('롤플레이 — 차 렌트','렌터카 업체에 질문하기'),[[9,11]]],
    [pick('롤플레이 — 차 렌트','차를 렌트했던 경험'),[[9,13]]]
  ];
  updates.forEach(([number,targets])=>set(targets,script(number),number));
  const homeChange='My home has changed a great deal over the years. In the past, there were only a few simple rooms.\n\n'+script(home);
  set([[1,4],[3,4]],homeChange,home);
  // These topics now contain questions only; do not resurrect yesterday's invented examples.
  set([[2,13],[9,8]],'',pick('사물 묘사 문제','Technology'));
  set([[10,14],[10,15]],'',pick('사물 묘사 문제','Housing'));

  const friend = `The person I would like to talk about is my best friend, John.\n\nWe first met in the same class in middle school. We walked to and from school together, which helped us become close.\n\nHe is tall and good-looking, and he has a great sense of fashion.\n\nMore importantly, he is the best listener among the people I know. Whenever I have a problem, he listens carefully and helps me clear my head.\n\nThat is why he is such a special friend to me.`;
  set([[10,5]], friend, 29);
  const music = `I enjoy a variety of music, including classical music, opera, rap, pop, and jazz. My favorite singer is John.\n\nI first saw him on television when I was in middle school, and his songs comforted me during my school years. He is tall and good-looking, and he has a great sense of fashion.\n\nPersonally, I think he is one of the best singers in Korea. His performances always leave a lasting impression.\n\nThat is why I have been interested in his music for such a long time.`;
  set([[2,2],[5,8],[7,5]], music, 29);
  set([[2,3]],`I have enjoyed listening to music for many years, and I listen to it on a daily basis.\n\nTo be specific, I often listen to the radio when I am at home. I also use my smartphone to listen to music while traveling.\n\nMoreover, I enjoy going to concerts. The venue I visit has stages, high-quality sound systems, and comfortable seats, which are important for a music lover like me.\n\nLastly, listening to music helps me clear my head and take my mind off things. That is why it has become part of my daily routine.`,26);
  const concert=`Um… let me see… the time I went to the concert with my family… Well… as far as I remember, it was about a year ago. It was held by ABC, one of the most popular singers in Korea.\n\nThe concert venue had a large stage, high-quality sound systems, and comfortable seats. We were blown away by the powerful performance and really soaked up the atmosphere.\n\nI had listened to the songs before, but hearing them live was much more impressive than I had expected.\n\nWe had a blast, and the concert left a lasting impression on all of us. That is why I still remember that experience.`;
  set([[5,10],[7,7]],concert,3);practice[31]=concert;
  const origin = `Listening to music is a hobby I have enjoyed since childhood.\n\nWhen I was in middle school, my parents were busy, so I often spent time alone. On my birthday, they suggested going to a concert together.\n\nI had such a wonderful time that I became interested in music. Back then, I mostly listened to classical music.\n\nNowadays, I enjoy a wider range of genres, including opera, rap, pop, and jazz. Music has helped me clear my head ever since.\n\nThat is how my interest started and how my taste has changed.`;
  set([[2,4],[5,9],[7,6]], origin, 30);
  const parkOrigin=`Going to parks is a hobby I have enjoyed since childhood.\n\nWhen I was in middle school, my parents were busy, so I often spent time alone. On my birthday, they suggested going to a park together.\n\nWe walked along the trails and spent a wonderful afternoon together, which made me feel much closer to them.\n\nSince then, I have been interested in visiting parks. Walking outside helps me clear my head and feel relaxed.\n\nThat is how this hobby started.`;
  set([[10,9]], parkOrigin, 30);

  const practiceLinks={
    0:park,1:home2,2:home,3:restaurant,5:29,6:pick('사물 묘사 문제','Music'),7:beach,8:beach,
    16:30,22:30,23:pick('돌발 — 날씨','과거와 현재의 날씨'),25:weather,
    29:pick('돌발 — 대중교통','교통 문제 경험'),31:3,32:park,
    33:pick('사물 묘사 문제','Hiking'),42:pick('과거·현재 비교 2','Health'),
    45:pick('돌발 — 대중교통','어린 시절과 현재 비교')
  };
  Object.entries(practiceLinks).forEach(([index,number])=>{if(number>1000)practice[index]=script(number);});
  practice[2]=homeChange;practice[5]=music;practice[16]=origin;
  practice[22]=parkOrigin.replaceAll('Going to parks','Hiking').replaceAll('going to a park','going hiking').replaceAll('visiting parks','hiking');
  window.OPIC_COURSE_PRACTICE_LINKS=practiceLinks;
  Object.keys(practiceLinks).forEach(index=>{if(window.OPIC_PRACTICE_META)delete window.OPIC_PRACTICE_META[index];});

  const questionFor=part=>{
    if(part.questions.length)return part.questions;
    const section=part.path[1];
    if(section==='돌발 — 날씨'||section==='돌발 — 대중교통'){
      const entries=course.lessons.filter(item=>item.path[1]===section),index=entries.filter(item=>item.english).indexOf(part);
      return [entries.find(item=>item.questions.length).questions[index]];
    }
    if(section==='장소 묘사 1 & 2'){
      if(part.title.startsWith('집 —'))return lesson(pick(section,'집 — 문제')).questions;
      const place=part.title.includes('극장')?'movie theater':part.title.includes('공원')?'park':part.title.includes('해변')?'beach':part.title.includes('음식점')?'restaurant':'hair salon';
      return [`Describe a ${place} you visit regularly. What is it like, and why do you go there?`];
    }
    const existing={Bank:[8,4],'Technology — mobile':[9,9],Recycling:[7,13]};
    if(existing[part.title]){const [e,n]=existing[part.title];return [exams.find(item=>item.id===`mock-${e}`).questions.find(item=>item.number===n).question];}
    if(part.title==='Health')return ['How have the ways people take care of their health changed over time?'];
    if(part.title==='Weather')return lesson(pick('돌발 — 날씨','예시 문제')).questions.slice(3,4);
    if(section==='사회 이슈')return ['What problems do parks and beaches face? Explain the causes, results, and responses.'];
    return [];
  };
  const lectureType=part=>part.group==='roleplay'?['roleplayAsk','roleplaySolve','roleplayExperience'][layout.scenarios.find(scene=>scene.parts.includes(Number(part.id.split('-')[1]))).parts.indexOf(Number(part.id.split('-')[1]))]:part.path[1]==='사물 묘사 문제'?'objectDescription':part.path[1]==='장소 묘사 1 & 2'?part.title.endsWith('2')?'placeDescription2':'placeDescription1':part.path[1]==='과거·현재 비교 2'||/과거와 현재|어린 시절/.test(part.title)?'pastPresent2':part.path[1]==='비교·대조'?'compareContrast':part.path[1]==='사회 이슈'?'socialIssue':/경험/.test(part.title)?'badExperience':/인기 활동/.test(part.title)?'activityDescription':/내가 이용/.test(part.title)?'reasonOpinion':'detailDescription';
  window.OPIC_COURSE_PRACTICE=course.lessons.filter(part=>Number(part.id.split('-')[1])>1000 && (part.english || part.path[1]==='사물 묘사 문제')).flatMap(part=>questionFor(part).map(en=>({
    year:'종합정리',type:part.group==='roleplay'?'roleplay':part.path[1]==='장소 묘사 1 & 2'?'combo':'random',
    tag:part.path[1]+' · '+part.title,en,kr:part.title,lessonId:part.id,lectureType:lectureType(part),
    answer:part.english,questionOnly:!part.english,tips:layout.hints[Number(part.id.split('-')[1])]||['이름과 용도','외형','특징','활용']
  })));
  exams.forEach(exam=>exam.questions.forEach(item=>{const part=course.lessons.find(part=>part.id===item.lessonId);if(part&&Number(part.id.split('-')[1])>1000)item.lectureType=lectureType(part);}));
  window.OPIC_COURSE_TEMPLATES=course.lessons.filter(part=>part.group==='flow').map((part,index)=>({
    id:part.id,lessonId:part.id,number:String(index+1).padStart(2,'0'),title:part.title,
    category:/롤플레이/.test(part.title)?'roleplay':/비교/.test(part.title)?'compare':/경험|계기/.test(part.title)?'experience':/묘사/.test(part.title)?'describe':'opinion',
    types:part.title,use:'답변 순서에 맞춰 주제와 소재를 바꾸어 말하세요.',script:part.text
  }));
  const examples=[pick('장소 묘사 1 & 2','자주 가는 극장 — 장소 1'),pick('장소 묘사 1 & 2','자주 가는 극장 — 장소 2'),pick('과거·현재 비교 2','Bank'),pick('비교·대조','International travel'),pick('사회 이슈','식품 오염'),...layout.scenarios[0].parts];
  examples.forEach(number=>{const part=lesson(number),type=lectureType(part);window.OPIC_COURSE_TEMPLATES.push({id:part.id,lessonId:part.id,number:'예문',title:part.path.slice(-2).join(' · '),category:part.group==='roleplay'?'roleplay':/pastPresent|compareContrast/.test(type)?'compare':type==='socialIssue'?'opinion':'describe',types:part.path[1],use:'주제별 답변 예문',script:part.english});});
})();
