import { useState } from 'react';
import { Check, X, ArrowRight, Sparkles, ArrowLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { pricingPlans, addOnServices, comparisonData } from '../data/pricingData';
import PlanAdvisor from './PlanAdvisor';
import ContactForm from './ContactForm';

export default function PricingPlans() {
    const [showContactForm, setShowContactForm] = useState(false);
    const [showComparisonTable, setShowComparisonTable] = useState(false);
    const [showPlanAdvisor, setShowPlanAdvisor] = useState(false);
    const [expandedFeatures, setExpandedFeatures] = useState<{ [key: string]: boolean }>({});

    const toggleFeatures = (planId: string) => {
        setExpandedFeatures(prev => ({
            ...prev,
            [planId]: !prev[planId]
        }));
    };

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gradient-to-b from-slate-50 to-white">
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
                        AI 網站建置方案
                    </div>

                    <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-slate-900">
                        選擇最適合您的
                        <span className="block mt-2 text-gradient">網站建置方案</span>
                    </h1>

                    {/* Text removed as requested */}

                    {/* AI Advisor Button */}
                    <div className="mt-8">
                        <button
                            onClick={() => setShowPlanAdvisor(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <Sparkles className="w-5 h-5" />
                            不知道選哪個？幫您找到最適合的方案！
                            <ArrowRight className="w-5 h-5" />
                        </button>
                        <p className="text-sm text-slate-500 mt-3">透過 4 個簡單問題，快速篩選方案</p>
                    </div>
                </div>
            </section>

            {/* AI Plan Advisor Modal */}
            {showPlanAdvisor && <PlanAdvisor onClose={() => setShowPlanAdvisor(false)} />}

            {/* Pricing Cards Grid */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8">
                    {pricingPlans.map((plan, index) => (
                        <div
                            key={plan.id}
                            className={`relative bg-white rounded-2xl md:rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden card-3d animate-fade-in-up flex flex-col ${plan.isRecommended ? 'ring-4 ring-[#2563eb]/20 lg:scale-105' : ''
                                }`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Recommended Badge */}
                            {plan.isRecommended && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white px-4 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-1 z-10">
                                    <Sparkles className="w-3 h-3" />
                                    熱門推薦
                                </div>
                            )}

                            {/* Special Badge */}
                            {plan.specialBadge && (
                                <div className="absolute top-0 right-0 bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-2 rounded-bl-2xl text-xs font-bold uppercase tracking-wider flex items-center gap-1 z-10">
                                    <Sparkles className="w-3 h-3" />
                                    {plan.specialBadge}
                                </div>
                            )}

                            {/* Card Content */}
                            <div className="p-6 md:p-8 flex flex-col flex-1">
                                {/* Icon */}
                                <div className="text-5xl mb-4">{plan.icon}</div>

                                {/* Plan Name */}
                                <h3 className="font-display text-2xl font-bold mb-2 text-slate-900">
                                    {plan.name}
                                </h3>

                                {/* Tagline */}
                                <p className="text-sm text-slate-600 mb-6 min-h-[40px]">
                                    {plan.tagline}
                                </p>

                                {/* Pricing Box */}
                                <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-5 mb-6 border border-slate-200">
                                    {plan.isCustomPrice ? (
                                        <div className="text-center py-4">
                                            <div className="text-2xl font-bold text-slate-900 mb-2">
                                                {plan.totalFirstYear}
                                            </div>
                                            <div className="text-sm text-slate-600">
                                                歡迎諮詢專案需求
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="space-y-2">
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-slate-600">建置費：</span>
                                                <span className="font-bold text-slate-900">
                                                    NT$ {typeof plan.setupFee === 'number' ? plan.setupFee.toLocaleString() : plan.setupFee} 起
                                                </span>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <span className="text-sm text-slate-600">年費：</span>
                                                <span className="font-bold text-green-600">
                                                    NT$ {typeof plan.annualFee === 'number' ? plan.annualFee.toLocaleString() : plan.annualFee} /年
                                                </span>
                                            </div>
                                            <div className="border-t border-slate-300 pt-2 mt-2">
                                                <div className="flex justify-between items-center">
                                                    <span className="text-sm font-semibold text-slate-700">首年總計：</span>
                                                    <span className={`font-bold text-xl bg-gradient-to-r ${plan.gradient} bg-clip-text text-transparent`}>
                                                        NT$ {typeof plan.totalFirstYear === 'number' ? plan.totalFirstYear.toLocaleString() : plan.totalFirstYear} 起
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>

                                {/* Delivery Time */}
                                <div className="flex items-center gap-2 text-sm text-slate-600 mb-6">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                    交付時間：{plan.deliveryTime}
                                </div>

                                {/* Features List - Expandable */}
                                <div className="space-y-3 mb-auto">
                                    {plan.features[0].items.slice(0, 6).map((feature, idx) => (
                                        <div key={idx} className="flex items-start gap-2">
                                            <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-sm text-slate-700">{feature}</span>
                                        </div>
                                    ))}

                                    {/* Expandable Additional Features */}
                                    {plan.features[0].items.length > 6 && (
                                        <>
                                            {expandedFeatures[plan.id] && plan.features[0].items.slice(6).map((feature, idx) => (
                                                <div key={`extra-${idx}`} className="flex items-start gap-2">
                                                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                    <span className="text-sm text-slate-700">{feature}</span>
                                                </div>
                                            ))}
                                            <button
                                                onClick={() => toggleFeatures(plan.id)}
                                                className="text-xs text-[#2563eb] hover:text-[#1e40af] font-semibold pl-7 flex items-center gap-1 transition-colors"
                                            >
                                                {expandedFeatures[plan.id] ? (
                                                    <>收起 <ChevronUp className="w-3 h-3" /></>
                                                ) : (
                                                    <>+ 其他 {plan.features[0].items.length - 6} 項功能 <ChevronDown className="w-3 h-3" /></>
                                                )}
                                            </button>
                                        </>
                                    )}
                                </div>

                                {/* CTA Button - Aligned at bottom */}
                                <button
                                    onClick={() => setShowContactForm(true)}
                                    className={`w-full py-3 rounded-full font-bold text-white transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:scale-95 bg-gradient-to-r ${plan.gradient} mt-6`}
                                >
                                    立即諮詢
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Comparison Button Section */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="text-center">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-slate-900">
                        方案詳細比較
                    </h2>
                    <p className="text-slate-600 mb-8">點擊查看完整方案比較表</p>
                    <button
                        onClick={() => setShowComparisonTable(true)}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                        </svg>
                        查看完整比較表
                    </button>
                </div>
            </section>

            {/* Comparison Table Modal */}
            {showComparisonTable && (
                <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col my-8">
                        {/* Modal Header */}
                        <div className="p-6 border-b border-slate-200 flex justify-between items-center bg-gradient-to-r from-slate-900 to-slate-800">
                            <h3 className="font-display text-2xl font-bold text-white">方案完整比較</h3>
                            <button
                                onClick={() => setShowComparisonTable(false)}
                                className="text-slate-300 hover:text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Content - Scrollable Table */}
                        <div className="p-6 overflow-auto flex-1">
                            <div className="overflow-x-auto">
                                <table className="w-full">
                                    <thead>
                                        <tr className="bg-gradient-to-r from-slate-900 to-slate-800 text-white">
                                            <th className="px-6 py-4 text-left font-bold sticky left-0 bg-slate-900">項目</th>
                                            <th className="px-6 py-4 text-center font-bold whitespace-nowrap">入門快速版</th>
                                            <th className="px-6 py-4 text-center font-bold bg-[#2563eb] whitespace-nowrap">品牌形象版 ⭐</th>
                                            <th className="px-6 py-4 text-center font-bold whitespace-nowrap">電商標準版</th>
                                            <th className="px-6 py-4 text-center font-bold whitespace-nowrap">電商旗艦版</th>
                                            <th className="px-6 py-4 text-center font-bold whitespace-nowrap">客製專案</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {comparisonData.map((row, index) => (
                                            <tr
                                                key={index}
                                                className={index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}
                                            >
                                                <td className="px-6 py-4 font-semibold text-slate-900 whitespace-nowrap sticky left-0 bg-inherit">
                                                    {row.feature}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {typeof row.starter === 'boolean' ? (
                                                        row.starter ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                        ) : (
                                                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                                                        )
                                                    ) : (
                                                        <span className="text-slate-700">{row.starter}</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-center bg-blue-50/50">
                                                    {typeof row.brand === 'boolean' ? (
                                                        row.brand ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                        ) : (
                                                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                                                        )
                                                    ) : (
                                                        <span className="text-slate-700 font-medium">{row.brand}</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {typeof row.ecommerce === 'boolean' ? (
                                                        row.ecommerce ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                        ) : (
                                                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                                                        )
                                                    ) : (
                                                        <span className="text-slate-700">{row.ecommerce}</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    {typeof row.flagship === 'boolean' ? (
                                                        row.flagship ? (
                                                            <Check className="w-5 h-5 text-green-500 mx-auto" />
                                                        ) : (
                                                            <X className="w-5 h-5 text-slate-300 mx-auto" />
                                                        )
                                                    ) : (
                                                        <span className="text-slate-700">{row.flagship}</span>
                                                    )}
                                                </td>
                                                <td className="px-6 py-4 text-center">
                                                    <span className="text-slate-600 text-sm">依需求</span>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Add-On Services */}
            <section className="max-w-7xl mx-auto px-6 lg:px-8 mb-24">
                <div className="text-center mb-12 animate-fade-in-up">
                    <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-slate-900">
                        加購服務選項
                    </h2>
                    <p className="text-slate-600">靈活搭配，打造專屬解決方案</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {addOnServices.map((category, index) => (
                        <div
                            key={index}
                            className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300 card-3d animate-fade-in-up border border-slate-100"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="text-5xl mb-4">{category.icon}</div>
                            <h3 className="font-display text-2xl font-bold mb-6 text-slate-900">
                                {category.category}
                            </h3>
                            <ul className="space-y-4">
                                {category.items.map((item, idx) => (
                                    <li key={idx} className="flex justify-between items-start gap-4">
                                        <span className="text-slate-700 text-sm">{item.name}</span>
                                        <span className="text-[#2563eb] font-bold text-sm whitespace-nowrap">
                                            {item.price}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA Section */}
            <section className="max-w-4xl mx-auto px-6 lg:px-8 mb-16">
                <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 rounded-3xl p-12 md:p-16 text-center text-white relative overflow-hidden shadow-2xl">
                    {/* Background Decoration */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[100px] opacity-20"></div>
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-600 rounded-full filter blur-[100px] opacity-20"></div>

                    <div className="relative z-10">
                        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
                            還在猶豫選擇哪個方案？
                        </h2>
                        <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                            預約免費諮詢，讓我們的專業團隊為您量身推薦最適合的解決方案
                        </p>
                        <button
                            onClick={() => setShowContactForm(true)}
                            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
                        >
                            立即預約諮詢
                            <ArrowRight className="w-5 h-5" />
                        </button>

                        {/* Trust Badges */}
                        <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm opacity-70">
                            <div>✓ 專業團隊</div>
                            <div>✓ 透明報價</div>
                            <div>✓ 準時交付</div>
                        </div>
                    </div>
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
