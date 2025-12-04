'use client';

import { useState, useRef, useEffect, createContext, useContext } from 'react';
import { translations, Language, languageNames, languageFlags } from './translations';

// =============================================================================
// LANGUAGE CONTEXT
// =============================================================================

const LanguageContext = createContext<{
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof translations.en;
}>({
  lang: 'en',
  setLang: () => {},
  t: translations.en,
});

function useTranslation() {
  return useContext(LanguageContext);
}

// =============================================================================
// TYPES
// =============================================================================

interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface ApiResponse {
  answer: string;
}

// =============================================================================
// CONFIGURATION
// =============================================================================

const CONFIG = {
  DEMO_VIDEO_ID: 'YOUR_YOUTUBE_VIDEO_ID',
  LIVE_APP_URL: 'https://yago-ios.ngrok-free.dev',
  BACKEND_URL: 'https://backendyago.ngrok.app',
  TEST_CREDENTIALS: {
    enabled: false,
    email: 'demo@tryyago.com',
    password: 'demo123',
  },
};

// =============================================================================
// DEMO PAGE COMPONENT
// =============================================================================

export default function DemoPage() {
  const [lang, setLang] = useState<Language>('en');
  const t = translations[lang];

  // Persist language choice
  useEffect(() => {
    const saved = localStorage.getItem('yago-demo-lang') as Language;
    if (saved && ['en', 'ru', 'uz'].includes(saved)) {
      setLang(saved);
    }
  }, []);

  const handleSetLang = (newLang: Language) => {
    setLang(newLang);
    localStorage.setItem('yago-demo-lang', newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang: handleSetLang, t }}>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        <main className="pt-20 pb-24">
          <HeroSection />
          <VideoSection />
          <DescriptionSection />
          <LiveDemoSection />
          <ChatbotSection />
          <ApiPlaygroundSection />
        </main>
        <Footer />
      </div>
    </LanguageContext.Provider>
  );
}

// =============================================================================
// LANGUAGE SELECTOR
// =============================================================================

function LanguageSelector() {
  const { lang, setLang } = useTranslation();
  const languages: Language[] = ['en', 'ru', 'uz'];

  return (
    <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full p-1 border border-white/10">
      {languages.map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`relative px-3 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
            lang === l
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/30'
              : 'text-white/60 hover:text-white hover:bg-white/10'
          }`}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

// =============================================================================
// HEADER COMPONENT
// =============================================================================

function Header() {
  const { t } = useTranslation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="/" className="flex items-center gap-3">
            <img src="/logo.png" alt="YAGO" className="h-10 w-auto" />
          </a>
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex px-3 py-1 bg-amber-500/20 text-amber-400 text-sm font-medium rounded-full border border-amber-500/30">
              {t.badge}
            </span>
            <LanguageSelector />
            <a
              href="/"
              className="text-white/70 hover:text-white transition-colors text-sm hidden sm:inline"
            >
              {t.backToHome}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

// =============================================================================
// HERO SECTION
// =============================================================================

function HeroSection() {
  const { t } = useTranslation();

  const features = [
    t.heroFeature1,
    t.heroFeature2,
    t.heroFeature3,
    t.heroFeature4,
    t.heroFeature5,
    t.heroFeature6,
  ];

  return (
    <section className="px-4 py-16 text-center">
      <div className="max-w-5xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 rounded-full border border-purple-500/30 mb-6">
          <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
          <span className="text-purple-300 text-sm font-medium">{t.liveDemoBadge}</span>
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
          {t.heroTitle} <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">{t.heroTitleHighlight}</span>
        </h1>

        <p className="text-xl sm:text-2xl text-white/70 mb-6 max-w-2xl mx-auto">
          {t.heroSubtitle}
        </p>

        <p className="text-2xl sm:text-3xl font-semibold text-white mb-10 max-w-3xl mx-auto">
          {t.heroPitch}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto text-left mb-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="px-5 py-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 hover:border-purple-500/50 hover:scale-[1.02] transition-all duration-300"
            >
              <p className="text-white/90 text-sm leading-relaxed">{feature}</p>
            </div>
          ))}
        </div>

        <p className="text-purple-300 font-medium text-lg">
          {t.heroTagline}
        </p>
      </div>
    </section>
  );
}

// =============================================================================
// VIDEO SECTION
// =============================================================================

function VideoSection() {
  const { t } = useTranslation();
  const [videoError, setVideoError] = useState(false);

  return (
    <section id="video" className="px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.videoTitle}</h2>
          <p className="text-white/60">{t.videoSubtitle}</p>
        </div>

        <div className="relative aspect-video bg-slate-800 rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/10 border border-white/10">
          {CONFIG.DEMO_VIDEO_ID && CONFIG.DEMO_VIDEO_ID !== 'YOUR_YOUTUBE_VIDEO_ID' && !videoError ? (
            <iframe
              src={`https://www.youtube.com/embed/${CONFIG.DEMO_VIDEO_ID}?rel=0&modestbranding=1`}
              className="absolute inset-0 w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YAGO Demo Video"
              onError={() => setVideoError(true)}
            />
          ) : (
            <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
              <div className="w-20 h-20 mb-6 rounded-full bg-purple-500/20 flex items-center justify-center">
                <svg className="w-10 h-10 text-purple-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </div>
              <h3 className="text-white font-semibold text-xl mb-2">{t.videoComingSoon}</h3>
              <p className="text-white/60 text-center max-w-md">{t.videoComingSoonDesc}</p>
            </div>
          )}
        </div>

        <p className="text-center text-white/40 text-sm mt-4">{t.videoDuration}</p>
      </div>
    </section>
  );
}

// =============================================================================
// DESCRIPTION SECTION
// =============================================================================

function DescriptionSection() {
  const { t } = useTranslation();

  return (
    <section id="description" className="px-4 py-16 bg-black/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.descriptionTitle}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">{t.descriptionSubtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {/* What's Being Shown - YAGO's Superpowers */}
          <DescriptionCard title={t.whatShownTitle} icon={<EyeIcon />}>
            <ul className="space-y-4 text-white/80">
              <li className="text-sm leading-relaxed">{t.whatShown1}</li>
              <li className="text-sm leading-relaxed">{t.whatShown2}</li>
              <li className="text-sm leading-relaxed">{t.whatShown3}</li>
              <li className="text-sm leading-relaxed">{t.whatShown4}</li>
              <li className="text-sm leading-relaxed">{t.whatShown5}</li>
              <li className="text-sm leading-relaxed">{t.whatShown6}</li>
            </ul>
          </DescriptionCard>

          {/* Problem & Solution */}
          <DescriptionCard title={t.problemSolutionTitle} icon={<LightbulbIcon />}>
            <div className="space-y-4 text-white/80">
              <div className="p-4 bg-red-500/10 rounded-xl border border-red-500/20">
                <p className="text-red-400 font-semibold mb-2 text-base">{t.problemLabel}</p>
                <p className="text-sm leading-relaxed">{t.problemText}</p>
              </div>
              <div className="p-4 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
                <p className="text-emerald-400 font-semibold mb-2 text-base">{t.solutionLabel}</p>
                <p className="text-sm leading-relaxed">{t.solutionText}</p>
              </div>
            </div>
          </DescriptionCard>

          {/* Tech Stack */}
          <DescriptionCard title={t.techStackTitle} icon={<CodeIcon />}>
            <div className="space-y-3">
              <TechItem label={t.techFrontend} value={t.techFrontendValue} />
              <TechItem label={t.techMobile} value={t.techMobileValue} />
              <TechItem label={t.techBackend} value={t.techBackendValue} />
              <TechItem label={t.techAI} value={t.techAIValue} />
              <TechItem label={t.techDatabase} value={t.techDatabaseValue} />
              <TechItem label={t.techIntegrations} value={t.techIntegrationsValue} />
              <TechItem label={t.techInfra} value={t.techInfraValue} />
            </div>
          </DescriptionCard>

          {/* Roadmap */}
          <DescriptionCard title={t.roadmapTitle} icon={<RocketIcon />}>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-white/60">{t.currentStage}</span>
                <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
                  {t.stageMVP}
                </span>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between text-xs text-white/40">
                  <span>{t.stageIdea}</span>
                  <span>{t.stagePrototype}</span>
                  <span>{t.stageMVP}</span>
                  <span>{t.stageLaunched}</span>
                </div>
                <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-3/4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full" />
                </div>
              </div>

              <div className="space-y-2 text-white/70 text-sm">
                <p className="text-white font-medium">{t.nextStepsTitle}</p>
                <ul className="space-y-1">
                  <li>• {t.nextStep1}</li>
                  <li>• {t.nextStep2}</li>
                  <li>• {t.nextStep3}</li>
                  <li>• {t.nextStep4}</li>
                </ul>
              </div>
            </div>
          </DescriptionCard>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// LIVE DEMO SECTION
// =============================================================================

function LiveDemoSection() {
  const { t } = useTranslation();
  const [isLoading, setIsLoading] = useState(true);
  const [isFocusMode, setIsFocusMode] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const iframeUrl = `${CONFIG.LIVE_APP_URL}?ngrok-skip-browser-warning=true`;

  const handleIframeLoad = () => setIsLoading(false);

  // Lock body scroll when focus mode is active
  useEffect(() => {
    if (isFocusMode) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isFocusMode]);

  return (
    <section id="live-demo" className="px-4 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Important Notice - Above Title */}
        <div className="max-w-3xl mx-auto mb-8">
          <div className="bg-amber-500/10 backdrop-blur-sm rounded-2xl p-5 border border-amber-500/20">
            <h3 className="text-amber-400 font-semibold mb-3 flex items-center gap-2">
              <span className="text-xl">💡</span> {t.tipsTitle}
            </h3>
            <ul className="space-y-2 text-white/70 text-sm mb-4">
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span>{t.tip1}</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span>{t.tip2}</li>
              <li className="flex items-start gap-2"><span className="text-amber-400">•</span>{t.tip3}</li>
            </ul>
            <div className="pt-3 border-t border-amber-500/20">
              <p className="text-amber-300/80 text-sm">
                <span className="font-semibold">⚠️ {t.demoNoticeTitle}:</span> {t.demoNoticeText}
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-3">{t.liveDemoTitle}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">{t.liveDemoSubtitle}</p>
        </div>

        <div className="flex flex-col lg:flex-row items-start justify-center gap-10">
          {/* Phone Frame with Presenter Image */}
          <div className="relative flex-shrink-0 mx-auto lg:mx-0 flex items-end">
            {/* Presenter Image - Left of Phone */}
            <div className="hidden lg:block relative mr-8 z-0 mb-4">
              <img
                src="/images/demop.png"
                alt="Presenter"
                className="h-[550px] w-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Phone Frame */}
            <div className="relative">
            <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl shadow-purple-500/20">
              <div className="relative bg-black rounded-[2.5rem] overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-black rounded-b-2xl z-20" />
                <div className="relative w-[320px] h-[640px] sm:w-[360px] sm:h-[720px] lg:w-[380px] lg:h-[760px] bg-slate-900 overflow-hidden">
                  {isLoading && (
                    <div className="absolute inset-0 flex items-center justify-center bg-slate-900 z-10">
                      <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500 mb-4 mx-auto" />
                        <p className="text-white/60 text-sm">{t.loadingApp}</p>
                      </div>
                    </div>
                  )}
                  <iframe
                    ref={iframeRef}
                    src={iframeUrl}
                    className="w-full h-full border-0"
                    allow="microphone; camera; clipboard-write"
                    title="YAGO Live Demo"
                    onLoad={handleIframeLoad}
                  />
                </div>
              </div>
            </div>
            <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/20 rounded-full blur-3xl" />

            {/* Focus Mode Button - Mobile Only */}
            <button
              onClick={() => setIsFocusMode(true)}
              className="lg:hidden mt-4 w-full flex items-center justify-center gap-2 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-xl transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
              </svg>
              {t.focusModeButton || 'Focus Mode - Test Without Distractions'}
            </button>
            </div>
          </div>

          {/* Focus Mode Overlay */}
          {isFocusMode && (
            <div className="fixed inset-0 z-50 bg-black flex flex-col items-center justify-center p-4">
              {/* Close Button */}
              <button
                onClick={() => setIsFocusMode(false)}
                className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
                {t.exitFocusMode || 'Exit Focus Mode'}
              </button>

              {/* Fullscreen Phone Frame */}
              <div className="relative bg-black rounded-[2rem] p-2 shadow-2xl max-h-[90vh]">
                <div className="relative bg-black rounded-[1.5rem] overflow-hidden">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-5 bg-black rounded-b-xl z-20" />
                  <div className="relative w-[90vw] max-w-[400px] h-[80vh] max-h-[800px] bg-slate-900 overflow-hidden">
                    <iframe
                      src={iframeUrl}
                      className="w-full h-full border-0"
                      allow="microphone; camera; clipboard-write"
                      title="YAGO Live Demo - Focus Mode"
                    />
                  </div>
                </div>
              </div>

              <p className="mt-4 text-white/50 text-sm text-center">
                {t.focusModeHint || 'Scroll and interact with the app freely. Tap "Exit Focus Mode" when done.'}
              </p>
            </div>
          )}

          {/* Instructions Panel - Right Side */}
          <div className="flex-1 max-w-xl space-y-5">
            {/* Quick Start Guide */}
            <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm rounded-2xl p-6 border border-purple-500/20">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">🚀</span> {t.quickStartTitle}
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 text-white text-sm font-bold flex items-center justify-center">1</span>
                  <p className="text-white/80 text-sm pt-1">{t.quickStartStep1}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 text-white text-sm font-bold flex items-center justify-center">2</span>
                  <p className="text-white/80 text-sm pt-1">{t.quickStartStep2}</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="flex-shrink-0 w-7 h-7 rounded-full bg-purple-500 text-white text-sm font-bold flex items-center justify-center">3</span>
                  <p className="text-white/80 text-sm pt-1">{t.quickStartStep3}</p>
                </div>
              </div>
            </div>

            {/* Demo Access */}
            <div className="bg-emerald-500/10 backdrop-blur-sm rounded-2xl p-5 border border-emerald-500/20">
              <h3 className="text-emerald-400 font-semibold mb-3 flex items-center gap-2">
                <span className="text-xl">✅</span> {t.demoCredentialsTitle}
              </h3>
              <div className="flex flex-col sm:flex-row gap-2">
                <CopyButton label="Email" value="ai500@demo.com" />
                <CopyButton label={t.passwordLabel || 'Password'} value="password123" />
              </div>
              <p className="text-white/50 text-xs mt-3 italic">{t.demoNote}</p>
            </div>

            {/* Try These Commands */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
                <span className="text-2xl">💬</span> {t.tryTheseCommands}
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-purple-400 font-bold">→</span>
                  <span className="text-white/80 text-sm">{t.command1}</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-purple-400 font-bold">→</span>
                  <span className="text-white/80 text-sm">{t.command2}</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-purple-400 font-bold">→</span>
                  <span className="text-white/80 text-sm">{t.command3}</span>
                </li>
                <li className="flex items-start gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors cursor-pointer">
                  <span className="text-purple-400 font-bold">→</span>
                  <span className="text-white/80 text-sm">{t.command4}</span>
                </li>
              </ul>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={CONFIG.LIVE_APP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-xl transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                {t.openInNewTab}
              </a>
            </div>

            {/* Powered By */}
            <p className="text-center text-white/40 text-xs">{t.poweredBy}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// API PLAYGROUND SECTION - AI500 Competition Requirement
// =============================================================================

function ApiPlaygroundSection() {
  const { t, lang } = useTranslation();
  const [question, setQuestion] = useState('How does your project use AI?');
  const [response, setResponse] = useState<{
    answer: string;
    confidence: number;
    intent: string;
    entities: string[];
    processing_time_ms: number;
    model: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const exampleQuestions = [
    'How does your project use AI?',
    'What problem does YAGO solve?',
    'Tell me about your tech stack',
    'Book a table for 2 at an Italian restaurant',
  ];

  const sendRequest = async () => {
    if (!question.trim() || isLoading) return;

    setIsLoading(true);
    setError(null);
    setResponse(null);

    try {
      const res = await fetch('/api/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question, language: lang }),
      });

      if (!res.ok) {
        throw new Error(`HTTP ${res.status}`);
      }

      const data = await res.json();
      setResponse(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Request failed');
    } finally {
      setIsLoading(false);
    }
  };

  const requestJson = JSON.stringify({ question }, null, 2);
  const responseJson = response
    ? JSON.stringify({ answer: response.answer }, null, 2)
    : null;

  return (
    <section id="api-playground" className="px-4 py-16">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/20 rounded-full border border-emerald-500/30 mb-4">
            <span className="text-emerald-400 text-xs font-medium">{t.apiAccessBadge || 'API Access'}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.apiPlaygroundTitle || 'AI-Powered API'}</h2>
          <p className="text-white/60 max-w-2xl mx-auto">{t.apiPlaygroundSubtitle || 'Demonstrate how YAGO interacts with AI endpoints'}</p>
        </div>

        {/* API Endpoint Info */}
        <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 p-4 mb-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="px-2 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-mono rounded">POST</span>
            <code className="text-white/90 font-mono text-sm">/api/ask</code>
          </div>
          <p className="text-white/50 text-sm">{t.apiEndpointDesc || 'AI-powered endpoint for natural language question answering'}</p>
        </div>

        {/* Main Playground */}
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Request Panel */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-white font-medium text-sm">{t.apiRequestLabel || 'REQUEST'}</span>
              </div>
              <span className="text-white/40 text-xs font-mono">application/json</span>
            </div>

            <div className="p-4">
              {/* Question Input */}
              <div className="mb-4">
                <label className="block text-white/60 text-xs mb-2">{t.apiQuestionLabel || 'Question'}</label>
                <input
                  type="text"
                  value={question}
                  onChange={(e) => setQuestion(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && sendRequest()}
                  className="w-full px-3 py-2 bg-black/30 border border-white/10 rounded-lg text-white text-sm font-mono focus:outline-none focus:border-emerald-500"
                  placeholder="Enter your question..."
                />
              </div>

              {/* Example Questions */}
              <div className="mb-4">
                <label className="block text-white/60 text-xs mb-2">{t.apiExamplesLabel || 'Try these examples'}</label>
                <div className="flex flex-wrap gap-2">
                  {exampleQuestions.map((q) => (
                    <button
                      key={q}
                      onClick={() => setQuestion(q)}
                      className="px-2 py-1 text-xs bg-white/5 hover:bg-white/10 text-white/70 rounded border border-white/10 transition-colors"
                    >
                      {q.length > 30 ? q.slice(0, 30) + '...' : q}
                    </button>
                  ))}
                </div>
              </div>

              {/* Request JSON Preview */}
              <div className="bg-black/40 rounded-lg p-3 font-mono text-sm">
                <pre className="text-emerald-400 whitespace-pre-wrap">{requestJson}</pre>
              </div>

              {/* Send Button */}
              <button
                onClick={sendRequest}
                disabled={isLoading || !question.trim()}
                className="w-full mt-4 px-4 py-3 bg-emerald-600 hover:bg-emerald-500 disabled:bg-emerald-600/50 disabled:cursor-not-allowed text-white font-medium rounded-lg transition-colors flex items-center justify-center gap-2"
              >
                {isLoading ? (
                  <>
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    {t.apiSending || 'Sending...'}
                  </>
                ) : (
                  <>
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    {t.apiSendRequest || 'Send Request'}
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Response Panel */}
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
            <div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${response ? 'bg-emerald-500' : error ? 'bg-red-500' : 'bg-white/30'}`}></div>
                <span className="text-white font-medium text-sm">{t.apiResponseLabel || 'RESPONSE'}</span>
              </div>
              {response && (
                <span className="text-emerald-400 text-xs font-mono">{response.processing_time_ms}ms</span>
              )}
            </div>

            <div className="p-4">
              {/* Response Content */}
              <div className="bg-black/40 rounded-lg p-3 font-mono text-sm min-h-[200px]">
                {isLoading ? (
                  <div className="flex items-center justify-center h-[180px]">
                    <div className="flex flex-col items-center gap-3">
                      <svg className="w-8 h-8 text-emerald-400 animate-spin" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      <span className="text-white/50 text-sm">{t.apiProcessing || 'Processing with AI...'}</span>
                    </div>
                  </div>
                ) : error ? (
                  <div className="text-red-400">
                    <pre className="whitespace-pre-wrap">{JSON.stringify({ error }, null, 2)}</pre>
                  </div>
                ) : responseJson ? (
                  <pre className="text-emerald-400 whitespace-pre-wrap">{responseJson}</pre>
                ) : (
                  <div className="flex items-center justify-center h-[180px]">
                    <span className="text-white/30 text-sm">{t.apiWaiting || 'Send a request to see the response'}</span>
                  </div>
                )}
              </div>

              {/* Response Details */}
              {response && (
                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="bg-black/20 rounded-lg p-3">
                    <span className="text-white/40 text-xs block mb-1">{t.apiIntentLabel || 'Intent'}</span>
                    <span className="text-purple-400 font-mono text-sm">{response.intent}</span>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <span className="text-white/40 text-xs block mb-1">{t.apiConfidenceLabel || 'Confidence'}</span>
                    <span className="text-emerald-400 font-mono text-sm">{(response.confidence * 100).toFixed(1)}%</span>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <span className="text-white/40 text-xs block mb-1">{t.apiModelLabel || 'Model'}</span>
                    <span className="text-blue-400 font-mono text-xs">{response.model}</span>
                  </div>
                  <div className="bg-black/20 rounded-lg p-3">
                    <span className="text-white/40 text-xs block mb-1">{t.apiEntitiesLabel || 'Entities'}</span>
                    <span className="text-amber-400 font-mono text-xs">{response.entities.length} found</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* API Documentation Note */}
        <div className="mt-6 text-center">
          <p className="text-white/40 text-sm">
            {t.apiDocNote || 'This API demonstrates YAGO\'s AI intent classification, entity extraction, and natural language understanding capabilities.'}
          </p>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// CHATBOT SECTION
// =============================================================================

function ChatbotSection() {
  const { t, lang } = useTranslation();
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const hasInteracted = useRef(false);

  // Reset greeting when language changes
  useEffect(() => {
    setMessages([{
      id: '1',
      role: 'assistant',
      content: t.chatbotGreeting,
      timestamp: new Date(),
    }]);
  }, [lang, t.chatbotGreeting]);

  // Only scroll within chat container after user interaction
  useEffect(() => {
    if (hasInteracted.current && chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    hasInteracted.current = true;

    const userMessage: ChatMessage = {
      id: Date.now().toString(),
      role: 'user',
      content: input.trim(),
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: userMessage.content, language: lang }),
      });
      const data = await response.json();
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: data.answer || t.chatbotErrorDefault,
        timestamp: new Date(),
      }]);
    } catch {
      setMessages((prev) => [...prev, {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: t.chatbotErrorNetwork,
        timestamp: new Date(),
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const suggestedQuestions = [t.suggestedQ1, t.suggestedQ2, t.suggestedQ3, t.suggestedQ4];

  return (
    <section id="chatbot" className="px-4 py-16 bg-black/20">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-500/20 rounded-full border border-amber-500/30 mb-4">
            <span className="text-amber-400 text-xs font-medium">{t.bonusFeature}</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">{t.chatbotTitle}</h2>
          <p className="text-white/60">{t.chatbotSubtitle}</p>
        </div>

        <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden">
          <div ref={chatContainerRef} className="h-80 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] px-4 py-2 rounded-2xl ${message.role === 'user' ? 'bg-purple-600 text-white' : 'bg-white/10 text-white/90'}`}>
                  {message.content}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white/10 px-4 py-2 rounded-2xl">
                  <div className="flex gap-1">
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                    <div className="w-2 h-2 bg-white/50 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="px-4 py-3 border-t border-white/10">
            <div className="flex flex-wrap gap-2">
              {suggestedQuestions.map((question) => (
                <button
                  key={question}
                  onClick={() => setInput(question)}
                  className="px-3 py-1 text-xs bg-white/5 hover:bg-white/10 text-white/70 rounded-full border border-white/10 transition-colors"
                >
                  {question}
                </button>
              ))}
            </div>
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder={t.chatbotPlaceholder}
                className="flex-1 px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-purple-500"
              />
              <button
                onClick={sendMessage}
                disabled={isLoading || !input.trim()}
                className="px-6 py-3 bg-purple-600 hover:bg-purple-500 disabled:bg-purple-600/50 disabled:cursor-not-allowed text-white font-medium rounded-xl transition-colors"
              >
                {t.chatbotSend}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// =============================================================================
// FOOTER
// =============================================================================

function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-black/30 backdrop-blur-xl border-t border-white/10 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="YAGO" className="h-6 w-auto" />
            <span className="text-white/60 text-sm">{t.footerCompetition}</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-white/40">
            <span>{t.footerRights}</span>
            <a href="mailto:hello@tryyago.com" className="hover:text-white transition-colors">hello@tryyago.com</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

// =============================================================================
// HELPER COMPONENTS
// =============================================================================

function CopyButton({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex-1 flex items-center justify-between gap-2 px-3 py-2 bg-white/10 hover:bg-white/20 rounded-lg border border-white/10 transition-all group"
    >
      <div className="flex flex-col items-start">
        <span className="text-white/50 text-xs">{label}</span>
        <span className="text-white font-mono text-sm">{value}</span>
      </div>
      <div className={`flex items-center justify-center w-8 h-8 rounded-md transition-all ${copied ? 'bg-emerald-500/20' : 'bg-white/5 group-hover:bg-white/10'}`}>
        {copied ? (
          <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-4 h-4 text-white/60 group-hover:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
          </svg>
        )}
      </div>
    </button>
  );
}

function DescriptionCard({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 h-full flex flex-col">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center text-purple-400">{icon}</div>
        <h3 className="text-white font-semibold text-lg">{title}</h3>
      </div>
      <div className="flex-1 flex flex-col justify-center">
        {children}
      </div>
    </div>
  );
}

function TechItem({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2">
      <span className="text-purple-400 font-medium text-sm min-w-[100px]">{label}:</span>
      <span className="text-white/70 text-sm">{value}</span>
    </div>
  );
}

function CheckIcon() {
  return <svg className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>;
}

function EyeIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
}

function LightbulbIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>;
}

function CodeIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>;
}

function RocketIcon() {
  return <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>;
}
