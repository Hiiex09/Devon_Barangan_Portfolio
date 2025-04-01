"use client";

import { motion } from "motion/react";
import { Outfit, Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400"],
});

const About = () => {
  return (
    <motion.div
      className="mt-10 p-5 flex justify-between items-center gap-20 mx-80"
      initial={{ opacity: 0, translateX: "-100%" }}
      whileInView={{ opacity: 1, translateX: 0 }}
      transition={{ duration: 1.5 }}
    >
      <div className="flex flex-row justify-center items-center gap-10">
        <div className="p-3">
          <Image
            src={"/Student.png"}
            alt="profile"
            width={250}
            height={250}
            className="rounded-md"
          />
        </div>
        <div className="mt-3">
          <h1 className={`text-3xl text-start ${roboto.className}`}>
            About Me
          </h1>
          <div className="mt-1">
            <h1 className={`text-2xl ${roboto.className}`}>
              Hi , I am Devon Barangan
            </h1>
            <p
              className={`text-lg ${outfit.className} max-w-xl text-justify leading-7 mt-1`}
            >
              I'm a passionate developer with expertise in JavaScript,
              TypeScript, and the MERN stack. I enjoy building intuitive web
              applications and exploring new technologies. In my free time, I
              love learning new frameworks and optimizing user experiences.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;
