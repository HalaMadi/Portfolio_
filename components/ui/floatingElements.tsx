"use client";

import { motion } from "motion/react";

export const FloatingElements = () => {
    return (
        <div className="absolute inset-0 overflow-hidden">
            {/* Floating Orbs */}
            <motion.div
                animate={{
                    y: [-20, 20, -20],
                    x: [-10, 10, -10]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/4 h-32 w-32 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl"
            />

            <motion.div
                animate={{
                    y: [20, -20, 20],
                    x: [10, -10, 10]
                }}
                transition={{
                    duration: 10,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                }}
                className="absolute top-1/3 right-1/4 h-24 w-24 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-xl"
            />

            <motion.div
                animate={{
                    y: [-15, 15, -15],
                    x: [-5, 5, -5]
                }}
                transition={{
                    duration: 12,
                    repeat: Number.POSITIVE_INFINITY,
                    ease: "easeInOut"
                }}
                className="absolute bottom-1/4 left-1/3 h-20 w-20 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-xl"
            />

            {/* Floating Particles */}
            {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                    key={i}
                    animate={{
                        y: [-100, -120, -100],
                        opacity: [0, 1, 0]
                    }}
                    transition={{
                        duration: 3 + Math.random() * 2,
                        repeat: Number.POSITIVE_INFINITY,
                        delay: Math.random() * 2,
                        ease: "easeOut"
                    }}
                    className="absolute h-1 w-1 rounded-full bg-white/40"
                    style={{
                        left: `${Math.random() * 100}%`,
                        bottom: `${Math.random() * 100}%`
                    }}
                />
            ))}
        </div>
    );
};
