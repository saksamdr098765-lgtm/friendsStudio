"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-40 text-white">
      {/* Large Background Text */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden">
        <h2 className="text-[12rem] md:text-[18rem] font-bold text-white/[0.03] leading-none">
          SIMILE
        </h2>
      </div>

      <div className="relative mx-auto max-w-6xl px-6 text-center lg:px-12">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-xs uppercase tracking-[0.45em] text-white/40"
        >
          Begin Your Story
        </motion.p>

        {/* Main Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-5xl text-5xl font-light leading-[1.1] md:text-7xl"
        >
          Some moments deserve
          <span className="block font-semibold">
            more than memories.
          </span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mx-auto mt-10 max-w-2xl text-lg leading-relaxed text-white/50"
        >
          Whether it's a wedding, engagement, portrait session, or a
          once-in-a-lifetime celebration, we'll help transform your
          moments into timeless visual stories.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14"
        >
          <button className="group inline-flex items-center gap-4 border border-white/20 px-10 py-5 text-sm uppercase tracking-[0.3em] transition-all duration-500 hover:bg-white hover:text-black">
            Book A Consultation

            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
          </button>
        </motion.div>

        {/* Bottom Line */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-24 border-t border-white/10 pt-8"
        >
          <p className="text-sm uppercase tracking-[0.35em] text-white/30">
            Weddings • Pre Weddings • Portraits • Events • Cinematic Films
          </p>
        </motion.div>
      </div>
    </section>
  );
}