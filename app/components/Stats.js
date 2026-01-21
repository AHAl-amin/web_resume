"use client";
import { FiAward, FiUsers, FiLayers } from "react-icons/fi";

export default function Stats() {
    const stats = [
        {
            value: "50+",
            label: "Projects Done",
            desc: "Trusted by designers, startups and enterprise companies.",
            icon: <FiLayers className="text-[#F24E1E]" />
        },
        {
            value: "90%",
            label: "Satisfaction Rate",
            desc: "Complementary with latest design and development trends.",
            icon: <FiAward className="text-[#035AB7]" />
        },
        {
            value: "250+",
            label: "Happy Clients",
            desc: "Highly respected by our recently provided software users.",
            icon: <FiUsers className="text-[#79B7FA]" />
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {stats.map((stat, index) => (
                    <div
                        key={index}
                        className="bg-[#111111]/50 backdrop-blur-xl border border-white/5 p-8 md:p-10 rounded-[40px] hover:border-[#79B7FA]/30 transition-all duration-500 group"
                    >
                        <div className="flex justify-between items-start mb-8">
                            <div className="text-[40px] md:text-[48px] font-bold text-white">{stat.value}</div>
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform">
                                {stat.icon}
                            </div>
                        </div>
                        <h4 className="text-lg md:text-xl font-bold text-white mb-2">{stat.label}</h4>
                        <p className="text-white/40 text-sm leading-relaxed">{stat.desc}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
