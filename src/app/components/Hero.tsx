"use client";

import { easeIn, easeInOut } from "motion";
import { motion } from "motion/react";
import { Outfit, Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const Hero = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 px-4 sm:px-10 md:px-20">
      <motion.div
        className="text-center lg:text-left p-10 sm:p-20 lg:p-40"
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ ease: easeIn }}
      >
        <h1 className={`text-4xl sm:text-5xl font-bold ${roboto.className}`}>
          Hello Everyone, I Am
        </h1>
        <div className="p-2">
          <p className={`text-5xl sm:text-6xl md:text-7xl ${outfit.className}`}>
            Devon Barangan
          </p>
        </div>
        <div className="bg-neutral text-white text-center rounded-md mt-1 p-3">
          <p className={`text-2xl sm:text-3xl md:text-4xl ${outfit.className}`}>
            Fullstack Frontend Developer
          </p>
        </div>
        <div className="mt-4">
          <Link href="#projects" className="btn btn-md btn-neutral">
            View My Works
          </Link>
        </div>
      </motion.div>

      <motion.div
        className="flex justify-center"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ ease: easeInOut }}
      >
        <Image
          src={"/profile.png"}
          alt="profile"
          width={500}
          height={500}
          className="rounded-full w-40 sm:w-60 md:w-80 lg:w-[500px]"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
