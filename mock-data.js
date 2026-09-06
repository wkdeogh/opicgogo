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
  }
];
