(function () {
  const course = window.OPIC_COURSE;
  const lesson = number => course.lessons.find(item => item.id === `lesson-${String(number).padStart(3, '0')}`);
  const script = number => lesson(number).english;
  const exams = window.OPIC_MOCK_EXAMS;
  const practice = window.OPIC_PRACTICE_ANSWERS;
  const set = (targets, answer, number) => targets.forEach(([examId, question]) => {
    const item = exams.find(exam => exam.id === `mock-${examId}`)?.questions.find(item => item.number === question);
    if (!item) return;
    Object.assign(item, {answer, cues:answer.split('\n\n').map(line => line.split(' ').slice(0, 7).join(' ') + '…'), focus:'핵심 문장과 소재를 바꾸어 60~90초로 말하기', fixed:false, templateId:undefined, templateName:undefined, lessonId:lesson(number).id});
  });
  const updates = [
    [56, [[1,2],[3,2],[4,5],[6,5]]], [55, [[2,5],[10,8]]],
    [74, [[4,2]]], [73, [[4,3]]], [60, [[5,7]]], [61, [[9,9]]],
    [71, [[8,15]]], [87, [[9,11]]], [89, [[9,13]]]
  ];
  updates.forEach(([number, targets]) => set(targets, script(number), number));
  const beach = `When it comes to the beach I visit on a regular basis, it is Jebudo Beach.\n\nIts most striking feature is its wide white-sand beach. There are umbrellas, folding chairs, and cafes where visitors can relax.\n\nI usually go there with my wife to take walks and enjoy the view. It helps me blow off steam and get away from it all.\n\nI have visited it several times, and I still think it is one of the most relaxing places I know. That is why I prefer it.`;
  set([[5,2],[6,2],[6,3],[8,8]], beach, 54);
  set([[3,7]],'The natural place I visited was Jebudo Beach, which has a wide white-sand beach.\n\n'+script(76),76);
  set([[1,13],[5,4],[6,4],[8,10]], script(76), 76);
  set([[4,10]],script(76).replace('went to the beach','went to the beach during an overseas trip'),76);
  const homeChange=`My home has changed a great deal over the years.\n\nIn the past, the home I lived in had only a few simple rooms, and there were fewer useful facilities nearby.\n\nNowadays, I live in a studio apartment in Suwon. Although it is small, the space is used much more efficiently. There is a bedroom area, a kitchen, a bathroom, a desk, and enough storage space.\n\nThe location is also more convenient because stores, restaurants, and public transportation are close by.\n\nRecently, I spent a quiet evening watching a movie there, which helped me feel relaxed. Overall, my home is much more practical for my daily life now.`;
  set([[1,4],[3,4]],homeChange,18);
  const friend = `The person I would like to talk about is my best friend, John.\n\nWe first met in the same class in middle school. We walked to and from school together, which helped us become close.\n\nHe is tall and good-looking, and he has a great sense of fashion.\n\nMore importantly, he is the best listener among the people I know. Whenever I have a problem, he listens carefully and helps me clear my head.\n\nThat is why he is such a special friend to me.`;
  set([[10,5]], friend, 29);
  const music = `I enjoy a variety of music, including classical music, opera, rap, pop, and jazz. My favorite singer is John.\n\nI first saw him on television when I was in middle school, and his songs comforted me during my school years. He is tall and good-looking, and he has a great sense of fashion.\n\nPersonally, I think he is one of the best singers in Korea. His performances always leave a lasting impression.\n\nThat is why I have been interested in his music for such a long time.`;
  set([[2,2],[5,8],[7,5]], music, 29);
  set([[2,3]],`I have enjoyed listening to music for many years, and I listen to it on a daily basis.\n\nTo be specific, I often listen to the radio when I am at home. I also use my smartphone to listen to music while traveling.\n\nMoreover, I enjoy going to concerts. The venue I visit has stages, high-quality sound systems, and comfortable seats, which are important for a music lover like me.\n\nLastly, listening to music helps me clear my head and take my mind off things. That is why it has become part of my daily routine.`,26);
  const concert=`Um… let me see… the time I went to the concert with my family… Well… as far as I remember, it was about a year ago. It was held by ABC, one of the most popular singers in Korea.\n\nThe concert venue had a large stage, high-quality sound systems, and comfortable seats. We were blown away by the powerful performance and really soaked up the atmosphere.\n\nI had listened to the songs before, but hearing them live was much more impressive than I had expected.\n\nWe had a blast, and the concert left a lasting impression on all of us. That is why I still remember that experience.`;
  set([[5,10],[7,7]],concert,3);practice[31]=concert;
  set([[1,7],[9,4]],`One issue I remember reading about was an actor's misconduct scandal.\n\nThe actor was involved in a movie that was still being filmed, so the news attracted a lot of attention.\n\nThis led the company to suspend production, and the movie's release ended up being delayed. The other people working on the movie were affected as well.\n\nIn response, the production company strengthened its contracts and management procedures.\n\nI found the story memorable because one person's actions could affect an entire production.`,68);
  set([[2,15]],`One food-safety issue I remember hearing about was a bacterial infection caused by raw seafood.\n\nSome people ate seafood that had not been cooked thoroughly and became ill afterward. This led them to seek medical treatment and caused concern among other customers.\n\nIn response, the government warned people to cook seafood thoroughly before eating it.\n\nThe story reminded me that food needs to be handled carefully. Since then, I have paid more attention to how seafood is prepared.`,68);
  set([[6,14],[6,15]],`One event that affected the relationship between Korea and a neighboring country was the introduction of export restrictions.\n\nThe restrictions were caused by a diplomatic conflict, and they affected companies that depended on imported materials.\n\nThis led some businesses to experience supply problems and production delays. As a result, they started looking for different suppliers.\n\nTo deal with the issue, the government supported domestic production and helped companies diversify their supply chains.\n\nIt reminded me that relations between countries can have a direct effect on businesses and everyday life.`,68);
  set([[7,15]],`One concern people discuss when traveling is safety, especially the risk of robbery.\n\nTourists who carry a large amount of cash can become easy targets because they are unfamiliar with the area. This can lead them to lose their money and have difficulty continuing their trip.\n\nTo deal with the problem, travelers try to carry less cash and check travel alerts before leaving. Governments also provide information about areas where visitors need to be careful.\n\nPersonally, I think preparing for these risks is an important part of planning a trip.`,68);
  const origin = `Listening to music is a hobby I have enjoyed since childhood.\n\nWhen I was in middle school, my parents were busy, so I often spent time alone. On my birthday, they suggested going to a concert together.\n\nI had such a wonderful time that I became interested in music. Back then, I mostly listened to classical music.\n\nNowadays, I enjoy a wider range of genres, including opera, rap, pop, and jazz. Music has helped me clear my head ever since.\n\nThat is how my interest started and how my taste has changed.`;
  set([[2,4],[5,9],[7,6]], origin, 30);
  const parkOrigin=`Going to parks is a hobby I have enjoyed since childhood.\n\nWhen I was in middle school, my parents were busy, so I often spent time alone. On my birthday, they suggested going to a park together.\n\nWe walked along the trails and spent a wonderful afternoon together, which made me feel much closer to them.\n\nSince then, I have been interested in visiting parks. Walking outside helps me clear my head and feel relaxed.\n\nThat is how this hobby started.`;
  set([[10,9]], parkOrigin, 30);
  const device = script(48);
  set([[2,13]], device + '\n\nI first heard about it from a friend who recommended it to me.', 48);
  const practiceUpdates = {0:55, 1:56, 6:48, 25:76, 29:80, 33:49, 45:59};
  Object.entries(practiceUpdates).forEach(([index, number])=>{practice[index]=script(number)});
  window.OPIC_COURSE_PRACTICE_LINKS={...practiceUpdates,2:18,5:29,7:54,8:54,16:30,22:30,31:3};
  practice[2]=homeChange;
  practice[5]=music;practice[7]=beach;practice[8]=beach;practice[16]=origin;
  practice[22]=parkOrigin.replaceAll('Going to parks','Hiking').replaceAll('going to a park','going hiking').replaceAll('visiting parks','hiking');
  const roomExtra='\n\nSince it is a studio, the main living area is also my favorite space. I can watch movies, relax, and keep everything I need within reach.';
  practice[1]+=roomExtra;
  set([[3,2]],script(56)+roomExtra,56);
  // Refresh linked answers through their existing exam references automatically.
  window.OPIC_COURSE_TEMPLATES = course.lessons.filter(item=>item.group==='flow').map((item,index)=>({
    id:item.id, lessonId:item.id, number:String(index+1).padStart(2,'0'), title:item.title,
    category:/롤플레이/.test(item.title)?'roleplay':/비교/.test(item.title)?'compare':/경험|계기/.test(item.title)?'experience':/묘사/.test(item.title)?'describe':'opinion',
    types:item.title, use:'답변 순서를 익힌 뒤 주제와 소재를 바꾸어 말하세요.', script:item.text
  }));
  [48,52,53,58,64,67,81,82,83].forEach(number=>{
    const item=lesson(number);
    window.OPIC_COURSE_TEMPLATES.push({id:item.id,lessonId:item.id,number:'EN',title:item.path.slice(-2).join(' · '),category:item.group==='roleplay'?'roleplay':number===58||number===64?'compare':number===67?'opinion':'describe',types:item.title,use:'대괄호에 자신의 소재를 넣어 말하세요.',script:item.english});
  });
  const questions = [
    [48,'Describe a device you use every day. What does it look like, and why is it useful?','매일 쓰는 기기의 모습·기능·쓰임'],
    [49,'What clothing, footwear, supplies, or food do you take when hiking?','하이킹 복장과 준비물'],
    [55,'Tell me about a park you visit regularly. What are its features?','자주 가는 공원의 위치·시설·경험'],
    [56,'Describe your home. What do you like about it?','원룸의 공간과 장점'],
    [59,'How has the way people get around changed over the years?','과거와 현재의 교통수단'],
    [60,'How have the clothes Koreans wear changed over time?','과거와 현재의 패션'],
    [61,'How have mobile phones changed over the years?','휴대전화의 기능 변화'],
    [66,'Compare Korea with a country you have visited. What are the similarities and differences?','한국과 캐나다 비교'],
    [69,'Tell me about an issue related to cell phones or the Internet. What happened and how was it addressed?','개인정보 유출의 원인·결과·대처'],
    [70,'What recycling issue do people discuss? How can it be addressed?','불법 쓰레기 투기와 해결책'],
    [71,'Tell me about a housing issue that people have discussed.','주택과 임대료 상승 문제'],
    [73,'What is the weather like today? Describe it in detail.','오늘 날씨'],
    [74,'Describe the four seasons in Korea. Which season do you like most?','사계절과 좋아하는 계절'],
    [75,'What leisure activities do people in Korea enjoy in each season?','계절별 활동'],
    [76,'Tell me about a memorable experience related to extreme weather.','홍수 경험'],
    [78,'What means of transportation do Koreans usually use?','한국 사람들이 이용하는 교통수단'],
    [79,'What means of transportation do you use most often, and why?','버스를 이용하는 이유'],
    [80,'Tell me about a transportation problem you experienced. What happened?','6중 추돌사고로 인한 교통체증'],
    [84,'You want to buy an MP3 player. Call your friend and ask three questions about buying one.','MP3 구매 정보 질문'],
    [85,'You broke an MP3 player you borrowed. Call your friend, explain, and offer alternatives.','빌린 MP3 파손 해결'],
    [86,'Have you ever damaged something you borrowed? What happened and what did you do?','빌린 태블릿 파손 경험'],
    [87,'Call a rental-car agency and ask three questions about renting a car for a week.','렌터카 문의'],
    [88,'Your rental car has an engine problem. Call the agency and suggest solutions.','렌터카 상태 불량 해결'],
    [89,'Tell me about a memorable experience you had renting a car.','예약과 다른 렌터카 경험'],
    [90,'You will look after a relative’s house. Call and ask about your responsibilities.','친척 집 돌보기 질문'],
    [91,'You arrived at the house, but cannot find the key. Call your relative and suggest options.','친척 집 열쇠 분실 해결'],
    [92,'Tell me about a time you had difficulty doing something you promised for a friend or relative.','친척 집 도어락 문제 경험']
  ];
  const types={48:'objectDescription',49:'objectDescription',55:'placeDescription1',56:'placeDescription1',59:'pastPresent2',60:'pastPresent2',61:'pastPresent2',66:'compareContrast',69:'socialIssue',70:'socialIssue',71:'socialIssue',73:'detailDescription',74:'detailDescription',75:'activityDescription',76:'badExperience',78:'detailDescription',79:'reasonOpinion',80:'badExperience',84:'roleplayAsk',85:'roleplaySolve',86:'roleplayExperience',87:'roleplayAsk',88:'roleplaySolve',89:'roleplayExperience',90:'roleplayAsk',91:'roleplaySolve',92:'roleplayExperience'};
  window.OPIC_COURSE_PRACTICE = questions.map(([number,en,kr])=>({year:'종합정리',type:number>=84?'roleplay':number>=59?'random':'combo',tag:kr,en,kr,lessonId:lesson(number).id,lectureType:types[number],answer:script(number),tips:number>=84?['상황과 목적','질문·대안·해결','부연 설명','마무리']:['질문의 핵심','구체적인 소재','관계사·시제','결과와 마무리']}));
})();
