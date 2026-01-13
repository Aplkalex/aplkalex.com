'use client';

import { useEffect, useRef, useState } from 'react';

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        // Detect mobile device
        const checkMobile = () => {
            return window.innerWidth < 768 || 'ontouchstart' in window;
        };
        setIsMobile(checkMobile());

        const canvas = canvasRef.current;
        if (!canvas) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        const mobile = checkMobile();

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;
        let frameCount = 0;
        let lastTime = 0;
        const targetFPS = mobile ? 30 : 60; // Lower FPS on mobile
        const frameInterval = 1000 / targetFPS;

        // Use device pixel ratio but cap lower on mobile for performance
        const dpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        const stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];
        // Significantly reduce star count on mobile
        const numStars = mobile 
            ? Math.floor((width * height) / 80000) // Half the stars on mobile
            : Math.floor((width * height) / 40000);

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                speed: prefersReducedMotion ? 0 : Math.random() * 0.03,
            });
        }

        const animate = (currentTime: number) => {
            animationFrameId = requestAnimationFrame(animate);

            // Throttle frame rate
            const elapsed = currentTime - lastTime;
            if (elapsed < frameInterval) return;
            lastTime = currentTime - (elapsed % frameInterval);

            ctx.clearRect(0, 0, width, height);
            frameCount++;

            // On mobile, update twinkle less frequently
            const twinkleInterval = mobile ? 6 : 3;

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();

                // Throttle twinkle for performance
                if (frameCount % twinkleInterval === 0) {
                    star.alpha += (Math.random() - 0.5) * 0.04;
                    if (star.alpha < 0.1) star.alpha = 0.1;
                    if (star.alpha > 0.9) star.alpha = 0.9;
                }

                // Move (slower for smoother effect)
                star.y -= star.speed;
                if (star.y < 0) star.y = height;
            });
        };

        animationFrameId = requestAnimationFrame(animate);

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            const newDpr = mobile ? 1 : Math.min(window.devicePixelRatio || 1, 2);
            canvas.width = width * newDpr;
            canvas.height = height * newDpr;
            canvas.style.width = `${width}px`;
            canvas.style.height = `${height}px`;
            ctx.setTransform(1, 0, 0, 1, 0, 0);
            ctx.scale(newDpr, newDpr);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
            style={{ willChange: 'auto' }} // Prevent unnecessary GPU layer on mobile
        />
    );
}
