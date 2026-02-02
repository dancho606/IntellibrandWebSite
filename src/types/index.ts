import { LucideIcon } from 'lucide-react';

export interface Service {
    id: string;
    title: string;
    shortDescription: string;
    fullDescription: string;
    icon?: LucideIcon;
    icon3d?: string;
    image: string;
    link: string;
    gradient: string;
}

export interface SiteConfig {
    name: string;
    description: string;
    contactEmail: string;
    socialLinks: {
        facebook?: string;
        instagram?: string;
        line?: string;
    };
}
