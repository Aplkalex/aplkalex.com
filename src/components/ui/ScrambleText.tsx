"use client";

import { useEffect, useState, useRef } from "react";
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
    const [mounted, setMounted] = useState(false);
    const rafRef = useRef<number>();
    const startTimeRef = useRef<number>(0);

    useEffect(() => {
        setMounted(true);
    }, []);

    useEffect(() => {
        if (!mounted) return;

        const length = text.length;
        let delayTimeout: NodeJS.Timeout;

        const animate = (currentTime: number) => {
            if (startTimeRef.current === 0) {
                startTimeRef.current = currentTime;
            }

            const elapsedTime = (currentTime - startTimeRef.current) / 1000;
            const progress = Math.min(elapsedTime / duration, 1);

            if (progress >= 1) {
                setDisplayText(text);
                return;
            }

            const scrambleLength = Math.floor(length * (1 - progress));
            const revealedLength = length - scrambleLength;

            const revealed = text.substring(0, revealedLength);
            const scrambled = Array.from({ length: scrambleLength })
                .map(() => CHARS[Math.floor(Math.random() * CHARS.length)])
                .join("");

            setDisplayText(revealed + scrambled);
            rafRef.current = requestAnimationFrame(animate);
        };

        delayTimeout = setTimeout(() => {
            startTimeRef.current = 0;
            rafRef.current = requestAnimationFrame(animate);
        }, delay * 1000);

        return () => {
            clearTimeout(delayTimeout);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
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
