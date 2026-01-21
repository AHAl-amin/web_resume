"use client";
import { FiArrowRight } from "react-icons/fi";

export default function Philosophy() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-24 md:py-32 border-t border-white/5">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
                <div className="max-w-3xl">
                    <h2 className="text-[36px] md:text-[56px] lg:text-[72px] font-bold text-white abril-fatface leading-tight mb-12">
                        The Approach to Design and Philosophy Behind It
                    </h2>

                    <button className="group bg-[#79B7FA] text-black px-10 py-5 rounded-full font-bold text-lg md:text-xl flex items-center gap-3 hover:bg-white transition-all duration-500">
                        Let&apos;s Talk
                        <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center group-hover:translate-x-1 transition-transform">
                            <FiArrowRight />
                        </div>
                    </button>
                </div>

                <div className="flex flex-col gap-6 items-start lg:items-end">
                    <a href="#" className="text-white/40 text-xl md:text-2xl hover:text-white transition-colors">
                        Graphic Design
                    </a>
                    <a href="#" className="text-white/40 text-xl md:text-2xl hover:text-white transition-colors">
                        Brand Identity Design
                    </a>
                    <a href="#" className="text-[#79B7FA] text-xl md:text-2xl font-bold hover:text-white transition-all">
                        Product Designer
                    </a>
                </div>
            </div>
        </section>
    );
}
