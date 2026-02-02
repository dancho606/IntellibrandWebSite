import { Home, Grid, Calendar, User, Zap } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';
import { useState, useEffect } from 'react';
import { navItems } from '../data/config';

export function BottomNav() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    // Auto-hide on scroll down, show on scroll up
    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 100) {
                setIsVisible(false); // Hide
            } else {
                setIsVisible(true); // Show
            }
            setLastScrollY(currentScrollY);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScrollY]);

    // Filter items for Bottom Nav
    const items = navItems.filter(item => item.inBottomNav);

    return (
        <nav className={cn(
            "fixed bottom-0 left-0 right-0 z-[100] px-4 pb-6 pt-2 pointer-events-none flex justify-center transition-transform duration-300 md:hidden",
            isVisible ? "translate-y-0" : "translate-y-[200%]"
        )}>
            <div className="bg-white/80 backdrop-blur-xl border border-white/40 rounded-full px-2 py-2 flex items-center gap-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)] pointer-events-auto">
                {items.map((item) => {
                    if (item.isPrimary) {
                        return (
                            <a
                                key={item.path}
                                href={item.path}
                                className="flex flex-col items-center justify-center w-14 h-14 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full shadow-lg text-white transform -translate-y-4 hover:scale-105 transition-transform"
                            >
                                {item.icon && <item.icon size={24} fill="currentColor" className="text-white" />}
                            </a>
                        )
                    }

                    // Use normal links for anchors
                    return (
                        <a
                            key={item.path}
                            href={item.path}
                            className={cn(
                                'flex flex-col items-center gap-1 w-16 py-2 transition-all rounded-2xl text-slate-500 hover:text-blue-600'
                            )}
                        >
                            {item.icon && <item.icon
                                size={24}
                                strokeWidth={2}
                            />}
                            <span className="text-[10px] font-medium tracking-wide">
                                {item.label}
                            </span>
                        </a>
                    )
                })}
            </div>
        </nav>
    );
}
