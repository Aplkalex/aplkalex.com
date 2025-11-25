"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const CHARS = "-_~`!@#$%^&*()+=[]{}|;:,.<>?/";

interface ScrambleTextProps {
    text: string;
    className?: string;
    duration?: number;
    delay?: number;
}

export default function ScrambleText({
    text,
    className,
    duration = 1.5,
    delay = 0,
}: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text);
    const [isScrambling, setIsScrambling] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        setIsScrambling(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        let interval: NodeJS.Timeout;
        let startTime: number;

        const startScramble = () => {
            startTime = Date.now();
            const length = text.length;

            interval = setInterval(() => {
                const elapsedTime = (Date.now() - startTime) / 1000;
                const progress = Math.min(elapsedTime / duration, 1);

                if (progress >= 1) {
                    setDisplayText(text);
                    setIsScrambling(false);
                    clearInterval(interval);
                    return;
                }

                const scrambleLength = Math.floor(length * (1 - progress));
                const revealedLength = length - scrambleLength;

                const revealed = text.substring(0, revealedLength);
                const scrambled = Array.from({ length: scrambleLength })
                    .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
                    .join("");

                setDisplayText(revealed + scrambled);
            }, 50);
        };

        const timeout = setTimeout(startScramble, delay * 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, duration, delay, mounted]);

    if (!mounted) {
        return <span className={cn("inline-block", className)}>{text}</span>;
    }

    return (
        <motion.span
            className={cn("inline-block", className)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >
            {displayText}
        </motion.span>
    );
}
