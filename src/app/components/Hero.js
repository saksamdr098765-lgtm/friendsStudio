"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const photos = [
"/first.jpg",
"/second.jpg",
"/third.jpg"

];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#0a0a0a] text-white">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(to right, white 1px, transparent 1px),
              linear-gradient(to bottom, white 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-24 lg:px-12">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="mb-6"
            >
              <span className="border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.4em] text-gray-300">
            Smile Photography
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="leading-none"
            >
              <span className="block text-[4rem] font-light md:text-[6rem] lg:text-[8rem]">
                SMILE
              </span>

              <span className="block text-[4rem] font-bold ">
                PHOTOGRAPHY
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-10 max-w-lg"
            >
              <p className="text-lg leading-relaxed text-gray-400">
                Wedding photography, cinematic films, portraits and
                celebrations crafted with emotion, elegance and timeless
                storytelling.
              </p>

              <button className="group mt-10 flex items-center gap-3 border-b border-white pb-2 text-sm uppercase tracking-[0.25em]">
                Explore Portfolio
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="relative h-[650px] hidden lg:block">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -4 }}
              animate={{ opacity: 1, scale: 1, rotate: -4 }}
              transition={{ duration: 1 }}
              className="absolute left-0 top-16 w-[380px]"
            >
              <img
                src={photos[0]}
                alt=""
                className="h-[500px] w-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Image 2 */}
            <motion.div
              animate={{
                y: [0, -15, 0],
              }}
              transition={{
                duration: 6,
                repeat: Infinity,
              }}
              className="absolute right-0 top-0 w-[280px]"
            >
              <img
                src={photos[1]}
                alt=""
                className="h-[360px] w-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Image 3 */}
            <motion.div
              animate={{
                y: [0, 15, 0],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
              }}
              className="absolute bottom-0 right-10 w-[260px]"
            >
              <img
                src={photos[2]}
                alt=""
                className="h-[320px] w-full object-cover shadow-2xl"
              />
            </motion.div>

            {/* Floating Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.08 }}
              transition={{ delay: 1 }}
              className="absolute -bottom-8 left-0 text-[9rem] font-black tracking-tight"
            >
              2026
            </motion.div>
          </div>
        </div>

        {/* Bottom Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-20 flex flex-wrap gap-8 border-t border-white/10 pt-6 text-xs uppercase tracking-[0.3em] text-gray-500"
        >
          <span>Wedding Films</span>
          <span>Pre Wedding</span>
          <span>Portraits</span>
          <span>Events</span>
          <span>Luxury Albums</span>
        </motion.div>
      </div>
    </section>
  );
}