import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface GlassCardProps {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
    onClick?: () => void;
}

export default function GlassCard({ children, className, hoverEffect = true, onClick, ...props }: GlassCardProps) {
    return (
        <div
            className={cn(
                'glass-card rounded-2xl p-8 border border-black/10 dark:border-white/10',
                'transition-all duration-300 ease-out',
                hoverEffect && 'cursor-pointer hover:scale-[1.02] hover:-translate-y-1 hover:shadow-lg active:scale-[0.98]',
                className
            )}
            onClick={onClick}
            {...props}
        >
            {children}
        </div>
    );
}
