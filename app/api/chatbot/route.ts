import { NextRequest, NextResponse } from 'next/server';

// =============================================================================
// TYPES
// =============================================================================

type Language = 'en' | 'ru' | 'uz';

interface ChatbotRequest {
  question: string;
  language?: Language;
}

interface ChatbotResponse {
  answer: string;
}

// =============================================================================
// PREDEFINED ANSWERS (Rule-based) - Multilingual
// =============================================================================

const PREDEFINED_ANSWERS: Record<Language, Record<string, string>> = {
  en: {
    'what does your project do':
      'YAGO is your AI-powered life operator. Imagine having a brilliant assistant who never sleeps, never forgets, and handles EVERYTHING — from emergency plumber calls at 2 AM to planning your dream vacation. One message like "My car broke down" triggers YAGO to find nearby mechanics, compare prices, arrange towing, and even reschedule your meetings. We\'re not building another app — we\'re giving everyone access to the kind of personal concierge that was once reserved for the ultra-wealthy.',

    'who is this product for':
      'YAGO is for EVERYONE who has ever felt overwhelmed by life\'s logistics. The single parent juggling work and kids\' appointments. The entrepreneur who loses hours to admin tasks. The elderly person struggling with technology. The tourist lost in a foreign city. We believe personal assistance shouldn\'t be a luxury — it should be a basic utility. YAGO democratizes access to efficient living, giving every person the power to reclaim their time and mental energy.',

    'how does yago use ai':
      'YAGO\'s AI is like having a genius friend with perfect memory. Powered by GPT-4 and our custom NLU engine, YAGO understands context, nuance, and even emotion. Say "I\'m stressed about tomorrow" and YAGO knows you have a big presentation — it\'ll suggest a calming restaurant, remind you of your prep notes, and set your alarm earlier. Our AI learns YOUR patterns: your favorite cuisines, preferred doctors, budget limits, and even that you hate morning appointments. It\'s not just smart — it\'s YOUR kind of smart.',

    'what makes yago different':
      'Traditional apps are tools. YAGO is a partner. While other apps make you navigate menus and fill forms, YAGO just LISTENS. "I need to see a dentist, somewhere close, maybe Tuesday afternoon, not too expensive" — that\'s enough. YAGO searches, compares, negotiates, books, and reminds you. No app-switching. No hold music. No frustration. We\'ve unified 50+ services into ONE conversation. It\'s like upgrading from a flip phone to a smartphone — once you experience it, you can\'t go back.',

    'what technologies do you use':
      'We\'ve built YAGO on a cutting-edge stack designed for scale and intelligence: GPT-4 + Custom NLU for human-like understanding, Flutter for beautiful cross-platform apps, Node.js/TypeScript backend for reliability, PostgreSQL + Redis for lightning-fast responses, and seamless integrations with Telegram, payment systems, and local service providers. Every piece is chosen to make YAGO feel like magic.',

    'what is the current status':
      'YAGO is LIVE and working! Our MVP is fully functional with iOS app, Telegram bot, and web interface. Real users are booking real services. We\'re currently in Uzbekistan, onboarding partners and refining the experience. But this is just the beginning — we\'re building the infrastructure for a future where everyone has an AI assistant. Early adopters are already experiencing the future of personal assistance.',

    'what are your next steps':
      'We\'re on a mission to make YAGO ubiquitous. Next: integrated payments for seamless transactions, 100+ partner businesses onboarded, Android app launch, and expansion across Central Asia. Our vision? YAGO in every pocket, in every language, helping billions of people live more efficiently. We\'re not just building a product — we\'re building a new way of life.',

    'how can i try yago':
      'Experience YAGO RIGHT NOW! Use the live demo above — it\'s our actual iOS app running in your browser. Login with the demo credentials and just... talk to YAGO. Ask it to book a restaurant. Find a doctor. Order groceries. Feel the magic of having an AI that actually DOES things for you. This isn\'t a mockup — it\'s your future assistant, ready to serve.',

    'who is on your team':
      'We\'re a team of dreamers and builders from Uzbekistan who believe technology should serve humanity, not complicate it. Our diverse team combines AI expertise, mobile development mastery, and deep understanding of local markets. We\'ve experienced the frustration of fragmented services firsthand — that\'s why we\'re obsessed with solving it. YAGO isn\'t just our product; it\'s our answer to making everyday life better for everyone.',

    'how will yago change society':
      'YAGO represents a fundamental shift in how humans interact with services. Imagine a world where language barriers don\'t prevent you from getting help. Where the elderly aren\'t excluded from digital services. Where a busy parent can manage their family\'s entire logistics with voice commands. We\'re not just saving time — we\'re reducing stress, increasing accessibility, and democratizing efficiency. When everyone has a personal AI assistant, society becomes more equal, more productive, and more human.',

    'what is your vision':
      'Our vision is audacious: make personal assistance a universal right, not a privilege. In 5 years, asking YAGO for help should be as natural as turning on a light. We see a future where YAGO handles the mundane so humans can focus on the meaningful — creativity, relationships, growth. We\'re building the infrastructure for human flourishing, one conversation at a time.',

    'why uzbekistan':
      'Uzbekistan is the perfect launchpad. A young, tech-savvy population hungry for innovation. A growing economy with fragmented services ripe for unification. A strategic position at the crossroads of Central Asia. We\'re proving that world-changing technology can come from anywhere. Success here means we can scale everywhere — from Tashkent to Tokyo to Toronto.',
  },
  ru: {
    'что делает ваш проект':
      'YAGO — это ваш AI-оператор жизни. Представьте гениального помощника, который никогда не спит, ничего не забывает и решает ВСЁ — от вызова сантехника в 2 часа ночи до планирования отпуска мечты. Одно сообщение «Машина сломалась» — и YAGO находит ближайшие автосервисы, сравнивает цены, вызывает эвакуатор и даже переносит ваши встречи. Мы не создаём очередное приложение — мы даём каждому доступ к персональному консьержу, который раньше был только у миллионеров.',

    'для кого этот продукт':
      'YAGO для КАЖДОГО, кто когда-либо чувствовал себя перегруженным бытовыми задачами. Для родителя-одиночки, жонглирующего работой и детскими записями. Для предпринимателя, теряющего часы на рутину. Для пожилого человека, которому сложно с технологиями. Для туриста, потерявшегося в чужом городе. Мы верим: персональный помощник — это не роскошь, а базовая необходимость. YAGO демократизирует доступ к эффективной жизни.',

    'как yago использует ии':
      'AI YAGO — это как гениальный друг с идеальной памятью. На основе GPT-4 и нашего NLU-движка YAGO понимает контекст, нюансы и даже эмоции. Скажите «Завтра нервничаю» — и YAGO знает, что у вас важная презентация: предложит расслабляющий ресторан, напомнит о подготовке и поставит будильник пораньше. Наш AI изучает ВАШИ паттерны: любимую кухню, предпочитаемых врачей, бюджет и даже то, что вы ненавидите утренние встречи.',

    'чем yago отличается':
      'Обычные приложения — это инструменты. YAGO — это партнёр. Пока другие заставляют вас листать меню и заполнять формы, YAGO просто СЛУШАЕТ. «Нужен стоматолог, где-то рядом, может во вторник днём, недорого» — этого достаточно. YAGO ищет, сравнивает, договаривается, бронирует и напоминает. Никаких переключений между приложениями. Никакой музыки ожидания. Никакого раздражения. Мы объединили 50+ услуг в ОДИН разговор.',

    'какие технологии вы используете':
      'YAGO построен на передовом стеке для масштаба и интеллекта: GPT-4 + собственный NLU для человеческого понимания, Flutter для красивых кроссплатформенных приложений, Node.js/TypeScript бэкенд для надёжности, PostgreSQL + Redis для молниеносных ответов и бесшовные интеграции с Telegram, платёжными системами и локальными сервисами. Каждый компонент выбран, чтобы YAGO ощущался как магия.',

    'каков текущий статус':
      'YAGO работает ПРЯМО СЕЙЧАС! Наш MVP полностью функционален: iOS-приложение, Telegram-бот, веб-интерфейс. Реальные пользователи бронируют реальные услуги. Мы в Узбекистане, подключаем партнёров и совершенствуем опыт. Но это только начало — мы строим инфраструктуру будущего, где у каждого есть AI-помощник.',

    'каковы ваши следующие шаги':
      'Наша миссия — сделать YAGO повсеместным. Далее: интегрированные платежи, 100+ партнёров, запуск Android и экспансия по Центральной Азии. Наше видение? YAGO в каждом кармане, на каждом языке, помогающий миллиардам людей жить эффективнее. Мы строим не просто продукт — мы строим новый образ жизни.',

    'как попробовать yago':
      'Испытайте YAGO ПРЯМО СЕЙЧАС! Используйте демо выше — это наше настоящее iOS-приложение в вашем браузере. Войдите с демо-данными и просто... поговорите с YAGO. Попросите забронировать ресторан. Найти врача. Заказать продукты. Почувствуйте магию AI, который ДЕЙСТВИТЕЛЬНО делает что-то для вас.',

    'кто в вашей команде':
      'Мы — команда мечтателей и созидателей из Узбекистана, верящих, что технологии должны служить человечеству, а не усложнять жизнь. Наша команда сочетает экспертизу в AI, мастерство мобильной разработки и глубокое понимание локальных рынков. Мы сами испытали раздражение от разрозненных сервисов — поэтому одержимы решением этой проблемы.',

    'как yago изменит общество':
      'YAGO — это фундаментальный сдвиг во взаимодействии людей с услугами. Представьте мир, где языковые барьеры не мешают получить помощь. Где пожилые не исключены из цифровых сервисов. Где занятой родитель управляет всей логистикой семьи голосом. Мы не просто экономим время — мы снижаем стресс, повышаем доступность и демократизируем эффективность.',

    'какое ваше видение':
      'Наше видение амбициозно: сделать персональную помощь универсальным правом, а не привилегией. Через 5 лет обращение к YAGO должно быть таким же естественным, как включение света. Мы видим будущее, где YAGO решает рутину, а люди фокусируются на важном — творчестве, отношениях, развитии.',

    'почему узбекистан':
      'Узбекистан — идеальный плацдарм. Молодое, технически подкованное население, жаждущее инноваций. Растущая экономика с разрозненными сервисами, готовыми к объединению. Стратегическая позиция на перекрёстке Центральной Азии. Мы доказываем, что технологии, меняющие мир, могут появиться откуда угодно.',
  },
  uz: {
    'loyihangiz nima qiladi':
      'YAGO — bu sizning AI-hayot operatoringiz. Hech qachon uxlamaydigan, hech narsani unutmaydigan va HAMMA narsani hal qiladigan daho yordamchini tasavvur qiling — tungi soat 2 da santexnik chaqirishdan tortib, orzu qilingan ta\'tilni rejalashtirishgacha. "Mashinam buzildi" degan bitta xabar — YAGO yaqin avtoservislarni topadi, narxlarni solishtiradi, evakuatorni chaqiradi va hatto uchrashuvlaringizni qayta rejalashtiradi. Biz oddiy ilova yaratmayapmiz — biz XIZMAT IZLOVCHILAR va XIZMAT KO\'RSATUVCHILARNI birlashtiramiz. Mijoz o\'z ehtiyojini aytadi, usta esa buyurtma oladi. YAGO — bu ikkala tomon uchun ko\'prik!',

    'bu mahsulot kim uchun':
      'YAGO hayotning mayda ishlaridan charchagan HAR BIR KISHI uchun. Ish va bolalar bilan ovora yolg\'iz ota-ona uchun. Kundalik ishlar uchun soatlab vaqt yo\'qotadigan tadbirkor uchun. Texnologiyalar bilan qiynalayotgan keksa odam uchun. Begona shaharda yo\'qolib qolgan sayyoh uchun. Biz ishonamiz: shaxsiy yordamchi hashamat emas — bu asosiy ehtiyoj. YAGO samarali hayotga kirishni demokratlashtiradi.',

    'yago qanday ai ishlatadi':
      'YAGO AI — bu mukammal xotirali daho do\'stga o\'xshaydi. GPT-4 va bizning NLU dvigatelimiz asosida YAGO kontekstni, nozikliklarni va hatto his-tuyg\'ularni tushunadi. "Ertaga hayajonlanaman" desangiz — YAGO muhim prezentatsiya borligini biladi: tinchlantiruvchi restoran taklif qiladi, tayyorgarlikni eslatadi va budilnikni ertaroq qo\'yadi. Bizning AI SIZNING odatlaringizni o\'rganadi: sevimli taomlar, afzal shifokorlar, byudjet va hatto ertalabki uchrashuvlarni yoqtirmasligingizni.',

    'yago nimasi bilan farqlanadi':
      'Oddiy ilovalar — bu asboblar. YAGO — bu sherik. Boshqa ilovalar menyu va formalarni to\'ldirishga majbur qilsa, YAGO shunchaki TINGLAYDI. "Tish shifokori kerak, yaqin joyda, seshanba kuni tushdan keyin, arzon" — shu yetarli. YAGO qidiradi, solishtiradi, gaplashadi, bron qiladi va eslatadi. Ilovalar o\'rtasida sakrash yo\'q. Kutish musiqasi yo\'q. Asabiylik yo\'q. Biz 50+ xizmatni BITTA suhbatga birlashtirdik.',

    'qanday texnologiyalar ishlatasiz':
      'YAGO masshtab va intellekt uchun zamonaviy texnologiyalarda qurilgan: GPT-4 + maxsus NLU insoniy tushunish uchun, Flutter chiroyli krossplatforma ilovalar uchun, Node.js/TypeScript backend ishonchlilik uchun, PostgreSQL + Redis chaqmoq tezlikdagi javoblar uchun va Telegram, to\'lov tizimlari va mahalliy xizmatlar bilan uzluksiz integratsiyalar.',

    'hozirgi holat qanday':
      'YAGO HOZIR ISHLAYAPTI! Bizning MVP to\'liq funksional: iOS ilova, Telegram bot, veb-interfeys. Haqiqiy foydalanuvchilar haqiqiy xizmatlarni bron qilmoqda. Biz O\'zbekistondamiz, hamkorlarni ulayapmiz va tajribani takomillashtiryapmiz. Lekin bu faqat boshlanish — biz HAR KIMDA AI yordamchi bo\'ladigan kelajak infratuzilmasini quryapmiz.',

    'keyingi qadamlaringiz nima':
      'Bizning missiyamiz — YAGO ni hamma joyda qilish. Keyingi qadamlar: integratsiyalangan to\'lovlar, 100+ hamkor bizneslar, Android ilovasini ishga tushirish va Markaziy Osiyo bo\'ylab kengayish. Bizning tasavvurimiz? Har bir cho\'ntakda, har bir tilda YAGO, milliardlab odamlarga samaraliroq yashashga yordam beradi. Biz oddiy mahsulot emas — yangi hayot tarzi quryapmiz.',

    'yago ni qanday sinab ko\'raman':
      'YAGO ni HOZIROQ sinab ko\'ring! Yuqoridagi demoni ishlating — bu brauzeringizda ishlaydigan haqiqiy iOS ilovamiz. Demo ma\'lumotlar bilan kiring va shunchaki... YAGO bilan gaplashing. Restoran bron qilishni so\'rang. Shifokor toping. Oziq-ovqat buyurtma qiling. Siz uchun HAQIQATAN HAM ish qiladigan AI sehrini his qiling.',

    'jamoangizda kim bor':
      'Biz O\'zbekistondan texnologiya insoniyatga xizmat qilishi kerak deb ishonadigan orzumandlar va quruchilar jamoasimiz. Jamoamiz AI tajribasini, mobil dasturlash mahoratini va mahalliy bozorlarni chuqur tushunishni birlashtiradi. Biz tarqoq xizmatlardan kelib chiqadigan muammolarni o\'zimiz boshdan kechirdik — shuning uchun uni hal qilishga berilib ketganmiz.',

    'yago jamiyatni qanday o\'zgartiradi':
      'YAGO — bu odamlarning xizmatlar bilan munosabatida tub o\'zgarish. Til to\'siqlari yordam olishga xalaqit bermaydigan dunyoni tasavvur qiling. Keksalar raqamli xizmatlardan chetda qolmaydigan dunyoni. Band ota-ona oilaning barcha ishlarini ovoz bilan boshqaradigan dunyoni. Biz faqat vaqtni tejamayapmiz — stressni kamaytiryapmiz, imkoniyatlarni oshiryapmiz va samaradorlikni demokratlashtiryapmiz.',

    'sizning tasavvuringiz nima':
      'Bizning tasavvurimiz ulug\'vor: shaxsiy yordamni imtiyoz emas, universal huquq qilish. 5 yil ichida YAGO\'dan yordam so\'rash chiroqni yoqishdek tabiiy bo\'lishi kerak. Biz YAGO kundalik ishlarni hal qiladigan, odamlar esa muhim narsalarga — ijodkorlik, munosabatlar, rivojlanishga e\'tibor qaratadigan kelajakni ko\'ramiz.',

    'nega o\'zbekiston':
      'O\'zbekiston mukammal boshlang\'ich nuqta. Innovatsiyaga chanqoq yosh, texnik bilimdon aholi. Birlashtirishga tayyor tarqoq xizmatlar bilan o\'sib borayotgan iqtisodiyot. Markaziy Osiyoning chorrahasidagi strategik joylashuv. Biz dunyoni o\'zgartiruvchi texnologiya istalgan joydan paydo bo\'lishi mumkinligini isbotlamoqdamiz.',
  },
};

// Default responses per language
const DEFAULT_RESPONSES: Record<Language, string> = {
  en: 'Great question! YAGO is revolutionizing how humans interact with services — imagine having a genius assistant who handles EVERYTHING from booking doctors to ordering groceries, just by talking naturally. Want to know more? Ask about our vision for changing society, how our AI learns YOUR patterns, or why we believe personal assistance should be a universal right, not a luxury!',
  ru: 'Отличный вопрос! YAGO революционизирует взаимодействие людей с услугами — представьте гениального помощника, который решает ВСЁ: от записи к врачу до заказа продуктов, просто через естественный разговор. Хотите узнать больше? Спросите о нашем видении изменения общества, как наш AI изучает ВАШИ привычки, или почему мы верим, что персональная помощь должна быть правом каждого!',
  uz: 'Ajoyib savol! YAGO odamlarning xizmatlar bilan munosabatini inqilob qilmoqda — shifokorga yozilishdan oziq-ovqat buyurtmasigacha HAMMA narsani tabiiy suhbat orqali hal qiladigan daho yordamchini tasavvur qiling. Ko\'proq bilmoqchimisiz? Jamiyatni o\'zgartirish haqidagi tasavvurimiz, AI SIZNING odatlaringizni qanday o\'rganishi yoki shaxsiy yordam hashamat emas, balki har kimning huquqi bo\'lishi kerak deb ishonishimiz haqida so\'rang!',
};

// =============================================================================
// HELPER FUNCTIONS
// =============================================================================

function normalizeQuestion(question: string): string {
  return question
    .toLowerCase()
    .replace(/[?!.,]/g, '')
    .trim();
}

function findAnswer(question: string, language: Language): string {
  const normalized = normalizeQuestion(question);
  const answers = PREDEFINED_ANSWERS[language];

  // Direct match
  if (answers[normalized]) {
    return answers[normalized];
  }

  // Fuzzy match - find the BEST match, not just first 50%+ match
  let bestMatch: { key: string; answer: string; ratio: number } | null = null;

  for (const [key, answer] of Object.entries(answers)) {
    const keyWords = key.split(' ');
    const matchCount = keyWords.filter(word => normalized.includes(word)).length;
    const matchRatio = matchCount / keyWords.length;

    if (matchRatio >= 0.5 && (!bestMatch || matchRatio > bestMatch.ratio)) {
      bestMatch = { key, answer, ratio: matchRatio };
    }
  }

  if (bestMatch) {
    return bestMatch.answer;
  }

  // Try English as fallback for non-English questions that might be in English
  if (language !== 'en') {
    const enAnswers = PREDEFINED_ANSWERS['en'];
    let bestEnMatch: { key: string; answer: string; ratio: number } | null = null;

    for (const [key, answer] of Object.entries(enAnswers)) {
      const keyWords = key.split(' ');
      const matchCount = keyWords.filter(word => normalized.includes(word)).length;
      const matchRatio = matchCount / keyWords.length;

      if (matchRatio >= 0.5 && (!bestEnMatch || matchRatio > bestEnMatch.ratio)) {
        bestEnMatch = { key, answer, ratio: matchRatio };
      }
    }

    if (bestEnMatch) {
      // Return the answer in the requested language if available
      const keyIndex = Object.keys(enAnswers).indexOf(bestEnMatch.key);
      const translatedKey = Object.keys(answers)[keyIndex];
      if (translatedKey && answers[translatedKey]) {
        return answers[translatedKey];
      }
      return bestEnMatch.answer;
    }
  }

  // Default response in the requested language
  return DEFAULT_RESPONSES[language];
}

// =============================================================================
// API HANDLER
// =============================================================================

export async function POST(request: NextRequest) {
  try {
    const body: ChatbotRequest = await request.json();
    const { question, language = 'en' } = body;

    if (!question || typeof question !== 'string') {
      return NextResponse.json(
        { error: 'Question is required and must be a string' },
        { status: 400 }
      );
    }

    // Validate language
    const validLanguage: Language = ['en', 'ru', 'uz'].includes(language) ? language : 'en';

    const answer = findAnswer(question, validLanguage);

    const response: ChatbotResponse = { answer };

    return NextResponse.json(response);
  } catch (error) {
    console.error('Chatbot API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// =============================================================================
// GET handler for testing
// =============================================================================

export async function GET() {
  return NextResponse.json({
    message: 'YAGO Chatbot API',
    usage: 'POST /api/chatbot with { "question": "your question", "language": "en|ru|uz" }',
    examples: {
      en: ['What does your project do?', 'Who is this product for?', 'How does YAGO use AI?'],
      ru: ['Что делает ваш проект?', 'Для кого этот продукт?', 'Как YAGO использует ИИ?'],
      uz: ['Loyihangiz nima qiladi?', 'Bu mahsulot kim uchun?', 'YAGO qanday AI ishlatadi?'],
    },
  });
}
