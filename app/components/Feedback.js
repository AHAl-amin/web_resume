"use client";
import Image from "next/image";

export default function Feedback() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20">
            <div className="mb-12">
                <h2 className="text-[36px] md:text-[48px] font-bold text-white abril-fatface">
                    Client Feedback
                </h2>
            </div>

            <div className="bg-[#111111]/50 backdrop-blur-xl border border-white/5 p-8 md:p-12 rounded-[40px] hover:border-[#79B7FA]/30 transition-all duration-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                    {/* Client Photo */}
                    <div className="lg:col-span-3">
                        <div className="relative w-32 h-32 md:w-40 md:h-40 mx-auto lg:mx-0">
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-[#79B7FA]/20 to-[#035AB7]/20 border border-white/10 flex items-center justify-center">
                                <span className="text-white/20 text-4xl font-bold">JD</span>
                            </div>
                        </div>
                    </div>

                    {/* Testimonial Content */}
                    <div className="lg:col-span-9">
                        <div className="mb-6">
                            <div className="flex gap-1 mb-4">
                                {[1, 2, 3, 4, 5].map((star) => (
                                    <svg
                                        key={star}
                                        className="w-5 h-5 text-[#79B7FA]"
                                        fill="currentColor"
                                        viewBox="0 0 20 20"
                                    >
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-white/80 text-lg md:text-xl leading-relaxed mb-6">
                                &quot;Working with Rahim was an absolute pleasure. His attention to detail and creative approach transformed our vision into a stunning reality. The final product exceeded our expectations, and our users love the intuitive design.&quot;
                            </p>
                        </div>

                        <div>
                            <h4 className="text-white text-lg font-bold">Jessica Davis</h4>
                            <p className="text-white/50 text-sm">CEO, TechStart Inc.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
