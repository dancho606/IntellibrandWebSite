import { Service } from '../types';

export const services: Service[] = [
    {
        id: 'website',
        title: "AI 網站建置",
        shortDescription: "Web App 開發與極速響應式設計",
        fullDescription: "我們結合 React 與 AI 技術，為您打造載入速度極快、SEO 架構完美的現代化官網。包含響應式設計 (RWD) 與客製化後台管理系統。",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#web-design",
        gradient: "from-blue-600/90 to-blue-800/90",
        icon3d: "/src/assets/icons/icon-website.png"
    },
    {
        id: 'video',
        title: "AI 影片製作",
        shortDescription: "快速產出高品質影片",
        fullDescription: "利用先進 AI 算法自動化剪輯、配音與特效製作，大幅縮短影片製程。",
        image: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#service-video",
        gradient: "from-purple-600/90 to-purple-800/90",
        icon3d: "/src/assets/icons/icon-video-pro.png"
    },
    {
        id: 'avatar',
        title: "AI 數位替身",
        shortDescription: "打造企業專屬虛擬代言人，自動化影片生成",
        fullDescription: "為您的品牌打造專屬 AI 虛擬代言人，24/7 不間斷為您進行產品介紹與品牌推廣。",
        image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#service-avatar",
        gradient: "from-cyan-600/90 to-cyan-800/90",
        icon3d: "/src/assets/icons/icon-avatar.png"
    },
    {
        id: 'social',
        title: "自媒體代操",
        shortDescription: "IG, TikTok, YouTube 全平台運營與內容生成",
        fullDescription: "全方位社群媒體代管，從內容企劃、AI 圖文生成到社群互動，一站式解決方案。",
        image: "/social-media-card.png",
        link: "#service-social",
        gradient: "from-pink-600/90 to-pink-800/90",
        icon3d: "/src/assets/icons/icon-social.png"
    },
    {
        id: 'enterprise',
        title: "AI 企業導入",
        shortDescription: "優化工作流程，整合 AI 工具至企業內部",
        fullDescription: "協助企業建置私有化 LLM 知識庫，優化內部作業流程，提升團隊協作效率。",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#service-enterprise",
        gradient: "from-indigo-600/90 to-indigo-800/90",
        icon3d: "/src/assets/icons/icon-enterprise.png"
    },
    {
        id: 'course',
        title: "AI 實戰課程",
        shortDescription: "企業內訓與個人進修，掌握最新 AI 工具應用",
        fullDescription: "提供客製化企業內訓與個人實戰課程，讓您的團隊快速掌握最新 AI 工具應用。",
        image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        link: "#service-course",
        gradient: "from-emerald-600/90 to-emerald-800/90",
        icon3d: "/src/assets/icons/icon-course.png"
    }
];
