"use client";
import { FaFigma } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator } from "react-icons/si";

export default function Toolbox() {
    const tools = [
        {
            name: "Figma",
            level: "90%",
            icon: <FaFigma className="text-[#F24E1E]" />,
            desc: "Used for creating professional design work"
        },
        {
            name: "Adobe XD",
            level: "85%",
            icon: <SiAdobexd className="text-[#FF61F6]" />,
            desc: "Prototyping and user experience design"
        },
        {
            name: "Adobe Photoshop",
            level: "75%",
            icon: <SiAdobephotoshop className="text-[#31A8FF]" />,
            desc: "Layout design and photo manipulation"
        },
        {
            name: "Adobe Illustrator",
            level: "70%",
            icon: <SiAdobeillustrator className="text-[#FF9A00]" />,
            desc: "Icons and branding assets creation"
        },
    ];

    return (
        <section className="relative w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20 overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-[#79B7FA]/10 blur-[150px] rounded-full pointer-events-none"></div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center relative z-10">
                {/* Left Side: Globe Visual */}
                <div className="lg:col-span-5 relative">
                    <div className="relative w-full aspect-square max-w-[450px] mx-auto">
                        {/* Concentric circles for globe effect */}
                        <div className="absolute inset-0 rounded-full border border-white/5 animate-pulse"></div>
                        <div className="absolute inset-8 rounded-full border border-[#79B7FA]/10"></div>
                        <div className="absolute inset-16 rounded-full bg-linear-to-br from-[#035AB7]/20 to-[#072340]/40 overflow-hidden flex items-center justify-center">
                            <div className="text-center px-8">
                                <h3 className="text-white/40 text-xs uppercase tracking-[0.3em] font-medium mb-3">Tech Stack</h3>
                                <h2 className="text-white text-[28px] md:text-[36px] font-bold leading-tight abril-fatface">
                                    My Creative <br /> Toolbox
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Side: Tool Cards */}
                <div className="lg:col-span-7 flex flex-col gap-5">
                    {tools.map((tool, index) => (
                        <div
                            key={index}
                            className="bg-[#111111]/50 backdrop-blur-xl border border-white/5 p-6 rounded-[24px] flex items-center gap-6 group hover:border-[#79B7FA]/30 transition-all duration-500"
                        >
                            <div className="w-14 h-14 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                                {tool.icon}
                            </div>
                            <div className="grow">
                                <div className="flex justify-between items-end mb-2">
                                    <h4 className="text-white text-lg md:text-xl font-bold">{tool.name}</h4>
                                    <span className="text-white/40 text-sm">{tool.level}</span>
                                </div>
                                <p className="text-white/50 text-sm mb-3">{tool.desc}</p>
                                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                    <div
                                        className="h-full bg-linear-to-r from-[#79B7FA] to-[#035AB7] rounded-full transition-all duration-1000"
                                        style={{ width: tool.level }}
                                    ></div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
