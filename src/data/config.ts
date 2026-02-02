import { Home, Grid, Zap, FileText, Building2 } from 'lucide-react';

export const siteConfig = {
    name: "IntelliBrand.AI",
    title: "智賦 AI - 企業 AI 數位轉型專家",
    description: "全方位的 AI 賦能解決方案，精準對接商業需求",
    copyright: "© 2026 IntelliBrand AI. All rights reserved.",
    contact: {
        email: "contact@intellibrand.ai", // 範例
        phone: "",
        formScriptUrl: "https://script.google.com/macros/s/AKfycby4ODg5SvYnWNbg7r93-jMAZy0q_GXBFp1jA9sIzJkcvbHf9bIq3cicBB1UUYFbyG11/exec"
    },
    social: {
        facebook: "https://facebook.com/intellibrand",
        instagram: "https://instagram.com/intellibrand",
        line: "https://line.me/ti/p/@intellibrand"
    },
    uiSettings: {
        services: {
            useIcons3d: false, // 是否使用 3D 圖示模式
            imageStyle: "full-bg" // "circle", "rounded", or "full-bg"
        },
        videoPlans: {
            useIcons3d: true // 影片方案維持 3D 模式
        }
    }
};

// 定義導覽選單 (給 TopNav 和 BottomNav 共用)
export const navItems = [
    {
        label: '首頁',
        path: '#home',
        icon: Home,
        inBottomNav: true,
        inTopNav: false
    },
    {
        label: '服務項目',
        path: '#services',
        icon: Grid,
        inBottomNav: true,
        inTopNav: true
    },
    {
        label: '精選案例',
        path: '#portfolio',
        icon: FileText,
        inBottomNav: true,
        inTopNav: true
    },
    {
        label: '合作企業',
        path: '#partners',
        icon: Building2,
        inBottomNav: true,
        inTopNav: true
    },
    {
        label: '聯絡我們',
        path: '#contact',
        icon: Zap,
        inBottomNav: true,
        inTopNav: true,
        isPrimary: true
    }
];
