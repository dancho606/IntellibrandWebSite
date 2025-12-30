///// <reference types="vite/client" />

import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Brain, Menu, X, ArrowRight, Zap, ArrowLeft, CheckCircle2 } from 'lucide-react';
import About from './about';
//import heroBgImage from './assets/hero-ai.png'; //換影片
// @ts-ignore
import videoDesktop from './assets/hero-desktop.mp4'; // 原本的寬影片
// @ts-ignore
import videoMobile from './assets/hero-mobile.mp4';   // 新的 1:1 影片

// ========================================== 
//   區域一：6 個獨立的服務詳情頁 (您可以分別編輯這裡)
// ==========================================

// 1. AI 網站建置 - 獨立頁面
function ServiceWebsite() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><Link to="/" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</Link></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-2xl" alt="Website" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 font-display">AI 網站建置</h1>
            <p className="text-xl text-slate-600 mb-6">我們結合 React 與 AI 技術，為您打造載入速度極快、SEO 架構完美的現代化官網。</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> 響應式設計 (RWD)</li>
              <li className="flex items-center text-slate-700"><CheckCircle2 className="w-5 h-5 text-blue-600 mr-2" /> 後台管理系統</li>
            </ul>
            <button className="px-8 py-3 bg-[#2563eb] text-white rounded-full font-bold hover:bg-blue-600">索取網站報價</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 2. AI 影片製作 - 獨立頁面
function ServiceVideo() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><Link to="/" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</Link></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <img src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" className="rounded-2xl shadow-2xl" alt="Video" />
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-6 font-display">AI 影片製作</h1>
            <p className="text-xl text-slate-600 mb-6">Text-to-Video 技術革命。不需要攝影棚，只需腳本，AI 就能為您生成高品質的行銷短片。</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-600 mr-2" /> 快速產出短影音</li>
              <li className="flex items-center text-slate-700"><CheckCircle2 className="w-5 h-5 text-purple-600 mr-2" /> 多語言配音</li>
            </ul>
            <button className="px-8 py-3 bg-slate-900 text-white rounded-full font-bold hover:bg-slate-800">觀看影片範例</button>
          </div>
        </div>
      </div>
    </div>
  );
}

// 3. AI 數位替身 - 獨立頁面
function ServiceAvatar() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><Link to="/" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</Link></div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6 font-display">AI 數位替身</h1>
        <p className="text-xl text-slate-600 mb-8">打造企業專屬的 24 小時虛擬發言人。</p>
        {/* 這裡示範不同的排版，方便您之後修改 */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-slate-100">
          <p>（這裡之後可以放數位替身的 Demo 影片）</p>
        </div>
      </div>
    </div>
  );
}

// 4. 自媒體代操 - 獨立頁面
function ServiceSocial() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><Link to="/" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</Link></div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">自媒體代操</h1>
        <p className="text-xl text-slate-600">IG, TikTok, YouTube 全平台運營。</p>
      </div>
    </div>
  );
}

// 5. AI 企業導入 - 獨立頁面
function ServiceEnterprise() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><Link to="/" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</Link></div>
        <h1 className="text-4xl font-bold text-slate-900 mb-6">AI 企業導入</h1>
        <p className="text-xl text-slate-600">建置私有化 LLM 知識庫，優化內部流程。</p>
      </div>
    </div>
  );
}

// 6. AI 實戰課程 - 獨立頁面
function ServiceCourse() {
  return (
    <div className="pt-24 pb-16 min-h-screen bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="mb-8"><Link to="/" className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2"><ArrowLeft className="w-4 h-4" />返回首頁</Link></div>
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
  return (
    <>
      {/* 2. Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 pt-20 z-10 overflow-hidden">
        {/* Hero 背景區塊 */}
        <div className="absolute inset-0 z-0 bg-slate-900">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover md:object-cover object-contain"
          >
            {/* 手機版：螢幕寬度小於 768px 時，載入這支 9:16 直式影片 */}
            <source src={videoMobile} type="video/mp4" media="(max-width: 768px)" />

            {/* 電腦版：其餘情況載入這支寬螢幕影片 */}
            <source src={videoDesktop} type="video/mp4" />

            您的瀏覽器不支援 HTML5 影片。
          </video>

          {/* 漸層遮罩 (維持不變) */}
          <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-50/60 to-slate-50"></div>
        </div>
        <div className="absolute right-[-10%] top-[20%] w-[800px] h-[800px] border border-blue-200/50 rounded-full animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute left-[-10%] bottom-[10%] w-[600px] h-[600px] border border-cyan-200/50 rounded-full animate-[spin_40s_linear_infinite_reverse]"></div>

        <div className="text-center max-w-5xl mx-auto relative z-10 px-4">
          {/* 頂部標籤 */}
          <div className="inline-flex items-center px-4 py-2 md:py-1.5 rounded-full glass-strong border border-white/30 shadow-lg text-[#2563eb] text-xs md:text-xs font-bold uppercase tracking-wider mb-6 md:mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 relative mr-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#2563eb]"></span>
            </span>
            AI MARKETING REVOLUTION
          </div>

          {/* 主標題 - Mobile First */}
          <h1 className="font-display text-[2.5rem] sm:text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 md:mb-8 leading-[1.1] text-white animate-fade-in-up" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), -1px -1px 3px rgba(255,255,255,0.2), 0 0 50px rgba(0,0,0,0.7)' }}>
            智賦 AI<br />
            <span className="text-gradient inline-block mt-2" style={{ textShadow: '3px 3px 6px rgba(0,0,0,0.9), -1px -1px 3px rgba(0,0,0,0.5), 0 0 50px rgba(0,0,0,0.7)' }}>預見品牌未來</span>
          </h1>

          {/* 說明文字 - 手機端優化 */}
          <p className="mt-4 md:mt-6 max-w-2xl mx-auto text-base md:text-lg lg:text-xl text-white leading-relaxed animate-fade-in-up font-medium px-2" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.95), -1px -1px 2px rgba(255,255,255,0.2), 0 0 30px rgba(0,0,0,0.8)' }}>
            運用生成式 AI 技術，我們為您打造全自動化行銷生態系。<br className="hidden sm:block" />
            <span className="block sm:inline">從 <span className="font-bold underline decoration-cyan-400/80 decoration-2 underline-offset-4">數據洞察</span> 到 <span className="font-bold underline decoration-purple-400/80 decoration-2 underline-offset-4">數位替身</span>。</span>
          </p>

          {/* CTA 按鈕 - Mobile First */}
          <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center gap-4 md:gap-5 animate-fade-in-up max-w-md sm:max-w-none mx-auto">
            {/* 主要 CTA - 手機端全寬 */}
            <a href="#portfolio" className="group relative w-full sm:w-auto px-8 py-4 md:py-4 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full font-bold text-base md:text-base transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/50 hover:-translate-y-1 active:scale-95 min-h-[56px] md:min-h-[48px] flex items-center justify-center">
              <span className="relative z-10 flex items-center gap-2">
                瀏覽精選案例 <ArrowRight className="w-5 h-5 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a>

            {/* 次要 CTA - 手機端全寬 */}
            <Link to="/about" className="w-full sm:w-auto px-8 py-4 md:py-4 rounded-full glass-strong border border-white/30 text-white font-semibold text-base md:text-base hover:bg-white/20 transition-all duration-300 shadow-lg backdrop-blur-md active:scale-95 min-h-[56px] md:min-h-[48px] flex items-center justify-center">
              關於智賦
            </Link>
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

          {/* 服務卡片 - Mobile First Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                title: "AI 網站建置",
                link: "/service/website",
                desc: "Web App 開發與極速響應式設計",
                img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-blue-600/90 to-blue-800/90"
              },
              {
                title: "AI 影片製作",
                link: "/service/video",
                desc: "Text-to-Video 技術，快速產出高品質短片",
                img: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-purple-600/90 to-purple-800/90"
              },
              {
                title: "AI 數位替身",
                link: "/service/avatar",
                desc: "打造企業專屬虛擬代言人，自動化影片生成",
                img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-cyan-600/90 to-cyan-800/90"
              },
              {
                title: "自媒體代操",
                link: "/service/social",
                desc: "IG, TikTok, YouTube 全平台運營與內容生成",
                img: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-pink-600/90 to-pink-800/90"
              },
              {
                title: "AI 企業導入",
                link: "/service/enterprise",
                desc: "優化工作流程，整合 AI 工具至企業內部",
                img: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-indigo-600/90 to-indigo-800/90"
              },
              {
                title: "AI 實戰課程",
                link: "/service/course",
                desc: "企業內訓與個人進修，掌握最新 AI 工具應用",
                img: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
                gradient: "from-emerald-600/90 to-emerald-800/90"
              }
            ].map((item, index) => (
              <Link
                to={item.link}
                key={index}
                className="group relative overflow-hidden rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 card-3d border border-white/20 h-72 md:h-80 block cursor-pointer animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* 背景圖片 */}
                <img
                  src={item.img}
                  alt={item.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-active:scale-105"
                  loading="lazy"
                />

                {/* 漸變遮罩 - 手機端更深 */}
                <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-80 md:opacity-70 group-hover:opacity-85 transition-opacity duration-500`}></div>

                {/* Glassmorphism 頂部裝飾 - 僅桌面 */}
                <div className="hidden md:block absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>

                {/* 內容區 - Mobile First */}
                <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-10">
                  {/* 標題 */}
                  <h3 className="text-2xl md:text-3xl font-bold mb-3 md:mb-4 text-white font-display flex items-center gap-2 md:gap-3" style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.8)' }}>
                    {item.title}
                    <ArrowRight className="w-6 h-6 md:w-5 md:h-5 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-hover:translate-x-2 transition-all duration-300" />
                  </h3>

                  {/* 描述文字 - 手機端常顯，桌面端 hover 顯示 */}
                  <p className="text-sm md:text-base leading-relaxed text-white/95 md:text-white/90 font-medium md:opacity-100 md:group-hover:opacity-100 transition-all duration-300 md:translate-y-0 md:group-hover:translate-y-0" style={{ textShadow: '1px 1px 3px rgba(0,0,0,0.8)' }}>
                    {item.desc}
                  </p>
                </div>

                {/* 點擊回饋效果 - 僅手機 */}
                <div className="md:hidden absolute inset-0 bg-white/10 opacity-0 active:opacity-100 transition-opacity pointer-events-none"></div>
              </Link>
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
            <a href="#contact" className="group w-full sm:w-auto inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 text-base md:text-lg font-bold text-slate-900 transition-all duration-300 bg-gradient-to-r from-white to-slate-100 rounded-full hover:shadow-2xl hover:shadow-white/30 hover:-translate-y-1 active:scale-95 min-h-[56px] md:min-h-0">
              <Zap className="mr-2 w-5 h-5 md:w-6 md:h-6 text-yellow-500 fill-current group-hover:animate-pulse" />
              立即預約諮詢
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>

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

// --- 元件：萬用捲動控制器 (這就是您要的功能) ---
// 它會自動判斷：
// 1. 如果只是換頁 (沒有 #)，就回到最上面。
// 2. 如果有 # (例如 #services)，就滑動到該區塊。
function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    // 情況 A：網址帶有錨點 (例如 /#services)
    if (hash) {
      // 等待 0.1 秒，確保首頁的畫面已經長出來了，才開始滑動
      const timer = setTimeout(() => {
        const element = document.getElementById(hash.substring(1)); // 去掉 # 號，找 ID
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' }); // 平滑滑動
        }
      }, 100);
      return () => clearTimeout(timer); // 清理計時器
    }
    // 情況 B：純粹換頁 (例如從首頁點到關於我們)
    else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]); // 只要路徑或 hash 改變，就重新執行這個功能

  return null;
}

// ==========================================
//   區域三：App 主程式 (路由設定中心)
// ==========================================
export default function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Router>
      <ScrollToTop />
      <div className="bg-slate-50 text-slate-900 antialiased overflow-x-hidden font-sans">
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@300;400;500;700;900&family=Space+Grotesk:wght@300;500;700&display=swap');
          .text-gradient { background: linear-gradient(135deg, #2563eb 0%, #06b6d4 50%, #7c3aed 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; }
          .font-display { font-family: 'Space Grotesk', 'Noto Sans TC', sans-serif; }
          .glass-nav { background: rgba(255, 255, 255, 0.85); backdrop-filter: blur(12px); border-bottom: 1px solid rgba(226, 232, 240, 0.8); }
        `}</style>

        {/* 1. 導覽列 */}
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'shadow-md bg-white/95 backdrop-blur-md' : 'glass-nav'}`}>
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="flex items-center justify-between h-20">
              <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
                <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-[#2563eb] to-[#06b6d4] flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  <Brain className="w-5 h-5" />
                </div>
                <span className="font-display text-xl font-bold tracking-tight text-slate-900">
                  IntelliBrand<span className="text-[#06b6d4]">.AI</span>
                </span>
              </Link>
              <div className="hidden md:block">
                <div className="ml-10 flex items-center space-x-8">
                  <Link to="/about" className="text-sm font-medium text-slate-600 hover:text-[#2563eb] transition-colors">關於智賦</Link>
                  <Link to="/#services" className="text-sm font-medium text-slate-600 hover:text-[#2563eb] transition-colors">服務項目</Link>
                  <Link to="/#portfolio" className="text-sm font-medium text-slate-600 hover:text-[#2563eb] transition-colors">精選案例</Link>
                  <Link to="/#contact" className="px-6 py-2.5 text-sm font-semibold text-white bg-slate-900 rounded-full hover:bg-[#2563eb] transition-all">聯絡我們</Link>
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
                <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} className="block px-3 py-4 text-base font-medium text-slate-600">關於智賦</Link>
              </div>
            </div>
          )}
        </nav>

        {/* --- 路由設定：在這裡定義每個網址要顯示哪個元件 --- */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          {/* 6 個獨立的服務分頁 (對應上面定義的元件) */}
          <Route path="/service/website" element={<ServiceWebsite />} />
          <Route path="/service/video" element={<ServiceVideo />} />
          <Route path="/service/avatar" element={<ServiceAvatar />} />
          <Route path="/service/social" element={<ServiceSocial />} />
          <Route path="/service/enterprise" element={<ServiceEnterprise />} />
          <Route path="/service/course" element={<ServiceCourse />} />
        </Routes>

        {/* 頁尾 */}
        <footer className="bg-slate-50 pt-16 pb-8 border-t border-slate-200 mt-auto">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-slate-400 text-sm">© 2024 IntelliBrand AI. All rights reserved.</p>
          </div>
        </footer>

      </div>
    </Router>
  );
}