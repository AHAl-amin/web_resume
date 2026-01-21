"use client";

export default function DiveDeep() {
    return (
        <section className="w-full max-w-[1440px] mx-auto px-6 md:px-10 py-20 border-t border-white/5">
            <div className="text-center mb-16">
                <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white abril-fatface mb-6">
                    Sometimes, I dive deep
                </h2>
                <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                    I write about design, productivity, and the occasional life musings. Sometimes I share behind-the-scenes of my projects, design thinking, and creative process. It&apos;s a mix of tutorials, reflections, and experiments.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {[1, 2, 3].map((item) => (
                    <div
                        key={item}
                        className="group relative aspect-[4/5] bg-white/5 rounded-[32px] border border-white/5 hover:border-[#79B7FA]/30 transition-all overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/50 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                        {/* Placeholder for blog/article image */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-white/10 text-8xl font-bold">{item}</span>
                        </div>

                        {/* Content overlay */}
                        <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                            <span className="text-[#79B7FA] text-sm font-semibold mb-2 block">Article</span>
                            <h3 className="text-white text-xl font-bold mb-2 group-hover:text-[#79B7FA] transition-colors">
                                Deep Dive Article {item}
                            </h3>
                            <p className="text-white/60 text-sm">
                                Exploring design concepts and creative processes...
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
