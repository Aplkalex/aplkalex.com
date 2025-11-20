'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, Terminal, Code2, Database, Cpu, Globe, Shield } from 'lucide-react';

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

const techStack = [
    { name: 'Next.js', icon: <Globe size={16} /> },
    { name: 'TypeScript', icon: <Code2 size={16} /> },
    { name: 'React', icon: <Code2 size={16} /> },
    { name: 'Tailwind', icon: <Code2 size={16} /> },
    { name: 'Python', icon: <Terminal size={16} /> },
    { name: 'Node.js', icon: <Cpu size={16} /> },
    { name: 'MongoDB', icon: <Database size={16} /> },
    { name: 'Cybersecurity', icon: <Shield size={16} /> },
];

export default function Home() {
    return (
        <div className="container mx-auto px-6 space-y-32 pb-20">
            {/* Hero Section */}
            <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-purple-300 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
                            </span>
                            Available for collaborations
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
                            Hi, I'm <span className="text-gradient">Aplkalex</span>.
                        </h1>
                        <h2 className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                            CS Student @ CUHK & UBC <br />
                            <span className="text-white font-medium">Full Stack Developer</span> & Security Enthusiast.
                        </h2>
                        <p className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                            I build secure, intelligent systems that solve real-world problems. Passionate about FinTech, AI, and making the web a safer place.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link
                                href="#projects"
                                className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:scale-105 transition-transform flex items-center gap-2"
                            >
                                View Work <ArrowRight size={18} />
                            </Link>
                            <Link
                                href="#contact"
                                className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors"
                            >
                                Contact Me
                            </Link>
                        </div>

                        {/* Tech Stack Mini-Grid */}
                        <div className="mt-12 pt-8 border-t border-white/10">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Technologies</p>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech) => (
                                    <div key={tech.name} className="flex items-center gap-2 px-3 py-1.5 bg-white/5 border border-white/10 rounded-md text-xs text-gray-300 hover:border-white/30 transition-colors cursor-default">
                                        {tech.icon}
                                        {tech.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Visual Element / Code Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20"></div>
                        <GlassCard className="relative bg-black/40 font-mono text-sm overflow-hidden">
                            <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>
                            <div className="space-y-2 text-gray-300">
                                <div className="flex">
                                    <span className="text-purple-400 mr-2">const</span>
                                    <span className="text-yellow-200">developer</span>
                                    <span className="text-white mx-2">=</span>
                                    <span className="text-white">{'{'}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">name</span>: <span className="text-green-300">'Aplkalex'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">role</span>: <span className="text-green-300">'Full Stack Developer'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">education</span>: <span className="text-white">['CUHK', 'UBC']</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">passions</span>: <span className="text-white">[</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-300">'Cybersecurity'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-300">'FinTech'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-300">'AI & LLMs'</span>
                                </div>
                                <div className="pl-4 text-white">],</div>
                                <div className="pl-4">
                                    <span className="text-blue-300">status</span>: <span className="text-green-300">'Building cool stuff 🚀'</span>
                                </div>
                                <div className="text-white">{'}'};</div>
                            </div>
                        </GlassCard>
                    </motion.div>
                </div>
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
