// Each selection uses one complete source answer; targets are question-specific.
export const decisions = [
  {id:'music-taste',choice:'current',reason:'계기와 취향 변화가 자연스럽게 연결되고 교재보다 문법과 질문 대응이 명확합니다.'},
  {id:'theatre-park-mismatch',choice:'current',reason:'교재는 영화관 질문에 공원 답변이 붙어 있어 사용할 수 없습니다. 현재의 주제 구분을 유지합니다.'},
  {id:'weather-experience',choice:'textbook',target:1042,section:'scripts/experience',reason:'동일한 홍수 사건이며 시점과 방문 목적이 명확하고 선택용 표현이 적은 교재 전체 답변을 채택합니다.'},
  {id:'traffic-experience',choice:'current',reason:'같은 교통 정체·6중 추돌 구조입니다. 현재 답변은 교통 질문으로 바로 시작하고 기존 해변 여행 소재와도 연결됩니다.'},
  {id:'concert-stage',choice:'textbook',section:'scripts/experience',practice:[31],mocks:[[5,10],[7,7]],reason:'공연 감상과 무대에서 노래한 사건은 다릅니다. 교재의 무대 경험으로 교체합니다.'},
  {id:'house-repair',choice:'textbook',section:'scripts/experience',mocks:[[4,7],[6,6],[6,7]],reason:'에어컨 수리와 벽 재도색은 다른 사건입니다. 교재의 재도색 경험으로 교체합니다.'},
  {id:'hiking-injury',choice:'textbook',section:'scripts/experience',practice:[9],reason:'가벼운 부상과 병원 치료·한 달 깁스는 다른 사건 전개입니다. 교재를 채택합니다.'},
  {id:'origin-beach',choice:'current',reason:'부모님과 생일에 시간을 보내 관심이 생기는 구조는 같습니다. 음악 질문에 맞고 문법이 자연스러운 현재 콘서트 답변을 유지합니다.'},
  {id:'subway-reason',choice:'textbook',target:1045,section:'scripts/reason',reason:'버스와 지하철은 선호 대상과 근거가 다릅니다. 교재 지하철 답변을 채택합니다.'},
  {id:'travel-new-zealand',choice:'textbook',section:'scripts/reason',mocks:[[4,8]],reason:'선호 해외여행지는 교재 New Zealand로 채택합니다. 동탄 해변의 국내 장소 묘사와 한국·캐나다 국가 비교는 별도 질문이므로 보존합니다.'},
  {id:'industry-employment',choice:'textbook',section:'scripts/reason',mocks:[[5,15],[7,2],[7,3]],practice:[18],reason:'AI 대신 교재의 IT·Samsung·LG를 채택합니다. 입사 전후 교육 변화를 묻는 5회 14번과 개인 경력 노력을 묻는 7회 4번은 교재에 해당 내용이 없어 별도 답변을 유지합니다.'},
  {id:'friend-mike',choice:'current',reason:'만남·친해진 계기·외모·성격 구조가 같습니다. 현재 John 답변이 간결하고 선택용 도입부 없이 바로 말하기 좋습니다.'},
  {id:'singer-mike',choice:'current',reason:'같은 묘사 구조입니다. 현재 답변은 노래로 위안을 받아 좋아한다는 이유가 분명하며, 교재의 같은 동네 설정보다 질문에 적합합니다.'},
  {id:'recliner',choice:'textbook',target:1006,section:'scripts/object',practice:[26],reason:'테이블과 리클라이너는 다른 사물입니다. 가구는 교재 전체 답변, 가전은 교재에 있는 시작 문장만 반영합니다.'},
  {id:'cancel-movie-experience',choice:'textbook',section:'scripts/experience',mocks:[[4,13]],reason:'일반 계획 취소는 교재의 영화 취소 경험으로 교체합니다. 여행·파티 취소를 명시한 8회 13번과 휴가 계획을 묻는 10회 13번은 별도 여행 질문이므로 여행 답변을 유지합니다.'},
  {id:'hotel-booking',choice:'current',section:'scripts/roleplay',practice:[12],reason:'예약 문의 구조는 같습니다. 교재는 질문의 1박과 답변의 일주일이 충돌하므로 현재의 완결된 예약 답변을 유지합니다.'},
  {id:'hotel-problem',choice:'textbook',section:'scripts/roleplay',practice:[36],reason:'설비 고장과 좁고 더러운 객실은 다른 문제입니다. 교재의 객실 교체·보상·환불 요청을 채택합니다.'},
  {id:'hotel-experience',choice:'textbook',section:'scripts/roleplay',practice:[38],mocks:[[7,9],[7,10]],reason:'식당 예약 누락과 호텔 소음은 다른 경험입니다. 호텔 질문에는 교재의 발리 소음·객실 변경 경험을 채택합니다.'}
];
