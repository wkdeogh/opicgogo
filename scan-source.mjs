// Visually transcribed from 교재스캔.pdf. Page numbers are PDF pages (printed page = PDF + 17).
export const additions = [];
export const reviews = [];
export const roleplaySets = [];
export const pageAudit = [
  [1,'과거·현재 비교 1','하이킹 예문 추가. 음악 취향과 영화관/공원 혼재 답변은 비교 문서. 집 비교 질문은 기존 자료와 중복.'],
  [2,'과거·현재 비교 2','식료품·은행·휴대전화·재활용·건강 질문과 문장 틀 추가. 패션·교통·날씨 질문 및 한국어 흐름은 기존 자료와 중복. 표 안의 여러 단어가 이어지는 필기는 판독 불확실하여 제외.'],
  [3,'사회 이슈','영문 문장 틀 추가. 여섯 주제 질문과 한국어 흐름은 기존 사회 이슈·모의고사와 중복.'],
  [4,'장소 묘사','장소 1·2 문장 틀 추가. 집·공원·지형·음식점 질문은 기존 자료와 중복. 상단 필기 중 관계사 뒤의 불명확한 구절은 제외.'],
  [5,'기억에 남는 경험·교통 문제','두 스크립트의 차이를 비교 문서로 분리. 문제·키워드·평가 요소·답변 순서·교통체증 표현은 기존 자료와 중복.'],
  [6,'특정 경험','재활용 벌금 경험 추가. 콘서트 무대·집 수리·하이킹 부상은 비교 문서.'],
  [7,'활동 묘사','전후 활동·공원에서의 순서·여행 준비 문장 틀을 하나로 묶어 추가. 인쇄된 form은 판독 오류가 아니라 원문 표기라 유지.'],
  [8,'활동 묘사 계속','건강·계절별 활동·집안일의 문장 틀과 질문 추가.'],
  [9,'세부사항','조깅 답변 및 영화·이웃 국가 질문/구성 추가.'],
  [10,'비교·대조','음악·가수·작곡가 질문과 문장 틀 추가. 나머지 국가·공원·조깅·가족·휴일 질문은 기존 자료와 중복.'],
  [11,'계기·이유','음악을 듣는 이유와 기존 표현 목록에 없는 표현 추가. 계기 답변과 필기 대체 내용은 비교 문서. 상단 장문의 흐린 필기는 제외.'],
  [12,'이유 말하기 계속','문제와 문장 틀 추가. 지하철·뉴질랜드·IT 기업 답변은 비교 문서.'],
  [13,'인물 묘사','친구·가수 답변은 비교 문서. 동행·친구·배우·가수 질문은 기존 출제 유형과 모의고사에 있음.'],
  [14,'사물 묘사','여행 스마트폰·운동복 답변과 영화/음악 시작 문장을 기존 질문에 추가. 가구·가전 recliner는 비교 문서. 짧은 시작 문장을 완성 답변으로 확장하지 않음.'],
  [15,'에바 질문·예약','에바 질문과 예약 문제 및 문장 틀 추가. MP3·렌터카 구매 문의는 기존 상황과 중복.'],
  [16,'문제 해결·경험','공연·해변 일정 변경 문제와 문장 틀 추가. MP3·친척집·가구는 기존 또는 23쪽과 중복. 영화 취소 경험은 비교 문서.'],
  [17,'호텔','기존 호텔 예약·객실 문제·서비스 경험과 다른 세 답변을 비교 문서로 분리. 질문 하룻밤/답변 일주일의 내부 불일치도 기록.'],
  [18,'여행 18유형 점검','한 화면의 유형별 점검표로 추가. 기존 질문을 재분할하거나 임의의 영문 질문/답변으로 번역하지 않음.'],
  [19,'관심사 롤플레이','영화·피아노·조깅·걷기·항공 취소 문제 추가. MP3·뉴욕 렌터카는 기존 자료와 중복. 조깅 에바 질문은 15쪽과 중복.'],
  [20,'매장 롤플레이','옷 불량·다른 셔츠·세일 파손·할인 미적용을 상황별로 묶음. 마지막 세트의 경험 문제는 21쪽에서 이어 붙임.'],
  [21,'매장·여행 롤플레이','세일 물품 누락·식료품점 세트 추가. 국내여행 문의·환불불가 항공권·여행 경험은 기존 모의고사 10회 등과 중복. 여행 날짜 불가 문제는 22쪽에서 추가.'],
  [22,'여행·호텔 롤플레이','여행 일정 불가·호텔 빈방 없음 추가. 호텔 세 답변 문제는 17쪽과 중복. 관광 문의·택시 분실·분실 경험은 모의고사 5회와 중복. 출장 호텔 문제는 다음 쪽과 묶음.'],
  [23,'출장·가구·친척집·부동산','출장·가구·부동산 세트 추가. 친척집 3문제는 현재 원문과 동일. 부동산 경험 문제는 24쪽에서 이어 붙임.'],
  [24,'재활용·은행·약속','파티 쓰레기 불만·은행 세트·주말 약속 문의 추가. 재활용 이사 문의·외국인 이웃 설명·과거 비교는 모의고사 7회와 중복. 마지막 약속은 질문만 수록되어 후속 문제를 만들지 않음.']
];
const add = (id,page,title,section,questions=[],text='',extra={}) => additions.push({id,page,title,section,questions,text,...extra});
const review = (id,page,title,refs,difference,text) => reviews.push({id,page,title,refs,difference,text});
const rp = (id,page,title,questions,stages=[]) => roleplaySets.push({id,page,title,questions,stages});

add('change-questions',2,'과거·현재 비교 2 · 질문','answers/change',[
  'How have the ways people buy groceries changed over the years? Where did people buy food in the past, and how do they buy it now?',
  'Banks have changed over the years. How do banks look different than they did in the past? What kinds of changes are the most evident? What kind of impact have these changes had on the customers? Give me all the details.',
  'How is the phone you use today different from the ones you used in the past? What kind of difference do phones make in your life? Give me details.',
  'How is recycling today different from when you were young? Are there any big differences? Are there any similarities? Tell me about how recycling has changed over the years.',
  'Ideas about what good health is and how to maintain it change frequently. What did people do to maintain good health when you were a child? What was considered to be a healthy diet at that time? How did people usually exercise? Describe how our ideas of what is healthy have changed over time.'
]);
add('change-frame',2,'과거·현재 비교 2 · 문장 틀','answers/change',[],`Um... let me see... I’m not familiar with the subject, but... Personally, I believe that the ... has/have changed noticeably.
In the past, ...ing was/were the most common.
I mean, ...
However, unlike the past, ... considerably nowadays.
This has led people to ... and even ...`,{kind:'template'});
add('grocery-notes',2,'식료품 구매 변화 · 필기','answers/change',[],`과거
going to the grocery store and buy my food
It was time-consuming and geographical limits existed
현재
technology has(been) developed
shop online
their purchases are delivered on the same day they order`,{kind:'template'});
add('social-frame',3,'사회 이슈 · 문장 틀','answers/issue',[],`Well... Actually, it’s not easy to remember an issue regarding ..., because I’m a person who is not interested in/closely related to ... Let me think... Well...
One of the memorable articles I read was ... caused by ...
... and this led people to ...
Unfortunately, several people ended up ...ing, so the government gave the public a warning/recommendation to ...`,{kind:'template'});
add('place-frames',4,'장소 묘사 1·2 · 문장 틀','answers/place',[],`장소 묘사 1
When it comes to the ..., it’s called ... which is located in ...
As for the striking feature, it ... compared to others.
And, there are ... as well.
For these reasons it swarms with ... all through the year.
A few ... ago, I went there and ... and it was much more ... than I thought!
This is the ... that I ...

장소 묘사 2
Regarding the ..., it is ... situated in ... and has ...
This is vital for someone who ... like me.
Plus, I can see ...
Last but not least, the main reason I prefer ... is the walking distance, which takes just 10 minutes to get there on foot.`,{kind:'template'});
add('activities-frames',7,'활동 묘사 · 전후·순서·준비','answers/activity',[
  'What activities do you normally do before and after the movie? Tell me about your typical movie day form the beginning to the end.',
  'Can you tell me what you usually do at the park? Describe your typical day at a park from the beginning to the end.',
  'Can you tell me all the things you do in order to prepare to take trips?'
],`전후 활동
Well... as one of my hobbies is ..., I try to ... as much as possible. I reckon I do various things before and after ...
Before ..., I ...
After ..., ing and ing are the ones I always do.
Well... last ..., I ...
These are the activities that I do before and after ...

처음부터 끝까지
Well... as one of my hobbies is ..., I try to ... as much as possible. I reckon I do various things while/when ...
As soon as I get to ..., I ...
After that, ing and ing are the ones I always do.
Well... last ..., I ...
These are the ... that I do while/when ...

여행 준비
Well... as one of my hobbies is ..., I try to ... as much as possible. I reckon I do various things to ...
Above all, I ...
In addition, ing and ing are the ones I always do.
Well... last ..., I ... / Last but not least, I ...
These are the ... that I ...`,{kind:'template'});
add('activities-health',8,'건강 유지 · 문장 틀','answers/activity',['Tell me about all the things that you do in order to stay healthy.'],`I reckon I do various things to ...
Above all, I ...
In addition, ing and ing are the ones I always do.
Last but not least, I ...
These are the ... that ...`,{kind:'template'});
add('activities-seasons',8,'계절별 여가 활동 · 문장 틀','answers/activity',[
  'Tell me about the outdoor activities that are popular in your country. Do people go hiking, bike or swim? What people typically do outdoors? / Please tell me about what kinds of free time activities people in your country do.',
  'What do people in your country like to do in their free time? What are some popular free-time activities?'
],`I reckon ... do various things ...
In Spring, ...
Moreover, ing and ing are popular in Summer.
When fall comes, ...
Lastly, ing and ing are loved in Winter.
These are the ... that ...`,{kind:'template'});
add('housework-frame',8,'집안일 · 문장 틀','answers/activity',[
  'Tell me what you do to keep your house clean and comfortable. What kinds of housework do you do around your home?',
  'What is your normal routine at home? What do you usually do during the weekdays? What kinds of things do you do on the weekend?'
],`I reckon I do various ...
I ... on weekdays. In fact, I am a person who is kind of a neat/clean freak.
On weekends, I spend a great deal of time catching up on the household chores. ing and ing are the ones I always do. I think housework is never-ending.
These are the household chores that I usually do.`,{kind:'template'});
add('detail-questions',9,'세부사항 · 질문과 구성','answers/detail',[
  'What genre of movie do you like to watch? How often do you watch a movie? Where do you like to watch a movie? What activities do you do before and after watching movies?',
  'Tell me a little bit about a country close to your own country. Tell me what the country looks like, about its people and some of its traditions.'
],`영화: What genre → How often → Where
이웃 국가: country → people → traditions
각 항목: 메인 답변 + 부연설명`,{kind:'template'});
add('compare-music',10,'음악·가수·작곡가 비교 · 질문','answers/compare',[
  'Pick two different kinds of music or composers. Describe each in as much detail as possible, and then compare the similarities and differences between them.',
  'Select two different types of singers or composers. Tell me about both of these with a lot of details. Compare these with regard to their similarities and differences.'
]);
add('compare-frame',10,'비교·대조 · 문장 틀','answers/compare',[],`Well... There are/is ... I could talk about, but now I compare ...
Both of them ..., but they are somewhat different in many ways.
As for ..., ...
In terms of ..., ...
I believe even though their characteristics are slightly similar, they ...
These are the similarities and differences between ...`,{kind:'template'});
add('reason-questions',12,'이유 말하기 · 질문과 문장 틀','answers/reason',[
  'What was a memorable movie you watched in the past? What was it about? What was special about that movie? Would you recommend that movie to other people?',
  'Many people try to eat healthy these days. What kinds of foods are healthy and why are they healthy for us?',
  'Where do people in your country go to when they travel abroad? Why do they like visiting those locations? What is special about the countries they visit?',
  'What are some of the companies that young people want to work for these days? Why do young people want to work for these companies?'
],`Well... as for ..., it is ... and there are some reasons ...
One of the main reasons is N / that ... + 부연설명
Another reason is N / that ... + 부연설명
These are the reasons ...`,{kind:'template'});
add('reason-expressions',11,'이유를 설명하는 표현','expressions/reasons',[],`ease my mind → 마음을 편하게 하다
feel relaxed → 긴장을 풀다
cheer up → 기분을 좋게 하다
relieve stress → 스트레스를 해소하다
take comfort → 위안을 받다
kill the time → 시간을 때우다
clear my head → 머리를 식히다
help me concentrate on studying → 공부에 집중할 수 있게 도와주다
can empathize with the lyrics → 가사에 공감할 수 있다
relieve boredom → 무료함을 달래다`,{kind:'expressions'});
add('travel-phone',14,'국내여행 준비물 · 스마트폰','scripts/object',[],`The thing I always take is a smart phone which has hundreds of functions. There’s no doubt that it’s a recently released and the best-selling item nowadays. With regard to the features, it is well known for its high quality and coming in various colours. So, it’s loved by most women who are sensitive to the trend. Most importantly, it has an AI function. It’s quite practical.`,{kind:'script',target:1002,cues:['스마트폰 · 수백 가지 기능','최근 출시 · 인기 제품','품질 · 색상','AI 기능']});
add('movie-device-opening',14,'영화 기기 · 시작 문장','scripts/object',[],`Well... The latest electronic equipment I use when I watch movies is a smart phone...`,{kind:'opening',target:1003});
add('music-device-opening',14,'음악 기기 · 시작 문장','scripts/object',[],`Well... The latest electronic equipment that music fans are interested in is a smart phone...`,{kind:'opening',target:1004});
add('hiking-clothes',14,'하이킹 복장과 준비물','scripts/object',[],`Well... The clothing I usually wear is a sweatsuit which is breathable and machine-washable. There’s no doubt that it’s a recently released and the best-selling item nowadays. With regard to the features, it is well known for its high quality and coming in various colours. So, it’s loved by most women who are sensitive to the trend. Most importantly, it uses/is made of functional material. It’s quite practical. Oh, I also make sure to bring a bottle of water, a roll of gimbap, a small towel, and my phone and earphones so I don’t get bored.`,{kind:'script',target:1007,cues:['통기성 · 세탁 가능한 운동복','최근 출시 · 품질 · 색상','기능성 소재','물 · 김밥 · 수건 · 휴대전화 · 이어폰']});
add('eva-frame',15,'에바에게 질문하기 · 문장 틀','answers/roleplay',[],`I am glad to hear that ... / You told me that ... / I heard that ...
If you don’t mind, I’d like to ask a few questions about ... / I want to ask you about ...
First of all, could you tell me ...? + 부연설명
Second of all, I was wondering about/if ... + 부연설명
Lastly, I’d like to know about ... + 부연설명
Thank you for your kind answers. / Thank you so much for your time.`,{kind:'template'});
add('reservation-frame',15,'예약·문의 · 문장 틀','answers/roleplay',[],`Hello, I’m calling to book/make an appointment/get some information about ... and I have some questions (I’d like to ask).
First of all, could you tell me ...? + 부연설명
Second of all, I was wondering about/if ... + 부연설명
Lastly, I’d like to know ... 부연설명
Thank you so much for your time. / Thank you so much for your help. Bye!`,{kind:'template'});
add('solution-frame',16,'문제 해결 · 문장 틀','answers/roleplay',[],`Actually, I have some bad news. / I have something to tell you.
As you know, 상황설명
I’m terribly sorry, and I would like to give you some options.
Firstly, how about ing ...? + 부연설명
Secondly, do you want me to ... you’ve always wanted? + 부연설명
Or, why don’t I/we...? + 부연설명
I am really sorry once again. Please let me know what you think.
I feel so bad, and I will do anything for you. Don’t hesitate to tell me what you want. Bye!
Thank you for your understanding. Please let me know what I can do.`,{kind:'template'});

rp('eva',15,'에바에게 질문하기',[
  'I also enjoy jogging. Please ask me three or four questions about the place I go jogging.',
  'I like to eat out at restaurants, too. Please ask me three questions about my favorite restaurants.',
  'I am living in the United Stated of America. Ask me four questions to get to know about my home.',
  'I also enjoy watching movies. Ask me three or four questions about the types of movies I like to watch.',
  'I am a pianist in an orchestra. To learn more about my piano playing, ask me three of four questions.',
  'Ask me four questions about the specific locations where I enjoy walking.'
],['조깅 장소','음식점','집','영화 · PDF 19쪽','피아노 · PDF 19쪽','걷는 장소 · PDF 19쪽']);
rp('booking',15,'영화·항공·호텔 예약',[
  'You and your friend will see a movie this Saturday. Call a box office and book movie tickets for both of you.',
  'You’re going to travel abroad next week. Please call the airline and book a flight ticket.',
  'You have to go on a business trip to the States but you have not booked a room. Call a hotel in the states and reserve a room.'
],['영화 예약','항공권 예약','호텔 예약']);
rp('cancel-outing',16,'공연·해변 일정 변경',[
  'You bought the concert tickets for today but at the last minute you are so sick that you can’t even get out of bed. Call your friend, explain your situation and give two or three alternatives to your friend.',
  'You have just found out that the weather at the beach you were planning to go to is not going to be good this coming weekend. Call your friend, tell him or her about the weather and give two to three alternatives.'
],['공연에 갈 수 없는 상황','해변 날씨 문제']);
rp('movie-tickets',19,'영화 예매 · 잘못된 표',[
  'You want to see a movie with a friend. Contact the movie theatre and ask three or four questions to get the information that you need to purchase movie tickets.',
  'I’m sorry, but there is a problem which I need you to resolve. When you and your friend arrive at the theatre, you discover that they’ve sold the wrong tickets to you. Explain the situation to the ticket seller at the booth. Offer two or three alternatives to solve the problem.'
]);
rp('jogging',19,'조깅 약속 · 취소',[
  'A friend asks you to go jogging. Ask your friend three or four questions about his or her plans.',
  'Unfortunately, you just found out that you will be unable to join your friend as you had planned. Contact your friend and explain why you will not be able to join him or her. Then, provide two or three options to solve this issue.'
]);
rp('walking',19,'걷기 중 더 걸을 수 없는 상황',[
  'As you are walking, your friend says that he or she wants to walk further, but you cannot. Tell your friend why you are unable to walk any more. Give him or her suggestion as to what to do next.'
],['문제 해결하기']);
rp('flight-cancelled',19,'항공편 취소 · 대체편 매진',[
  'Upon arriving at the airport, you are informed that your flight has been cancelled and that there are no other flights available because they are all booked. Contact your travel agency, discuss this situation, and suggest some possible resolutions to this predicament.'
],['문제 해결하기']);
rp('clothes-defect',20,'옷 구매 · 불량',[
  'I’d like to give you a situation and ask you to act it out. You are at a clothing store and need to get some clothes. Ask two to three questions about the clothes you would like to buy.',
  'I’m sorry, but there is a problem which I need you to resolve. The clothes you have ordered have arrived, but one of the shirts has a problem. Call the clothing store and explain the problem. Give two to three alternatives to solve the problem.',
  'That’s the end of the situation. Have you ever been unhappy with something that you bought or some service you received? What was the problem? How did you deal with the situation? Tell me everything in detail.'
]);
rp('clothes-wrong',20,'옷 구매 · 다른 셔츠 배송',[
  'I’d like to give you a situation and ask you to act it out. You need to buy some clothes. Go to a clothing store and tell me salesperson about the piece of clothing you want to buy. Ask two to three questions about all the things you need to know about that type of clothing.',
  'I’m sorry, but there is a problem which I need you to resolve. The clothes you have ordered arrived at your home, but one of the shirts is not the correct one. Call the clothing store and explain the problem. Make two to three suggestions as to how and when you can get the correct shirt.',
  'That’s the end of the situation. Have you ever bought a piece of clothing and found out that there was a problem with it? Perhaps, there was a rip or a stain on the clothing. Tell me what the problem was and what you did to solve the situation.'
]);
rp('sale-damage',20,'세일 문의 · 제품 파손',[
  'I’d like to give you a situation and ask you to act it out. You see a sign at your favorite store that says they’re having a big sale. Go to the store and ask three or four questions to get as much information as possible about the sale.',
  'I’m sorry, but there is a problem which I need you to resolve. Once you get home with an item you bought, you realize that the item is damaged. Call the store and explain the situation and state what you want to do to resolve the situation.',
  'That’s the end of the situation. Have you ever bought something that did not work or was damaged? Tell me about the item you bought that did not function properly or was damaged. Explain what the item was, what was wrong and what you did to resolve the situation.'
]);
rp('sale-price',20,'세일 문의 · 할인 미적용',[
  'I’d like to give you a situation and ask you to act it out. You see a sign at your favorite store that says they’re having a big sale. Call the store and ask three or four questions about that special sale.',
  'I’m sorry, but there is a problem which I need you to resolve. Once you get home with the things you bought, you realize that you did not get them at the sale price. Call the store and explain the situation and offer several ways to resolve the situation.',
  'That’s the end of the situation. Have you ever had a problem while you were shopping? Perhaps, a store did not have an item you wanted. Or perhaps, something was too expensive. Tell me about that problem in detail and what you did to deal with the situation.'
],['질문하기','문제 해결하기','관련 경험 · PDF 21쪽']);
rp('sale-missing',21,'친구에게 세일 문의 · 물품 누락',[
  'I’d like to give you a situation and ask you to act it out. Your friend tells you about a great sale happening at one of your favorite stores. Ask your friend three or four questions to find out as much as you can about the sale.',
  'I’m sorry, but there is a problem which I need you to resolve. You went to the sale and bought several items. But when you returned home, you are surprised to discover that on item is missing. Call the store and leave a message explaining your problem with as much detail as possible. Suggest several solutions to the situation.',
  'That’s the end of the situation. I’d like to now know about your shopping experience that was particularly memorable. It might have been about a special gift you bought. Or perhaps, it was an interesting experience with a salesperson or even a problem with the purchase. Can you talk about that memorable experience? Describe the circumstances, the items you bought, and how things turned out in the end.'
]);
rp('food-store',21,'식료품점 문의 · 물품 누락',[
  'your friend has told you about a great food store. Call your friend and ask two or three questions about the food store he talked about.',
  'A new food store has opened in your neighbourhood. You visited that store and purchased some items. However, when you got home, you found out that the clerk left out some items from your food cart. Call the store, explain the situation and make suggestions to solve the problem.',
  'Tell me about how you found a food store. Where is it located and why do you like going there? What do you like to shop for there? Give me all the details about that food store you go to.'
]);
rp('travel-dates',22,'여행 일정 예약 불가',[
  'I’m sorry, but there is a problem which I need you to resolve. The travel agent informs you that the vacation you want is not available for the dates you want. Call your friend, leave a message explaining the situation and offer two or three alternatives.'
],['문제 해결하기']);
rp('hotel-unavailable',22,'호텔 객실 문의 · 빈방 없음',[
  'I’d like to give you a situation and ask you to act it out. You have arrived in a new city and you’re trying to find a hotel for tonight. Go to the reception desk of a hotel. Describe the room you want and ask three or four questions to get information about what is available.',
  'I’m sorry, but there is a problem which I need you to resolve. You’ve learned that there are no rooms available in this hotel. Call your travel companions to let them know about the situation. Leave a message to describe the situation and propose alternative solutions to the problem.',
  'That’s the end of the situation. Think about a time when your travel plans did not work out as expected. What happened? Tell me all about the circumstances and what you and the others did. How was the situation finally resolved?'
]);
rp('business-trip',23,'출장 호텔 문의 · 출장 취소',[
  'I’d like to give you a situation and ask you to act it out. You are going on a trip on business to another country. Call a hotel that you want to stay at and ask three or four questions about the hotel.',
  'I’m sorry, but there is a problem which I need you to resolve. You were supposed to go on a business trip to another country with your boss. However, something came up suddenly and you can’t go. Call your boss and explain the situation. And then, make two or three suggestions that will help you continue your business with the company overseas.',
  'That’s the end of the situation. Have you ever had a problem during a trip you took on business or for leisure? What was the nature of the problem and how did you deal with the situation? Describe in detail about what happened.'
],['질문하기 · PDF 22쪽','문제 해결하기','관련 경험']);
rp('furniture',23,'가구 구매 · 배송 문제',[
  'I’d like to give you a situation and ask you to act it out. You want to buy a new piece of furniture for your home. Speak to the store clerk and describe what you want. Ask three or four questions about the furniture they have for sale.',
  'I’m sorry, but there is a problem which I need you to resolve. When you get your new furniture at your home, you realize that there is a serious problem. Call the store and explain the problem in detail. Then, make some suggestions as to how you can resolve the problem as quickly as possible.',
  'That’s the end of the situation. Have you ever bought furniture that wasn’t what you had expected? Maybe you got the wrong color or maybe it didn’t fit in the space you had for it. Tell me about a time when you had a problem with a new piece of furniture.'
]);
rp('real-estate',23,'집 구하기 · 창문 파손',[
  'I’d like to give you a situation and ask you to act it out. You are looking for a new home. Call a real estate agent and introduce yourself. And then, ask three or four questions about homes and services they offer.',
  'I’m sorry, but there is a problem which I need you to resolve. When you get to your new home, you discover that a window is broken. Call the repair shop and leave a message. Describe in detail the condition of the window. Explain how you think the window got broken. Give two or three reasons why it is important that the window is fixed today.',
  'That’s the end of the situation. Tell me about a time when you found something that was broken. Why did the thing break and how did you deal with the situation? Give me all the details about that incident.'
],['질문하기','문제 해결하기','관련 경험 · PDF 24쪽']);
rp('recycling-party',24,'파티 후 쓰레기 · 이웃 불만',[
  'I’m sorry, but there is a problem which I need you to resolve. You often host large parties and take out most of the recycling and garbage the next day. However, other residents in your building are not happy about it, and one of them has come to complain to you. Explain the situation and offer some suggestions to resolve the problem.',
  'That’s the end of the situation. Describe a specific time in which you had trouble with recycling. It may have been a situation in which you moved to a new place and did not know the rules, or you put the materials in the wrong containers. Describe what happened from beginning to end.'
],['문제 해결하기','관련 경험']);
rp('bank',24,'계좌 개설 · 카드 문제',[
  'I’d like to give you a situation and ask you to act it out. You need to open a new bank account. Call the bank and ask the teller three to four questions about opening a new account.',
  'I’m sorry, but there is a problem which I need you to resolve. You just got your credit card, but found out that there is something wrong with it. Call the bank, explain the situation and solve the problem.',
  'That’s the end of the situation. Have you ever had any problems with your bank card when you were using banking machines or ATMs? Describe the problem you had in detail.'
]);
rp('gathering',24,'주말 약속 문의',[
  'I’d like to give you a situation and ask you to act it out. You want to meet up with your friend on the weekend. Call your friend and ask two or three questions about what you can do together and when you want to meet.'
],['질문하기']);

add('travel-checklist',18,'해외여행 · 18유형 점검','scripts/travel',[],`1. 자주 가는 해외여행지를 묘사해 보세요. [장소묘사 1]
2. 최근 갔던 해외여행지를 묘사해 보세요. [장소묘사 2]
3. 해외여행에 관심을 가지게 된 계기는 무엇인가요. [계기말하기]
4. 해외여행 가는 이유에 대해 말해주세요. [이유말하기]
5. 해외여행 갈 때 함께 하는 인물에 대해 묘사해 주세요. [인물묘사]
6. 해외여행 갈 때 꼭 가져가는 물품에 대해 말해주세요. [사물묘사] · 필기: power bank
7. 처음으로 해외여행 갔을 때 있었던 경험에 대해 말해주세요. [경험 1]
8. 가장 최근 해외여행 갔던 경험에 대해 말해주세요. [경험 2]
9. 해외여행 가서 기억남는 경험을 말해주세요. [경험 3]
10. 당신이 자주 가는 해외여행지는 과거와 비교하여 현재 어떻게 달라졌나요. [과거현재비교]
11. 당신이 해외여행 가서 하는 전형적 일과를 설명해 보세요. [활동묘사]
12. 당신이 해외여행 가기전 준비하는 것들에 대해 말해주세요. [활동묘사]
13. 당신의 나라와 근래 여행 했던 나라를 비교 대조해 보세요. [비교대조]
14. 당신은 누구와, 언제, 얼마나 자주, 왜 해외여행을 가는지 말해주세요. [세부사항]
15. 여행 가는 사람들이 자주 언급하는 이슈는 무엇인가요? 그 문제 해결을 위해 어떤 대처가 취해지고 있나요? [사회이슈]
16. 공항에서 항공편이 2시간 출발 지연되어 카운터에 문의. [에바질문]
17. 항공편 지연으로 고객 미팅에 못가게 되어 전화로 설명하고 대안제시. [문제해결]
18. 본인이 여행 중 어려움이 생겼던 경험이 있나요? 자세히 말해주세요. [롤플레이 경험]`,{kind:'checklist'});

add('hiking-change',1,'하이킹 패턴 · 과거와 현재','scripts/change',[
  'As compared with past time, do people in your country go hiking more or less frequently? How has the pattern of hiking changed over the years?'
],`Looking back over the past 15 years, the pattern of hiking has changed significantly over the past several years. Almost every person spent much time working, and I also used to work only. On the other hand, most people now enjoy various free-time activities such as snowboarding, fishing, playing golf, hiking, and so on. Well... Last week, I went hiking with my family to spend quality time, and it was a pleasant moment for us. It’s a big difference, because people used to have a limited type of activity before.`,{kind:'script',cues:['과거 15년 · 일만 함','현재 · 다양한 여가 활동','지난주 가족과 하이킹','활동 선택의 변화']});
add('recycling-fine',6,'재활용 중 벌금을 낸 경험','scripts/experience',[
  'Problems sometimes occur while recycling. Perhaps, the pick-up service did not come as planned. Or, the items were too big for the containers. Or, the container turned over and spilled the items. Tell me about something memorable that happened to you or your family.'
],`Um... actually, there are several stories related to recycling. Well... it happened when the law first changed. Sorting out the garbage was unfamiliar and annoying to me. One day, I went outside and threw away all the recyclables without separating them. A few days later, I got a ticket/a ticket showed up. It turned out that the resident next to me was actually a government officer in charge of recycling/it turned out that the resident reported it. As a result, a fine was unavoidable/I paid a fine. Since then, I’ve been very careful about separating my trash properly.`,{kind:'script',cues:['법이 바뀌었을 때','분리하지 않고 버림','이웃 · 신고 · 벌금','분리수거에 주의']});
add('jogging-details',9,'조깅 · 빈도·장소·동행','scripts/detail',[
  'How often do you jog? Where do you usually jog? Who do you jog with? Why do you jog?'
],`Well... it’s been over 5 years since I first started to jog. To be specific, I try to jog on a regular basis because regular exercise is one of the best ways to clear the head. Moreover, I jog at Dongtan park which is next to my house. The reason I like the park is that a variety of sports equipment, courts, a huge track, and water fountains are well-equipped. Turning to the person I jog with, he is my brother who is 2 years older than me as we both have been interested in running. These are the details of how I jog.`,{kind:'script',cues:['5년 넘게 조깅','규칙적 운동 · 머리를 식힘','집 옆 동탄 공원 · 시설','두 살 많은 형과 함께']});
add('music-reasons',11,'음악을 듣는 이유','scripts/reason',[
  'You indicated you enjoy listening to music. Why do you like listening to music?'
],`Well... As for listening to music, there are some reasons why I enjoy it. One of the main reasons is that it’s the best way to relieve the massive pressure that I get from work. Yesterday, because of a mistake caused by my carelessness, I was reprimanded by my superior, and it made me feel blue. So, on my way home after leaving work, I listened to up-tempo music, and it cheered me up. Another reason is that it’s apparent it helps me not only feel relaxed but also ease my mind. These are the reasons why I listen to music.`,{kind:'script',cues:['직장 스트레스 해소','부주의한 실수 · 상사의 질책','퇴근길 빠른 음악 · 기분 전환','긴장 완화 · 마음의 안정']});

review('music-taste',1,'음악 취향의 변화',['P17','M2-4'],'앱은 과거 classical music → 현재 opera·rap·pop·jazz이고 생일 콘서트를 계기로 설명합니다. 교재는 과거 soft music → 현재 classical·rap·pop, 지난주 가족과 ABC 콘서트 경험입니다.',`Looking back over the past 15 years, the taste of the music I’ve liked has changed significantly over the past several years. Almost every person spent much time listening to soft music and I also used to listen to it only. On the other hand, I now enjoy various types of music such as classical music, rap, pop, and so on. Well... Last week, I went to ABC’s concert with my family to spend quality time, and it was a pleasant moment for us. It’s a big difference, because I used to listen to a limited genre of music before.`);
review('theatre-park-mismatch',1,'영화관 변화 질문 아래의 공원 답변',['L11'],'교재는 영화관 변화 질문에 공원·트랙·분수·테니스장 답변이 붙어 있습니다. 앱은 극장에는 상영관·음향설비, 공원에는 트랙·벤치를 구분합니다. 교재 답변의 주제를 임의로 고치지 않고 보류합니다.',`What changes have been made at the theatre you like to go for a movie since you were young? What was it like in the past, and what is it like these days? Please describe it in detail.

Looking back over the past 15 years, the features of my favourite park have changed significantly over the past several years. Almost every park had a few tracks. My favourite park also used to have them only. On the other hand, it now has various facilities such as walking and jogging tracks, water fountains, plenty of benches, a tennis court and so on. Well... Last week, I played tennis at the park with my family to spend quality time, and it was a pleasant moment for us. It’s a big difference, because the park had rudimentary facilities before.`);
review('weather-experience',5,'폭우·홍수 경험',['L1042'],'현재는 영화 촬영으로 유명해진 동탄 해변입니다. 교재는 picturesque surroundings로 유명한 해변이며 2~3년 전, 물놀이 중 폭우로 돌아온 이야기입니다. 마지막 문장도 강한 thunderstorm 표현입니다.',`Let me see... the memorable time related to the beach...... well.... As far as I remember, about... two or three years ago... it happened at Dongtan beach which is well-known for its picturesque surroundings. My wife and I went there to blow off steam. We got there and were having a ball hitting the water. However, the weather was completely unexpected. The flood warning was issued, and to make things worse, there was a flood in the streets. In the end, we had to go back home with the wet clothes on. I’ve never seen such a strong thunderstorm in my life.`);
review('traffic-experience',5,'6중 추돌사고 경험',['L1047'],'핵심 사건은 같지만 교재에는 가족과 Superman을 보러 극장에 가다 하루를 길에서 보낸 세부 내용이 있습니다. 페이지 소제목은 FIRST EXPERIENCE지만 질문과 답변은 교통 문제 경험입니다.',`Well... The time I went to the theatre is unforgettable since all the plans were cancelled. What I mean is that... my family and I were heading to the theatre to enjoy a hero movie, Superman. However, right before getting to the theatre, we got caught up in a traffic gridlock. We waited until the traffic eased off, but it didn’t get better, and when we checked what happened on the road ahead, there was a six-car rear-end collision. Eventually, we ended up going back home and spent the whole day on the road.`);
review('concert-stage',6,'라이브 음악 경험',['P32','M5-10'],'앱은 가족과 ABC 공연의 분위기를 즐긴 경험입니다. 교재는 가수가 무대로 불러 관객 앞에서 노래하다 음이탈한 경험입니다.',`Tell me about a time when you went to listen to some live music, such as a concert or a live café. What was the mood like and how did you like the music you listened to there?

Let me see... the time I went somewhere to listen to live music...... well...As far as I remember, it was a concert held by ABC, one of the most popular singers in Korea nowadays. My family and I headed to the stadium and enjoyed the concert. However, all of a sudden, I was called up on stage by the singer/the singer called me up on stage, which made me sing in front of the audience. Of course, my voice was shaking and cracked in the middle of the song/I messed it up/it didn’t go well/I totally blew it because I’m tone-deaf. Anyway, it became an unforgettable experience for my family and me.`);
review('house-repair',6,'집 수리 경험',['M4-7'],'앱의 집 문제 답변은 지난여름 에어컨 고장·수리입니다. 교재의 집 개선 경험은 약 7년 전 이사 후 아내와 8시간 동안 벽을 다시 칠한 이야기입니다.',`When did you repair your home for improvement? Who did you do it with? What did you do? Tell me about it in as much detail as possible.

Let me see... the time my house was repaired...... well.... It was almost 7 years ago. My family moved to the new house due to my work, (but it required lots of improvement.) the paint on the wall was peeled and even the color was totally tarnished. So, my wife and I repainted the wall (from garret to kitchen). It was very tough to finish up and took around 8 hours, (which led us to be exhausted). I think with the new atmosphere, my house looks more sophisticated, modern and inviting at present.`);
review('hiking-injury',6,'하이킹 중 발목 부상',['P10'],'앱은 친구의 붕대 처치 후 20분 쉬고 짧은 길로 돌아왔으며 심하지 않은 부상입니다. 교재는 동탄산에서 친구들과 하이킹하다 병원에 가고 한 달간 깁스한 경험입니다.',`People occasionally get hurt when exercising. For example, they might twist their ankles or sprain their knees. Have you ever injured yourself while hiking or trekking? What kind of injuries did you get? Do you do anything to avoid injuries?

Um... let me think about it for a second... Well... This happened about two or three months ago. Lately, since I felt like I was gaining weight, I decided to go hiking with my close friends at Dongtan Mountain, a popular hiking spot for us. In the beginning, everything was perfect (the weather was ideal, and we were talking and laughing while hiking). However, I accidentally sprained my ankle. The pain was unbearable, so we rushed to the hospital, (and I ended up wearing a cast for a month.) Since then, I always hike much more cautiously.`);
review('origin-beach',11,'관심을 갖게 된 계기',['L30','P17'],'앱의 음악 예문은 부모님과 생일 콘서트입니다. 교재 인쇄문은 부모님과 해변에서 3일, 필기는 concert·3 hours·listening to music으로 변경되어 있습니다. 아래는 인쇄문이며 필기 대체 내용을 합쳐 새 답변을 만들지 않았습니다.',`I started interested in movie/music/swimming/exercise/travel since I was little and it has always been one of my favourite hobbies. When I was in middle school, my parents asked me to go to the beach for my birthday. At that time, work kept my parents extremely busy and as a result it made me feel alone most of the time. So, when they told me that, I was super excited to spend time with them for a while. We enjoyed water activities for 3 days and had a nice time talking about my childhood and their youth (on the way back home). Since then, I began to feel interested in going to the beaches.`);
review('subway-reason',12,'선호하는 교통수단',['L1045'],'현재 답변은 버스입니다. 교재는 저렴한 요금과 교통체증을 피하는 지하철입니다.',`Well.... As for the means of transportation I’ve used to move around, it’s a subway and there are some reasons why it’s preferred. One of the main reasons is an affordable fare. In fact, the rate of inflation has increased year in and year out. Therefore, transportation expenses can be a burden. Another reason is that it’s apparent there is traffic gridlock. It’s notorious for heavy traffic congestion in the city where I've been living. Regardless of the time, the subway never gets stuck in a traffic jam. These are the reasons why the subway is preferred when I get around.`);
review('travel-new-zealand',12,'선호하는 해외여행지',['L1014','L1031'],'현재 해외여행 장소 답변은 동탄 해변을 국내·해외여행에 공용하며 국가 비교에는 별도 소재가 있습니다. 교재의 선호 여행국가는 New Zealand이고 맑은 날씨·산과 해변 경치를 이유로 듭니다.',`Well... As for the popular country Koreans loves to travel to, it is New Zealand, and there are some reasons why it’s preferred. One of the main reasons is that the weather there is clear without a hint of cloud. In fact, due to global warming, doing outdoor activities such as surfing and snowboarding is getting harder and harder in Korea. Another reason is that it’s apparent that it has breathtaking views of mountains and beaches. I’m sure the sceneries seen there don’t exist in Korea. These are the reasons why people in my country like to spend time in New Zealand.`);
review('industry-employment',12,'취업하고 싶은 기업·산업',['M5-15','P19'],'현재는 AI 산업·대기업·스타트업과 경력·교육 기회입니다. 교재는 반도체·디스플레이, Samsung·LG, 유망한 미래·평판·복리후생입니다.',`Well... As for the companies young job seekers want to work for, they are companies related to the IT industry and there are some reasons why they’re preferred. One of the main reasons is their promising future. In fact, products like semiconductors and display panels have been regarded as essential in modern society. Luckily, two leading companies, Samsung and LG, are from Korea. Another reason is their strong social reputation. it’s obvious that excellent fringe benefits are guaranteed, and employees of these companies are generally respected by others.`);
review('friend-mike',13,'친구 묘사',['L29','M10-5'],'앱의 이름은 John이고 등하교를 함께하며 친해졌습니다. 교재는 Mike, 같은 동네, 매일 스쿨버스에서 속 깊은 대화를 나눈 내용입니다.',`When I watch a movie, I tend to watch it with my best friend. / As for my best friend, he is Mike. I’ve had a lasting friendship with Mike since middle school. The first place we met was in class, and we lived in the same neighborhood. I think it was the main reason we could develop our relationship as lifelong friends (because we had a heart-to-heart talk on the school bus almost every day). When it comes to physical appearance, he is quite slender, tall, good-looking, and has a good sense of fashion. Lastly, the reason I’ve built a closer relationship with him is that he’s the best listener around me. Well, that’s all I remember for now.`);
review('singer-mike',13,'좋아하는 가수',['L29','P6'],'앱의 가수는 John이며 학창 시절 노래로 위안을 받았습니다. 교재는 Mike이고 TV에서 처음 보았으며 같은 동네에 살았다는 설정입니다.',`As for the singer I’ve liked, he is Mike. I’ve had a lasting interest in Mike since middle school. The first time I saw him was on TV, and we lived in the same neighbourhood. I think it was the main reason I could become a huge fan. When it comes to physical appearance, he is quite slender, tall, good-looking, and has a good sense of fashion. Lastly, the reason I like him is that he’s the best singer in Korea. Well, that’s all I remember for now.`);
review('recliner',14,'좋아하는 가구·유용한 가전',['P27','L1008'],'현재 실전 연습의 가구는 창가의 작은 나무 테이블입니다. 교재는 높이 조절·마사지 기능이 있는 recliner이고 가전 질문에도 recliner 시작 문장을 씁니다. 앱 유형별 구성에는 recliner가 예시로 있으나 실제 답변 소재는 달라 선택 대기로 분리했습니다.',`Well... The furniture I like is a recliner which is height adjustable. There is no doubt that it is a recently-released and the best-selling item nowadays. With regard to the features, it is well known for its high quality and coming in various colours. So, it’s loved by most women who are sensitive to the trend. Most importantly, it has a massage function. It's quite practical.

Well... The modern appliance people consider as useful at home is a recliner...`);
review('cancel-movie-experience',16,'계획을 지키지 못한 경험',['M4-13','M8-13'],'앱은 고열로 부산 주말여행을 취소하고 예약을 변경한 경험입니다. 교재는 약 한 달 전 심한 감기로 영화관에 못 가고 나중에 근사한 저녁을 먹은 경험입니다. 영화이름은 교재의 빈칸 그대로입니다.',`Of course I have experienced it!!! I am not sure when it happened exactly. I think it was about a month ago. My friend and I had a plan to go to a movie theater to watch the newly released movie, 영화이름. However, because of the severe cold, I had difficulty heading to the cinema. So, we canceled the movie and had a fancy dinner later. It was an experience things didn’t go as planned.`);
review('hotel-booking',17,'호텔 예약',['P13'],'앱은 다음 주말 2박 더블룸·가격·조식·Wi-Fi·취소 규정입니다. 교재는 다음 일요일부터 일주일 출장·회사 비용 부담·무료 조식입니다. 교재 자체도 질문은 하룻밤, 답변은 일주일이므로 그대로 적용하지 않았습니다.',`I’d like to give you a situation and ask you to act it out. You are visiting a new city and need a hotel room for the night. Call a hotel and ask three or four questions to find out about its rooms and services.

Hello, I’m calling to book a room for a business trip, and I have some questions I’d like to ask. First of all, could you tell me the kinds of rooms I can stay in for a week starting next Sunday? It would be great if the business room had a desk, some chairs, and high-speed internet access. Second of all, I was wondering about the room rates. However, I don’t think the cost will be an issue since all the expenses will be covered by my company. Lastly, I’d like to know the complimentary breakfast you provide for hotel guests. Because I am the one who can’t skip a meal. Thank you so much for your time.`);
review('hotel-problem',17,'호텔 객실 문제 해결',['P37'],'앱은 에어컨 소음·Wi-Fi 끊김에 수리 또는 객실 이동을 요청합니다. 교재는 좁고 더러운 객실에 즉시 교체·업그레이드/할인·환불을 요청합니다.',`I’m sorry, but there is a problem which I need you to resolve. When you get to your hotel room, it is very small and not clean at all. Call the front desk and describe what you have found in detail. Then, make some suggestions as to how you can resolve the situation.

I have something to tell you. As you know, I just checked the hotel room I booked, but it’s much smaller and dirtier than I expected, so I don’t think I can stay here. So, I’d like to give you some options to solve this problem. Firstly, how about changing the room right away? The sooner you can change the room, the better. Secondly, could you offer me a room upgrade or a discount? Since this problem was caused by the hotel, I think some compensation would be reasonable. Or, why don’t you offer me a refund instead? Since it looks like it’s going to take a while, we’d rather go somewhere else. What do you think? Please let me know what you want.`);
review('hotel-experience',17,'호텔에서 겪은 문제 경험',['P39'],'현재 호텔/식당 문제의 공용 답변은 식당 예약 누락·15분 후 자리 제공·무료 음료입니다. 교재는 1년 전 결혼 20주년 발리 여행·옆방 소음·오션뷰 객실로 변경입니다.',`That’s the end of the situation. Sometimes, a surprising or unexpected things can happen when you stay at a hotel. Tell me about a memorable experience you had while staying at a hotel. Maybe there was a problem with your room. Maybe you met some other guests. Tell me the whole story of an interesting hotel visit.

Of course, I have experienced it!!! I am not sure when it happened exactly. I think it was about a year ago. My wife and I went to Bali to celebrate our 20th wedding anniversary. However, because of the noisy guests staying next door, we had trouble relaxing in our room. So, I immediately contacted the front desk and explained the situation, and they quickly changed our room to one with an ocean view. It was a memorable experience related to staying at a hotel.`);
