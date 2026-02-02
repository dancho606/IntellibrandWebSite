import { useState } from 'react';
import { Check, X, ArrowRight, Sparkles, ArrowLeft, Zap, Shield, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingPlans, addOnServices, comparisonData } from '../data/pricingData';
import PlanAdvisor from './PlanAdvisor';
import ContactForm from './ContactForm';

export default function PricingPlans() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showComparisonTable, setShowComparisonTable] = useState(false);
    const [showPlanAdvisor, setShowPlanAdvisor] = useState(false);

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-blue-50/50 to-transparent -z-10"></div>

            {/* 返回按鈕 */}
            <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-8">
                <Link
                    to="/service/website"
                    className="text-slate-500 hover:text-[#2563eb] flex items-center gap-2 transition-colors"
                >
                    <ArrowLeft className="w-4 h-4" /> 返回 AI 網站建置
                </Link>
            </div>

            {/* Hero Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-24">
                <div className="text-center animate-fade-in-up">
                    <div className="inline-flex items-center px-4 py-2 rounded-full glass-strong border border-slate-200 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-6">
                        <Sparkles className="w-4 h-4 mr-2" />
                        AI Digital Transformation
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                        智賦AI (IntelliBrand)<br />
                        <span className="text-gradient">讓您的品牌在 AI 時代自動生長</span>
                    </h1>

                    <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                        領先市場的 AI 網頁開發技術，打造 <span className="text-slate-900 font-bold">24/7 自動化獲客系統</span>。
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button
                            onClick={() => {
                                const element = document.getElementById('pricing-grid');
                                element?.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="px-8 py-4 bg-slate-900 text-white rounded-full font-bold text-lg hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl"
                        >
                            查看方案
                        </button>
                        <button
                            onClick={() => setShowContactForm(true)}
                            className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-full font-bold text-lg hover:bg-slate-50 transition-all shadow-sm hover:shadow-md"
                        >
                            立即諮詢
                        </button>
                    </div>

                    {/* AI Advisor Link */}
                    <div className="mt-6">
                        <button
                            onClick={() => setShowPlanAdvisor(true)}
                            className="text-[#2563eb] hover:text-[#1e40af] font-medium text-sm flex items-center gap-2 mx-auto transition-colors"
                        >
                            <Sparkles className="w-4 h-4" />
                            不知道如何選擇？由 AI 顧問為您推薦
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            </section>

            {/* AI Plan Advisor Modal */}
            {showPlanAdvisor && <PlanAdvisor onClose={() => setShowPlanAdvisor(false)} />}


            {/* Pricing Cards Grid */}
            <section id="pricing-grid" className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-6">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col ${plan.isRecommended ? 'ring-2 ring-[#2563eb] scale-[1.02] shadow-xl z-10' : ''
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Recommended Badge */}
                            {plan.isRecommended && (
                                <div className="bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white text-center py-2 text-sm font-bold uppercase tracking-wider">
                                    <Sparkles className="w-4 h-4 inline-block mr-1 mb-0.5" />
                                    Most Popular
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="p-6 lg:p-8 flex flex-col flex-1">
                                {/* Header */}
                                <div className="mb-6">
                                    <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                                    <p className="text-sm text-slate-500 min-h-[40px]">{plan.tagline}</p>
                                </div>

                                {/* Price */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-1">
                                        <span className="text-3xl font-bold text-slate-900">
                                            NT$ {typeof plan.setupFee === 'number' ? plan.setupFee.toLocaleString() : plan.setupFee}
                                        </span>
                                        {/* <span className="text-sm text-slate-500">/ 建置</span> */}
                                    </div>
                                    <div className="text-sm text-slate-500 mt-1">
                                        年費: NT$ {typeof plan.annualFee === 'number' ? plan.annualFee.toLocaleString() : plan.annualFee}
                                    </div>
                                    <div className="text-xs text-[#2563eb] font-semibold mt-2 bg-blue-50 inline-block px-2 py-1 rounded">
                                        交付時間: {plan.deliveryTime}
                                    </div>
                                </div>

                                <hr className="border-slate-100 mb-6" />

                                {/* Features List */}
                                <ul className="space-y-3 mb-8 flex-1">
                                    {plan.features[0].items.map((feature, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <div className={`mt-1 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.isRecommended ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 text-slate-500'}`}>
                                                <Check className="w-3 h-3" />
                                            </div>
                                            <span className="text-sm text-slate-700 leading-tight">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA Button */}
                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${plan.isRecommended
                                        ? 'bg-[#2563eb] text-white hover:bg-blue-700 shadow-lg hover:shadow-blue-500/30'
                                        : 'bg-slate-900 text-white hover:bg-slate-800'
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
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 lg:p-12">
                    <div className="text-center mb-10">
                        <h2 className="font-display text-3xl font-bold mb-4 text-slate-900">
                            Growth Modules (加購選項)
                        </h2>
                        <p className="text-slate-600">為您的網站注入更多 AI 動能</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {addOnServices[0].items.map((item, idx) => (
                            <div key={idx} className="bg-slate-50 rounded-2xl p-6 border border-slate-200 hover:border-blue-300 transition-colors">
                                <h4 className="font-bold text-slate-900 mb-2">{item.name}</h4>
                                <div className="text-[#2563eb] font-bold">{item.price}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Comparison Button */}
            <div className="text-center mb-24">
                <button
                    onClick={() => setShowComparisonTable(true)}
                    className="text-slate-500 hover:text-slate-900 font-medium underline underline-offset-4"
                >
                    查看完整規格比較表
                </button>
            </div>

            {/* Why Us Section (Technical Highlights) */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="text-center mb-16">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        Why Us? 技術亮點
                    </h2>
                    <p className="text-slate-600">我們不只是製作網頁，而是打造您的 AI 數位資產</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Highlight 1 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
                            <Search className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">AIO (Answer Engine Optimization)</h3>
                        <p className="text-slate-600 leading-relaxed">
                            我們不只做 SEO，更針對 <strong>Perplexity, Gemini, SearchGPT</strong> 進行優化，確保 AI 搜尋引擎能優先推薦您的品牌。
                        </p>
                    </div>

                    {/* Highlight 2 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-green-600">
                            <Shield className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Automated SSL</h3>
                        <p className="text-slate-600 leading-relaxed">
                            採用 2026 Cloud-native 自動化技術。<strong>無需手動續約</strong>，全方案標準配備，確保資料傳輸絕對安全。
                        </p>
                    </div>

                    {/* Highlight 3 */}
                    <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 text-center hover:-translate-y-1 transition-transform duration-300">
                        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-purple-600">
                            <Zap className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-4">Fastest Delivery</h3>
                        <p className="text-slate-600 leading-relaxed">
                            運用 <strong>Antigravity AI 工具鏈</strong>，將數週的傳統開發時程縮短至數天，讓您快速搶佔市場先機。
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Table Modal */}
            {showComparisonTable && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
                    <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                        {/* Header */}
                        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-slate-50">
                            <h3 className="font-display text-2xl font-bold text-slate-900">方案詳細比較表</h3>
                            <button
                                onClick={() => setShowComparisonTable(false)}
                                className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-slate-100 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>

                        {/* Table */}
                        <div className="p-0 overflow-auto flex-1">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-slate-50 border-b border-slate-200">
                                        <th className="p-6 font-bold text-slate-500 sticky left-0 bg-slate-50 z-10 w-1/5">功能項目</th>
                                        <th className="p-6 font-bold text-slate-900 w-1/5">AI 極速入門</th>
                                        <th className="p-6 font-bold text-slate-900 w-1/5">AI 品牌形象</th>
                                        <th className="p-6 font-bold text-[#2563eb] w-1/5 bg-blue-50/50">AI 智能生長 ⭐</th>
                                        <th className="p-6 font-bold text-slate-900 w-1/5">AI 全案旗艦</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {comparisonData.map((row, index) => (
                                        <tr key={index} className="hover:bg-slate-50/50 transition-colors">
                                            <td className="p-6 font-medium text-slate-700 sticky left-0 bg-white z-10 border-r border-slate-100 shadow-sm">{row.feature}</td>
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
