'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';
import { ThemeToggle } from '@/components/ThemeToggle';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                'fixed top-0 w-full z-50 transition-all duration-500 border-b',
                scrolled
                    ? 'backdrop-blur-xl border-black/5 dark:border-white/10 py-4 shadow-sm dark:shadow-lg'
                    : 'bg-transparent border-transparent py-6'
            )}
            style={{
                backgroundColor: scrolled ? 'var(--navbar-bg-scrolled)' : 'transparent'
            }}
        >
            <div className="container mx-auto px-6 flex justify-between items-center max-w-full overflow-x-hidden">
                <Link
                    href="/"
                    className="text-2xl font-bold tracking-tighter font-display transition-colors duration-500"
                    style={{ color: 'var(--foreground-strong)' }}
                >
                    Aplkalex
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#about" className="text-sm text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/projects" className="text-sm text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link href="/awards" className="text-sm text-gray-700 hover:text-black dark:text-gray-400 dark:hover:text-white transition-colors">
                        Awards
                    </Link>
                    <div className="transition-opacity duration-500 opacity-100">
                        <ThemeToggle />
                    </div>
                    <Link
                        href="/#contact"
                        className="px-5 py-2 bg-black text-white dark:bg-white dark:text-black rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden flex items-center gap-4">
                    <ThemeToggle />
                    <button
                        className="text-black dark:text-white transition-colors duration-500"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-black/95 backdrop-blur-xl border-b border-black/10 dark:border-white/10 p-6 flex flex-col gap-4">
                    <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-700 dark:text-gray-300">
                        About
                    </Link>
                    <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-700 dark:text-gray-300">
                        Projects
                    </Link>
                    <Link href="/awards" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-700 dark:text-gray-300">
                        Awards
                    </Link>
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg text-black dark:text-white font-semibold">
                        Get in Touch
                    </Link>
                </div>
            )}
        </nav>
    );
}
