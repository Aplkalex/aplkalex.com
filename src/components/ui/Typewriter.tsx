'use client';

import { motion, Variants } from 'framer-motion';

interface TypewriterProps {
    text: string;
    delay?: number;
    className?: string;
}

export default function Typewriter({ text, delay = 0, className }: TypewriterProps) {
    // Split text into characters (using Array.from to handle emojis correctly)
    const characters = Array.from(text);

    const container: Variants = {
        hidden: { opacity: 0 },
        visible: (i: number = 1) => ({
            opacity: 1,
            transition: { staggerChildren: 0.03, delayChildren: delay * i }
        })
    };

    const child: Variants = {
        visible: {
            opacity: 1,
            display: 'inline-block',
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200
            }
        },
        hidden: {
            opacity: 0,
            display: 'none',
            transition: {
                type: 'spring',
                damping: 12,
                stiffness: 200
            }
        }
    };

    return (
        <motion.span
            className={className}
            variants={container}
            initial="hidden"
            animate="visible"
        >
            {characters.map((char, index) => (
                <motion.span key={index} variants={child}>
                    {char === ' ' ? '\u00A0' : char}
                </motion.span>
            ))}
        </motion.span>
    );
}
