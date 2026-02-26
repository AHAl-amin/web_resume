'use client';
import { useState } from 'react';
import Image from 'next/image';
import { MoveLeft, MoveRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import clientImage1 from '@/public/images/feedback/feedback1.png';
import clientImage2 from '@/public/images/feedback/feedback2.png';
import clientImage3 from '@/public/images/feedback/feedback3.png';
import clientImage4 from '@/public/images/feedback/feedback4.png';

const ClientFeedback = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const feedbacks = [
        {
            id: 1,
            image: clientImage1,
            text: 'I had an excellent experience working with him! His communication was proactive and clear, the delivery was high-quality and right on time, and the overall value was outstanding. I look forward to continuing to work with this guy!',
            name: 'Csenable',
            title: 'Businessman, United States',
        },
        {
            id: 2,
            image: clientImage2,
            text: "I had a great experience so far! Rahim’s communication was polite, proactive, and clear, with excellent quality of delivery. Value was solid too. I'll wait for the final product before full feedback, but very happy with the progress.",
            name: 'Mr. Ben D',
            title: 'Professor, United Kingdom',
        },
        {
            id: 3,
            image: clientImage3,
            text: 'Very happy with ‘Rahim’. He keep updated at every step of the journey and always check to make sure you’re happy and if any changes need to be made. Highly recommend and will continue to work with him',
            name: 'Lindsay Bridge',
            title: 'Dr. United Kingdom',
        },
        {
            id: 4,
            image: clientImage4,
            text: 'Great work! The designer delivered exceptional quality with outstanding communication and excellent value throughout the project.',
            name: 'Adil Asslam',
            title: 'Businessman, United States',
        },
    ];

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    };

    const floatingImages = [
        { src: clientImage1, className: "top-[15%] left-[20%] top-[45%] w-[60px] h-[60px] md:w-14 md:h-14" },
        { src: clientImage2, className: "top-[30%] right-[12%] top-[40%] w-[64px] h-[64px] md:w-20 md:h-20" },
        { src: clientImage3, className: "bottom-[0%] left-[8%] w-[100px] h-[100px] md:w-36 md:h-36" },
        { src: clientImage4, className: "bottom-[10%] right-[10%] w-[40px] h-[40px] md:w-14 md:h-14" },
        
    ];

    const currentFeedback = feedbacks[currentSlide];

    return (
        <section className="relative w-full  py-20 md:py-32 overflow-hidden flex flex-col items-center justify-center max-w-[1440px] mx-auto ">
            {/* Background Glow */}
            

            {/* Floating Avatars */}
            <div className="absolute inset-0 pointer-events-none overflow-hidden">
                {floatingImages.map((img, idx) => (
                    <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{
                            opacity: 0.6,
                            scale: 1,
                            y: [0, -10, 0]
                        }}
                        transition={{
                            delay: idx * 0.2,
                            duration: 1,
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                        }}
                        className={`absolute rounded-full overflow-hidden border border-white/10 ${img.className}`}
                    >
                        <Image src={img.src} alt="Client" fill className="object-cover  " />
                    </motion.div>
                ))}
            </div>

            {/* Title Section */}
            <div className="relative z-10 text-center mb-16 md:mb-24">
                <h2 className="font-['luxury'] text-6xl md:text-[120px] leading-tight text-white flex flex-col">
                    <span>Client</span>
                    <span className="md:-mt-10">Feedback</span>
                </h2>
            </div>

            {/* Slider Content */}
            <div className="relative z-10 w-full max-w-4xl px-4 flex justify-center">
                {/* Left Arrow */}
                <button
                    onClick={goToPrevious}
                    className="group relative flex items-center justify-center w-16 h-16 rounded-full border border-blue-400/30 bg-blue-900/10 hover:bg-blue-900/20 transition-all cursor-pointer mr-6 md:mr-12 mt-30"
                >
                    <div className="absolute inset-0 rounded-full  blur-md group-hover:bg-blue-500/40 transition-all"></div>
                    <MoveLeft className="text-blue-400 w-6 h-6 relative z-10" />
                </button>

                {/* Testimonial Text */}
                <div className="flex-1 text-center min-h-[200px] flex flex-col justify-center">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentSlide}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.4 }}
                            className='space-y-10'
                        >
                            <div className="mt-6">
                                <h4 className="text-white text-xl md:text-2xl font-semibold tracking-wide">
                                    {currentFeedback.name}
                                </h4>
                                <p className="text-blue-400 text-xl mt-1 cappitalize tracking-widest">
                                    {currentFeedback.title}
                                </p>
                            </div>
                            <p className="text-white/80 text-lg md:text-2xl leading-relaxed font-light italic mb-8 max-w-2xl mx-auto">
                                &ldquo;{currentFeedback.text}&rdquo;
                            </p>
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Right Arrow */}
                <button
                    onClick={goToNext}
                    className="group relative flex items-center justify-center w-16 h-16 rounded-full border border-blue-400/30 bg-blue-900/10 hover:bg-blue-900/20 transition-all cursor-pointer ml-6 md:ml-12 mt-30"
                >
                    <div className="absolute inset-0 rounded-full blur-md group-hover:bg-blue-500/40 transition-all "></div>
                    <MoveRight className="text-blue-400 w-6 h-6 relative z-10" />
                </button>
            </div>

            {/* Mobile Pagination (only visible on small screens to reduce clutter) */}
            <div className="flex justify-center gap-2 mt-12 md:hidden">
                {feedbacks.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-1.5 h-1.5 rounded-full transition-all ${index === currentSlide ? 'bg-blue-400 w-4' : 'bg-white/20'}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ClientFeedback;

