'use client';

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
                    <div
                        key={award.title}
                        className="animate-fade-in-up"
                        style={{ animationDelay: `${index * 0.1}s`, animationFillMode: 'both' }}
                    >
                        <ZoomableCard
                            className="h-full flex flex-col glass-card transition-colors hover:border-[var(--hover-border)]"
                            expandedContent={
                                <div className="p-8 max-w-3xl mx-auto" style={{ color: 'inherit' }}>
                                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${award.color} mb-4`}>
                                        {award.date}
                                    </div>
                                    <h3 className="text-3xl font-bold font-display mb-2" style={{ color: 'inherit' }}>{award.title}</h3>
                                    <div className="flex flex-col gap-1 opacity-80 mb-8" style={{ color: 'inherit' }}>
                                        <span className="flex items-center gap-2"><Icon size={16} /> {award.issuer}</span>
                                        <span className="flex items-center gap-2"><Globe size={16} /> {award.association}</span>
                                    </div>
                                    <div className="max-w-none" style={{ color: 'inherit' }}>
                                        {award.highlights && (
                                            <ul className="list-disc pl-5 space-y-2" style={{ color: 'inherit' }}>
                                                {award.highlights.map((item, index) => (
                                                    <li key={index} style={{ color: 'inherit' }}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {award.paragraphs && (
                                            <div className="space-y-4" style={{ color: 'inherit' }}>
                                                {award.paragraphs.map((paragraph, index) => (
                                                    <p key={index} style={{ color: 'inherit' }}>{paragraph}</p>
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
                                <div className="flex justify-between items-center mt-auto pt-4 border-t border-[var(--glass-border)]">
                                    <span className="text-xs theme-text-soft font-mono">{award.date}</span>
                                    <span className="text-xs px-3 py-1 rounded-full bg-black/5 text-black hover:bg-black/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 transition-colors">Read More</span>
                                </div>
                            </div>
                        </ZoomableCard>
                    </div>
                );
            })}
        </div>
    );
}
