"use client";
import { FiArrowUpRight } from "react-icons/fi";

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

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20 border-t border-white/5">
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
                        className={`group py-8  border-white/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 transition-all hover:bg-white/2  rounded-2xl ${index === 0 ? "border-b border-white/10" : "" || index === 1 ? "border-b border-white/10" : ""}`}
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

            {/* Project Showcase Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="aspect-4/5 bg-white/5 rounded-[32px] border border-white/5 hover:border-[#79B7FA]/30 transition-all group overflow-hidden relative"
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        {/* Placeholder Content */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/5 text-7xl md:text-8xl font-bold">{item}</span>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
