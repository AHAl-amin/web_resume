'use client';

import React from "react"

import { Mail, Phone, MapPin, Linkedin, Github, Facebook, Instagram, Twitter } from 'lucide-react';
import Image from "next/image";
import profile from "@/public/images/contact-profile.png";
import { BorderBeam } from "@/components/ui/border-beam";

export default function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="">
      {/* Main Contact Section */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-10 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Left Side: Contact Info */}
          <div className="flex flex-col justify-start">
            <h1 className="text-5xl md:text-6xl font-bold text-white/80 mb-6 leading-tight">
              Let&apos;s bring your ideas to life together!
            </h1>
            
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              Let&apos;s work together to turn your vision into meaningful, impactful results.
            </p>

            {/* Contact Details */}
            <div className="space-y-4 mb-12">
              <div className="flex items-center gap-3 text-gray-300">
                <Mail size={20} className="text-blue-400" />
                <a href="mailto:rahimofficial2406@gmail.com" className="hover:text-blue-400 transition">
                  rahimofficial2406@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <Phone size={20} className="text-blue-400" />
                <span>01834342929</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin size={20} className="text-blue-400" />
                <span>01980012351</span>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 mb-4 font-semibold">Find me on</p>
              <div className="flex gap-4">
                <a href="#" className="bg-gray-900 hover:bg-gray-700 transition-all duration-300 ease-in-out p-3 rounded-full">
                  <Linkedin size={20} className="text-blue-400 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-gray-700 transition-all duration-300 ease-in-out p-3 rounded-full">
                  <Github size={20} className="text-blue-400 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-gray-700 transition-all duration-300 ease-in-out p-3 rounded-full">
                  <Facebook size={20} className="text-blue-400 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-gray-700 transition-all duration-300 ease-in-out p-3 rounded-full">
                  <Instagram size={20} className="text-blue-400 hover:text-white" />
                </a>
                <a href="#" className="bg-gray-900 hover:bg-gray-700 transition-all duration-300 ease-in-out p-3 rounded-full">
                  <Twitter size={20} className="text-blue-400 hover:text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Side: Contact Form */}
          <div className="bg-gray-900/50 backdrop-blur border border-gray-800 rounded-2xl p-8">
            <h2 className="text-2xl font-bold text-white/80 mb-8">Get In Touch</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                name="name"
                placeholder="Enter Your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder:text-gray-500 pb-3 focus:border-blue-400 focus:outline-none transition"
              />
              
              <input
                type="email"
                name="email"
                placeholder="Enter Your e-mail"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder:text-gray-500 pb-3 focus:border-blue-400 focus:outline-none transition"
              />
              
              <textarea
                name="message"
                placeholder="Write Message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full bg-transparent border-b border-gray-600 text-white placeholder:text-gray-500 pb-3 focus:border-blue-400 focus:outline-none transition resize-none"
              />

              <button className="relative mt-3 flex items-center gap-2 px-8 py-4 rounded-full bg-linear-to-r from-[#0A427D]/40 via-transparent to-[#0A427D]/40 text-white font-medium text-sm overflow-hidden border border-white/10 cursor-pointer group">
                                         <span className="relative z-10 flex items-center gap-2">
                                            Send
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
            </form>
          </div>
        </div>

        {/* Bottom Section */}
   
 

          {/* Large Text */}
          <div className="flex justify-center items-center">
           <div className="text-center space-y-4">
             <h3 className="text-4xl md:text-[60px] font-bold text-[#E2E8F0] leading-tight">
              Let's Design Your Website
            </h3>
            <p className="text-white/50  md:text-2xl max-w-2xl">
              Make Your Idea Into Reality
            </p>
           </div>
          </div>
        
      </section>
    </div>
  );
}
