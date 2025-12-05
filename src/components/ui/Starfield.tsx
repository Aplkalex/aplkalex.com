'use client';

import { useEffect, useRef } from 'react';

export default function Starfield() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        // Check for reduced motion preference
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

        const ctx = canvas.getContext('2d', { alpha: true });
        if (!ctx) return;

        let width = window.innerWidth;
        let height = window.innerHeight;
        let animationFrameId: number;
        let frameCount = 0;

        // Use device pixel ratio for sharper rendering but cap at 2 for performance
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        canvas.width = width * dpr;
        canvas.height = height * dpr;
        canvas.style.width = `${width}px`;
        canvas.style.height = `${height}px`;
        ctx.scale(dpr, dpr);

        const stars: { x: number; y: number; radius: number; alpha: number; speed: number }[] = [];
        // Reduced star count for better performance
        const numStars = Math.floor((width * height) / 40000);

        for (let i = 0; i < numStars; i++) {
            stars.push({
                x: Math.random() * width,
                y: Math.random() * height,
                radius: Math.random() * 1.5,
                alpha: Math.random(),
                speed: prefersReducedMotion ? 0 : Math.random() * 0.03,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, width, height);
            frameCount++;

            stars.forEach((star) => {
                ctx.beginPath();
                ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(255, 255, 255, ${star.alpha})`;
                ctx.fill();

                // Throttle twinkle to every 3rd frame for performance
                if (frameCount % 3 === 0) {
                    star.alpha += (Math.random() - 0.5) * 0.04;
                    if (star.alpha < 0.1) star.alpha = 0.1;
                    if (star.alpha > 0.9) star.alpha = 0.9;
                }

                // Move (slower for smoother effect)
                star.y -= star.speed;
                if (star.y < 0) star.y = height;
            });

            animationFrameId = requestAnimationFrame(animate);
        };

        animate();

        const handleResize = () => {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
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
        />
    );
}
