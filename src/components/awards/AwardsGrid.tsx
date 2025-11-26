'use client';

import { motion } from 'framer-motion';
import ZoomableCard from '@/components/ui/ZoomableCard';
import { awards } from '@/data/awards';
import { Globe, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

interface AwardsGridProps {
    className?: string;
}

export default function AwardsGrid({ className }: AwardsGridProps) {
    if (awards.length === 0) {
        return (
            <div className={cn("rounded-2xl border border-white/10 p-12 text-center text-gray-500", className)}>
                Awards will appear here soon.
            </div>
        );
    }

    return (
        <div className={cn("grid md:grid-cols-2 gap-6", className)}>
            {awards.map((award, index) => {
                const Icon = award.icon ?? Shield;

                return (
                    <motion.div
                        key={award.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                    >
                        <ZoomableCard
                            className="h-full flex flex-col bg-white/90 text-gray-900 border border-black/5 backdrop-blur-md shadow-lg hover:border-black/10 dark:bg-white/5 dark:text-white dark:border-white/10 hover:bg-white/10 transition-colors"
                            expandedContent={
                                <div className="p-8 max-w-3xl mx-auto">
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${award.color} mb-4`}>
                                        {award.date}
                                    </div>
                                    <h3 className="text-3xl font-bold font-display mb-2">{award.title}</h3>
                                    <div className="flex flex-col gap-1 text-gray-400 mb-8">
                                        <span className="flex items-center gap-2"><Icon size={16} /> {award.issuer}</span>
                                        <span className="flex items-center gap-2"><Globe size={16} /> {award.association}</span>
                                    </div>
                                    <div className="prose prose-invert max-w-none">
                                        {award.highlights && (
                                            <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                                {award.highlights.map((item, index) => (
                                                    <li key={index}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {award.paragraphs && (
                                            <div className="space-y-4 text-gray-300">
                                                {award.paragraphs.map((paragraph, index) => (
                                                    <p key={index}>{paragraph}</p>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            }
                        >
                            <div className="flex flex-col h-full p-4">
                                <h3 className="text-xl font-bold font-display mb-2 leading-tight theme-text-strong">{award.title}</h3>
                                <p className="text-sm theme-text-muted mb-4 flex-grow">{award.issuer}</p>
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-black/10 dark:border-white/10">
                                    <span className="text-xs theme-text-soft font-mono">{award.date}</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-black/5 text-black hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-colors">Read More</span>
                                </div>
                            </div>
                        </ZoomableCard>
                    </motion.div>
                );
            })}
        </div>
    );
}
