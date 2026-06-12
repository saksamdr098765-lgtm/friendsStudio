"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { FaInstagram, FaBars } from "react-icons/fa";

export default function Navbar() {
  const links = [
    "Portfolio",
    "Services",
    "Stories",
    "About",
    "Contact",
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="absolute top-0 left-0 z-50 w-full"
    >
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 lg:px-12">
        {/* Brand */}
        <Link href="/" className="group">
          <div className="flex flex-col">
            <span className="text-xl font-light tracking-[0.4em] text-white">
              SMILE
            </span>

            <span className="text-xs tracking-[0.55em] text-white/60">
              PHOTOGRAPHY
            </span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <Link
              key={link}
              href="#"
              className="group relative overflow-hidden text-xs uppercase tracking-[0.25em] text-white/70 transition"
            >
              <span className="block transition-transform duration-300 group-hover:-translate-y-full">
                {link}
              </span>

              <span className="absolute left-0 top-full block transition-transform duration-300 group-hover:-translate-y-full text-white">
                {link}
              </span>
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div className="flex items-center gap-6">
          {/* Instagram */}
          <a
            href="#"
            className="hidden lg:flex items-center gap-2 text-white/70 hover:text-white transition"
          >
            <FaInstagram size={15} />
            <span className="text-xs uppercase tracking-[0.25em]">
              Instagram
            </span>
          </a>

          {/* Mobile Menu */}
          <button className="flex items-center justify-center lg:hidden text-white">
            <FaBars size={20} />
          </button>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="h-px bg-white/10" />
      </div>
    </motion.header>
  );
}