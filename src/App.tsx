import { useState, useEffect } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { Menu, X, ArrowRight, Zap, ArrowLeft, Volume2, VolumeX } from 'lucide-react';
import logo from './assets/logo.png';
import About from './about';
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
  const [isMuted, setIsMuted] = useState(true);

  return (
    <>
      {/* ContactForm 彈出視窗 */}
      {showContactForm && (
        <ContactForm
          onClose={() => setShowContactForm(false)}
          scriptUrl={siteConfig.contact.formScriptUrl}
        />
      )}

      {/* 2. Hero Section (Portfolio Module Style - Bright) */}
      <section className="relative pt-32 pb-24 px-4 z-10 overflow-hidden bg-slate-50">
        {/* Modern Background Accents */}
        <div className="absolute right-[-10%] top-[10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px] -z-10"></div>
        <div className="absolute left-[-10%] bottom-[10%] w-[500px] h-[500px] bg-cyan-100/50 rounded-full blur-[100px] -z-10"></div>

        <div className="max-w-5xl mx-auto flex flex-col items-center">

          {/* A. Top Video Player Module */}
          <div className="w-full aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-2xl relative mb-16 group border-4 border-white isolate transform-gpu">
            <video
              autoPlay
              loop
              muted={isMuted}
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            >
              <source src="/videos/hero-desktop.mp4" type="video/mp4" />
            </video>
            {/* Overlay Elements inside video */}
            <div className="absolute inset-0 bg-black/10"></div>

            {/* Mute/Unmute Button (Bottom Left) - Optimized for touch */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setIsMuted(!isMuted);
              }}
              className="absolute bottom-6 left-6 md:bottom-10 md:left-10 w-12 h-12 md:w-14 md:h-14 bg-black/40 backdrop-blur-md rounded-full flex items-center justify-center border border-white/30 text-white hover:bg-black/60 transition-all z-20 active:scale-90 shadow-xl"
              title={isMuted ? "取消靜音" : "靜音"}
            >
              {isMuted ? <VolumeX className="w-6 h-6 md:w-7 md:h-7" /> : <Volume2 className="w-6 h-6 md:w-7 md:h-7" />}
            </button>
            <div className="absolute top-6 left-6 md:top-10 md:left-10 flex flex-col items-start">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-12 h-12 md:w-16 md:h-16 bg-white/20 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/30 overflow-hidden">
                  <img src={logo} alt="Logo" className="w-full h-full object-contain scale-125" />
                </div>
                <div>
                  <div className="text-white font-bold text-lg md:text-xl tracking-tighter leading-none">智賦 AI</div>
                  <div className="text-white/80 text-[10px] uppercase font-bold tracking-widest leading-none mt-1">IntelliBrand AI</div>
                </div>
              </div>
            </div>
            {/* Center Dynamic Text - Removed to prevent blocking visuals */}
          </div>

          {/* B. Middle Brand Assets */}
          <div className="flex flex-col items-center text-center space-y-8 mb-20 animate-fade-in-up">
            {/* Sub-Asset Image (Placeholder for brand image) */}
            <div className="w-48 h-28 rounded-2xl overflow-hidden shadow-lg border-2 border-white ring-8 ring-slate-100/50 group">
              <img src="https://images.unsplash.com/photo-1519750783826-e2420f4d687f?auto=format&fit=crop&q=80&w=800" alt="Vision" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>

            {/* Main Title Section */}
            <div className="relative">
              <div className="flex items-center justify-center gap-4 mb-4">
                <div className="h-px w-12 bg-orange-400"></div>
                <div className="text-orange-500 text-[10px] md:text-xs font-black tracking-[0.3em] uppercase">Visionary Media Solutions</div>
                <div className="h-px w-12 bg-orange-400"></div>
              </div>

              <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-slate-900 leading-[1.1]">
                智賦<span className="text-[#2563eb]">AI</span><br className="sm:hidden" />品牌行銷公司
              </h1>

              <div className="mt-8 flex flex-col items-center">
                <div className="text-slate-400 text-xs md:text-sm font-bold tracking-[0.4em] uppercase mb-4">Empowering Brands with AI Intelligence</div>
                <div className="bg-orange-500 text-white px-5 py-2 rounded-md text-[10px] font-black uppercase tracking-widest shadow-lg shadow-orange-500/20">
                  品牌提升 • 數位賦能 • 全案操盤
                </div>
              </div>
            </div>
          </div>

          {/* C. Bottom Quote Block */}
          <div className="w-full max-w-3xl bg-white/40 backdrop-blur-xl border border-white rounded-3xl p-8 md:p-10 shadow-xl relative group hover:bg-white/60 transition-colors animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-slate-600 text-base md:text-lg leading-relaxed italic font-medium text-center">
              「結合<span className="text-[#2563eb] font-bold">十年行銷實戰</span>與頂尖 AI 技術，為企業實施<span className="text-orange-500 font-bold">精準賦能</span>。我們不只提升品牌價值，更為您打造持續成長的自動化獲利引擎。」
            </p>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-blue-600 w-12 h-1 rounded-full shadow-lg"></div>
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
                className="group relative overflow-hidden rounded-xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 bg-slate-900 aspect-[3/4] sm:aspect-[4/3] md:h-80 block cursor-pointer animate-fade-in-up"
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

      {/* 4. 精選案例 (Portfolio) - Mobile First Bento Grid */}
      <section id="portfolio" className="relative py-16 md:py-24 z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-50 to-slate-100 md:skew-y-2 transform origin-top-left -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          {/* 標題與篩選 */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-8 md:mb-12 gap-4">
            <div className="animate-fade-in-up">
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-3 text-slate-900">精選案例</h2>
              <p className=" text-slate-600 text-base md:text-lg font-medium">融合創意與技術的實戰成果展示</p>
            </div>
            {/* 篩選按鈕 - 手機端橫向滾動 */}
            <div className="flex gap-2 overflow-x-auto md:overflow-visible w-full md:w-auto pb-2 md:pb-0 scroll-container animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <button className="px-4 md:px-5 py-2 md:py-2.5 rounded-full bg-gradient-to-r from-slate-900 to-slate-800 text-white text-sm font-semibold shadow-lg shadow-slate-900/20 whitespace-nowrap flex-shrink-0">全部作品</button>
              <button className="px-4 md:px-5 py-2 md:py-2.5 rounded-full glass-strong text-slate-700 border border-slate-300 text-sm font-medium hover:bg-white/50 transition-all whitespace-nowrap flex-shrink-0">Web App</button>
              <button className="px-4 md:px-5 py-2 md:py-2.5 rounded-full glass-strong text-slate-700 border border-slate-300 text-sm font-medium hover:bg-white/50 transition-all whitespace-nowrap flex-shrink-0">影片</button>
              <button className="px-4 md:px-5 py-2 md:py-2.5 rounded-full glass-strong text-slate-700 border border-slate-300 text-sm font-medium hover:bg-white/50 transition-all whitespace-nowrap flex-shrink-0">AI</button>
            </div>
          </div>

          {/* Bento Grid Layout - 手機單欄，桌面 Bento */}
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 md:gap-5 md:h-[650px]">
            {/* Item 1: Featured Project - 手機全寬 */}
            <div className="md:col-span-2 md:row-span-2 rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 card-3d min-h-[300px] md:min-h-0 animate-fade-in-up">
              <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" alt="Dashboard" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/50 to-transparent md:from-slate-900/90 md:via-slate-900/40 md:to-transparent opacity-90 group-hover:opacity-95 transition-opacity"></div>
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-between">
                {/* 標籤 */}
                <div className="flex justify-end">
                  <span className="px-3 py-1.5 glass-strong border border-white/30 text-white rounded-full text-xs font-bold tracking-wider uppercase">SaaS Platform</span>
                </div>
                {/* 內容 */}
                <div className="animate-slide-in-right">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 md:mb-3 translate-y-0 md:translate-y-2 md:group-hover:translate-y-0 transition-transform" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>FinTech 智能數據後台</h3>
                  <p className="text-sm md:text-base text-white/95 md:text-slate-200 max-w-md md:opacity-100 md:group-hover:opacity-100 md:translate-y-0 md:group-hover:translate-y-0 transition-all duration-500 leading-relaxed" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    專為金融機構打造的 AI 預測儀表板，整合即時股市數據流與使用者行為熱點分析。
                  </p>
                </div>
              </div>
            </div>

            {/* Item 2: Digital Avatar - 手機全寬 */}
            <div className="md:col-span-2 rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 card-3d min-h-[250px] md:min-h-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <img src="https://images.unsplash.com/photo-1617042375876-a13e36732a04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" alt="Avatar" className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110 group-active:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent md:from-slate-900/80 md:to-transparent"></div>
              <div className="absolute inset-0 p-6 md:p-6 flex flex-col justify-between z-10">
                <div className="flex justify-end">
                  <span className="px-3 py-1.5 glass-strong border border-white/30 text-white rounded-full text-xs font-bold tracking-wider uppercase">AI Avatar</span>
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-1 md:mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>虛擬代言人專案</h3>
                  <p className="text-sm text-white/95 md:text-slate-300 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>AI 生成真人級別口播影片</p>
                </div>
              </div>
            </div>

            {/* Item 3: AI Art - 手機全寬 */}
            <div className="md:col-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 card-3d min-h-[250px] md:min-h-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              <img src="https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="AI Art" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent md:from-slate-900/80 md:to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>品牌視覺重塑</h3>
                <p className="text-sm text-white/90 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>AI 生成藝術</p>
              </div>
            </div>

            {/* Item 4: Website - 手機全寬 */}
            <div className="md:col-span-1 rounded-2xl md:rounded-3xl overflow-hidden relative group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-500 card-3d min-h-[250px] md:min-h-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Website" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0 group-active:scale-105 group-active:grayscale-0" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent md:from-slate-900/80 md:to-transparent"></div>
              <div className="absolute inset-0 p-6 flex flex-col justify-end">
                <h3 className="text-lg md:text-xl font-bold text-white mb-1" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>科技公司官網</h3>
                <p className="text-sm text-white/90 font-medium" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>響應式設計</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. 客戶見證 (Testimonials) - 輪播設計 */}
      <section id="testimonials" className="relative py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* 標題 */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-slate-900">客戶見證</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-3 md:mb-4"></div>
            <p className="text-slate-600 text-base md:text-lg font-medium">聽聽客戶怎麼說</p>
          </div>

          {/* 見證卡片 - 手機單欄滾動，桌面3欄網格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "張執行長",
                title: "科技新創公司 CEO",
                company: "NextGen Tech",
                content: "智賦 AI 團隊的專業程度超出預期！他們不僅快速交付了高品質的網站，更重要的是真正理解我們的商業需求。",
                avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "李總監",
                title: "行銷總監",
                company: "美妝電商品牌",
                content: "AI 影片製作服務真的太神了！以前要花 2-3 天拍攝剪輯的影片，現在半天就能產出，品質還更好。ROI 提升了 300%！",
                avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              },
              {
                name: "陳經理",
                title: "數位轉型經理",
                company: "傳統製造業",
                content: "我們是傳統產業，對 AI 完全不懂。智賦團隊很有耐心地教導我們，現在整個公司的工作效率提升了 50%！",
                avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              }
            ].map((testimonial, index) => (
              <div key={index} className="glass-strong p-6 md:p-8 rounded-2xl md:rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 card-3d animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* 引號圖標 */}
                <div className="text-[#2563eb] mb-4 md:mb-6">
                  <svg className="w-10 h-10 md:w-12 md:h-12 opacity-50" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* 評價內容 */}
                <p className="text-slate-700 text-sm md:text-base leading-relaxed mb-6 md:mb-8 min-h-[80px] md:min-h-[100px]">
                  "{testimonial.content}"
                </p>

                {/* 客戶資訊 */}
                <div className="flex items-center gap-4">
                  <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 md:w-16 md:h-16 rounded-full object-cover border-2 border-white shadow-lg" loading="lazy" />
                  <div>
                    <h4 className="font-bold text-slate-900 text-base md:text-lg">{testimonial.name}</h4>
                    <p className="text-sm text-slate-600">{testimonial.title}</p>
                    <p className="text-xs text-slate-500">{testimonial.company}</p>
                  </div>
                </div>

                {/* 星星評分 */}
                <div className="flex gap-1 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. 為什麼選擇我們 (Why Choose Us) */}
      <section id="why-us" className="relative py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* 標題 */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-slate-900">為什麼選擇智賦 AI</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-3 md:mb-4"></div>
            <p className="text-slate-600 text-base md:text-lg font-medium max-w-2xl mx-auto">結合技術實力與商業洞察，我們不只是服務提供者，更是您的數位轉型夥伴</p>
          </div>

          {/* 優勢卡片 - 手機單欄，桌面2x2網格 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {[
              {
                icon: "⚡",
                title: "10x 效率提升",
                description: "AI 自動化工具讓您的團隊專注在核心業務，重複性工作交給 AI 處理，效率提升 10 倍以上。",
                color: "from-blue-500 to-cyan-500"
              },
              {
                icon: "🎯",
                title: "精準商業策略",
                description: "不只是技術實現，我們深入了解您的商業模式，提供真正能帶來 ROI 的解決方案。",
                color: "from-purple-500 to-pink-500"
              },
              {
                icon: "🚀",
                title: "快速交付",
                description: "平均 2-4 週完成專案，比傳統開發快 3-5 倍。從需求訪談到上線，全程高效推進。",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "💎",
                title: "持續優化支持",
                description: "專案交付不是結束，而是開始。我們提供長期技術支持與優化建議，確保您的投資持續增值。",
                color: "from-emerald-500 to-teal-500"
              }
            ].map((item, index) => (
              <div key={index} className="group relative bg-white p-6 md:p-8 lg:p-10 rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-100 card-3d animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                {/* 背景裝飾 */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${item.color} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-opacity`}></div>

                {/* 圖標 */}
                <div className="text-6xl md:text-7xl mb-4 md:mb-6 relative z-10">{item.icon}</div>

                {/* 標題 */}
                <h3 className="font-display text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-900 relative z-10">{item.title}</h3>

                {/* 描述 */}
                <p className="text-slate-600 text-sm md:text-base leading-relaxed relative z-10">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 團隊介紹 (Team) - 精簡版 */}
      <section id="team" className="relative py-16 md:py-24 px-4 md:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          {/* 標題 */}
          <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 md:mb-4 text-slate-900">核心團隊</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] mx-auto rounded-full mb-3 md:mb-4"></div>
            <p className="text-slate-600 text-base md:text-lg font-medium">跨領域專業，為您打造最佳解決方案</p>
          </div>

          {/* 團隊成員 - 手機單欄，桌面3欄 */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                name: "卓垣甫 / Dan",
                role: "創始人 & AI 技術總監",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                bio: "10+ 年軟體開發經驗"
              },
              {
                name: "李英子 / Queena",
                role: "創始股東 & CEO",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                bio: "跨領域品牌經營專家"
              },
              {
                name: "黃素怡 / Sue",
                role: "客戶成功經理",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                bio: "專案管理與客戶關係專家"
              }
            ].map((member, index) => (
              <div key={index} className="group relative bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 card-3d animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
                {/* 照片區 */}
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>

                  {/* 名字和職位 - 浮在照片上 */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>{member.name}</h3>
                    <p className="text-sm md:text-base text-cyan-300 font-semibold mb-2" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{member.role}</p>
                    <p className="text-sm text-white/90" style={{ textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{member.bio}</p>
                  </div>
                </div>
              </div>
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
      const homeSections = ['#services', '#portfolio', '#testimonials', '#why-us', '#team', '#contact'];
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

        {/* --- 渲染主內容區塊 --- */}
        <main className="animate-fade-in" key={currentHash}>
          {renderMainContent()}
        </main>

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