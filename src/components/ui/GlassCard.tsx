import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
    children: ReactNode;
    className?: string;
    hoverEffect?: boolean;
}

export default function GlassCard({ children, className, hoverEffect = true, ...props }: GlassCardProps) {
    return (
        <motion.div
            className={cn(
                'glass-card rounded-2xl p-8 border border-black/10 dark:border-white/10',
                hoverEffect && 'cursor-pointer',
                className
            )}
            whileHover={hoverEffect ? {
                scale: 1.02,
                y: -5,
                borderColor: "rgba(255, 255, 255, 0.3)",
                boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
            } : undefined}
            whileTap={hoverEffect ? { scale: 0.98 } : undefined}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            {...props}
        >
            {children}
        </motion.div>
    );
}
