'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
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
            text: '"I had an excellent experience working with him! His communication was proactive and clear, the delivery was high-quality and right on time, and the overall value was outstanding. I look forward to continuing to work with this guy!"',
            name: 'Csenable',
            title: 'Businessman, United States',
            rating: 5,
        },
        {
            id: 2,
            image: clientImage2,
            text: `"I had a great experience so far! Rahim’s communication was polite, proactive, and clear, with excellent quality of delivery. Value was solid too. I'll wait for the final product before full feedback, but very happy with the progress."`,
            name: 'Mr. Ben D',
            title: 'Professor, United Kingdom',
            rating: 5,
        },
        {
            id: 3,
            image: clientImage3,
            text: 'Very happy with ‘Rahim’. He keep updated at every step of the journey and always check to make sure you’re happy and if any changes need to be made. Highly recommend and will continue to work with him',
            name: 'Lindsay Bridge',
            title: 'Nurse, United Kingdom',
            rating: 5,
        },
        {
            id: 4,
            image: clientImage4,
            text: '"Great work! The designer delivered exceptional quality with outstanding communication and excellent value throughout the project."',
            name: ' Adil Asslam',
            title: 'Businessman, United States',
            rating: 5,
        },

    ];

    const goToPrevious = () => {
        setCurrentSlide((prev) => (prev === 0 ? feedbacks.length - 1 : prev - 1));
    };

    const goToNext = () => {
        setCurrentSlide((prev) => (prev === feedbacks.length - 1 ? 0 : prev + 1));
    };

    const feedback = feedbacks[currentSlide];

    return (
        <section className="w-full max-w-6xl mx-auto px-4 md:px-6 py-16 md:py-24 overflow-hidden ">
            <div className="mb-12">
                <h2 className="text-3xl md:text-5xl font-bold text-white">
                    Client Feedback
                </h2>
            </div>

            <div className="relative flex items-center gap-4 md:gap-6 overflow-hidden  rounded-3xl ">

                <div className="
                    absolute -top-80 -right-80
                  w-[800px] h-[800px]
                  rounded-full
               bg-[radial-gradient(circle_at_center,#035AB7_-10%,rgba(3,90,183,0.4)_20%,transparent_95%)]
                   blur-3xl
                     opacity-80
                              z-0
                            "></div>



                {/* Feedback Card */}
                <div className="w-full  bg-linear-to-r  border border-blue-400/20 rounded-3xl p-6 md:p-10 flex flex-col lg:flex-row gap-6 md:gap-8">
                    {/* Client Photo */}
                    <div className=" lg:w-1/3 w-full">
                        <div className="flex justify-center items-center   rounded-2xl overflow-hidden ">
                            <Image
                                src={feedback.image || "/placeholder.svg"}
                                alt={feedback.name}

                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col justify-center">
                        {/* Stars */}


                        {/* Testimonial Text */}
                        <p className="text-white/80 text-base md:text-lg leading-relaxed mb-6">
                            {feedback.text}
                        </p>
                        <div className="flex gap-3 mb-6">
                            {[...Array(feedback.rating)].map((_, i) => (
                                <Star
                                    key={i}
                                    className="w-5 h-5 fill-[#EEC97B] text-[#EEC97B]"
                                />
                            ))}
                        </div>

                        {/* Client Info */}
                        <div>
                            <h4 className="text-white font-semibold text-[20px]">{feedback.name}</h4>
                            <p className="text-white/50 text-sm">{feedback.title}</p>
                        </div>
                    </div>
                </div>

                <div className='absolute bottom-2 left-5/10  z-10     flex justify-between items-center gap-2 translate-x-[-50%]'>
                    {/* Right Arrow */}
                    <button
                        onClick={goToNext}
                        className=" bottom-0  z-10 p-2 md:p-3 rounded-full border border-blue-400/30 hover:bg-blue-400/10 transition-all cursor-pointer"
                        aria-label="Next feedback"
                    >
                        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </button>

                    {/* Left Arrow */}
                    <button
                        onClick={goToPrevious}
                        className=" -left-8 md:left-0 z-0 p-2 md:p-3 rounded-full border border-blue-400/30 hover:bg-blue-400/10 transition-all cursor-pointer"
                        aria-label="Previous feedback"
                    >
                        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                    </button>
                </div>
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-8 ">
                {feedbacks.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-blue-400 w-6' : 'bg-white/20'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </section>
    );
};

export default ClientFeedback;
