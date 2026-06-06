"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    number: "01",
    title: "Wedding Stories",
    description:
      "Complete wedding coverage crafted to preserve every emotion, detail and celebration.",
    image:
      "https://images.unsplash.com/photo-1519741497674-611481863552?w=1200&q=80",
  },
  {
    number: "02",
    title: "Pre-Wedding Films",
    description:
      "Cinematic storytelling that captures your journey before the big day.",
    image:
      "https://images.unsplash.com/photo-1520854221256-17451cc331bf?w=1200&q=80",
  },
  {
    number: "03",
    title: "Luxury Events",
    description:
      "Elegant coverage for receptions, corporate events and private celebrations.",
    image:
      "https://images.unsplash.com/photo-1511578314322-379afb476865?w=1200&q=80",
  },
  {
    number: "04",
    title: "Portrait Sessions",
    description:
      "Personal branding, family portraits and timeless editorial photography.",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
  },
];

export default function Services() {
  const [activeImage, setActiveImage] = useState(services[0].image);

  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40">
            Services
          </p>

          <h2 className="text-5xl font-light md:text-7xl">
            Crafted For
            <span className="block font-semibold">
              Every Chapter
            </span>
          </h2>
        </div>

        <div className="grid gap-16 lg:grid-cols-[1fr_420px]">
          {/* Services List */}
          <div>
            {services.map((service) => (
              <motion.div
                key={service.number}
                onMouseEnter={() => setActiveImage(service.image)}
                className="group cursor-pointer border-t border-white/10 py-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="mb-4 text-sm tracking-[0.3em] text-white/30">
                      {service.number}
                    </p>

                    <h3 className="text-3xl font-light transition duration-300 group-hover:translate-x-3 md:text-5xl">
                      {service.title}
                    </h3>

                    <p className="mt-4 max-w-lg text-white/50">
                      {service.description}
                    </p>
                  </div>

                  <FaArrowRight className="mt-4 text-white/40 transition duration-300 group-hover:translate-x-2 group-hover:text-white" />
                </div>
              </motion.div>
            ))}

            <div className="border-t border-white/10" />
          </div>

          {/* Preview Image */}
          <div className="hidden lg:block">
            <motion.div
              key={activeImage}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="sticky top-32 overflow-hidden"
            >
              <img
                src={activeImage}
                alt=""
                className="h-[560px] w-full object-cover"
              />
            </motion.div>
          </div>
        </div>

        {/* Bottom Quote */}
        <div className="mt-32 border-l border-white/20 pl-8">
          <p className="max-w-3xl text-3xl font-light leading-relaxed md:text-5xl">
            Every service is designed around one idea —
            creating photographs that feel just as powerful
            years later as they do today.
          </p>
        </div>
      </div>
    </section>
  );
}