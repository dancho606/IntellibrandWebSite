import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Play, Zap, TrendingUp, MonitorPlay, Sparkles, MessageSquare } from 'lucide-react';
import ContactForm from './ContactForm';

export default function ServiceVideo() {
    const [showContactForm, setShowContactForm] = useState(false);

    // 假資料：YouTube 影片 ID (請替換成您頻道的實際影片 ID)
    // 目前使用一些科技/AI相關的 Creative Commons 影片或通用的範例 ID
    const portfolioVideos = [
        { id: "dQw4w9WgXcQ", title: "AI 形象廣告範例", category: "形象廣告" }, // Rick Roll (Placeholder) - PLEASE REPLACE
        { id: "M7fi_IBhD9U", title: "產品介紹短片", category: "產品介紹" },     // Google Developers
        { id: "LXb3EKWsInQ", title: "虛擬人播報", category: "AI Avatar" }       // 4K Nature
    ];

    const features = [
        { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "極速產出", desc: "24 小時內完成高畫質影片，比傳統製程快 10 倍。" },
        { icon: <Sparkles className="w-6 h-6 text-purple-400" />, title: "AI 腳本生成", desc: "輸入關鍵字，AI 自動生成分鏡腳本與行銷文案。" },
        { icon: <MonitorPlay className="w-6 h-6 text-cyan-400" />, title: "虛擬主播", desc: "40+ 種多國語言虛擬主播，省去真人拍攝成本。" },
        { icon: <TrendingUp className="w-6 h-6 text-green-400" />, title: "數據驅動", desc: "根據熱門趨勢生成內容，提高觀看與互動率。" },
    ];

    return (
        <div className="pt-20 min-h-screen bg-slate-900 text-white selection:bg-purple-500 selection:text-white">
            {/* 1. Hero Section */}
            <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
                {/* 背景裝飾 */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 z-0"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <Link to="/" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> 返回首頁
                    </Link>

                    <div className="inline-flex items-center px-4 py-2 rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-300 text-sm font-bold uppercase tracking-wider mb-6 backdrop-blur-md animate-fade-in-up">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI Video Production Revolution
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                        影片製作，<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">從未如此簡單</span>
                    </h1>

                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        不需要百萬攝影棚，不需要專業演員。結合生成式 AI 技術，我們為您快速打造高品質行銷短影音，成本降低 90%。
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <button
                            onClick={() => setShowContactForm(true)}
                            className="px-8 py-4 bg-white text-purple-900 rounded-full font-bold hover:bg-slate-100 transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.3)]"
                        >
                            製作您的第一支 AI 影片
                        </button>
                        <a href="#gallery" className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-2">
                            <Play className="w-4 h-4 fill-current" /> 觀看範例
                        </a>
                    </div>
                </div>
            </section>

            {/* 2. Video Gallery (YouTube) */}
            <section id="gallery" className="py-24 bg-slate-900 relative">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">精選案例展示</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                        <p className="mt-4 text-slate-400">實際產出效果，畫質最高可達 4K</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portfolioVideos.map((video, index) => (
                            <div key={index} className="group relative rounded-2xl overflow-hidden bg-slate-800 border border-slate-700 shadow-2xl hover:border-purple-500/50 transition-all duration-300">
                                {/* 16:9 容器 */}
                                <div className="aspect-video w-full">
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={`https://www.youtube.com/embed/${video.id}?rel=0`}
                                        title={video.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                                <div className="p-6">
                                    <div className="flex justify-between items-center mb-2">
                                        <span className="text-xs font-bold text-purple-400 uppercase tracking-wider border border-purple-400/30 px-2 py-1 rounded">{video.category}</span>
                                    </div>
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">{video.title}</h3>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why AI Video? (Features) */}
            <section className="py-24 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-4xl font-bold mb-6">為什麼選擇 AI 影片製作？</h2>
                            <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                                在短影音時代，速度就是一切。傳統影片製作流程冗長且昂貴，無法滿足現代社群行銷的高頻次需求。智賦 AI 幫您打破這個困境。
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                {features.map((item, index) => (
                                    <div key={index} className="bg-slate-800 p-6 rounded-xl border border-slate-700 hover:bg-slate-700/80 transition-all">
                                        <div className="mb-4">{item.icon}</div>
                                        <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                        <p className="text-slate-400 text-sm">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl rotate-6 opacity-30 blur-lg"></div>
                            <img
                                src="https://images.unsplash.com/photo-1626544827763-d516dce335ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="AI Video Editor"
                                className="relative rounded-2xl shadow-2xl border border-slate-600 w-full"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Comparison Table */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-5xl mx-auto px-6 relative">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-purple-900/20 rounded-full blur-[100px]"></div>

                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">傳統拍攝 vs AI 製作</h2>
                        <p className="text-slate-400">數據不說謊，效益一目了然</p>
                    </div>

                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 shadow-2xl">
                        <div className="grid grid-cols-3 bg-slate-900/50 p-6 border-b border-slate-700 text-center font-bold text-lg">
                            <div className="text-slate-400">比較項目</div>
                            <div className="text-slate-400">傳統影片製作</div>
                            <div className="text-purple-400 text-xl">智賦 AI 製作</div>
                        </div>

                        {[
                            { item: "製作週期", old: "3 - 10 天", new: "12 - 24 小時" },
                            { item: "製作成本", old: "NT$ 30,000 起", new: "NT$ 2,800 起" },
                            { item: "修改彈性", old: "需重拍 / 難以修改", new: "隨時調整 / 一鍵生成" },
                            { item: "多語言版", old: "需重新配音", new: "AI 自動翻譯配音" },
                            { item: "適用場景", old: "年度形象片 / 電視廣告", new: "社群短影音 / 產品解說 / 全部" }
                        ].map((row, idx) => (
                            <div key={idx} className="grid grid-cols-3 p-6 border-b border-slate-700/50 items-center text-center hover:bg-white/5 transition-colors">
                                <div className="font-semibold text-slate-300">{row.item}</div>
                                <div className="text-slate-500">{row.old}</div>
                                <div className="text-purple-300 font-bold text-lg">{row.new}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4.5 Pricing Plans */}
            <section className="py-24 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">方案與價格</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
                        <p className="text-slate-400">依照專案需求，彈性選擇最適合的方案</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {[
                            {
                                name: "短影音快製",
                                price: "2,800",
                                duration: "15-30 秒",
                                icon: "⚡",
                                features: [
                                    "適合 IG Reels / TikTok",
                                    "AI 自動配音",
                                    "基礎字幕與特效",
                                    "1 次修改機會",
                                    "24 小時內交付"
                                ],
                                gradient: "from-blue-600 to-cyan-600",
                                popular: false
                            },
                            {
                                name: "產品介紹版",
                                price: "7,500",
                                duration: "1-2 分鐘",
                                icon: "🎬",
                                features: [
                                    "專業腳本撰寫",
                                    "虛擬主播口播",
                                    "進階動畫特效",
                                    "3 次修改機會",
                                    "48 小時內交付",
                                    "多平台格式輸出"
                                ],
                                gradient: "from-purple-600 to-pink-600",
                                popular: true
                            },
                            {
                                name: "品牌形象片",
                                price: "16,800",
                                duration: "3-5 分鐘",
                                icon: "🎥",
                                features: [
                                    "完整故事腳本",
                                    "高質感視覺設計",
                                    "專業配樂音效",
                                    "5 次修改機會",
                                    "7 個工作天交付",
                                    "含多語言字幕"
                                ],
                                gradient: "from-orange-600 to-red-600",
                                popular: false
                            },
                            {
                                name: "企業客製化",
                                price: "面議",
                                duration: "不限",
                                icon: "💎",
                                features: [
                                    "多集系列影片",
                                    "客製虛擬代言人",
                                    "多語言配音版本",
                                    "無限次修改",
                                    "專案經理 1 對 1",
                                    "長期合作優惠"
                                ],
                                gradient: "from-emerald-600 to-teal-600",
                                popular: false
                            }
                        ].map((plan, index) => (
                            <div
                                key={index}
                                className={`relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.popular ? 'border-purple-500 shadow-purple-500/20' : 'border-slate-700 hover:border-slate-600'
                                    }`}
                            >
                                {plan.popular && (
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                        最受歡迎
                                    </div>
                                )}

                                <div className="text-center mb-6">
                                    <div className="text-5xl mb-4">{plan.icon}</div>
                                    <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                                    <div className="text-slate-400 text-sm mb-4">{plan.duration}</div>
                                    <div className="flex items-baseline justify-center gap-2">
                                        <span className="text-sm text-slate-400">NT$</span>
                                        <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                            {plan.price}
                                        </span>
                                        {plan.price !== "面議" && <span className="text-sm text-slate-400">起</span>}
                                    </div>
                                </div>

                                <ul className="space-y-3 mb-8">
                                    {plan.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                            <span className="text-green-400 mt-0.5">✓</span>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>

                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className={`w-full py-3 rounded-full font-bold transition-all bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-purple-500/30`}
                                >
                                    立即諮詢
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-slate-400 text-sm">
                            💡 所有方案皆含：MP4 高畫質輸出 / 版權歸屬客戶 / 免費雲端備份
                        </p>
                    </div>
                </div>
            </section>

            {/* 5. Production Process Flow */}
            <section className="py-24 bg-slate-50 text-slate-900">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">製作流程</h2>
                        <div className="w-20 h-1.5 bg-purple-600 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-200 -z-0 -translate-y-1/2"></div>

                        {[
                            { step: "01", title: "需求溝通", desc: "確認風格與腳本方向" },
                            { step: "02", title: "AI 生成", desc: "腳本、分鏡、語音生成" },
                            { step: "03", title: "風格定調", desc: "確認視覺與聽覺細節" },
                            { step: "04", title: "後製優化", desc: "剪輯、特效與字幕" },
                            { step: "05", title: "交付成品", desc: "提供 MP4 / MOV 格式" }
                        ].map((item, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-16 h-16 rounded-full bg-white border-4 border-purple-600 text-purple-600 font-bold text-xl flex items-center justify-center shadow-lg mb-4">
                                    {item.step}
                                </div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. FAQ */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">常見問題</h2>
                    </div>

                    <div className="space-y-6">
                        {[
                            { q: "我完全沒有腳本，也可以製作嗎？", a: "沒問題！我們可以使用 AI 協助您從零開始發想創意、撰寫大綱與詳細分鏡腳本。" },
                            { q: "製作出來的影片版權歸誰？", a: "只要結案付清款項，影片的商業使用權完全歸您所有。" },
                            { q: "可以指定特定的虛擬主播形象嗎？", a: "可以。我們有豐富的虛擬人庫可供選擇，甚至可以客製化訓練專屬於您的企業形象分身（需額外專案報價）。" }
                        ].map((faq, idx) => (
                            <div key={idx} className="bg-slate-800 rounded-xl p-6 border border-slate-700">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                                    <MessageSquare className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                    {faq.q}
                                </h3>
                                <p className="text-slate-400 pl-8 leading-relaxed">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. CTA */}
            <section className="relative py-24 px-6 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 z-0"></div>
                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">準備好體驗 AI 影片的威力了嗎？</h2>
                    <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
                        流量變現的第一步，從一支吸睛的影片開始。立即諮詢，獲取專屬優惠方案。
                    </p>
                    <button
                        onClick={() => setShowContactForm(true)}
                        className="px-10 py-5 bg-white text-purple-900 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                    >
                        <Zap className="w-6 h-6 text-yellow-500 fill-current animate-pulse" />
                        免費領取影片腳本範例
                    </button>
                </div>
            </section>

            {/* Contact Form Modal */}
            {showContactForm && (
                <ContactForm
                    onClose={() => setShowContactForm(false)}
                    scriptUrl="https://script.google.com/macros/s/AKfycby4ODg5SvYnWNbg7r93-jMAZy0q_GXBFp1jA9sIzJkcvbHf9bIq3cicBB1UUYFbyG11/exec"
                />
            )}
        </div>
    );
}
