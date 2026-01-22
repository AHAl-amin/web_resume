
"use client";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import { MdArrowOutward } from "react-icons/md";
import { HiMenuAlt3, HiX } from "react-icons/hi";

import { useState } from "react";
import { BorderBeam } from "@/components/ui/border-beam";


export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: "Home", href: "/" },
        { name: "About", href: "/about" },
        { name: "Work", href: "/blogs" },
        { name: "Let's Talk", href: "/posts" },
    ];

    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-md ">
            <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-5 flex items-center justify-between gap-10">

                {/* Logo */}
                <Link href="/" className="z-50">
                    <Image
                        src={logo}
                        alt="logo"
                        width={45}
                        height={45}
                        className="md:w-[50px] md:h-[50px]"
                    />
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-8 text-white text-[18px]">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                className="hover:text-[#79B7FA] transition-colors"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* Desktop CTA */}
                <div className="hidden md:block">
                    <button className="relative overflow-hidden flex items-center gap-2 px-8 py-2.5 rounded-full bg-linear-to-r from-[#0A427D]/40 via-transparent to-[#0A427D]/40 text-white font-medium text-sm  border border-white/10 cursor-pointer group">
                        <span className="relative z-10 flex items-center gap-2">
                            Hire Me
                            <MdArrowOutward className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>

        <BorderBeam
        duration={6}
        delay={3}
        size={400}
        anchor="left"
        borderWidth={2}
        className="from-transparent to-transparent"
      />
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden z-50 p-2 text-white text-3xl"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <HiX /> : <HiMenuAlt3 />}
                </button>

                {/* Mobile Menu */}
                <div
                    className={`fixed top-20 right-4 left-4 p-6 rounded-2xl bg-black z-40 flex flex-col items-center transition-all duration-500 md:hidden
          ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5 pointer-events-none"}`}
                >
                    <ul className="flex flex-col items-center gap-4 text-white text-[24px]">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="hover:text-[#79B7FA] transition-colors"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                      <button className="relative mt-3 flex items-center gap-2 px-8 py-2.5 rounded-full bg-gradient-to-r from-[#0A427D]/40 via-transparent to-[#0A427D]/40 text-white font-medium text-sm overflow-hidden border border-white/10 cursor-pointer group">
                        <span className="relative z-10 flex items-center gap-2">
                            Hire Me
                            <MdArrowOutward className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                        </span>

                        <BorderBeam
                            duration={6}
                            delay={3}
                            size={400}
                            anchor="left"
                            borderWidth={2}
                            className="from-transparent via-blue-500 to-transparent"
                        />
                    </button>
                </div>
            </div>
        </nav>
    );
}
