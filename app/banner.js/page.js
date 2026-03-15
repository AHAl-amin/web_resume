"use client";

import bannerImage from "@/public/images/banerimg.png";
import Image from "next/image";
import profileImage from "@/public/images/profile_1.png";
import { FaBehance, FaLinkedinIn, FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { Marquee } from "@/components/ui/marquee";
import imagebanner from "@/public/images/bannertext.png";
import { motion } from "framer-motion";

export default function Banner() {
    const tags = ["UX/UI", "Website", "Mobile App", "Dashboard", "Responsive Design", "Design System", "Visual Design"];
    return (
        <section className="relative ">
            {/* Background Image */}

            {/* Decorative Circle */}

            <div className="relative h-screen w-full flex justify-center overflow-hidden  max-w-[1440px] mx-auto px-10   ">
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
                <div className=" h-full flex flex-col items-center justify-center w-full font-  ">

                    {/* Main Title Center-Top */}
                    <div className="absolute  2xl:top-[20%]  lg:top-[20%] top-[15%] text-center ">
                        <h3 className="flex items-center justify-center gap-2 md:text-[28px] text-[20px] mb-4  ">
                            <svg width="35" height="27" viewBox="0 0 35 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V2.5C0 9.41667 3.68333 15.4667 9.16667 18.8333V26.6667H34.1667V23.3333C34.1667 18.9 25.2833 16.6667 20.8333 16.6667H20.4167C12.5 16.6667 5.83333 10 5.83333 2.5V0M20.8333 0C19.0652 0 17.3695 0.702379 16.1193 1.95262C14.869 3.20286 14.1667 4.89856 14.1667 6.66667C14.1667 8.43478 14.869 10.1305 16.1193 11.3807C17.3695 12.631 19.0652 13.3333 20.8333 13.3333C22.6014 13.3333 24.2971 12.631 25.5474 11.3807C26.7976 10.1305 27.5 8.43478 27.5 6.66667C27.5 4.89856 26.7976 3.20286 25.5474 1.95262C24.2971 0.702379 22.6014 0 20.8333 0Z" fill="#E2E8F0" />
                            </svg>
                            <p className=" text-[#E2E8F0] font-[josefin-slab] tracking-[4px]">
                                Hey, This Is Rahim Rehman Here
                            </p>

                        </h3>
                        <motion.h1
                            className=" text-[50px] lg:text-[70px] xl:text-[150px] font-['Luxury'] font-bold tracking-normal text-[#2273C9] leading-[0.85]"
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.5 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.2,
                                        delayChildren: 0,
                                    },
                                },
                            }}
                        >
                            {'I\'M UX/UI'.split('').map((char, index) => (
                                <motion.span
                                    key={index}
                                    variants={{
                                        hidden: { opacity: 0, y: -200 },
                                        visible: {
                                            opacity: 1,
                                            y: 0,
                                            transition: {
                                                duration: 0.4,
                                                ease: "easeInOut",
                                            },
                                        },
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                            <br />
                        </motion.h1>
                        <Image src={imagebanner.src} alt="Banner" className="h-full w-full object-cover mt-5" height={1000} width={1000} />



                    </div>

                    {/* Profile Image (Centered & Higher Z-index) */}
                    <motion.div
                        className="absolute -bottom-5"
                        initial={{ y: 120, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: false, amount: 0.3 }}
                        transition={{ duration: 1, type: "spring", bounce: 0.3, delay: 0.2 }}
                    >
                        <Image
                            src={profileImage}
                            alt="Rahim Rehman"
                            width={440}
                            height={656}
                            className="object-contain drop-shadow-[0_0_30px_rgba(0,0,0,0.5)] "
                            priority
                        />
                    </motion.div>
                    {/* Marquee with Gradient Background */}




                    {/* Social Sidebar Far Right */}
                    <div className="absolute md:right-10 right-2 top-1/2 -translate-y-1/2 z-40 flex flex-col gap-6">
                        <SocialIcon icon={<FaBehance />} href="#" />
                        <SocialIcon icon={<FaLinkedinIn />} href="#" />
                        <SocialIcon icon={<FaFacebookF />} href="#" />
                        <SocialIcon icon={<FaInstagram />} href="#" />
                        <SocialIcon icon={<FaWhatsapp />} href="#" />
                    </div>
                </div>

            </div>
            <div className="absolute bottom-0 w-full h-[300px] bg-linear-to-t from-[#000000] to-transparent ">


            </div>
            <div className=" absolute bottom-5 w-full pb-2   bg-linear-to-b from-[#050D1B00] to-[#050D1B]   flex items-center">
                <Marquee className="pt-6" pauseOnHover repeat={6} >
                    {tags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-3 mx-4 ">
                            <span className="w-1.5 h-1.5 rounded-full text-[#E2E8F0] bg-[#E2E8F0]/50" />
                            <span className="text-[#E2E8F0]  text-lg md:text-xl font-bold whitespace-nowrap uppercase tracking-wider">{tag}</span>
                        </div>
                    ))}
                </Marquee>
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
