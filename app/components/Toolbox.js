"use client";
import { FaFigma } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import Image from "next/image";
import img1 from "@/public/figma.png";
import img2 from "@/public/xd.png";
import img3 from "@/public/photoshop.png";
import img4 from "@/public/illustrator.png";
import Skills from "./Skills";
import { FiArrowUpRight } from "react-icons/fi";


export default function Toolbox() {
    const tools = [
        {
            name: "Figma",
            level: "90%",
            icon: <Image src={img1} alt="Figma" width={30} height={30} />,
            desc: "Used for creating professional design work"
        },
        {
            name: "Adobe XD",
            level: "85%",
            icon: <Image src={img2} alt="Adobe XD" width={40} height={40} />,
            desc: "Prototyping and user experience design"
        },
        {
            name: "Adobe Photoshop",
            level: "75%",
            icon: <Image src={img3} alt="Adobe Photoshop" width={40} height={40} />,
            desc: "Layout design and photo manipulation"
        },
        {
            name: "Adobe Illustrator",
            level: "70%",
            icon: <Image src={img4} alt="Adobe Illustrator" width={40} height={40} />,
            desc: "Icons and branding assets creation"
        },
    ];

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

    return (
        <section className="relative w-full  py-30 mt-30 h-screen">


            <video
                className="absolute inset-0 bg-cover  -z-10 opacity-20 h-full"
                src='https://res.cloudinary.com/dcpbtzues/video/upload/v1769408945/video9_ryxizd.mp4'
                poster="https://res.cloudinary.com/dcpbtzues/image/upload/v1769420317/tollsbanner_ym0dep.png"
                autoPlay
                loop
                muted
            ></video>
    <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 pb-20 overflow-hidden">
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

        </section >
         

        </section>
    );
}
