// 定價方案數據配置
export interface PricingPlan {
    id: string;
    name: string;
    tagline: string;
    setupFee: number | string;
    annualFee: number | string;
    totalFirstYear: number | string;
    isRecommended?: boolean;
    specialBadge?: string;
    isCustomPrice?: boolean;
    deliveryTime: string;
    icon: string;
    gradient: string;
    features: {
        title: string;
        items: string[];
    }[];
    annualIncludes: string[];
    addOns?: string[];
}

export const pricingPlans: PricingPlan[] = [
    {
        id: "starter",
        name: "AI 極速入門",
        tagline: "適合個人品牌、名片型官網",
        setupFee: 8888,
        annualFee: 9888,
        totalFirstYear: 18776, // 8888 + 9888
        deliveryTime: "3 個工作天",
        icon: "🚀",
        gradient: "from-blue-500 to-cyan-500",
        features: [
            {
                title: "核心功能",
                items: [
                    "單頁式設計 (5 大區塊)",
                    "靜態網頁部署 (Static Deployment)",
                    "自動化 SSL 安全憑證",
                    "專業託管服務 (無後台)",
                    "基礎 SEO 設定",
                    "社群連結整合"
                ]
            }
        ],
        annualIncludes: [
            "年費包含：主機託管 + SSL憑證 + 網域",
            "基礎維護服務"
        ]
    },
    {
        id: "brand",
        name: "AI 品牌形象",
        tagline: "適合中小企業、形象展示",
        setupFee: 28000,
        annualFee: 12000,
        totalFirstYear: 40000,
        deliveryTime: "5 個工作天",
        icon: "✨",
        gradient: "from-purple-500 to-pink-500",
        features: [
            {
                title: "核心功能",
                items: [
                    "3-5 頁標準頁面設計",
                    "高速雲端架構 (High-speed Cloud)",
                    "自動化 SSL 安全憑證",
                    "專業託管服務 (無後台)",
                    "進階動態視覺效果",
                    "RWD 響應式設計"
                ]
            }
        ],
        annualIncludes: [
            "年費包含：高速雲端主機 + SSL + CDN",
            "每月一次內容微調"
        ]
    },
    {
        id: "growth",
        name: "AI 智能生長",
        tagline: "企業數位轉型首選推薦",
        setupFee: "58,000+",
        annualFee: 18000,
        totalFirstYear: "76,000+",
        deliveryTime: "10-14 個工作天",
        isRecommended: true,
        icon: "🌟",
        gradient: "from-amber-400 to-orange-500",
        features: [
            {
                title: "核心功能",
                items: [
                    "5-10 頁動態頁面設計",
                    "智能雲端後台 CMS (Smart Cloud Backend)",
                    "AIO (AI 搜尋引擎優化)",
                    "n8n 自動化流程介面整合",
                    "部落格/最新消息功能",
                    "進階數據分析追蹤"
                ]
            }
        ],
        annualIncludes: [
            "年費包含：CMS 雲端主機 + 進階 SSL",
            "每季 SEO 效能檢視",
            "自動化行銷工具維護"
        ]
    },
    {
        id: "flagship",
        name: "AI 全案旗艦",
        tagline: "大型企業、複雜系統客製",
        setupFee: "150,000+",
        annualFee: "客製化報價",
        totalFirstYear: "客製化報價",
        isCustomPrice: true,
        deliveryTime: "21+ 個工作天",
        icon: "💎",
        gradient: "from-slate-700 to-slate-900",
        features: [
            {
                title: "核心功能",
                items: [
                    "全客製化 UI/UX 體驗設計",
                    "深度 AI 工作流整合 (Deep AI Workflow)",
                    "完全客製化後台系統",
                    "AI 視覺資產生成 (Visual Assets)",
                    "會員系統/購物車整合",
                    "API 串接開發"
                ]
            }
        ],
        annualIncludes: [
            "專屬伺服器架構規劃",
            "24/7 優先技術支援",
            "專案經理一對一服務"
        ]
    }
];

// 方案比較數據 (更新為 4 欄)
export interface ComparisonRow {
    feature: string;
    starter: string | boolean;
    brand: string | boolean;
    growth: string | boolean;
    flagship: string | boolean;
}

export const comparisonData: ComparisonRow[] = [
    { feature: "建置費用", starter: "NT$ 8,888", brand: "NT$ 28,000", growth: "NT$ 58,000+", flagship: "NT$ 150,000+" },
    { feature: "年度維護費", starter: "NT$ 9,888", brand: "NT$ 12,000", growth: "NT$ 18,000", flagship: "客製報價" },
    { feature: "交付時間", starter: "3 工作天", brand: "5 工作天", growth: "10-14 工作天", flagship: "21+ 工作天" },
    { feature: "頁面數量", starter: "1 頁 (5區塊)", brand: "3-5 頁", growth: "5-10 頁", flagship: "客製化" },
    { feature: "內容管理後台 (CMS)", starter: false, brand: false, growth: true, flagship: true },
    { feature: "自動化 SSL", starter: true, brand: true, growth: true, flagship: true },
    { feature: "AI 搜尋優化 (AIO)", starter: false, brand: false, growth: true, flagship: true },
    { feature: "n8n 自動化整合", starter: false, brand: false, growth: true, flagship: true },
    { feature: "AI 視覺生成", starter: false, brand: false, growth: false, flagship: true },
    { feature: "客製化 UI/UX", starter: "模板", brand: "標準", growth: "動態設計", flagship: "全客製" }
];

// 加購服務 (更新)
export interface AddOnService {
    category: string;
    icon: string;
    items: {
        name: string;
        price: string;
    }[];
}

export const addOnServices: AddOnService[] = [
    {
        category: "生長模組 (Growth Modules)",
        icon: "🚀",
        items: [
            { name: "Smart Cloud Backend (CMS 後台)", price: "+NT$ 15,000" },
            { name: "AI Growth Engine (自動化內容引擎)", price: "+NT$ 20,000" },
            { name: "Multi-language AI Support (多語系)", price: "+NT$ 10,000" },
            { name: "E-commerce & Payment (電商金流)", price: "專案報價" }
        ]
    }
];
