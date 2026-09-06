// Add future mock exams as another object in this array.
// Keeping the content separate from index.html makes updates much easier.
window.OPIC_MOCK_EXAMS = [
  {
    id: 'mock-1',
    title: '모의고사 1',
    subtitle: '집 · 영화 · 모임 · 여행 롤플레이 · 음식점',
    questions: [
      {
        number: 1,
        type: 'Introduction',
        question: "Let’s start the interview now. Tell me something about yourself.",
        answer: `Hi, my name is Daeho.
I live in Suwon City.
I hope I do well today.
Thank you.`,
        cues: ['Daeho', 'Suwon City', 'do well today', 'Thank you'],
        focus: '고정 답변 · 천천히 또렷하게',
        fixed: true
      },
      {
        number: 2,
        type: 'Home · Description',
        question: "Let's talk about where you live. Could you describe your home? What does it look like, and how many rooms does it have?",
        answer: `I live in a small studio apartment in Suwon.

It’s not very big, but it’s cozy and comfortable. Since it’s a studio apartment, there is just one main room.

I have a bed, a small table, a TV, and a kitchen in the same space. There is also a small bathroom.

What I like most about my apartment is that everything is close to me, so it’s very convenient.

I’ve lived there for a few years, and I’m pretty happy with it.

So overall, it’s small, but it’s a nice place to live.`,
        cues: ['studio in Suwon', 'cozy and comfortable', 'one main room', 'everything is close', 'lived there for years'],
        focus: '전체 모습 → 가구 → 장점 → 현재완료'
      },
      {
        number: 3,
        type: 'Home · Routine',
        question: 'What do you usually do at home? How does your routine differ on weekdays compared to weekends? Tell me about your typical day.',
        answer: `Well, my routine is quite different on weekdays and weekends.

On weekdays, I usually get home after work, take a quick shower, and have dinner. Since I live in a studio, everything I need is close by, which makes my evening routine simple. After dinner, I watch YouTube or listen to music to blow off steam. Then I study English for a while before going to bed.

On weekends, I take things more slowly. I clean my apartment, do the laundry, and sometimes cook a proper meal. If I have no plans, I watch a movie on my TV and just relax.

So I would say weekdays are short and structured, while weekends are much more relaxing.`,
        cues: ['weekdays vs weekends', 'after work routine', 'blow off steam', 'clean and cook', 'structured vs relaxing'],
        focus: '평일 → 주말 → 한 문장 비교'
      },
      {
        number: 4,
        type: 'Home · Comparison',
        question: 'Tell me about the home you lived in as a child. How is it different from the home you live in now?',
        answer: `When I was a child, I lived with my family in a three-bedroom apartment in Suwon.

It was much bigger than my current studio, and I had my own bedroom. The living room was the center of the home, where my family watched TV and ate snacks together. It was sometimes noisy, but the house always felt lively.

These days, I live alone in a small studio apartment. I have less space, but it is easier to clean and everything is within reach. I can also decorate it exactly the way I want.

The biggest change is that I have more privacy now. Still, I sometimes miss the warm and busy atmosphere of my childhood home.`,
        cues: ['three-bedroom family home', 'bigger and lively', 'small studio now', 'easy to clean', 'privacy vs warm atmosphere'],
        focus: 'Back then → these days → biggest change'
      },
      {
        number: 5,
        type: 'Movies · Preference',
        question: 'You indicated in the survey that you go to the movies. What kinds of movies do you like to watch? Why do you like those movies?',
        answer: `I am really into action movies, especially movies with a fast story and exciting chase scenes.

The main reason is that they help me forget about work and take my mind off things. I also like the powerful sound and large screen at the theater, which make every scene feel more realistic.

I usually choose movies that are easy to follow and have a likable main character. I am not a big fan of movies that are too slow or depressing.

I’ve watched a wide range of action movies over the years, and the best ones always leave a lasting impression on me. So action is definitely my favorite genre.`,
        cues: ['action movies', 'chase scenes', 'take my mind off things', 'big screen and sound', 'lasting impression'],
        focus: '선호 → 이유 2개 → 비선호 비교 → 마무리'
      },
      {
        number: 6,
        type: 'Movies · Recent Experience',
        question: 'Tell me about the last time you went to the movies. What did you do before and after the movie?',
        answer: `Actually, I went to the movies with a close friend a few weeks ago.

We met at a shopping mall in Suwon and had dinner before the movie. We chose a new action movie, which had received a lot of good reviews. Before entering the theater, we bought popcorn and drinks and took a picture near the movie poster.

The movie was much better than I expected. The action scenes were amazing, and we were completely focused the whole time.

After the movie, we went to a café and talked about our favorite scenes. I got home pretty late, but I had a blast, so it was worth it.`,
        cues: ['friend · a few weeks ago', 'dinner first', 'action movie', 'better than expected', 'café afterward'],
        focus: '시간 순서 · before / during / after'
      },
      {
        number: 7,
        type: 'Movies · News',
        question: 'Share a story about an actor or actress you saw in the news. What was the news about? Was it interesting? Tell me the details of what happened.',
        answer: `Come to think of it, I recently saw a news story about an actor from a movie I liked.

The article said that he had won a major acting award for his latest action movie. What surprised me most was that he had trained for about six months and performed many of the action scenes himself. He said the training was difficult, but it helped him understand the character better.

There were also short interviews with the director and other actors, who praised his effort and attitude.

I found the story interesting because it showed how much work happens behind the scenes. Since then, I have wanted to watch the movie one more time.`,
        cues: ['recent article', 'won an award', 'trained six months', 'did action scenes', 'behind-the-scenes effort'],
        focus: '뉴스 핵심 → 놀라운 세부 → 내 반응'
      },
      {
        number: 8,
        type: 'Gatherings · Description',
        question: 'Tell me about the gatherings and celebrations where you live. What are they like?',
        answer: `In Korea, people have many kinds of gatherings, such as birthday parties, weddings, family celebrations, and year-end dinners.

Most small gatherings are held at restaurants or cafés because people do not always have enough space at home. A typical gathering starts with a meal, and people spend a lot of time talking and taking pictures. For birthdays, someone usually brings a cake, and everyone sings together.

Larger celebrations, such as weddings, are more formal and are often held in wedding halls. Many guests come, have a meal, and congratulate the couple.

The location may be different, but good food and spending time together are always the most important parts.`,
        cues: ['birthdays · weddings · dinners', 'restaurants or cafés', 'food and pictures', 'wedding halls', 'time together'],
        focus: '종류 → 장소 → 보통 하는 일 → 공통점'
      },
      {
        number: 9,
        type: 'Gatherings · Experience',
        question: 'Can you tell me about a gathering or a celebration that you attended? Where was it held? What did you do? Who did you meet there?',
        answer: `One of the most enjoyable gatherings I attended was my cousin’s birthday dinner last year.

It was held in a private room at a Korean restaurant in Suwon. About ten family members came, including relatives I had not seen for a long time. We ordered several dishes and shared them, so everyone could try different food.

After dinner, we brought out a cake and took a lot of family pictures. I spent most of the evening catching up with my cousins and talking about work and travel.

The food was great, but seeing my relatives again was the best part. The dinner left a lasting impression on me.`,
        cues: ["cousin's birthday", 'private room in Suwon', 'ten relatives', 'meal and pictures', 'catching up'],
        focus: '언제·어디서·누구와 → 활동 → 느낌'
      },
      {
        number: 10,
        type: 'Gatherings · Problem',
        question: 'You might experience something unexpected at a gathering or a celebration. Do you have a memorable experience from a gathering or celebration? What happened?',
        answer: `Yes, I remember one time when I went to a year-end gathering with my coworkers.

We had made a reservation at a popular restaurant, but when we arrived, the staff could not find it. At first, we were confused because the restaurant was completely full. I showed the manager the confirmation message on my phone and explained what had happened.

Luckily, the manager found us a private room after about twenty minutes and gave us complimentary drinks while we waited.

It was annoying at first, but everything worked out in the end. We had a great time, and now we always double-check our reservations before a gathering.`,
        cues: ['year-end gathering', 'reservation missing', 'showed confirmation', 'waited twenty minutes', 'worked out'],
        focus: '상황 → 문제 → 행동 → 결과 → 교훈'
      },
      {
        number: 11,
        type: 'Role-play · Flight Delay',
        question: 'You are at the airport and just found out that your flight is delayed by two hours. At the airline counter, ask three or four questions about the delay.',
        answer: `Excuse me. I just saw that my flight has been delayed by two hours, and I have a few questions.

First, could you tell me why the flight was delayed? Also, is the new departure time confirmed, or could it be delayed again?

I have a connecting schedule after I arrive, so is there an earlier flight or another route I could take? If not, does the airline provide a meal voucher or a place where passengers can rest?

Finally, where can I check the latest updates about the flight?

I would really appreciate your help. Thank you.`,
        cues: ['reason', 'confirmed departure time', 'earlier flight or route', 'meal voucher', 'latest updates'],
        focus: '질문 4개 · 실제 필요한 정보만'
      },
      {
        number: 12,
        type: 'Role-play · Leave a Message',
        question: "Your flight was delayed, so you can't attend an important meeting today. Call your client and leave a message about the situation. Suggest two or three alternative options.",
        answer: `Hello, this is Daeho. I’m calling about our meeting scheduled for this afternoon.

I’m really sorry, but my flight has been delayed by two hours because of bad weather, so I won’t be able to arrive on time.

Would it be possible to move the meeting to tomorrow morning? If that does not work for you, we could have a video call later this evening. Another option is for me to send you the presentation and a written summary first, and then we can talk by phone.

Please let me know which option works best for you. Again, I’m sorry for the inconvenience, and I hope to speak with you soon.`,
        cues: ['identify meeting', 'flight delay', 'tomorrow morning', 'video call', 'send materials first'],
        focus: '사과 → 이유 → 대안 3개 → 회신 요청'
      },
      {
        number: 13,
        type: 'Travel · Problem',
        question: 'You may have had problems while you were on a trip. Talk about a problem you had while traveling. What was the problem, and how did you deal with the situation?',
        answer: `As far as I remember, my most difficult travel experience happened in Busan a few years ago.

I went there with a friend to relax and enjoy the beach. The weather was nice in the morning, but it suddenly started raining very heavily. A flood warning was issued, and some streets near our hotel were blocked.

At first, we tried to wait for the rain to stop, but it kept getting worse. We called the hotel, changed our outdoor plans, and took a taxi back before the roads became more dangerous.

We were disappointed, but we stayed safe and spent the evening at the hotel. I’ve never seen rain that heavy before, so I now check the weather carefully before every trip.`,
        cues: ['Busan trip', 'sudden heavy rain', 'flood warning', 'called hotel and took taxi', 'check weather now'],
        focus: '배경 → 돌발 문제 → 대처 → 결과·교훈'
      },
      {
        number: 14,
        type: 'Restaurants · Trend',
        question: 'Many restaurants are changing their menus to appeal to health-conscious customers. Tell me about some of the changes restaurants are making.',
        answer: `These days, many restaurants are making their menus healthier because customers care more about what they eat.

One major change is that restaurants offer more salads, grilled dishes, and plant-based meals instead of only fried or heavy food. Many places also let customers choose brown rice, smaller portions, or low-sugar drinks.

On top of that, calorie and allergy information is often shown on the menu, which helps people make better choices. Some restaurants clearly mark vegetarian or high-protein options as well.

Compared to the past, customers now have a much wider range of healthy choices. I think this is a beneficial change because people can eat out without giving up their health goals.`,
        cues: ['salads and grilled food', 'plant-based options', 'smaller portions', 'nutrition information', 'wider choice'],
        focus: '변화 3개 → 과거 비교 → 의견'
      },
      {
        number: 15,
        type: 'Restaurants · Comparison',
        question: 'You know what to expect from menus in chain restaurants, but small local independent restaurants have their own unique menus. Tell me about your experience at a chain restaurant and a local independent restaurant.',
        answer: `I’ve been to both chain restaurants and small local restaurants many times, and the experiences are quite different.

At a chain restaurant, the menu and service are predictable. I recently visited one in Suwon, and I knew exactly what to order because the food tastes almost the same at every location. It was convenient and the service was fast, but the meal did not feel very special.

On the other hand, I once visited a small local restaurant that served its own handmade noodles. The owner explained how the noodles were made, and the dish had a unique flavor that I had never tried before. The service was slower, but the atmosphere was warmer and more personal.

So chain restaurants are better for convenience, but local restaurants are my choice when I want a memorable meal.`,
        cues: ['both many times', 'chain = predictable and fast', 'local handmade noodles', 'warm and personal', 'convenience vs memorable'],
        focus: '공통 경험 → chain → local → 선호 결론'
      }
    ]
  },
  {
    id: 'mock-2',
    title: '모의고사 2',
    subtitle: '음악 · 공원 · 휴일 · 기술 롤플레이 · 식품',
    questions: [
      {
        number: 1, type: 'Introduction',
        question: 'Let’s start the interview now. Tell me something about yourself.',
        answer: `Hi, my name is Daeho.
I live in Suwon City.
I hope I do well today.
Thank you.`,
        cues: ['Daeho', 'Suwon City', 'do well today', 'Thank you'], focus: '고정 답변 · 천천히 또렷하게', fixed: true
      },
      {
        number: 2, type: 'Music · Preference',
        question: 'You indicated in the survey that you listen to music. What kind of music do you listen to, and who are some of your favorite musicians or composers?',
        answer: `I listen to many kinds of music, but I mostly enjoy Korean pop and soft rock.

One of my favorite singers is IU because she has a clear voice and her lyrics are easy to relate to. I also like Coldplay. Their songs have powerful melodies, and they always cheer me up when I feel tired.

I usually choose upbeat songs during my commute and slower songs when I want to relax at home. Music helps me clear my head and take my mind off work.

I’ve listened to both artists for years, and their music has become a big part of my daily routine.`,
        cues: ['K-pop and soft rock', 'IU · relatable lyrics', 'Coldplay · powerful melodies', 'commute vs home', 'clear my head'], focus: '장르 → 좋아하는 가수 2명 → 듣는 상황 → 느낌'
      },
      {
        number: 3, type: 'Music · Routine',
        question: 'When and where do you usually listen to music? Do you listen to the radio, or do you go to concerts?',
        answer: `I listen to music almost every day, especially during my commute and when I am relaxing at home.

On my way to work, I use a streaming app on my phone and listen through wireless earphones. Upbeat music helps me wake up and start the day with more energy. At home, I play softer music through a small speaker while I clean or study English.

I rarely listen to the radio because I prefer choosing my own playlist. I do not go to concerts often either, but I try to attend one when an artist I really like performs nearby.

So streaming is the most convenient way for me to enjoy music.`,
        cues: ['daily commute', 'streaming app', 'speaker at home', 'rarely radio', 'occasional concerts'], focus: '언제 → 어디서·기기 → 라디오/콘서트 비교'
      },
      {
        number: 4, type: 'Music · Change',
        question: 'When did you first become interested in music? What kind of music did you first listen to, and how has your taste in music changed over time?',
        answer: `I first became interested in music when I was in middle school.

At that time, my parents gave me a small MP3 player, and I filled it with Korean ballads. I liked slow songs because the lyrics were emotional and easy to follow. I remember listening to the same songs over and over on my way to school.

My taste has changed quite a bit since then. These days, I listen to more upbeat pop and soft rock, especially when I am driving or exercising. I also discover new music through streaming recommendations.

I still enjoy old ballads sometimes, but now my playlist is much more varied than it used to be.`,
        cues: ['middle school', 'MP3 player', 'ballads in the past', 'pop and rock now', 'more varied'], focus: '처음 계기 → 과거 취향 → 현재 취향 → 변화'
      },
      {
        number: 5, type: 'Park · Description',
        question: 'You indicated in the survey that you go to parks. Tell me about a park you like to visit. What is it like? What do people usually do there?',
        answer: `There is a large lake park not far from my home in Suwon, and it is probably my favorite park.

It has a wide walking path around the lake, which is lined with trees and benches. The park is kept clean, and the view is especially beautiful around sunset. There are also grassy areas where families can have picnics.

People usually walk, jog, ride bicycles, or sit by the water. On weekends, children play on the grass while adults drink coffee and talk.

I’ve been going there for a few years. Whenever I need to blow off steam, that park is the first place that comes to mind.`,
        cues: ['lake park near home', 'walking path and trees', 'sunset view', 'walk · jog · picnic', 'blow off steam'], focus: '전체 모습 → 시설 → 사람들의 활동 → 개인적 이유'
      },
      {
        number: 6, type: 'Park · Routine',
        question: 'What do you usually do at the park? What activities do you enjoy? Describe a typical day at the park from beginning to end.',
        answer: `When I go to the park, I usually spend about an hour there.

First, I put on comfortable clothes, grab my earphones, and walk to the park from my apartment. Once I arrive, I stretch for a few minutes and start walking around the lake. I normally complete two laps while listening to music.

After that, I buy a drink from a nearby café and sit on a bench. I watch the water and people passing by, which helps me clear my head. Before leaving, I sometimes take a picture of the sunset.

Then I walk home feeling much more relaxed. It is a simple routine, but it always improves my mood.`,
        cues: ['prepare and walk there', 'stretch', 'two laps with music', 'drink on a bench', 'walk home relaxed'], focus: '처음부터 끝까지 순서대로'
      },
      {
        number: 7, type: 'Park · Experience',
        question: 'Can you tell me about a memorable experience you had at a park? Was it interesting? Tell me what happened in detail.',
        answer: `Actually, I had a memorable experience at the park last spring.

I went there with a friend to see the flowers and have a picnic. While we were eating, we suddenly heard live music nearby. A local band was giving a free outdoor performance, so we moved closer and listened.

The weather was perfect, and many people started singing along. We had not planned to see a concert, which made the experience feel even more special. We stayed until the final song and took several pictures.

I was completely blown away by the atmosphere. Since then, I always check whether the park has any events before I visit.`,
        cues: ['last spring', 'picnic with friend', 'unexpected live band', 'sang along', 'check events now'], focus: '평범한 시작 → 예상 밖 사건 → 느낌 → 이후 변화'
      },
      {
        number: 8, type: 'Holidays · Description',
        question: 'Tell me about your country’s holidays. Where do people usually celebrate those holidays? How do they celebrate them?',
        answer: `Korea has several important holidays, but Lunar New Year and Chuseok are the biggest family holidays.

People usually visit their parents or grandparents, so many families gather in one home. They prepare traditional food, eat together, and talk about what has happened during the year. Some families also visit family graves or play traditional games.

Children often wear traditional clothes and receive money from older relatives during Lunar New Year. These days, some people travel instead because the holiday gives them a few days off.

Even though the way people celebrate is changing, spending time with family is still the most important part.`,
        cues: ['Lunar New Year and Chuseok', 'family home', 'traditional food', 'games and family visits', 'travel trend'], focus: '대표 휴일 → 장소 → 활동 → 최근 변화'
      },
      {
        number: 9, type: 'Holidays · Childhood',
        question: 'Tell me about a holiday you celebrated as a child. Where did you go, what did you do, and what are your memories of that holiday?',
        answer: `When I was a child, Chuseok was always the holiday I looked forward to most.

My family drove to my grandparents’ home in the countryside. The trip took a long time because of traffic, but I was excited to see my cousins. The adults prepared a large meal while the children played outside and helped make songpyeon.

After dinner, we played games, watched TV, and stayed up much later than usual. My grandmother always packed extra food for us before we left.

What I remember most is the warm and lively atmosphere. Everyone is busier now, so those childhood holidays feel even more special to me.`,
        cues: ["grandparents' countryside home", 'cousins', 'made songpyeon', 'games after dinner', 'warm atmosphere'], focus: '어디서 → 누구와 → 활동 → 가장 선명한 기억'
      },
      {
        number: 10, type: 'Holidays · Recent Experience',
        question: 'What did you do on your last holiday? Who did you spend it with, and what activities did you do? Was it memorable for you?',
        answer: `On my last holiday, I spent the day with my family at my parents’ home in Suwon.

I arrived in the morning and helped prepare lunch. We ate several dishes together and talked for a long time because we had all been busy. In the afternoon, we walked around the neighborhood and stopped at a café for coffee.

Later, we ordered dinner and watched an old comedy movie at home. Nothing dramatic happened, but it was nice to slow down and enjoy an ordinary day together.

It was memorable because we rarely have a full day when everyone is free. I came home feeling relaxed and grateful.`,
        cues: ["parents' home", 'prepared lunch', 'walk and café', 'movie at home', 'rare full day together'], focus: '최근 휴일 → 활동 순서 → 기억에 남은 이유'
      },
      {
        number: 11, type: 'Role-play · Industry Interview',
        question: "I'd like to give you a situation and ask you to act it out. You are writing a report on the technology industry. Your friend is an expert in this field. Call your friend and ask three or four questions to learn more about the technology industry.",
        answer: `Hi, it’s Daeho. I’m writing a report on the technology industry, and since you work in that field, I was hoping you could help me.

First, which area of the technology industry is growing the fastest these days? Also, what new products or services are companies focusing on?

What skills do people need if they want to work in this industry? I’d also like to know about the biggest challenge that technology companies are facing right now.

Finally, could you recommend a website or report where I can find reliable information?

Thanks. Your answers would really help me with my report.`,
        cues: ['fastest-growing area', 'new products', 'required skills', 'biggest challenge', 'reliable source'], focus: '보고서에 필요한 질문 4개'
      },
      {
        number: 12, type: 'Role-play · Reschedule',
        question: "I'm sorry, but there's a problem I need you to resolve. You have an appointment to meet your friend to learn more about the industry they work in. However, a few days before the meeting, a family member has an emergency. Call your friend, explain the situation, and suggest two or three alternatives to get the information.",
        answer: `Hi, it’s Daeho. I’m calling about our meeting this Friday.

I’m really sorry, but a family member has an emergency, so I need to help my family that day. I don’t think I can meet you as planned.

Could we move our meeting to Monday evening instead? If you are busy then, we could have a short video call over the weekend. Another option is for me to email you my questions, and you could answer them whenever you have time.

Please let me know which option is easiest for you. I’m sorry for changing our plan, and I really appreciate your understanding.`,
        cues: ['Friday meeting', 'family emergency', 'Monday evening', 'video call', 'email questions'], focus: '사과 → 상황 → 대안 3개 → 확인'
      },
      {
        number: 13, type: 'Technology · New Product',
        question: 'That’s the end of the situation. Talk about an exciting new product you have heard of. For example, it could be a phone, car, video game, or some other product. How did you learn about it? Tell me about the product in detail.',
        answer: `An exciting product I recently heard about is a foldable smartphone.

I first saw it in a review video online, and the design immediately caught my attention. It looks like a normal phone when it is folded, but it opens into a much larger screen. That makes it useful for watching videos, reading documents, and using two apps at the same time.

The newest models also have improved cameras and AI features that can summarize text or edit pictures. The only drawback is that they are still quite expensive.

I do not need a new phone yet, but I would like to try one in a store because the technology seems very practical.`,
        cues: ['foldable smartphone', 'online review', 'phone to large screen', 'multitasking and AI', 'expensive'], focus: '제품 → 알게 된 경로 → 기능 3개 → 의견'
      },
      {
        number: 14, type: 'Food Shopping · Change',
        question: 'How has the way people buy food changed over the years? Where did people usually buy food in the past? Where do they usually buy it now?',
        answer: `The way people buy food has changed a lot over the years.

In the past, people usually visited traditional markets or small stores near their homes. They talked directly with sellers and bought fresh ingredients several times a week. There were fewer choices, and shopping took more time.

These days, many people go to large supermarkets or order groceries through mobile apps. They can compare prices, read reviews, and have food delivered to their door, sometimes within a few hours.

Online shopping is much more convenient, especially for busy people. However, traditional markets still have fresher local products and a friendlier atmosphere, so both ways have their own advantages.`,
        cues: ['traditional markets in past', 'small local stores', 'supermarkets now', 'mobile delivery apps', 'convenience vs atmosphere'], focus: '과거 → 현재 → 장단점'
      },
      {
        number: 15, type: 'Food Safety · News',
        question: 'Food can get contaminated by bacteria. Food can go bad or become toxic. Tell me about something you heard on the news about this issue.',
        answer: `I recently saw a news report about packaged salads that had been recalled because bacteria were found during a safety inspection.

The company asked customers not to eat products with certain expiration dates and offered full refunds. Several supermarkets immediately removed the salads from their shelves. The report also explained that food can become unsafe if it is not kept cold during delivery.

After watching the news, I checked the salad in my refrigerator, but luckily it was from a different company. Since then, I have paid more attention to expiration dates and storage instructions.

The story was worrying, but it reminded me that both companies and customers need to handle food carefully.`,
        cues: ['packaged salad recall', 'bacteria found', 'refund and removal', 'checked refrigerator', 'expiration and storage'], focus: '뉴스 사건 → 조치 → 내 행동 → 교훈'
      }
    ]
  },
  {
    id: 'mock-3', title: '모의고사 3',
    subtitle: '집 · 지형 · 건강 · 휴대폰 롤플레이 · 배달 음식',
    questions: [
      {
        number: 1, type: 'Introduction', question: 'Let’s start the interview now. Tell me something about yourself.',
        answer: `Hi, my name is Daeho.
I live in Suwon City.
I hope I do well today.
Thank you.`, cues: ['Daeho', 'Suwon City', 'do well today', 'Thank you'], focus: '고정 답변 · 천천히 또렷하게', fixed: true
      },
      {
        number: 2, type: 'Home · Favorite Room',
        question: 'I’d like to talk about where you live. Tell me about your favorite room in your home. What does it look like? Why do you like that room?',
        answer: `I live in a studio apartment, so I only have one main room, but it is still my favorite space.

The room is small and simple. My bed is next to the wall, and there is a small table near the window. Across from the bed, I have a TV and a low cabinet. I try to keep the colors light, so the room feels more open than it really is.

What I like most is that everything I need is within reach. I can eat, study, listen to music, and relax in the same space.

I’ve lived there for a few years, and the room has become my most comfortable place.`,
        cues: ['one main room', 'bed · table · window', 'light colors', 'everything within reach', 'comfortable place'], focus: '원룸 설정 → 배치 → 장점 → 느낌'
      },
      {
        number: 3, type: 'Home · Housework',
        question: 'Tell me about some housework you do at home. What do you do to keep your house nice and clean?',
        answer: `Since I live alone, I have to do all the housework myself.

I usually do a quick cleanup every evening. I wash the dishes right after dinner, wipe the kitchen counter, and put things back where they belong. Twice a week, I run the vacuum cleaner because dust builds up quickly in a small studio.

On weekends, I do the laundry, clean the bathroom, and change my bedding. I also open the window for a while to let in fresh air.

I used to delay housework until the room became messy, but now I follow a simple routine. It only takes a little time and makes my apartment much more comfortable.`,
        cues: ['live alone', 'dishes every evening', 'vacuum twice a week', 'weekend deep clean', 'simple routine now'], focus: '매일 하는 일 → 주말 일 → 과거와 현재'
      },
      {
        number: 4, type: 'Home · Comparison',
        question: 'Tell me about the home you lived in as a child. How was it different from the home you live in now?',
        answer: `When I was a child, I lived with my family in a three-bedroom apartment in Suwon.

It was much bigger than my current studio, and I had my own bedroom. The living room was the center of the home, where my family watched TV and ate snacks together. It was sometimes noisy, but the house always felt lively.

These days, I live alone in a small studio apartment. I have less space, but it is easier to clean and everything is within reach. I can also decorate it exactly the way I want.

The biggest change is that I have more privacy now. Still, I sometimes miss the warm and busy atmosphere of my childhood home.`,
        cues: ['three-bedroom family home', 'bigger and lively', 'small studio now', 'easy to clean', 'privacy vs warm atmosphere'], focus: '기존 스크립트 재사용 · Back then → these days'
      },
      {
        number: 5, type: 'Geography · Description',
        question: 'Tell me about the geography of your country. Are there many mountains, rivers, or lakes?',
        answer: `Korea is not a very large country, but it has a surprisingly varied landscape.

A large part of the country is mountainous, so you can find hiking trails near most cities. There are also many rivers. The Han River runs through Seoul, and parks and bicycle paths have been built along it. Korea is surrounded by the sea on three sides, so there are many beaches and coastal cities as well.

Natural lakes are less common, but there are reservoirs and lake parks in many areas.

What I like most is that mountains, rivers, and the coast are all easy to reach. People can enjoy many kinds of outdoor activities without traveling very far.`,
        cues: ['varied landscape', 'many mountains', 'Han River', 'sea on three sides', 'nature easy to reach'], focus: '산 → 강 → 바다 → 장점'
      },
      {
        number: 6, type: 'Geography · Childhood',
        question: 'Tell me about a special place you visited as a child. Maybe it had a unique geographical landmark or feature. What did you see, and what was your impression of that place?',
        answer: `A special place I visited as a child was Jeju Island.

I went there with my parents during a school vacation. It was my first time seeing a volcanic island, and the landscape looked completely different from my hometown. We saw Hallasan in the distance, walked along a rocky coast, and visited a cave formed by lava.

What impressed me most was the dark volcanic rock next to the bright blue ocean. I remember taking many pictures and asking my parents how the island had been formed.

The trip made me realize how diverse Korea’s landscape is. Even now, Jeju is one of the places I most want to visit again.`,
        cues: ['Jeju with parents', 'volcanic island', 'Hallasan · rocky coast · cave', 'dark rock and blue ocean', 'visit again'], focus: '장소 → 독특한 지형 → 인상 → 현재 느낌'
      },
      {
        number: 7, type: 'Nature · Experience',
        question: 'Can you tell me about your experience visiting a natural place in your country? What activities did you do there? Did you go hiking or enjoy the beach?',
        answer: `One of my favorite nature trips was a weekend visit to the east coast with a close friend.

We arrived early in the morning and walked along a quiet beach before it became crowded. The water was clear, and the sound of the waves helped me relax. After breakfast, we followed a short hiking trail on a nearby hill, which gave us a beautiful view of the coastline.

We took pictures, ate local seafood, and sat on the beach until sunset. I was tired after doing both hiking and beach activities, but I had a blast.

The trip was memorable because we could enjoy two very different kinds of nature in one day.`,
        cues: ['east coast weekend', 'morning beach walk', 'short coastal hike', 'seafood and sunset', 'two kinds of nature'], focus: '해변 + 하이킹을 한 경험으로 결합'
      },
      {
        number: 8, type: 'Health · Person',
        question: 'Can you tell me about a healthy person you know? What is he or she like? Why do you think that person is healthy?',
        answer: `The healthiest person I know is my older brother.

He is energetic and disciplined, and he follows a regular routine even when he is busy. He gets up early, drinks plenty of water, and goes jogging three or four times a week. He also prepares simple meals with vegetables and protein instead of ordering food every day.

What I admire most is that he does not follow extreme diets. He just makes small healthy choices consistently and gets enough sleep.

He rarely gets sick and always seems to have plenty of energy. Watching him has motivated me to take better care of my own health.`,
        cues: ['older brother', 'disciplined routine', 'jogs 3–4 times', 'balanced meals and sleep', 'motivates me'], focus: '인물 → 습관 3개 → 건강한 이유 → 영향'
      },
      {
        number: 9, type: 'Health · Experience',
        question: 'Have you ever done something to stay healthy, such as eating healthy food or working out? What did you do, and how did you feel after trying it?',
        answer: `Yes. A few months ago, I started walking and jogging to improve my health.

At first, I could only jog for about ten minutes before getting tired, so I mixed jogging with walking. I went to a nearby park three times a week and slowly increased the distance. I also started drinking more water and eating fruit instead of late-night snacks.

After a few weeks, I noticed that I slept better and had more energy at work. The change was not dramatic, but I felt proud that I had kept the routine.

I’ve continued exercising since then. It helps me stay in shape and clear my head at the same time.`,
        cues: ['started months ago', 'walk and jog', 'three times a week', 'better sleep and energy', 'continued since then'], focus: '시작 → 어려움 → 작은 변화 → 현재완료'
      },
      {
        number: 10, type: 'Health · Improvement',
        question: 'You might have tried to improve your health, like quitting smoking or drinking. Perhaps you signed up for an exercise program. What did you try, and what was your reason for doing it?',
        answer: `Last year, I decided to improve my health because I was feeling tired and stressed after work.

I signed up for a three-month fitness program near my apartment. My goal was not to lose a lot of weight. I simply wanted to build more energy and reduce back pain from sitting all day. A trainer showed me basic stretches and simple strength exercises.

At first, going to the gym after work was difficult, but I made a schedule and went twice a week. I also cut down on late-night food and alcohol.

By the end of the program, I felt stronger and slept better. More importantly, I learned that a realistic routine works better for me than an extreme plan.`,
        cues: ['tired after work', 'three-month program', 'energy and back pain', 'twice a week', 'realistic routine'], focus: '문제 → 시도 → 지속 방법 → 결과·교훈'
      },
      {
        number: 11, type: 'Role-play · Buy a Phone',
        question: "I'd like to give you a situation and ask you to act it out. You would like to buy a new mobile phone. Call a store and tell them what you need, then ask three or four questions to find out about the phones they offer.",
        answer: `Hello. I’m looking for a new mobile phone, and I have a few questions.

I use my phone mainly for taking pictures, watching videos, and work, so which model has the best camera and battery life? I also need plenty of storage. Does that model come with at least 256 gigabytes?

How much does it cost, and are there any discounts if I trade in my old phone? Finally, could you tell me about the return policy in case the phone does not meet my needs?

If possible, I’d like to visit the store this evening and try it in person. Thank you for your help.`,
        cues: ['camera and battery', '256 GB', 'price', 'trade-in discount', 'return policy'], focus: '필요 설명 → 기능·가격·교환 질문'
      },
      {
        number: 12, type: 'Role-play · Exchange a Phone',
        question: "I'm sorry, but there's a problem that I need you to resolve. When you bought the new phone, you realized that it did not have all the features you need. You would like to return it to get a new phone. Call the store, explain the situation, and make arrangements to exchange it for one that has the features you need.",
        answer: `Hello. I bought a phone from your store two days ago, but I need to exchange it.

I explained that I needed at least 256 gigabytes of storage for work files and videos. However, the phone I received only has 128 gigabytes, and that is not enough for me. The box has been opened, but the phone is still in perfect condition and I have the receipt.

Could I exchange it for the same model with more storage? I am willing to pay the price difference. If that model is not available, could you recommend another phone with a similar camera and battery?

Please let me know what I need to bring and when I can visit.`,
        cues: ['bought two days ago', '128 not 256 GB', 'receipt and good condition', 'exchange and pay difference', 'alternative model'], focus: '구매 정보 → 문제 → 원하는 교환 → 방문 확인'
      },
      {
        number: 13, type: 'Technology · Problem',
        question: "That's the end of the situation. Have you ever bought a piece of technology which was not what you wanted or different from what you had expected? Was the feature not what you wanted or did it just not work properly? Tell me exactly what was wrong and what you did to solve the situation.",
        answer: `Yes. I once bought a laptop online that was different from what I expected.

The product page said the battery would last all day, but the laptop ran out of power after only three or four hours. It also became very hot when I used video calls. At first, I thought I had changed the settings incorrectly, so I updated the software and lowered the screen brightness, but nothing improved.

I contacted customer service, explained the problems, and sent them a short video. They agreed that the battery was defective and exchanged the laptop for a new one.

The replacement has worked well ever since. Now I read return policies carefully before buying electronics online.`,
        cues: ['laptop online', 'short battery life', 'overheating', 'contacted support with video', 'exchanged'], focus: '기대 → 실제 문제 2개 → 시도 → 해결'
      },
      {
        number: 14, type: 'Delivery Food · Healthy Choices',
        question: 'A lot of fast-food, take-out, or delivery restaurants are offering healthy choices these days. Why do you think these kinds of restaurants have made such changes?',
        answer: `I think restaurants are adding healthier choices because customer habits have changed.

More people now check calories, protein, and ingredients before ordering food. They still want the convenience of fast food or delivery, but they do not want every meal to be fried or heavy. Social media and health apps have also made people more aware of what they eat.

Restaurants have responded by offering salads, grilled dishes, smaller portions, and low-sugar drinks. These options help them attract a wider range of customers and compete with other businesses.

In my opinion, it is a smart change. Customers get more choices, and restaurants can improve their image while meeting new demand.`,
        cues: ['customer habits changed', 'check nutrition', 'convenience plus health', 'new healthy options', 'business advantage'], focus: '이유 2개 → 식당의 변화 → 내 의견'
      },
      {
        number: 15, type: 'Delivery Food · Trends',
        question: 'Tell me about the latest trends related to take-out or delivery food options. What recent changes have you noticed regarding takeout or delivery food?',
        answer: `Delivery food has changed a lot in recent years.

The biggest trend is that people can order almost anything through one mobile app, from coffee and groceries to full restaurant meals. Apps now show real-time delivery updates, reviews, and detailed menu pictures, which make ordering much easier.

I have also noticed more healthy meal boxes, single-person portions, and late-night options. Many restaurants use sealed packaging, and some offer reusable containers or let customers choose fewer disposable items.

Delivery has become faster and more convenient than before. However, fees and packaging waste are still concerns, so people compare prices and combine orders when possible.`,
        cues: ['one mobile app', 'real-time tracking', 'healthy and single portions', 'better packaging', 'fees and waste'], focus: '최근 변화 3개 → 편리함 → 문제점'
      }
    ]
  },
  {
    id: 'mock-4', title: '모의고사 4',
    subtitle: '날씨 · 집 · 해외여행 · 면접 롤플레이 · 모임',
    questions: [
      {
        number: 1, type: 'Introduction', question: 'Let’s start the interview now. Tell me something about yourself.',
        answer: `Hi, my name is Daeho.
I live in Suwon City.
I hope I do well today.
Thank you.`, cues: ['Daeho', 'Suwon City', 'do well today', 'Thank you'], focus: '고정 답변 · 천천히 또렷하게', fixed: true
      },
      {
        number: 2, type: 'Weather · Seasons',
        question: 'Tell me about the seasons in your country. What is the weather like in each season?',
        answer: `Korea has four distinct seasons, and each one feels very different.

Spring is mild, and flowers bloom everywhere, although the air can be dusty. Summer is hot and humid, with a rainy season and occasional heavy storms. Fall is cool and dry, so many people go hiking to enjoy the colorful leaves. Winter is cold and windy, and it sometimes snows.

My favorite season is fall because the temperature is comfortable and the sky is usually clear. It is perfect for walking or traveling.

The variety is interesting, but it also means we need different clothes and heating or cooling equipment throughout the year.`,
        cues: ['four seasons', 'mild spring', 'hot humid summer', 'cool dry fall', 'cold winter'], focus: '계절별 한두 특징 → 좋아하는 계절'
      },
      {
        number: 3, type: 'Weather · Today',
        question: 'What is the weather like where you are today? What is happening with the weather right now?',
        answer: `Today, it is warm and a little humid where I am in Suwon.

The sky is partly cloudy, but it is still bright outside. There is a light breeze, so the weather feels more comfortable in the shade. I checked the forecast this morning, and there is a small chance of rain later in the day.

People are wearing light clothes, and some are carrying umbrellas just in case. I turned on the air conditioner for a short time before leaving home.

Overall, the weather is not bad, but it still feels more like summer than fall. I hope it becomes cooler in the evening.`,
        cues: ['시험 당일 날씨로 교체', 'temperature', 'sky', 'wind or rain', 'people and clothing'], focus: '주의: 시험 당일 실제 날씨에 맞게 첫 문장 변경'
      },
      {
        number: 4, type: 'Weather · Change',
        question: 'How has the weather changed over the years? What was the weather like when you were a child, and how is it different from the weather now?',
        answer: `The weather seems much less predictable than it was when I was a child.

Back then, the four seasons felt clearer. Spring and fall lasted longer, summers were not as extremely hot, and we had more snow in winter. My family could usually plan outdoor activities without checking the forecast constantly.

These days, summer heat waves last longer, and sudden heavy rain is more common. Spring and fall also seem shorter than before. I’ve started checking a weather app every morning because conditions can change quickly.

The biggest difference is the extreme weather. It affects travel, outdoor exercise, and even what people wear, so everyone has to prepare more carefully.`,
        cues: ['clearer seasons before', 'less extreme heat', 'more snow', 'heat waves and heavy rain now', 'check app daily'], focus: 'Back then → these days → 생활 영향'
      },
      {
        number: 5, type: 'Home · Description',
        question: 'I’d like to talk about where you live. Can you describe your home? What does it look like, and how many rooms does it have?',
        answer: `I live in a small studio apartment in Suwon.

It’s not very big, but it’s cozy and comfortable. Since it’s a studio apartment, there is just one main room.

I have a bed, a small table, a TV, and a kitchen in the same space. There is also a small bathroom.

What I like most about my apartment is that everything is close to me, so it’s very convenient.

I’ve lived there for a few years, and I’m pretty happy with it.

So overall, it’s small, but it’s a nice place to live.`,
        cues: ['studio in Suwon', 'cozy and comfortable', 'one main room', 'everything is close', 'lived there for years'], focus: '모의고사 1의 집 묘사 그대로 재사용'
      },
      {
        number: 6, type: 'Home · Routine',
        question: 'What do you do when you are at home? What do you usually do on weekdays, and what do you usually do on weekends?',
        answer: `Well, my routine is quite different on weekdays and weekends.

On weekdays, I usually get home after work, take a quick shower, and have dinner. Since I live in a studio, everything I need is close by, which makes my evening routine simple. After dinner, I watch YouTube or listen to music to blow off steam. Then I study English for a while before going to bed.

On weekends, I take things more slowly. I clean my apartment, do the laundry, and sometimes cook a proper meal. If I have no plans, I watch a movie on my TV and just relax.

So I would say weekdays are short and structured, while weekends are much more relaxing.`,
        cues: ['weekdays vs weekends', 'after work routine', 'blow off steam', 'clean and cook', 'structured vs relaxing'], focus: '모의고사 1의 집 루틴 재사용'
      },
      {
        number: 7, type: 'Home · Problem',
        question: 'Tell me about some problems or issues you’ve had in your home. Maybe something broke, or someone you lived with didn’t cooperate with you. Explain those problems in detail.',
        answer: `The biggest problem I’ve had in my apartment was when the air conditioner broke last summer.

It happened during a very hot week, and the machine suddenly stopped blowing cold air. Since my studio is small, the room became hot and uncomfortable very quickly. I cleaned the filter and restarted the unit, but nothing worked.

I called my landlord and explained the problem. A repair technician came the next afternoon and found that a part had to be replaced. My landlord paid for the repair, and the air conditioner worked again that evening.

It was inconvenient, but the issue was handled quickly. Now I clean the filter regularly and check the unit before summer begins.`,
        cues: ['air conditioner broke', 'hot small studio', 'tried filter and restart', 'called landlord', 'technician replaced part'], focus: '문제 → 직접 시도 → 요청 → 해결 → 예방'
      },
      {
        number: 8, type: 'Overseas Travel · Popular Place',
        question: 'You indicated in the survey that you take vacations internationally. Tell me about a place that people in your country like to visit when traveling abroad. Where is it, and why is it popular?',
        answer: `Japan is one of the overseas destinations that many Koreans enjoy visiting.

It is close to Korea, so flights are short and there are many travel options. Cities such as Tokyo and Osaka are popular for shopping, food, and entertainment, while smaller areas offer hot springs and beautiful natural scenery.

Travelers also like that public transportation is convenient and that each region has its own local dishes. People can plan a short weekend trip or a longer vacation depending on their budget.

I think the combination of convenience and variety makes Japan attractive. Even people who have visited before can choose a different city and have a completely new experience.`,
        cues: ['Japan', 'close and short flights', 'cities vs nature', 'food and transportation', 'convenience plus variety'], focus: '장소 → 인기 이유 3개 → 결론'
      },
      {
        number: 9, type: 'Overseas Travel · Childhood',
        question: 'Tell me about a trip you took when you were a child. What country did you visit, and what was your impression of that place?',
        answer: `My first overseas trip was a family vacation to Japan when I was a child.

We stayed in Osaka for a few days and visited a large castle, a busy shopping street, and an amusement park. Everything felt new to me, from the signs and trains to the food in the convenience stores.

What impressed me most was how clean and organized the subway system was. I was also excited to try local noodles and snacks that I had only seen on television.

I do not remember every detail, but I clearly remember the feeling of being in another country for the first time. That trip made me interested in traveling abroad.`,
        cues: ['first overseas trip', 'Osaka with family', 'castle · shopping · amusement park', 'clean subway', 'interest in travel'], focus: '첫 해외여행 → 본 것 → 인상 → 영향'
      },
      {
        number: 10, type: 'Overseas Travel · Unexpected',
        question: 'Unexpected or unusual things can happen when we travel overseas. Have you ever had an unforgettable experience while traveling? What happened, and what made it so memorable?',
        answer: `I had an unforgettable experience when I got lost on the subway during an overseas trip.

I was traveling with a friend, but we got separated while changing trains at a crowded station. My phone had almost no battery, and I could not read all the signs. At first, I panicked and got on the wrong train.

I got off at the next stop and asked a station employee for help using simple English and a map. He showed me the correct route, and I met my friend about thirty minutes later at our hotel.

Everything worked out in the end, but the experience taught me to carry a portable charger and save the hotel address offline.`,
        cues: ['separated in subway', 'low phone battery', 'wrong train', 'staff helped', 'portable charger and offline address'], focus: '상황 → 당황 → 도움 요청 → 재회 → 교훈'
      },
      {
        number: 11, type: 'Role-play · Company Research',
        question: "I'd like to give you a situation and ask you to act it out. You have a job interview at a major company, and you want to learn more about the company before the interview. Call the company and ask three or four questions about it.",
        answer: `Hello. I have a job interview with your company next week, and I’d like to ask a few questions before I visit.

First, could you tell me more about the position and the main responsibilities? I’d also like to know what skills or experience the interviewers are looking for.

How many interview stages are there, and about how long should I expect the process to take? Finally, is there anything specific I should bring or prepare, such as a portfolio or presentation?

Thank you for your time. This information will help me prepare properly, and I’m looking forward to visiting your company.`,
        cues: ['position duties', 'desired skills', 'interview stages', 'time required', 'what to bring'], focus: '직무·평가·절차·준비물 질문'
      },
      {
        number: 12, type: 'Role-play · Change Interview',
        question: "I'm sorry, but there is a problem I need you to resolve. Something has come up, and you cannot go to the interview. Call the company, explain the situation, and offer two or three suggestions, so you won't lose the opportunity.",
        answer: `Hello, this is Daeho. I’m scheduled for an interview tomorrow afternoon.

I’m very sorry, but a family emergency has come up, and I won’t be able to attend at the scheduled time. I am still very interested in the position and do not want to lose the opportunity.

Would it be possible to move the interview to Friday morning? If that is not available, I could join a video interview tomorrow afternoon. I am also free at any time early next week.

Please let me know if one of those options works for the interview team. I apologize for the short notice, and I appreciate your understanding.`,
        cues: ['scheduled tomorrow', 'family emergency', 'still interested', 'Friday or video', 'next week flexible'], focus: '정중한 사과 → 의지 → 대안 3개'
      },
      {
        number: 13, type: 'Appointment · Cancellation',
        question: "That's the end of the situation. Have you ever been in a situation where you had to cancel an important appointment or plan? What happened? When was it, and how did you resolve it?",
        answer: `Yes. Last winter, I had to cancel an important presentation meeting at work.

The night before the meeting, I developed a high fever and could barely speak. At first, I hoped I would feel better in the morning, but my condition got worse. I called my manager early, explained the situation, and sent him all of my presentation files.

A coworker presented the first part for me, and I joined briefly by video to answer questions. We moved the detailed discussion to two days later, when I had recovered.

I felt terrible about changing the plan, but preparing clear files and contacting everyone early helped solve the problem.`,
        cues: ['work presentation', 'high fever', 'called manager early', 'coworker plus video', 'discussion rescheduled'], focus: '언제 → 문제 → 즉시 조치 → 대안 → 결과'
      },
      {
        number: 14, type: 'Gatherings · Comparison',
        question: 'How are gatherings and celebrations in small towns different from those in big cities? Compare celebrations in small towns with those in big cities in your country. How are they different?',
        answer: `Gatherings in small towns and big cities can feel quite different.

In small towns, celebrations are often more personal because many people know one another. Events may be held at a family home or local community center, and neighbors sometimes help prepare food. The atmosphere is relaxed, and guests tend to stay longer.

In big cities, people usually meet at restaurants, hotels, or event halls. There are more choices and professional services, but schedules are busier and the cost can be higher. Guests may leave soon after the meal.

Small-town gatherings feel warmer, while city celebrations are more convenient and organized. I enjoy both, depending on the occasion.`,
        cues: ['small town = personal', 'home or community center', 'city = restaurants and hotels', 'more convenient but costly', 'warm vs organized'], focus: 'small town → big city → 한 문장 비교'
      },
      {
        number: 15, type: 'Gatherings · Planning Issues',
        question: 'It’s sometimes difficult to plan gatherings. Tell me about some challenges related to making plans for gatherings. How do people deal with these problems?',
        answer: `Planning a gathering can be difficult because everyone has a different schedule and preference.

The first challenge is choosing a date when most people are free. Finding a convenient location is also hard, especially when guests live in different areas. Budget, food preferences, parking, and the size of the group can create more problems.

These days, people usually make a group chat and use an online poll to choose the date. They share restaurant links, check the menu in advance, and make a reservation once everyone agrees. One person should also confirm the final plan the day before.

Clear communication does not solve every problem, but it prevents confusion and last-minute cancellations.`,
        cues: ['different schedules', 'location and budget', 'food and parking', 'group poll', 'final confirmation'], focus: '문제 3개 → 해결 방법 3개 → 결론'
      }
    ]
  },
  {
    id: 'mock-5', title: '모의고사 5',
    subtitle: '국내여행 · 패션 · 음악 · 호텔 롤플레이 · 산업',
    questions: [
      {
        number: 1, type: 'Introduction', question: 'Let’s start the interview now. Tell me something about yourself.',
        answer: `Hi, my name is Daeho.
I live in Suwon City.
I hope I do well today.
Thank you.`, cues: ['Daeho', 'Suwon City', 'do well today', 'Thank you'], focus: '고정 답변 · 천천히 또렷하게', fixed: true
      },
      {
        number: 2, type: 'Domestic Travel · Favorite Place',
        question: 'You indicated in the survey that you take vacations domestically. Tell me about a city or place you like to travel to. Why do you like going there?',
        answer: `Busan is probably my favorite place to travel to in Korea.

The main reason is that the city has both beautiful beaches and a lively downtown area. I like walking along the coast in the morning, eating fresh seafood, and visiting cafés with an ocean view. Public transportation is convenient, so I can explore without a car.

I’ve been to Busan several times, but each trip has felt different. Sometimes I relax near the beach, and other times I visit markets or hike along the coast.

Whenever I feel tired of my daily routine, Busan gives me a change of scenery. That is why I keep going back.`,
        cues: ['Busan', 'beach plus downtown', 'seafood and cafés', 'different activities each trip', 'change of scenery'], focus: '장소 → 이유·활동 → 반복 경험 → 결론'
      },
      {
        number: 3, type: 'Domestic Travel · Preparation',
        question: 'What do you usually do to prepare before going on a trip? What are the things you do to get ready for a trip?',
        answer: `I like to prepare carefully before a trip because it helps me avoid unnecessary stress.

First, I book transportation and a hotel, and I save the reservation details on my phone. Then I check the weather and make a simple list of places I want to visit. I do not plan every minute, but I choose one or two main activities for each day.

The night before leaving, I pack comfortable clothes, chargers, medicine, and a small umbrella. I also download a map and check how to get from the station to the hotel.

Finally, I double-check my wallet and identification. Once those basics are ready, I can relax and enjoy the trip.`,
        cues: ['book transport and hotel', 'weather and simple plan', 'clothes · chargers · medicine', 'offline map', 'ID double-check'], focus: '예약 → 계획 → 짐 → 마지막 확인'
      },
      {
        number: 4, type: 'Domestic Travel · Unexpected',
        question: 'A lot of unexpected things can happen when we travel. Tell me about an unforgettable experience you’ve had while traveling. What happened? What made it so memorable for you?',
        answer: `As far as I remember, my most difficult travel experience happened in Busan a few years ago.

I went there with a friend to relax and enjoy the beach. The weather was nice in the morning, but it suddenly started raining very heavily. A flood warning was issued, and some streets near our hotel were blocked.

At first, we tried to wait for the rain to stop, but it kept getting worse. We called the hotel, changed our outdoor plans, and took a taxi back before the roads became more dangerous.

We were disappointed, but we stayed safe and spent the evening at the hotel. I’ve never seen rain that heavy before, so I now check the weather carefully before every trip.`,
        cues: ['Busan trip', 'sudden heavy rain', 'flood warning', 'called hotel and took taxi', 'check weather now'], focus: '기존 홍수 경험 스크립트 재사용'
      },
      {
        number: 5, type: 'Fashion · General',
        question: 'Let’s talk about fashion. What kinds of clothes do people typically wear in your country? What do they usually wear at work, and what do they wear at home?',
        answer: `People in Korea wear many different styles, but most prefer clothes that are neat and practical.

At work, office employees often wear business casual clothing, such as a shirt with dark pants or a simple jacket. Formal suits are still common for important meetings, but many workplaces have become more relaxed than before.

At home, comfort is the priority. People usually change into T-shirts, sweatpants, or other loose clothing as soon as they arrive. On weekends, sneakers and casual clothes are very common.

Fashion depends on age and workplace, but the basic pattern is simple: people dress neatly outside and choose comfortable clothes at home.`,
        cues: ['neat and practical', 'business casual', 'suits for meetings', 'T-shirts and sweatpants at home', 'neat outside · comfortable home'], focus: '일반 → 직장 → 집 → 한 문장 요약'
      },
      {
        number: 6, type: 'Fashion · Personal',
        question: 'What kind of clothes do you usually like to wear? What are you wearing right now? Tell me about your fashion style.',
        answer: `My fashion style is simple and casual because comfort is more important to me than following every trend.

I usually wear plain shirts or T-shirts with dark pants and comfortable sneakers. I prefer neutral colors like black, navy, gray, and white because they are easy to match. I rarely wear bright patterns or expensive accessories.

Right now, I’m wearing a navy shirt, black pants, and simple sneakers. I chose them because they look neat but still feel comfortable for a long day.

I would not call myself fashionable, but I try to wear clean clothes that fit well. That simple style works best for my daily life.`,
        cues: ['시험 당일 복장으로 교체', 'simple and casual', 'neutral colors', 'comfortable sneakers', 'clean and good fit'], focus: '주의: right now 부분은 시험 당일 복장에 맞게 변경'
      },
      {
        number: 7, type: 'Fashion · Change',
        question: 'How have fashion and clothing changed over time? What kinds of clothes were popular when you were a child? How is fashion different now compared to the past?',
        answer: `Fashion has become much more varied and casual since I was a child.

Back then, people mostly learned about trends from television, magazines, or celebrities. Children often wore similar sports brands, and office workers dressed more formally. There were fewer online stores, so most families bought clothes at department stores or local shops.

These days, people discover trends through social media and can order clothes from anywhere. Casual styles, sneakers, and athletic clothing are accepted in more places. People also mix expensive items with inexpensive ones to create a personal style.

Compared to the past, fashion changes faster and offers more choices. It is easier to express yourself, but trends can disappear very quickly.`,
        cues: ['TV and magazines before', 'more formal workwear', 'social media now', 'casual and personal styles', 'faster trends'], focus: '과거 정보·스타일 → 현재 → 장단점'
      },
      {
        number: 8, type: 'Music · Preference',
        question: 'You indicated in the survey that you like listening to music. What kind of music do you listen to? Who are some of your favorite musicians or composers?',
        answer: `I listen to many kinds of music, but I mostly enjoy Korean pop and soft rock.

One of my favorite singers is IU because she has a clear voice and her lyrics are easy to relate to. I also like Coldplay. Their songs have powerful melodies, and they always cheer me up when I feel tired.

I usually choose upbeat songs during my commute and slower songs when I want to relax at home. Music helps me clear my head and take my mind off work.

I’ve listened to both artists for years, and their music has become a big part of my daily routine.`,
        cues: ['K-pop and soft rock', 'IU · relatable lyrics', 'Coldplay · powerful melodies', 'commute vs home', 'clear my head'], focus: '모의고사 2의 음악 선호 답변 재사용'
      },
      {
        number: 9, type: 'Music · Change',
        question: 'When did you first become interested in music? What kind of music did you first enjoy listening to, and how has your taste in music changed over the years?',
        answer: `I first became interested in music when I was in middle school.

At that time, my parents gave me a small MP3 player, and I filled it with Korean ballads. I liked slow songs because the lyrics were emotional and easy to follow. I remember listening to the same songs over and over on my way to school.

My taste has changed quite a bit since then. These days, I listen to more upbeat pop and soft rock, especially when I am driving or exercising. I also discover new music through streaming recommendations.

I still enjoy old ballads sometimes, but now my playlist is much more varied than it used to be.`,
        cues: ['middle school', 'MP3 player', 'ballads in the past', 'pop and rock now', 'more varied'], focus: '모의고사 2의 음악 변화 답변 재사용'
      },
      {
        number: 10, type: 'Music · Live Experience',
        question: 'Can you tell me about a time when you listened to live music? When was it? Who were you with? What was the occasion? Was it memorable?',
        answer: `The most memorable live music experience I’ve had was an outdoor concert in Seoul last fall.

I went with a close friend because a band we both liked was performing. We arrived early, bought drinks, and found a place near the middle of the crowd. When the band came on stage, everyone started singing along.

The sound was powerful, and the lights made the atmosphere even more exciting. My favorite song was played at the end, so we completely got carried away and sang as loudly as we could.

I was tired on the way home, but I had the time of my life. Hearing the music live was much more impressive than listening through earphones.`,
        cues: ['outdoor concert in Seoul', 'friend and favorite band', 'crowd sang along', 'favorite song last', 'better than earphones'], focus: '언제·누구와 → 현장 묘사 → 하이라이트 → 느낌'
      },
      {
        number: 11, type: 'Role-play · Hotel Information',
        question: "I'd like to give you a situation and ask you to act it out. You are visiting a new city and staying at a hotel. You have a free day and want to explore the city. Ask the front desk clerk three or four questions about activities or places to visit.",
        answer: `Excuse me. I have a free day tomorrow, and I’d like to explore the city. Could I ask you a few questions?

First, what is the one place that a first-time visitor should not miss? I’m also interested in local food, so could you recommend a good restaurant or market nearby?

What is the easiest way to get around? Should I use public transportation, or are the main attractions within walking distance? Finally, is there a tour or activity that I can book through the hotel?

I prefer a relaxed schedule, so two or three places would be enough. Thank you for your recommendations.`,
        cues: ['must-see place', 'local food', 'transportation', 'hotel tour', 'relaxed schedule'], focus: '장소·음식·교통·투어 질문'
      },
      {
        number: 12, type: 'Role-play · Lost Bag',
        question: "I'm sorry, but there’s a problem I need you to resolve. You left your bag in the taxi that took you to the hotel. Call the taxi company, explain the situation, describe your bag, and arrange to get it back.",
        answer: `Hello. I think I left my bag in one of your taxis, and I need your help finding it.

I took the taxi from the central station to the Grand Hotel at around three this afternoon. It was a small black backpack with a red tag on the handle. Inside, there is a charger, a blue notebook, and some clothes. My name and phone number are written on a card in the front pocket.

Could you contact the driver and check the back seat? If the bag is found, could the driver bring it to the hotel? I can pay the delivery fare, or I can pick it up at your office.

Please call me as soon as you have any news. Thank you.`,
        cues: ['station to hotel at 3', 'black backpack · red tag', 'items inside', 'check back seat', 'deliver or pick up'], focus: '탑승 정보 → 가방 묘사 → 회수 대안 2개'
      },
      {
        number: 13, type: 'Lost Item · Experience',
        question: "That's the end of the situation. Has anything similar ever happened to you? Have you ever lost an item somewhere, or misplaced something important? Talk about the situation in detail.",
        answer: `Yes. I once left my wallet at a café near my office.

I had coffee there after lunch and paid at the counter. About an hour later, I tried to buy something and realized my wallet was missing. I checked my pockets and desk, but I could not find it. Then I remembered placing it next to my coffee.

I immediately called the café and described the wallet. Luckily, an employee had found it under my chair and kept it safely behind the counter. I went back after work and confirmed my name before getting it back.

I was extremely relieved. Since then, I always check my phone, wallet, and keys before leaving any place.`,
        cues: ['wallet at café', 'noticed one hour later', 'called and described it', 'employee kept it', 'check three items now'], focus: '분실 인지 → 기억 → 연락 → 회수 → 습관 변화'
      },
      {
        number: 14, type: 'Industry · Job Training',
        question: "How do people prepare for work in your country's industries? Do they study for the job in advance, or are they trained when they join the company? Do they get job training? How has job training changed over the past five years?",
        answer: `People in Korea prepare for jobs in several ways before and after joining a company.

Before applying, many people study their field at university, earn certificates, or take practical courses. However, companies still provide orientation and job training because every workplace uses different systems and processes. New employees often learn from experienced coworkers as well.

Over the past five years, training has become more digital and flexible. Recorded online classes, video meetings, and short mobile lessons are now common. Employees can learn at their own pace instead of attending every class in person.

Technical knowledge is still important, but companies now place more value on continuous learning because tools and job requirements change quickly.`,
        cues: ['degree · certificates · courses', 'company orientation', 'coworker mentoring', 'online training growth', 'continuous learning'], focus: '입사 전 → 입사 후 → 5년 변화 → 결론'
      },
      {
        number: 15, type: 'Industry · Current Interest',
        question: 'What is an industry or a company that people in your country are talking about these days? Why are people interested in this field, and what are they saying about it?',
        answer: `One field that people around me talk about a lot is artificial intelligence.

They are interested because AI tools can write, translate, analyze information, and help with many kinds of work. Companies are trying to add these features to phones, cars, and online services. Some people believe this will create new jobs and make businesses more productive.

At the same time, others worry that certain jobs may change or disappear. They also talk about privacy, incorrect information, and the need to use AI responsibly.

I think people are excited because the technology is developing quickly, but they are also uncertain about its impact. That combination keeps the industry in the news and in everyday conversations.`,
        cues: ['AI industry', 'many work uses', 'new products and jobs', 'job and privacy concerns', 'excited but uncertain'], focus: '관심 분야 → 이유·활용 → 우려 → 균형 잡힌 의견'
      }
    ]
  }
];
