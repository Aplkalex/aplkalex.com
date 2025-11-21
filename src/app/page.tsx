'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import ZoomableCard from '@/components/ui/ZoomableCard';
import QueuesisShowcase from '@/components/ui/QueuesisShowcase';
import AwardsGrid from '@/components/awards/AwardsGrid';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, Terminal, Code2, Database, Cpu, Globe, Shield, Linkedin } from 'lucide-react';
import Typewriter from '@/components/ui/Typewriter';
import TechMarquee from '@/components/ui/TechMarquee';
import ParallaxText from '@/components/ui/ParallaxText';

import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPython, SiNodedotjs, SiMongodb, SiJavascript, SiCplusplus, SiC, SiAmazonwebservices, SiMysql } from 'react-icons/si';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

const slideInLeft = {
    initial: { opacity: 0, x: -50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const slideInRight = {
    initial: { opacity: 0, x: 50 },
    animate: { opacity: 1, x: 0 },
    transition: { duration: 0.6, ease: "easeOut" }
};

const popIn = {
    initial: { opacity: 0, scale: 0.9 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.4, ease: "easeOut" }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.05
        }
    }
};

const techStack = [
    { name: 'Python', icon: <SiPython size={18} />, color: '#3776AB' },
    {
        name: 'C / C++',
        icon: (
            <div className="flex items-center gap-1">
                <SiC size={16} />
                <SiCplusplus size={16} />
            </div>
        ),
        color: '#A8B9CC'
    },
    { name: 'JavaScript', icon: <SiJavascript size={18} />, color: '#F7DF1E' },
    { name: 'TypeScript', icon: <SiTypescript size={18} />, color: '#3178C6' },
    { name: 'SQL', icon: <SiMysql size={18} />, color: '#00618A' },
    { name: 'React', icon: <SiReact size={18} />, color: '#61DAFB' },
    { name: 'Next.js', icon: <SiNextdotjs size={18} />, color: '#ffffff' },
    { name: 'Node.js', icon: <SiNodedotjs size={18} />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb size={18} />, color: '#47A248' },
    { name: 'Tailwind CSS', icon: <SiTailwindcss size={18} />, color: '#06B6D4' },
    { name: 'AWS', icon: <SiAmazonwebservices size={18} />, color: '#FF9900' },
    { name: 'Cybersecurity', icon: <Shield size={16} />, color: '#00FF00' },
];

export default function Home() {
    return (
        <div className="container mx-auto px-6 space-y-32 pb-20">
            {/* Hero Section */}
            <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-green-300 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            Available for collaborations
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold mb-6 font-display leading-tight">
                            Hi <motion.span
                                style={{ display: 'inline-block', transformOrigin: '70% 70%' }}
                                animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                                transition={{
                                    duration: 2.5,
                                    ease: "easeInOut",
                                    times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 1],
                                    repeat: Infinity,
                                    repeatDelay: 1
                                }}
                            >👋</motion.span>, I'm <span className="text-gradient">Aplkalex</span>.
                        </motion.h1>
                        <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl text-gray-300 mb-6 font-light">
                            IBBA & Computer Science Student @ CUHK | Exchange @ UBC <br />
                            <span className="text-white font-medium">Full Stack Developer with interests in FinTech and Mental Health.</span>
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                            I build convenient, impactful systems that solve real-world problems. Passionate about AI, FinTech, and making the web a more human-centered space.
                        </motion.p>
                        <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#projects"
                                    className="px-8 py-3 bg-white text-black rounded-full font-semibold flex items-center gap-2 border border-transparent"
                                >
                                    View Work <ArrowRight size={18} />
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <Link
                                    href="#contact"
                                    className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
                                >
                                    Contact Me
                                </Link>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                <a
                                    href="/Alex%20Resume%202025.pdf"
                                    download="Alex Resume 2025.pdf"
                                    className="px-8 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
                                >
                                    Get Resume <ExternalLink size={16} />
                                </a>
                            </motion.div>
                        </motion.div>

                        {/* Tech Stack Marquee */}
                        <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-white/10 w-full max-w-[90vw] md:max-w-md lg:max-w-lg overflow-hidden">
                            <p className="text-xs text-gray-500 uppercase tracking-widest mb-4">Technologies</p>
                            <TechMarquee items={techStack} />
                        </motion.div>
                    </motion.div>

                    {/* Visual Element / Code Block */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                        className="hidden lg:block relative"
                    >
                        <div className="absolute -inset-1 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl blur-lg opacity-60"></div>
                        <GlassCard className="relative backdrop-blur-2xl font-mono text-sm overflow-hidden border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.55)] bg-black/10">
                            <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>

                            <motion.div
                                className="space-y-2 text-white/80"
                                initial="initial"
                                animate="animate"
                                variants={{
                                    animate: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                <div className="flex">
                                    <span className="text-white/70 mr-2">const</span>
                                    <span className="text-white">developer</span>
                                    <span className="text-white/60 mx-2">=</span>
                                    <span className="text-white/60">{'{'}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-white/60">name</span>: <span className="text-white">'<Typewriter text="Alex, Wong Ka Hei" delay={0.5} />'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-white/60">role</span>: <span className="text-white">'<Typewriter text="Full Stack Developer" delay={1.0} />'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-white/60">education</span>: <span className="text-white/80">['CUHK', 'UBC (Exchange)']</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-white/60">passions</span>: <span className="text-white/70">[</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-white/90">'<Typewriter text="Cybersecurity" delay={1.5} />'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-white/90">'<Typewriter text="FinTech" delay={2.0} />'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-white/90">'<Typewriter text="AI & LLMs" delay={2.5} />'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-white/90">'<Typewriter text="Squash" delay={3.0} />'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-white/90">'<Typewriter text="Handbell" delay={3.5} />'</span>
                                </div>
                                <div className="pl-4 text-white/70">],</div>
                                <div className="pl-4">
                                    <span className="text-white/60">status</span>: <span className="text-white">'<Typewriter text="Building cool stuff" delay={4.0} />'</span>
                                </div>
                                <div className="text-white/70">{'}'};</div>
                            </motion.div>
                        </GlassCard>
                    </motion.div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="scroll-mt-28">
                <div className="max-w-4xl mx-auto">
                    <div className="mb-12">
                        <ParallaxText baseVelocity={-1.5} className="opacity-10 w-screen -ml-[calc(50vw-50%)]">
                            <span className="text-6xl md:text-8xl font-bold font-display uppercase">About Me About Me About Me</span>
                        </ParallaxText>
                        <motion.h2
                            initial="initial"
                            whileInView="animate"
                            viewport={{ once: true }}
                            variants={fadeInUp}
                            className="text-3xl md:text-4xl font-bold text-center font-display -mt-8 relative z-10"
                        >
                            About Me
                        </motion.h2>
                    </div>
                    <GlassCard className="overflow-hidden">
                        <div className="grid md:grid-cols-3 gap-8">
                            <motion.div
                                className="md:col-span-2 prose prose-invert max-w-none"
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={slideInLeft}
                            >
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    I am a second‑year Computer Science student at <strong className="text-white">The Chinese University of Hong Kong</strong>, pursuing a double degree in Integrated BBA and a minor in Mathematics. Currently, I am studying as an exchange student at the <strong className="text-white">University of British Columbia</strong>, Vancouver.
                                </p>
                                <br />
                                <p className="text-lg text-gray-300 leading-relaxed">
                                    I am passionate about <strong className="text-white">cybersecurity, financial technology, AI and LLM applications</strong>, and interdisciplinary innovations. Feel free to find me discuss security challenges, data analytics, and potential collaborations!
                                </p>
                            </motion.div>
                            <motion.div
                                className="flex flex-wrap content-start gap-2"
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={staggerContainer}
                            >
                                {['Database', 'Data Analytics', 'Finance', 'FinTech', 'Cybersecurity', 'Mental Health', 'Philosophy', 'Hong Kong History', 'Chemistry', 'Applied Maths'].map((tag) => (
                                    <motion.span
                                        key={tag}
                                        variants={popIn}
                                        whileHover={{ scale: 1.1, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                                        className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 cursor-pointer"
                                    >
                                        {tag}
                                    </motion.span>
                                ))}
                            </motion.div>
                        </div>
                    </GlassCard>
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="scroll-mt-28">
                <motion.div
                    initial="initial"
                    whileInView="animate"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                >
                    <div className="mb-12">
                        <ParallaxText baseVelocity={1.5} className="opacity-10 w-screen -ml-[calc(50vw-50%)]">
                            <span className="text-6xl md:text-8xl font-bold font-display uppercase">Projects Projects Projects</span>
                        </ParallaxText>
                        <h2 className="text-3xl md:text-4xl font-bold text-center font-display -mt-8 relative z-10">Featured Project</h2>
                    </div>
                    <div className="max-w-2xl mx-auto">
                        {/* Project 1: Queuesis */}
                        <motion.div variants={popIn}>
                            <ZoomableCard
                                redirectUrl="/queuesis"
                                className="h-full flex flex-col"
                                showcaseContent={<QueuesisShowcase />}
                                autoRedirect={true}
                            >
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

                                    <span className="text-sm hover:text-white text-gray-300 flex items-center gap-1">
                                        <ExternalLink size={14} /> Live
                                    </span>
                                    <a href="https://github.com/Aplkalex/Queuesis" target="_blank" className="text-sm hover:text-white text-gray-300 flex items-center gap-1 z-20 relative" onClick={(e) => e.stopPropagation()}>
                                        <Github size={14} /> Code
                                    </a>
                                </div>
                            </ZoomableCard>
                        </motion.div>

                        <div className="mt-12 text-center">
                            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 rounded-full text-white hover:bg-white/10 transition-colors">
                                    View All Projects <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </section>

            {/* Awards Section */}
            <section id="awards" className="scroll-mt-28">
                <div className="max-w-6xl mx-auto">
                    <div className="mb-8">
                        <ParallaxText baseVelocity={-1.5} className="opacity-10 w-screen -ml-[calc(50vw-50%)]">
                            <span className="text-6xl md:text-8xl font-bold font-display uppercase">Awards Awards Awards</span>
                        </ParallaxText>
                        <h2 className="text-3xl md:text-4xl font-bold text-center font-display -mt-8 relative z-10">Awards & Honors</h2>
                    </div>

                    <AwardsGrid className="px-4" />
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="text-center scroll-mt-28">
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
                    <div className="flex justify-center gap-6">
                        <motion.a
                            href="mailto:contact@aplkalex.com"
                            className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Get in Touch
                        </motion.a>
                        <motion.a
                            href="https://www.linkedin.com/in/ka-hei-wong-5a5322309/"
                            target="_blank"
                            className="inline-flex items-center gap-2 px-10 py-4 bg-blue-600 text-white rounded-full font-bold text-lg"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <Linkedin size={20} /> LinkedIn
                        </motion.a>
                    </div>
                </motion.div>
            </section>
        </div>
    );
}
