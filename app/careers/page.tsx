"use client"
import React from "react";
import { motion } from "framer-motion";

const CareersPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-white to-blue-100 p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[95%] md:w-[60%] space-y-5 mt-52"
      >
        <h1 className="text-4xl md:text-7xl font-medium text-gray-900">
          The challenge of your <span className="text-indigo-600">lifetime</span>
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

      
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-[95%] md:w-[60%] space-y-5 mt-40"
      >
        <p className="text-5xl md:text-6xl bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent py-4">
        Experience 
        isn’t everything
        </p>
        <p className="text-sm md:text-md fs">
        Traditional hiring practices often demand experience before offering opportunities—but how can anyone gain experience without a starting point? Here, we challenge that norm. We believe talent is unlocked through learning, not just credentials. That&apos;s why we provide an environment where passion, curiosity, and dedication lead to exceptional career growth, even for those just starting out. With the right support and mentorship, potential turns into expertise faster than ever.
        </p>
        </motion.div>
    </div>
  );
};

export default CareersPage;
