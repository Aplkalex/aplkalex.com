'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import AwardsGrid from '@/components/awards/AwardsGrid';

const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
};

export default function AwardsPage() {
    return (
        <div className="container mx-auto px-6 py-24 space-y-12">
            <Link href="/" className="inline-flex items-center text-gray-400 hover:text-white transition-colors">
                <ArrowLeft size={16} className="mr-2" /> Back to Home
            </Link>

            <motion.div
                initial={fadeInUp.initial}
                animate={fadeInUp.animate}
                transition={fadeInUp.transition}
                className="text-center space-y-4 max-w-3xl mx-auto"
            >
                <p className="text-sm uppercase tracking-[0.3em] text-gray-500">Highlights</p>
                <h1 className="text-4xl md:text-5xl font-bold font-display">Awards & Honors</h1>
                <p className="text-gray-400">
                    A curated look at recent hackathons, cybersecurity tournaments, and innovation challenges that shaped my journey.
                </p>
            </motion.div>

            <div className="max-w-6xl mx-auto w-full">
                <AwardsGrid />
            </div>
        </div>
    );
}
