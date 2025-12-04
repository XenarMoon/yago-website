export type Language = 'en' | 'ru' | 'uz';

export const translations = {
  en: {
    // Header
    badge: 'AI500 Stage 2',
    backToHome: 'Back to Home',

    // Hero
    liveDemoBadge: 'Live Demo',
    heroTitle: 'Meet',
    heroTitleHighlight: 'YAGO',
    heroSubtitle: 'Your AI-Powered Personal Concierge Assistant',
    heroPitch: 'One conversation. Zero hassle. YAGO handles your life so you don\'t have to.',
    heroFeature1: '🏥 Doctor appointment? YAGO finds the best specialist and books it for you',
    heroFeature2: '🚗 Car broke down? YAGO locates nearby mechanics, compares prices, and arranges towing',
    heroFeature3: '🛒 Need groceries? YAGO orders from your favorite store and tracks delivery',
    heroFeature4: '✈️ Planning a trip? YAGO books flights, hotels, and creates your itinerary',
    heroFeature5: '🍽️ Craving dinner? YAGO reserves a table at the perfect restaurant',
    heroFeature6: '🔧 Home emergency? YAGO finds plumbers, electricians, and gets help fast',
    heroTagline: 'Available on Telegram, Web, and iOS',

    // Video Section
    videoTitle: 'Demo Video',
    videoSubtitle: 'Watch how YAGO works in action',
    videoComingSoon: 'Demo Video Coming Soon',
    videoComingSoonDesc: 'Our demo video is being prepared. Check back shortly!',
    videoDuration: 'Duration: 3-4 minutes | Recorded December 2024',

    // Description Section
    descriptionTitle: 'See YAGO in Action',
    descriptionSubtitle: 'Watch how YAGO transforms complex tasks into simple conversations',

    // What's Being Shown
    whatShownTitle: "YAGO's Superpowers",
    whatShown1: '🧠 Understands natural language — just talk like you would to a friend',
    whatShown2: '⚡ Instant action — books appointments, orders food, calls services in seconds',
    whatShown3: '🔄 Remembers everything — your preferences, past orders, favorite places',
    whatShown4: '🌐 Works everywhere — Telegram, iOS app, Web — seamlessly synced',
    whatShown5: '🤝 Negotiates for you — finds best prices, compares options, gets deals',
    whatShown6: '📍 Location-aware — knows what\'s nearby and what\'s available now',

    // Problem & Solution
    problemSolutionTitle: 'Why YAGO Exists',
    problemLabel: '😫 The Daily Struggle:',
    problemText: 'You waste 2+ hours daily on mundane tasks: searching for doctors, comparing prices, waiting on hold, filling forms, checking availability, coordinating schedules. Your phone has 50+ apps but none of them talk to each other.',
    solutionLabel: '✨ The YAGO Way:',
    solutionText: 'One message. That\'s it. "I need a dentist tomorrow afternoon near my office" → YAGO finds available dentists, checks reviews, compares prices, books the best option, adds it to your calendar, and reminds you before the appointment. While you focus on what actually matters.',

    // Tech Stack
    techStackTitle: 'Stack & Technologies',
    techFrontend: 'Frontend',
    techFrontendValue: 'Next.js, React, TypeScript, Tailwind CSS',
    techMobile: 'Mobile',
    techMobileValue: 'Flutter (iOS/Android), React Native',
    techBackend: 'Backend',
    techBackendValue: 'Node.js, TypeScript, REST API',
    techAI: 'AI/ML',
    techAIValue: 'OpenAI GPT-4, Custom NLU pipeline',
    techDatabase: 'Database',
    techDatabaseValue: 'PostgreSQL, Redis',
    techIntegrations: 'Integrations',
    techIntegrationsValue: 'Telegram Bot API, Payment gateways',
    techInfra: 'Infrastructure',
    techInfraValue: 'Vercel, AWS, ngrok (demo)',

    // Roadmap
    roadmapTitle: 'Roadmap & Status',
    currentStage: 'Current Stage:',
    stageIdea: 'Idea',
    stagePrototype: 'Prototype',
    stageMVP: 'MVP',
    stageLaunched: 'Launched',
    nextStepsTitle: 'Next Steps:',
    nextStep1: 'Payment integration & booking confirmations',
    nextStep2: 'Partner onboarding (restaurants, services)',
    nextStep3: 'Public beta launch in Uzbekistan',
    nextStep4: 'Android app release',

    // Live Demo Section
    liveDemoTitle: 'Try YAGO Live',
    liveDemoSubtitle: 'Interact with our iOS app directly in your browser',
    loadingApp: 'Loading app...',

    // Quick Start Guide
    quickStartTitle: 'Quick Start Guide',
    quickStartStep1: 'Type your request in natural language',
    quickStartStep2: 'YAGO understands context and preferences',
    quickStartStep3: 'Get instant results and confirmations',

    // Demo Credentials
    demoCredentialsTitle: 'Demo Credentials',
    demoCredentialsDesc: 'Email: ai500@demo.com | Password: password123',
    demoNote: 'Use these credentials to login and explore all YAGO features.',
    passwordLabel: 'Password',

    // Try These Commands
    tryTheseCommands: 'Try These Commands',
    command1: '"Book a table for 2 at an Italian restaurant tonight"',
    command2: '"Find me a dentist appointment tomorrow"',
    command3: '"Order groceries from the nearest supermarket"',
    command4: '"I need a plumber urgently"',

    // Tips
    tipsTitle: 'Pro Tips',
    tip1: 'Be specific — mention time, location, preferences',
    tip2: 'Ask follow-up questions — YAGO remembers context',
    tip3: 'Try different services — restaurants, doctors, travel',
    demoNoticeTitle: 'Note',
    demoNoticeText: 'YAGO responses may be slower as we are using a local PC as a server for your test. Some functions might not be available in web format (like voice messages), but you can try them in the YAGO Telegram bot.',

    openInNewTab: 'Open in Full Screen',
    poweredBy: 'Powered by GPT-4 & Custom NLU',

    // Chatbot Section
    bonusFeature: 'BONUS FEATURE',
    chatbotTitle: 'Ask About YAGO',
    chatbotSubtitle: 'Chat with our AI assistant to learn more about the project',
    chatbotGreeting: "Hi! I'm YAGO's assistant. Ask me anything about the project!",
    chatbotPlaceholder: 'Ask a question about YAGO...',
    chatbotSend: 'Send',
    chatbotErrorDefault: "I'm sorry, I couldn't process that request.",
    chatbotErrorNetwork: 'Sorry, something went wrong. Please try again.',
    suggestedQ1: 'What does your project do?',
    suggestedQ2: 'How will YAGO change society?',
    suggestedQ3: 'What is your vision?',
    suggestedQ4: 'What makes YAGO different?',

    // API Section
    apiAccessBadge: 'API Access',
    apiPlaygroundTitle: 'AI-Powered API',
    apiPlaygroundSubtitle: 'Demonstrate how YAGO interacts with AI endpoints',
    apiEndpointDesc: 'AI-powered endpoint for natural language question answering',
    apiRequestLabel: 'REQUEST',
    apiResponseLabel: 'RESPONSE',
    apiQuestionLabel: 'Question',
    apiExamplesLabel: 'Try these examples',
    apiSending: 'Sending...',
    apiSendRequest: 'Send Request',
    apiProcessing: 'Processing with AI...',
    apiWaiting: 'Send a request to see the response',
    apiIntentLabel: 'Intent',
    apiConfidenceLabel: 'Confidence',
    apiModelLabel: 'Model',
    apiEntitiesLabel: 'Entities',
    apiDocNote: 'This API demonstrates YAGO\'s AI intent classification, entity extraction, and natural language understanding capabilities.',
    // Legacy API keys (kept for backwards compatibility)
    apiTitle: 'AI-Powered API',
    apiSubtitle: 'Demonstrating YAGO\'s intelligent backend: Intent Classification, Entity Extraction, and Natural Language Understanding',
    apiBadge: 'API ACCESS',
    apiPlayground: 'Playground',
    apiDocumentation: 'Documentation',
    apiYourQuestion: 'Your Question',
    apiPlaceholder: 'Ask anything about YAGO...',
    apiQuickExamples: 'Quick Examples',
    apiRequestBody: 'Request Body',
    apiResponse: 'Response',
    apiReady: 'READY',
    apiConfidence: 'Confidence',
    apiIntent: 'Intent',
    apiLatency: 'Latency',
    apiExtractedEntities: 'Extracted Entities',
    apiAiResponse: 'AI Response',
    apiModel: 'Model',
    apiViewRawJson: 'View Raw JSON Response',
    apiSendToSee: 'Send a request to see the AI response',
    apiTryDifferent: 'Try different questions to explore intents',
    apiDocTitle: 'API Documentation',
    apiEndpoint: 'Endpoint',
    apiRequestFormat: 'Request Format',
    apiResponseFormat: 'Response Format',
    apiSupportedIntents: 'Supported Intent Categories',
    apiCapabilities: 'AI Capabilities',
    apiIntentClassification: 'Intent Classification',
    apiIntentClassificationDesc: 'Automatically categorizes questions into 10+ intent types with confidence scoring',
    apiEntityExtraction: 'Entity Extraction',
    apiEntityExtractionDesc: 'Identifies services, dates, locations, and preferences from natural language',
    apiContextAwareness: 'Context Awareness',
    apiContextAwarenessDesc: 'Maintains conversation context for multi-turn dialogue understanding',
    apiRealTimeProcessing: 'Real-time Processing',
    apiRealTimeProcessingDesc: 'Sub-50ms response times with intelligent caching and optimization',

    // Footer
    footerCompetition: 'AI500 Competition - Stage 2',
    footerRights: '© 2024 YAGO. All rights reserved.',
  },

  ru: {
    // Header
    badge: 'AI500 Этап 2',
    backToHome: 'На главную',

    // Hero
    liveDemoBadge: 'Демо',
    heroTitle: 'Знакомьтесь:',
    heroTitleHighlight: 'YAGO',
    heroSubtitle: 'Ваш персональный AI-консьерж',
    heroPitch: 'Один разговор. Ноль проблем. YAGO решает ваши задачи, чтобы вы не тратили время.',
    heroFeature1: '🏥 Нужен врач? YAGO найдёт лучшего специалиста и запишет вас на приём',
    heroFeature2: '🚗 Сломалась машина? YAGO найдёт ближайший автосервис, сравнит цены и вызовет эвакуатор',
    heroFeature3: '🛒 Нужны продукты? YAGO закажет из любимого магазина и отследит доставку',
    heroFeature4: '✈️ Планируете поездку? YAGO забронирует билеты, отель и составит маршрут',
    heroFeature5: '🍽️ Хочется поужинать? YAGO зарезервирует столик в идеальном ресторане',
    heroFeature6: '🔧 Авария дома? YAGO найдёт сантехника, электрика и быстро пришлёт помощь',
    heroTagline: 'Доступен в Telegram, Web и iOS',

    // Video Section
    videoTitle: 'Демо видео',
    videoSubtitle: 'Посмотрите, как работает YAGO',
    videoComingSoon: 'Видео скоро будет',
    videoComingSoonDesc: 'Наше демо-видео готовится. Загляните позже!',
    videoDuration: 'Длительность: 3-4 минуты | Записано в декабре 2024',

    // Description Section
    descriptionTitle: 'YAGO в действии',
    descriptionSubtitle: 'Смотрите, как YAGO превращает сложные задачи в простые разговоры',

    // What's Being Shown
    whatShownTitle: 'Суперсилы YAGO',
    whatShown1: '🧠 Понимает естественный язык — говорите как с другом',
    whatShown2: '⚡ Мгновенное действие — бронирует, заказывает, вызывает за секунды',
    whatShown3: '🔄 Помнит всё — ваши предпочтения, прошлые заказы, любимые места',
    whatShown4: '🌐 Работает везде — Telegram, iOS, Web — всё синхронизировано',
    whatShown5: '🤝 Торгуется за вас — ищет лучшие цены, сравнивает, находит скидки',
    whatShown6: '📍 Знает локацию — что рядом и что доступно прямо сейчас',

    // Problem & Solution
    problemSolutionTitle: 'Зачем нужен YAGO',
    problemLabel: '😫 Ежедневная рутина:',
    problemText: 'Вы тратите 2+ часа в день на рутину: поиск врачей, сравнение цен, ожидание на линии, заполнение форм, проверка свободных слотов, согласование расписаний. В телефоне 50+ приложений, но они не связаны друг с другом.',
    solutionLabel: '✨ Путь YAGO:',
    solutionText: 'Одно сообщение. Всё. «Нужен стоматолог завтра днём рядом с офисом» → YAGO находит свободных врачей, проверяет отзывы, сравнивает цены, бронирует лучший вариант, добавляет в календарь и напоминает перед приёмом. А вы занимаетесь важным.',

    // Tech Stack
    techStackTitle: 'Технологии',
    techFrontend: 'Фронтенд',
    techFrontendValue: 'Next.js, React, TypeScript, Tailwind CSS',
    techMobile: 'Мобильные',
    techMobileValue: 'Flutter (iOS/Android), React Native',
    techBackend: 'Бэкенд',
    techBackendValue: 'Node.js, TypeScript, REST API',
    techAI: 'AI/ML',
    techAIValue: 'OpenAI GPT-4, Собственный NLU',
    techDatabase: 'База данных',
    techDatabaseValue: 'PostgreSQL, Redis',
    techIntegrations: 'Интеграции',
    techIntegrationsValue: 'Telegram Bot API, Платёжные системы',
    techInfra: 'Инфраструктура',
    techInfraValue: 'Vercel, AWS, ngrok (демо)',

    // Roadmap
    roadmapTitle: 'Дорожная карта',
    currentStage: 'Текущий этап:',
    stageIdea: 'Идея',
    stagePrototype: 'Прототип',
    stageMVP: 'MVP',
    stageLaunched: 'Запущен',
    nextStepsTitle: 'Следующие шаги:',
    nextStep1: 'Интеграция платежей и подтверждение бронирований',
    nextStep2: 'Подключение партнёров (рестораны, услуги)',
    nextStep3: 'Публичный бета-запуск в Узбекистане',
    nextStep4: 'Выпуск Android приложения',

    // Live Demo Section
    liveDemoTitle: 'Попробуйте YAGO',
    liveDemoSubtitle: 'Взаимодействуйте с нашим iOS приложением прямо в браузере',
    loadingApp: 'Загрузка приложения...',

    // Quick Start Guide
    quickStartTitle: 'Быстрый старт',
    quickStartStep1: 'Напишите запрос на естественном языке',
    quickStartStep2: 'YAGO понимает контекст и предпочтения',
    quickStartStep3: 'Получите мгновенный результат',

    // Demo Credentials
    demoCredentialsTitle: 'Данные для входа',
    demoCredentialsDesc: 'Email: ai500@demo.com | Пароль: password123',
    demoNote: 'Используйте эти данные для входа и изучения всех функций YAGO.',
    passwordLabel: 'Пароль',

    // Try These Commands
    tryTheseCommands: 'Попробуйте эти команды',
    command1: '"Забронируй столик на 2 в итальянском ресторане на сегодня"',
    command2: '"Запиши меня к стоматологу на завтра"',
    command3: '"Закажи продукты из ближайшего супермаркета"',
    command4: '"Мне срочно нужен сантехник"',

    // Tips
    tipsTitle: 'Советы',
    tip1: 'Будьте конкретны — укажите время, место, предпочтения',
    tip2: 'Задавайте уточняющие вопросы — YAGO помнит контекст',
    tip3: 'Пробуйте разные услуги — рестораны, врачи, путешествия',
    demoNoticeTitle: 'Примечание',
    demoNoticeText: 'Ответы YAGO могут быть медленнее, так как для тестирования используется локальный ПК в качестве сервера. Некоторые функции могут быть недоступны в веб-формате (например, голосовые сообщения), но вы можете попробовать их в Telegram-боте YAGO.',

    openInNewTab: 'Открыть на весь экран',
    poweredBy: 'Работает на GPT-4 и собственном NLU',

    // Chatbot Section
    bonusFeature: 'БОНУС',
    chatbotTitle: 'Спросите о YAGO',
    chatbotSubtitle: 'Пообщайтесь с нашим AI-ассистентом, чтобы узнать больше о проекте',
    chatbotGreeting: 'Привет! Я ассистент YAGO. Спрашивайте что угодно о проекте!',
    chatbotPlaceholder: 'Задайте вопрос о YAGO...',
    chatbotSend: 'Отправить',
    chatbotErrorDefault: 'Извините, не удалось обработать запрос.',
    chatbotErrorNetwork: 'Произошла ошибка. Попробуйте ещё раз.',
    suggestedQ1: 'Что делает ваш проект?',
    suggestedQ2: 'Как YAGO изменит общество?',
    suggestedQ3: 'Какое ваше видение?',
    suggestedQ4: 'Чем YAGO отличается?',

    // API Section
    apiAccessBadge: 'Доступ к API',
    apiPlaygroundTitle: 'AI-Powered API',
    apiPlaygroundSubtitle: 'Демонстрация взаимодействия YAGO с AI-эндпоинтами',
    apiEndpointDesc: 'AI-эндпоинт для обработки вопросов на естественном языке',
    apiRequestLabel: 'ЗАПРОС',
    apiResponseLabel: 'ОТВЕТ',
    apiQuestionLabel: 'Вопрос',
    apiExamplesLabel: 'Попробуйте эти примеры',
    apiSending: 'Отправка...',
    apiSendRequest: 'Отправить запрос',
    apiProcessing: 'Обработка ИИ...',
    apiWaiting: 'Отправьте запрос, чтобы увидеть ответ',
    apiIntentLabel: 'Намерение',
    apiConfidenceLabel: 'Уверенность',
    apiModelLabel: 'Модель',
    apiEntitiesLabel: 'Сущности',
    apiDocNote: 'Этот API демонстрирует классификацию намерений, извлечение сущностей и понимание естественного языка YAGO.',
    // Legacy API keys
    apiTitle: 'AI-Powered API',
    apiSubtitle: 'Демонстрация интеллектуального бэкенда YAGO: Классификация намерений, Извлечение сущностей и Понимание естественного языка',
    apiBadge: 'ДОСТУП К API',
    apiPlayground: 'Песочница',
    apiDocumentation: 'Документация',
    apiYourQuestion: 'Ваш вопрос',
    apiPlaceholder: 'Спросите что угодно о YAGO...',
    apiQuickExamples: 'Быстрые примеры',
    apiRequestBody: 'Тело запроса',
    apiResponse: 'Ответ',
    apiReady: 'ГОТОВ',
    apiConfidence: 'Уверенность',
    apiIntent: 'Намерение',
    apiLatency: 'Задержка',
    apiExtractedEntities: 'Извлечённые сущности',
    apiAiResponse: 'Ответ ИИ',
    apiModel: 'Модель',
    apiViewRawJson: 'Показать JSON ответ',
    apiSendToSee: 'Отправьте запрос, чтобы увидеть ответ ИИ',
    apiTryDifferent: 'Попробуйте разные вопросы для изучения намерений',
    apiDocTitle: 'Документация API',
    apiEndpoint: 'Эндпоинт',
    apiRequestFormat: 'Формат запроса',
    apiResponseFormat: 'Формат ответа',
    apiSupportedIntents: 'Поддерживаемые категории намерений',
    apiCapabilities: 'Возможности ИИ',
    apiIntentClassification: 'Классификация намерений',
    apiIntentClassificationDesc: 'Автоматически распределяет вопросы по 10+ категориям с оценкой уверенности',
    apiEntityExtraction: 'Извлечение сущностей',
    apiEntityExtractionDesc: 'Определяет услуги, даты, места и предпочтения из естественного языка',
    apiContextAwareness: 'Контекстное понимание',
    apiContextAwarenessDesc: 'Сохраняет контекст разговора для многошагового диалога',
    apiRealTimeProcessing: 'Обработка в реальном времени',
    apiRealTimeProcessingDesc: 'Время ответа менее 50мс с интеллектуальным кэшированием',

    // Footer
    footerCompetition: 'AI500 Конкурс - Этап 2',
    footerRights: '© 2024 YAGO. Все права защищены.',
  },

  uz: {
    // Header
    badge: 'AI500 Bosqich 2',
    backToHome: 'Bosh sahifa',

    // Hero
    liveDemoBadge: 'Jonli Demo',
    heroTitle: 'Tanishing:',
    heroTitleHighlight: 'YAGO',
    heroSubtitle: 'Sizning AI-quvvatli shaxsiy konsyerjingiz',
    heroPitch: 'Bitta suhbat. Nol muammo. YAGO hayotingizni osonlashtiradi.',
    heroFeature1: '🏥 Shifokorga yozilish kerakmi? YAGO eng yaxshi mutaxassisni topadi va sizni yozadi',
    heroFeature2: '🚗 Mashina buzildi? YAGO yaqin avtoservisni topadi, narxlarni solishtiradi va evakuator chaqiradi',
    heroFeature3: '🛒 Oziq-ovqat kerakmi? YAGO sevimli do\'koningizdan buyurtma beradi va yetkazishni kuzatadi',
    heroFeature4: '✈️ Sayohat rejalashtirmoqdamisiz? YAGO aviabilet, mehmonxona bron qiladi va marshrutingizni tuzadi',
    heroFeature5: '🍽️ Kechki ovqat istaysizmi? YAGO eng zo\'r restoranda stol band qiladi',
    heroFeature6: '🔧 Uyda favqulodda holat? YAGO santexnik, elektrik topadi va tez yordam yuboradi',
    heroTagline: 'Telegram, Web va iOS\'da mavjud',

    // Video Section
    videoTitle: 'Demo Video',
    videoSubtitle: 'YAGO qanday ishlashini ko\'ring',
    videoComingSoon: 'Video tez orada',
    videoComingSoonDesc: 'Demo videomiz tayyorlanmoqda. Tez orada tekshiring!',
    videoDuration: 'Davomiyligi: 3-4 daqiqa | 2024 yil dekabr oyida yozilgan',

    // Description Section
    descriptionTitle: 'YAGO qanday ishlaydi?!',
    descriptionSubtitle: 'YAGO murakkab vazifalarni oddiy suhbatlarga qanday aylantirishini ko\'ring',

    // What's Being Shown
    whatShownTitle: 'YAGO super kuchlari',
    whatShown1: '🧠 Tabiiy tilni tushunadi — do\'stingiz bilan gaplashgandek gapiring',
    whatShown2: '⚡ Bir zumda harakat — soniyalarda bron qiladi, buyurtma beradi, chaqiradi',
    whatShown3: '🔄 Hammasini eslab qoladi — afzalliklaringiz, oldingi buyurtmalar, sevimli joylar',
    whatShown4: '🌐 Hamma joyda ishlaydi — Telegram, iOS, Web — hammasi sinxronlashgan',
    whatShown5: '🤝 Siz uchun savdolashadi — eng yaxshi narxlarni topadi, solishtirad, chegirmalar oladi',
    whatShown6: '📍 Joylashuvni biladi — yaqinda nima bor va hozir nima mavjud',

    // Problem & Solution
    problemSolutionTitle: 'YAGO nima uchun kerak',
    problemLabel: '😫 Kundalik qiyinchilik:',
    problemText: 'Siz kuniga 2+ soat oddiy ishlarga sarflaysiz: shifokor qidirish, narxlarni solishtirish, telefonda kutish, formalar to\'ldirish, bo\'sh vaqtni tekshirish, jadvallarni moslash. Telefoningizda 50+ ilova bor, lekin ular bir-biri bilan bog\'lanmagan.',
    solutionLabel: '✨ YAGO yo\'li:',
    solutionText: 'Bitta xabar. Tamom. "Ertaga tushdan keyin ofisim yaqinida tish shifokori kerak" → YAGO bo\'sh shifokorlarni topadi, sharhlarni tekshiradi, narxlarni solishtiradi, eng yaxshisini bron qiladi, taqvimga qo\'shadi va uchrashuvdan oldin eslatadi. Siz esa muhim ishlaringiz bilan shug\'ullanasiz.',

    // Tech Stack
    techStackTitle: 'Texnologiyalar',
    techFrontend: 'Frontend',
    techFrontendValue: 'Next.js, React, TypeScript, Tailwind CSS',
    techMobile: 'Mobil',
    techMobileValue: 'Flutter (iOS/Android), React Native',
    techBackend: 'Backend',
    techBackendValue: 'Node.js, TypeScript, REST API',
    techAI: 'AI/ML',
    techAIValue: 'OpenAI GPT-4, Maxsus NLU pipeline',
    techDatabase: 'Ma\'lumotlar bazasi',
    techDatabaseValue: 'PostgreSQL, Redis',
    techIntegrations: 'Integratsiyalar',
    techIntegrationsValue: 'Telegram Bot API, To\'lov tizimlari',
    techInfra: 'Infratuzilma',
    techInfraValue: 'Vercel, AWS, ngrok (demo)',

    // Roadmap
    roadmapTitle: 'Yo\'l xaritasi',
    currentStage: 'Joriy bosqich:',
    stageIdea: 'G\'oya',
    stagePrototype: 'Prototip',
    stageMVP: 'MVP',
    stageLaunched: 'Ishga tushirilgan',
    nextStepsTitle: 'Keyingi qadamlar:',
    nextStep1: 'To\'lov integratsiyasi va bron tasdiqlash',
    nextStep2: 'Hamkorlarni ulash (restoranlar, xizmatlar)',
    nextStep3: 'O\'zbekistonda ommaviy beta-ishga tushirish',
    nextStep4: 'Android ilovasini chiqarish',

    // Live Demo Section
    liveDemoTitle: 'YAGO\'ni sinab ko\'ring',
    liveDemoSubtitle: 'iOS ilovamiz bilan to\'g\'ridan-to\'g\'ri brauzeringizda muloqot qiling',
    loadingApp: 'Ilova yuklanmoqda...',

    // Quick Start Guide
    quickStartTitle: 'Tez boshlash',
    quickStartStep1: 'So\'rovingizni tabiiy tilda yozing',
    quickStartStep2: 'YAGO kontekst va afzalliklarni tushunadi',
    quickStartStep3: 'Bir zumda natija oling',

    // Demo Credentials
    demoCredentialsTitle: 'Kirish ma\'lumotlari',
    demoCredentialsDesc: 'Email: ai500@demo.com | Parol: password123',
    demoNote: 'YAGO\'ning barcha funksiyalarini o\'rganish uchun ushbu ma\'lumotlardan foydalaning.',
    passwordLabel: 'Parol',

    // Try These Commands
    tryTheseCommands: 'Bu buyruqlarni sinab ko\'ring',
    command1: '"Bugun kechqurun italyan restoranida 2 kishi uchun stol bron qil"',
    command2: '"Ertaga tish shifokoriga yozil"',
    command3: '"Eng yaqin supermarketdan oziq-ovqat buyurtma qil"',
    command4: '"Menga zudlik bilan santexnik kerak"',

    // Tips
    tipsTitle: 'Maslahatlar',
    tip1: 'Aniq bo\'ling — vaqt, joy, afzalliklarni ayting',
    tip2: 'Qo\'shimcha savollar bering — YAGO kontekstni eslab qoladi',
    tip3: 'Turli xizmatlarni sinab ko\'ring — restoranlar, shifokorlar, sayohat',
    demoNoticeTitle: 'Eslatma',
    demoNoticeText: 'YAGO javoblari sekinroq bo\'lishi mumkin, chunki test uchun mahalliy kompyuter server sifatida ishlatilmoqda. Ba\'zi funksiyalar veb formatida mavjud bo\'lmasligi mumkin (masalan, ovozli xabarlar), lekin ularni YAGO Telegram botida sinab ko\'rishingiz mumkin.',

    openInNewTab: 'To\'liq ekranda ochish',
    poweredBy: 'GPT-4 va maxsus NLU asosida ishlaydi',

    // Chatbot Section
    bonusFeature: 'BONUS',
    chatbotTitle: 'YAGO haqida so\'rang',
    chatbotSubtitle: 'Loyiha haqida ko\'proq bilish uchun AI yordamchimiz bilan suhbatlashing',
    chatbotGreeting: 'Salom! Men YAGO yordamchisiman. Loyiha haqida istalgan narsani so\'rang!',
    chatbotPlaceholder: 'YAGO haqida savol bering...',
    chatbotSend: 'Yuborish',
    chatbotErrorDefault: 'Kechirasiz, so\'rovni qayta ishlay olmadim.',
    chatbotErrorNetwork: 'Xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.',
    suggestedQ1: 'Loyihangiz nima qiladi?',
    suggestedQ2: 'YAGO jamiyatni qanday o\'zgartiradi?',
    suggestedQ3: 'Sizning tasavvuringiz nima?',
    suggestedQ4: 'YAGO nimasi bilan farq qiladi?',

    // API Section
    apiAccessBadge: 'API kirish',
    apiPlaygroundTitle: 'AI-Powered API',
    apiPlaygroundSubtitle: 'YAGO AI endpointlari bilan qanday ishlashini namoyish etish',
    apiEndpointDesc: 'Tabiiy tildagi savollarni qayta ishlash uchun AI endpoint',
    apiRequestLabel: 'SO\'ROV',
    apiResponseLabel: 'JAVOB',
    apiQuestionLabel: 'Savol',
    apiExamplesLabel: 'Ushbu misollarni sinab ko\'ring',
    apiSending: 'Yuborilmoqda...',
    apiSendRequest: 'So\'rov yuborish',
    apiProcessing: 'AI bilan qayta ishlanmoqda...',
    apiWaiting: 'Javobni ko\'rish uchun so\'rov yuboring',
    apiIntentLabel: 'Niyat',
    apiConfidenceLabel: 'Ishonch',
    apiModelLabel: 'Model',
    apiEntitiesLabel: 'Ob\'ektlar',
    apiDocNote: 'Bu API YAGO\'ning niyatlarni tasniflash, ob\'ektlarni ajratib olish va tabiiy tilni tushunish imkoniyatlarini namoyish etadi.',
    // Legacy API keys
    apiTitle: 'AI-Powered API',
    apiSubtitle: 'YAGO\'ning aqlli backend\'ini namoyish etish: Niyatlarni tasniflash, Ob\'ektlarni ajratib olish va Tabiiy tilni tushunish',
    apiBadge: 'API KIRISH',
    apiPlayground: 'Sinov maydoni',
    apiDocumentation: 'Hujjatlar',
    apiYourQuestion: 'Sizning savolingiz',
    apiPlaceholder: 'YAGO haqida istalgan narsani so\'rang...',
    apiQuickExamples: 'Tezkor misollar',
    apiRequestBody: 'So\'rov tanasi',
    apiResponse: 'Javob',
    apiReady: 'TAYYOR',
    apiConfidence: 'Ishonch',
    apiIntent: 'Niyat',
    apiLatency: 'Kechikish',
    apiExtractedEntities: 'Ajratib olingan ob\'ektlar',
    apiAiResponse: 'AI javobi',
    apiModel: 'Model',
    apiViewRawJson: 'JSON javobini ko\'rish',
    apiSendToSee: 'AI javobini ko\'rish uchun so\'rov yuboring',
    apiTryDifferent: 'Niyatlarni o\'rganish uchun turli savollarni sinab ko\'ring',
    apiDocTitle: 'API Hujjatlari',
    apiEndpoint: 'Endpoint',
    apiRequestFormat: 'So\'rov formati',
    apiResponseFormat: 'Javob formati',
    apiSupportedIntents: 'Qo\'llab-quvvatlanadigan niyat kategoriyalari',
    apiCapabilities: 'AI imkoniyatlari',
    apiIntentClassification: 'Niyatlarni tasniflash',
    apiIntentClassificationDesc: 'Savollarni avtomatik ravishda 10+ kategoriyaga ishonch ballari bilan ajratadi',
    apiEntityExtraction: 'Ob\'ektlarni ajratib olish',
    apiEntityExtractionDesc: 'Tabiiy tildan xizmatlar, sanalar, joylar va afzalliklarni aniqlaydi',
    apiContextAwareness: 'Kontekstni tushunish',
    apiContextAwarenessDesc: 'Ko\'p bosqichli dialog uchun suhbat kontekstini saqlaydi',
    apiRealTimeProcessing: 'Real vaqtda qayta ishlash',
    apiRealTimeProcessingDesc: 'Aqlli keshlash bilan 50ms dan kam javob vaqti',

    // Footer
    footerCompetition: 'AI500 Musobaqa - Bosqich 2',
    footerRights: '© 2024 YAGO. Barcha huquqlar himoyalangan.',
  },
};

export const languageNames: Record<Language, string> = {
  en: 'English',
  ru: 'Русский',
  uz: 'O\'zbek',
};

export const languageFlags: Record<Language, string> = {
  en: '🇬🇧',
  ru: '🇷🇺',
  uz: '🇺🇿',
};
