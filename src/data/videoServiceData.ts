// AI 影片製作服務 - 資料配置檔案
// 注意：定價策略採用高價錨定，限時優惠避免低價錨定

// YouTube 影片 ID 配置（方便未來更換）
export const portfolioVideos = [
    {
        id: "dQw4w9WgXcQ",
        title: "AI 數位分身企業應用",
        category: "AI Avatar",
        description: "展示 AI 數位分身在企業品牌宣傳的實際應用"
    },
    {
        id: "M7lc1UVf-VE",
        title: "傳統市場轉型案例",
        category: "成功案例",
        description: "傳統攤商如何用 AI 影片創造營收成長"
    },
    {
        id: "LXb3EKWsInQ",
        title: "30秒快速產品介紹",
        category: "短影音",
        description: "適合社群媒體的精簡產品展示"
    }
];

// 核心方案（正式定價）
export interface VideoPlan {
    id: string;
    name: string;
    subtitle: string;
    originalPrice: number;  // 正式價格（價格錨定用）
    limitedTimeDiscount?: number; // 限時優惠折扣（%）
    isPopular?: boolean;
    icon: string;
    icon3d?: string;
    gradient: string;
    deliveryTime: string;
    freeRevisions: number;
    features: string[];
    includes: string[];
}

export const videoPlans: VideoPlan[] = [
    {
        id: "single",
        name: "單支影片",
        subtitle: "快速體驗 AI 影片製作",
        originalPrice: 5800,
        limitedTimeDiscount: 20, // 限時 8 折
        icon: "🎬",
        icon3d: "/src/assets/icons/icon-video-basic.png",
        gradient: "from-blue-500 to-cyan-500",
        deliveryTime: "3-5 個工作天",
        freeRevisions: 3,
        features: [
            "1 支 AI 數位分身影片（30秒-1分鐘）",
            "AI 配音（中文/台語）",
            "基礎字幕與視覺效果",
            "我們幫您撰寫腳本"
        ],
        includes: [
            "MP4 高畫質輸出（1080p）",
            "版權歸屬客戶",
            "免費修改 2 次",
            "雲端備份 30 天"
        ]
    },
    {
        id: "package",
        name: "3 支套餐",
        subtitle: "最多人選擇的方案",
        originalPrice: 12800,
        limitedTimeDiscount: 20,
        isPopular: true,
        icon: "📦",
        icon3d: "/src/assets/icons/icon-video-pro.png",
        gradient: "from-purple-500 to-pink-500",
        deliveryTime: "5-7 個工作天",
        freeRevisions: 3,
        features: [
            "3 支 AI 數位分身影片（每支 30秒-1分鐘）",
            "AI 配音（中文/台語）",
            "進階視覺效果",
            "含完整腳本撰寫",
            "教學如何發布到社群媒體"
        ],
        includes: [
            "平均每支 NT$ 3,413",
            "比單買省 NT$ 4,600",
            "免費修改 2 次/支",
            "雲端備份 90 天"
        ]
    },
    {
        id: "subscription",
        name: "月度訂閱",
        subtitle: "持續產出，穩定成長",
        originalPrice: 15800,
        limitedTimeDiscount: 20,
        icon: "🔄",
        icon3d: "/src/assets/icons/icon-video-ultimate.png",
        gradient: "from-emerald-500 to-teal-500",
        deliveryTime: "每週交付",
        freeRevisions: 3,
        features: [
            "每月 3 支影片（每週 1 支）",
            "AI 數位分身無限使用",
            "含完整腳本企劃",
            "LINE 客服支援",
            "優先處理權"
        ],
        includes: [
            "平均每支 NT$ 4,213",
            "比單買省 NT$ 4,600/月",
            "隨時取消，無綁約",
            "免費修改 2 次/支"
        ]
    }
];

// 訂閱制方案
export interface SubscriptionPlan {
    id: string;
    name: string;
    price: number;
    unit: string;
    features: string[];
    gradient: string;
    icon: string;
    icon3d?: string;
    badge?: string;
}

export const subscriptionPlans: SubscriptionPlan[] = [
    {
        id: "basic",
        name: "基礎包",
        price: 25000,
        unit: "月",
        icon: "📦",
        gradient: "from-blue-500 to-cyan-500",
        features: [
            "每月 3 支 AI 數位分身影片（1分鐘內）",
            "含完整腳本企劃",
            "免費修改 3 次/影片",
            "贈送 1 語言版本",
            "專屬客服聯絡窗口"
        ]
    },
    {
        id: "international",
        name: "國際包",
        price: 45000,
        unit: "月",
        icon: "🌍",
        gradient: "from-purple-500 to-pink-500",
        badge: "推薦",
        features: [
            "每月 3 支影片（1-3 分鐘）",
            "含完整腳本企劃",
            "每支含 3 語言版本 + 對嘴效果",
            "月度效果分析報告",
            "優先處理權"
        ]
    },
    {
        id: "enterprise",
        name: "企業包",
        price: 80000,
        unit: "月起",
        icon: "🏢",
        gradient: "from-emerald-500 to-teal-500",
        features: [
            "每月 5 支影片（類型不限）",
            "每支含 5 語言版本 + 對嘴",
            "專屬策略顧問",
            "24 小時內回應",
            "季度策略會議"
        ]
    }
];

// 進階客製方案（高預算客群）
export const premiumPlans = [
    {
        id: "pro-single",
        name: "專業影片製作",
        price: 12800,
        duration: "1-3 分鐘",
        features: [
            "完整故事腳本",
            "多語言版本（3 語言）",
            "進階特效與動畫",
            "配樂音效設計"
        ]
    },
    {
        id: "pro-subscription",
        name: "企業訂閱方案",
        price: 38000,
        unit: "月",
        features: [
            "每月 8 支專業影片",
            "含多語言版本",
            "專屬策略顧問",
            "數據分析報告"
        ]
    }
];

// 加購服務（避免單獨低價販售）
export interface AddOnCategory {
    category: string;
    icon: string;
    items: AddOnItem[];
    minimumOrderNote?: string; // 最低消費提示
}

export interface AddOnItem {
    name: string;
    price: string;
    unit?: string;
    description?: string;
    requiresBasePlan?: boolean; // 是否需要搭配主方案
}

export const addOnServices: AddOnCategory[] = [
    {
        category: "多語言服務",
        icon: "🌏",
        minimumOrderNote: "需搭配影片製作方案",
        items: [
            {
                name: "額外語言配音",
                price: "2,800",
                unit: "語言",
                requiresBasePlan: true,
                description: "需先購買基礎方案"
            },
            {
                name: "對嘴同步效果",
                price: "3,500",
                unit: "語言",
                requiresBasePlan: true
            }
        ]
    },
    {
        category: "AI 數位分身訓練",
        icon: "🎭",
        items: [
            {
                name: "個人數位分身訓練",
                price: "12,000",
                description: "一次訓練，永久使用"
            },
            {
                name: "企業虛擬代言人",
                price: "25,000",
                description: "含專業指導與多角度訓練"
            }
        ]
    },
    {
        category: "加值服務",
        icon: "✨",
        items: [
            {
                name: "緊急製作（24-48小時）",
                price: "+50%",
                description: "總價加成"
            },
            {
                name: "專業配音員（真人）",
                price: "8,000",
                unit: "語言"
            },
            {
                name: "額外修改",
                price: "2,000",
                unit: "次",
                description: "超過免費次數後"
            }
        ]
    }
];

// 價值對照表（強調省錢優勢）
export interface ValueComparisonRow {
    item: string;
    traditional: string;
    ai: string;
    savings: string;
}

export const valueComparison: ValueComparisonRow[] = [
    {
        item: "演員/配音員",
        traditional: "NT$ 8,000",
        ai: "✅ AI 配音",
        savings: "NT$ 8,000"
    },
    {
        item: "攝影師",
        traditional: "NT$ 10,000",
        ai: "❌ 不需要",
        savings: "NT$ 10,000"
    },
    {
        item: "剪輯師",
        traditional: "NT$ 12,000",
        ai: "✅ AI 自動",
        savings: "NT$ 12,000"
    },
    {
        item: "場地租借",
        traditional: "NT$ 5,000",
        ai: "❌ 不需要",
        savings: "NT$ 5,000"
    },
    {
        item: "腳本撰寫",
        traditional: "NT$ 5,000",
        ai: "✅ 包含",
        savings: "NT$ 5,000"
    }
];

// FAQ 資料
export const faqData = [
    {
        question: "我不會寫腳本，你們可以幫忙嗎？",
        answer: "當然可以！這是我們服務的一部分。您只需要告訴我們：賣什麼產品、有什麼特色、想要什麼效果，我們會幫您寫出吸引人的腳本。"
    },
    {
        question: "我不想出鏡，可以用 AI 嗎？",
        answer: "完全沒問題！我們提供多種虛擬代言人供您選擇。如果您想要專屬形象，也可以選擇訓練個人數位分身（需額外付費）。"
    },
    {
        question: "支援台語配音嗎？",
        answer: "支援！我們了解很多傳統市場店家習慣用台語，AI 配音可以選擇台語或國語，甚至可以混合使用。"
    },
    {
        question: "現在有什麼優惠嗎？",
        answer: "有！目前推出限時優惠活動，所有方案享 8 折優惠，限量 30 名！優惠結束後將恢復原價，建議把握機會！"
    },
    {
        question: "做了影片真的會有效果嗎？",
        answer: "根據我們的客戶案例，使用影片行銷後平均營收提升 30-50%。我們也會教您如何正確發布和推廣，確保影片發揮最大效果。"
    },
    {
        question: "修改次數有限制嗎？",
        answer: "每個方案包含 3 次免費修改。建議您在「定稿前」（腳本確認階段）仔細溝通需求，這時修改調整都很快速。一旦「定稿交付」後的修改需要重新製作，成本較高。根據經驗，90% 的客戶在 2 次內就很滿意！超過 3 次的額外修改每次 NT$ 2,000。"
    }
];

// 製作流程
export const productionSteps = [
    {
        step: "01",
        title: "簡單溝通",
        description: "電話或 LINE 告訴我們您的需求",
        icon: "💬"
    },
    {
        step: "02",
        title: "我們寫腳本",
        description: "專業團隊幫您撰寫吸引人的文案",
        icon: "📝"
    },
    {
        step: "03",
        title: "快速製作",
        description: "AI 自動生成高品質影片",
        icon: "🎬"
    },
    {
        step: "04",
        title: "免費修改",
        description: "不滿意可以免費修改到好",
        icon: "✨"
    },
    {
        step: "05",
        title: "教您發布",
        description: "手把手教您如何上傳到 FB/IG",
        icon: "📱"
    }
];

// 核心優勢（針對傳統市場）
export const whyAIVideo = [
    {
        icon: "💰",
        title: "省下 80% 成本",
        description: "不用請演員、攝影師、剪輯師，傳統拍攝要花 NT$ 40,000，現在只要 NT$ 5,800 起。",
        color: "from-green-500 to-emerald-500"
    },
    {
        icon: "⏰",
        title: "5 天就能完成",
        description: "不用等 2-3 週，最快 3-5 天就能拿到成品，趕上促銷檔期沒問題。",
        color: "from-blue-500 to-cyan-500"
    },
    {
        icon: "😌",
        title: "不用出鏡也可以",
        description: "不敢對著鏡頭講話？沒關係！用 AI 虛擬代言人，一樣專業又好看。",
        color: "from-purple-500 to-pink-500"
    },
    {
        icon: "🔄",
        title: "隨時改都可以",
        description: "價格調整了？促銷文案換了？只要改文字就好，不用重拍，省時又省錢。",
        color: "from-orange-500 to-red-500"
    }
];

// 成功案例（建立信任）
export const successStories = [
    {
        name: "王老闆",
        business: "傳統市場水果攤",
        result: "用影片介紹當季水果，IG 粉絲從 200 增加到 2,000，每月營收增加 30%",
        quote: "我從來不敢想我這個賣水果的也能做影片行銷！現在年輕客人變多了，生意真的有變好！",
        avatar: "👨‍🌾"
    },
    {
        name: "陳小姐",
        business: "早餐店",
        result: "拍了 3 支早餐介紹影片，FB 觀看數破萬，外帶訂單增加 50%",
        quote: "以前都不知道怎麼宣傳，現在有影片分享到社團，客人都說看起來很專業！",
        avatar: "👩‍🍳"
    },
    {
        name: "林大哥",
        business: "服飾批發",
        result: "每週發布新品影片，網路訂單從 0 增加到每月 50 單以上",
        quote: "訂閱方案超划算！每個月 4 支影片，新貨到就馬上拍，客人搶著買！",
        avatar: "👔"
    }
];

// 限時活動設定（可手動開關）
export const campaignSettings = {
    isActive: false, // 改為 true 啟動活動
    campaignName: "新春開幕優惠",
    discount: 20, // 折扣 %
    endDate: "2026-01-31",
    limitedQuantity: 30, // 限量名額
    currentBooked: 0, // 已預訂數量（手動更新）
    urgencyMessage: "限量 30 名，售完即恢復原價"
};
