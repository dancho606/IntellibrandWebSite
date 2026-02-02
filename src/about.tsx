import { useEffect } from 'react';
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
                    <a href="#home" className="inline-flex items-center text-slate-400 hover:text-white transition-colors font-medium cursor-pointer bg-white/5 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md">
                        <ArrowLeft className="w-4 h-4 mr-2" />
                        返回首頁
                    </a>
                </div>

                {/* 2. 標題與願景區塊 */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20 relative">
                    <div className="z-10">
                        <div className="inline-flex items-center px-4 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-widest mb-6 border border-blue-500/20 backdrop-blur-md">
                            OUR VISION
                        </div>
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-8 font-display leading-[1.1]" style={{ textShadow: '0 0 30px rgba(37,99,235,0.3)' }}>
                            匯聚跨領域菁英<br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">打造最強 AI 戰隊</span>
                        </h1>
                        <p className="text-lg text-slate-400 mb-8 leading-relaxed font-medium">
                            智賦 AI (IntelliBrand) 由來自科技、商業管理與高端社群的領袖共同創立。我們深信，真正的 AI 轉型不僅需要強大的技術底層，更需要精準的商業策略與細緻的服務體驗。
                        </p>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl">
                            <p className="text-lg text-slate-300 leading-relaxed italic">
                                「我們的團隊結合了 AI 技術落地能力、國際視野與豐富的產業資源，致力於成為企業數位升級最可靠的夥伴。」
                            </p>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-cyan-400 rounded-3xl transform rotate-3 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity duration-700"></div>
                        <div className="relative rounded-3xl overflow-hidden border border-white/20 shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                alt="Team working together"
                                className="w-full h-auto object-cover transform transition-transform duration-1000 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                        </div>
                    </div>
                </div>

                {/* 3. 核心團隊介紹 (Core Team) */}
                <div className="mb-24 relative">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold text-white mb-4 font-display">核心領導團隊</h2>
                        <div className="w-16 h-1.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto rounded-full"></div>
                        <p className="mt-6 text-slate-400 font-medium">結合技術實力與商業洞察的黃金陣容</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {teamMembers.map((member, index) => (
                            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 flex flex-col group shadow-2xl">
                                {/* 照片區 */}
                                <div className="h-96 overflow-hidden relative">
                                    <img
                                        src={member.img}
                                        alt={member.name}
                                        className="w-full h-full object-cover object-top transition-transform duration-1000 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-80"></div>
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="px-3 py-1 bg-blue-500/80 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-widest">{member.role}</span>
                                        </div>
                                        <h3 className="text-3xl font-black font-display tracking-tight text-white drop-shadow-lg">{member.name}</h3>
                                    </div>
                                </div>

                                {/* 經歷/介紹區 */}
                                <div className="p-8 flex-1 flex flex-col bg-slate-900/40">
                                    {member.titles ? (
                                        <ul className="space-y-4">
                                            {member.titles.map((title, i) => (
                                                <li key={i} className="flex items-start text-slate-300 group/item">
                                                    <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:bg-blue-500/40 transition-colors">
                                                        <Briefcase className="w-3 h-3 text-blue-400" />
                                                    </div>
                                                    <span className="text-sm font-medium leading-relaxed">{title}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    ) : (
                                        <div className="p-4 bg-white/5 rounded-2xl border border-white/10">
                                            <p className="text-slate-300 text-sm leading-relaxed flex items-start">
                                                <Star className="w-4 h-4 text-yellow-400 mt-0.5 mr-3 flex-shrink-0 animate-pulse" />
                                                {member.desc}
                                            </p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 4. 核心數據 (Stats) */}
                <div className="bg-white/5 backdrop-blur-2xl rounded-[40px] p-12 border border-white/20 mb-20 shadow-2xl relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-12 text-center divide-x divide-white/10 relative z-10">
                        <div className="px-4">
                            <div className="text-5xl font-black text-white mb-2 font-display tabular-nums">98%</div>
                            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">客戶滿意度</div>
                        </div>
                        <div className="px-4">
                            <div className="text-5xl font-black text-white mb-2 font-display tabular-nums">3+</div>
                            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">跨國產業經驗</div>
                        </div>
                        <div className="px-4">
                            <div className="text-5xl font-black text-white mb-2 font-display tabular-nums">10x</div>
                            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">效率提升</div>
                        </div>
                        <div className="px-4">
                            <div className="text-5xl font-black text-white mb-2 font-display tabular-nums">15+</div>
                            <div className="text-blue-400 text-xs font-bold uppercase tracking-widest">年資歷總和</div>
                        </div>
                    </div>
                </div>

                {/* 5. CTA 底部呼籲 */}
                <div className="bg-gradient-to-br from-slate-900 to-blue-900 rounded-[40px] p-16 text-center text-white relative overflow-hidden border border-white/10 shadow-2xl">
                    <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full filter blur-[120px] opacity-20 -translate-y-1/2 translate-x-1/2"></div>
                    <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full filter blur-[120px] opacity-10 translate-y-1/2 -translate-x-1/2"></div>
                    <div className="relative z-10">
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 font-display">準備好與專業團隊合作了嗎？</h2>
                        <p className="text-slate-400 mb-10 max-w-2xl mx-auto text-lg font-medium">
                            無論您是新創公司還是大型企業，我們都能為您量身打造最合適的 AI 轉型方案。
                        </p>
                        <a href="#contact" className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-lg hover:shadow-[0_0_40px_rgba(37,99,235,0.4)] transition-all duration-300 hover:-translate-y-1 active:scale-95">
                            <Zap className="w-6 h-6 mr-3 text-yellow-300 fill-current group-hover:scale-125 transition-transform" />
                            預約免費諮詢
                        </a>
                    </div>
                </div>

            </div>
        </div>
    );
}