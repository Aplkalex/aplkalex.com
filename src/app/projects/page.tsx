'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, ArrowLeft } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

export default function ProjectsPage() {
    return (
        <div className="container mx-auto px-6 py-32">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold mb-12 font-display"
            >
                All Projects
            </motion.h1>

            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {/* Project 1: Queuesis */}
                <motion.div variants={fadeInUp}>
                    <GlassCard className="h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold font-display">Queuesis</h3>
                            <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">Nov 2025 - Present</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 flex-grow">
                            A modern web application built to address long-standing usability and performance issues in CUHK’s system (CUSIS).
                        </p>
                        <div className="flex gap-2 mb-6 flex-wrap">
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">Next.js</span>
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">TypeScript</span>
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">Tailwind</span>
                        </div>
                        <div className="flex gap-4 mt-auto flex-wrap">
                            <Link href="/queuesis" className="text-sm font-semibold hover:text-white text-gray-300 flex items-center gap-1">
                                View Details <ArrowRight size={14} />
                            </Link>
                            <a href="https://queuesis.aplkalex.com" target="_blank" className="text-sm hover:text-white text-gray-300 flex items-center gap-1">
                                <ExternalLink size={14} /> Live
                            </a>
                            <a href="https://github.com/Aplkalex/Queuesis" target="_blank" className="text-sm hover:text-white text-gray-300 flex items-center gap-1">
                                <Github size={14} /> Code
                            </a>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Project 2: uPals */}
                <motion.div variants={fadeInUp}>
                    <GlassCard className="h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold font-display">CUHK uPals</h3>
                            <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">Feb 2025 - Present</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 flex-grow">
                            Promoted mental health awareness and emotional wellbeing. Organized outreach events and provided peer support.
                        </p>
                        <div className="flex gap-2 mb-6 flex-wrap">
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">Communication</span>
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">Mental Health</span>
                        </div>
                    </GlassCard>
                </motion.div>

                {/* Project 3: Carrie */}
                <motion.div variants={fadeInUp}>
                    <GlassCard className="h-full flex flex-col">
                        <div className="flex justify-between items-start mb-4">
                            <h3 className="text-xl font-bold font-display">Carrie - AI Therapy</h3>
                            <span className="text-xs text-gray-500 border border-white/10 px-2 py-1 rounded">Oct 2025</span>
                        </div>
                        <p className="text-gray-400 text-sm mb-6 flex-grow">
                            <strong>Best Use of ElevenLabs @ StormHacks 2025</strong>. AI peer counselor integrating computer vision and speech-to-text.
                        </p>
                        <div className="flex gap-2 mb-6 flex-wrap">
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">AI</span>
                            <span className="text-xs px-2 py-1 bg-white/5 rounded text-gray-300">LiveKit</span>
                        </div>
                        <div className="flex gap-4 mt-auto flex-wrap">
                            <a href="https://devpost.com/software/carrie-ai-therapy-in-your-pocket" target="_blank" className="text-sm hover:text-white text-gray-300 flex items-center gap-1">
                                <ExternalLink size={14} /> Devpost
                            </a>
                            <a href="https://github.com/TimSeah/StormHacks_LumberLoons" target="_blank" className="text-sm hover:text-white text-gray-300 flex items-center gap-1">
                                <Github size={14} /> Repo
                            </a>
                        </div>
                    </GlassCard>
                </motion.div>
            </motion.div>
        </div>
    );
}
