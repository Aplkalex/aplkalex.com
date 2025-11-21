'use client';

import { useRef, ReactNode } from 'react';
import { motion, useScroll, useTransform, useSpring, MotionValue } from 'framer-motion';

interface ParallaxTextProps {
    children: ReactNode;
    baseVelocity?: number;
    className?: string;
}

export default function ParallaxText({ children, baseVelocity = 100, className = "" }: ParallaxTextProps) {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Create a parallax effect by transforming Y based on scroll progress
    // We use a spring to smooth out the movement
    const y = useTransform(scrollYProgress, [0, 1], [0, baseVelocity]);
    const smoothY = useSpring(y, { damping: 15, stiffness: 100 });

    return (
        <div ref={ref} className={`relative ${className}`}>
            <motion.div style={{ y: smoothY }}>
                {children}
            </motion.div>
        </div>
    );
}
