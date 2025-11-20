'use client';

import { motion } from 'framer-motion';
import GlassCard from '@/components/ui/GlassCard';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

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

export default function AwardsPage() {
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
                Awards & Honors
            </motion.h1>

            <motion.div
                initial="initial"
                animate="animate"
                variants={staggerContainer}
                className="max-w-4xl mx-auto space-y-6"
            >
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
            </motion.div>
        </div>
    );
}
