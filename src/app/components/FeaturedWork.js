"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const works = [
  {
    id: "01",
    title: "Grand Wedding",
    location: "Amritsar, Punjab",
    image:
      "/first.jpg",
  },
  {
    id: "02",
    title: "Pre Wedding Story",
    location: "Chandigarh",
    image:
      "/fourth.jpg",
  },
  {
    id: "03",
    title: "Luxury Reception",
    location: "Jalandhar",
    image:
      "fifth.jpg",
  },
];

export default function FeaturedWork() {
  return (
    <section className="bg-[#0a0a0a] text-white py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/50">
            Selected Work
          </p>

          <h2 className="max-w-3xl text-5xl font-light leading-tight md:text-7xl">
            Stories We've
            <span className="block font-semibold">
              Captured
            </span>
          </h2>
        </div>

        {/* Projects */}
        <div className="space-y-40">
          {works.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 !== 0 ? "lg:grid-flow-dense" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`overflow-hidden ${
                  index % 2 !== 0 ? "lg:col-start-2" : ""
                }`}
              >
                <div className="group overflow-hidden">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="h-[600px] w-full object-cover transition duration-700 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Content */}
              <div>
                <span className="text-7xl font-light text-white/15">
                  {work.id}
                </span>

                <h3 className="mt-6 text-4xl font-light md:text-5xl">
                  {work.title}
                </h3>

                <p className="mt-4 text-white/50 uppercase tracking-[0.25em] text-sm">
                  {work.location}
                </p>

                <p className="mt-8 max-w-md text-white/60 leading-relaxed">
                  A collection of timeless moments, genuine emotions,
                  and elegant storytelling captured through our lens.
                </p>

                <button className="group mt-10 flex items-center gap-3 border-b border-white pb-2 text-xs uppercase tracking-[0.3em]">
                  View Story

                  <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer CTA */}
        <div className="mt-40 border-t border-white/10 pt-12 flex items-center justify-between flex-wrap gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-white/40">
              Portfolio
            </p>

            <h3 className="mt-3 text-3xl font-light">
              Explore Our Complete Collection
            </h3>
          </div>

          <button className="group flex items-center gap-3 border border-white/20 px-8 py-4 hover:bg-white hover:text-black transition">
            View All Work

            <FaArrowRight className="group-hover:translate-x-1 transition" />
          </button>
        </div>
      </div>
    </section>
  );
}