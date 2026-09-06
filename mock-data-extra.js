// Mock exams 6-10. Repeated topics reuse one canonical answer on purpose.
(function(){
  const exams=window.OPIC_MOCK_EXAMS;
  const reuse=(examId,number)=>exams.find(exam=>exam.id===examId).questions.find(item=>item.number===number).answer;
  const q=(number,type,question,answer,cues,focus='대표 스크립트 공유 · 질문에 맞는 핵심 문장을 강조')=>({number,type,question,answer,cues,focus});
  const intro=()=>reuse('mock-1',1);

  const A={
    deliveryMeal:`My favorite delivery restaurant is a small Korean place near my apartment.

It offers rice bowls, grilled chicken, salads, and dumplings. The restaurant itself is small and simple, but the food is fresh, reasonably priced, and packed carefully. I like it because the delivery is reliable and I can choose extra vegetables.

The last time I ordered from there was two weeks ago for a small birthday party with my friends. I ordered several chicken rice bowls, dumplings, and drinks through an app. The food arrived on time and was still warm.

We put everything on the table, played music, and ate together. Everyone liked the food, and cleaning up was easy because we did not have to cook.

It was memorable because a simple delivery order made the party relaxed and enjoyable.`,
    internationalRelations:`The relationship between Korea and Japan has changed a lot over time.

The two countries have strong economic and cultural connections. Korean and Japanese companies trade many products, and young people enjoy each other’s music, movies, food, and travel. These exchanges have made the relationship feel closer in everyday life.

However, historical issues still cause tension. One important turning point was the 1965 treaty that normalized diplomatic relations. It created official ties and expanded trade, but disagreements about the past did not completely disappear.

More recently, leaders have held meetings and discussed cooperation in business and security. Cultural events and tourism have also helped ordinary people understand one another better.

I think the relationship is complicated, but continued dialogue and cultural exchange can gradually improve it.`,
    hotelCore:`Hotels in Korea range from small business hotels to large luxury resorts.

They are usually located near train stations, airports, downtown areas, or popular tourist attractions. Most provide clean rooms, Wi-Fi, and breakfast, while larger hotels may also have restaurants, gyms, and swimming pools.

The hotel I remember most was a beachfront hotel in Busan. I stayed there with a close friend last summer for a weekend trip. Our room was on a high floor and had a wide ocean view.

We checked in, left our bags, walked along the beach, and ate seafood nearby. In the evening, we used the hotel lounge and watched the lights along the coast.

The service was friendly and the location was convenient. I remember it because the view made a short trip feel special and relaxing.`,
    recyclingChange:`Recycling in Korea is much more organized than it was when I was a child.

These days, people rinse plastic containers, cans, and bottles, remove labels, and put each material in a separate bin. Paper is folded, food waste goes into a special container, and regular trash must be placed in official bags. Apartment residents use a recycling area on scheduled days.

When I was young, there were fewer categories and less clear information. My family separated paper and bottles, but many other items went into one general bag. Collection areas were also smaller and harder to use.

Now signs, colored bins, and community rules make the process easier. It takes a little extra time, but the newer system reduces waste and has become part of my daily routine.`,
    travelIssues:`Travel has become more difficult and expensive over the past five years.

Transportation and hotel prices have increased, and popular destinations are often crowded. Travelers also face sudden weather changes, flight delays, and complicated reservation or cancellation rules. During busy seasons, it can be hard to find reasonably priced rooms or tickets.

These changes force people to plan earlier and spend more time comparing options. Some travelers choose shorter trips or less famous destinations to save money and avoid crowds.

I usually book refundable tickets, check recent reviews, and keep copies of every reservation. I also check the weather and prepare one indoor backup plan.

The main concerns are cost, crowds, and unexpected changes. Careful planning cannot prevent every problem, but it makes travel much less stressful.`,
    bankCore:`Banks in Korea are usually clean, quiet, and well organized.

Branches are commonly located near subway stations, shopping areas, and office buildings. They have service counters, ATMs, number-ticket machines, and staff members who help customers with more complicated work.

When I visit a bank, I usually use an ATM, transfer money, update an account, or ask about a card. I take a number, wait for my turn, show my identification, and explain what I need.

When I was a child, people visited branches much more often and waited in long lines. These days, most simple tasks are done through mobile banking. People can transfer money, pay bills, and check accounts in seconds.

I rarely visit a branch now, but banks are still useful when I need personal advice or identity verification.`,
    freeTimeCore:`People in Korea spend their free time in parks, cafés, shopping malls, movie theaters, and places near their homes.

They usually meet friends, eat, watch movies, exercise, or simply relax. I personally like going to a lake park because I can walk, listen to music, and clear my head.

In the past, I spent more free time watching scheduled television programs at home. These days, I stream music and movies whenever I want, but I also try to spend more time outside because sitting all day makes me tired.

The last time I had a free afternoon was two weeks ago. I met a close friend at the lake park, bought coffee, walked around the water, and watched the sunset.

It was a simple day, but the fresh air and conversation helped me relax.`,
    housingCore:`Homes in my area have changed noticeably over the past ten years.

Older apartments usually had separate rooms, basic appliances, and fewer shared facilities. Newer buildings often have open layouts, built-in storage, smart locks, security cameras, and mobile systems that control lights and heating. Many also include gyms or community rooms.

At the same time, more small studios are being built for people who live alone. They are convenient, but some are expensive and have very limited space.

Housing prices and shortages have become major local issues. A recent news story discussed a large apartment project because some residents wanted more homes, while others worried about traffic, schools, and the loss of green space.

Modern homes are more convenient, but communities still need to balance supply, cost, and quality of life.`,
    restaurantCore:`Restaurants in Korea are very diverse, from small family-run places to large chains.

They are usually clean and busy, and many provide both table service and delivery. When I eat out, I check the menu, order at the table or a kiosk, eat, pay, and sometimes leave a short review.

One restaurant I still remember is a noodle place I visited with my family when I was a child. It was small, with wooden tables and an open kitchen. I could watch the cooks make noodles by hand.

My parents ordered noodles and dumplings, and the owner gave me a small dessert. The food was simple but fresh, and the atmosphere felt warm.

That childhood visit was special because it was one of the first restaurants that felt different from eating at home.`,
    technologyCore:`Smartphones and computers are the most common technologies people use in Korea.

People use them for work, banking, shopping, navigation, entertainment, and communication. Many homes also have smart TVs and wireless devices connected through apps.

When I was a child, computers were slower, phones were mainly used for calls, and internet access was limited. These days, one smartphone can do most tasks instantly, and people can work or study from almost anywhere.

Technology is convenient, but devices sometimes cause problems. My laptop once stopped charging before an important meeting. I restarted it and tried another cable, but nothing worked. I borrowed a coworker’s charger, backed up my files, and later had the battery replaced.

The experience taught me to keep backups and check important devices in advance.`,
    appointmentCore:`I usually make medical, dental, and work appointments by phone or through an app.

I choose an available time, enter my information, and save the confirmation message. I also add the appointment to my phone calendar so I do not forget it.

One memorable appointment happened when I was in elementary school. I had a painful tooth, but I was afraid of the dentist and waited too long. My mother finally took me to a clinic near our home.

I was nervous because of the equipment, but the dentist explained every step. The treatment was quicker and less painful than I expected, and I felt much better afterward.

Since then, I have visited the dentist regularly. That childhood experience taught me that keeping an appointment early can prevent a small problem from becoming worse.`,
    friendsFamilyCore:`One of the people I am closest to is my older brother.

He is calm, practical, and easy to talk to. He listens carefully and gives useful advice without judging me. He is also active and tries to stay healthy.

When we spend time together, we usually have a meal, take a walk, or watch a movie. We both like simple activities because they give us time to talk.

The last time I met him was two weeks ago on a Saturday. We had lunch near my parents’ home, walked through a nearby park, and talked about work and family news. After that, we had coffee before going home.

Nothing unusual happened, but I felt relaxed. I value our time together because he understands me well and always helps me see things clearly.`,
    applianceCore:`Robot vacuum cleaners are one of the most useful modern household appliances.

They use sensors to move around furniture, clean floors automatically, and return to a charging station by themselves. People can schedule them or control them with a smartphone app even when they are away from home.

In the past, people had to vacuum every room by hand. Now a robot can handle basic daily cleaning, so households save time and keep dust under control more easily. This is especially helpful for busy workers, older people, and pet owners.

The device cannot clean every corner or handle stairs, so a regular vacuum is still necessary sometimes. Even so, most people think it is convenient because it reduces repetitive housework.

I would like to use one because my studio gets dusty quickly.`,
    holidayConcern:`Korean holidays such as Chuseok and Lunar New Year are important family celebrations, but they also create some concerns.

Most people travel to their hometowns, share traditional food, and spend time with relatives. Because so many people move at the same time, highways and train stations become extremely crowded. Transportation prices can rise, and preparing food or gifts can also be expensive.

Some people feel pressure from long trips, family expectations, and the amount of work required for a large meal. Others have shorter vacations and cannot visit everyone.

To deal with these problems, families book tickets early, divide the cooking, order some food, or meet on a different day. Some choose a smaller gathering instead.

The holidays can be stressful, but better planning helps people focus on spending meaningful time together.`
  };

  const ask=(reason,items,close)=>`Hello. ${reason}, and I have a few questions.

First question: ${items[0]} ${items[1]}

I’d also like to know ${items[2]} One more question: ${items[3]}

${close}

Thank you for your help.`;
  const solve=(subject,problem,first,second,proof)=>`Hello. I’m calling about ${subject}.

Unfortunately, ${problem}

Could you ${first}? If that is not possible, I would like you to ${second}.

${proof}

Please tell me which option is possible and how long it will take. I would appreciate your help.`;
  const C={
    delivery:['favorite Korean place','fresh healthy menu','recent app order','friends’ birthday party','warm and memorable'],
    relations:['Korea and Japan','trade and culture','1965 treaty','dialogue and exchange','complicated but improving'],
    hotel:['many hotel types','near transport and attractions','Busan beachfront hotel','friend · ocean view','special short trip'],
    recycle:['separate by material','official bags','simpler childhood system','clear bins and rules','less waste'],
    travelIssue:['higher prices','crowds and delays','plan earlier','refundable bookings','backup plan'],
    bank:['branches near stations','ticket and ID','ATM · transfer · cards','mobile banking now','personal advice'],
    free:['parks · cafés · theaters','past TV routine','technology now','friend at lake park','clear my head'],
    housing:['older vs smart homes','more studios','prices and shortages','new project controversy','balance needed'],
    restaurant:['many restaurant types','order · eat · pay','childhood noodle place','family · dumplings','warm memory'],
    technology:['phones and computers','past vs present','many daily uses','laptop stopped charging','backup and repair'],
    appointment:['medical · dental · work','app and calendar','childhood dentist','nervous but easier','go regularly now'],
    people:['older brother','calm and practical','meals · walks · movies','last Saturday','understands me'],
    appliance:['robot vacuum','sensors and app','saves cleaning time','small limitations','convenient overall']
  };

  exams.push({id:'mock-6',title:'모의고사 6',subtitle:'해변 · 집 · 배달음식 · 건강식품점 · 국제관계',questions:[
    q(1,'Introduction',`Let’s start the interview now. Tell me something about yourself.`,intro(),['Daeho','Suwon City','do well today','Thank you'],'고정 답변'),
    q(2,'Beach · Description',`Tell me about your favorite beach. What does it look like? Where is it, and how often do you go there?`,reuse('mock-3',7),['Busan · Haeundae','sandy shore','cafés','several visits','get away from it all']),
    q(3,'Beach · Routine',`When you go to the beach, what do you usually do, and who do you usually go with?`,reuse('mock-3',7),['close friend','walk','music','seafood','sunset']),
    q(4,'Beach · Recent Experience',`When was the last time you went to the beach? What did the beach look like? What did you do? Who did you go with?`,reuse('mock-3',7),['weekend trip','friend','clear water','walk · seafood','sunset']),
    q(5,'Home · Description',`I’d like to talk about where you live. Tell me about your home. What does it look like? How many rooms does it have?`,reuse('mock-1',2),['studio in Suwon','one main room','bed · table · TV','small kitchen','convenient']),
    q(6,'Home · Problem',`Can you tell me about some problems you have had in your home? For example, something broke or someone you lived with didn’t cooperate with you.`,reuse('mock-4',7),['air conditioner','last summer','called landlord','technician','fan and café']),
    q(7,'Home · Problem Detail',`Pick one of the problems you mentioned above and describe it in detail. What was the problem? What caused it, and how did you handle it?`,reuse('mock-4',7),['air conditioner','dusty filter','called landlord','technician','fixed next day']),
    q(8,'Delivery · Favorite Restaurant',`Tell me about your favorite takeout or delivery restaurant. What kind of food do they offer? What is the place like, and why do you like it?`,A.deliveryMeal,C.delivery),
    q(9,'Delivery · Recent Order',`Tell me about the last time you ordered food from a takeout or delivery restaurant. What did you order, and how was the experience?`,A.deliveryMeal,C.delivery),
    q(10,'Delivery · Special Experience',`Tell me about a special time when you got food from a takeout or delivery restaurant, such as for a party. What was the occasion? How did you get the food? Was it a memorable experience?`,A.deliveryMeal,C.delivery),
    q(11,'Role-play · Health Store Questions',`I'd like to give you a situation and ask you to act it out. A new health food store recently opened near your home. Call the store and ask three or four questions to learn more about what they offer.`,ask('A new health food store opened near my home',['What kinds of fresh or organic food do you sell?','Do you have ready-made healthy meals?','whether you offer delivery or a membership discount.','What time do you close on weekdays?'],'If you have fresh salads and fruit in stock, I would like to visit this evening.'),['products','ready-made meals','delivery · discount','hours','visit tonight']),
    q(12,'Role-play · Store Product Problem',`I'm sorry, but there's a problem I need you to resolve. You bought something at the store, but you just found a problem with it. Call the store, tell them about the issue, and discuss a solution.`,solve('a salad I bought from your store today','the package was already open and the vegetables do not smell fresh.','replace it with a fresh salad','give me a full refund','I have the receipt and can bring the product back to the store.'),['salad purchased today','open package','replace','refund','receipt']),
    q(13,'Meal · Memorable Experience',`That's the end of the situation. Can you tell me about a memorable meal you had with your friends or colleagues? What did you eat? Who were you with? Where did you eat? What made it memorable?`,A.deliveryMeal,C.delivery),
    q(14,'International Relations · Change',`Tell me about a change in the relationship between your country and another country. It could be related to politics, the economy, sports, or culture.`,A.internationalRelations,C.relations),
    q(15,'International Relations · History',`Can you talk about a historic event that changed the relationship between your country and a neighboring country? For example, a treaty between the two countries, a cultural event, or the visit of a leader from another country.`,A.internationalRelations,C.relations)
  ]});

  exams.push({id:'mock-7',title:'모의고사 7',subtitle:'직업·산업 · 음악 · 호텔 · 재활용 · 여행 이슈',questions:[
    q(1,'Introduction',`Let’s start the interview now. Tell me something about yourself.`,intro(),['Daeho','Suwon City','do well today','Thank you'],'고정 답변'),
    q(2,'Career · Desired Companies',`Can you tell me about some companies that young people want to work for? Why do they want to work at these companies?`,reuse('mock-5',15),['technology companies','AI growth','good opportunities','skills and training','future potential']),
    q(3,'Industry · Rising Field',`Tell me about a rising company or industry in your country. Why is it growing? How has this company or industry achieved success?`,reuse('mock-5',15),['AI industry','rapid growth','investment','useful services','future']),
    q(4,'Career · Personal Effort',`What have you done for your career? What efforts have you made to get your job or improve your work skills?`,reuse('mock-5',14),['study skills','online courses','project training','keep learning','career growth']),
    q(5,'Music · Preference',`You indicated in the survey that you like to listen to music. What kind of music do you listen to? Who is your favorite musician or composer?`,reuse('mock-2',2),['K-pop · soft rock','IU','clear voice','daily listening','relax']),
    q(6,'Music · Change',`How did you first become interested in listening to music? What kinds of music did you like listening to in the past, and how has your taste in music changed over time?`,reuse('mock-2',4),['middle school','friend’s album','dance music','softer songs','lyrics']),
    q(7,'Music · Live Experience',`Tell me about a time you listened to live music. Was it at a concert? Who did you go with? Was it memorable?`,reuse('mock-5',10),['outdoor concert','close friend','live atmosphere','favorite song','lasting impression']),
    q(8,'Hotels · Description',`Tell me about the hotels in your country. What are they like? Where are they usually located?`,A.hotelCore,C.hotel),
    q(9,'Hotels · Memorable Experience',`Can you tell me about a memorable hotel experience? What was the hotel called, and where was it? What was the place like? Why do you remember that hotel?`,A.hotelCore,C.hotel),
    q(10,'Hotels · Recent Experience',`When was the last time you stayed in a hotel? Where was it? Why did you go there? Tell me in detail what you did at the hotel.`,A.hotelCore,C.hotel),
    q(11,'Role-play · Recycling Questions',`I'd like to give you a situation and ask you to act it out. You just moved into a new apartment and you are wondering about recycling. Call the management office and ask three or four questions about how to recycle.`,ask('I just moved into the apartment and need information about recycling',['Where is the recycling area?','Which day and time can residents use it?','how I should separate plastic, glass, paper, and food waste.','Do large items require a special sticker?'],'Could you send me a copy of the recycling rules?'),['location','day and time','categories','large items','rules']),
    q(12,'Role-play · Explain Recycling',`I'm sorry, but there's a problem I need you to resolve. Your new neighbor from abroad put garbage in the recycling bin, and tenants are complaining about it. Talk to your neighbor and explain how to recycle properly.`,`Hi. I think there was a small misunderstanding about our recycling area.

Some regular garbage was placed in the recycling bin, and a few tenants complained. The rules can be confusing, so let me explain them.

Please rinse plastic, cans, and bottles and put each material in a separate bin. Food waste goes into the special food container, and regular trash must go into an official bag. Large items need a sticker from the management office.

Could you sort the bag again today? If you are unsure, I can show you the bins or give you the English recycling guide.

I know the system is new to you, and I appreciate your understanding.`,['misunderstanding','separate materials','food waste','official bag','offer help']),
    q(13,'Recycling · Past and Present',`That's the end of the situation. Tell me how people recycled when you were a child. Was there a place for recycling? How was recycling in the past different from how we recycle now?`,A.recyclingChange,C.recycle),
    q(14,'Travel · Recent Changes',`You indicated in the survey that you take vacations domestically. A lot of people say that traveling has become more difficult in the past five years. Can you tell me what kinds of changes you have noticed in traveling? How have these changes affected travelers?`,A.travelIssues,C.travelIssue),
    q(15,'Travel · Issues',`What are the main issues or concerns when people talk about traveling? What are the causes of these concerns? How do people deal with them?`,A.travelIssues,C.travelIssue)
  ]});

  exams.push({id:'mock-8',title:'모의고사 8',subtitle:'은행 · 자유시간 · 국내여행 · 파티 롤플레이 · 주거 변화',questions:[
    q(1,'Introduction',`Let’s start the interview now. Tell me something about yourself.`,intro(),['Daeho','Suwon City','do well today','Thank you'],'고정 답변'),
    q(2,'Banks · Description',`Tell me about the banks in your country. What are they like? Where are they typically located?`,A.bankCore,C.bank),
    q(3,'Banks · Routine',`What do you usually do when you go to the bank? Tell me about the kinds of things you do there.`,A.bankCore,C.bank),
    q(4,'Banks · Change',`How have banks in your country changed over time? What were banks like when you were a child, and how are they different now?`,A.bankCore,C.bank),
    q(5,'Free Time · Places',`Where do people in your country usually go in their free time, and what do they like to do there?`,A.freeTimeCore,C.free),
    q(6,'Free Time · Change',`How did you spend your free time in the past? How has the way you spend your free time changed over the years?`,A.freeTimeCore,C.free),
    q(7,'Free Time · Recent Experience',`Can you tell me about the last time you had some free time? What did you do? Where did you go? Who did you spend time with?`,A.freeTimeCore,C.free),
    q(8,'Domestic Travel · Favorite Places',`You indicated in the survey that you take vacations domestically. Tell me about some of the cities or places you like to visit. Why do you enjoy going there?`,reuse('mock-5',2),['Busan · Haeundae','beach','friend','seafood · sunset','relaxing']),
    q(9,'Domestic Travel · Childhood',`Tell me about a trip you took when you were a child. Where did you go? Who did you go with? What did you do?`,reuse('mock-3',6),['Jeju Island','family','unique landscape','beach and rocks','childhood impression']),
    q(10,'Domestic Travel · Unexpected',`You may have experienced something unexpected while traveling. Tell me about an unforgettable experience you had during a trip. What happened? What made it so memorable?`,reuse('mock-5',4),['Busan','heavy rain','flood warning','changed plans','check weather']),
    q(11,'Role-play · Party Questions',`I'd like to give you a situation and ask you to act it out. Your friend invited you to a holiday party at their home. Call them and ask when the party is and what time it starts, and if you should bring anything. Ask two or three more questions about the party.`,ask('Thanks for inviting me to your holiday party',['What day is the party, and what time does it start?','What should I bring?','whether many people are coming and what food you are serving.','Is there parking nearby?'],'Please send me your address, and I will let you know what dish I can bring.'),['date · time','what to bring','guests · food','parking','address']),
    q(12,'Role-play · Late for Party',`I'm sorry, but there is a problem that I need you to resolve. You just had a car accident and are going to be late for the holiday party. Call your friend, let them know what happened, and discuss two or three ideas about what you should do.`,solve('your holiday party','I had a minor car accident on the way, so I will be late. No one is hurt, but I need to speak with the police and insurance company.','start the party without me and save some food','let me join by video if the delay becomes too long','I can arrive later by taxi, or we can meet another day if necessary.'),['minor accident','no injuries','start without me','taxi or video','meet another day']),
    q(13,'Cancellation · Emergency Experience',`That's the end of the situation. Have you ever been in a situation where you made plans for a trip or a party but had to cancel at the last minute because of an emergency? Talk about the situation and how you dealt with it.`,reuse('mock-4',13),['important plan','high fever','contacted early','shared files · video','rescheduled']),
    q(14,'Housing · Change',`I'd like to talk about where you live. How has the style of homes where you live changed over the past five or ten years? Are the homes being built today different from the homes built 10 years ago? What developments or changes have you noticed?`,A.housingCore,C.housing),
    q(15,'Housing · News Issue',`Sometimes, the issue of having too many new homes or not enough new homes can create controversy in a community. Think of a time when a housing issue was in the news in your area. What was the issue, and why were people talking about it?`,A.housingCore,C.housing)
  ]});

  exams.push({id:'mock-9',title:'모의고사 9',subtitle:'영화 · 음식점 · 기술 · 렌터카 롤플레이 · 명절',questions:[
    q(1,'Introduction',`Let’s start the interview now. Tell me something about yourself.`,intro(),['Daeho','Suwon City','do well today','Thank you'],'고정 답변'),
    q(2,'Movies · Preference',`You mentioned in the survey that you go to the movies. What kinds of movies do you like to watch? Why do you enjoy those kinds of movies?`,reuse('mock-1',5),['action movies','fast stories','large screen','take my mind off things','favorite genre']),
    q(3,'Movies · Memorable Movie',`Tell me about a memorable movie you have watched. What was it about? What made it special?`,reuse('mock-1',6),['action movie','close friend','exciting story','better than expected','café afterward']),
    q(4,'Movies · Actor News',`Can you tell me about an actor or actress you recently saw in the news? What was the news about? Did you find it interesting?`,reuse('mock-1',7),['actor in the news','new project','interesting details','personal reaction','lasting impression']),
    q(5,'Restaurants · Description',`Tell me about the restaurants in your country. What are they like?`,A.restaurantCore,C.restaurant),
    q(6,'Restaurants · Routine',`What do you usually do when you go to a restaurant? What steps do you take when you eat out?`,A.restaurantCore,C.restaurant),
    q(7,'Restaurants · Childhood',`Can you tell me about a time you ate at a restaurant when you were a child? Where did you go? What was the restaurant like? Who did you go with? Was the experience special to you?`,A.restaurantCore,C.restaurant),
    q(8,'Technology · General',`What kinds of technology are commonly used in your country? Tell me about some of the technology people use, such as phones and computers.`,A.technologyCore,C.technology),
    q(9,'Technology · Change',`You may have noticed that technology has changed over the years. What was technology like when you were a child? How has it changed since then?`,A.technologyCore,C.technology),
    q(10,'Technology · Problem',`Have you ever had problems dealing with technology? Maybe one of your devices stopped working or broke. Tell me about one of your experiences. How did you solve the problem?`,A.technologyCore,C.technology),
    q(11,'Role-play · Rent a Car',`I'd like to give you a situation and ask you to act it out. You are visiting New York on vacation, and you want to rent a car from an agency. Ask the agent three or four questions about renting a car for a week.`,ask('I’m visiting New York and would like to rent a car for one week',['What cars are available for my dates?','What is the total price, including insurance?','whether there is a mileage limit and where I can return the car.','What documents and deposit do I need?'],'If a small automatic car is available, I would like to reserve it.'),['available cars','weekly price','insurance · mileage','documents · deposit','reserve']),
    q(12,'Role-play · Driver’s License',`I'm sorry, but there's a problem that I need you to resolve. The agency isn't sure they can rent you a car because you have a non-US driver's license. Explain what kind of license you have and why it is valid for renting a car.`,`Hello. I understand that you have a question about my driver’s license.

I have a valid Korean license and an official international driving permit. Both documents show my name, photograph, license number, and expiration date. The international permit includes an English translation and is valid during my visit.

I also have my passport and the credit card I used for the reservation. Could you verify the documents with your manager? If you still cannot approve the rental, could you contact another branch or offer a car with an additional insurance plan?

I prepared these documents specifically for driving abroad. Please tell me what else you need so we can complete the rental.`,['Korean license','international permit','passport · credit card','manager verification','other option']),
    q(13,'Vacation · Memorable Experience',`That's the end of the situation. Tell me about an interesting experience that you had while you were on vacation. Why was it memorable? Was it a positive or negative experience? Tell me when and where it happened, and who you were with.`,reuse('mock-4',10),['Japan trip','friend','wrong train','asked employee','stressful but useful']),
    q(14,'Holidays · Description',`Tell me about some holidays in your country. What do people do on those holidays? How do they celebrate them?`,reuse('mock-2',8),['Chuseok','family home','traditional food','childhood and recent','reconnect']),
    q(15,'Holidays · Concerns',`Talk about some issues or concerns people have about holidays. Why do people have concerns about them, and how do they deal with them?`,A.holidayConcern,['Chuseok · Lunar New Year','traffic','cost and pressure','book early · share work','smaller gathering'])
  ]});

  exams.push({id:'mock-10',title:'모의고사 10',subtitle:'약속 · 친구와 가족 · 공원 · 여행 롤플레이 · 생활가전',questions:[
    q(1,'Introduction',`Let’s start the interview now. Tell me something about yourself.`,intro(),['Daeho','Suwon City','do well today','Thank you'],'고정 답변'),
    q(2,'Appointments · Routine',`What kinds of appointments do you usually make, and how do you arrange or schedule them?`,A.appointmentCore,C.appointment),
    q(3,'Appointments · Childhood',`Can you tell me about an appointment you had when you were a child? Maybe it was a doctor’s or dentist’s appointment. Tell me about your experience with an appointment from your childhood.`,A.appointmentCore,C.appointment),
    q(4,'Appointments · Memorable Experience',`Do you have a memorable experience related to an appointment? Was it interesting or surprising? What happened, and what made it so memorable for you?`,A.appointmentCore,C.appointment),
    q(5,'Friends and Family · Person',`Can you tell me about one of your friends or a family member? What is he or she like?`,A.friendsFamilyCore,C.people),
    q(6,'Friends and Family · Routine',`What do you usually do when you spend time with your friends or family? What activities do you like to do with them?`,A.friendsFamilyCore,C.people),
    q(7,'Friends and Family · Recent',`Can you describe the last time you spent time with a friend or family member? When was it? Who did you meet, and what did you do?`,A.friendsFamilyCore,C.people),
    q(8,'Park · Description',`You indicated in the survey that you go to parks. Tell me about a park you like to visit. What is it like? What do people do at the park?`,reuse('mock-2',5),['lake park','walking path','people’s activities','music and walk','relax']),
    q(9,'Park · First Interest',`When did you first start visiting parks? How did you become interested in going to parks? What made you go?`,reuse('mock-2',6),['lake park','started for stress','regular walks','fresh air','keep visiting']),
    q(10,'Park · Memorable Experience',`Can you tell me about a memorable experience you had at a park? Was it interesting? Tell me what happened in detail.`,reuse('mock-2',7),['friend','walk around lake','sunset','pictures','clear my head']),
    q(11,'Role-play · Travel Agency',`I'd like to give you a situation and ask you to act it out. You are planning a vacation with a friend. Call a travel agency, explain the vacation you and your friend would like, and ask three or four questions about how to plan the trip.`,ask('My friend and I are planning a relaxing beach vacation',['Which destination do you recommend for a three-day trip?','What transportation and hotel packages are available?','whether breakfast and airport transportation are included.','What is the cancellation policy?'],'Please email me the total price and a simple schedule so we can decide.'),['beach vacation','destination','transport · hotel','included services','price · schedule']),
    q(12,'Role-play · Non-refundable Ticket',`I'm sorry, but there's a problem that I need you to resolve. You bought a non-refundable plane ticket, but you can't travel because something came up. Call the travel agent, explain the situation, and suggest some alternative solutions.`,solve('a non-refundable plane ticket I bought for next weekend','a family emergency came up, so I cannot travel on that date.','change the ticket to the following weekend and let me pay the difference','give me travel credit that I can use later','I can provide documents about the emergency and am also willing to choose another flight.'),['non-refundable ticket','family emergency','change date','travel credit','supporting documents']),
    q(13,'Vacation Planning · Problem',`That's the end of the situation. Have you ever had trouble making vacation plans? Talk about what happened and how you solved the problem.`,reuse('mock-1',13),['Busan trip','heavy rain','flood warning','changed plans','stayed safe']),
    q(14,'Home Appliances · Change',`Many homes nowadays have new appliances or electronic devices that make life more convenient. Tell me about some new home appliances or electronic devices. How have they changed households?`,A.applianceCore,C.appliance),
    q(15,'Home Appliances · Useful Device',`Tell me about a modern household appliance or device that people find useful or convenient. What do people think about this home appliance or device?`,A.applianceCore,C.appliance)
  ]});
})();
