'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const { resolvedTheme } = useTheme();
    const isDarkMode = resolvedTheme === 'dark';

    const cursorStyles = {
        baseBorder: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.35)',
        hoverBorder: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.75)',
        baseBackground: 'transparent',
        hoverBackground: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.1)',
        baseShadow: isDarkMode ? '0 0 20px rgba(255, 255, 255, 0.3)' : '0 0 20px rgba(15, 23, 42, 0.18)',
        hoverShadow: isDarkMode ? '0 0 30px rgba(255, 255, 255, 0.45)' : '0 0 30px rgba(15, 23, 42, 0.25)',
    };

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', updateMousePosition);
        window.addEventListener('mouseover', handleMouseOver);

        return () => {
            window.removeEventListener('mousemove', updateMousePosition);
            window.removeEventListener('mouseover', handleMouseOver);
        };
    }, []);

    return (
        <motion.div
            className="fixed top-0 left-0 w-6 h-6 border rounded-full pointer-events-none z-[9999] hidden md:block"
            animate={{
                x: mousePosition.x - 12,
                y: mousePosition.y - 12,
                scale: isHovering ? 3 : 1,
                backgroundColor: isHovering ? cursorStyles.hoverBackground : cursorStyles.baseBackground,
                borderColor: isHovering ? cursorStyles.hoverBorder : cursorStyles.baseBorder,
                boxShadow: isHovering ? cursorStyles.hoverShadow : cursorStyles.baseShadow,
            }}
            transition={{
                type: "spring",
                damping: 30,
                stiffness: 400,
                mass: 0.5
            }}
        />
    );
}
