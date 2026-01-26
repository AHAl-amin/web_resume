
import profileImage from "@/public/images/profile_3.png";
import image1 from "@/public/images/proffesion/image1.png";
import image2 from "@/public/images/proffesion/image2.png";
import image3 from "@/public/images/proffesion/image3.png";
import image4 from "@/public/images/proffesion/image4.png";

import image5 from "@/public/images/proffesion/image5.png";
import image6 from "@/public/images/proffesion/image6.png";
import image7 from "@/public/images/proffesion/image7.png";
import Image from "next/image";
import { Marquee } from "@/components/ui/marquee";



export default function MyProfession() {
    return (
        <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20   ">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-0 items-center border-b-2 border-[#0A427D]/60 rounded-2xl relative">
            <div className="absolute bottom-0 left-0 w-full h-[50px] bg-linear-to-t from-[#0A427D]/40 to-transparent rounded-b-2xl">
              
            </div>
                {/* Left Side: Content */}
                <div className="space-y-6 ">
                    <h2 className="text-[40px] md:text-[48px] lg:text-[58px] font-bold text-white leading-tight mb-10   ">
                        My Professional Journey
                    </h2>

                    <div className="space-y-4 text-white/70 text-base md:text-lg leading-relaxed text-justify-controlled word-spacing-tight text-justify pr-4">
                        <p>



                            After successfully completing an intensive professional Product Design course, <span className="text-[#5BA1E9] text-[20px] font-semibold">I joined Bitopia Group of Company</span>, a fast-growing organization that continues to strengthen its leadership position in the tech industry.

                        </p>

                        <p>
                            Since joining, I have contributed to numerous high-impact projects from concept to execution. My responsibilities include <span className="text-[#5BA1E9] text-[20px] font-semibold">user research, wireframing, UI/UX design, prototyping, and collaboration with development teams to ensure seamless implementation</span>. The majority of these projects have received excellent feedback and strong appreciation from stakeholders and end-users alike, reflecting my commitment to delivering intuitive, visually appealing, and functional design solutions.
                        </p>

                        <p>
                            This experience has sharpened my expertise in modern design tools (Figma, Adobe XD etc.), design thinking methodologies, and user-centered product development while working in a dynamic, results-driven environment.
                        </p>
                    </div>
                </div>

                {/* Right Side: Portrait */}
                <div className="relative flex justify-center lg:justify-end">
                    <div className="relative w-full aspect-square  ">
                        <Image
                            src={profileImage}
                            alt="Professional Journey"
                            fill
                            className="object-contain rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>
                </div>
            </div>

            {/* Marquee Carousel Section */}
            <div className="mt-20">
                <Marquee pauseOnHover className="[--duration:30s] [--gap:1.5rem]">
                    <div className="relative w-[400px] h-[300px]">
                        <Image
                            src={image1}
                            alt="Professional Journey"
                            fill
                            className="object-cover rounded-[32px]"
                        />
                    </div>
                    <div className="relative w-[400px] h-[300px]">
                        <Image
                            src={image2}
                            alt="Professional Journey"
                            fill
                            className="object-cover rounded-[32px]"
                        />
                    </div>
                    <div className="relative w-[400px] h-[300px]">
                        <Image
                            src={image3}
                            alt="Professional Journey"
                            fill
                            className="object-cover rounded-[32px]"
                        />
                    </div>
                    <div className="relative w-[400px] h-[300px]">
                        <Image
                            src={image4}
                            alt="Professional Journey"
                            fill
                            className="object-cover rounded-[32px]"
                        />
                    </div>
                    <div className="relative w-[400px] h-[300px]">
                        <Image
                            src={image5}
                            alt="Professional Journey"
                            fill
                            className="object-cover rounded-[32px]"
                        />
                    </div>
                    <div className="relative w-[400px] h-[300px]">
                        <Image
                            src={image6}
                            alt="Professional Journey"
                            fill
                            className="object-cover rounded-[32px]"
                        />
                    </div>
                    <div className="relative w-[400px] h-[300px]">
                        <Image
                            src={image7}
                            alt="Professional Journey"
                            fill
                            className="object-cover rounded-[32px]"
                        />
                    </div>
                </Marquee>
            </div>
        </section>
    );
}