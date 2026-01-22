"use client";
import { FiAward, FiUsers, FiLayers } from "react-icons/fi";
import img1 from "@/public/project1.svg";
import img2 from "@/public/project2.svg";
import img3 from "@/public/project3.svg";
import Image from "next/image";
import { BorderBeam } from "@/components/ui/border-beam";

export default function Stats() {
    const stats = [
        {
            value: "50+",
            label: "Projects Done",
            desc: "Trusted by designers, startups and enterprise companies.",
            icon: img3
        },
        {
            value: "90%",
            label: "Satisfaction Rate",
            desc: "Complementary with latest design and development trends.",
            icon: img2
        },
        {
            value: "250+",
            label: "Happy Clients",
            desc: "Highly respected by our recently provided software users.",
            icon: img1
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[#111111]/50 backdrop-blur-xl border border-white/5 p-4 rounded-[20px] hover:border-[#79B7FA]/30 transition-all duration-500 group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-[40px] md:text-[48px] font-bold text-white">{stat.value}</div>
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
                        <h4 className="text-lg md:text-xl font-bold text-white mb-2">{stat.label}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
                         <BorderBeam duration={8} size={100} colorFrom="#41A1EF" colorTo="#0A427D" />
                    </div>
                ))}
            </div>
        </section>
    );
}
