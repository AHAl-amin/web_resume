"use client";

import profileImage from "@/public/images/profile_3.png";
import CountUp from 'react-countup';
import image1 from "@/public/images/proffesion/image1.png";
import image2 from "@/public/images/proffesion/image2.png";
import image3 from "@/public/images/proffesion/image3.png";
import image4 from "@/public/images/proffesion/image4.png";

import image5 from "@/public/images/proffesion/image5.png";
import image6 from "@/public/images/proffesion/image6.png";
import image7 from "@/public/images/proffesion/image7.png";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";



export default function MyProfession() {
    return (
        <section>

            <section className="max-w-[1440px] mx-auto flex px-6 md:px-10 h-screen py-20">
                <div className="flex lg:flex-row flex-col items-center gap-8">

                    {/* Left Side: Content */}



                    <div className="space-y-4 text-[#FFFFFF]xl:w-2/3 w-full">
                        <p className="luxury-roman text-base md:text-[40px] font-luxury-roman">



                            <span className="text-[#00070C]"> ....................................</span>Driven by Creativity, Focused on Crafting Designs That Resonate and Inspire Every Interaction. Designing User-CenteredExperiences That Drive Engagement and Satisfaction

                        </p>



                        <p className="text-lg max-w-2xl text-[#CAD5E2]">
                            Crafting intuitive, high-impact digital experiences through user-centered research, thoughtful strategy, and pixel-perfect execution. Specializing in mobile apps, SaaS platforms, and design systems for startups and forward-thinking brands.
                        </p>
                        <div className="flex items-center gap-8 font-luxury-roman">
                            <div>
                                <p className="lg:text-[64px] text-[40px] font-semibold text-[#E5EFFC] flex items-center gap-2">
                                    <CountUp start={0} end={30} duration={3} enableScrollSpy scrollSpyOnce /> <span className="text-[#CAD5E2] text-3xl font-normal">+</span>
                                </p>
                                <p className="text-[#E5EFFC]">Projects</p>
                            </div>
                            <div>
                                <p className="lg:text-[64px] text-[40px] font-semibold text-[#E5EFFC] flex items-center gap-2">
                                    <CountUp start={0} end={2} duration={3} enableScrollSpy scrollSpyOnce /> Years <span className="text-[#CAD5E2] text-3xl font-normal mt-2">+</span>
                                </p>
                                <p className="text-[#E5EFFC]">As a Designer</p>
                            </div>
                        </div>
                    </div>


                    {/* Right Side: Portrait */}

                    <div className="relative  aspect-square xl:w-1/3 w-full lg:h-[600px] h-auto ">
                        <Image
                            src={profileImage}
                            alt="Professional Journey"
                            fill
                            className="object-contain  transition-all duration-700"
                        />
                    </div>


                </div>

            </section>


        </section>
    );
}