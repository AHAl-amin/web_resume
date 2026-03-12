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
  

    const projectImages = [img1, img2, img3, img4, img5, img6, img7, img9, img10, img11, img12];
    const tags = ["UX/UI", "Website", "Mobile App", "Dashboard", "Saas Platform", "Design System", "Visual Design"];

    return (
        <section>

        
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
                            className="bg-white/5 rounded-[20px] transition-all group overflow-hidden relative mx-3 shrink-0"
                        >
                            <div className=""></div>
                            <Image
                                src={image}
                                alt={`Project ${index + 1}`}
                                width={image.width}
                                height={image.height}
                                className="h-[300px] md:h-[450px] w-auto transition-transform duration-700 scale-101 "
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
            
        </section>
    );
}

