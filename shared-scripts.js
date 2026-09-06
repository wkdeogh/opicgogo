// Canonical answer families for all mock and practice questions.
// Questions in the same family deliberately reuse one script or one fixed frame.
(function(){
  const exams=window.OPIC_MOCK_EXAMS||[];
  const practice=window.OPIC_PRACTICE_ANSWERS||[];
  const mock=(examId,number)=>exams.find(exam=>exam.id===examId)?.questions.find(item=>item.number===number);
  const setMock=(targets,answer)=>targets.forEach(([examId,number])=>{const item=mock(examId,number);if(item)item.answer=answer});
  const setCues=(targets,cues,focus)=>targets.forEach(([examId,number])=>{const item=mock(examId,number);if(item){item.cues=cues;item.focus=focus}});

  const scripts={
    movieCore:`I am really into action movies because they have fast stories and exciting scenes.

They help me forget about work and take my mind off things. I especially enjoy them at a theater because the large screen and powerful sound make every scene feel more realistic. If I had to recommend one, I would choose an easy-to-follow action movie with a likable main character.

The last time I went to the movies was a few weeks ago with a close friend. We had dinner first, bought popcorn, and watched a new action movie about a detective trying to stop a major robbery. It was much better than I expected, and we stayed focused the whole time.

Afterward, we went to a café and talked about our favorite scenes. I got home late, but I had a blast. That experience reminded me why action is still my favorite genre.`,
    musicCore:`I listen to many kinds of music, but I mostly enjoy Korean pop and soft rock. My favorite singer is IU because her voice is clear and emotional, and her songs are easy to listen to.

I listen to music almost every day, especially during my commute and when I relax at home. I usually use wireless earphones and a streaming app. Music helps me clear my head after work and makes boring travel time more enjoyable.

I first became interested in music in middle school when a friend shared a pop album with me. Back then, I mainly liked fast dance music. As I got older, I started listening to softer songs and paying more attention to lyrics.

My taste has changed, but music has always been part of my daily routine. That is why IU and soft rock are my usual choices these days.`,
    homeDescription:`I live in a small studio apartment in Suwon.

Since it is a studio, there is only one main room, and that room is also my favorite space. It is not very big, but it is cozy and comfortable.

My bed is next to the wall, and there is a small table near the window. Across from the bed, I have a TV and a low cabinet. The kitchen is in the same space, and there is also a small bathroom.

What I like most is that everything I need is within reach. I can eat, study, listen to music, and relax in one room.

I’ve lived there for a few years, and I’m happy with it. Overall, it is small and simple, but it is a very convenient place to live.`,
    gatheringEvent:`One of the most memorable gatherings I attended was my cousin’s birthday dinner last year.

It was held in a private room at a local restaurant, and about fifteen relatives were there. We ate Korean food, talked about family news, and took pictures together. The atmosphere was warm and lively.

Something unexpected happened when a server accidentally spilled a drink near the birthday cake. Everyone was surprised, but we quickly moved the cake and cleaned the table. Luckily, nothing was damaged, and the server brought us a free dessert.

After that, we sang a birthday song and gave my cousin some gifts. The small accident actually made everyone laugh, so it became the story we remembered most.

Overall, I had a great time because I met relatives I had not seen in a while.`,
    parkVisit:`There is a large lake park near my home in Suwon, and it is probably my favorite park.

It has a wide walking path, trees, benches, and a large grassy area. People walk, jog, ride bicycles, or have picnics there. I usually buy a drink near the entrance and walk around the lake for about an hour. I often listen to music while walking, and then I sit near the water to relax.

The last time I went there was two weeks ago with a close friend. We walked around the lake, talked about work, and sat on the grass. There was a beautiful sunset, so we took several pictures before having dinner nearby.

I first started visiting the park a few years ago because I needed an easy way to exercise after work. Nothing dramatic happened on my last visit, but the fresh air helped me clear my head. It was exactly the relaxing break I needed.`,
    foodDeliveryTrend:`Restaurants and delivery services have changed a lot because more customers care about health and convenience.

Many places now offer salads, grilled dishes, whole-grain options, and smaller portions instead of only fried or salty food. Delivery apps also show calories and ingredients, and customers can remove sauces or add vegetables.

Another recent change is better packaging. Some restaurants use recyclable containers, seal each item more carefully, and provide real-time delivery tracking.

I think businesses are making these changes because customers compare many options on their phones and expect healthier food, clear information, and reliable service. Restaurants need to follow those expectations to stay competitive.

I sometimes order a salad or a rice bowl, and I like being able to customize it. Overall, the trend gives customers more control and makes delivery food feel less unhealthy.`,
    healthChange:`My health habits have changed quite a bit over the past few years.

In the past, I rarely exercised and often ordered fried food late at night. I stayed up watching videos, so I felt tired and stressed most mornings. That was the main reason I decided to change.

These days, I walk or jog at a park near my home about three times a week. I also stretch every morning, drink more water, and eat more fruit and vegetables. Most importantly, I stopped ordering late-night delivery food on weekdays and try to sleep before midnight.

I started with small changes because an extreme plan was difficult to maintain. I’ve followed this routine for several months, and now I have more energy and sleep much better.

I am not perfect, but these simple habits have become part of my regular routine, so I think they really work.`,
    natureBeach:`Busan is my favorite place to travel to in Korea, especially because of its beautiful beaches.

Haeundae Beach has a long sandy shore, clear water, and a walking path lined with small cafés. Early in the morning, it is quiet and the view is breathtaking. By afternoon, families swim, children play in the sand, and people take pictures near the water.

The last time I went there, I traveled with a close friend for the weekend. We walked along the shore, listened to music, and ate fresh seafood nearby. We also watched the sunset, which was the best part of the trip.

I’ve visited Busan several times, but it still feels special. It has great scenery, good food, and many activities. Whenever I need a change of scenery, I think of that city because it helps me get away from it all.`,
    holidayCore:`Chuseok is one of the biggest family holidays in Korea, and people usually celebrate it at a family home.

Families travel to their hometowns, share traditional food, and spend time talking together. Songpyeon, a small rice cake, is one of the foods people often prepare. Some families also visit their ancestors’ graves.

When I was a child, I always looked forward to Chuseok because all my relatives gathered at my grandparents’ house. I played with my cousins, ate a lot of food, and received small gifts.

On my last Chuseok, I visited my parents in Suwon. We cooked together, watched a movie, and took a walk after dinner. It was quieter than the holidays from my childhood, but it was still warm and relaxing.

For me, Chuseok is memorable because it gives busy family members a chance to reconnect.`,
    weatherCore:`Korea has four distinct seasons, but the weather has become less predictable over the years.

Spring is mild, summer is hot and humid, fall is cool and clear, and winter is cold and dry. Fall is my favorite because the sky is clear and it is comfortable to walk outside.

Today in Suwon, it is warm and a little humid. The sky is partly cloudy, but there is no heavy rain, so people are walking outside in light clothes.

When I was a child, the seasons felt more regular. Summers were not as extremely hot, and winters had more steady snow. These days, heat waves, sudden heavy rain, and warm winter days happen more often.

Because the weather changes quickly, I check the forecast every morning and carry an umbrella when necessary.`,
    overseasCore:`Japan is one of the most popular overseas destinations for Korean travelers because it is close, convenient, and easy to explore.

My first trip abroad was a family vacation to Japan when I was a child. I remember the clean streets, busy train stations, and small restaurants. I was especially impressed by how easy it was to travel by subway.

However, I once got on the wrong train during another visit and became separated from my friend. At first, I panicked because my phone battery was almost dead. I got off at the next station, asked an employee for help, and used a station phone to contact my friend.

We met again about thirty minutes later. The experience was stressful, but it taught me to check train directions carefully and save important information before traveling.

I still recommend Japan because it offers good food, interesting cities, and a convenient travel experience.`,
    cancellationExperience:`Yes. Last winter, I had to cancel a weekend trip to Busan at the last minute.

I had planned the trip with a close friend and had already booked train tickets and a hotel. However, the night before we left, I developed a high fever and could barely get out of bed.

I called my friend immediately and explained the situation. Then I contacted the hotel and train company. The hotel allowed us to change the reservation once, and we received travel credit for the train tickets.

We moved the trip to two weeks later, when I had recovered. I felt terrible about changing our plan, but contacting everyone early helped us avoid losing most of the money.

Since then, I choose flexible reservations whenever possible and keep all confirmation messages on my phone.`,
    tripPreparation:`I prepare carefully before any trip, especially when outdoor activities such as hiking are involved.

First, I check the weather, transportation, and the places I plan to visit. If I am hiking, I also check the trail length and difficulty. Then I confirm my reservations and save the details on my phone.

I pack comfortable clothes, walking or hiking shoes, water, a light snack, sunscreen, and a portable charger. I also carry tissues, basic medicine, and a small first-aid kit. For an overseas trip, I add my passport and copies of important documents.

Finally, I check everything one more time and try to leave early. Good preparation takes a little time, but it helps me avoid unnecessary stress and enjoy the trip safely.`,
    industryAI:`Artificial intelligence is one of the fastest-growing and most talked-about industries in Korea.

Young people often want to work for major technology companies or AI startups because they offer good career opportunities, practical training, and the chance to build new products. The industry has grown quickly because companies use AI in phones, cars, shopping, and customer service.

People who want to work in this field usually study computer science, data, or programming in advance. After joining a company, they continue learning through online courses and project-based training because the technology changes so quickly. Training has become much more practical over the past five years.

People are interested in AI because it can save time and create new jobs, but they also worry about privacy and job replacement.

I have also taken online courses, practiced presentations, and used new digital tools in work projects to improve my own skills. I think the industry will keep growing, so workers and companies will need to keep learning and use the technology responsibly.`,
    fashionStyle:`People in Korea usually prefer clothes that are neat, practical, and comfortable.

At work, many people wear business-casual clothes such as a shirt, simple pants, and clean shoes. At home, they usually change into loose T-shirts or training pants.

My own style is simple and casual because comfort is more important to me than following every trend. I usually wear dark pants, a plain T-shirt, and sneakers. Right now, I am wearing a comfortable top and casual pants.

Fashion used to be more formal and less varied when I was young. These days, casual styles and athletic clothes are accepted in more places.

A few weeks ago, I needed a fall jacket, so I visited a mall and compared several options. I bought a navy one because it matched my clothes and was reasonably priced.

Overall, my style is not flashy, but it fits my daily life.`,
    roleplayResearch:`Hello. I’m preparing for an interview and writing a short report about your company and industry, so I have a few questions.

First, what products or services is the company best known for? How has the industry changed or grown in the last few years?

Also, what skills do new employees need, and what kind of training do they receive after joining the company? I’d also like to know what the biggest challenge is right now.

Finally, what new technology or project do you think will be important in the future? Is there a website or report I should read before the interview?

Your answers will help me understand both the company and the industry. Thank you for your time.`,
    serviceProblemExperience:`Yes. I once had a serious service problem at a restaurant while I was traveling.

I had reserved a table, but when I arrived, the restaurant could not find my reservation. It was crowded, and the staff told me I would have to wait almost an hour. I showed them the confirmation message on my phone and calmly explained the situation.

I asked whether they could give me another table or move the reservation to a nearby branch. The manager checked the message and found a small table after about fifteen minutes. They also gave me a free drink while I waited.

The situation was frustrating at first, but staying calm and showing the confirmation helped solve it. Since then, I always save reservation messages until the visit is over.`
  };

  const questionCall=(reason,questions,closing)=>`Hello. ${reason}, and I have a few questions.

First question: ${questions[0]} ${questions[1]}

I’d also like to know ${questions[2]} One more question: ${questions[3]}

${closing}

Thank you for your help.`;
  const rescheduleCall=(plan,reason,firstOption,secondOption,remoteOption)=>`Hello, this is Daeho. I’m calling about ${plan}.

Unfortunately, ${reason}, so I can’t make it at the scheduled time. I’m sorry for the short notice.

Could we move it to ${firstOption}? If that does not work, I am also available ${secondOption}. Another option is ${remoteOption}.

Please let me know which option works best for you. I really do not want to miss this opportunity, and I appreciate your understanding.`;
  const problemCall=(subject,problem,attempt,firstOption,secondOption,proof)=>`Hello. I’m calling about ${subject}.

Unfortunately, ${problem} I already ${attempt}, but the problem is still there.

Could you ${firstOption}? If that is not possible, I would like you to ${secondOption}.

${proof}

Please tell me which option is possible and how long it will take. I would appreciate your help.`;
  const lostItemCall=(item,lastPlace,description,firstOption,secondOption)=>`Hello. I’m calling because I lost ${item} today.

The last time I had it was ${lastPlace}. ${description}

Could you ${firstOption}? If that does not work, could you ${secondOption}?

I can give you my phone number and identification information. Please contact me as soon as you find it.

I’m sorry for the trouble, but it is important to me. Thank you for your help.`;

  setMock([['mock-1',2],['mock-3',2],['mock-4',5],['mock-6',5]],scripts.homeDescription);
  setMock([['mock-1',5],['mock-1',6],['mock-9',2],['mock-9',3]],scripts.movieCore);
  setMock([['mock-1',9],['mock-1',10]],scripts.gatheringEvent);
  setMock([['mock-2',2],['mock-2',3],['mock-2',4],['mock-5',8],['mock-5',9],['mock-7',5],['mock-7',6]],scripts.musicCore);
  setMock([['mock-2',5],['mock-2',6],['mock-2',7],['mock-10',8],['mock-10',9],['mock-10',10]],scripts.parkVisit);
  setMock([['mock-2',8],['mock-2',9],['mock-2',10],['mock-9',14]],scripts.holidayCore);
  setMock([['mock-1',14],['mock-3',14],['mock-3',15]],scripts.foodDeliveryTrend);
  setMock([['mock-3',9],['mock-3',10]],scripts.healthChange);
  setMock([['mock-3',7],['mock-5',2],['mock-6',2],['mock-6',3],['mock-6',4],['mock-8',8]],scripts.natureBeach);
  setMock([['mock-4',2],['mock-4',3],['mock-4',4]],scripts.weatherCore);
  setMock([['mock-4',8],['mock-4',9],['mock-4',10],['mock-9',13]],scripts.overseasCore);
  setMock([['mock-4',13],['mock-8',13],['mock-10',13]],scripts.cancellationExperience);
  setMock([['mock-5',3]],scripts.tripPreparation);
  setMock([['mock-5',5],['mock-5',6],['mock-5',7]],scripts.fashionStyle);
  setMock([['mock-5',14],['mock-5',15],['mock-7',2],['mock-7',3],['mock-7',4]],scripts.industryAI);
  setMock([['mock-2',11],['mock-4',11]],scripts.roleplayResearch);

  setCues([['mock-1',2],['mock-3',2],['mock-4',5]],['studio in Suwon','one main room','bed · table · TV','everything within reach','cozy and convenient'],'공유 스크립트 · 집 전체와 최애 공간 동시 대비');
  setCues([['mock-1',5],['mock-1',6]],['action movies','take my mind off things','friend · dinner first','better than expected','café afterward'],'공유 스크립트 · 선호와 최근 경험 동시 대비');
  setCues([['mock-1',9],['mock-1',10]],['cousin’s birthday','local restaurant','family activities','spilled drink','laughed and continued'],'공유 스크립트 · 일반 경험과 돌발 사건 동시 대비');
  setCues([['mock-2',2],['mock-2',3],['mock-2',4],['mock-5',8],['mock-5',9]],['K-pop · soft rock','IU','commute · home','middle school','dance music → softer songs'],'공유 스크립트 · 선호·루틴·변화 동시 대비');
  setCues([['mock-2',5],['mock-2',6],['mock-2',7]],['lake park in Suwon','walking path · lake','walk and listen to music','friend · sunset','clear my head'],'공유 스크립트 · 묘사·일상·최근 경험 동시 대비');
  setCues([['mock-2',8],['mock-2',9],['mock-2',10]],['Chuseok','family home','childhood with cousins','last holiday in Suwon','family reconnects'],'공유 스크립트 · 일반·어린 시절·최근 경험 동시 대비');
  setCues([['mock-1',14],['mock-3',14],['mock-3',15]],['healthier menus','app customization','better packaging','customer expectations','more control'],'공유 스크립트 · 변화·이유·최신 트렌드 동시 대비');
  setCues([['mock-3',9],['mock-3',10]],['unhealthy past','tired and stressed','walk or jog','stop late-night food','more energy'],'공유 스크립트 · 현재 습관·변화·시도·중단 동시 대비');
  setCues([['mock-3',7],['mock-5',2]],['Busan · Haeundae','sandy shore · cafés','friend · weekend','walk · seafood · sunset','get away from it all'],'공유 스크립트 · 국내 여행지와 자연 장소 동시 대비');
  setCues([['mock-4',2],['mock-4',3],['mock-4',4]],['four seasons','today in Suwon','less predictable','extreme weather','check forecast'],'공유 스크립트 · 계절·오늘·기후 변화 동시 대비');
  setCues([['mock-4',8],['mock-4',9],['mock-4',10]],['Japan','close and convenient','childhood family trip','wrong train','ask staff for help'],'공유 스크립트 · 인기 장소·어린 시절·돌발 경험 동시 대비');
  setCues([['mock-4',13],['mock-8',13],['mock-10',13]],['Busan weekend trip','high fever','called friend early','changed reservations','choose flexible options'],'공유 스크립트 · 일정 취소와 여행 계획 문제 동시 대비');
  setCues([['mock-5',3]],['weather · route','reservations','clothes · shoes','charger · first-aid kit','final check'],'여행과 하이킹 준비 공용 스크립트');
  setCues([['mock-5',5],['mock-5',6],['mock-5',7]],['work vs home','simple casual style','past vs now','navy jacket purchase','practical and comfortable'],'공유 스크립트 · 일반·개인·변화·구매 경험 동시 대비');
  setCues([['mock-5',14],['mock-5',15]],['AI industry','rapid growth','skills and training','current interest','privacy and jobs'],'공유 스크립트 · 산업 성장·교육·관심 동시 대비');
  setCues([['mock-2',11],['mock-4',11]],['products and services','recent growth','skills and training','biggest challenge','future project'],'공유 질문 골격 · 회사와 산업 조사 공용');

  setMock([['mock-1',11]],questionCall('My flight has been delayed by two hours',['What is the new departure time?','What caused the delay?','whether the boarding gate has changed.','Do you provide a meal voucher or another flight if the delay becomes longer?'],'Could you send any updates to my phone so I do not miss the boarding announcement?'));
  setMock([['mock-3',11]],questionCall('I’m looking for a new smartphone for everyday use',['Which model has the best battery life?','Does it have a good camera and enough storage?','whether it supports fast charging.','How much is it, and what does the warranty cover?'],'If you have a suitable model in stock, I would like to visit the store and try it.'));
  setMock([['mock-5',11]],questionCall('I’m staying at your hotel and have a free day to explore the city',['What popular place is close to the hotel?','How can I get there by public transportation?','whether there is a good local restaurant nearby.','Is there an evening activity or tour you recommend?'],'Could you mark the places on a map and tell me when I should leave?'));

  setMock([['mock-1',12]],rescheduleCall('our meeting this afternoon','my flight has been delayed by two hours','tomorrow afternoon','Friday morning','having a video call after I arrive'));
  setMock([['mock-2',12]],rescheduleCall('our meeting this Friday','a family emergency came up','next Monday afternoon','Tuesday morning','having a short video call or sending my questions by email'));
  setMock([['mock-4',12]],rescheduleCall('my job interview tomorrow afternoon','an urgent personal matter came up','Friday afternoon','Monday morning','having an online interview at the original time'));
  setMock([['mock-3',12]],problemCall('the phone I bought from your store two days ago','it does not have enough storage and the battery drains very quickly.','updated the software and changed the settings','exchange it for a model with more storage and better battery life','give me a full refund','I have the receipt, the original box, and all the accessories.'));
  setMock([['mock-5',12]],lostItemCall('my black backpack in one of your taxis','on the back seat of the taxi that took me to the Central Hotel around three o’clock','It has a red tag on the handle, and my laptop and passport are inside.','contact the driver and check the back seat','check your lost-and-found office'));

  practice[1]={exam:'mock-1',number:2};
  practice[8]={exam:'mock-3',number:7};
  practice[11]={exam:'mock-5',number:5};
  practice[18]={exam:'mock-5',number:15};
  practice[24]={exam:'mock-2',number:12};
  practice[32]={exam:'mock-2',number:6};
  practice[33]={exam:'mock-5',number:3};
  practice[38]=scripts.serviceProblemExperience;
  practice[41]={exam:'mock-3',number:9};
  practice[42]={exam:'mock-3',number:9};
  practice[43]={exam:'mock-3',number:9};
  practice[44]={exam:'mock-3',number:9};

  practice[12]=questionCall('I’d like to reserve a hotel room for a trip abroad',['Do you have a double room available for two nights next weekend?','What is the total price, including taxes?','whether breakfast and Wi-Fi are included.','What is the cancellation policy?'],'If a quiet room is available, please reserve it under the name Daeho and send me a confirmation.');
  practice[13]=problemCall('the computer I ordered three days ago','the battery lasts less than an hour even when it is fully charged.','updated the software and tried a different charger','exchange it for a new computer of the same model','give me a full refund','I have the receipt and all the original packaging.');
  practice[14]=problemCall('the haircut I received today','the sides are much shorter than I requested, and the front is uneven.','showed the stylist the original picture again','have another stylist fix it today','give me a free appointment tomorrow or a partial refund','The result is clearly different from the picture I showed.');
  practice[19]=questionCall('I’d like to visit the park with you this weekend',['Are you free on Saturday afternoon?','Which park would you prefer?','what activity you would like to do there.','Should we bring food, water, or anything else?'],'Once we decide, I will send you the exact meeting place and time.');
  practice[20]=lostItemCall('my black phone while we were hiking','near the rest area below the top','It has a clear case, and my name card is inside.','call my number while I walk back along the trail','ask the park office and use the phone tracking service');
  practice[27]={exam:'mock-7',number:13};
  practice[28]=problemCall('the food delivery I just received','I ordered a chicken salad and soup, but I received two hamburgers instead.','checked the order number on the receipt','send the correct food as soon as possible','give me a full refund if redelivery takes more than thirty minutes','I have the order confirmation and can send you a picture of the wrong food.');
  practice[35]=questionCall('I’d like to make a dinner reservation',['Do you have a table for four this Saturday at seven?','Is a quiet table or a private room available?','whether you have vegetarian dishes.','Is parking available nearby?'],'If the table is available, please reserve it under the name Daeho and send me a confirmation.');
  practice[36]=problemCall('my hotel room, number 507','the air conditioner is making a loud noise, and the Wi-Fi keeps disconnecting.','restarted the air conditioner and reconnected to the Wi-Fi','send someone to fix the problems right away','move me to another quiet room','I need a working room because I have work to finish tonight.');
  practice[37]=problemCall('our restaurant order','we have waited forty minutes, one dish is missing, and the other dish is cold.','asked a server to check the order','replace the cold dish and bring the missing one','cancel the missing item and remove the cold dish from the bill','Our order number and receipt are on the table.');

  // Exhaustive classification: 75 mock questions + 45 practice questions.
  window.OPIC_SCRIPT_FAMILIES={
    introduction:['M1-1','M2-1','M3-1','M4-1','M5-1'], home_description:['M1-2','M3-2','M4-5','P2'], home_routine:['M1-3','M4-6','P31'], home_comparison:['M1-4','M3-4','P3'],
    movie_preference:['M1-5','P16'], movie_experience:['M1-6'], entertainment_news:['M1-7'], gathering_description:['M1-8'], gathering_event:['M1-9','M1-10'],
    roleplay_delay_questions:['M1-11'], roleplay_reschedule:['M1-12','M2-12','M4-12','P25'], travel_problem:['M1-13','M5-4','P26'], food_delivery_trend:['M1-14','M3-14','M3-15'], restaurant_comparison:['M1-15'],
    music_preference:['M2-2','M5-8','P6'], music_routine:['M2-3'], music_change:['M2-4','M5-9','P17'], park_description:['M2-5','P1'], park_visit:['M2-6','M2-7','P33'],
    holiday_description:['M2-8'], holiday_childhood:['M2-9'], holiday_recent:['M2-10'], roleplay_research:['M2-11','M4-11'], technology_product:['M2-13'], food_shopping_change:['M2-14'], food_safety_news:['M2-15'],
    home_housework:['M3-3'], geography_description:['M3-5'], childhood_place:['M3-6'], nature_beach:['M3-7','P9'], healthy_person:['M3-8','P5'], health_change:['M3-9','M3-10','P42','P43','P44','P45'],
    roleplay_product_questions:['M3-11','P40'], roleplay_product_problem:['M3-12','P14'], product_problem_experience:['M3-13','P41'], weather_seasons:['M4-2'], weather_today:['M4-3'], weather_change:['M4-4','P24'],
    home_problem:['M4-7'], overseas_destination:['M4-8'], overseas_childhood:['M4-9'], overseas_problem:['M4-10'], cancellation_experience:['M4-13'], gathering_comparison:['M4-14'], gathering_planning:['M4-15'],
    domestic_destination:['M5-2','P8'], trip_preparation:['M5-3','P35'], fashion_style:['M5-5','M5-6'], fashion_change:['M5-7'], concert_experience:['M5-10','P32'], roleplay_local_information:['M5-11'],
    roleplay_lost_item:['M5-12','P21'], lost_item_experience:['M5-13'], industry_ai:['M5-14','M5-15','P19'], restaurant_description:['P4'], music_devices:['P7'], hiking_problem:['P10'], free_time_technology:['P11'],
    fashion_shopping:['P12'], roleplay_reservation:['P13','P36'], roleplay_service_problem:['P15','P29','P37','P38'], information_change:['P18'], roleplay_park_plan:['P20'], dentist_experience:['P22'],
    hiking_origin:['P23'], furniture_description:['P27'], recycling_process:['P28'], transportation_problem:['P30'], hiking_preparation:['P34'], service_problem_experience:['P39']
  };
  const addFamily=(name,ids)=>{window.OPIC_SCRIPT_FAMILIES[name]??=[];window.OPIC_SCRIPT_FAMILIES[name].push(...ids)};
  addFamily('introduction',['M6-1','M7-1','M8-1','M9-1','M10-1']);
  addFamily('nature_beach',['M6-2','M6-3','M6-4']); addFamily('home_description',['M6-5']); addFamily('home_problem',['M6-6','M6-7']);
  addFamily('delivery_restaurant',['M6-8','M6-9','M6-10','M6-13']); addFamily('roleplay_health_store_questions',['M6-11']); addFamily('roleplay_product_problem',['M6-12']); addFamily('international_relations',['M6-14','M6-15']);
  addFamily('industry_ai',['M7-2','M7-3','M7-4']); addFamily('music_preference',['M7-5']); addFamily('music_change',['M7-6']); addFamily('concert_experience',['M7-7']);
  addFamily('hotel_core',['M7-8','M7-9','M7-10']); addFamily('roleplay_recycling_questions',['M7-11']); addFamily('roleplay_recycling_explain',['M7-12']); addFamily('recycling_process',['M7-13']); addFamily('travel_issues',['M7-14','M7-15']);
  addFamily('bank_core',['M8-2','M8-3','M8-4']); addFamily('free_time_core',['M8-5','M8-6','M8-7']); addFamily('domestic_destination',['M8-8']); addFamily('childhood_place',['M8-9']); addFamily('travel_problem',['M8-10']);
  addFamily('roleplay_party_questions',['M8-11']); addFamily('roleplay_reschedule',['M8-12']); addFamily('cancellation_experience',['M8-13']); addFamily('housing_core',['M8-14','M8-15']);
  addFamily('movie_preference',['M9-2']); addFamily('movie_experience',['M9-3']); addFamily('entertainment_news',['M9-4']); addFamily('restaurant_core',['M9-5','M9-6','M9-7']); addFamily('technology_core',['M9-8','M9-9','M9-10']);
  addFamily('roleplay_car_rental',['M9-11']); addFamily('roleplay_license_problem',['M9-12']); addFamily('overseas_problem',['M9-13']); addFamily('holiday_description',['M9-14']); addFamily('holiday_concerns',['M9-15']);
  addFamily('appointment_core',['M10-2','M10-3','M10-4']); addFamily('friends_family_core',['M10-5','M10-6','M10-7']); addFamily('park_description',['M10-8']); addFamily('park_visit',['M10-9','M10-10']);
  addFamily('roleplay_travel_questions',['M10-11']); addFamily('roleplay_reschedule',['M10-12']); addFamily('cancellation_experience',['M10-13']); addFamily('appliance_core',['M10-14','M10-15']);
})();
