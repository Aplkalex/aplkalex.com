'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

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
                'fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent',
                scrolled ? 'bg-black/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent py-6'
            )}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="text-2xl font-bold tracking-tighter font-display">
                    Aplkalex
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <Link href="/#about" className="text-sm text-gray-400 hover:text-white transition-colors">
                        About
                    </Link>
                    <Link href="/projects" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Projects
                    </Link>
                    <Link href="/awards" className="text-sm text-gray-400 hover:text-white transition-colors">
                        Awards
                    </Link>
                    <Link
                        href="/#contact"
                        className="px-5 py-2 bg-white text-black rounded-full text-sm font-semibold hover:scale-105 transition-transform"
                    >
                        Get in Touch
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X /> : <Menu />}
                </button>
            </div>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-xl border-b border-white/10 p-6 flex flex-col gap-4">
                    <Link href="/#about" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300">
                        About
                    </Link>
                    <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300">
                        Projects
                    </Link>
                    <Link href="/awards" onClick={() => setMobileMenuOpen(false)} className="text-lg text-gray-300">
                        Awards
                    </Link>
                    <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="text-lg text-white font-semibold">
                        Get in Touch
                    </Link>
                </div>
            )}
        </nav>
    );
}
