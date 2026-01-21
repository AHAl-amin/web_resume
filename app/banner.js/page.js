import bannerImage from "@/public/images/banerimg.png";
import Image from "next/image";
import profileImage from "@/public/images/profile_1.png";
import { FaBehance, FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

export default function Banner() {
    return (
        <section className="relative">
            {/* Background Image */}

            {/* Decorative Circle */}

            <div className="relative lg:min-h-[90vh] min-h-[100vh] w-full flex justify-center overflow-hidden  max-w-[1440px] mx-auto p-10  ">
                <div
                    className="absolute inset-0 z-0 opacity-40 w-1/2 mx-auto"
                    style={{
                        backgroundImage: `url(${bannerImage.src})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat"
                    }}
                />


                {/* Main Content Container */}
                <div className=" h-full flex flex-col items-center justify-center w-full   ">

                    {/* Main Title Center-Top */}
                    <div className="absolute  2xl:top-[13%]  lg:top-[10%] top-[10%] text-center ">
                        <h1 className="text-[50px] lg:text-[60px] xl:text-[80px] font-bold tracking-normal text-[#79B7FA]/50 leading-[0.85] abril-fatface">
                            I’M a Product <br />
                            <span className="">Designer</span>
                        </h1>
                    </div>

                    {/* Profile Image (Centered & Higher Z-index) */}
                    <div className="relative  mt-32 2xl:mt-46 xl:mt-44">
                        <Image
                            src={profileImage}
                            alt="Rahim Rehman"
                            width={480}
                            height={480}
                            className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)]"
                            priority
                        />
                    </div>
                    {/* Marquee with Gradient Background */}


                    {/* Tagline Bottom Left */}
                    <div className="absolute bottom-[24%] left-10 md:left-10 z-30 ">
                        <p className="text-[32px] md:text-[40px] text-white/90 leading-tight marck-script">
                            <span className="text-[#6BB4F8]">Turning</span> Complex Problems
                            <br />
                            into Intuitive <span className="text-[#6BB4F8]">Experiences</span>
                        </p>
                    </div>

                    {/* Name & Location Middle Right */}
                    <div className="absolute top-[50%] right-[10%] md:right-[10%] z-30 flex flex-col items-start translate-y-[-50%]">
                        <div className="  ">
                            <h2 className="text-[40px] font-roboto font-medium text-[#FFFFFF] tracking-widest">
                                Rahim Rehman
                            </h2>
                        </div>
                        <div className="flex items-center gap-2 mt-4 text-white/60 ">
                            <IoLocationOutline className="text-[#79B7FA] text-xl" />
                            <span className="text-base font-roboto tracking-[0.2em] font-light ">Bangladesh</span>
                        </div>
                    </div>

                    {/* Social Sidebar Far Right */}
                    <div className="absolute right-10 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
                        <SocialIcon icon={<FaBehance />} href="#" />
                        <SocialIcon icon={<FaLinkedinIn />} href="#" />
                        <SocialIcon icon={<FaFacebookF />} href="#" />
                        <SocialIcon icon={<FaInstagram />} href="#" />
                        <SocialIcon icon={<FaWhatsapp />} href="#" />
                    </div>
                </div>
                ``
            </div>
            <div className=" absolute bottom-0 w-full h-[60px] bg-[#6BB4F8]   flex items-center">
                <marquee className="text-white/50 text-5xl font-bold uppercase tracking-widest">
                    Product Designer • UI/UX Designer • Rahim Rehman • Product Designer • UI/UX Designer • Rahim Rehman •
                </marquee>
            </div>

        </section>
    );
}

function SocialIcon({ icon, href }) {
    return (
        <a
            href={href}
            className="w-10 h-10 rounded-full border border-[#52BFB3]/30 flex items-center justify-center text-white/50 hover:text-[#79B7FA] hover:border-[#79B7FA]/60 hover:bg-[#79B7FA]/5 transition-all duration-300 bg-[#52BFB3]/12 backdrop-blur-xl"
        >
            <span className="text-xl icon ">{icon}</span>
        </a>
    );
}
