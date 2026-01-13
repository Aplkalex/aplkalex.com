'use client';

import { useEffect, useState, useRef, useCallback } from 'react';
import { useTheme } from 'next-themes';

export default function CustomCursor() {
    const [isVisible, setIsVisible] = useState(false);
    const [isHovering, setIsHovering] = useState(false);
    const cursorRef = useRef<HTMLDivElement>(null);
    const positionRef = useRef({ x: 0, y: 0 });
    const rafRef = useRef<number>();
    const { resolvedTheme } = useTheme();
    const isDarkMode = resolvedTheme === 'dark';

    const cursorStyles = {
        baseBorder: isDarkMode ? 'rgba(255, 255, 255, 0.5)' : 'rgba(15, 23, 42, 0.35)',
        hoverBorder: isDarkMode ? 'rgba(255, 255, 255, 0.85)' : 'rgba(15, 23, 42, 0.75)',
        baseBackground: 'transparent',
        hoverBackground: isDarkMode ? 'rgba(255, 255, 255, 0.15)' : 'rgba(15, 23, 42, 0.1)',
    };

    const updateCursorPosition = useCallback(() => {
        if (cursorRef.current) {
            cursorRef.current.style.transform = `translate3d(${positionRef.current.x - 12}px, ${positionRef.current.y - 12}px, 0)`;
        }
        rafRef.current = requestAnimationFrame(updateCursorPosition);
    }, []);

    useEffect(() => {
        // Don't run on mobile/touch devices
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        if (isTouchDevice || window.innerWidth < 768) {
            return;
        }

        setIsVisible(true);

        const handleMouseMove = (e: MouseEvent) => {
            positionRef.current = { x: e.clientX, y: e.clientY };
        };

        const handleMouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        window.addEventListener('mouseover', handleMouseOver, { passive: true });
        
        rafRef.current = requestAnimationFrame(updateCursorPosition);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseover', handleMouseOver);
            if (rafRef.current) {
                cancelAnimationFrame(rafRef.current);
            }
        };
    }, [updateCursorPosition]);

    // Don't render anything on mobile
    if (!isVisible) return null;

    return (
        <div
            ref={cursorRef}
            className="fixed top-0 left-0 w-6 h-6 border rounded-full pointer-events-none z-[9999] hidden md:block"
            style={{
                willChange: 'transform',
                backgroundColor: isHovering ? cursorStyles.hoverBackground : cursorStyles.baseBackground,
                borderColor: isHovering ? cursorStyles.hoverBorder : cursorStyles.baseBorder,
                transform: 'translate3d(0, 0, 0)',
                transition: 'background-color 0.15s ease, border-color 0.15s ease, width 0.15s ease, height 0.15s ease',
                width: isHovering ? '60px' : '24px',
                height: isHovering ? '60px' : '24px',
                marginLeft: isHovering ? '-18px' : '0',
                marginTop: isHovering ? '-18px' : '0',
            }}
        />
    );
}
