"use client";
import { IButton } from "@/type";
import React from "react";
import { motion } from "motion/react";
const MagicButton = ({
    title,
    icon,
    position,
    handleClick,
    otherClasses,
    widthClass = "w-60",
    heightClass = "h-12"
}: IButton) => {
    return (
        <div>
            <motion.button
                whileHover={{ scale: 1.02 }}
                className={`relative mt-6 inline-flex ${heightClass} ${widthClass} overflow-hidden rounded-lg p-[1px] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25`}
            >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                <span
                    className={`inline-flex text-base h-full w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-slate-950 px-7 py-1  font-medium text-white backdrop-blur-3xl ${otherClasses}`}
                >
                    {position === "left" && icon}
                    {title}
                    {position === "right" && icon}
                </span>
            </motion.button>
        </div>
    );
};

export default MagicButton;
