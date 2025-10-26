import React from "react";
import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import MagicButton from "./ui/magicButton";
import { Spotlight } from "./ui/Spotlight";
import { FaLocationArrow } from "react-icons/fa6";
import { FloatingElements } from "./ui/floatingElements";

const Hero = () => {
    return (
        <>
            <div className="flex min-h-screen items-center justify-center overflow-hidden pt-16">
                <div className="dark:bg-black-100 dark:bg-grid-white/[0.03] bg-grid-black/[0.02] absolute top-0 left-0 flex h-screen w-full items-center justify-center bg-white">
                    <div
                        className={cn(
                            "absolute inset-0",
                            "[background-size:100px_100px]",
                            "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
                            "dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
                        )}
                    />
                    <div className="dark:bg-black-100 pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
                    <FloatingElements />
                </div>
                <div className="relative z-20 overflow-hidden">
                    <Spotlight
                        className="-top-40 -left-10 h-screen md:-top-20 md:-left-32"
                        fill="white"
                    />
                    <Spotlight
                        className="top-10 left-full h-[80vh] w-[50vw]"
                        fill="purple"
                    />
                    <Spotlight
                        className="top-28 left-80 h-[80vh] w-[50vw]"
                        fill="blue"
                    />
                </div>
                <div className="relative z-10 my-24 flex justify-center text-center">
                    <div className="max-w-[90vw] md:max-w-[80vw] lg:max-w-[60vw]">
                        <p className="mb-4 text-[12px] tracking-wider text-blue-100 uppercase">
                            Dynamic Web Magic with Next.js
                        </p>
                        <TextGenerateEffect
                            words="Crafting Digital Experiences That Matter"
                            className="text-[40px] font-bold tracking-tight md:text-5xl lg:text-6xl md:pt-2"
                        />
                        <p className="mx-auto mt-4 max-w-lg text-center text-xs leading-6 font-light md:tracking-wider md:text-sm">
                            Hi! I&apos;m Hala Madi, a Full Stack Developer based
                            in Palestine. transforming ideas into beautiful,
                            functional web applications.
                        </p>
                        <div>
                            <MagicButton
                                title="show my work"
                                icon={<FaLocationArrow />}
                                position="right"
                            />
                            {/* <MagicButton title="Get In Touch" className="group inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-medium text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/10"/> */}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
