"use client";

import React, { useEffect, useRef } from 'react';
import { FiArrowUpRight } from 'react-icons/fi';
import bg1 from '@/public/images/recentwork/bg1.png';
import bg2 from '@/public/images/recentwork/bg2.png';
import bg3 from '@/public/images/recentwork/bg3.png';
import bg4 from '@/public/images/recentwork/bg4.png';
import logo1 from '@/public/images/recentwork/logo1.png';
import logo2 from '@/public/images/recentwork/logo2.png';
import logo3 from '@/public/images/recentwork/logo3.png';
import logo4 from '@/public/images/recentwork/logo4.png';
import cardimg1 from '@/public/images/recentwork/image1.png';
import cardimg2 from '@/public/images/recentwork/image2.png';
import cardimg3 from '@/public/images/recentwork/image3.png';
import cardimg4 from '@/public/images/recentwork/image4.png';
import Image from 'next/image';
import { BorderBeam } from '@/components/ui/border-beam';

export default function RecentWork() {
    const projectRefs = useRef([]);
    const velocity = useRef(0);
    const lastY = useRef(0);

    useEffect(() => {
        let lastTime = performance.now();

        function onScroll() {
            const now = performance.now();
            const y = window.scrollY || 0;
            const dy = y - lastY.current;
            const dt = Math.max(now - lastTime, 16);
            const instantV = dy / dt; // px per ms
            // smooth the velocity
            velocity.current = velocity.current * 0.9 + instantV * 0.1;
            lastY.current = y;
            lastTime = now;
        }

        window.addEventListener('scroll', onScroll, { passive: true });

        let rafId;
        function animate() {
            const v = velocity.current;
            // Apply small translateY to each project card depending on velocity and index
            projectRefs.current.forEach((el, i) => {
                if (!el) return;
                const factor = 40; // tune this to increase/decrease effect
                const translate = Math.max(Math.min(v * factor * (i + 1), 40), -40);
                el.style.transform = `translateY(${translate}px)`;
            });
            rafId = requestAnimationFrame(animate);
        }
        animate();

        return () => {
            window.removeEventListener('scroll', onScroll);
            cancelAnimationFrame(rafId);
        };
    }, []);
    const projects = [
        {
            id: 1,
            image: bg1,
            logo: logo1,
            mockup: cardimg1,
            title: '',
            subtitle: 'A Powerful IT Reseller Website with AI-Powered Support & Instant Quote System',
            tags: ['View Work', 'Live Link'],
            color: 'from-[#1a4d6d]/40 to-[#0a2d4d]/40',
            borderColor: 'border-[#79B7FA]/20',
        },
        {
            id: 2,
            image: bg2,
            logo: logo2,
            mockup: cardimg2,
            title: '',
            subtitle: 'AI-Powered Personalized Travel Itinerary Mobile App',
            tags: ['View Work', 'Live Link'],
            color: 'from-[#8b5a3c]/40 to-[#5a3a2a]/40',
            borderColor: 'border-[#ff8c42]/20',
        },
        {
            id: 3,
            image: bg3,
            logo: logo3,
            mockup: cardimg3,
            title: '',
            subtitle: 'Teach AI is a Custom GPT-Powered Learning Hub for Concepts',
            tags: ['View Work', 'Live Link'],
            color: 'from-[#6b6b6b]/40 to-[#4a4a4a]/40',
            borderColor: 'border-[#d4d4d4]/20',
        },
        {
            id: 4,
            image: bg4,
            logo: logo4,
            mockup: cardimg4,
            title: '',
            subtitle: 'Guided Meditation Website for Daily Calm & Mental Wellness',
            tags: ['View Project'],
            color: 'from-[#1a4d6d]/40 to-[#0a2d4d]/40',
            borderColor: 'border-[#79B7FA]/20',
        },
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 lg:py-40 py-20">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold font-['luxury'] text-[#E2E8F0] mb-4">Recent work</h2>
            </div>

            <div className="flex flex-col gap-12">
                {projects.map((project, index) => (
                    <div
                        key={project.id}
                        className="sticky w-full"
                        style={{ top: `calc(120px + ${index * 40}px)` }}
                    >
                        <div
                            ref={(el) => (projectRefs.current[index] = el)}
                            className={`group relative bg-linear-to-br ${project.color}
    backdrop-blur-xl shadow-2xl
    rounded-3xl overflow-hidden 
    transition-all duration-500 hover:scale-[1.01]
    px-6 md:px-10 py-10 ${project.id === 3 ? ' pb-0 ' : '' || project.id === 4 ? ' pb-0 ' : ''}`}
                        >
                            {/* Background image */}
                            <div
                                className="absolute inset-0 "
                                style={{
                                    backgroundImage: `url(${project.image.src})`,
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                    repeat: "no-repeat",
                                }}
                            />

                            {/* ===== Content Wrapper ===== */}
                            <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">

                                {/* ===== Left Content ===== */}
                                <div className="w-full lg:w-1/2 flex flex-col justify-center h-full  ">

                                    {/* Logo */}
                                    <div className="mb-6 w-[200px]">
                                        <Image
                                            src={project.logo}
                                            alt={project.title}
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl md:text-xl font-bold mb-3 max-w-md">
                                        {project.title}
                                    </h3>

                                    {/* Subtitle */}
                                    {project.subtitle && (
                                        <p className="text-white text-3xl leading-relaxed mb-6 max-w-2xl">
                                            {project.subtitle}
                                        </p>
                                    )}

                                    {/* CTA */}
                                    <div className='flex gap-4'>
                                        <div className="flex items-center gap-2 text-blue-400 bg-linear-to-r from-[#0A427D]/50 via-[#06294D]/50 to-[#0A427D]/50 font-semibold group-hover:gap-3 transition-all cursor-pointer w-fit px-4 py-2 rounded-full border border-[#439BF9]">
                                            <span className="text-sm">{project.tags[0]}</span>


                                        </div>
                                        <div className="flex items-center gap-2 text-blue-400 bg-[#11434366] font-semibold group-hover:gap-3 transition-all cursor-pointer w-fit px-4 py-2 rounded-full border border-[#40C6DA]">
                                            <span className="text-sm text-[#97EAEA]">Live Link</span>


                                        </div>
                                    </div>
                                </div>

                                {/* ===== Right Image ===== */}
                                <div className="w-full lg:w-1/2 flex justify-center  ">
                                    <div className=" opacity-90 pointer-events-none relative ">
                                        <Image
                                            src={project.mockup}
                                            alt="mockup"
                                            className={`w-full h-auto object-contain ${project.id === 3 ? ' ml-20 ' : ''}`}
                                        />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                ))}

            </div>
            <div className="flex justify-center lg:pt-20 pt-20">
                <button className="relative bg-transparent border border-[#79B7FA]/20 cursor-pointer bg-linear-to-r from-[#0A427D]/40 via-transparent to-[#0A427D]/40 text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#79B7FA]/10 transition-all overflow-hidden">
                    <span className="relative z-10">View All Projects →</span>
                    <BorderBeam duration={8} size={100} colorFrom="#41A1EF" colorTo="#0A427D" />
                </button>
            </div>
        </section>
    );
}
