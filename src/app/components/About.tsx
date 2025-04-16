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
    <section id="about">
      <motion.div
        className="mt-10 p-5 flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-20 max-w-screen-xl mx-auto"
        initial={{ opacity: 0, translateX: "-100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 max-w-5xl">
          <div className="p-3">
            <Image
              src={"/profile.png"}
              alt="profile"
              width={250}
              height={250}
              className="rounded-md hidden lg:block"
            />
          </div>
          <div className="mt-3 text-center lg:text-left">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-bold ${roboto.className}`}
            >
              About Me
            </h1>
            <div className="mt-2">
              <h1 className={`text-2xl sm:text-3xl ${roboto.className}`}>
                Hi, I am Devon Barangan
              </h1>
              <div
                className={`text-lg sm:text-xl ${outfit.className} max-w-xl text-justify leading-7 mt-3`}
              >
                <p>
                  I&apos;m a passionate developer with expertise in JavaScript,
                  TypeScript, and the MERN stack. I enjoy building intuitive web
                  applications and exploring new technologies. In my free time,
                  I love learning new frameworks and optimizing user
                  experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
