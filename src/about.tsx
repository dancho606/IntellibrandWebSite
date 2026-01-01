import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Zap, Briefcase, Star } from 'lucide-react';

export default function About() {
    // 進入頁面時自動捲動到最上方
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    // 定義團隊成員資料
    const teamMembers = [
        {
            name: "卓垣甫 / Dan",
            role: "創始人",
            img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // 之後請換成 Dan 的照片
            titles: [
                "策美國際有限公司 AI 技術總監",
                "永育國際股份有限公司 總經理",
                "健康美補給站 董事"
            ],
            highlight: true
        },
        {
            name: "李英子 / Queena",
            role: "創始股東",
            img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // 之後請換成 Queena 的照片
            titles: [
                "策美國際有限公司 董事長/CEO",
                "溯光細胞抗衰品牌 主理人",
                "GLink 高爾夫社交平台 創辦人",
                "LadyG 女子高爾夫球隊 創會會長"
            ],
            highlight: true
        },
        {
            name: "黃素怡 / Sue",
            role: "客戶成功經理",
            img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80", // 之後請換成 Sue 的照片
            desc: "專精於客戶關係管理與專案執行，確保每個客戶都能獲得最佳的服務體驗與成果。",
            highlight: false
        }
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-slate-50 font-sans text-slate-900">
            <div className="max-w-7xl mx-auto px-6 lg:px-8">

                {/* 1. 麵包屑導航 (返回按鈕) */}
                <div className="mb-8">
                    <Link to="/" className="inline-flex items-center text-slate-500 hover:text-[#2563eb] transition-colors font-medium cursor-pointer">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        返回首頁
                    </Link>
                </div>

                {/* 2. 標題與願景區塊 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
                    <div>
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-[#2563eb] text-xs font-bold uppercase tracking-wider mb-6">
                            Our Vision
                        </div>
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 font-sans leading-tight">
                            匯聚跨領域菁英<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#2563eb] to-[#06b6d4]">打造最強 AI 戰隊</span>
                        </h1>
                        <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                            智賦 AI (IntelliBrand) 由來自科技、商業管理與高端社群的領袖共同創立。我們深信，真正的 AI 轉型不僅需要強大的技術底層，更需要精準的商業策略與細緻的服務體驗。
                        </p>
                        <p className="text-lg text-slate-600 leading-relaxed">
                            我們的團隊結合了 AI 技術落地能力、國際視野與豐富的產業資源，致力於成為企業數位升級最可靠的夥伴。
                        </p>
                    </div>
                    <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-2xl transform rotate-3 opacity-20 blur-lg"></div>
                        <img
                            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                            alt="Team working together"
                            className="relative rounded-2xl shadow-2xl border border-white/50 w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* 3. 核心團隊介紹 (Core Team) */}
                <div className="mb-24">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">核心領導團隊</h2>
                        <div className="w-16 h-1 bg-[#2563eb] mx-auto rounded-full"></div>
                        <p className="mt-4 text-slate-500">結合技術實力與商業洞察的黃金陣容</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col group">
                                {/* 照片區 */}
                                <div className="h-80 overflow-hidden relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent opacity-60"></div>
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <p className="text-sm font-medium opacity-90 uppercase tracking-widest mb-1 bg-[#2563eb]/90 inline-block px-2 py-0.5 rounded">{member.role}</p>
                                        <h3 className="text-2xl font-bold">{member.name}</h3>
                                    </div>
                                </div>

                                {/* 經歷/介紹區 */}
                                <div className="p-8 flex-1 flex flex-col bg-white">
                                    {member.titles ? (
                                        <ul className="space-y-3">
                                            {member.titles.map((title, i) => (
                                                <li key={i} className="flex items-start text-slate-600">
                                                    <Briefcase className="w-4 h-4 text-[#2563eb] mt-1 mr-3 flex-shrink-0" />
                                                    <span className="text-sm font-medium leading-relaxed">{title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <p className="text-slate-600 text-sm leading-relaxed flex items-start">
                                            <Star className="w-4 h-4 text-yellow-500 mt-1 mr-3 flex-shrink-0" />
                                            {member.desc}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. 核心數據 (Stats) */}
                <div className="bg-white rounded-3xl p-10 shadow-xl border border-slate-100 mb-20">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-slate-100">
                        <div>
                            <div className="text-4xl font-bold text-[#2563eb] mb-2">98%</div>
                            <div className="text-slate-500 text-sm font-medium">客戶滿意度</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#2563eb] mb-2">3+</div>
                            <div className="text-slate-500 text-sm font-medium">跨國產業經驗</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#2563eb] mb-2">10x</div>
                            <div className="text-slate-500 text-sm font-medium">效率提升</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-[#2563eb] mb-2">15+</div>
                            <div className="text-slate-500 text-sm font-medium">年資歷總和</div>
                        </div>
                    </div>
                </div>

                {/* 5. CTA 底部呼籲 */}
                <div className="bg-slate-900 rounded-3xl p-12 text-center text-white relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full filter blur-[80px] opacity-30"></div>
                    <div className="relative z-10">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">準備好與專業團隊合作了嗎？</h2>
                        <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
                            無論您是新創公司還是大型企業，我們都能為您量身打造最合適的 AI 轉型方案。
                        </p>
                        <Link to="/#contact" className="inline-flex items-center justify-center px-8 py-3 bg-white text-slate-900 rounded-full font-bold hover:bg-blue-50 transition-colors cursor-pointer">
                            <Zap className="w-5 h-5 mr-2 text-yellow-500 fill-current" /> 預約免費諮詢
                        </Link>
                    </div>
                </div>

            </div>
        </div>
    );
}