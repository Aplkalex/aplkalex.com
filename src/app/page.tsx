'use client';

import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import ZoomableCard from '@/components/ui/ZoomableCard';
import AwardsGrid from '@/components/awards/AwardsGrid';
import Link from 'next/link';
import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, Github, ExternalLink, Terminal, Code2, Database, Cpu, Globe, Shield, Linkedin } from 'lucide-react';
import Typewriter from '@/components/ui/Typewriter';
import TechMarquee from '@/components/ui/TechMarquee';
import ParallaxText from '@/components/ui/ParallaxText';
import ScrambleText from '@/components/ui/ScrambleText';
import AnimatedSectionTitle from '@/components/ui/AnimatedSectionTitle';
import { useTheme } from 'next-themes';


import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPython, SiNodedotjs, SiMongodb, SiJavascript, SiCplusplus, SiC, SiAmazonwebservices, SiMysql } from 'react-icons/si';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { type: "spring", stiffness: 80, damping: 20, mass: 1 }
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
    const [zoomingId, setZoomingId] = useState<string | null>(null);
    const router = useRouter();
    const containerRef = useRef(null);
    const { resolvedTheme } = useTheme();
    const zoomOverlayBg = resolvedTheme === 'dark' ? '!bg-black' : '!bg-white';
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const heroTextX = useTransform(scrollYProgress, [0, 0.2], [0, -100]);
    const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

    const handleQueuesisClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setZoomingId('queuesis');
        setTimeout(() => {
            router.push('/queuesis');
        }, 250); // Even faster zoom
    };

    const handleResumeClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setZoomingId('resume');
        // Delay opening new tab to let animation play briefly
        setTimeout(() => {
            window.open('/WONGKaHei-CV.pdf', '_blank');
        }, 250);

        setTimeout(() => {
            setZoomingId(null);
        }, 900); // Reset after a while
    };

    return (
        <>
            <AnimatePresence>
                {zoomingId === 'queuesis' && (
                    <motion.div
                        layoutId="queuesis-card"
                        className={`fixed inset-0 z-[9999] ${zoomOverlayBg}`}
                        initial={{ borderRadius: 16 }}
                        animate={{ borderRadius: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    />
                )}
                {zoomingId === 'resume' && (
                    <motion.div
                        className={`fixed inset-0 z-[9999] ${zoomOverlayBg}`}
                        initial={{ clipPath: 'circle(0% at 50% 50%)' }}
                        animate={{ clipPath: 'circle(150% at 50% 50%)' }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                    />
                )}
            </AnimatePresence>

            <div ref={containerRef} className="container mx-auto px-6 space-y-32 pb-20 relative">
                {/* Hero Section */}
                <section id="hero" className="min-h-[85vh] flex flex-col justify-center relative">
                    {/* Background Animations */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-purple-500/20 rounded-full blur-[120px] -z-10 mix-blend-screen pointer-events-none opacity-50 animate-pulse"></div>
                    <div className="absolute bottom-0 right-0 w-[600px] h-[400px] bg-blue-500/10 rounded-full blur-[100px] -z-10 mix-blend-screen pointer-events-none opacity-30"></div>



                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial="initial"
                            animate="animate"
                            variants={staggerContainer}
                            style={{ x: heroTextX, opacity: heroOpacity }}
                        >
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-emerald-200 dark:border-white/10 bg-emerald-50/90 dark:bg-white/5 text-sm text-emerald-700 dark:text-emerald-300 shadow-sm">
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
                                >👋</motion.span>, I'm <br />
                                <ScrambleText text="Aplkalex" className="hero-title" />.
                            </motion.h1>
                            <motion.h2 variants={fadeInUp} className="text-2xl md:text-3xl theme-text-muted mb-6 font-light">
                                IBBA & Computer Science Student @ CUHK | Exchange @ UBC <br />
                                <span className="theme-text-strong font-medium">Full Stack Developer with interests in FinTech and Mental Health.</span>
                            </motion.h2>
                            <motion.p variants={fadeInUp} className="text-lg theme-text-soft mb-8 max-w-lg leading-relaxed">
                                I build convenient, impactful systems that solve real-world problems. Passionate about AI, FinTech, and making the web a more human-centered space.
                            </motion.p>
                            <motion.div variants={fadeInUp} className="flex flex-wrap gap-4">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="#projects"
                                        className="px-8 py-3 bg-black text-white dark:bg-white dark:text-black rounded-full font-semibold flex items-center gap-2 border border-black/10 dark:border-transparent relative overflow-hidden group"
                                    >
                                        <span className="absolute inset-0 animate-shimmer pointer-events-none"></span>
                                        View Work <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Link
                                        href="#contact"
                                        className="px-8 py-3 bg-gray-200 border border-gray-400 text-gray-900 rounded-full font-semibold shadow-md hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 dark:hover:text-white transition-colors flex items-center justify-center"
                                    >
                                        Contact Me
                                    </Link>
                                </motion.div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <motion.button
                                        type="button"
                                        onClick={handleResumeClick}
                                        className="px-8 py-3 bg-gray-200 border border-gray-400 text-gray-900 rounded-full font-semibold shadow-md hover:bg-gray-300 dark:bg-white/10 dark:text-white dark:border-white/20 dark:hover:bg-white/20 dark:hover:text-white transition-colors flex items-center justify-center gap-2 relative z-10 cursor-pointer"
                                    >
                                        Get Resume <ExternalLink size={16} />
                                    </motion.button>
                                </motion.div>
                            </motion.div>

                            {/* Tech Stack Marquee */}
                            <motion.div variants={fadeInUp} className="mt-12 pt-8 border-t border-black/10 dark:border-white/10 w-full max-w-[90vw] md:max-w-md lg:max-w-lg overflow-hidden">
                                <p className="text-xs theme-text-soft uppercase tracking-widest mb-4">Technologies</p>
                                <TechMarquee items={techStack} rows={1} className="space-y-0" />
                            </motion.div>
                        </motion.div>

                        {/* Visual Element / Code Block */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                            className="hidden lg:block relative animate-float"
                        >
                            <div className="absolute -inset-1 bg-gradient-to-br from-white/10 via-transparent to-white/5 rounded-2xl blur-lg opacity-60"></div>
                            <GlassCard className="relative backdrop-blur-2xl font-mono text-sm overflow-hidden border-black/10 dark:border-white/15 shadow-[0_25px_70px_rgba(0,0,0,0.55)] bg-white/85 dark:bg-white/10 theme-text-strong">
                                <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>

                                <motion.div
                                    className="space-y-2 theme-text-strong"
                                    initial="initial"
                                    animate="animate"
                                    variants={{
                                        animate: { transition: { staggerChildren: 0.1 } }
                                    }}
                                >
                                    <div className="flex">
                                        <span className="theme-text-muted mr-2">const</span>
                                        <span className="theme-text-strong">developer</span>
                                        <span className="theme-text-soft mx-2">=</span>
                                        <span className="theme-text-soft">{'{'}</span>
                                    </div>
                                    <div className="pl-4">
                                        <span className="theme-text-muted">name</span>: <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="Alex, Wong Ka Hei" delay={0.5} />'</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="theme-text-muted">role</span>: <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="Full Stack Developer" delay={1.0} />'</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="theme-text-muted">education</span>: <span className="theme-text-strong">['CUHK', 'UBC (Exchange)']</span>,
                                    </div>
                                    <div className="pl-4">
                                        <span className="theme-text-muted">passions</span>: <span className="theme-text-soft">[</span>
                                    </div>
                                    <div className="pl-8">
                                        <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="Cybersecurity" delay={1.5} />'</span>,
                                    </div>
                                    <div className="pl-8">
                                        <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="FinTech" delay={2.0} />'</span>,
                                    </div>
                                    <div className="pl-8">
                                        <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="AI & LLMs" delay={2.5} />'</span>,
                                    </div>
                                    <div className="pl-8">
                                        <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="Squash" delay={3.0} />'</span>,
                                    </div>
                                    <div className="pl-8">
                                        <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="Handbell" delay={3.5} />'</span>
                                    </div>
                                    <div className="pl-4 theme-text-soft">],</div>
                                    <div className="pl-4">
                                        <span className="theme-text-muted">status</span>: <span className="theme-text-strong">'<Typewriter className="theme-text-strong" text="Building cool stuff" delay={4.0} />'</span>
                                    </div>
                                    <div className="theme-text-soft">{'}'};</div>
                                </motion.div>
                            </GlassCard>
                        </motion.div>
                    </div>
                </section>

                {/* About Section */}
                <section id="about" className="scroll-mt-28">
                    <div className="max-w-4xl mx-auto">
                        <div className="mb-12">
                            <ParallaxText baseVelocity={-1.5} className="opacity-20 dark:opacity-40 w-screen -ml-[calc(50vw-50%)]">
                                <span className="loop-heading text-6xl md:text-8xl font-bold font-display uppercase">About Me About Me About Me</span>
                            </ParallaxText>
                            <motion.div
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="text-3xl md:text-4xl font-bold text-center font-display -mt-8 relative z-10"
                            >
                                <ScrambleText text="About Me" />
                            </motion.div>
                        </div>
                        <GlassCard className="overflow-hidden bg-white/90 border border-black/5 shadow-lg dark:bg-white/5 dark:border-white/10">
                            <div className="grid md:grid-cols-3 gap-8">
                                <motion.div
                                    className="md:col-span-2 max-w-none space-y-6"
                                    initial="initial"
                                    whileInView="animate"
                                    viewport={{ once: true }}
                                    variants={slideInLeft}
                                >
                                    <p className="text-lg theme-text-muted leading-relaxed">
                                        I am a second‑year Computer Science student at <strong className="theme-text-strong">The Chinese University of Hong Kong</strong>, pursuing a double degree in Integrated BBA and a minor in Mathematics. Currently, I am studying as an exchange student at the <strong className="theme-text-strong">University of British Columbia</strong>, Vancouver.
                                    </p>
                                    <p className="text-lg theme-text-muted leading-relaxed">
                                        I am passionate about <strong className="theme-text-strong">cybersecurity, financial technology, AI and LLM applications</strong>, and interdisciplinary innovations. Feel free to find me discuss security challenges, data analytics, and potential collaborations!
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
                                            className="px-3 py-1 rounded-full text-sm theme-text-muted bg-white/70 border border-black/10 dark:bg-white/10 dark:border-white/10 dark:text-white"
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
                            <ParallaxText baseVelocity={1.5} className="opacity-20 dark:opacity-35 w-screen -ml-[calc(50vw-50%)]">
                                <span className="loop-heading loop-heading-alt text-6xl md:text-8xl font-bold font-display uppercase">Projects Projects Projects</span>
                            </ParallaxText>
                            <motion.div
                                initial="initial"
                                whileInView="animate"
                                viewport={{ once: true }}
                                variants={fadeInUp}
                                className="text-3xl md:text-4xl font-bold text-center font-display -mt-8 relative z-10"
                            >
                                <AnimatedSectionTitle text="Featured Project" />
                            </motion.div>
                        </div>
                        <div className="max-w-2xl mx-auto">
                            {/* Project 1: Queuesis */}
                            <motion.div variants={popIn} className="h-full">
                                <div onClick={handleQueuesisClick} className="block h-full group cursor-pointer">
                                    <motion.div layoutId="queuesis-card" className="h-full">
                                        <GlassCard className="h-full flex flex-col relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-white/20 group-hover:shadow-xl bg-white/90 border border-black/5 dark:bg-[#111] dark:border-white/10 text-gray-800 dark:text-gray-200 backdrop-blur-xl shadow-lg gpu-accelerated">
                                            {/* Content Overlay */}
                                            <div className="relative z-10 flex flex-col h-full p-6">
                                                <div className="flex justify-between items-start mb-4">
                                                    <h3 className="text-xl font-bold font-display theme-text-strong">Queuesis</h3>
                                                    <span className="text-xs theme-text-soft border border-black/10 dark:border-white/10 px-2 py-1 rounded bg-black/5 dark:bg-white/5 backdrop-blur-sm">Nov 2025 - Present</span>
                                                </div>
                                                <p className="theme-text-soft text-sm mb-6 flex-grow">
                                                    A modern web application built to address long-standing usability and performance issues in CUHK’s system (CUSIS).
                                                </p>
                                                <div className="flex gap-2 mb-6">
                                                    {['Next.js', 'TypeScript', 'Tailwind'].map((tech) => (
                                                        <span key={tech} className="text-xs px-2 py-1 rounded bg-black/5 dark:bg-white/5 theme-text-muted">
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                                <div className="flex gap-4">
                                                    <a
                                                        href="https://queuesis.aplkalex.com"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 text-sm theme-text-muted hover:text-black dark:hover:text-white transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <ExternalLink size={14} /> Live
                                                    </a>
                                                    <a
                                                        href="https://github.com/aplkalex/queuesis"
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="flex items-center gap-1 text-sm theme-text-muted hover:text-black dark:hover:text-white transition-colors"
                                                        onClick={(e) => e.stopPropagation()}
                                                    >
                                                        <Github size={14} /> Code
                                                    </a>
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </motion.div>
                                </div>
                            </motion.div>

                            <div className="mt-12 text-center">
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
                                    <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-black/5 border border-black/10 rounded-full text-black hover:bg-black/10 dark:bg-white/5 dark:border-white/10 dark:text-white dark:hover:bg-white/10 transition-colors">
                                        View All Projects <ArrowRight size={16} />
                                    </Link>
                                </motion.div>
                            </div>
                        </div>
                    </motion.div>
                </section >

                {/* Awards Section */}
                < section id="awards" className="scroll-mt-28" >
                    <div className="max-w-6xl mx-auto">
                        <div className="mb-8">
                            <ParallaxText baseVelocity={-1.5} className="opacity-20 dark:opacity-35 w-screen -ml-[calc(50vw-50%)]">
                                <span className="loop-heading text-6xl md:text-8xl font-bold font-display uppercase">Awards Awards Awards</span>
                            </ParallaxText>
                            <div className="text-3xl md:text-4xl font-bold text-center font-display -mt-8 relative z-10">
                                <AnimatedSectionTitle text="Awards & Honors" />
                            </div>
                        </div>

                        <AwardsGrid className="px-4" />
                    </div>
                </section >

                {/* Contact Section */}
                < section id="contact" className="text-center scroll-mt-28" >
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
                                className="inline-block px-10 py-4 bg-white text-black rounded-full font-bold text-lg relative overflow-hidden group hover:shadow-lg transition-shadow"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <span className="absolute inset-0 animate-shimmer pointer-events-none"></span>
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
                </section >
            </div >
        </>
    );
}
