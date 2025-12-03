import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface AnimatedSectionTitleProps {
    text: string;
    className?: string;
}

export default function AnimatedSectionTitle({ text, className }: AnimatedSectionTitleProps) {
    const ref = useRef(null);
    const isInView = useInView(ref, { amount: 0.5, once: false });

    const characters = text.split("");

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.05,
                delayChildren: 0.1,
            },
        },
        exit: {
            opacity: 0,
            transition: {
                staggerChildren: 0.03,
                staggerDirection: -1,
            }
        }
    };

    const childVariants = {
        hidden: {
            opacity: 0,
            y: 20,
            rotateX: 90,
            filter: "blur(10px)",
        },
        visible: {
            opacity: 1,
            y: 0,
            rotateX: 0,
            filter: "blur(0px)",
            transition: {
                type: "spring" as const,
                damping: 12,
                stiffness: 100,
            },
        },
        exit: {
            opacity: 0,
            y: -20,
            rotateX: -90,
            filter: "blur(10px)",
            transition: {
                duration: 0.3
            }
        }
    };

    return (
        <div ref={ref} className={cn("perspective-[1000px]", className)}>
            <motion.h2
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={containerVariants}
                className="flex flex-wrap justify-center overflow-hidden"
            >
                {characters.map((char, index) => (
                    <motion.span
                        key={index}
                        variants={childVariants}
                        className="inline-block origin-bottom"
                        style={{ whiteSpace: "pre" }}
                    >
                        {char}
                    </motion.span>
                ))}
            </motion.h2>
        </div>
    );
}
