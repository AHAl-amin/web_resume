import React from 'react'
import bgImage from '@/public/images/about_image.png'
import profileImage from '@/public/images/profile_2.png'
import { Divide } from 'lucide-react'
import Image from 'next/image'

import { motion } from 'motion/react'
import { BorderBeam } from '@/components/ui/border-beam'

export default function About() {
  return (
    <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ">
      {/* Left Side: Portrait */}
      <div className="relative flex justify-center lg:justify-start">
        <div className="relative w-full aspect-square ">
          <Image
            src={profileImage}
            alt="Rahim Rehman"
            fill
            className="object-contain rounded-[32px] animate-pulse "
          />
        </div>
      </div>

      {/* Right Side: Content */}
      <div
        className="relative bg-center bg-no-repeat bg-cover py-10   space-y-6 "
        style={{ backgroundImage: `url(${bgImage.src})` }}
      >
        {/* Social Links */}
        <ul className="flex gap-6 text-[#5EAFE8] text-base md:text-lg font-semibold ">
          <li>
            <a href="#" className="hover:text-white transition-colors">Behance</a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
          </li>
          <li>
            <a href="#" className="hover:text-white transition-colors">Facebook</a>
          </li>
        </ul>

        {/* Main Title */}
        <h2 className="text-[42px] font-medium text-[#FFFFFF] leading-[1.3]   ">
          Rahim Rehman is a Product Designer based in Bangladesh
        </h2>

        {/* Stats */}
        <div className="flex gap-16 mb-12">
          <div>
            <div className="text-[30px] md:text-[32px] font-bold text-white">30+</div>
            <div className="text-white/60 text-sm uppercase tracking-widest">Projects</div>
          </div>
          <div>
            <div className="text-[30px] md:text-[32px] font-bold text-white">2 Years+</div>
            <div className="text-white/60 text-sm uppercase tracking-widest">As a Designer</div>
          </div>
        </div>

        {/* Description */}
        <p className="text-white/70 text-base md:text-lg leading-relaxed mb-12 max-w-2xl">
          Crafting intuitive, high-impact digital experiences through user-centered research, thoughtful strategy, and pixel-perfect execution. Specializing in mobile apps, SaaS platforms, and design systems for startups and forward-thinking brands.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-6">
          <button className="relative bg-transparent border border-[#79B7FA]/20 cursor-pointer text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#79B7FA]/10 transition-all overflow-hidden">
            <span className="relative z-10">Contact Me With What&apos;s App →</span>
            <BorderBeam duration={8} size={100} colorFrom="#3b82f6" colorTo="#9c40ff" />
          </button>
          <button className="relative bg-transparent border-2 border-[#79B7FA]/20 cursor-pointer text-white px-8 py-4 rounded-full font-bold text-base flex items-center gap-2 hover:bg-[#79B7FA]/10 transition-all overflow-hidden">
            <span className="relative z-10">Download Resume →</span>
            <BorderBeam duration={8} size={100} colorFrom="#3b82f6" colorTo="#9c40ff" />
          </button>
        </div>
      </div>
    </section>
  )
}
