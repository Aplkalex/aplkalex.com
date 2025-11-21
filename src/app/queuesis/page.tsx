'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { ArrowLeft, ExternalLink, Github, Clock, Zap, Layout, Database, AlertCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import QueuesisShowcase from '@/components/ui/QueuesisShowcase';
import Image from 'next/image';

const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'features', label: 'Key Features' },
    { id: 'tech', label: 'Tech Stack' },
];

// Mock Data removed as it is now inline

export default function QueuesisPage() {
    const [activeTab, setActiveTab] = useState('overview');
    const [isLaunching, setIsLaunching] = useState(false);

    return (
        <div className="min-h-screen relative">
            {/* Interactive Background */}
            <div className="fixed inset-0 z-0">
                <QueuesisShowcase variant="fullscreen" />
                {/* Dark overlay to ensure text readability */}
                <div className="absolute inset-0 bg-black/30 backdrop-blur-xl pointer-events-none" />
            </div>

            <div className="container mx-auto px-6 py-12 pb-32 relative z-10 pointer-events-none">
                {/* Header Section */}
                <div className="mb-16 pointer-events-auto">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm text-gray-400 hover:text-white transition-colors mb-8 group"
                    >
                        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
                        Back to Projects
                    </Link>

                    <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-6xl md:text-8xl font-bold font-display mb-6 tracking-tight"
                        >
                            Queuesis
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="text-xl text-gray-400 mb-10 max-w-2xl"
                        >
                            A modern course-queueing experience built to fix everything CUSIS didn't.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="flex flex-wrap justify-center gap-4"
                        >
                            <motion.button
                                onClick={(e) => {
                                    e.preventDefault();
                                    setIsLaunching(true);
                                    window.open("https://queuesis.aplkalex.com/", "_blank");
                                    setTimeout(() => setIsLaunching(false), 600);
                                }}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            className="group px-8 py-3 bg-white text-black rounded-full font-bold text-lg transition-all flex items-center gap-2 shadow-[0_0_25px_rgba(255,255,255,0.25)] hover:shadow-[0_0_45px_rgba(255,255,255,0.4)] relative overflow-hidden"
                        >
                            <AnimatePresence>
                                {isLaunching && (
                                    <motion.span
                                        key="launch-pulse"
                                        className="absolute inset-0 rounded-full bg-white/40"
                                        initial={{ scale: 0.5, opacity: 0.6 }}
                                        animate={{ scale: 1.6, opacity: 0 }}
                                        exit={{ opacity: 0 }}
                                        transition={{ duration: 0.5, ease: "easeOut" }}
                                    />
                                )}
                            </AnimatePresence>
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 group-hover:opacity-100 blur-lg transition-opacity duration-500"></span>
                            <span className="relative flex items-center gap-2">
                                Launch App <ExternalLink className="w-4 h-4" />
                            </span>
                            </motion.button>
                            <a
                                href="https://github.com/aplkalex/queuesis"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 bg-white/10 text-white rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center gap-2 border border-white/10"
                            >
                                <Github className="w-5 h-5" />
                                Source Code
                            </a>
                        </motion.div>
                    </div>
                </div>

                {/* Content Tabs */}
                <div className="max-w-4xl mx-auto pointer-events-auto">
                    <div className="flex justify-center mb-12">
                        <div className="p-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-sm">
                            {['overview', 'features', 'stack'].map((tab) => (
                                <button
                                    key={tab}
                                    onClick={() => setActiveTab(tab)}
                                    className={cn(
                                        "px-6 py-2 rounded-full text-sm font-medium transition-all",
                                        activeTab === tab
                                            ? "bg-white text-black shadow-lg"
                                            : "text-gray-400 hover:text-white"
                                    )}
                                >
                                    {tab.charAt(0).toUpperCase() + tab.slice(1).replace('stack', ' Tech Stack').replace('features', ' Key Features')}
                                </button>
                            ))}
                        </div>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={activeTab}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {activeTab === 'overview' && (
                                <div className="bg-black/40 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
                                    <h2 className="text-2xl font-bold mb-4 font-display">Project Overview</h2>
                                    <p className="text-gray-300 leading-relaxed mb-8">
                                        Queuesis is a CUHK-focused timetable planner that combines intuitive drag-and-drop editing with a powerful
                                        deterministic schedule generator. Course data is sourced from CUSIS and can optionally be synced to MongoDB
                                        Atlas via Prisma for enhanced performance.
                                    </p>

                                    <div className="grid md:grid-cols-2 gap-6">
                                        <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-yellow-400">
                                                <Zap className="w-5 h-5" /> Why Queuesis?
                                            </h3>
                                            <ul className="space-y-2 text-sm text-gray-400">
                                                <li className="flex items-center gap-2">• Smart Scheduling with 6 modes</li>
                                                <li className="flex items-center gap-2">• Real-time conflict validation</li>
                                                <li className="flex items-center gap-2">• Works with or without database</li>
                                                <li className="flex items-center gap-2">• Modern Next.js 16 Stack</li>
                                            </ul>
                                        </div>
                                        <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                                            <h3 className="text-lg font-bold mb-3 flex items-center gap-2 text-green-400">
                                                <Clock className="w-5 h-5" /> Current Support
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                Currently supports <span className="text-white font-bold">2025-2026 Term 2</span> course data.
                                                Support for additional terms will be added in future updates.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'features' && (
                                <div className="grid gap-4">
                                    {[
                                        { title: "Drag & Drop Interface", desc: "Intuitive timetable management with dnd-kit", icon: <Layout className="w-6 h-6 text-purple-400" /> },
                                        { title: "Smart Generator", desc: "Generate conflict-free schedules automatically", icon: <Zap className="w-6 h-6 text-yellow-400" /> },
                                        { title: "Real-time Validation", desc: "Instant feedback on course conflicts", icon: <AlertCircle className="w-6 h-6 text-red-400" /> },
                                        { title: "Data Sync", desc: "Optional MongoDB sync for persistence", icon: <Database className="w-6 h-6 text-blue-400" /> }
                                    ].map((feature, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: i * 0.1 }}
                                            className="bg-black/40 border border-white/10 rounded-xl p-6 flex items-start gap-4 backdrop-blur-md hover:bg-white/5 transition-colors"
                                        >
                                            <div className="p-3 bg-white/5 rounded-lg">
                                                {feature.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold mb-1">{feature.title}</h3>
                                                <p className="text-gray-400 text-sm">{feature.desc}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            )}

                            {activeTab === 'stack' && (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {[
                                        { name: "Next.js 16", icon: <svg viewBox="0 0 180 180" className="w-8 h-8 fill-white"><mask height="180" id="mask0_408_134" maskUnits="userSpaceOnUse" width="180" x="0" y="0" style={{ maskType: 'alpha' }}><circle cx="90" cy="90" fill="black" r="90"></circle></mask><g mask="url(#mask0_408_134)"><circle cx="90" cy="90" data-circle="true" fill="black" r="90"></circle><path d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z" fill="url(#paint0_linear_408_134)"></path><rect fill="url(#paint1_linear_408_134)" height="72" width="12" x="115" y="54"></rect></g><defs><linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_408_134" x1="109" x2="144.5" y1="116.5" y2="160.5"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_408_134" x1="121" x2="120.799" y1="54" y2="106.875"><stop stopColor="white"></stop><stop offset="1" stopColor="white" stopOpacity="0"></stop></linearGradient></defs></svg> },
                                        { name: "TypeScript", icon: <Image src="/TypeScript.svg" alt="TypeScript logo" width={32} height={32} className="w-8 h-8" /> },
                                        { name: "Tailwind CSS", icon: <svg viewBox="0 0 24 24" className="w-8 h-8 fill-[#06B6D4]"><path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" /></svg> },
                                        { name: "Prisma", icon: <Image src="/Prisma.svg" alt="Prisma logo" width={32} height={32} className="w-8 h-8" /> },
                                        { name: "MongoDB", icon: <Image src="/MongoDB.svg" alt="MongoDB logo" width={32} height={32} className="w-8 h-8" /> },
                                        { name: "dnd-kit", icon: <div className="w-8 h-8 flex items-center justify-center font-bold text-xl">🖐️</div> },
                                        { name: "Vercel", icon: <Image src="/vercel.svg" alt="Vercel logo" width={32} height={32} className="w-8 h-8" /> }
                                    ].map((tech, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ delay: i * 0.05 }}
                                            className="bg-black/40 border border-white/10 rounded-xl p-6 flex flex-col items-center gap-3 hover:border-white/30 transition-colors backdrop-blur-md group"
                                        >
                                            <div className="group-hover:scale-110 transition-transform duration-300">
                                                {tech.icon}
                                            </div>
                                            <span className="font-mono text-sm text-gray-300">{tech.name}</span>
                                        </motion.div>
                                    ))}
                                </div>
                            )}
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
