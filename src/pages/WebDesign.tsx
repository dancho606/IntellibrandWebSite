import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Shield, Key, Rocket, CheckCircle2, ChevronDown, Zap, X, Plus, ShoppingCart, Users, Database, Globe, ArrowRight, Search } from 'lucide-react';

// 添加 FAQ 資料結構
const faqs = [
    { q: "建置期間可以修改多少次？", a: "我們提供 2 次免費的小幅修改，確保成品符合您的期望！超過次數則視複雜度另行報價。" },
    { q: "如果我沒有文案和圖片怎麼辦？", a: "不用擔心，我們可以提供圖庫素材，並運用 AI 輔助生成專業的行銷文案，讓網站快速上線。" },
    { q: "未來的維護費包含什麼？不續約會怎樣？", a: "維護費包含主機續約、網域更新與安全性防護。如果您選擇不續約，我們可以提供原始碼包裝供您自行搬遷（適用買斷制方案）。" },
];

export default function WebDesign() {
    const [openFaq, setOpenFaq] = useState<number | null>(null);
    const [activeModal, setActiveModal] = useState<string | null>(null); // 'template', 'semi-custom', 'full-custom'

    // 當 Modal 開啟時，鎖定背景滾動
    useEffect(() => {
        if (activeModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [activeModal]);

    // 確保切換進來時捲軸在最上面
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 flex flex-col">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-grow">

                {/* 返回按鈕 */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    <a href="#home" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/50 border border-slate-200 text-slate-600 hover:text-cyan-600 hover:bg-white transition-all shadow-sm">
                        <ArrowLeft className="w-4 h-4" />
                        返回首頁
                    </a>
                </motion.div>

                {/* Hero Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="text-center md:text-left mb-20"
                >
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 mb-6 font-display tracking-tight leading-[1.1]">
                        打造會賺錢的 <br className="md:hidden" />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">數位房地產</span>
                    </h1>
                    <p className="text-lg md:text-2xl text-slate-600 max-w-3xl leading-relaxed">
                        這不只是一個網站，更是您量身打造的自動化獲利引擎。我們以最新技術為基底，結合 AI 工具，助您在競爭中脫穎而出。
                    </p>
                </motion.div>


                {/* 產品陣列 (Pricing & Plans) */}
                <div className="mb-24">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 font-display">產品線與專屬方案</h2>
                        <p className="text-slate-600 max-w-2xl mx-auto">從極速上線的展示套版，到可以彈性加購電商的樂高模式，再到大型企業全客製，我們為您設計了最符合商業效益的三大維度。</p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                        {/* Plan 1: 輕量套版 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col items-center text-center shadow-lg group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-400 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden relative">
                                <img src="/images/plan_classic.png" alt="Classic Template" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="mb-6 flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">經典復刻網站</h3>
                                <p className="text-slate-500 text-sm mb-4">預算導向、極速上線。</p>
                                <div className="text-3xl font-bold text-slate-900 mb-1">$35,000<span className="text-sm font-normal text-slate-500 ml-1">起</span></div>
                                <div className="text-emerald-600 text-xs font-bold mb-6 flex items-center gap-1">
                                    <Globe className="w-3 h-3" /> 年度服務費 $6,000 起
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 經典網站架構復刻</li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 包含一頁式或多頁形象官網</li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 約 3-4 工作天極速交付</li>
                                </ul>
                            </div>
                            <button onClick={() => setActiveModal('template')} className="w-full py-3 px-4 bg-slate-50 hover:bg-slate-100 text-slate-700 font-medium rounded-xl transition-colors border border-slate-200 flex items-center justify-center gap-2 group">
                                查看方案規格 <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Plan 2: 樂高拼裝 (主推) */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col items-center text-center shadow-lg group relative overflow-visible"
                        >
                            {/* 熱門標籤：改為絕對定位，不影響內部排版對齊 */}
                            <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-bold rounded-full shadow-lg z-20 whitespace-nowrap">
                                🔥 最受歡迎 / 彈性最高
                            </div>

                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden relative">
                                <img src="/images/plan_lego.png" alt="Lego Semi-Custom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>

                            <div className="mb-6 flex-grow relative z-10 w-full">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">半客製網站</h3>
                                <p className="text-slate-500 text-sm mb-4">買好底盤，彈性加購電商或後台。</p>
                                <div className="text-3xl font-bold text-slate-900 mb-1">$50,000<span className="text-sm font-normal text-slate-500 ml-1">起</span></div>
                                <div className="text-cyan-600 text-xs font-bold mb-6 flex items-center gap-1 justify-center">
                                    <Globe className="w-3 h-3" /> 年度服務費 $12,000 起
                                </div>
                                <div className="text-slate-500 text-xs font-bold text-center mb-3 text-opacity-80 uppercase tracking-widest">基本版包含：</div>
                                <ul className="space-y-3 w-full">
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><Zap className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> 全站圖文、Logo 與配色更換</li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><Zap className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> 最多 2 個區塊的佈局修改</li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><Zap className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> 最多 1 個頁面的獨立新增</li>
                                </ul>
                            </div>
                            <button onClick={() => setActiveModal('semi-custom')} className="w-full py-3 px-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 group relative z-10">
                                開啟選配加購選單 <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>

                        {/* Plan 3: 全客製化 */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            whileHover={{ y: -10, boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
                            className="bg-white rounded-3xl p-8 border border-slate-200 flex flex-col items-center text-center shadow-lg group relative overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-400 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                            <div className="w-full h-40 mb-6 rounded-2xl overflow-hidden relative">
                                <img src="/images/plan_custom.png" alt="Enterprise Custom" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors"></div>
                            </div>
                            <div className="mb-6 flex-grow">
                                <h3 className="text-xl font-bold text-slate-900 mb-1">全客製化網站</h3>
                                <p className="text-slate-500 text-sm mb-4">企業級 UI/UX 從零打造。</p>
                                <div className="text-3xl font-bold text-slate-900 mb-1">依需求估價</div>
                                <div className="text-purple-600 text-xs font-bold mb-6 flex items-center gap-1">
                                    <Globe className="w-3 h-3" /> 年度服務費 $24,000 起
                                </div>
                                <ul className="space-y-3">
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> 深度需求訪談與流程規劃</li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> 獨立視覺識別與專屬互動特效</li>
                                    <li className="flex items-start gap-2 text-slate-600 text-sm"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" /> 適合複雜系統、ERP 串接或大型電商</li>
                                </ul>
                            </div>
                            <button onClick={() => setActiveModal('full-custom')} className="w-full py-3 px-4 bg-purple-50 hover:bg-purple-100 text-purple-700 font-medium rounded-xl transition-colors border border-purple-200 flex items-center justify-center gap-2 group">
                                了解客製化流程 <ArrowRight className="w-4 h-4 text-purple-400 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </motion.div>
                    </div>
                </div>

                {/* 核心優勢 (三大亮點) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-24">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-6">
                            <Rocket className="w-7 h-7 text-blue-600" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">極致效能體驗</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">不再讓客戶等待。採用主流 React + Vite 現代化架構，打造「秒開」級別的極致流暢感，直接提升 SEO 排名與轉換率。</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center mb-6">
                            <Shield className="w-7 h-7 text-cyan-600" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">銀行級資安防護</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">告別傳統網站外掛漏洞。我們的專屬架構讓前後端徹底分離，不給駭客任何可趁之機，保護您的品牌聲譽。</p>
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="bg-white p-6 md:p-8 rounded-3xl shadow-xl border border-slate-100 hover:shadow-2xl transition-all hover:-translate-y-1">
                        <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center mb-6">
                            <Key className="w-7 h-7 text-indigo-600" />
                        </div>
                        <h3 className="text-xl md:text-2xl font-bold mb-4">真正的資產擁有權</h3>
                        <p className="text-slate-600 leading-relaxed text-sm md:text-base">我們從不綁架客戶。專案交付提供完整原始碼 (100% Ownership) 與轉移協助，讓數位資產真正掌握在您手中。</p>
                    </motion.div>
                </div>

                {/* FAQ 區塊 */}
                <div className="mb-24 max-w-4xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-10"
                    >
                        <h2 className="text-3xl font-bold font-display text-slate-900">常見問題與解答</h2>
                    </motion.div>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 10 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all cursor-pointer"
                                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                            >
                                <div className="px-6 py-5 flex justify-between items-center bg-white">
                                    <h4 className="font-bold text-slate-800 text-lg">{faq.q}</h4>
                                    <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`} />
                                </div>
                                <AnimatePresence initial={false}>
                                    {openFaq === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            style={{ overflow: "hidden" }}
                                        >
                                            <div className="px-6 pb-5 text-slate-600">
                                                {faq.a}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* CTA 區塊 */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="bg-gradient-to-br from-blue-600 to-cyan-600 rounded-3xl p-10 md:p-16 text-center text-white shadow-2xl relative overflow-hidden"
                >
                    <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80&w=2000')] opacity-10 mix-blend-overlay object-cover"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6 font-display tracking-tight">準備好打造您的數位資產了嗎？</h2>
                        <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">填寫需求問卷，我們的顧問團隊將盡快與您聯繫，並為您量身規劃最適合的建置方案。</p>
                        <button onClick={() => window.location.href = '#contact'} className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-full font-bold text-lg hover:bg-slate-50 transition-colors shadow-xl hover:-translate-y-1">
                            <Zap className="w-5 h-5 text-yellow-500" />立刻預約諮詢
                        </button>
                    </div>
                </motion.div>

                {/* Modal 互動彈窗 */}
                <AnimatePresence>
                    {activeModal && (
                        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setActiveModal(null)}
                                className="fixed inset-0 bg-slate-900/40 backdrop-blur-sm"
                            ></motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                                className="bg-white w-full max-w-4xl rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col max-h-[90vh]"
                            >
                                {/* Modal Header */}
                                <div className="flex justify-between items-start p-6 md:p-8 border-b border-slate-100 bg-slate-50/50">
                                    <div>
                                        <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2 font-display">
                                            {activeModal === 'template' && '經典復刻網站 - 方案細節'}
                                            {activeModal === 'semi-custom' && '半客製網站 - 選配加購單'}
                                            {activeModal === 'full-custom' && '全客製化網站 - 打造專屬平台'}
                                        </h3>
                                        <p className="text-slate-500 text-sm">
                                            {activeModal === 'template' && '高 CP 值快速上線，適合活動推廣與形象展示。'}
                                            {activeModal === 'semi-custom' && '以基礎套版為基底，預算花在刀口，功能彈性擴充。'}
                                            {activeModal === 'full-custom' && '從底層架構到 UI/UX 完全量身打造，沒有擴充限制。'}
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setActiveModal(null)}
                                        className="p-2 bg-white hover:bg-slate-100 rounded-full text-slate-400 hover:text-slate-600 transition-colors border border-slate-200"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                {/* Modal Body (Scrollable) */}
                                <div className="p-6 md:p-8 overflow-y-auto custom-scrollbar">

                                    {/* 內容: 輕量套版 */}
                                    {activeModal === 'template' && (
                                        <div className="space-y-8">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="border border-slate-200 rounded-2xl p-6 bg-slate-50">
                                                    <h4 className="text-lg font-bold text-slate-800 mb-4 border-b border-slate-200 pb-2">無後台展示版 <span className="text-slate-500 text-sm font-normal float-right mt-1">$35,000 / 年費 $6,000</span></h4>
                                                    <ul className="space-y-3">
                                                        <li className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 經典網站架構復刻</li>
                                                        <li className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> 包含單頁或多頁基礎架構</li>
                                                        <li className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> Vercel 極速部署上線</li>
                                                    </ul>
                                                </div>
                                                <div className="border border-cyan-200 rounded-2xl p-6 bg-cyan-50 relative">
                                                    <div className="absolute top-0 right-0 py-1 px-3 bg-cyan-100 text-cyan-700 text-xs font-bold rounded-bl-xl rounded-tr-xl">含輕量 CMS</div>
                                                    <h4 className="text-lg font-bold text-cyan-900 mb-4 border-b border-cyan-200 pb-2">有後台動態版 <span className="text-cyan-600 text-sm font-normal float-right mt-1">$55,000 / 年費 $10,000</span></h4>
                                                    <ul className="space-y-3">
                                                        <li className="flex gap-2 text-sm text-cyan-800"><CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> 包含「無後台版」所有項目</li>
                                                        <li className="flex gap-2 text-sm text-cyan-800"><CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> 串接 Supabase 企業級資料庫</li>
                                                        <li className="flex gap-2 text-sm text-cyan-800"><CheckCircle2 className="w-4 h-4 text-cyan-500 shrink-0 mt-0.5" /> 客戶可登入自行換字、換圖、發布消息</li>
                                                    </ul>
                                                </div>
                                            </div>
                                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <Globe className="w-5 h-5 text-emerald-500" /> 年度代管維護服務包含：
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Vercel 全球 CDN 託管與 SSL</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> Supabase 企業級資料庫維運</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 網域年費代繳與 DNS 管理</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 框架與安全性修補更新</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 每月資料備份與流量監控</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><Search className="w-4 h-4 text-emerald-500 shrink-0" /> 基礎 SEO 優化與效能諮詢</div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* 內容: 樂高套裝 (Add-ons) */}
                                    {activeModal === 'semi-custom' && (
                                        <div className="space-y-8">
                                            <div className="flex flex-col md:flex-row gap-6 mb-8 items-center bg-slate-900 p-6 rounded-2xl text-white">
                                                <div className="flex-grow">
                                                    <h4 className="text-xl font-bold mb-2">基本版包含內容 (已含在 $50,000 中)</h4>
                                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-4">
                                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 全站圖文更換</div>
                                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 2 個區塊佈局修改</div>
                                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 1 個獨立頁面新增</div>
                                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> RWD 響應式適配</div>
                                                        <div className="flex items-center gap-2 text-sm text-slate-300"><CheckCircle2 className="w-4 h-4 text-cyan-400" /> 基礎 SEO 與部署上線</div>
                                                    </div>
                                                </div>
                                                <div className="text-3xl font-bold whitespace-nowrap text-cyan-400 bg-slate-800 px-6 py-3 rounded-xl border border-slate-700">
                                                    $50,000 <span className="text-sm font-normal text-slate-400">起 / 年費 $12,000</span>
                                                </div>
                                            </div>

                                            <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                <Plus className="w-5 h-5 text-cyan-500" /> 步驟二：自由加購選配功能 (Add-ons)
                                            </h4>
                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                                                <div className="p-4 border border-slate-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all group flex gap-4 bg-white cursor-pointer">
                                                    <div className="w-12 h-12 bg-cyan-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-cyan-100 transition-colors">
                                                        <ShoppingCart className="w-6 h-6 text-cyan-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-800 mb-1 group-hover:text-cyan-700 transition-colors">輕量電商模組</div>
                                                        <p className="text-xs text-slate-500 mb-2">商品展示、購物車系統、綠界金流付款串接 (信用卡/超商代碼)。</p>
                                                        <div className="text-sm font-bold text-cyan-600">+ $50,000 起</div>
                                                    </div>
                                                </div>

                                                <div className="p-4 border border-slate-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all group flex gap-4 bg-white cursor-pointer">
                                                    <div className="w-12 h-12 bg-blue-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-blue-100 transition-colors">
                                                        <Database className="w-6 h-6 text-blue-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-800 mb-1 group-hover:text-blue-700 transition-colors">基礎 CMS 後台</div>
                                                        <p className="text-xs text-slate-500 mb-2">專屬管理介面，讓您可以自由新增文章、替換首頁 Banner 圖片。</p>
                                                        <div className="text-sm font-bold text-blue-600">+ $25,000 起</div>
                                                    </div>
                                                </div>

                                                <div className="p-4 border border-slate-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all group flex gap-4 bg-white cursor-pointer">
                                                    <div className="w-12 h-12 bg-purple-50 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-purple-100 transition-colors">
                                                        <Users className="w-6 h-6 text-purple-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-800 mb-1 group-hover:text-purple-700 transition-colors">會員系統模型</div>
                                                        <p className="text-xs text-slate-500 mb-2">開放註冊/登入、忘記密碼處理，以及專屬的歷史訂單查詢頁面。</p>
                                                        <div className="text-sm font-bold text-purple-600">+ $22,000 起</div>
                                                    </div>
                                                </div>

                                                <div className="p-4 border border-slate-200 rounded-xl hover:border-cyan-400 hover:shadow-md transition-all group flex gap-4 bg-white cursor-pointer">
                                                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 group-hover:bg-slate-200 transition-colors">
                                                        <Globe className="w-6 h-6 text-slate-600" />
                                                    </div>
                                                    <div>
                                                        <div className="font-bold text-slate-800 mb-1">新增額外客製分頁</div>
                                                        <p className="text-xs text-slate-500 mb-2">根據需要追加品牌故事、活動頁或特殊版型區塊。</p>
                                                        <div className="text-sm font-bold text-slate-600">+ $8,000 / 區塊起</div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )}

                                    {/* 內容: 全客製化 */}
                                    {activeModal === 'full-custom' && (
                                        <div className="space-y-8">
                                            <div className="bg-slate-900 rounded-2xl p-8 text-white relative overflow-hidden">
                                                <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600 rounded-full filter blur-[100px] opacity-20"></div>
                                                <h4 className="text-xl font-bold mb-4 relative z-10">企業級全客製開發方案</h4>
                                                <div className="text-4xl font-black text-white mb-2 relative z-10">依需求專案估價</div>
                                                <div className="text-purple-400 text-sm font-bold mb-6 relative z-10">年度代管服務費 $24,000 起</div>
                                                <p className="text-slate-400 text-sm max-w-2xl relative z-10">全客製化專案涵蓋前置的 wireframe 繪製、高保真 UI 設計、系統 API 串接等。因各企業具體需求差異甚大（如 ERP 對接、複雜資料權限），報價通常落在 15 萬至 50 萬以上不等。這需要專人為您進行深入訪談。</p>
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                                <div className="p-6 border border-slate-200 rounded-2xl">
                                                    <h5 className="font-bold text-slate-800 mb-2">1. 規格訪談</h5>
                                                    <p className="text-sm text-slate-500">深入了解商業邏輯，產出功能規格書 (FSD)。</p>
                                                </div>
                                                <div className="p-6 border border-slate-200 rounded-2xl">
                                                    <h5 className="font-bold text-slate-800 mb-2">2. UI/UX 設計</h5>
                                                    <p className="text-sm text-slate-500">Figma 視覺稿設計，提供 100% 量身訂做的介面。</p>
                                                </div>
                                                <div className="p-6 border border-slate-200 rounded-2xl">
                                                    <h5 className="font-bold text-slate-800 mb-2">3. 敏捷開發</h5>
                                                    <p className="text-sm text-slate-500">分階段交付功能，確保專案進度與品質符合預期。</p>
                                                </div>
                                            </div>

                                            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200">
                                                <h4 className="font-bold text-slate-800 mb-4 flex items-center gap-2">
                                                    <Globe className="w-5 h-5 text-purple-500" /> 年度尊榮維管服務包含：
                                                </h4>
                                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-8">
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> 獨立主機環境監控 (Vercel Pro 級別)</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> 資料庫自動異地備份與還原機制</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> 專屬技術顧問季會諮詢與優化建議</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> 安全性漏洞掃描與緊急修補服務</div>
                                                    <div className="flex gap-2 text-sm text-slate-600"><CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" /> 第三方系統串接心跳監測與技術支援</div>
                                                </div>
                                            </div>

                                            <div className="text-center pt-4">
                                                <button onClick={() => { setActiveModal(null); window.location.href = '#contact'; }} className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-10 rounded-full transition-colors shadow-lg shadow-purple-500/25">
                                                    立即預約專人訪談
                                                </button>
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}
