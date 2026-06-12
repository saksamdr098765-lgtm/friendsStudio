"use client";

import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaArrowUp,
} from "react-icons/fa";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative overflow-hidden bg-[#0a0a0a] text-white">
      {/* Divider */}
      <div className="h-px bg-white/10" />

      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-12">
        {/* Main Layout */}
        <div className="grid gap-16 lg:grid-cols-2">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="mb-6 text-xs uppercase tracking-[0.4em] text-white/40"
            >
             Simile Photography
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl text-4xl md:text-6xl font-light leading-[1.15]"
            >
              Creating timeless stories,
              <span className="block font-semibold">
                one frame at a time.
              </span>
            </motion.h2>
          </div>

          {/* Right */}
          <div className="flex flex-col items-start lg:items-end">
            <div className="space-y-5 text-sm uppercase tracking-[0.25em]">
              <a
                href="#"
                className="block text-white/60 transition hover:text-white"
              >
                Instagram
              </a>

              <a
                href="#"
                className="block text-white/60 transition hover:text-white"
              >
                Facebook
              </a>

              <a
                href="#"
                className="block text-white/60 transition hover:text-white"
              >
                WhatsApp
              </a>
            </div>

            <div className="mt-12">
              <p className="text-sm uppercase tracking-[0.25em] text-white/40">
                Punjab, India
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-24 flex flex-col gap-8 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.25em] text-white/30">
            © 2026 Friends Studio. All Rights Reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="group flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-white/50 transition hover:text-white"
          >
            Back To Top

            <FaArrowUp className="transition-transform duration-300 group-hover:-translate-y-1" />
          </button>
        </div>
      </div>

      {/* Huge Background Text */}
      <div className="pointer-events-none absolute bottom-0 left-0 overflow-hidden">
        <h1 className="text-[8rem] md:text-[14rem] font-black leading-none text-white/[0.02]">
          SIMILE
        </h1>
      </div>
    </footer>
  );
}