"use client";
import React from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
  const fadeInAnimationVariant = {
    initial: {
        opacity: 0,
        y:50,
        
    },
    animate: {
        opacity: 1,
        y:0,
    }}
    
  return (
    
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[95%] md:w-[60%] space-y-5 mt-52"
      >
        <h1 className="text-4xl md:text-7xl font-medium text-gray-900 volkhov">
          Solving the worlds toughest problem is in our<span className="text-indigo-600 italic"> dna.</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Different countries, different journeys—Interners all share one common goal:  
          becoming the best versions of ourselves and helping others do the same.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 text-white bg-blue-600 rounded-lg shadow-lg hover:bg-blue-700 transition"
        >
          See jobs & apply
        </motion.button>
      </motion.div>

      {/* Experience Section */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[95%] md:w-[60%] space-y-5 mt-40"
      >
        <p className="text-5xl md:text-6xl bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent py-4">
          Experience isn’t everything
        </p>
        <p className="text-md md:text-md fs w-[90%] text-center mx-auto">
          Traditional hiring practices often demand experience before offering opportunities—but how can anyone gain experience without a starting point?
        </p>
      </motion.div>

{/* This is the bento Box Section */}
<motion.div
  variants={fadeInAnimationVariant} 
  initial="initial"
  whileInView="animate"
  viewport={{
      once: true,
  }}
  transition={{ duration: 1}}
  className="w-full md:w-[80%] mt-20 grid grid-cols-1 md:grid-cols-2 gap-4 bg-cover bg-center p-6 md:p-10 rounded-lg"
  style={{ backgroundImage: "url('/your-background-image.jpg')" }}
>
  {/* Top Row - Two Grid */}
  <motion.div
    className="bg-white/80 p-6 md:p-8 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.2 }}
    whileInView="animate"
  viewport={{
      once: true,
  }}
  >
    <h3 className="text-2xl font-semibold text-gray-800 text-start">Impact</h3>
    <p className="text-gray-600 mt-4 md:mt-6 text-start">
      Daring to think big is what drives us—failure is a lesson, but settling for less is never a choice.
    </p>
  </motion.div>

  {/* Video Block with Text Overlay */}
  <motion.div
    className="relative rounded-lg shadow-lg overflow-hidden bg-gradient-to-tl from-indigo-800 via-violet-700 to-slate-900 p-4 min-h-[250px] md:min-h-[300px] flex flex-col justify-end"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    whileInView="animate"
  viewport={{
      once: true,
  }}
    transition={{ delay: 0.4 }}
  >
    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/40">
      <p className="text-white text-lg font-semibold text-start">Collaboration</p>
      <p className="text-white text-sm md:text-lg mt-2 text-start">
        Egos are left at the door, selfless collaboration is championed.
      </p>
    </div>
    <video className="w-full h-auto object-cover rounded-lg" autoPlay loop muted playsInline>
      <source src="/careers-talent.webm" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>

  {/* Middle Row - Full Width */}
  <motion.div
    className="bg-indigo-600 text-white p-6 md:p-8 rounded-lg col-span-1 md:col-span-2 shadow-lg text-center"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.6 }}
    whileInView="animate"
  viewport={{
      once: true,
  }}
  >
    <h2 className="text-2xl md:text-3xl font-semibold">The right environment to get it done, and beyond.</h2>
    <p className="mt-2 text-md md:text-lg">
      We create an ecosystem where ambition thrives, ideas turn into reality, and careers take flight.
    </p>
  </motion.div>

  {/* Bottom Row - Two Grid */}
  <motion.div
    className="relative rounded-lg shadow-lg overflow-hidden bg-black p-4 min-h-[250px] md:min-h-[300px] flex flex-col justify-end"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    whileInView="animate"
    viewport={{
      once: true,
  }}
    transition={{ delay: 0.8 }}
  >
    <div className="absolute inset-0 flex flex-col justify-end p-4 bg-black/40">
      <p className="text-white text-lg font-semibold text-start">Freedom & Flexibility</p>
      <p className="text-white text-sm md:text-lg mt-2 text-start">
        None of the bad bits, like micromanaging, rigid hours, or pressure to conform. Just the good stuff: autonomy, trust, and the freedom to do your best work.
      </p>
    </div>
    <video className="w-full h-auto object-cover rounded-lg" autoPlay loop muted playsInline>
      <source src="/careers-freedom.webm" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </motion.div>

  <motion.div
    className="bg-white/80 p-6 md:p-8 rounded-lg shadow-lg"
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    whileInView="animate"
  viewport={{
      once: true,
  }}
    transition={{ delay: 1.0 }}
  >
    <h3 className="text-2xl font-semibold text-gray-800 text-start">Supportive Culture</h3>
    <p className="text-gray-600 mt-4 md:mt-6 text-start">
      We&apos;re invested in you—learn, grow, and thrive with a mentor who&apos;s dedicated to your success.
    </p>
  </motion.div>
</motion.div>



    </div>
  );
};

export default CareersPage;
