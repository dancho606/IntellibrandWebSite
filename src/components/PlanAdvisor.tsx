import { useState } from 'react';
import { ArrowRight, ArrowLeft, Check, X } from 'lucide-react';

interface Question {
    id: string;
    title: string;
    subtitle?: string;
    options: {
        icon: string;
        label: string;
        value: string;
        description?: string;
    }[];
}

export default function PlanAdvisor({ onClose }: { onClose: () => void }) {
    const [currentStep, setCurrentStep] = useState(0);
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [recommendation, setRecommendation] = useState<string | null>(null);

    const questions: Question[] = [
        {
            id: 'purpose',
            title: '網站主要用途',
            subtitle: '請選擇最符合您需求的類型',
            options: [
                { icon: '🏢', label: '形象官網', value: 'branding', description: '展示公司/個人品牌' },
                { icon: '🛒', label: '電商平台', value: 'ecommerce', description: '販售商品服務' },
                { icon: '💼', label: '客製需求', value: 'custom', description: '特殊功能開發' }
            ]
        },
        {
            id: 'pages',
            title: '預計頁面數量',
            subtitle: '大約需要多少個頁面？',
            options: [
                { icon: '📄', label: '5 頁以下', value: 'small', description: '簡單介紹' },
                { icon: '📚', label: '5-12 頁', value: 'medium', description: '完整內容' },
                { icon: '📖', label: '12 頁以上', value: 'large', description: '豐富資訊' }
            ]
        },
        {
            id: 'cart',
            title: '購物功能需求',
            subtitle: '是否需要線上購物功能？',
            options: [
                { icon: '✅', label: '需要', value: 'yes', description: '線上販售商品' },
                { icon: '❌', label: '不需要', value: 'no', description: '純展示用途' }
            ]
        },
        {
            id: 'budget',
            title: '預算範圍',
            subtitle: '您的預算大約是多少？',
            options: [
                { icon: '💰', label: '2 萬以下', value: 'low' },
                { icon: '💵', label: '2-8 萬', value: 'medium' },
                { icon: '💎', label: '8 萬以上', value: 'high' },
                { icon: '🤝', label: '依需求討論', value: 'custom' }
            ]
        }
    ];

    const getRecommendation = (answers: Record<string, string>): string => {
        const { purpose, pages, cart, budget } = answers;

        if (purpose === 'ecommerce' || cart === 'yes') {
            if (budget === 'high') return 'flagship';
            return 'ecommerce';
        }

        if (purpose === 'custom' || budget === 'custom') {
            return 'custom';
        }

        if (purpose === 'branding') {
            if (budget === 'low' || pages === 'small') return 'starter';
            if (pages === 'medium' || budget === 'medium') return 'brand';
        }

        return 'brand';
    };

    const planDetails: Record<string, { name: string; price: string; highlights: string[] }> = {
        starter: {
            name: '入門快速版',
            price: 'NT$ 14,800',
            highlights: ['7-10 天快速交付', '適合剛創業', 'RWD響應式設計']
        },
        brand: {
            name: '品牌形象版',
            price: 'NT$ 50,000',
            highlights: ['半客製化設計', '品牌視覺整合', '完整SEO優化']
        },
        ecommerce: {
            name: '電商標準版',
            price: 'NT$ 77,400',
            highlights: ['完整購物車', '金流物流串接', '訂單管理系統']
        },
        flagship: {
            name: '電商旗艦版',
            price: 'NT$ 152,000',
            highlights: ['全客製UI/UX', '會員分級系統', '進階行銷功能']
        },
        custom: {
            name: '客製專案',
            price: '專案討論',
            highlights: ['完全客製化', '企業級開發', '專案經理服務']
        }
    };

    const handleSelect = (value: string) => {
        const newAnswers = { ...answers, [questions[currentStep].id]: value };
        setAnswers(newAnswers);

        if (currentStep < questions.length - 1) {
            setTimeout(() => setCurrentStep(currentStep + 1), 300);
        } else {
            const recommendedPlan = getRecommendation(newAnswers);
            setRecommendation(recommendedPlan);
        }
    };

    const goBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
            setRecommendation(null);
        }
    };

    const restart = () => {
        setCurrentStep(0);
        setAnswers({});
        setRecommendation(null);
    };

    const scrollToRecommendedPlan = () => {
        onClose();
        setTimeout(() => {
            const planElement = document.getElementById(recommendation || '');
            if (planElement) {
                planElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }, 300);
    };

    const progress = ((currentStep + 1) / questions.length) * 100;

    return (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-hidden flex flex-col shadow-2xl">
                {/* Header */}
                <div className="p-6 border-b border-slate-200">
                    <div className="flex justify-between items-center mb-4">
                        <div>
                            <h3 className="font-display text-2xl font-bold text-slate-900">方案選擇精靈</h3>
                            <p className="text-sm text-slate-500 mt-1">4 個問題，找到最適合您的方案</p>
                        </div>
                        <button
                            onClick={onClose}
                            className="text-slate-400 hover:text-slate-600 transition-colors"
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    {!recommendation && (
                        <div className="relative">
                            <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-gradient-to-r from-[#2563eb] to-[#06b6d4] transition-all duration-500"
                                    style={{ width: `${progress}%` }}
                                ></div>
                            </div>
                            <p className="text-xs text-slate-500 mt-2 text-center">
                                步驟 {currentStep + 1} / {questions.length}
                            </p>
                        </div>
                    )}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-8">
                    {recommendation ? (
                        // Recommendation Result
                        <div className="text-center animate-fade-in-up">
                            <div className="w-20 h-20 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Check className="w-10 h-10 text-white" />
                            </div>
                            <h4 className="text-3xl font-bold text-slate-900 mb-3">為您推薦</h4>
                            <h5 className="text-4xl font-display font-bold text-gradient mb-2">
                                {planDetails[recommendation].name}
                            </h5>
                            <p className="text-2xl font-bold text-slate-600 mb-8">
                                首年總計 {planDetails[recommendation].price}
                            </p>

                            <div className="bg-slate-50 rounded-xl p-6 mb-8 text-left">
                                <h6 className="font-bold text-slate-900 mb-4">方案特色：</h6>
                                <ul className="space-y-3">
                                    {planDetails[recommendation].highlights.map((highlight, idx) => (
                                        <li key={idx} className="flex items-center gap-3 text-slate-700">
                                            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                                                <Check className="w-4 h-4 text-green-600" />
                                            </div>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={scrollToRecommendedPlan}
                                    className="flex-1 py-4 bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white rounded-xl font-bold hover:shadow-lg transition-all"
                                >
                                    查看方案詳情
                                </button>
                                <button
                                    onClick={restart}
                                    className="px-6 py-4 bg-slate-100 text-slate-700 rounded-xl font-semibold hover:bg-slate-200 transition-all"
                                >
                                    重新選擇
                                </button>
                            </div>
                        </div>
                    ) : (
                        // Question
                        <div className="animate-fade-in-up">
                            <h4 className="text-2xl font-bold text-slate-900 mb-2">{questions[currentStep].title}</h4>
                            {questions[currentStep].subtitle && (
                                <p className="text-slate-500 mb-8">{questions[currentStep].subtitle}</p>
                            )}

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                {questions[currentStep].options.map((option, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => handleSelect(option.value)}
                                        className={`p-6 rounded-xl border-2 transition-all hover:border-[#2563eb] hover:bg-blue-50 hover:shadow-lg group ${answers[questions[currentStep].id] === option.value
                                                ? 'border-[#2563eb] bg-blue-50'
                                                : 'border-slate-200 bg-white'
                                            }`}
                                    >
                                        <div className="text-4xl mb-3">{option.icon}</div>
                                        <h5 className="font-bold text-slate-900 mb-1 group-hover:text-[#2563eb]">{option.label}</h5>
                                        {option.description && (
                                            <p className="text-sm text-slate-500">{option.description}</p>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                {/* Footer */}
                {!recommendation && (
                    <div className="p-6 border-t border-slate-200 bg-slate-50">
                        <div className="flex justify-between">
                            <button
                                onClick={goBack}
                                disabled={currentStep === 0}
                                className="px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-white transition-all disabled:opacity-40 disabled:cursor-not-allowed flex items-center gap-2"
                            >
                                <ArrowLeft className="w-4 h-4" />
                                上一步
                            </button>
                            <button
                                onClick={onClose}
                                className="px-6 py-3 text-slate-600 font-semibold rounded-lg hover:bg-white transition-all"
                            >
                                稍後決定
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}
