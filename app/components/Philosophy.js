"use client";
import { BorderBeam } from "@/components/ui/border-beam";
import { FiArrowRight } from "react-icons/fi";
import { MdArrowOutward } from "react-icons/md";

export default function Philosophy() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-10  border-t border-white/5">
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
