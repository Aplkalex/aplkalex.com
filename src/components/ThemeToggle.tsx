"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const { theme, setTheme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = React.useState(false);

    React.useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return <div className="w-9 h-9" />; // Placeholder to prevent layout shift
    }

    const currentTheme = resolvedTheme || theme || "light";

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(currentTheme === "dark" ? "light" : "dark")}
            className="relative p-2 rounded-full bg-black/5 border border-black/10 hover:bg-black/10 transition-colors backdrop-blur-sm text-black dark:bg-white/5 dark:border-white/10 dark:hover:bg-white/10 dark:text-white"
            aria-label="Toggle theme"
        >
            {currentTheme === "dark" ? (
                <Sun className="h-[1.2rem] w-[1.2rem] text-yellow-400 transition-transform" />
            ) : (
                <Moon className="h-[1.2rem] w-[1.2rem] text-blue-500 transition-transform" />
            )}
        </motion.button>
    );
}
