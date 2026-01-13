'use client';

import { ReactNode, useEffect, useState } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';

interface SmoothScrollProps {
    children: ReactNode;
}

export default function SmoothScroll({ children }: SmoothScrollProps) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Check if mobile device - disable smooth scroll on mobile for better performance
        const checkMobile = () => {
            return window.innerWidth < 768 || 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        };
        
        const mobile = checkMobile();
        setIsMobile(mobile);

        // Skip Lenis on mobile - native scroll is smoother on touch devices
        if (mobile) {
            window.scrollTo(0, 0);
            return;
        }

        // Reset scroll position on page load
        window.scrollTo(0, 0);
        
        const lenis = new Lenis({
            duration: 0.9,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            lerp: 0.1,
            orientation: 'vertical',
            gestureOrientation: 'vertical',
            smoothWheel: true,
            wheelMultiplier: 1.2,
            touchMultiplier: 2,
        });

        // Ensure scroll starts at top
        lenis.scrollTo(0, { immediate: true });

        function raf(time: number) {
            lenis.raf(time);
            requestAnimationFrame(raf);
        }

        requestAnimationFrame(raf);

        return () => {
            lenis.destroy();
        };
    }, []);

    return <>{children}</>;
}
