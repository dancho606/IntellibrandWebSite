import { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Menu, X, ArrowRight, Zap, ArrowLeft } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from './assets/logo.png';
import About from './about';
import WebDesign from './pages/WebDesign'; // 新增的網站建置專頁
import ContactForm from './components/ContactForm';
import PricingPlans from './components/PricingPlans';
import { services } from './data/services'; // Imported Data Layer
import { BottomNav } from './components/BottomNav'; // Imported Bottom Nav
import { siteConfig, navItems } from './data/config'; // Imported Config
//import heroBgImage from './assets/hero-ai.png'; //換影片
import ServiceVideo from './components/ServiceVideo';

// ========================================== 
//   區域一：6 個獨立的服務詳情頁 (您可以分別編輯這裡)
// ==========================================



// 3. AI 數位替身 - 展示組件
function ServiceAvatar() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><a href="#home" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</a></div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6 font-display">AI 數位替身</h1>
        <p className="text-xl text-slate-600 mb-8">打造企業專屬的 24 小時虛擬發言人。</p>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <p>（數位替身 Demo 區塊）</p>
        </div>
      </div>
    </div>
  );
}

// 4. 自媒體代操 - 展示組件
function ServiceSocial() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><a href="#home" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</a></div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">自媒體代操</h1>
        <p className="text-xl text-slate-600">IG, TikTok, YouTube 全平台運營。</p>
      </div>
    </div>
  );
}

// 5. AI 企業導入 - 展示組件
function ServiceEnterprise() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><a href="#home" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</a></div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">AI 企業導入</h1>
        <p className="text-xl text-slate-600">建置私有化 LLM 知識庫，優化內部流程。</p>
      </div>
    </div>
  );
}

// 6. AI 實戰課程 - 展示組件
function ServiceCourse() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><a href="#home" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</a></div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">AI 實戰課程</h1>
        <p className="text-xl text-slate-600">企業內訓與個人進修。</p>
      </div>
    </div>
  );
}


// ==========================================
//   區域二：首頁元件 (完整保留 Hero, Bento Grid, CTA)
// ==========================================
function Home() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      {/* ContactForm 彈出視窗 */}
      {showContactForm && (
        <ContactForm
          onClose={() => setShowContactForm(false)}
          scriptUrl={siteConfig.contact.formScriptUrl}
        />
      )}

      {/* 2. Hero Section (Full Background Video Theme) */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-32 pb-24 md:pt-40 md:pb-32 px-4 z-10 overflow-hidden">
        {/* Full Background Video */}
        <div className="absolute inset-0 w-full h-full -z-20 bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover opacity-70 md:opacity-80"
          >
            <source src="/videos/hero-desktop.mp4" type="video/mp4" />
          </video>
        </div>

        {/* Dynamic Dark Gradient Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/40 to-slate-900/90 -z-10"></div>

        <div className="max-w-5xl mx-auto flex flex-col items-center relative z-10 w-full mt-8 md:mt-12">

          {/* A. Top Logo Badge */}
          <div className="flex flex-col items-center mb-8 md:mb-12 animate-fade-in-up">
            <div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center border border-white/20 overflow-hidden mb-4 shadow-2xl">
              <img src={logo} alt="Logo" className="w-full h-full object-contain scale-125" />
            </div>
            <div className="text-center">
              <div className="text-white font-bold text-xl md:text-2xl tracking-tighter leading-none">智賦 AI</div>
              <div className="text-cyan-400 text-xs md:text-sm uppercase font-bold tracking-widest leading-none mt-2">IntelliBrand AI</div>
            </div>
          </div>

          {/* B. Main Title Section */}
          <div className="flex flex-col items-center text-center space-y-8 mb-16 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="h-px w-12 bg-cyan-400/50"></div>
                <div className="text-cyan-400 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase drop-shadow-lg">Visionary Media Solutions</div>
                <div className="h-px w-12 bg-cyan-400/50"></div>
              </div>

              <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.1] drop-shadow-2xl">
                智賦<span className="text-cyan-400">AI</span><br className="sm:hidden" />品牌行銷公司
              </h1>

              <div className="mt-8 flex flex-col items-center">
                <div className="text-slate-300 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4 drop-shadow-md">Empowering Brands with AI Intelligence</div>
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest shadow-xl shadow-cyan-900/50 border border-white/10">
                  品牌提升 • 數位賦能 • 全案操盤
                </div>
              </div>
            </div>
          </div>

          {/* C. Bottom Quote Block */}
          <div className="w-full max-w-3xl glass-strong bg-slate-900/40 border border-white/10 rounded-3xl p-6 md:p-10 shadow-2xl relative group hover:bg-slate-900/60 transition-colors animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-slate-200 text-base md:text-lg leading-relaxed italic font-medium text-center drop-shadow-md">
              「結合<span className="text-cyan-400 font-bold">十年行銷實戰</span>與頂尖 AI 技術，為企業實施<span className="text-orange-400 font-bold">精準賦能</span>。我們不只提升品牌價值，更為您打造持續成長的自動化獲利引擎。」
            </p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-cyan-500 w-12 h-1 rounded-full shadow-lg shadow-cyan-500/50"></div>
          </div>

        </div>
      </section>

      {/* 3. 服務亮點 (Services) - Mobile First 優化 */}
      <section id="services" className="relative py-16 md:py-24 px-4 md:px-6 lg:px-8 z-10 bg-gradient-to-b from-white/30 to-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* 標題區 */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-slate-900">核心服務項目</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-3 md:mb-4"></div>
            <p className="mt-3 md:mt-4 text-slate-600 text-base md:text-lg font-medium px-4">全方位的 AI 賦能解決方案，精準對接商業需求</p>
          </div>

          {/* 服務卡片 - Mobile First Optimized Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8">
            {services.map((item, index) => (
              <a
                href={item.link}
                key={item.id}
                className="group relative overflow-hidden rounded-xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-slate-900 aspect-[4/3] md:h-80 block cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 1. Background Image */}
                <div className="absolute inset-0 transition-transform duration-1000 group-hover:scale-110">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* 2. Color Filter Overlay (Gradient) */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-70 group-hover:opacity-60 transition-opacity duration-500`}></div>

                {/* 3. Dark Bottom Gradient for Text Readability */}
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent opacity-90"></div>

                {/* 4. Content Area (Left-Aligned at Bottom) */}
                <div className="absolute inset-0 p-4 md:p-8 flex flex-col justify-end z-10 text-left items-start">
                  <h3 className="text-sm sm:text-lg md:text-3xl font-bold text-white font-display mb-0.5 md:mb-1 flex items-center gap-1 sm:gap-1.5 md:gap-2 drop-shadow-lg leading-tight">
                    {item.title}
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
                  </h3>
                  <p className="text-[10px] md:text-base text-white/90 font-medium leading-normal max-w-full md:max-w-[90%] drop-shadow-md line-clamp-2">
                    {item.shortDescription}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>





      {/* 8. CTA 區塊 - 強化版 */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        {/* 背景裝飾 */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full filter blur-[150px] opacity-20 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600 rounded-full filter blur-[150px] opacity-20 animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* 標題 */}
          <h2 className="font-display text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 animate-fade-in-up">
            準備好開始您的
            <span className="block mt-2 text-gradient">AI 轉型之旅了嗎？</span>
          </h2>

          {/* 副標題 */}
          <p className="text-base md:text-xl text-slate-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in-up px-4" style={{ animationDelay: '0.1s' }}>
            立即預約免費諮詢，讓我們的專業團隊為您量身打造最適合的 AI 解決方案
          </p>

          {/* CTA 按鈕組 - Mobile 單一按鈕，Desktop 雙按鈕 */}
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center animate-fade-in-up max-w-md sm:max-w-none mx-auto" style={{ animationDelay: '0.2s' }}>
            {/* 主要 CTA */}
            <button
              onClick={() => setShowContactForm(true)}
              className="group w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-slate-900 transition-all duration-300 bg-gradient-to-r from-white to-slate-100 rounded-full hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1 active:scale-95 min-h-[56px] md:min-h-0"
            >
              <Zap className="mr-2 w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-current group-hover:animate-pulse" />
              立即預約諮詢
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* 次要 CTA - 僅桌面顯示 */}
            <a href="#portfolio" className="hidden sm:inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-semibold glass-strong border border-white/30 text-white rounded-full hover:bg-white/20 transition-all duration-300 shadow-lg">
              查看成功案例
            </a>
          </div>

          {/* 信任標章 */}
          <div className="mt-12 md:mt-16 flex flex-wrap justify-center gap-6 md:gap-8 items-center opacity-60 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="text-sm md:text-base">✓ 98% 客戶滿意度</div>
            <div className="text-sm md:text-base">✓ 10x 效率提升</div>
            <div className="text-sm md:text-base">✓ 專業團隊支持</div>
          </div>
        </div>
      </section>
    </>
  );
}



// ==========================================
//   區域三：App 主程式 (路由設定中心)
// ==========================================
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentHash, setCurrentHash] = useState(window.location.hash || '#home');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);

    const handleHashChange = () => {
      const hash = window.location.hash || '#home';
      setCurrentHash(hash);

      // Handle scrolling to section if it's a sub-section of home
      const homeSections = ['#services', '#contact'];
      if (homeSections.includes(hash)) {
        setTimeout(() => {
          const element = document.getElementById(hash.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      } else {
        window.scrollTo(0, 0);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    // Initial check
    handleHashChange();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);

  const renderMainContent = () => {
    // Determine which "page" to show based on hash
    if (currentHash.startsWith('#service-website-pricing')) {
      return <PricingPlans />;
    }
    if (currentHash.startsWith('#service-video')) {
      return <ServiceVideo />;
    }
    if (currentHash === '#about') {
      return <About />;
    }
    if (currentHash === '#web-design' || currentHash === '#service-website') {
      return <WebDesign />;
    }
    if (currentHash === '#service-avatar') {
      return <ServiceAvatar />;
    }
    if (currentHash === '#service-social') {
      return <ServiceSocial />;
    }
    if (currentHash === '#service-enterprise') {
      return <ServiceEnterprise />;
    }
    if (currentHash === '#service-course') {
      return <ServiceCourse />;
    }

    // Default to Home (including sub-sections like #services)
    return <Home />;
  };

  return (
    <Router>
      <div className="bg-slate-50 text-slate-900 antialiased overflow-x-hidden font-sans">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Space+Grotesk:wght@300;500;700&display=swap');
          .text-gradient { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #7c3aed 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .font-display { font-family: 'Space Grotesk', 'Noto Sans TC', sans-serif; }
          .glass-nav { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(226, 232, 240, 0.8); }
          .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
          @keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
        `}</style>

        {/* Floating Mobile Bottom Nav */}
        <BottomNav />

        {/* 1. 導覽列 */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white/95 backdrop-blur-md' : 'glass-nav'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <a href="#home" className="flex-shrink-0 flex items-center gap-2 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#06b6d4] flex items-center justify-center shadow-lg overflow-hidden border border-white/20">
                  <img src={logo} alt="Logo" className="w-full h-full object-contain scale-110" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                  智賦AI/ <span className="text-[#06b6d4]">Intellibrand AI</span>
                </span>
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  {/* 使用 Data Config 渲染導覽列 */}
                  {navItems.filter(item => item.inTopNav && !item.isPrimary).map(item => (
                    <a key={item.path} href={item.path} className="text-sm font-medium text-slate-600 hover:text-[#2563eb] transition-colors">
                      {item.label}
                    </a>
                  ))}
                  {/* 預約按鈕 (Primary) */}
                  {navItems.find(item => item.isPrimary) && (
                    <a href={navItems.find(item => item.isPrimary)!.path} className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-[#2563eb] transition-all">
                      {navItems.find(item => item.isPrimary)!.label}
                    </a>
                  )}
                </div>
              </div>
              <div className="md:hidden">
                <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-600 p-2">
                  {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                </button>
              </div>
            </div>
          </div>
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-xl border-t border-slate-100 absolute w-full shadow-xl">
              <div className="px-4 pt-2 pb-6 space-y-1 text-center">
                {/*  Mobile Menu Items from Data */}
                {navItems.filter(item => item.inTopNav && !item.isPrimary).map(item => (
                  <a key={item.path} href={item.path} onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-600 hover:text-[#2563eb] transition-colors">
                    {item.label}
                  </a>
                ))}

                <div className="pt-2">
                  <a href="#service-website-pricing" onClick={() => setIsMobileMenuOpen(false)} className="block px-6 py-3 text-base font-semibold text-white bg-slate-900 rounded-full hover:bg-[#2563eb] transition-all">查看方案報價</a>
                </div>
              </div>
            </div>
          )}
        </nav>

        {/* --- 渲染主內容區塊 (加入 Framer Motion 過渡) --- */}
        <AnimatePresence mode="wait">
          <motion.main
            key={currentHash}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="w-full flex-grow flex flex-col"
          >
            {renderMainContent()}
          </motion.main>
        </AnimatePresence>

        {/* 頁尾 */}
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 mt-auto">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-sm">{siteConfig.copyright}</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}