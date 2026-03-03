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
import { motion } from "framer-motion";


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

    const cardVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: (index) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeOut"
            }
        })
    };

    return (
        <section className="relative w-full  py-30 xl:mt-30 lg:mt-12 md:mt-10 mt-0 md:mb-0 mb-20 h-screen">


            <video
                className="absolute inset-0 bg-cover  -z-10 opacity-20 h-screen"
                src='https://res.cloudinary.com/dcpbtzues/video/upload/v1769408945/video9_ryxizd.mp4'
                poster="https://res.cloudinary.com/dcpbtzues/image/upload/v1769420317/tollsbanner_ym0dep.png"
                autoPlay
                loop
                muted
            ></video>
                         <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 pb-20 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-10 md:gap-2 gap-2 lg:mb-16">
                <h2 className="text-[24px] md:text-[48px] lg:text-[56px] font-semibold font-['luxury'] text-white  max-w-2xl leading-tight">
                    Delivering Value Through My Skills
                </h2>
                {/* <p className="text-white/80 text-base md:text-lg max-w-lg  text-start">
                   I offer a range of professional services designing to meet your business needs with precision and creativity
                </p> */}
            </div>

            {/* Service Cards */}
            <div className="flex flex-col gap-1 mb-20">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`group lg:py-6 md:py-2 py-2 flex  justify-between items-start md:items-center lg:gap-6 md:gap-2 gap-2 transition-all hover:bg-white/2   ${index === 0 ? "border-t border-white/10" : "" || index === 1 ? "border-t border-white/10" : "" || index === 2 ? "border-t border-white/10 " : ""}`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.5 }}
                                            variants={cardVariants}
                                            custom={index}
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 font-['luxury'] group-hover:text-[#79B7FA] transition-colors">
                                {service.title}
                            </h3>
                            <p className="text-white/60 text-base md:text-lg max-w-2xl group-hover:text-white/70 transition-colors">
                                {service.desc}
                            </p>
                        </div>
                        <div className="p-[1px] rounded-full bg-linear-to-r from-[#5A78EE] to-[#0CA8B6] transition-all duration-500 group-hover:from-[#0CA8B6] group-hover:to-[#5A78EE]">
                            <div className="lg:w-12 lg:h-12 md:w-14 md:h-14 w-10 h-10 rounded-full flex items-center justify-center
      group-hover:bg-linear-to-br group-hover:from-[#0A427D]/50 group-hover:to-[#3456DC]/50 bg-black
      text-white/60 group-hover:text-white transition-all duration-500 cursor-pointer">
                                <FiArrowUpRight className="lg:text-2xl text-[12px]" />
                            </div>
                        </div>

                    </motion.div>
                ))}
            </div>

        </section >
         

        </section>
    );
}
