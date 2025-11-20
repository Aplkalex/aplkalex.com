import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true }: GlassCardProps) {
    return (
        <div
            className={cn(
                'glass-card rounded-2xl p-8 transition-all duration-300 border border-white/10',
                hoverEffect && 'hover:-translate-y-1 hover:border-white/30',
                className
            )}
        >
            {children}
        </div>
    );
}
