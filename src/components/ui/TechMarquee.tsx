"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TechItem {
    name: string;
    icon: React.ReactNode;
    color?: string;
}

interface TechMarqueeProps {
    items: TechItem[];
    className?: string;
}

export default function TechMarquee({ items, className }: TechMarqueeProps) {
    return (
        <div
            className={cn(
                "relative flex w-full overflow-hidden select-none mask-gradient",
                className
            )}
            style={{
                maskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
                WebkitMaskImage:
                    "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
            }}
        >
            <div className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8 py-4">
                {items.map((item, index) => (
                    <div
                        key={`item-1-${index}`}
                        className="flex items-center gap-2 transition-colors duration-300"
                        style={{ color: item.color || 'rgba(255, 255, 255, 0.6)' }}
                    >
                        {item.icon}
                        <span className="text-lg font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
            <div
                aria-hidden="true"
                className="flex min-w-full shrink-0 animate-marquee items-center justify-around gap-8 py-4"
            >
                {items.map((item, index) => (
                    <div
                        key={`item-2-${index}`}
                        className="flex items-center gap-2 transition-colors duration-300"
                        style={{ color: item.color || 'rgba(255, 255, 255, 0.6)' }}
                    >
                        {item.icon}
                        <span className="text-lg font-medium">{item.name}</span>
                    </div>
                ))}
            </div>
        </div>
    );
}
