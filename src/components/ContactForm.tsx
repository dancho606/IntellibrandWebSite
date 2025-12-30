import { useState } from 'react';
import { X, Send, Loader2, CheckCircle } from 'lucide-react';

interface ContactFormProps {
    onClose: () => void;
    scriptUrl?: string; // Google Apps Script URL
}

interface FormData {
    name: string;
    phone: string;
    email: string;
    lineId: string;
    service: string;
    budget: string;
    timeline: string;
    requirements: string;
}

export default function ContactForm({ onClose, scriptUrl }: ContactFormProps) {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        phone: '',
        email: '',
        lineId: '',
        service: '',
        budget: '',
        timeline: '',
        requirements: ''
    });

    const [errors, setErrors] = useState<Partial<FormData>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    // 驗證表單
    const validateForm = (): boolean => {
        const newErrors: Partial<FormData> = {};

        if (!formData.name.trim()) {
            newErrors.name = '請輸入姓名或公司名稱';
        }

        if (!formData.phone.trim()) {
            newErrors.phone = '請輸入聯絡電話';
        } else if (!/^09\d{8}$/.test(formData.phone.replace(/[-\s]/g, ''))) {
            newErrors.phone = '請輸入有效的手機號碼';
        }

        if (!formData.email.trim()) {
            newErrors.email = '請輸入 Email';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = '請輸入有效的 Email 地址';
        }

        if (!formData.service) {
            newErrors.service = '請選擇需要的服務';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 處理表單提交
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // 如果沒有提供 scriptUrl，使用測試模式
            if (!scriptUrl) {
                console.log('表單資料（測試模式）：', formData);
                await new Promise(resolve => setTimeout(resolve, 1500)); // 模擬網路延遲
                setSubmitStatus('success');
                setTimeout(() => {
                    onClose();
                }, 2000);
                return;
            }

            // 送出到 Google Apps Script
            await fetch(scriptUrl, {
                method: 'POST',
                mode: 'no-cors', // Google Apps Script 需要
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            // no-cors 模式下無法讀取 response，所以假設成功
            setSubmitStatus('success');

            // 2 秒後關閉表單
            setTimeout(() => {
                onClose();
            }, 2000);

        } catch (error) {
            console.error('表單提交失敗：', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    // 處理輸入變化
    const handleChange = (field: keyof FormData, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
        // 清除該欄位的錯誤
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    // 成功提交的 UI
    if (submitStatus === 'success') {
        return (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in">
                <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fade-in-up text-center">
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">送出成功！</h3>
                    <p className="text-gray-600 mb-4">
                        感謝您的諮詢，我們會盡快與您聯繫。
                    </p>
                    <p className="text-sm text-gray-500">
                        請留意您的 Email 或電話，我們將在 24 小時內回覆。
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in overflow-y-auto">
            <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full my-8 relative animate-fade-in-up">
                {/* 關閉按鈕 */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 p-2 rounded-full hover:bg-gray-100 transition-colors"
                    aria-label="關閉"
                >
                    <X className="w-6 h-6 text-gray-500" />
                </button>

                {/* 表單標題 */}
                <div className="p-6 border-b border-gray-200">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900">預約免費諮詢</h2>
                    <p className="text-gray-600 mt-2">填寫表單，我們將在 24 小時內與您聯繫</p>
                </div>

                {/* 表單內容 */}
                <form onSubmit={handleSubmit} className="p-6 space-y-5">
                    {/* 姓名/公司 */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            姓名 / 公司名稱 <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => handleChange('name', e.target.value)}
                            placeholder="例如：王先生 / ABC 科技"
                            className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                        />
                        {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* 電話和 Email 並排 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* 聯絡電話 */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                聯絡電話 <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="tel"
                                value={formData.phone}
                                onChange={(e) => handleChange('phone', e.target.value)}
                                placeholder="0912-345-678"
                                className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                            />
                            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Email <span className="text-red-500">*</span>
                            </label>
                            <input
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleChange('email', e.target.value)}
                                placeholder="example@company.com"
                                className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'
                                    } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                            />
                            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                        </div>
                    </div>

                    {/* LINE ID */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            LINE ID <span className="text-gray-400 text-xs">(選填)</span>
                        </label>
                        <input
                            type="text"
                            value={formData.lineId}
                            onChange={(e) => handleChange('lineId', e.target.value)}
                            placeholder="方便我們快速與您聯繫"
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        />
                    </div>

                    {/* 需要的服務 */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            需要的服務 <span className="text-red-500">*</span>
                        </label>
                        <select
                            value={formData.service}
                            onChange={(e) => handleChange('service', e.target.value)}
                            className={`w-full px-4 py-3 rounded-lg border ${errors.service ? 'border-red-500' : 'border-gray-300'
                                } focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all`}
                        >
                            <option value="">請選擇服務項目</option>
                            <option value="品牌網站設計">品牌網站設計</option>
                            <option value="電商平台開發">電商平台開發</option>
                            <option value="AI 行銷整合">AI 行銷整合</option>
                            <option value="社群內容代操">社群內容代操</option>
                            <option value="數位替身製作">數位替身製作</option>
                            <option value="其他">其他（請在需求說明中註明）</option>
                        </select>
                        {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service}</p>}
                    </div>

                    {/* 預算和時程並排 */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* 預算範圍 */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                專案預算範圍 <span className="text-gray-400 text-xs">(選填)</span>
                            </label>
                            <select
                                value={formData.budget}
                                onChange={(e) => handleChange('budget', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            >
                                <option value="">請選擇</option>
                                <option value="20萬以下">20 萬以下</option>
                                <option value="20-50萬">20-50 萬</option>
                                <option value="50-100萬">50-100 萬</option>
                                <option value="100萬以上">100 萬以上</option>
                                <option value="尚未確定">尚未確定</option>
                            </select>
                        </div>

                        {/* 希望完成時間 */}
                        <div>
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                希望完成時間 <span className="text-gray-400 text-xs">(選填)</span>
                            </label>
                            <select
                                value={formData.timeline}
                                onChange={(e) => handleChange('timeline', e.target.value)}
                                className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            >
                                <option value="">請選擇</option>
                                <option value="1個月內（急件）">1 個月內（急件）</option>
                                <option value="2-3個月">2-3 個月</option>
                                <option value="3個月以上">3 個月以上</option>
                                <option value="尚未確定">尚未確定</option>
                            </select>
                        </div>
                    </div>

                    {/* 需求說明 */}
                    <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">
                            需求說明 <span className="text-gray-400 text-xs">(選填)</span>
                        </label>
                        <textarea
                            value={formData.requirements}
                            onChange={(e) => handleChange('requirements', e.target.value)}
                            placeholder="簡單描述您希望達成的目標..."
                            rows={4}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                        />
                    </div>

                    {/* 錯誤訊息 */}
                    {submitStatus === 'error' && (
                        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                            <p className="text-red-600 text-sm">
                                送出失敗，請稍後再試或直接聯繫我們。
                            </p>
                        </div>
                    )}

                    {/* 提交按鈕 */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 rounded-lg border-2 border-gray-300 text-gray-700 font-semibold hover:bg-gray-50 transition-all"
                            disabled={isSubmitting}
                        >
                            取消
                        </button>
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 px-6 py-3 rounded-lg bg-gradient-to-r from-[#2563eb] to-[#06b6d4] text-white font-bold hover:shadow-xl hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                        >
                            {isSubmitting ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    送出中...
                                </>
                            ) : (
                                <>
                                    <Send className="w-5 h-5" />
                                    送出諮詢
                                </>
                            )}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
