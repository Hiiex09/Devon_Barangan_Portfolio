"use client";

import { motion } from "motion/react";
import { Roboto } from "next/font/google";
import Image from "next/image";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400"],
});

const TechSkills = () => {
  return (
    <section id="skills">
      <motion.div
        className="max-w-full m-10 p-5"
        initial={{ opacity: 0, translateX: "100%" }}
        whileInView={{ opacity: 1, translateX: 0 }}
        transition={{ duration: 1.5 }}
      >
        <div className={`text-center ${roboto.className} text-4xl`}>
          <h1>Tech Skills</h1>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-5 mt-5">
          <div className="flex-1 ">
            <h1
              className={`${roboto.className} text-2xl font-semibold text-center`}
            >
              Frontend
            </h1>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-5 mt-5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image src={"/3.png"} alt="logo" height={50} width={50} />
              <Image src={"/4.png"} alt="logo" height={50} width={50} />
              <Image src={"/daisyUI.png"} alt="logo" height={50} width={50} />
              <Image src={"/next.png"} alt="logo" height={50} width={50} />
            </motion.div>
          </div>
          <div className="flex-1 ">
            <h1
              className={`${roboto.className} text-2xl font-semibold text-center`}
            >
              Backend
            </h1>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-5 mt-5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image src={"/python.png"} alt="logo" height={50} width={50} />
              <Image src={"/js.png"} alt="logo" height={50} width={50} />
              <Image src={"/ts.png"} alt="logo" height={50} width={50} />
              <Image src={"/node.png"} alt="logo" height={50} width={50} />
              <Image src={"/express.png"} alt="logo" height={50} width={50} />
            </motion.div>
          </div>

          <div className="flex-1 ">
            <h1
              className={`${roboto.className} text-2xl font-semibold text-center`}
            >
              Database
            </h1>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-5 mt-5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image src={"/mongodb.png"} alt="logo" height={50} width={50} />
              <Image src={"/mysql.png"} alt="logo" height={50} width={50} />
            </motion.div>
          </div>
          <div className="flex-1 ">
            <h1
              className={`${roboto.className} text-2xl font-semibold text-center`}
            >
              Version Control & Tools
            </h1>
            <motion.div
              className="flex flex-wrap justify-center items-center gap-5 mt-5"
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Image src={"/git.png"} alt="logo" height={50} width={50} />
              <Image src={"/postman.png"} alt="logo" height={50} width={50} />
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default TechSkills;
