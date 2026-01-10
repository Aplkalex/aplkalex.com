'use client';

import { useState, MouseEvent } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';
import { X } from 'lucide-react';

interface ZoomableCardProps {
    children: React.ReactNode;
    className?: string;
    redirectUrl?: string;
    showcaseContent?: React.ReactNode;
    expandedContent?: React.ReactNode;
    autoRedirect?: boolean;
}

export default function ZoomableCard({ children, className, redirectUrl, showcaseContent, expandedContent, autoRedirect }: ZoomableCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const router = useRouter();

    const handleRedirect = () => {
        if (!redirectUrl) return;
        setIsRedirecting(true);
        setTimeout(() => {
            router.push(redirectUrl);
        }, 400);
    };

    const handleClick = () => {
        setIsExpanded(true);
        if (autoRedirect && redirectUrl) {
            handleRedirect();
        }
    };

    const handleClose = (event?: MouseEvent<HTMLButtonElement>) => {
        event?.stopPropagation();
        setIsExpanded(false);
    };

    return (
        <>
            {/* Overlay */}
            {(isExpanded || isRedirecting) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 z-50 bg-white dark:bg-black"
                    onClick={!isRedirecting ? () => setIsExpanded(false) : undefined}
                />
            )}

            <motion.div
                layout
                onClick={!isExpanded ? handleClick : undefined}
                className={cn(
                    'relative border border-black/10 dark:border-white/10 overflow-hidden text-gray-900 dark:text-white transition-colors',
                    isExpanded
                        ? 'shadow-2xl !backdrop-blur-none !border-black/10 bg-white dark:bg-black text-[color:var(--foreground-strong)]'
                        : 'bg-white/80 dark:bg-black/40 backdrop-blur-md',
                    (isExpanded || isRedirecting) ? 'fixed inset-0 z-[60] rounded-none border-none' : 'rounded-2xl cursor-pointer hover:border-black/30 dark:hover:border-white/30',
                    className
                )}
                style={isExpanded ? { backgroundColor: '#ffffff', color: '#000000' } : undefined}
                whileHover={!isExpanded ? {
                    scale: 1.02,
                    y: -5,
                    borderColor: "var(--hover-border)",
                    boxShadow: "var(--glass-shadow)"
                } : undefined}
                transition={{
                    layout: { duration: 0.25, ease: [0.2, 0, 0.2, 1] }, // Ultra-fast, snappy
                    scale: { duration: 0.2 },
                    y: { duration: 0.2 }
                }}
            >
                {isExpanded && !isRedirecting && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0.8, y: -10 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        whileHover={{ scale: 1.05, rotate: 3 }}
                        whileTap={{ scale: 0.95 }}
                        transition={{ duration: 0.3 }}
                        onClick={handleClose}
                        className="pointer-events-auto absolute top-6 right-6 z-[70] inline-flex items-center gap-2 rounded-full border border-black/10 dark:border-white/20 bg-white/80 dark:bg-white/10 px-4 py-2 text-sm font-semibold text-black dark:text-white backdrop-blur-md shadow-lg"
                        aria-label="Close details"
                    >
                        <X className="w-4 h-4" />
                        Close
                    </motion.button>
                )}

                <motion.div
                    layout="position"
                    className={cn(
                        "h-full w-full transition-all duration-700",
                        (isExpanded || isRedirecting) ? "p-8 flex flex-col" : "p-8",
                        isRedirecting && "scale-110 opacity-0"
                    )}
                >
                    {/* Showcase Background */}
                    {isExpanded && showcaseContent && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="absolute inset-0 z-0"
                        >
                            {showcaseContent}
                        </motion.div>
                    )}

                    {/* Content Layer */}
                    <motion.div
                        layout="position"
                        className={cn(
                            "relative z-10 flex flex-col h-full pointer-events-none", // Content container shouldn't block background clicks
                            isExpanded ? "justify-center items-center" : ""
                        )}
                    >
                        {/* Original Content - Enable pointer events for interactive elements */}
                        <div className={cn(
                            "pointer-events-auto transition-all duration-500",
                            isExpanded ? "w-full h-full" : ""
                        )}>
                            {isExpanded && expandedContent ? (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    className="w-full h-full"
                                >
                                    {expandedContent}
                                </motion.div>
                            ) : (
                                <div className={cn(
                                    isExpanded ? "p-8 rounded-2xl border border-black/10 dark:border-white/10 max-w-2xl w-full shadow-2xl mx-auto mt-20 bg-white dark:bg-black text-[color:var(--foreground-strong)]" : ""
                                )}>
                                    {children}

                                    {/* Lead me to there button (Only when expanded and no custom content) */}
                                    {isExpanded && !autoRedirect && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                            transition={{ delay: 0.3 }}
                                            className="flex justify-center pt-4 border-t border-black/10 dark:border-white/10"
                                        >
                                            <motion.button
                                                whileHover={{ scale: 1.05 }}
                                                whileTap={{ scale: 0.95 }}
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleRedirect();
                                                }}
                                                className="px-8 py-3 bg-white text-black rounded-full font-bold text-lg shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-shadow flex items-center gap-2"
                                            >
                                                Lead me to there! 🚀
                                            </motion.button>
                                        </motion.div>
                                    )}
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            </motion.div>
        </>
    );
}
