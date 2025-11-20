'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Lock, Calendar, Clock, Zap, Layout, Database, Shield } from 'lucide-react';
import { cn } from '@/lib/utils';

const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'tech', label: 'Tech Stack' },
];

const features = [
    {
        title: 'Intelligent Scheduling',
        icon: <Calendar className="w-6 h-6 text-purple-400" />,
        desc: 'Deterministic algorithm with 6 preference modes: Short Breaks, Long Breaks, Consistent Times, Start Late, End Early, and Days Off.',
    },
    {
        title: 'Smart Conflict Detection',
        icon: <Shield className="w-6 h-6 text-red-400" />,
        desc: 'Real-time validation with visual indicators. Automatically detects time overlaps and provides helpful error messages.',
    },
    {
        title: 'Interactive Interface',
        icon: <Layout className="w-6 h-6 text-blue-400" />,
        desc: 'Drag & Drop courses, snap-to-grid scheduling, and instant search filtering. Fully responsive modern UI.',
    },
    {
        title: 'Lock & Constraints',
        icon: <Lock className="w-6 h-6 text-yellow-400" />,
        desc: 'Pin specific sections (LEC/TUT/LAB) to freeze them. The auto-generator respects these locks as hard constraints.',
    },
];

const techStack = [
    { name: 'TypeScript', category: 'Language' },
    { name: 'Next.js 16', category: 'Framework' },
    { name: 'React 19', category: 'Library' },
    { name: 'Tailwind CSS', category: 'Styling' },
    { name: 'MongoDB', category: 'Database' },
    { name: 'Prisma', category: 'ORM' },
];

export default function QueuesisPage() {
    const [activeTab, setActiveTab] = useState('overview');

    return (
        <div className="container mx-auto px-6 py-12 pb-32">
            <Link href="/#projects" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={18} className="mr-2" /> Back to Projects
            </Link>

            {/* Hero */}
            <div className="text-center mb-16">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display">Queuesis</h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
                        A modern course-queueing experience built to fix everything CUSIS didn’t.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="https://queuesis.aplkalex.com/"
                            target="_blank"
                            className="px-8 py-3 bg-white text-black rounded-full font-bold hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            Launch App <ExternalLink size={18} />
                        </a>
                        <a
                            href="https://github.com/Aplkalex/Queuesis"
                            target="_blank"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-bold hover:bg-white/10 transition-colors flex items-center gap-2"
                        >
                            <Github size={18} /> Source Code
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center mb-12">
                <div className="bg-white/5 p-1 rounded-full border border-white/10 backdrop-blur-md">
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={cn(
                                'px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                                activeTab === tab.id ? 'bg-white text-black shadow-lg' : 'text-gray-400 hover:text-white'
                            )}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                >
                    {activeTab === 'overview' && (
                        <div className="max-w-4xl mx-auto space-y-8">
                            <GlassCard>
                                <h3 className="text-2xl font-bold mb-4 font-display">Project Overview</h3>
                                <p className="text-gray-300 leading-relaxed mb-6">
                                    Queuesis is a CUHK-focused timetable planner that combines intuitive drag-and-drop editing with a powerful deterministic schedule generator. Course data is sourced from CUSIS and can optionally be synced to MongoDB Atlas via Prisma for enhanced performance.
                                </p>
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <h4 className="font-bold mb-2 flex items-center gap-2"><Zap className="text-yellow-400" /> Why Queuesis?</h4>
                                        <ul className="list-disc list-inside text-sm text-gray-400 space-y-2">
                                            <li>Smart Scheduling with 6 modes</li>
                                            <li>Real-time conflict validation</li>
                                            <li>Works with or without database</li>
                                            <li>Modern Next.js 16 Stack</li>
                                        </ul>
                                    </div>
                                    <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                                        <h4 className="font-bold mb-2 flex items-center gap-2"><Clock className="text-green-400" /> Current Support</h4>
                                        <p className="text-sm text-gray-400">
                                            Currently supports <strong>2025-2026 Term 2</strong> course data. Support for additional terms will be added in future updates.
                                        </p>
                                    </div>
                                </div>
                            </GlassCard>

                            {/* Video Placeholder */}
                            <GlassCard className="aspect-video flex items-center justify-center bg-black/50">
                                <div className="text-center">
                                    <p className="text-gray-500 mb-2">Video Showcase</p>
                                    <p className="text-xs text-gray-600">Queuesis.Showcase.Video.mp4</p>
                                </div>
                            </GlassCard>
                        </div>
                    )}

                    {activeTab === 'features' && (
                        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">
                            {features.map((feature, idx) => (
                                <GlassCard key={idx} className="h-full">
                                    <div className="mb-4 p-3 bg-white/5 rounded-lg w-fit border border-white/10">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-3 font-display">{feature.title}</h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
                                </GlassCard>
                            ))}
                        </div>
                    )}

                    {activeTab === 'tech' && (
                        <div className="max-w-4xl mx-auto">
                            <GlassCard>
                                <h3 className="text-2xl font-bold mb-8 font-display text-center">Technology Stack</h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {techStack.map((tech, idx) => (
                                        <div key={idx} className="p-4 bg-white/5 border border-white/10 rounded-xl text-center hover:bg-white/10 transition-colors">
                                            <p className="font-bold text-lg mb-1">{tech.name}</p>
                                            <p className="text-xs text-gray-500 uppercase tracking-wider">{tech.category}</p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </div>
                    )}
                </motion.div>
            </AnimatePresence>
        </div>
    );
}
