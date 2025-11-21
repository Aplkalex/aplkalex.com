'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import ZoomableCard from '@/components/ui/ZoomableCard';
import QueuesisShowcase from '@/components/ui/QueuesisShowcase';
import Link from 'next/link';
import { ArrowRight, Github, ExternalLink, Terminal, Code2, Database, Cpu, Globe, Shield, Linkedin } from 'lucide-react';
import Typewriter from '@/components/ui/Typewriter';
import TechMarquee from '@/components/ui/TechMarquee';
import ParallaxText from '@/components/ui/ParallaxText';

import { SiNextdotjs, SiTypescript, SiReact, SiTailwindcss, SiPython, SiNodedotjs, SiMongodb } from 'react-icons/si';

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
    { name: 'Next.js', icon: <SiNextdotjs size={16} />, color: '#ffffff' },
    { name: 'TypeScript', icon: <SiTypescript size={16} />, color: '#3178C6' },
    { name: 'React', icon: <SiReact size={16} />, color: '#61DAFB' },
    { name: 'Tailwind', icon: <SiTailwindcss size={16} />, color: '#06B6D4' },
    { name: 'Python', icon: <SiPython size={16} />, color: '#3776AB' },
    { name: 'Node.js', icon: <SiNodedotjs size={16} />, color: '#339933' },
    { name: 'MongoDB', icon: <SiMongodb size={16} />, color: '#47A248' },
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
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full border border-white/10 bg-white/5 text-sm text-purple-300 backdrop-blur-sm">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
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
                            CS Student @ CUHK & UBC <br />
                            <span className="text-white font-medium">Full Stack Developer</span> & Security Enthusiast.
                        </motion.h2>
                        <motion.p variants={fadeInUp} className="text-lg text-gray-400 mb-8 max-w-lg leading-relaxed">
                            I build secure, intelligent systems that solve real-world problems. Passionate about FinTech, AI, and making the web a safer place.
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
                                    href="/Alex_Resume_2025_Nov.pdf"
                                    download
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
                        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl blur opacity-20"></div>
                        <GlassCard className="relative bg-black/30 backdrop-blur-sm font-mono text-sm overflow-hidden border-white/5">
                            <div className="flex gap-2 mb-4 border-b border-white/10 pb-4">
                                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                            </div>

                            <motion.div
                                className="space-y-2 text-gray-300"
                                initial="initial"
                                animate="animate"
                                variants={{
                                    animate: { transition: { staggerChildren: 0.1 } }
                                }}
                            >
                                <div className="flex">
                                    <span className="text-purple-400 mr-2">const</span>
                                    <span className="text-yellow-200">developer</span>
                                    <span className="text-white mx-2">=</span>
                                    <span className="text-white">{'{'}</span>
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">name</span>: <span className="text-green-300">'<Typewriter text="Aplkalex" delay={0.5} />'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">role</span>: <span className="text-green-300">'<Typewriter text="Full Stack Developer" delay={1.0} />'</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">education</span>: <span className="text-white">['CUHK', 'UBC']</span>,
                                </div>
                                <div className="pl-4">
                                    <span className="text-blue-300">passions</span>: <span className="text-white">[</span>
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-300">'<Typewriter text="Cybersecurity" delay={1.5} />'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-300">'<Typewriter text="FinTech" delay={2.0} />'</span>,
                                </div>
                                <div className="pl-8">
                                    <span className="text-green-300">'<Typewriter text="AI & LLMs" delay={2.5} />'</span>
                                </div>
                                <div className="pl-4 text-white">],</div>
                                <div className="pl-4">
                                    <span className="text-blue-300">status</span>: <span className="text-green-300">'<Typewriter text="Building cool stuff 🚀" delay={3.0} />'</span>
                                </div>
                                <div className="text-white">{'}'};</div>
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

                    <div className="grid md:grid-cols-2 gap-6 px-4">
                        {[
                            {
                                title: "Best use of ElevenLabs - Stormhacks 2025",
                                issuer: "Major League Hacking (MLH), SFU Surge",
                                date: "Oct 2025",
                                association: "The University of British Columbia",
                                color: "from-blue-500 to-purple-500",
                                description: (
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        <li>Won Best Use of ElevenLabs at StormHacks 2025, one of Western Canada's largest hackathons.</li>
                                        <li>Collaborated with a team of four to build Carrie, an AI peer counselor that integrates computer vision, ElevenLabs speech-to-text, and LiveKit for real-time, unbiased mental health support.</li>
                                        <li>Contributed backend integration and leveraged business and mental health background for pitching and presentation.</li>
                                    </ul>
                                )
                            },
                            {
                                title: "Cyber Attack and Defence Elite Training - Merit Award",
                                issuer: "HKIRC, Digital Policy Office, HKPF",
                                date: "Aug 2025",
                                association: "The Chinese University of Hong Kong",
                                color: "from-green-500 to-emerald-500",
                                description: (
                                    <ul className="list-disc pl-5 space-y-2 text-gray-300">
                                        <li>Developing and executing attack strategies for penetration testing and adversary simulation.</li>
                                        <li>Coordinating the team's defensive posture, including incident response and threat hunting.</li>
                                        <li>Conducted log analysis and memory forensics to trace attack vectors and remediate breaches.</li>
                                        <li>Proactively identified indicators of compromise (IOCs) within the network.</li>
                                        <li>Executed attacks based on the OWASP Top 10, including SQL Injection (SQLi), Cross-Site Scripting (XSS), and Insecure Deserialization.</li>
                                        <li>Performed network reconnaissance, vulnerability scanning, and exploited misconfigurations in network services.</li>
                                        <li>Leveraged system weaknesses to gain elevated access to critical assets.</li>
                                    </ul>
                                )
                            },
                            {
                                title: "GenAI Application in Financial Services - 2nd Runner Up",
                                issuer: "CUHK, HKMA, Cyberport, Hang Seng Bank",
                                date: "Apr 2025",
                                association: "The Chinese University of Hong Kong",
                                color: "from-yellow-500 to-orange-500",
                                description: (
                                    <div className="space-y-4 text-gray-300">
                                        <p>I was awarded second runner-up in the GenAI Application in Financial Services competition organised by the Hong Kong Monetary Authority, CUHK FinTech Department, and supported by Hang Seng Bank and Cyberport.</p>
                                        <p>As team leader, I was responsible for overall project management, including coordinating team workflow, setting milestones, and ensuring effective task distribution based on each member’s strengths. I led the design and development of our prototype, which integrated a web-based user interface built with HTML and JavaScript, alongside backend functionalities powered by Python to handle data processing and AI model integration.</p>
                                        <p>Throughout the competition, I conducted extensive legal and compliance research by communicating with law students to understand regulatory frameworks in the financial sector. This ensured our solution adhered to data privacy laws and banking regulations, strengthening its practicality and feasibility.</p>
                                        <p>In addition, I managed our team’s pitch preparation, refining our presentation slides to align with professional standards expected by financial institutions and training team members for effective public speaking and Q&A handling.</p>
                                    </div>
                                )
                            },
                            {
                                title: "Inter-School Cybersecurity Competition 2022 - Medallion",
                                issuer: "AiLE, IVE Chai Wan, AWS",
                                date: "Dec 2022",
                                association: "HKMA David Li Kwok Po College",
                                color: "from-indigo-500 to-purple-500",
                                description: (
                                    <div className="space-y-4 text-gray-300">
                                        <p>I was invited to represent my school in the Inter-School Cybersecurity Competition co-hosted by the Association of I.T. Leaders in Education, IVE Chai Wan, and Amazon Web Services. During the competition, I received a medallion in recognition of my performance and contributions.</p>
                                        <p>Throughout the event, I gained hands-on experience with AWS services such as EC2, IAM, and S3 buckets, learning to configure secure cloud storage environments, manage user permissions, and implement access control policies to protect sensitive data. I worked on practical cybersecurity challenges that required identifying vulnerabilities, performing privilege escalation techniques, and designing effective network defence strategies to mitigate threats.</p>
                                        <p>The competition also included scenarios involving simulated cyber attacks, where I collaborated with teammates to analyse attack vectors, interpret logs, and propose immediate mitigation plans under strict time constraints.</p>
                                        <p>Additionally, I researched best practices in cloud security architecture to support our team’s solutions and presented our findings and defence strategies to a panel of judges comprising educators and industry professionals.</p>
                                    </div>
                                )
                            }
                        ].map((award, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <ZoomableCard
                                    className="h-full flex flex-col bg-white/5 border-white/10 hover:bg-white/10 transition-colors"
                                    expandedContent={
                                        <div className="p-8 max-w-3xl mx-auto">
                                            <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r ${award.color} mb-4`}>
                                                {award.date}
                                            </div>
                                            <h3 className="text-3xl font-bold font-display mb-2">{award.title}</h3>
                                            <div className="flex flex-col gap-1 text-gray-400 mb-8">
                                                <span className="flex items-center gap-2"><Shield size={16} /> {award.issuer}</span>
                                                <span className="flex items-center gap-2"><Globe size={16} /> {award.association}</span>
                                            </div>
                                            <div className="prose prose-invert max-w-none">
                                                {award.description}
                                            </div>
                                        </div>
                                    }
                                >
                                    <div className="flex flex-col h-full p-2">
                                        <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${award.color} flex items-center justify-center mb-4 shadow-lg`}>
                                            <Shield className="text-white w-6 h-6" />
                                        </div>
                                        <h3 className="text-xl font-bold font-display mb-2 leading-tight">{award.title}</h3>
                                        <p className="text-sm text-gray-400 mb-4 flex-grow">{award.issuer}</p>
                                        <div className="flex justify-between items-center mt-auto pt-4 border-t border-white/5">
                                            <span className="text-xs text-gray-500 font-mono">{award.date}</span>
                                            <span className="text-xs text-white bg-white/10 px-2 py-1 rounded hover:bg-white/20 transition-colors">Read More</span>
                                        </div>
                                    </div>
                                </ZoomableCard>
                            </motion.div>
                        ))}
                    </div>
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

