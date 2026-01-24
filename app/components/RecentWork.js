'use client';

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

export default function RecentWork() {
    const projects = [
        {
            id: 1,
            image: bg1,
            logo: logo1,
            mockup: cardimg1,
            title: 'Universal',
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
            title: 'AI-Powered Personalized Travel Itinerary Mobile App',
            subtitle: '',
            tags: ['View Work', 'Live Link'],
            color: 'from-[#8b5a3c]/40 to-[#5a3a2a]/40',
            borderColor: 'border-[#ff8c42]/20',
        },
        {
            id: 3,
            image: bg3,
            logo: logo3,
            mockup: cardimg3,
            title: 'Target Fit',
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
            title: 'MindFlow',
            subtitle: 'Guided Meditation Website for Daily Calm & Mental Wellness',
            tags: ['View Project'],
            color: 'from-[#1a4d6d]/40 to-[#0a2d4d]/40',
            borderColor: 'border-[#79B7FA]/20',
        },
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 ">
            <div className="mb-12">
                <h2 className="text-4xl md:text-5xl font-bold text-white/80 mb-4">Recent work</h2>
            </div>

            <div className="grid grid-cols-1  gap-8">
                {projects.map((project) => (
                    <div
                        key={project.id}
                        className={`group relative bg-gradient-to-br ${project.color}
    backdrop-blur-xl 
    rounded-3xl overflow-hidden
    transition-all duration-500 hover:scale-[1.02]
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
                                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 max-w-md">
                                    {project.title}
                                </h3>

                                {/* Subtitle */}
                                {project.subtitle && (
                                    <p className="text-white/60 text-3xl leading-relaxed mb-6 max-w-2xl">
                                        {project.subtitle}
                                    </p>
                                )}

                                {/* CTA */}
                                <div className="flex items-center gap-2 text-blue-400 font-semibold group-hover:gap-3 transition-all cursor-pointer w-fit">
                                    <span className="text-sm">{project.tags[0]}</span>
                                    <FiArrowUpRight className="text-lg" />
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
                ))}

            </div>
        </section>
    );
}
