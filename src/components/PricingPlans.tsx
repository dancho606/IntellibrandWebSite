import { useState } from 'react';
import { Check, X, ArrowRight, Sparkles, ArrowLeft, Zap, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingPlans, addOnServices, comparisonData } from '../data/pricingData';
import PlanAdvisor from './PlanAdvisor';
import ContactForm from './ContactForm';

// Assets
// @ts-ignore
import heroBg from '../assets/hero-pricing-bg.png';
// @ts-ignore
import iconStarter from '../assets/icon-starter.png';
// @ts-ignore
import iconBrand from '../assets/icon-brand.png';
// @ts-ignore
import iconGrowth from '../assets/icon-growth.png';
// @ts-ignore
import iconFlagship from '../assets/icon-flagship.png';

const planIcons: { [key: string]: string } = {
    starter: iconStarter,
    brand: iconBrand,
    growth: iconGrowth,
    flagship: iconFlagship,
    custom: iconFlagship
};

export default function PricingPlans() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showComparisonTable, setShowComparisonTable] = useState(false);
    const [showPlanAdvisor, setShowPlanAdvisor] = useState(false);

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-900 relative overflow-hidden font-sans text-slate-900 selection:bg-blue-500/30">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src={heroBg}
                    alt="Background"
                    className="w-full h-full object-cover opacity-60 mix-blend-normal"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/90 via-slate-900/40 to-slate-50"></div>
                {/* Overlay gradient to fade bottom into white for content readability if needed, or keep dark */}
            </div>

            {/* 返回按鈕 */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8 relative z-10">
                <Link
                    to="/service/website"
                    className="text-slate-400 hover:text-white flex items-center gap-2 transition-colors group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> 返回 AI 網站建置
                </Link>
            </div>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-24 relative z-10">
                <div className="text-center animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6 shadow-[0_0_15px_rgba(37,99,235,0.3)]">
                        <Sparkles className="w-4 h-4 mr-2 text-blue-400" />
                        AI Digital Transformation
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-7xl font-bold mb-6 text-white leading-tight drop-shadow-2xl">
                        智賦AI (IntelliBrand)<br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-cyan-200 to-purple-200" style={{ textShadow: '0 0 30px rgba(6,182,212,0.3)' }}>
                            讓品牌在 AI 時代自動生長
                        </span>
                    </h1>

                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light tracking-wide">
                        領先市場的 AI 網頁開發技術，打造 <strong className="text-white font-semibold">24/7 自動化獲客系統</strong>。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
                        <button
                            onClick={() => {
                                const element = document.getElementById('pricing-grid');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-blue-600 text-white rounded-full font-bold text-lg hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.5)] hover:shadow-[0_0_30px_rgba(37,99,235,0.7)] hover:-translate-y-1"
                        >
                            查看方案
                        </button>
                        <button
                            onClick={() => setShowContactForm(true)}
                            className="px-8 py-4 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all shadow-lg hover:shadow-white/10 active:scale-95"
                        >
                            立即諮詢
                        </button>
                    </div>

                    {/* AI Advisor Link */}
                    <div className="mt-8">
                        <button
                            onClick={() => setShowPlanAdvisor(true)}
                            className="text-blue-300 hover:text-blue-100 font-medium text-sm flex items-center gap-2 mx-auto transition-colors group"
                        >
                            <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                            不知道如何選擇？由 AI 顧問為您推薦
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>

            {/* AI Plan Advisor Modal */}
            {showPlanAdvisor && <PlanAdvisor onClose={() => setShowPlanAdvisor(false)} />}

            {/* Pricing Cards Grid */}
            <section id="pricing-grid" className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/60 hover:shadow-2xl hover:bg-white/90 hover:border-white transition-all duration-500 overflow-hidden flex flex-col group ${plan.isRecommended ? 'ring-4 ring-blue-500/20 scale-[1.02] z-10 shadow-blue-900/20' : ''
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Recommended Badge */}
                            {plan.isRecommended && (
                                <div className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white text-center py-2 text-sm font-bold uppercase tracking-wider shadow-md">
                                    <Sparkles className="w-4 h-4 inline-block mr-1 mb-0.5" />
                                    Most Popular
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="p-6 lg:p-8 flex flex-col flex-1">
                                {/* Icon Image */}
                                <div className="mb-6 relative h-32 w-32 mx-auto">
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-purple-400/30 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                                    <img
                                        src={planIcons[plan.id] || planIcons['custom']}
                                        alt={plan.name}
                                        className="w-full h-full object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.15)] transform group-hover:scale-110 group-hover:-translate-y-2 transition-transform duration-500 relative z-10"
                                    />
                                </div>

                                {/* Header */}
                                <div className="mb-6 text-center">
                                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-sm text-slate-600 min-h-[40px] font-medium leading-relaxed">{plan.tagline}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-6 text-center">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-3xl font-bold text-slate-900 tracking-tight">
                                            {typeof plan.setupFee === 'number' ? `NT$ ${plan.setupFee.toLocaleString()}` : plan.setupFee}
                                        </span>
                                    </div>
                                    <div className="text-sm text-slate-500 mt-1 font-medium">
                                        年費: {typeof plan.annualFee === 'number' ? `NT$ ${plan.annualFee.toLocaleString()}` : plan.annualFee}
                                    </div>
                                    <div className="inline-flex mt-3 px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full border border-blue-100">
                                        交付: {plan.deliveryTime}
                                    </div>
                                </div>

                                <hr className="border-slate-200/60 mb-6" />

                                {/* Features List */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features[0].items.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3 group/item">
                                            <div className={`mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${plan.isRecommended ? 'bg-blue-100 text-blue-600 group-hover/item:bg-blue-500 group-hover/item:text-white' : 'bg-slate-100 text-slate-500 group-hover/item:bg-slate-800 group-hover/item:text-white'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm text-slate-700 leading-tight font-medium group-hover/item:text-slate-900 transition-colors">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 shadow-lg ${plan.isRecommended
                                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 text-white hover:shadow-blue-500/40 hover:-translate-y-1 hover:brightness-110'
                                        : 'bg-slate-900 text-white hover:bg-slate-800 hover:-translate-y-1 hover:shadow-slate-900/30'
                                        }`}
                                >
                                    選擇此方案
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Growth Modules (Add-ons) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative z-10 animate-fade-in-up">
                <div className="bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-xl border border-white/60 p-8 lg:p-12 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-orange-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
                    <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

                    <div className="text-center mb-10 relative z-10">
                        <div className="inline-block p-3 rounded-2xl bg-orange-100 text-orange-600 mb-4 shadow-inner">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h2 className="font-display text-3xl font-bold mb-4 text-slate-900">
                            Growth Modules (加購選項)
                        </h2>
                        <p className="text-slate-600 font-medium">為您的網站注入更多 AI 動能</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
                        {addOnServices[0].items.map((item, idx) => (
                            <div key={idx} className="bg-white/60 rounded-2xl p-6 border border-slate-200 hover:border-blue-400 hover:bg-white hover:shadow-lg transition-all duration-300 group cursor-default backdrop-blur-sm">
                                <h4 className="font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">{item.name}</h4>
                                <div className="text-blue-600 font-bold text-lg">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Button */}
            <div className="text-center mb-24 relative z-10">
                <button
                    onClick={() => setShowComparisonTable(true)}
                    className="text-slate-500 hover:text-slate-900 font-medium underline underline-offset-4 decoration-2 decoration-blue-200 hover:decoration-blue-500 transition-all text-lg"
                >
                    查看完整規格比較表
                </button>
            </div>

            {/* Why Us Section (Technical Highlights) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Why Us? 技術亮點
                    </h2>
                    <p className="text-slate-600 font-medium">我們不只是製作網頁，而是打造您的 AI 數位資產</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Highlight 1 */}
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/50 text-center hover:-translate-y-2 transition-transform duration-300 group hover:shadow-2xl">
                        <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600 group-hover:scale-110 transition-transform duration-300 shadow-inner group-hover:bg-blue-100">
                            <Search className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">AIO (Answer Engine Optimization)</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                            我們不只做 SEO，更針對 <strong>Perplexity, Gemini, SearchGPT</strong> 進行優化，確保 AI 搜尋引擎能優先推薦您的品牌。
                        </p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/50 text-center hover:-translate-y-2 transition-transform duration-300 group hover:shadow-2xl">
                        <div className="w-20 h-20 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600 group-hover:scale-110 transition-transform duration-300 shadow-inner group-hover:bg-green-100">
                            <Shield className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-green-600 transition-colors">Automated SSL</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                            採用 2026 Cloud-native 自動化技術。<strong>無需手動續約</strong>，全方案標準配備，確保資料傳輸絕對安全。
                        </p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="bg-white/80 backdrop-blur-xl p-8 rounded-[2rem] shadow-lg border border-white/50 text-center hover:-translate-y-2 transition-transform duration-300 group hover:shadow-2xl">
                        <div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600 group-hover:scale-110 transition-transform duration-300 shadow-inner group-hover:bg-purple-100">
                            <Zap className="w-10 h-10" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-purple-600 transition-colors">Fastest Delivery</h3>
                        <p className="text-slate-600 leading-relaxed text-sm font-medium">
                            運用 <strong>Antigravity AI 工具鏈</strong>，將數週的傳統開發時程縮短至數天，讓您快速搶佔市場先機。
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Table Modal */}
            {showComparisonTable && (
                <div className="fixed inset-0 bg-slate-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in">
                    <div className="bg-white rounded-[2rem] max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl animate-scale-up">
                        {/* Header */}
                        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                            <h3 className="font-display text-2xl font-bold text-slate-900 flex items-center gap-2">
                                <Sparkles className="w-5 h-5 text-blue-500" />
                                方案詳細比較表
                            </h3>
                            <button
                                onClick={() => setShowComparisonTable(false)}
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors hover:rotate-90 duration-300"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Table */}
                        <div className="p-0 overflow-auto flex-1 custom-scrollbar">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-6 font-bold text-slate-500 sticky left-0 bg-slate-50 z-10 w-1/5 shadow-[2px_0_5px_rgba(0,0,0,0.05)]">功能項目</th>
                                        <th className="p-6 font-bold text-slate-900 w-1/5">AI 極速入門</th>
                                        <th className="p-6 font-bold text-slate-900 w-1/5">AI 品牌形象</th>
                                        <th className="p-6 font-bold text-[#2563eb] w-1/5 bg-blue-50/50">AI 智能生長 ⭐</th>
                                        <th className="p-6 font-bold text-slate-900 w-1/5">AI 全案旗艦</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {comparisonData.map((row, index) => (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors group">
                                            <td className="p-6 font-medium text-slate-700 sticky left-0 bg-white z-10 border-r border-slate-100 shadow-[2px_0_5px_rgba(0,0,0,0.05)] group-hover:bg-slate-50 transition-colors">{row.feature}</td>
                                            <td className="p-6 text-slate-600">
                                                {typeof row.starter === 'boolean' ? (row.starter ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-slate-300" />) : row.starter}
                                            </td>
                                            <td className="p-6 text-slate-600">
                                                {typeof row.brand === 'boolean' ? (row.brand ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-slate-300" />) : row.brand}
                                            </td>
                                            <td className="p-6 text-slate-900 font-semibold bg-blue-50/30">
                                                {typeof row.growth === 'boolean' ? (row.growth ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-slate-300" />) : row.growth}
                                            </td>
                                            <td className="p-6 text-slate-600">
                                                {typeof row.flagship === 'boolean' ? (row.flagship ? <Check className="w-5 h-5 text-green-500" /> : <X className="w-5 h-5 text-slate-300" />) : row.flagship}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            )}

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
