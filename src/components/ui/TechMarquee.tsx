"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface TechItem {
    name: string;
    icon: React.ReactNode;
    color?: string;
}

interface TechMarqueeProps {
    items: TechItem[];
    className?: string;
    rows?: number;
}

interface MarqueeRowProps {
    items: TechItem[];
    reverse?: boolean;
    speed?: number;
}

const maskStyle: React.CSSProperties = {
    maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
    WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
};

const repeatIfNeeded = (items: TechItem[]) => {
    if (items.length >= 6) return items;
    const repetitions = Math.ceil(6 / Math.max(items.length, 1));
    return Array.from({ length: repetitions }, () => items).flat();
};

const rotateItems = (items: TechItem[], offset: number) => {
    if (!items.length) return items;
    const normalized = ((offset % items.length) + items.length) % items.length;
    return items.slice(normalized).concat(items.slice(0, normalized));
};

function MarqueeRow({ items, reverse = false, speed }: MarqueeRowProps) {
    const animationClass = reverse ? "animate-marquee-reverse" : "animate-marquee";
    const animationStyle = speed ? { animationDuration: `${speed}s` } : undefined;
    const visibleItems = repeatIfNeeded(items);

    return (
        <div className="relative flex w-full overflow-hidden select-none mask-gradient" style={maskStyle}>
            {[0, 1].map((dup) => (
                <div
                    key={`${animationClass}-${dup}`}
                    className={cn(
                        "flex min-w-full shrink-0 items-center gap-10 py-4 px-10",
                        animationClass
                    )}
                    style={animationStyle}
                >
                    {visibleItems.map((item, index) => (
                        <motion.div
                            key={`${dup}-${index}`}
                            className="flex items-center gap-2 transition-colors duration-300 cursor-pointer"
                            style={{ color: item.color || 'rgba(255, 255, 255, 0.6)' }}
                            whileHover={{ scale: 1.15, filter: "brightness(1.2)" }}
                        >
                            {item.icon}
                            <span className="text-lg font-medium whitespace-nowrap">{item.name}</span>
                        </motion.div>
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function TechMarquee({ items, className, rows = 1 }: TechMarqueeProps) {
    const rowCount = Math.max(1, Math.min(rows, items.length));
    const distributedItems = Array.from({ length: rowCount }, (_, rowIndex) =>
        items.filter((_, index) => index % rowCount === rowIndex)
    );

    return (
        <div className={cn("space-y-4", className)}>
            {distributedItems.map((rowItems, rowIndex) => {
                const isReverse = rowIndex % 2 === 1;
                const rotatedItems = isReverse
                    ? rotateItems(rowItems, Math.ceil(rowItems.length / 2))
                    : rowItems;

                return (
                    <MarqueeRow
                        key={rowIndex}
                        items={rotatedItems}
                        reverse={isReverse}
                        speed={isReverse ? 18 : 25}
                    />
                );
            })}
        </div>
    );
}
