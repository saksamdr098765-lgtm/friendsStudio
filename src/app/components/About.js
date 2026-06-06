"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section className="bg-[#0a0a0a] text-white py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Small Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-xs uppercase tracking-[0.4em] text-white/40"
        >
          About Friends Studio
        </motion.p>

        {/* Main Layout */}
        <div className="grid gap-20 lg:grid-cols-[1.2fr_0.8fr] items-center">
          {/* Left */}
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-7xl leading-[1.05] font-light"
            >
              We don't just
              <span className="block font-semibold">
                capture photographs.
              </span>

              <span className="block mt-8 text-white/70">
                We preserve emotions,
              </span>

              <span className="block text-white/70">
                celebrations,
              </span>

              <span className="block text-white/70">
                and stories worth remembering.
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 max-w-xl text-lg leading-relaxed text-white/50"
            >
              Friends Studio was built with one purpose — to transform
              fleeting moments into timeless visual stories. From intimate
              weddings to grand celebrations, we approach every event with
              creativity, emotion, and attention to every detail.
            </motion.p>
          </div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 3 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/21560369/pexels-photo-21560369.jpeg"
              alt="Friends Studio"
              className="h-[600px] w-full object-cover"
            />

            {/* Floating Box */}
            <div className="absolute -bottom-8 -left-8 bg-white text-black p-8">
              <p className="text-xs uppercase tracking-[0.3em]">
                Since
              </p>

              <h3 className="mt-2 text-4xl font-bold">
                2018
              </h3>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-24 h-px bg-white/10" />

        {/* Numbers */}
        <div className="grid gap-12 md:grid-cols-3">
          {[
            {
              number: "500+",
              title: "Weddings Captured",
            },
            {
              number: "8+",
              title: "Years Of Experience",
            },
            {
              number: "1000+",
              title: "Moments Preserved",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h3 className="text-6xl font-light">
                {item.number}
              </h3>

              <p className="mt-4 uppercase tracking-[0.25em] text-sm text-white/40">
                {item.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Signature Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-32 border-l border-white/20 pl-8"
        >
          <p className="max-w-3xl text-3xl md:text-5xl font-light leading-relaxed">
            “Every photograph should make you feel something,
            even years after the moment has passed.”
          </p>

          <p className="mt-6 text-white/40 uppercase tracking-[0.3em] text-sm">
            Friends Studio
          </p>
        </motion.div>
      </div>
    </section>
  );
}