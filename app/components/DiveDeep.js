// "use client";

// import Image from "next/image";
// import divedeep from "../../public/images/divedeepbg.png"
// import deep1 from "../../public/images/Rectangle 141.png"
// import deep2 from "../../public/images/Rectangle 142.png"
// import deep3 from "../../public/images/Rectangle 143.png"

// export default function DiveDeep() {
//     return (
//         <section className="relative w-full bg-cover bg-center lg:min-h-screen"
//             style={{ backgroundImage: `url(${divedeep.src})` }}>
//             <div className="w-full max-w-[1440px] mx-auto px-10 lg:py-20 py-10  ">
//                 <div className="text-center lg:space-y-14 space-y-10 ">
//                     <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white  ">
//                         Sometimes, I dive deep
//                     </h2>
//                     <p className="text-[#90A1B9] text-lg md:text-[32px]  mx-auto ">
//                         I write about design, productivity, and the occasional life musings. Sometimes I share behind-the-scenes of my projects, design thinking, and creative process. It&apos;s a mix of tutorials, reflections, and experiments.
//                     </p>
//                 </div>

//                 <div className="flex justify-between lg:flex-row gap-10 xl:mt-26 lg:mt-20 mt-16 ">
//                     <div className=" flex flex-col justify-center items-center " >
//                         <Image alt="aa" src={deep1.src}  width={500} height={400}/>

//                     </div>
//                     <div className="flex flex-col justify-center items-center" >


//                         <Image alt="aa" src={deep2.src}   width={500} height={400} />
//                     </div>
//                     <div className="flex flex-col justify-center items-center" >


//                         <Image alt="aasd" src={deep3.src}   width={500} height={400} />
//                     </div>






//                 </div>
//             </div>
//         </section>
//     );
// }

"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import divedeep from "../../public/images/divedeepbg.png";
import deep1 from "../../public/images/Rectangle 141.png";
import deep2 from "../../public/images/Rectangle 142.png";
import deep3 from "../../public/images/Rectangle 143.png";

export default function DiveDeep() {
  return (
    <section
      className="relative w-full bg-cover bg-center lg:min-h-screen"
      style={{ backgroundImage: `url(${divedeep.src})` }}
    >
      <div className="w-full max-w-[1440px] mx-auto px-10 lg:py-20 py-10">
        <div className="text-center lg:space-y-14 space-y-10">
          <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-bold text-white">
            Sometimes, I dive deep
          </h2>
          <p className="text-[#90A1B9] text-lg md:text-[32px] mx-auto">
            I write about design, productivity, and the occasional life musings.
            Sometimes I share behind-the-scenes of my projects, design thinking,
            and creative process. It&apos;s a mix of tutorials, reflections, and experiments.
          </p>
        </div>

        <div className="flex justify-between lg:flex-row flex-col gap-10 xl:mt-26 lg:mt-20 mt-16">
          
          {/* 1st Image - From Left */}
          <motion.div
            initial={{ x: -150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <Image src={deep1} alt="deep1" width={500} height={400} />
          </motion.div>

          {/* 2nd Image - From Bottom */}
          <motion.div
            initial={{ y: 150, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <Image src={deep2} alt="deep2" width={500} height={400} />
          </motion.div>

          {/* 3rd Image - From Right */}
          <motion.div
            initial={{ x: 150, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex justify-center items-center"
          >
            <Image src={deep3} alt="deep3" width={500} height={400} />
          </motion.div>

        </div>
      </div>
    </section>
  );
}