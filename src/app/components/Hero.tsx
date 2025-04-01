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
    <div className="flex flex-row ">
      <div className="flex flex-row items-start">
        <motion.div
          className="p-40 mt-10"
          initial={{ x: -100 }}
          animate={{ x: 0 }}
          transition={{ ease: easeIn }}
        >
          <h1 className={`text-5xl font-bold ${roboto.className}`}>
            Hello Everyone, I Am
          </h1>
          <div className="p-2  text-center">
            <p className={`text-7xl ${outfit.className}`}>Devon Barangan</p>
          </div>
          <div className="bg-neutral text-white text-center rounded-md mt-1 p-3">
            <p className={`text-4xl ${outfit.className}`}>
              Fullstack Frontend Developer
            </p>
          </div>
          <div className="mt-2">
            <Link href={"/project"} className="btn btn-md btn-neutral">
              View My Works
            </Link>
          </div>
        </motion.div>
        <motion.div
          className="p-20 mt-10"
          initial={{ opacity: 0, scale: 0 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ ease: easeInOut }}
        >
          <Image
            src={"/Student.png"}
            alt="profile"
            width={500}
            height={500}
            className="rounded-full"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
