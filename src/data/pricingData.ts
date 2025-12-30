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
        name: "入門快速版",
        tagline: "適合：剛創業、個人工作室、小型企業官網",
        specialBadge: "超值入門",
        setupFee: 8800,
        annualFee: 6000,
        totalFirstYear: 14800,
        deliveryTime: "7-10 個工作天",
        icon: "🚀",
        gradient: "from-blue-500 to-cyan-500",
        features: [
            {
                title: "方案內容",
                items: [
                    "精選模板設計（5-8頁）",
                    "RWD響應式網頁",
                    "後台內容管理系統",
                    "13種常用功能模組",
                    "首頁區塊自由調整",
                    "SEO基礎架構設定",
                    "Google Analytics串接",
                    "7個工作天快速交付"
                ]
            }
        ],
        annualIncludes: [
            "年費包含：.com/.tw 網域 + 主機(5GB) + SSL憑證",
            "基礎服務：網站備份、基本維護",
            "技術支援：工作日 Email 支援",
            "更新服務：安全性更新、功能免費升級"
        ]
    },
    {
        id: "brand",
        name: "品牌形象版",
        tagline: "適合：重視品牌形象、成長中企業",
        setupFee: 44000,
        annualFee: 6000,
        totalFirstYear: 50000,
        isRecommended: true,
        deliveryTime: "4-5 週",
        icon: "⭐",
        gradient: "from-purple-500 to-pink-500",
        features: [
            {
                title: "方案內容",
                items: [
                    "半客製化設計（8-12頁）",
                    "品牌視覺整合（專屬色彩/字型）",
                    "首頁動態視效（輪播/影片背景）",
                    "全站客製化大圖設計",
                    "進階內容管理後台",
                    "多媒體管理系統",
                    "部落格/最新消息模組",
                    "完整授權圖庫",
                    "SEO進階優化 + 結構化資料",
                    "GA4 + GTM 設定",
                    "專人規劃諮詢服務"
                ]
            }
        ],
        annualIncludes: [
            "年費包含：網域 + 進階主機(20GB) + SSL + CDN加速",
            "進階服務：每月1次內容/圖片更新",
            "技術支援：優先處理（工作日 + 假日）",
            "數據報告：季度 SEO 效能分析報告",
            "特別服務：專人客服、品牌顧問諮詢"
        ]
    },
    {
        id: "ecommerce",
        name: "電商標準版",
        tagline: "適合：實體轉電商、小型網路商店",
        setupFee: 71400,
        annualFee: 6000,
        totalFirstYear: 77400,
        deliveryTime: "5-6 週",
        icon: "🛒",
        gradient: "from-orange-500 to-red-500",
        features: [
            {
                title: "方案內容",
                items: [
                    "電商模板設計（12-15頁）",
                    "完整購物車系統",
                    "商品管理後台（無限商品）",
                    "訂單管理系統",
                    "會員系統（註冊/登入/會員中心）",
                    "金流串接（綠界 ECPay）",
                    "物流串接（2選1）",
                    "庫存管理系統",
                    "折扣碼/優惠券功能",
                    "訂單狀態Email通知",
                    "Google Shopping 串接",
                    "FB像素追蹤設定"
                ]
            }
        ],
        annualIncludes: [
            "年費包含：網域 + 電商主機(50GB) + SSL憑證",
            "電商服務：金流/物流手續費優惠、商品上架協助",
            "技術支援：即時支援（含假日）、每月2次更新",
            "數據報告：每月交易數據分析 + 庫存報表",
            "行銷工具：Google/FB 追蹤碼維護"
        ],
        addOns: [
            "電子發票系統：+NT$ 12,000（架設）+ 年費 NT$ 3,600",
            "多金流整合（藍新）：+NT$ 8,000"
        ]
    },
    {
        id: "flagship",
        name: "電商旗艦版",
        tagline: "適合：成熟品牌、高客單價商品、進階功能需求",
        setupFee: 146000,
        annualFee: 6000,
        totalFirstYear: 152000,
        deliveryTime: "10-12 週",
        icon: "👑",
        gradient: "from-emerald-500 to-teal-500",
        features: [
            {
                title: "方案內容",
                items: [
                    "全客製化UI/UX設計",
                    "專屬品牌視覺識別",
                    "進階購物功能（快速結帳/願望清單/商品比較）",
                    "會員分級制度（一般/VIP）",
                    "紅利點數系統",
                    "進階行銷模組（EDM/推播/再行銷）",
                    "數據分析儀表板",
                    "多金流整合 + 電子發票",
                    "進階庫存管理",
                    "客服整合（Line/FB Messenger）",
                    "SEO深度優化",
                    "頁面速度極致優化"
                ]
            }
        ],
        annualIncludes: [
            "年費包含：網域 + 雲端主機(100GB+CDN) + 進階SSL",
            "旗艦服務：每月4次更新、每季功能迭代優化",
            "VIP支援：專屬客服經理、24/7技術支援",
            "深度分析：每月完整數據報告 + 策略建議",
            "行銷整合：EDM系統、會員經營、再行銷追蹤",
            "特別福利：前6個月免費技術支援"
        ]
    },
    {
        id: "custom",
        name: "客製專案",
        tagline: "適合：特殊需求、大型專案、企業級應用",
        setupFee: "專案討論",
        annualFee: "專案討論",
        totalFirstYear: "專案討論",
        isCustomPrice: true,
        deliveryTime: "依專案規模而定",
        icon: "💎",
        gradient: "from-slate-600 to-slate-800",
        features: [
            {
                title: "客製化服務",
                items: [
                    "完全依您的需求客製化",
                    "複雜系統整合",
                    "企業級應用開發",
                    "API 串接與整合",
                    "專屬功能開發",
                    "大型電商平台",
                    "SaaS 系統建置",
                    "專案經理全程協助"
                ]
            }
        ],
        annualIncludes: [
            "依專案需求提供對應服務",
            "專案經理專人服務",
            "彈性合約與付款方式",
            "長期技術支援選項"
        ]
    }
];

// 方案比較數據
export interface ComparisonRow {
    feature: string;
    starter: string | boolean;
    brand: string | boolean;
    ecommerce: string | boolean;
    flagship: string | boolean;
}

export const comparisonData: ComparisonRow[] = [
    { feature: "架設費", starter: "NT$ 8,800", brand: "NT$ 44,000", ecommerce: "NT$ 71,400", flagship: "NT$ 146,000" },
    { feature: "年費", starter: "NT$ 6,000", brand: "NT$ 6,000", ecommerce: "NT$ 6,000", flagship: "NT$ 6,000" },
    { feature: "首年總計", starter: "NT$ 14,800", brand: "NT$ 50,000", ecommerce: "NT$ 77,400", flagship: "NT$ 152,000" },
    { feature: "頁面數", starter: "5-8頁", brand: "8-12頁", ecommerce: "12-15頁", flagship: "客製化" },
    { feature: "客製化程度", starter: "套版", brand: "半客製", ecommerce: "套版電商", flagship: "全客製" },
    { feature: "交付時間", starter: "7-10天", brand: "4-5週", ecommerce: "5-6週", flagship: "10-12週" },
    { feature: "購物車", starter: false, brand: false, ecommerce: true, flagship: true },
    { feature: "金流串接", starter: false, brand: false, ecommerce: true, flagship: "多金流" },
    { feature: "電子發票", starter: false, brand: false, ecommerce: "加購", flagship: true },
    { feature: "會員系統", starter: false, brand: false, ecommerce: true, flagship: "進階" },
    { feature: "行銷功能", starter: "基礎", brand: "進階", ecommerce: "完整", flagship: "旗艦" },
    { feature: "技術支援", starter: "標準", brand: "優先", ecommerce: "即時", flagship: "專屬經理" }
];

// 加購服務
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
        category: "網站功能擴充",
        icon: "⚙️",
        items: [
            { name: "Landing Page 一頁式網頁", price: "NT$ 15,000" },
            { name: "多語系網站（+1語言）", price: "NT$ 20,000" },
            { name: "會員系統升級（分級/紅利）", price: "NT$ 25,000" },
            { name: "預約/表單系統客製化", price: "NT$ 15,000" },
            { name: "進階SEO優化（關鍵字策略）", price: "NT$ 30,000" },
            { name: "網站效能優化（速度加速）", price: "NT$ 18,000" }
        ]
    },
    {
        category: "行銷整合工具",
        icon: "📱",
        items: [
            { name: "Line 官方帳號串接", price: "NT$ 12,000" },
            { name: "FB/IG Messenger 整合", price: "NT$ 10,000" },
            { name: "網站AI智能客服小幫手", price: "NT$ 28,000" },
            { name: "EDM電子報系統", price: "NT$ 15,000" },
            { name: "Google/FB 再行銷追蹤設定", price: "NT$ 8,000" }
        ]
    },
    {
        category: "維護升級方案",
        icon: "🛡️",
        items: [
            { name: "每月維護（4次內容更新）", price: "NT$ 3,000/月" },
            { name: "每週維護（不限次數更新）", price: "NT$ 8,000/月" },
            { name: "即時技術支援 + SEO優化", price: "NT$ 12,000/月" },
            { name: "網站安全監控 + 備份", price: "包含於維護方案" }
        ]
    }
];
