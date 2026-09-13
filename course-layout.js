// Resolve source headings before assembling related material into study pages.
(function () {
const material = window.OPIC_COURSE.lessons;
const number = part => Number(part.id.split('-')[1]);
const select = (section, title) => material.filter(part => part.path[1] === section && (!title || part.title === title));
const ids = section => select(section).map(number);
const pick = (section, title) => {
  const matches = select(section, title);
  if(matches.length !== 1) throw new Error('Source heading must be unique: '+section+' / '+title);
  return number(matches[0]);
};
const places = ids('장소 묘사 1 & 2');
window.OPIC_STUDY_LAYOUT = {
  views: [
    {id:'answers', title:'유형별 답변', description:'출제 특징과 답변 순서를 함께 보기'},
    {id:'grammar', title:'문장력', description:'한국어 문장으로 영작하고 예문과 비교하기'},
    {id:'expressions', title:'표현 노트', description:'필요한 표현을 비교하고 바꿔 쓰기'},
    {id:'scripts', title:'실전 스크립트', description:'주제별 예문과 상황별 롤플레이'},
    {id:'prep', title:'시험 전 확인', description:'답변 전략과 Survey 참고'}
  ],
  prep: [1,2,3,4,5],
  answers: [
    {id:'object', title:'사물 묘사', parts:[7,28], flow:'이름·용도 → 외형 → 특징 → 쓰임·평가', example:48},
    {id:'person', title:'인물 묘사', parts:[8,29], flow:'만난 계기 → 외모·성격 → 특별한 이유', example:50},
    {id:'origin', title:'계기 말하기', parts:[9,30], flow:'어릴 때 상황 → 함께한 활동 → 관심의 시작'},
    {id:'experience', title:'경험 말하기', parts:[10,20,21,22], flow:'언제·누구와·어디서 → 사건 → 결과 → 마무리', example:76},
    {id:'change', title:'과거·현재 비교 1·2', parts:[11,12,18,19], flow:'과거의 모습 → 현재의 변화 → 경험·마무리', example:58},
    {id:'place', title:'장소 묘사 1·2', parts:[23,24], flow:'이름·위치 → 특징·시설 → 경험 또는 선호 이유', example:52},
    {id:'compare', title:'비교·대조', parts:[13,31], flow:'공통점 → A의 특징 → B의 특징 → 차이점', example:64},
    {id:'issue', title:'사회 이슈', parts:[14,32], flow:'사건·원인 → 경위 → 결과 → 대처', example:67},
    {id:'activity', title:'활동 묘사', parts:[15,25], flow:'전후 활동 / 처음부터 끝까지 / 특정 활동'},
    {id:'detail', title:'세부사항', parts:[16,26], flow:'언제·어디서·누구와 → 빈도·시간·종류'},
    {id:'reason', title:'이유 말하기', parts:[17,27], flow:'선택·의견 → 이유 1 → 이유 2 → 마무리', example:79},
    {id:'roleplay', title:'롤플레이', parts:[33,34,35], flow:'질문하기 → 문제 해결하기 → 관련 경험', example:84}
  ],
  grammar: [
    {id:'relatives', title:'관계사', parts:[37]},
    {id:'perfect', title:'현재완료', parts:[38]},
    {id:'passive', title:'수동태', parts:[39]},
    {id:'comparatives', title:'비교급·최상급', parts:[40]}
  ],
  expressions: [
    {id:'vocab',title:'어휘 업그레이드',parts:[44]},
    {id:'idioms',title:'숙어',parts:[41]},
    {id:'connectives',title:'연결어',parts:[42]},
    {id:'fillers',title:'필러',parts:[43]},
    {id:'people',title:'사람 표현',parts:ids('특정 사람을 가리키는 표현')},
    {id:'konglish',title:'콩글리쉬',parts:[45]}
  ],
  scripts: [
    {id:'object',title:'사물 문제',parts:ids('사물 묘사 문제')},
    {id:'place',title:'장소',parts:places},
    {id:'change',title:'과거·현재',parts:ids('과거·현재 비교 2')},
    {id:'compare',title:'비교·대조',parts:ids('비교·대조')},
    {id:'issue',title:'사회 이슈',parts:ids('사회 이슈')},
    {id:'weather',title:'날씨',parts:ids('돌발 — 날씨')},
    {id:'transport',title:'대중교통',parts:ids('돌발 — 대중교통')},
    {id:'roleplay',title:'롤플레이',parts:material.filter(part=>part.group==='roleplay').map(number)}
  ],
  placePairs: [
    {id:'theater',title:'극장',match:'자주 가는 극장'},
    {id:'park',title:'공원 · 조깅 · 걷기 · 하이킹',match:'자주 가는 공원'},
    {id:'beach',title:'해변 · 국내여행 · 해외여행',match:'자주 가는 해변'},
    {id:'restaurant',title:'음식점',match:'돌발: 자주 가는 음식점'},
    {id:'salon',title:'미용실',match:'돌발: 자주 가는 미용실'},
    {id:'home',title:'집',match:'집 —'}
  ].map(group=>({...group,parts:select('장소 묘사 1 & 2').filter(part=>part.title.startsWith(group.match)).map(number)})),
  scenarios: [
    {id:'mp3',title:'MP3 플레이어',parts:ids('롤플레이 — MP3 Player')},
    {id:'rental',title:'렌터카',parts:ids('롤플레이 — 차 렌트')},
    {id:'house',title:'친척 집 돌보기',parts:ids('롤플레이 — 친척 집')}
  ],
  hints: {},
  pick
};
const layout = window.OPIC_STUDY_LAYOUT;
// Old fragment links redirect to related current material; old content is not retained.
layout.legacyLinks = {
  46:1001,47:1001,48:1005,49:1007,50:1009,51:1009,
  52:1010,53:1011,54:1014,55:1012,56:1021,57:1018,
  58:1023,59:1028,60:1029,61:1024,62:1023,
  63:1030,64:1031,65:1031,66:1031,67:1048,68:1048,
  69:1049,70:1053,71:1057,72:1037,73:1038,74:1039,75:1040,76:1042,
  77:1043,78:1044,79:1045,80:1047,81:33,82:34,83:35,
  84:1060,85:1061,86:1062,87:1063,88:1064,89:1065,90:1066,91:1067,92:1068,
  93:23,94:19,95:31,96:32,97:33
};
const examples = {object:1005,person:1009,experience:1042,change:1023,place:1010,compare:1031,issue:1048,reason:1045,roleplay:1060};
layout.answers.forEach(group=>{delete group.example;if(examples[group.id])group.example=examples[group.id];});
for(const part of material.filter(part=>number(part)>1000 && part.english)){
  const notes = part.blocks.flatMap(block=>block.kind==='recall' && /[가-힣]/.test(block.prompt) ? [block.prompt+' '+block.answers.join(' ')] : block.kind==='line' && block.role==='note' && /[가-힣]/.test(block.text) && !/^[*]*Vocab/.test(block.text) ? [block.text] : []).map(text=>text.replace(/^[-*]\s+|^\d+\.\s*/g,'').replace(/\*\*/g,''));
  layout.hints[number(part)] = notes.length ? notes : part.group==='roleplay' ? ['목적과 상황','질문 또는 해결책','부연 설명','마무리'] : part.path[1]==='과거·현재 비교 2' ? ['과거의 모습','한계','현재의 변화','개인 경험'] : part.path[1]==='사회 이슈' ? ['핵심 사건','경위','결과','대처'] : part.path[1]==='장소 묘사 1 & 2' ? ['이름과 위치','특징과 시설','경험 또는 선호 이유','마무리'] : [part.title,'구체적인 설명','경험과 결과','마무리'];
}
})();
