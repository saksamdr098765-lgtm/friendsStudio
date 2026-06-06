"use client";

import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";

const collections = [
  {
    id: "01",
    name: "The Essential",
    price: "₹10,000",
    description:
      "Designed for intimate celebrations with elegant photography coverage.",
    features: [
      "1 Photographer",
      "Full Event Coverage",
      "Edited Gallery",
      "Online Delivery",
    ],
  },
  {
    id: "02",
    name: "The Premium",
    price: "₹15,000",
    description:
      "A complete storytelling experience with photography and cinematic moments.",
    features: [
      "2 Photographers",
      "Cinematic Highlights",
      "Premium Editing",
      "Luxury Album",
    ],
  },
  {
    id: "03",
    name: "The Legacy",
    price: "₹25,000",
    description:
      "Our most comprehensive wedding collection for unforgettable celebrations.",
    features: [
      "Full Creative Team",
      "Drone Coverage",
      "Wedding Film",
      "Luxury Albums",
    ],
  },
];

export default function SignatureCollections() {
  return (
    <section className="bg-[#0a0a0a] py-32 text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Heading */}
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40">
            Signature Collections
          </p>

          <h2 className="text-5xl font-light md:text-7xl leading-tight">
            Crafted For Every
            <span className="block font-semibold">
              Celebration
            </span>
          </h2>
        </div>

        {/* Collections */}
        <div>
          {collections.map((collection) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group border-t border-white/10 py-14"
            >
              <div className="grid gap-10 lg:grid-cols-[120px_1fr_220px]">
                {/* Number */}
                <div>
                  <span className="text-white/20 text-4xl">
                    {collection.id}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-4xl md:text-5xl font-light">
                    {collection.name}
                  </h3>

                  <p className="mt-5 max-w-xl text-white/50">
                    {collection.description}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-4">
                    {collection.features.map((feature) => (
                      <span
                        key={feature}
                        className="border border-white/10 px-4 py-2 text-xs uppercase tracking-[0.2em] text-white/60"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="flex flex-col items-start lg:items-end">
                  <h4 className="text-4xl font-light">
                    {collection.price}
                  </h4>

                  <button className="group mt-8 flex items-center gap-3 border-b border-white pb-2 text-xs uppercase tracking-[0.3em]">
                    View Details

                    <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          <div className="border-t border-white/10" />
        </div>

        {/* Statement */}
        <div className="mt-32 border-l border-white/20 pl-8">
          <p className="max-w-4xl text-3xl md:text-5xl font-light leading-relaxed">
            Every collection is thoughtfully designed to ensure
            your story is documented with elegance, authenticity,
            and timeless artistry.
          </p>

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/40">
            Friends Studio
          </p>
        </div>
      </div>
    </section>
  );
}