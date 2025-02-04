"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';
import Introducing from './SectionDivider/Introducing';
import Office from './SectionDivider/WhatInternMeDo';
import NoteFromFounder from './SectionDivider/NoteFromFounder';
import Blog from './SectionDivider/Blog';
import EmailInput from '../EmailInput';

const fadeInAnimationVariant = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const staggerAnimationVariant = {
  initial: {
    opacity: 0,
    y: 20,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2, // Staggered animation for children
    },
  },
};

const HeroSection = () => {
  return (
    <motion.div
      className="w-full mx-auto text-white grid bg-gradient-to-br from-[#f5f6fa] to-[#e0e7ff]"
      
    >
      {/* Background Earth component (optional) */}
      {/* <motion.div className="fixed top-0 left-0 w-full h-full pointer-events-none">
        <Earth />
      </motion.div> */}

      <div className="w-full md:h-[35em] grid grid-cols-1 md:grid-cols-1 mt-10">
        <div className="w-full h-full grid mt-20 items-center">
          <div className="h-[90%] mt-20 md:mt-0 space-y-10 mx-auto rounded-2xl grid items-center">
            <div className="w-[90%] md:w-[70%] mx-auto space-y-10 text-center text-[#25303b]">
              <motion.h1
                variants={fadeInAnimationVariant}
                initial="initial"
                animate="animate"
                viewport={{ once: true }}
                className="text-4xl font-medium md:text-5xl text-center w-[100%] md volkhov text-indigo-800"
              >
                Make job hunting work your way.
              </motion.h1>

              <motion.p
                variants={fadeInAnimationVariant}
                initial="initial"
                animate="animate"
                className="md:text-lg mx-auto w-[90%] md:w-[80%]"
              >
                Try InternMe for a dedicated career service that makes your life{' '}
                <span className='volkhov font-semibold italic text-indigo-800'>
                  more convenient
                </span>, so you can focus on the things you love and less of the grueling work.
              </motion.p>

              <motion.div
                variants={staggerAnimationVariant}
                initial="initial"
                animate="animate"
                className="mt-20 grid space-y-[3em] md:space-y-0 md:flex justify-center md:space-x-5 mx-auto items-center"
              >
                <motion.div variants={fadeInAnimationVariant} initial="initial" animate="animate">
                  <EmailInput />
                </motion.div>
                <motion.div variants={fadeInAnimationVariant} initial="initial" animate="animate">
                  <Link
                    href="/"
                    className="py-3 w-full px-6 bg-white backdrop-blur-xl rounded-full font-medium hover:text-purple-700 transition-all text-center"
                  >
                    Are you a student?
                  </Link>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      <motion.div
        className="text-md w-full mx-auto space-y-5"
        variants={staggerAnimationVariant}
        initial="initial"
        animate="animate"
      >
        <motion.div variants={fadeInAnimationVariant} initial="initial" animate="animate">
          <Office />
        </motion.div>
        <motion.div variants={fadeInAnimationVariant} initial="initial" animate="animate">
          <Introducing />
        </motion.div>
        {/* <motion.div variants={fadeInAnimationVariant} initial="initial" animate="animate">
          <TeamsSection />
        </motion.div> */}
        <motion.div variants={fadeInAnimationVariant} initial="initial" animate="animate">
          <NoteFromFounder />
        </motion.div>
        <motion.div variants={fadeInAnimationVariant} initial="initial" animate="animate">
          <Blog />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default HeroSection;
