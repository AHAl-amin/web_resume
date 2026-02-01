
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
        <section>

            <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-20">
                <div className="flex lg:flex-row flex-col items-center gap-8">

                    {/* Left Side: Content */}



                    <div className="space-y-4 text-white/70 xl:w-2/3 w-full">
                        <p className="luxury-roman text-base md:text-[40px] italic">



                            ....................................Driven by Creativity, Focused on Crafting Designs That Resonate and Inspire Every Interaction. Designing User-CenteredExperiences That Drive Engagement and Satisfaction

                        </p>



                        <p className="text-sm max-w-2xl">
                            Crafting intuitive, high-impact digital experiences through user-centered research, thoughtful strategy, and pixel-perfect execution. Specializing in mobile apps, SaaS platforms, and design systems for startups and forward-thinking brands.
                        </p>
                    </div>


                    {/* Right Side: Portrait */}

                    <div className="relative  aspect-square xl:w-1/3 w-full">
                        <Image
                            src={profileImage}
                            alt="Professional Journey"
                            fill
                            className="object-contain rounded-[32px] grayscale hover:grayscale-0 transition-all duration-700"
                        />
                    </div>


                </div>

            </section>


        </section>
    );
}