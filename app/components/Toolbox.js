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
                title: "Landing Page Design",
                desc: "I specialize in crafting impactful landing pages that engage visitors instantly, guiding them through an intuitive experience and ensuring high conversion rates. Your brand’s first impression, perfectly executed.",
            },
            {
                title: "Mobile App Design",
                desc: "I specialize in creating intuitive, visually stunning mobile app interfaces for iOS and Android. From user flows and wireframes to pixel-perfect UI designs.",
            },
            {
                title: "Web App Design",
                desc: "Designing sophisticated web applications that prioritize user interaction and scalability. My designs turn complex data into user-friendly dashboards, optimizing workflows and driving smarter business decisions.",
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
        <section className="relative w-full  py-30 lg:my-20 md:my-10 my-5   h-screen   ">


            <video
                className="absolute inset-0 bg-cover  -z-10 opacity-20 h-screen"
                src='https://res.cloudinary.com/dcpbtzues/video/upload/v1769408945/video9_ryxizd.mp4'
                poster="https://res.cloudinary.com/dcpbtzues/image/upload/v1769420317/tollsbanner_ym0dep.png"
                autoPlay
                loop
                muted
            ></video>
            
            {/* Bottom Gradient Overlay */}
            <div className="absolute bottom-0 left-0 w-full h-[50px] bg-linear-to-t from-[#000000] to-transparent pointer-events-none -z-10"></div>
                         <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 pb-20 overflow-hidden">
            {/* Header */}
            <div className="flex flex-col lg:flex-row justify-between items-start lg:gap-10 md:gap-2 gap-2 lg:mb-16">
                <h2 className="text-[24px] md:text-[48px] lg:text-[56px] font-semibold font-['luxury'] text-white  max-w-2xl leading-tight">
                    Delivering Value Through My Skills
                </h2>
               
            </div>

            {/* Service Cards */}
            <div className="flex flex-col gap-1 mb-20">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        className={`group lg:py-6 md:py-2 py-2 flex  justify-between items-start md:items-center lg:gap-6 md:gap-2 gap-2 transition-all    ${index === 0 ? "border-t border-white/10" : "" || index === 1 ? "border-t border-white/10" : "" || index === 2 ? "border-t border-white/10 " : ""}`}
                                            initial="hidden"
                                            whileInView="visible"
                                            viewport={{ once: false, amount: 0.5 }}
                                            variants={cardVariants}
                                            custom={index}
                    >
                        <div className="flex-1">
                            <h3 className="text-2xl md:text-3xl font-medium text-white mb-4 font-poppins   group-hover:text-[#79B7FA] transition-colors">
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
