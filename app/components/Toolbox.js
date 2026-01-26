"use client";
import { FaFigma } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";
import Image from "next/image";
import img1 from "@/public/figma.png";
import img2 from "@/public/xd.png";
import img3 from "@/public/photoshop.png";
import img4 from "@/public/illustrator.png";


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

            <div className="absolute bottom-0 left-0 w-full h-[300px] 
                           bg-linear-to-t from-[#00070C] via-[#00070C]/60 to-transparent 
    -z-10 "
            />


            <div className="flex lg:flex-row flex-col justify-between items-start gap-16 lg:gap-0  relative z-10 max-w-[1440px] mx-auto px-6 md:px-10">
                {/* Left Side: Globe Visual */}
                <div className="flex flex-col items-center lg:w-1/2 w-full">
                    <div className="text-end  px-8  ">
                        <h3 className="bg-linear-to-r from-[#44E1EF] to-[#549DEA] bg-clip-text text-transparent text-[24px]  font-medium mb-3">Tools & Skills</h3>
                        <h2 className="text-white text text-[28px] md:text-[64px] font-bold leading-tight ">
                            My Creative <br /> Toolbox
                        </h2>
                    </div>
                </div>

                {/* Right Side: Tool Cards */}
                <div className=" flex flex-col gap-5 lg:w-1/2 w-full">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-[#111111]/50 backdrop-blur-xl border border-[#0A427D] p-6 rounded-[24px] flex  gap-6 group hover:border-[#0A427D]/30 transition-all duration-500"
                        >
                            <div className="w-14 h-14 shrink-0  rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                {tool.icon}
                            </div>
                            <div className="w-full flex flex-col gap-2 ">
                                <div className="flex justify-between items-end mb-2">
                                    <h4 className="text-white text-lg md:text-xl font-bold">{tool.name}</h4>

                                </div>
                                <p className="text-white/50 text-sm mb-3">{tool.desc}</p>
                                <div className="flex justify-between items-center mb-2 relative ">
                                    <div className="h-1.5 w-full  rounded-full overflow-hidden">

                                        <div
                                            className="h-full bg-linear-to-r from-[#79B7FA] to-[#035AB7] rounded-full transition-all duration-1000"
                                            style={{ width: tool.level }}
                                        ></div>

                                    </div>
                                    <span className={`text-white text-sm absolute bg-[#035AB7] px-2 rounded-full  ${index === 0 ? "right-10" : "" || index === 1 ? "right-20" : "" || index === 2 ? "right-30" : "" || index === 3 ? "right-40" : ""}`}>{tool.level}</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
}
