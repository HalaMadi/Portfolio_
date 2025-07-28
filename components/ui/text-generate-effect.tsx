"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { cn } from "@/lib/utils";

export const TextGenerateEffect = ({
    words,
    className,
    filter = true,
    duration = 0.8
}: {
    words: string;
    className?: string;
    filter?: boolean;
    duration?: number;
}) => {
    const [scope, animate] = useAnimate();
    const wordsArray = words.split(" ");

    useEffect(() => {
        animate(
            "span",
            {
                opacity: 1,
                filter: filter ? "blur(0px)" : "none",
                y: 0
            },
            {
                duration: duration,
                delay: stagger(0.15),
                ease: [0.16, 1, 0.3, 1]
            }
        );
    }, [scope.current, animate, duration, filter]);

    const renderWords = () => {
        return (
            <motion.div ref={scope} className="inline-block">
                {wordsArray.map((word, idx) => {
                    const gradientClasses =
                        idx > 1
                            ? "bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent"
                            : "";
                    return (
                        <motion.span
                            key={word + idx}
                            className={cn(
                                gradientClasses,
                                "inline-block opacity-0",
                                className
                            )}
                            style={{
                                filter: filter ? "blur(8px)" : "none",
                                y: 20
                            }}
                        >
                            {word}&nbsp;
                        </motion.span>
                    );
                })}
            </motion.div>
        );
    };

    return (
        <div className="font-bold">
            <div className="leading-tight">{renderWords()}</div>
        </div>
    );
};
