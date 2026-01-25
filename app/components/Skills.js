"use client";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";

import img1 from "@/public/images/skills/img1.png";
import img2 from "@/public/images/skills/img2.png";
import img3 from "@/public/images/skills/img3.png";
import img4 from "@/public/images/skills/img4.png";
import img5 from "@/public/images/skills/img5.png";
import img6 from "@/public/images/skills/img6.png";
import img7 from "@/public/images/skills/img7.png";
import img9 from "@/public/images/skills/img9.png";
import img10 from "@/public/images/skills/img10.png";
import img11 from "@/public/images/skills/img11.png";
import img12 from "@/public/images/skills/img12.png";







import { Marquee } from "@/components/ui/marquee";

export default function Skills() {
    const services = [
        {
            title: "Mobile App Design",
            desc: "Focus on user-friendly interface, seamless usability, and brand consistency that keeps users engaged.",
        },
        {
            title: "Web Design",
            desc: "Design high conversion landing pages, multi-page websites, and modern landing pages with top-notch performance and user-centric approach.",
        },
        {
            title: "Dashboard Design",
            desc: "Expertly craft intuitive data dashboards that provide actionable insights across various platforms with great scalability and user-friendly visuals.",
        }
    ];

    const projectImages = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11, img12];
    const tags = ["UX/UI", "Website", "Mobile App", "Dashboard", "Saas Platform", "Design System", "Visual Design"];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20 border-t border-white/5 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start gap-10 mb-16">
                <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white  max-w-2xl leading-tight">
                    Delivering Value Through My Skills
                </h2>
                <p className="text-white/50 text-base md:text-lg max-w-lg  text-start">
                    Offline support for things which we used to spend on with 50-70 hours a month easily, is now possible with our industry.
                </p>
            </div>

            {/* Service Cards */}
            <div className="flex flex-col gap-1 mb-20">
                {services.map((service, index) => (
                    <div
                        key={index}
                        className={`group py-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:bg-white/2   ${index === 0 ? "border-t border-white/10" : "" || index === 1 ? "border-t border-white/10" : "" || index === 2 ? "border-t border-white/10 " : ""}`}
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 group-hover:text-[#79B7FA] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/40 text-base md:text-lg max-w-2xl group-hover:text-white/70 transition-colors">
                                {service.desc}
                            </p>
                        </div>
                        <div className="p-[1px] rounded-full bg-linear-to-r from-[#5A78EE] to-[#0CA8B6] transition-all duration-500 group-hover:from-[#0CA8B6] group-hover:to-[#5A78EE]">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center
      group-hover:bg-linear-to-br group-hover:from-[#0A427D]/50 group-hover:to-[#3456DC]/50 bg-black
      text-white/60 group-hover:text-white transition-all duration-500 cursor-pointer">
                                <FiArrowUpRight className="text-2xl" />
                            </div>
                        </div>

                    </div>
                ))}
            </div>

            {/* Project Showcase Carousel */}
            <div className=" bg-[#061422] py-10">
                {/* Top Text Marquee */}
                <Marquee className="py-2" pauseOnHover repeat={6} reverse>
                    {tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-3 mx-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                            <span className="text-[#E2E8F0] text-sm md:text-base font-medium whitespace-nowrap uppercase tracking-wider">{tag}</span>
                        </div>
                    ))}
                </Marquee>

                {/* Project Image Carousel */}
                <Marquee className="py-4 [--duration:60s]" pauseOnHover repeat={4} reverse>
                    {projectImages.map((image, index) => (
                        <div
                            key={index}
                            className="bg-white/5 rounded-[22px] border border-white/5 hover:border-[#79B7FA]/30 transition-all group overflow-hidden relative mx-3 shrink-0"
                        >
                            <div className=""></div>
                            <Image
                                src={image}
                                alt={`Project ${index + 1}`}
                                width={image.width}
                                height={image.height}
                                className="h-[300px] md:h-[450px] w-auto transition-transform duration-700 "
                            />
                        </div>
                    ))}
                </Marquee>

                {/* Bottom Text Marquee */}
                <Marquee className="py-2" pauseOnHover repeat={6} >
                    {tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-3 mx-4">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#E2E8F0]" />
                            <span className="text-[#E2E8F0] text-sm md:text-base font-medium whitespace-nowrap uppercase tracking-wider">{tag}</span>
                        </div>
                    ))}
                </Marquee>
            </div>
        </section >
    );
}

