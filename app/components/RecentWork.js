"use client";
import { FiArrowUpRight } from "react-icons/fi";

export default function RecentWork() {
    const projects = [
        {
            title: "Cravings",
            subtitle: "Delicious food, Happy tummy! Discover & order food from our Cravings Support & boost our local business",
            tags: ["UI/UX Design", "Mobile App"],
            color: "from-[#FF6B6B]/20 to-[#4ECDC4]/20"
        },
        {
            title: "Foodie Ordering Platform",
            subtitle: "Visual design project (UI)",
            tags: ["UI Design", "Web Platform"],
            color: "from-[#95E1D3]/20 to-[#F38181]/20"
        },
        {
            title: "Target Fit",
            subtitle: "Fitness Tracker Application UI/UX Design for iOS and Android",
            tags: ["UI/UX Design", "Mobile App"],
            color: "from-[#A8E6CF]/20 to-[#FFD3B6]/20"
        },
        {
            title: "Student Dashboard",
            subtitle: "Student Dashboard Service for daily class routine & class management",
            tags: ["Dashboard", "Web App"],
            color: "from-[#FFAAA5]/20 to-[#FF8B94]/20"
        }
    ];

    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20">
            <div className="mb-12">
                <h2 className="text-[36px] md:text-[48px] font-bold text-white abril-fatface mb-4">
                    Recent work
                </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`group relative bg-gradient-to-br ${project.color} backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[32px] hover:border-[#79B7FA]/30 transition-all duration-500 min-h-[300px] flex flex-col justify-between`}
                    >
                        {/* Project placeholder/mockup area */}
                        <div className="absolute top-8 right-8 w-32 h-32 bg-white/5 rounded-2xl"></div>

                        <div className="relative z-10">
                            <div className="flex gap-3 mb-6">
                                {project.tags.map((tag, i) => (
                                    <span
                                        key={i}
                                        className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-xs text-white/80 border border-white/10"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                                {project.title}
                            </h3>
                            <p className="text-white/60 text-base leading-relaxed mb-6 max-w-md">
                                {project.subtitle}
                            </p>
                        </div>

                        <div className="flex items-center gap-2 text-[#79B7FA] font-semibold group-hover:gap-4 transition-all">
                            <span>View Project</span>
                            <FiArrowUpRight className="text-xl" />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
