'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { useRouter } from 'next/navigation';

interface ZoomableCardProps {
    children: React.ReactNode;
    className?: string;
    redirectUrl?: string;
    showcaseContent?: React.ReactNode;
    expandedContent?: React.ReactNode;
}

export default function ZoomableCard({ children, className, redirectUrl, showcaseContent, expandedContent }: ZoomableCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isRedirecting, setIsRedirecting] = useState(false);
    const router = useRouter();

    const handleClick = () => {
        setIsExpanded(true);
    };

    const handleRedirect = () => {
        if (!redirectUrl) return;
        setIsRedirecting(true);
        setTimeout(() => {
            router.push(redirectUrl);
        }, 800);
    };

    return (
        <>
            {/* Overlay */}
            {(isExpanded || isRedirecting) && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-black/95 backdrop-blur-sm z-50"
                    onClick={!isRedirecting ? () => setIsExpanded(false) : undefined}
                />
            )}

            <motion.div
                layout
                onClick={!isExpanded ? handleClick : undefined}
                className={cn(
                    'relative bg-black/40 backdrop-blur-md border border-white/10 overflow-hidden',
                    (isExpanded || isRedirecting) ? 'fixed inset-0 z-[60] rounded-none border-none' : 'rounded-2xl cursor-pointer hover:border-white/30',
                    className
                )}
                whileHover={!isExpanded ? {
                    scale: 1.02,
                    y: -5,
                    borderColor: "rgba(255, 255, 255, 0.3)",
                    boxShadow: "0 10px 30px -10px rgba(0,0,0,0.5)"
                } : undefined}
                transition={{
                    layout: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
                    scale: { duration: 0.3 },
                    y: { duration: 0.3 }
                }}
            >
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
                                    isExpanded ? "bg-black/60 backdrop-blur-xl p-8 rounded-2xl border border-white/10 max-w-2xl w-full shadow-2xl mx-auto mt-20" : ""
                                )}>
                                    {children}

                                    {/* Lead me to there button (Only when expanded and no custom content) */}
                                    {isExpanded && (
                                        <motion.div
                                            initial={{ opacity: 0, height: 0, marginTop: 0 }}
                                            animate={{ opacity: 1, height: 'auto', marginTop: 24 }}
                                            transition={{ delay: 0.3 }}
                                            className="flex justify-center pt-4 border-t border-white/10"
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
