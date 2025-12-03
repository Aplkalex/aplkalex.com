'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MapPin, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const HOURS = Array.from({ length: 9 }, (_, i) => i + 9); // 09:00 to 17:00

// Colors from the user's snippet (Glass Palette Logic simplified)
const COURSE_STYLES = {
    purple: {
        light: {
            bg: 'rgba(139, 92, 246, 0.22)',
            border: 'rgba(139, 92, 246, 0.35)',
            glow: 'rgba(139, 92, 246, 0.25)',
            text: '#1f1f1f'
        },
        dark: {
            bg: 'rgba(139, 92, 246, 0.48)',
            border: 'rgba(139, 92, 246, 0.78)',
            glow: 'rgba(139, 92, 246, 0.54)',
            text: 'rgba(255, 255, 255, 0.97)'
        }
    },
    pink: {
        light: {
            bg: 'rgba(236, 72, 153, 0.22)',
            border: 'rgba(236, 72, 153, 0.35)',
            glow: 'rgba(236, 72, 153, 0.25)',
            text: '#1f1f1f'
        },
        dark: {
            bg: 'rgba(236, 72, 153, 0.48)',
            border: 'rgba(236, 72, 153, 0.78)',
            glow: 'rgba(236, 72, 153, 0.54)',
            text: 'rgba(255, 255, 255, 0.97)'
        }
    },
    emerald: {
        light: {
            bg: 'rgba(16, 185, 129, 0.22)',
            border: 'rgba(16, 185, 129, 0.33)',
            glow: 'rgba(16, 185, 129, 0.25)',
            text: '#1f1f1f'
        },
        dark: {
            bg: 'rgba(16, 185, 129, 0.48)',
            border: 'rgba(16, 185, 129, 0.78)',
            glow: 'rgba(16, 185, 129, 0.54)',
            text: 'rgba(255, 255, 255, 0.97)'
        }
    },
    amber: {
        light: {
            bg: 'rgba(245, 158, 11, 0.24)',
            border: 'rgba(245, 158, 11, 0.36)',
            glow: 'rgba(245, 158, 11, 0.26)',
            text: '#1f1f1f'
        },
        dark: {
            bg: 'rgba(245, 158, 11, 0.48)',
            border: 'rgba(245, 158, 11, 0.78)',
            glow: 'rgba(245, 158, 11, 0.54)',
            text: 'rgba(255, 255, 255, 0.97)'
        }
    }
};

const DEMO_COURSES = [
    { id: 'c1', code: 'CSCI3100', name: 'Software Engineering', day: 1, start: 10.5, duration: 1.5, style: 'purple', location: 'LSK_LT5', section: 'LEC A' },
    { id: 'c2', code: 'CSCI3250', name: 'Computers & Society', day: 3, start: 14.5, duration: 1.5, style: 'pink', location: 'ER_201', section: 'LEC B' },
    { id: 'c3', code: 'ENGG1110', name: 'Problem Solving', day: 2, start: 9.5, duration: 2.5, style: 'emerald', location: 'YIA_LT2', section: 'LAB C' },
    { id: 'c4', code: 'UGFH1000', name: 'In Dialogue with Humanity', day: 4, start: 11.5, duration: 1.5, style: 'amber', location: 'UCC_101', section: 'TUT D' },
];

export default function QueuesisShowcase({ className, variant = 'card' }: { className?: string, variant?: 'card' | 'fullscreen' }) {
    const isCard = variant === 'card';

    const [isBlurred, setIsBlurred] = useState(false);
    const [isDragging, setIsDragging] = useState(false);
    const { resolvedTheme } = useTheme();
    const isDark = resolvedTheme === 'dark';

    const headerBorder = isCard
        ? "border-black/[0.05] dark:border-white/[0.05]"
        : isDark ? "border-white/10" : "border-slate-300/40";

    const columnBorder = isCard
        ? "border-black/[0.08] dark:border-white/[0.08]"
        : isDark ? "border-white/10" : "border-black/5";

    const timelineBorder = isCard
        ? "border-black/[0.05] dark:border-white/[0.05]"
        : isDark ? "border-white/12" : "border-slate-300/50";

    const fullscreenBackgroundClass = !isCard
        ? (isDark
            ? "bg-[#020205]/95 text-white"
            : "bg-white/95 text-slate-900")
        : "";

    const fullscreenBackgroundStyle = undefined;

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBlurred(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const root = document.documentElement;
        // Blur removed as requested
        const blurAmount = '0px';
        const blurOpacity = '0';
        root.style.setProperty('--queuesis-blur-amount', blurAmount);
        root.style.setProperty('--queuesis-blur-opacity', blurOpacity);
    }, [isBlurred, isDark]);

    const handleDragStart = () => {
        setIsDragging(true);
        setIsBlurred(false);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setIsBlurred(true);
    };

    return (
        <div
            className={cn(
                "w-full h-full flex flex-col overflow-hidden relative pointer-events-auto",
                isCard && "bg-black/[0.03] dark:bg-white/[0.03] rounded-2xl border border-black/[0.07] dark:border-white/[0.07] shadow-[0_32px_72px_-50px_rgba(15,23,42,0.1)] dark:shadow-[0_32px_72px_-50px_rgba(15,23,42,0.55)] backdrop-blur-none",
                fullscreenBackgroundClass,
                className
            )}
            style={fullscreenBackgroundStyle}
        >
            {/* Grid Header */}
            <div className={cn(
                "flex border-b bg-transparent",
                headerBorder
            )}>
                <div
                    className={cn(
                        "w-16 border-r flex items-center justify-end pr-2 py-2 bg-transparent",
                        timelineBorder
                    )}
                >
                    <span className={cn(
                        "text-[10px] font-semibold uppercase tracking-[0.25em]",
                        isDark ? "text-slate-200/70" : "text-slate-600/70"
                    )}>Time</span>
                </div>
                {DAYS.map(day => (
                    <div
                        key={day}
                        className={cn(
                            "flex-1 py-2 text-center text-xs font-semibold uppercase tracking-[0.22em]",
                            isDark ? "text-slate-100/85" : "text-slate-700/85"
                        )}
                    >
                        {day}
                    </div>
                ))}
            </div>

            {/* Grid Body */}
            <div className="flex-1 relative overflow-hidden">
                <div className="flex h-full relative">
                    {/* Time Column */}
                    <div className={cn(
                        "w-16 flex-shrink-0 border-r bg-transparent",
                        timelineBorder
                    )}>
                        {HOURS.map(hour => (
                            <div key={hour} className={cn(
                                "h-[11.11%] border-b text-[10px] font-semibold uppercase tracking-[0.22em] font-mono text-right pr-2 pt-1 relative",
                                timelineBorder
                            )}>
                                <span className={cn("-top-2 relative", isDark ? "text-slate-200/75" : "text-slate-600/75")}>{hour}:00</span>
                            </div>
                        ))}
                    </div>

                    {/* Days Columns */}
                    {DAYS.map((_, index) => (
                        <div key={index} className={cn(
                            "flex-1 border-r relative",
                            timelineBorder
                        )}>
                            {HOURS.map(hour => (
                                <div key={hour} className={cn(
                                    "h-[11.11%] border-b",
                                    columnBorder
                                )} />
                            ))}
                        </div>
                    ))}

                    {/* Draggable Courses */}
                    <div className="absolute inset-0 left-16 pointer-events-none">
                        {DEMO_COURSES.map((course) => {
                            const top = `${((course.start - 9) / 9) * 100}%`;
                            const height = `${(course.duration / 9) * 100}%`;
                            const left = `${(course.day / 5) * 100}%`;
                            const width = `${100 / 5}%`;
                            const palette = COURSE_STYLES[course.style as keyof typeof COURSE_STYLES][isDark ? 'dark' : 'light'];

                            return (
                                <motion.div
                                    key={course.id}
                                    drag
                                    dragConstraints={{ left: -50, right: 50, top: -50, bottom: 50 }}
                                    dragElastic={0.5}
                                    onDragStart={handleDragStart}
                                    onDragEnd={handleDragEnd}
                                    onClick={(e) => e.stopPropagation()}
                                    whileHover={{ scale: 1.05, zIndex: 50, cursor: 'grab' }}
                                    whileDrag={{ scale: 1.05, zIndex: 100, cursor: 'grabbing', opacity: 1 }}
                                    className="absolute p-1 pointer-events-auto will-change-transform"
                                    style={{
                                        top,
                                        left,
                                        width,
                                        height,
                                    }}
                                >
                                    <div
                                        className={cn(
                                            "w-full h-full rounded-[7px] p-2 flex flex-col border shadow-none transition-all duration-200",
                                            isBlurred && !isDragging ? "backdrop-blur-[12px] scale-100" : "backdrop-blur-none scale-105"
                                        )}
                                        style={{
                                            backgroundColor: palette.bg,
                                            borderColor: palette.border,
                                            color: palette.text,
                                            boxShadow: `0 0 0 1px ${palette.border}`,
                                        }}
                                    >
                                        <div className="flex flex-col gap-0.5">
                                            <div className="font-semibold text-[11px] leading-tight truncate">
                                                {course.code} | {course.section}
                                            </div>
                                            <div className="opacity-90 text-[9px] flex items-center gap-1 truncate" style={{ color: palette.text }}>
                                                <MapPin className="w-2.5 h-2.5" style={{ color: isDark ? '#f1f5f9' : '#1f2937' }} />
                                                {course.location}
                                            </div>
                                        </div>
                                        <div className="mt-auto text-[9px] opacity-75 truncate">
                                            {course.name}
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
