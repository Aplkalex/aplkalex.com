'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink } from 'lucide-react';

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

export default function Home() {
    return (
        <div className="container mx-auto px-6 space-y-32 pb-20">
            {/* Hero Section */}
            <section id="hero" className="min-h-[80vh] flex flex-col justify-center items-center text-center relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="max-w-4xl mx-auto"
                >
                    <div className="inline-block px-4 py-1.5 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-gray-300 backdrop-blur-sm">
                        Cybersecurity • FinTech • AI
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
                        Innovating at the Intersection of <br />
                        <span className="text-gradient">Tech & Finance</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                        Computer Science student at CUHK & UBC. Passionate about building secure, intelligent systems that solve real-world problems.
                    </p>
                    <div className="flex gap-4 justify-center">
                        <Link
                            href="#projects"
                            className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                        >
                            View Work <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="#about"
                            className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                        >
                            More About Me
                        </Link>
                    </div>
                </motion.div>
            </section>

            {/* About Section */}
            <section id="about">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={fadeInUp}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display">About Me</h2>
                    <GlassCard className="prose prose-invert max-w-none">
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am a second‑year Computer Science student at <strong className="text-white">The Chinese University of Hong Kong</strong>, pursuing a double degree in Integrated BBA and a minor in Mathematics. Currently, I am studying as an exchange student at the <strong className="text-white">University of British Columbia</strong>, Vancouver.
                        </p>
                        <br />
                        <p className="text-lg text-gray-300 leading-relaxed">
                            I am passionate about <strong className="text-white">cybersecurity, financial technology, AI and LLM applications</strong>, and interdisciplinary innovations. Feel free to find me discuss security challenges, data analytics, and potential collaborations!
                        </p>
                        <div className="flex flex-wrap gap-2 mt-8">
                            {['Database', 'Data Analytics', 'Finance', 'FinTech', 'Cybersecurity', 'Mental Health', 'Philosophy', 'Hong Kong History', 'Chemistry', 'Applied Maths'].map((tag) => (
                                <span key={tag} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300">
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </GlassCard>
                </motion.div>
            </section>

            {/* Projects Section */}
            <section id="projects">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display">Featured Projects</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                                <div className="flex gap-4 mt-auto">
                                    <Link href="/queuesis" className="text-sm font-semibold hover:text-white text-gray-300 flex items-center gap-1">
                                        View Details <ArrowRight size={14} />
                                    </Link>
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
                            </GlassCard>
                        </motion.div>
                    </div>
                </motion.div>
            </section>

            {/* Awards Section */}
            <section id="awards">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="max-w-4xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center font-display">Awards & Honors</h2>
                    <div className="space-y-6">
                        {[
                            {
                                date: 'Aug 2025',
                                title: 'Cyber Attack and Defence Elite Training cum Tournament 2025',
                                award: 'Merit Award',
                                desc: 'Executed attack strategies (SQLi, XSS) and coordinated defensive posture.'
                            },
                            {
                                date: 'Apr 2025',
                                title: 'GenAI Application in Financial Services',
                                award: '2nd Runner Up',
                                desc: 'Led the design of a prototype integrating GenAI APIs for real-time financial insights.'
                            },
                            {
                                date: 'Dec 2022',
                                title: 'Inter-School Cybersecurity Competition 2022',
                                award: 'Medallion',
                                desc: 'Gained hands-on experience with AWS (EC2, IAM, S3) and solved cybersecurity challenges.'
                            }
                        ].map((item, i) => (
                            <motion.div key={i} variants={fadeInUp}>
                                <GlassCard className="flex flex-col md:flex-row gap-6 items-start">
                                    <div className="min-w-[100px] text-gray-500 font-display pt-1">{item.date}</div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                        <span className="inline-block px-2 py-1 bg-white/10 rounded text-xs text-white mb-3">{item.award}</span>
                                        <p className="text-gray-400 text-sm">{item.desc}</p>
                                    </div>
                                </GlassCard>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="text-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="max-w-2xl mx-auto"
                >
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 font-display">Let's Connect</h2>
                    <p className="text-gray-400 mb-10">
                        I'm always open to discussing security challenges, data analytics, and potential collaborations.
                    </p>
                    <a
                        href="mailto:contact@aplkalex.com"
                        className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform"
                    >
                        Get in Touch
                    </a>
                </motion.div>
            </section>
        </div>
    );
}
