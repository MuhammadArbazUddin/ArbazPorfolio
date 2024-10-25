"use client";

import PageTransitionProvider from "@/components/pageTransitionProvider";
import Link from "next/link";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <PageTransitionProvider>
      <div className="flex flex-col mt-0 sm:mt-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 justify-center items-center ">
        <div className=" flex flex-col gap-8 justify-center items-center p-2 w-full max-w-4xl">
          {/* Animated Heading */}
          <motion.h1
            className="font-body text-5xl sm:text-6xl md:text-7xl font-extrabold text-center mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            Frontend Developer Specialized in React
          </motion.h1>

          {/* Animated Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-2xl font-caveat text-center w-11/12 sm:w-3/4 mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            Hello there! Over here! I'm Arbaz, a frontend developer with years
            of experience—just enough to know that debugging is the true test of
            patience. Thanks for checking out my work!
          </motion.p>

          {/* Animated Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
          >
            <Link
              href="/portfolio"
              className="p-2 md:p-4 rounded-lg ring-1 ring-black bg-black text-white transition duration-500 ease-in-out hover:bg-transparent hover:text-black uppercase w-full sm:w-auto text-center"
            >
              See My Work
            </Link>
            <Link
              target="_blank"
              href="https://drive.google.com/file/d/1atRWWtaRA77M2c24ZBds4l_SdyW9Ahd-/view?usp=drive_link"
              className="p-2 md:p-4 rounded-lg ring-1 ring-black transition duration-500 ease-in-out hover:bg-black hover:text-white uppercase w-full sm:w-auto text-center"
            >
              See My Resume
            </Link>
          </motion.div>
        </div>
      </div>
    </PageTransitionProvider>
  );
};

export default Homepage;
