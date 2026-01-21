"use client";
import Image from "next/image";
import profileImage from "@/public/images/profile_1.png";

export default function Contact() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20 border-t border-white/5">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left Side: Form */}
                <div>
                    <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white abril-fatface leading-tight mb-8">
                        Let&apos;s bring your ideas to life together
                    </h2>

                    <form className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                placeholder="First Name"
                                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-[#79B7FA]/50 focus:outline-none transition-all"
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-[#79B7FA]/50 focus:outline-none transition-all"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-[#79B7FA]/50 focus:outline-none transition-all"
                        />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-[#79B7FA]/50 focus:outline-none transition-all"
                        />

                        <textarea
                            placeholder="Message"
                            rows={5}
                            className="w-full bg-white/5 border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/40 focus:border-[#79B7FA]/50 focus:outline-none transition-all resize-none"
                        ></textarea>

                        <button
                            type="submit"
                            className="w-full bg-[#79B7FA] text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white transition-all duration-500"
                        >
                            Get In Touch
                        </button>
                    </form>
                </div>

                {/* Right Side: Portrait */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full max-w-[450px] aspect-square">
                        <Image
                            src={profileImage}
                            alt="Let's Talk"
                            fill
                            className="object-contain rounded-[32px]"
                        />

                        {/* Decorative text overlay */}
                        <div className="absolute bottom-10 left-10 right-10 text-center">
                            <h3 className="text-[#79B7FA] text-[48px] md:text-[64px] font-bold abril-fatface leading-tight">
                                Let&apos;s Turn Your Idea Into Reality
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
