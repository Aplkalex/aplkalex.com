'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { MapPin, Lock } from 'lucide-react';
import { useState, useEffect } from 'react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
const HOURS = Array.from({ length: 9 }, (_, i) => i + 9); // 09:00 to 17:00

// Colors from the user's snippet (Glass Palette Logic simplified)
const COURSE_STYLES = {
    purple: {
        bg: 'rgba(139, 92, 246, 0.48)',
        border: 'rgba(139, 92, 246, 0.78)',
        glow: 'rgba(139, 92, 246, 0.54)',
        text: 'rgba(255, 255, 255, 0.97)'
    },
    pink: {
        bg: 'rgba(236, 72, 153, 0.48)',
        border: 'rgba(236, 72, 153, 0.78)',
        glow: 'rgba(236, 72, 153, 0.54)',
        text: 'rgba(255, 255, 255, 0.97)'
    },
    emerald: {
        bg: 'rgba(16, 185, 129, 0.48)',
        border: 'rgba(16, 185, 129, 0.78)',
        glow: 'rgba(16, 185, 129, 0.54)',
        text: 'rgba(255, 255, 255, 0.97)'
    },
    amber: {
        bg: 'rgba(245, 158, 11, 0.48)',
        border: 'rgba(245, 158, 11, 0.78)',
        glow: 'rgba(245, 158, 11, 0.54)',
        text: 'rgba(255, 255, 255, 0.97)'
    }
};

const DEMO_COURSES = [
    { id: 'c1', code: 'CSCI3100', name: 'Software Engineering', day: 1, start: 10.5, duration: 1.5, style: COURSE_STYLES.purple, location: 'LSK_LT5', section: 'LEC A' },
    { id: 'c2', code: 'CSCI3250', name: 'Computers & Society', day: 3, start: 14.5, duration: 1.5, style: COURSE_STYLES.pink, location: 'ER_201', section: 'LEC B' },
    { id: 'c3', code: 'ENGG1110', name: 'Problem Solving', day: 2, start: 9.5, duration: 2.5, style: COURSE_STYLES.emerald, location: 'YIA_LT2', section: 'LAB C' },
    { id: 'c4', code: 'UGFH1000', name: 'In Dialogue with Humanity', day: 4, start: 11.5, duration: 1.5, style: COURSE_STYLES.amber, location: 'UCC_101', section: 'TUT D' },
];

export default function QueuesisShowcase({ className, variant = 'card' }: { className?: string, variant?: 'card' | 'fullscreen' }) {
    const isCard = variant === 'card';

    const [isBlurred, setIsBlurred] = useState(false);
    const [isDragging, setIsDragging] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsBlurred(true);
        }, 500);
        return () => clearTimeout(timer);
    }, []);

    const handleDragStart = () => {
        setIsDragging(true);
        setIsBlurred(false);
    };

    const handleDragEnd = () => {
        setIsDragging(false);
        setIsBlurred(true);
    };

    return (
        <div className={cn(
            "w-full h-full flex flex-col overflow-hidden relative pointer-events-auto",
            isCard && "bg-black/[0.03] dark:bg-white/[0.03] rounded-2xl border border-black/[0.07] dark:border-white/[0.07] shadow-[0_32px_72px_-50px_rgba(15,23,42,0.1)] dark:shadow-[0_32px_72px_-50px_rgba(15,23,42,0.55)] backdrop-blur-none",
            className
        )}>
            {/* Grid Header */}
            <div className={cn(
                "flex border-b bg-transparent",
                isCard ? "border-black/[0.05] dark:border-white/[0.05]" : "border-black/10 dark:border-white/10"
            )}>
                <div className={cn(
                    "w-16 border-r flex items-center justify-end pr-2 py-2",
                    isCard ? "border-black/[0.05] dark:border-white/[0.05]" : "border-black/10 dark:border-white/10"
                )}>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-slate-500/70 dark:text-slate-200/70">Time</span>
                </div>
                {DAYS.map(day => (
                    <div key={day} className="flex-1 py-2 text-center text-xs font-semibold uppercase tracking-[0.22em] text-slate-700/85 dark:text-slate-100/85">
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
                        isCard ? "border-black/[0.05] dark:border-white/[0.05]" : "border-black/10 dark:border-white/10"
                    )}>
                        {HOURS.map(hour => (
                            <div key={hour} className={cn(
                                "h-[11.11%] border-b text-[10px] font-semibold uppercase tracking-[0.22em] font-mono text-right text-slate-500/75 dark:text-slate-300/75 pr-2 pt-1 relative",
                                isCard ? "border-black/[0.05] dark:border-white/[0.05]" : "border-black/10 dark:border-white/10"
                            )}>
                                <span className="-top-2 relative">{hour}:00</span>
                            </div>
                        ))}
                    </div>

                    {/* Days Columns */}
                    {DAYS.map((_, index) => (
                        <div key={index} className={cn(
                            "flex-1 border-r relative",
                            isCard ? "border-black/[0.05] dark:border-white/[0.05]" : "border-black/10 dark:border-white/10"
                        )}>
                            {HOURS.map(hour => (
                                <div key={hour} className={cn(
                                    "h-[11.11%] border-b",
                                    isCard ? "border-black/[0.08] dark:border-white/[0.08]" : "border-black/10 dark:border-white/10"
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
                                            backgroundColor: course.style.bg,
                                            borderColor: course.style.border,
                                            color: course.style.text,
                                            boxShadow: `0 0 0 1px ${course.style.border}`,
                                        }}
                                    >
                                        <div className="flex flex-col gap-0.5">
                                            <div className="font-semibold text-[11px] leading-tight truncate">
                                                {course.code} | {course.section}
                                            </div>
                                            <div className="opacity-90 text-[9px] flex items-center gap-1 truncate">
                                                <MapPin className="w-2.5 h-2.5 text-white/90" />
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
