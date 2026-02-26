"use client";
import { FiAward, FiUsers, FiLayers, FiArrowRight } from "react-icons/fi";
import img1 from "@/public/project1.svg";
import img2 from "@/public/project2.svg";
import img3 from "@/public/project3.svg";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";
import CountUp from "react-countup";

export default function Stats() {
    const stats = [
        {
            value: "30+",
            end: 30,
            suffix: "+",
            label: "Projects Done",
            desc: "Trusted by designers, startups and enterprise companies.",
            icon: img3
        },
        {
            value: "90%",
            end: 90,
            suffix: "%",
            label: "Satisfaction Rate",
            desc: "Complementary with latest design and development trends.",
            icon: img2
        },
        {
            value: "95%",
            end: 95,
            suffix: "%",
            label: "Happy Clients",
            desc: "Highly respected by our recently provided software users.",
            icon: img1
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20 space-y-20  lg:mt-30 mt-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[#111111]/50 backdrop-blur-xl border border-white/5 p-4 rounded-[20px] hover:border-[#79B7FA]/30 transition-all duration-500 group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-[40px] md:text-[48px] font-bold text-white font-luxury-roman">
                                <CountUp
                                    start={0}
                                    end={stat.end}
                                    duration={2.5}
                                    suffix={stat.suffix}
                                    enableScrollSpy
                                    scrollSpyOnce
                                />
                            </div>
                            <div className={`  flex items-center justify-center rounded-2xl ${index === 0 ? "w-20 h-20" : "w-12 h-12"} transition-transform`}>
                                <Image
                                    src={stat.icon}
                                    alt={stat.label}
                                    width={index === 0 ? 60 : 28}
                                    height={index === 0 ? 60 : 28}
                                    className="object-contain"
                                />
                            </div>

                        </div>
                        <h4 className="text-lg md:text-xl font-medium font-['luxury'] text-white mb-2">{stat.label}</h4>
                        <p className="text-[#90A1B9] max-w-[250px] text-sm leading-relaxed">{stat.desc}</p>
                        <BorderBeam duration={8} size={100} colorFrom="#41A1EF" colorTo="#0A427D" />
                    </div>
                ))}
            </div>
            <div className="flex flex-col lg:flex-row justify-between  gap-12">
                <div className="lg:w-1/2 w-full">
                    <h2 className="text-[26px] md:text-[36px] lg:text-[44px] font-medium font-luxury-roman text-white leading-tight mb-12">
                        The Approach to Design and Philosophy Behind It
                    </h2>

                </div>
                <div className="flex justify-between  items-center lg:w-1/2 w-full gap-6">
                    <div>


                        <button className="relative mt-3 flex items-center gap-2 md:px-8 px-6 py-4 rounded-full bg-linear-to-r from-[#0A427D]/40 via-transparent to-[#0A427D]/40 text-white font-medium text-sm overflow-hidden border border-white/10 cursor-pointer group">
                            <span className="relative z-10 flex items-center gap-2">
                                Let&apos;s Talk
                                <FiArrowRight className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </span>

                            <BorderBeam
                                duration={6}
                                delay={3}
                                size={400}
                                anchor="left"
                                borderWidth={2}
                                className=""
                                colorFrom="#41A1EF" colorTo="#0A427D"
                            />
                        </button>
                    </div>


                    <div className="flex flex-col gap-3 items-start text-[#CAD5E2] ">
                        <a href="#" className=" text-xl md:text-lg lg:text-xl hover:text-white transition-colors">
                            Creative Design
                        </a>
                        <a href="#" className=" text-xl md:text-lg lg:text-xl hover:text-white transition-colors">
                            User Friendly Design
                        </a>
                        <a href="#" className="text-xl md:text-lg lg:text-xl  hover:text-white transition-all">
                            Masterful Execution
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
