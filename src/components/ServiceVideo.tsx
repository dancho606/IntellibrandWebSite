import { useState } from 'react';
import {
    ArrowLeft, Play, Zap, MessageSquare, Check, Clock, RefreshCw
} from 'lucide-react';
import ContactForm from './ContactForm';
import {
    portfolioVideos,
    videoPlans,
    subscriptionPlans,
    addOnServices,
    valueComparison,
    faqData,
    productionSteps,
    whyAIVideo
} from '../data/videoServiceData';
import { siteConfig } from '../data/config';

export default function ServiceVideo() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [activeTab, setActiveTab] = useState<'plans' | 'addons' | 'subscription'>('plans');

    return (
        <div className="pt-20 min-h-screen bg-slate-900 text-white selection:bg-purple-500 selection:text-white">
            {/* 1. Hero Section */}
            <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 z-0"></div>
                <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }}></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                    <a href="#home" className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-4 h-4 mr-2" /> 返回首頁
                    </a>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight animate-fade-in-up">
                        不出鏡，也能做影片行銷<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">省時又省錢</span>
                    </h1>

                    <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                        不用請演員、攝影師、剪輯師。傳統製作成本的 <span className="text-yellow-300 font-bold">1/5</span>，速度快 <span className="text-cyan-300 font-bold">6 倍</span>。
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <button
                            onClick={() => setShowContactForm(true)}
                            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105 active:scale-95"
                        >
                            立即預約諮詢
                        </button>
                        <a href="#gallery" className="px-8 py-4 bg-white/10 border border-white/20 text-white rounded-full font-bold hover:bg-white/20 transition-all backdrop-blur-md flex items-center justify-center gap-2">
                            <Play className="w-4 h-4 fill-current" /> 觀看範例
                        </a>
                    </div>

                    {/* 限時優惠提示 */}
                    <div className="mt-12 inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-full backdrop-blur-md animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                        <Zap className="w-5 h-5 text-yellow-400 fill-current animate-pulse" />
                        <span className="text-yellow-300 font-bold">限時優惠 8 折！限量 30 名，售完恢復原價</span>
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
                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">{video.title}</h3>
                                    <p className="text-sm text-slate-400">{video.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why AI Video? */}
            <section className="py-24 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">為什麼選擇 AI 影片製作？</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {whyAIVideo.map((item, index) => (
                            <div key={index} className="relative group">
                                <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl blur-xl transition-opacity`}></div>

                                <div className="relative bg-slate-800 p-6 rounded-2xl border border-slate-700 hover:border-slate-600 transition-all h-full">
                                    <div className="text-5xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                                    <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Value Comparison Table */}
            <section className="py-24 bg-slate-900">
                <div className="max-w-6xl mx-auto px-6 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">傳統拍攝 vs AI 製作</h2>
                        <p className="text-slate-400">以 1 分鐘影片為例</p>
                    </div>

                    <div className="bg-slate-800/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-slate-700 shadow-2xl mb-12">
                        <div className="overflow-x-auto">
                            <table className="w-full">
                                <thead>
                                    <tr className="bg-slate-900/50 border-b border-slate-700">
                                        <th className="p-6 text-left text-slate-400 font-bold">項目</th>
                                        <th className="p-6 text-center text-slate-400 font-bold">傳統製作</th>
                                        <th className="p-6 text-center text-purple-400 font-bold text-lg">智賦 AI 方案</th>
                                        <th className="p-6 text-right text-green-400 font-bold">您節省</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {valueComparison.map((row, idx) => (
                                        <tr key={idx} className="border-b border-slate-700/50 hover:bg-white/5 transition-colors">
                                            <td className="p-6 font-semibold text-slate-300">{row.item}</td>
                                            <td className="p-6 text-center text-slate-500">{row.traditional}</td>
                                            <td className="p-6 text-center text-purple-300 font-bold text-lg">{row.ai}</td>
                                            <td className="p-6 text-right text-green-400 font-bold">{row.savings}</td>
                                        </tr>
                                    ))}
                                    <tr className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 border-t-2 border-purple-500">
                                        <td className="p-6 font-bold text-white text-lg">總成本 & 時間</td>
                                        <td className="p-6 text-center">
                                            <div className="text-slate-300 font-bold text-xl">NT$ 40,000+</div>
                                            <div className="text-sm text-slate-500 mt-1">3-4 週</div>
                                        </td>
                                        <td className="p-6 text-center">
                                            <div className="text-purple-300 font-bold text-2xl">NT$ 5,800</div>
                                            <div className="text-sm text-purple-400 mt-1">3-5 天</div>
                                            <div className="text-xs text-yellow-400 mt-1">(限時優惠 NT$ 4,640)</div>
                                        </td>
                                        <td className="p-6 text-right">
                                            <div className="text-green-400 font-bold text-2xl">省 85%</div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>

                    <div className="text-center">
                        <button
                            onClick={() => setShowContactForm(true)}
                            className="px-10 py-4 bg-gradient-to-r from-green-500 to-emerald-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-green-500/50 transition-all hover:scale-105"
                        >
                            💰 立即省下 NT$ 35,000+
                        </button>
                    </div>
                </div>
            </section>

            {/* 5. Pricing Plans */}
            <section className="py-24 bg-slate-800/50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">方案與價格</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full mb-4"></div>
                        <p className="text-slate-400">選擇最適合您的方案，立即開始</p>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center gap-4 mb-12">
                        <button
                            onClick={() => setActiveTab('plans')}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'plans'
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                        >
                            📦 基礎方案
                        </button>
                        <button
                            onClick={() => setActiveTab('subscription')}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'subscription'
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                        >
                            🔄 訂閱制
                        </button>
                        <button
                            onClick={() => setActiveTab('addons')}
                            className={`px-6 py-3 rounded-full font-bold transition-all ${activeTab === 'addons'
                                ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                                : 'bg-slate-800 text-slate-400 hover:text-white'
                                }`}
                        >
                            🛒 加購服務
                        </button>
                    </div>

                    {/* 基礎方案 */}
                    {activeTab === 'plans' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {videoPlans.map((plan, idx) => (
                                <div
                                    key={plan.id}
                                    className={`relative rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 bg-slate-900/60 backdrop-blur-xl border border-white/10 shadow-2xl ${plan.isPopular ? 'ring-2 ring-purple-500 ring-offset-4 ring-offset-slate-900 shadow-purple-500/20' : ''
                                        }`}
                                    style={{ animationDelay: `${idx * 0.1}s` }}
                                >
                                    {/* Top Accent Bar */}
                                    <div className={`h-1.5 w-full bg-gradient-to-r ${plan.gradient}`} />

                                    {/* Icon & Popular Tag */}
                                    <div className="p-8 pb-4 flex justify-between items-start">
                                        <div className="p-3 bg-white/5 rounded-2xl border border-white/10 shadow-inner group-hover:scale-110 transition-transform">
                                            {siteConfig.uiSettings?.videoPlans?.useIcons3d && plan.icon3d ? (
                                                <img src={plan.icon3d} alt={plan.name} className="w-12 h-12 object-contain drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]" />
                                            ) : (
                                                <span className="text-3xl">{plan.icon}</span>
                                            )}
                                        </div>
                                        {plan.isPopular && (
                                            <span className="px-3 py-1 bg-purple-500 text-white text-[10px] font-bold rounded-full uppercase tracking-widest shadow-lg shadow-purple-500/40">
                                                最熱門
                                            </span>
                                        )}
                                    </div>

                                    {/* Content Area */}
                                    <div className="px-8 pb-8">
                                        <h3 className="text-2xl font-bold text-white mb-1 font-display">{plan.name}</h3>
                                        <p className="text-slate-400 text-sm mb-6">{plan.subtitle}</p>

                                        {/* Price Area */}
                                        <div className="mb-6 pb-6 border-b border-white/10">
                                            <div className="mb-3 text-slate-500 text-xs">正式定價 NT$ {plan.originalPrice.toLocaleString()}</div>
                                            <div className="flex items-baseline justify-center gap-2">
                                                <span className="text-sm text-purple-400">限時特約價 NT$</span>
                                                <span className="text-4xl font-black text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.5)]">
                                                    {(plan.originalPrice * (1 - (plan.limitedTimeDiscount || 0) / 100)).toLocaleString()}
                                                </span>
                                            </div>
                                        </div>

                                        {/* Features List */}
                                        <ul className="space-y-4 mb-8">
                                            {plan.features.map((feature, fIdx) => (
                                                <li key={fIdx} className="flex items-start gap-3">
                                                    <div className="mt-1 w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                                                        <Check className="w-3 h-3 text-purple-400" />
                                                    </div>
                                                    <span className="text-slate-300 text-sm leading-relaxed">{feature}</span>
                                                </li>
                                            ))}
                                        </ul>

                                        {/* CTA Button */}
                                        <button
                                            onClick={() => setShowContactForm(true)}
                                            className={`w-full py-4 rounded-2xl font-bold transition-all duration-300 active:scale-95 shadow-xl ${plan.isPopular
                                                ? 'bg-gradient-to-r from-purple-600 to-pink-500 text-white hover:shadow-purple-500/30'
                                                : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                                                }`}
                                        >
                                            立即預約製作
                                        </button>
                                    </div>

                                    <div className="flex items-center justify-center gap-4 text-[10px] text-slate-500 pb-4">
                                        <div className="flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            <span>{plan.deliveryTime}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <RefreshCw className="w-3 h-3" />
                                            <span>{plan.freeRevisions} 次修改</span>
                                        </div>
                                    </div>
                                </div>
                            ))}

                        </div>
                    )}

                    {/* 訂閱制 */}
                    {activeTab === 'subscription' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {subscriptionPlans.map((plan) => (
                                <div
                                    key={plan.id}
                                    className={`relative bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border-2 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${plan.badge ? 'border-purple-500 shadow-purple-500/20' : 'border-slate-700 hover:border-slate-600'
                                        }`}
                                >
                                    {plan.badge && (
                                        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white text-xs font-bold rounded-full uppercase tracking-wider">
                                            {plan.badge}
                                        </div>
                                    )}

                                    <div className="text-center mb-6">
                                        <div className="text-5xl mb-4">{plan.icon}</div>
                                        <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>

                                        <div className="flex items-baseline justify-center gap-2 mb-4">
                                            <span className="text-sm text-slate-400">NT$</span>
                                            <span className={`text-4xl font-bold bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                                {plan.price.toLocaleString()}
                                            </span>
                                            <span className="text-sm text-slate-400">/ {plan.unit}</span>
                                        </div>
                                    </div>

                                    <ul className="space-y-3 mb-8">
                                        {plan.features.map((feature, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-300">
                                                <Check className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                                                <span>{feature}</span>
                                            </li>
                                        ))}
                                    </ul>

                                    <button
                                        onClick={() => setShowContactForm(true)}
                                        className={`w-full py-3 rounded-full font-bold transition-all bg-gradient-to-r ${plan.gradient} text-white hover:shadow-lg hover:shadow-purple-500/30`}
                                    >
                                        立即訂閱
                                    </button>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* 單獨加購 */}
                    {activeTab === 'addons' && (
                        <div className="max-w-5xl mx-auto space-y-8">
                            {addOnServices.map((category, categoryIdx) => (
                                <div key={categoryIdx} className="bg-slate-900/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
                                    <div className="flex items-center gap-3 mb-6">
                                        <span className="text-4xl">{category.icon}</span>
                                        <div>
                                            <h3 className="text-2xl font-bold">{category.category}</h3>
                                            {category.minimumOrderNote && (
                                                <p className="text-sm text-yellow-400 mt-1">{category.minimumOrderNote}</p>
                                            )}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {category.items.map((item, itemIdx) => (
                                            <div key={itemIdx} className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-all">
                                                <div className="flex justify-between items-start mb-2">
                                                    <h4 className="font-bold text-white">{item.name}</h4>
                                                    <span className="text-purple-400 font-bold whitespace-nowrap ml-4">
                                                        {item.price.startsWith('+') ? item.price : `NT$ ${item.price}`}
                                                        {item.unit && <span className="text-sm text-slate-400 ml-1">/ {item.unit}</span>}
                                                    </span>
                                                </div>
                                                {item.description && (
                                                    <p className="text-sm text-slate-400">{item.description}</p>
                                                )}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="text-center mt-8">
                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className="px-10 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-105"
                                >
                                    客製化組合報價
                                </button>
                            </div>
                        </div>
                    )}

                    <div className="mt-12 text-center">
                        <p className="text-slate-400 text-sm mb-2">
                            💡 所有方案皆含：MP4 高畫質輸出 / 版權歸屬客戶 / 免費雲端備份
                        </p>
                        <p className="text-yellow-400 text-sm font-bold">
                            🔥 限時優惠 8 折（限量 30 名）  ✓ 每方案含 3 次免費修改  ✓ 隨時可加購多語言版本
                        </p>
                    </div>
                </div>
            </section >

            {/* 6. Production Process */}
            < section className="py-24 bg-slate-900" >
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">製作流程</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500 -z-0 -translate-y-1/2 opacity-30"></div>

                        {productionSteps.map((item, index) => (
                            <div key={index} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold text-2xl flex items-center justify-center shadow-lg mb-4 border-4 border-slate-900">
                                    {item.icon}
                                </div>
                                <div className="text-xs font-bold text-purple-400 mb-2">{item.step}</div>
                                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                                <p className="text-sm text-slate-400">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* 7. FAQ */}
            < section className="py-24 bg-slate-800/50" >
                <div className="max-w-3xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4">常見問題</h2>
                        <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto rounded-full"></div>
                    </div>

                    <div className="space-y-6">
                        {faqData.map((faq, idx) => (
                            <div key={idx} className="bg-slate-900 rounded-xl p-6 border border-slate-700 hover:border-purple-500/50 transition-all">
                                <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                                    <MessageSquare className="w-5 h-5 text-purple-400 mt-1 flex-shrink-0" />
                                    {faq.question}
                                </h3>
                                <p className="text-slate-400 pl-8 leading-relaxed">{faq.answer}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section >

            {/* 8. CTA */}
            < section className="relative py-24 px-6 overflow-hidden" >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-900 to-indigo-900 z-0"></div>
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-pink-500/30 rounded-full blur-[150px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/30 rounded-full blur-[150px] animate-pulse" style={{ animationDelay: '1s' }}></div>
                </div>

                <div className="max-w-4xl mx-auto text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">準備好開始影片行銷了嗎？</h2>
                    <p className="text-xl text-purple-200 mb-10 max-w-2xl mx-auto">
                        限時優惠 8 折，限量 30 名！立即預約諮詢，把握優惠價格
                    </p>
                    <button
                        onClick={() => setShowContactForm(true)}
                        className="px-10 py-5 bg-white text-purple-900 rounded-full font-bold text-xl shadow-2xl hover:shadow-purple-500/20 hover:scale-105 transition-all flex items-center gap-2 mx-auto"
                    >
                        <Zap className="w-6 h-6 text-yellow-500 fill-current animate-pulse" />
                        免費諮詢 & 獲取報價
                    </button>

                    <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-purple-200/80">
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>限時優惠 8 折</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>免費修改到滿意</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-green-400" />
                            <span>客製化方案</span>
                        </div>
                    </div>
                </div>
            </section >

            {/* Contact Form Modal */}
            {
                showContactForm && (
                    <ContactForm
                        onClose={() => setShowContactForm(false)}
                        scriptUrl="https://script.google.com/macros/s/AKfycby4ODg5SvYnWNbg7r93-jMAZy0q_GXBFp1jA9sIzJkcvbHf9bIq3cicBB1UUYFbyG11/exec"
                    />
                )
            }
        </div >
    );
}
