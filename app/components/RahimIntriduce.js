
import Image from "next/image";
import profileImage from "@/public/images/profile_2.png";
import { FaBehance, FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { SiAdobexd, SiAdobephotoshop, SiAdobeillustrator, SiFigma } from "react-icons/si";

export default function RahimIntriduce() {
    return (
        <section className=" overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 flex flex-col items-center">

                {/* Profile Section with Floating Badges */}
                <div className="relative w-full max-w-3xl aspect-square flex items-center justify-center ">
                    {/* Background Radial Gradient */}
                    <div className="absolute h-[400px] w-[400px] rounded-full
  bg-[radial-gradient(circle,_#035AB7_0%,_transparent_100%)] blur-[150px] top-20">
                    </div>

                    <div className="relative w-1/2 h-full">
                        <Image
                            src={profileImage}
                            alt="Rahim Rehman"
                            fill
                            className="object-contain z-10"
                        />
                    </div>

                    {/* Skill Badges */}
                    {/* Top Left: XD */}
                    <div className="absolute top-[0%] left-[10%] md:left-[5%] z-20 flex items-center gap-2 bg-[#01182E] border border-white/10 rounded-lg px-2 py-2 backdrop-blur-md shadow-2xl justify-between w-[142px]">
                        <SiAdobexd className="text-[#FF61F6] text-[50px]" />
                        <span className="text-[#E5EFFC] text-[24px] font-medium">90%</span>
                    </div>

                    {/* Top Right: Photoshop */}
                    <div className="absolute top-[10%] right-[0%] md:right-15%] z-20 flex items-center gap-2 bg-[#01182E] border border-white/10 rounded-lg px-2 py-2 backdrop-blur-md shadow-2xl justify-between w-[142px]">
                        <SiAdobephotoshop className="text-[#31A8FF] text-[50px]" />
                        <span className="text-[#E5EFFC] text-[24px] font-medium">70%</span>
                    </div>

                    {/* Bottom Left: Figma */}
                    <div className="absolute bottom-[45%] left-[0%] md:left-[5%] z-20 flex items-center gap-2 bg-[#01182E] border border-white/10 rounded-lg px-2 py-2 backdrop-blur-md shadow-2xl justify-between w-[142px]">
                        <SiFigma className="text-[#F24E1E] text-[50px]" />
                        <span className="text-[#E5EFFC] text-[24px] font-medium">60%</span>
                    </div>

                    {/* Bottom Right: Illustrator */}
                    <div className="absolute bottom-[40%] right-[5%] md:right-[0%] z-20 flex items-center gap-2 bg-[#01182E] border border-white/10 rounded-lg px-2 py-2 backdrop-blur-md shadow-2xl justify-between w-[142px]">
                        <SiAdobeillustrator className="text-[#FF9A00] text-[50px]" />
                        <span className="text-[#E5EFFC] text-[24px] font-medium">60%</span>
                    </div>
                </div>

                {/* Text Content */}
                <div className="text-center space-y-6 max-w-4xl ">
                    <h2 className="luxury-roman text-4xl md:text-6xl text-white leading-tight">
                        Rahim Rehman is a <span className="text-white/90">UX/UI</span> Designer based in <span className="text-white/90">Bangladesh</span>
                    </h2>

                    <p className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        Crafting intuitive, high-impact digital experiences through user-centered research, thoughtful strategy, and pixel-perfect execution. Specializing in mobile apps, SaaS platforms, and design systems for startups and forward-thinking brands.
                    </p>
                </div>

                {/* Social Icons Row */}
                <div className="flex items-center justify-center gap-6 mt-16">
                    <SocialIcon icon={<FaBehance />} href="#" />
                    <SocialIcon icon={<FaLinkedinIn />} href="#" />
                    <SocialIcon icon={<FaFacebookF />} href="#" />
                    <SocialIcon icon={<FaInstagram />} href="#" />
                    <SocialIcon icon={<FaWhatsapp />} href="#" />
                </div>

                
            </div>
        </section>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <a
            href={href}
            className="w-12 h-12 rounded-full border  flex items-center justify-center text-white/50 hover:text-[#79B7FA] border-[#79B7FA]/60 hover:shadow-[0_0_20px_rgba(121,183,250,0.3)] transition-all duration-300 bg-white/5 backdrop-blur-xl"
        >
            <span className="text-xl">{icon}</span>
        </a>
    );
}