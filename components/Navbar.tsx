"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiGithub } from "react-icons/fi";
import { SlSocialLinkedin } from "react-icons/sl";
import { MdOutlineMail } from "react-icons/md";
import { cn } from "@/lib/utils";
import { IoClose } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    const navItem = [
        { key: 1, name: "Home", href: "/" },
        { key: 2, name: "About", href: "/about" },
        { key: 3, name: "Projects", href: "/projects" },
        { key: 4, name: "Experiences", href: "/experiences" },
        { key: 5, name: "Contact", href: "/contact" }
    ];
    const socialLinks = [
        {
            key: 1,
            label: "Github",
            href: "https://github.com/HalaMadi",
            icon: <FiGithub />
        },
        {
            key: 2,
            label: "LinkedIn",
            href: "https://www.linkedin.com/in/halamadi/",
            icon: <SlSocialLinkedin />
        },
        {
            key: 3,
            label: "Gmail",
            href: "mailto:halamadi75@gmail.com",
            icon: <MdOutlineMail />
        }
    ];
    return (
        <>
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5 }}
                className={cn(
                    "fixed top-0 z-50 w-full transition-all duration-300",
                    scrolled
                        ? "border-b border-white/10 bg-slate-900/80 backdrop-blur-md"
                        : "bg-transparent"
                )}
            >
                <div className="mx-auto max-w-7xl px-6 py-2">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-r from-purple-500 to-pink-500">
                                <span className="text-sm font-bold text-white">
                                    HM
                                </span>
                            </div>
                            <span className="text-lg font-semibold text-white">
                                Hala Madi
                            </span>
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden items-center space-x-8 lg:flex">
                            {navItem.map((item, index) => (
                                <motion.div
                                    key={item.key}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.2
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        className="group relative text-sm font-medium text-gray-300 transition-colors hover:text-white"
                                    >
                                        {item.name}
                                        <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-gradient-to-r from-purple-500 to-pink-300 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                        {/* social media links */}
                        <div className="hidden items-center space-x-2 lg:flex">
                            <div className="flex items-center space-x-2">
                                {socialLinks.map((link, index) => (
                                    <motion.a
                                        key={link.key}
                                        href={link.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.1 }}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.5 + index * 0.1
                                        }}
                                        className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors duration-300 hover:text-white"
                                    >
                                        {link.icon}
                                    </motion.a>
                                ))}
                            </div>
                            <motion.button
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.7 }}
                                whileHover={{ scale: 1.1 }}
                                className="cursor-pointer rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-4 py-2 text-sm font-medium text-white transition-all hover:shadow-lg"
                            >
                                Let&apos;s Talk
                            </motion.button>
                        </div>
                        {/* Mobile Navigation */}
                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white flex h-8 w-8 items-center justify-center rounded-lg bg-white/10 transition-colors hover:bg-white/20 lg:hidden"
                        >
                            {isOpen ? (
                                <IoClose className="h-6 w-6" />
                            ) : (
                                <FiMenu className="h-6 w-6" />
                            )}
                        </motion.button>
                    </div>
                </div>
            </motion.nav>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ delay: 0.2 }}
                        className="bg-black-100 fixed inset-x-0 top-25 z-100 border-b border-white/10  backdrop-blur-md lg:hidden"
                    >
                        <div className="px-6 py-6">
                            <div className="space-y-6">
                                {navItem.map((item, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: index * 0.1
                                        }}
                                        onClick={() => setIsOpen(false)}
                                        key={item.key}
                                    >
                                        <Link
                                            className="flex text-white"
                                            href={item.href}
                                        >
                                            {item.name}
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>
                            {/* social media links */}
                            <div className="mt-6 flex items-center justify-center space-x-4">
                                    {socialLinks.map((link, index) => (
                                        <motion.a
                                            key={link.key}
                                            href={link.href}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                duration: 0.3,
                                                delay: 0.3 + index * 0.1
                                            }}
                                            className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-800 text-gray-400 transition-colors duration-300 hover:text-white"
                                        >
                                            {link.icon}
                                        </motion.a>
                                    ))}
                                </div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3, delay: 0.6 }}
                                    className="mt-6 flex justify-center"
                                >
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="w-3/4  rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-6 py-3 text-sm font-medium text-white transition-all hover:shadow-lg hover:shadow-purple-500/25"
                                    >
                                        Let&apos;s Talk
                                    </button>
                                </motion.div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
