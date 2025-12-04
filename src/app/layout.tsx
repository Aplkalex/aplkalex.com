import type { Metadata } from 'next';
import { Outfit, Space_Grotesk } from 'next/font/google';
import { Analytics } from "@vercel/analytics/react";
import './globals.css';
import Starfield from '@/components/ui/Starfield';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/ui/SmoothScroll';
import CustomCursor from '@/components/ui/CustomCursor';

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });

export const metadata: Metadata = {
    title: 'Aplkalex | Portfolio',
    description: 'Computer Science Student & Full Stack Developer',
};

import { ThemeProvider } from '@/components/ThemeProvider';

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${outfit.variable} ${spaceGrotesk.variable} antialiased min-h-screen flex flex-col`} suppressHydrationWarning>
                <ThemeProvider
                    attribute="class"
                    defaultTheme="light"
                    enableSystem={false}
                    disableTransitionOnChange
                >
                    <SmoothScroll>
                        <CustomCursor />
                        <Starfield />
                        <Navbar />
                        <main className="flex-grow pt-24">{children}</main>
                        <Footer />
                    </SmoothScroll>
                    <Analytics />
                </ThemeProvider>
            </body>
        </html>
    );
}
