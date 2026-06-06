"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Friends Studio captured every emotion beautifully. Looking through our wedding album feels like reliving the entire celebration again.",
    name: "Simran & Arsh",
    location: "Amritsar",
  },
  {
    quote:
      "The team made us feel comfortable from the first meeting. Every photograph feels genuine, timeless, and deeply personal.",
    name: "Gurpreet & Aman",
    location: "Chandigarh",
  },
  {
    quote:
      "Beyond photography, they gave us memories that we'll cherish forever. The cinematic film exceeded every expectation.",
    name: "Harleen & Karan",
    location: "Jalandhar",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#0a0a0a] py-32 text-white overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        {/* Section Heading */}
        <div className="mb-24">
          <p className="mb-4 text-xs uppercase tracking-[0.4em] text-white/40">
            Client Stories
          </p>

          <h2 className="text-5xl md:text-7xl font-light leading-tight">
            Words From
            <span className="block font-semibold">
              The People We Photograph
            </span>
          </h2>
        </div>

        {/* Testimonials */}
        <div className="space-y-32">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid gap-10 lg:grid-cols-[120px_1fr]"
            >
              {/* Number */}
              <div>
                <span className="text-4xl text-white/15">
                  0{index + 1}
                </span>
              </div>

              {/* Content */}
              <div>
                <blockquote className="max-w-5xl text-3xl md:text-5xl font-light leading-[1.4]">
                  “{testimonial.quote}”
                </blockquote>

                <div className="mt-10">
                  <p className="text-sm uppercase tracking-[0.35em] text-white">
                    {testimonial.name}
                  </p>

                  <p className="mt-2 text-sm uppercase tracking-[0.25em] text-white/40">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <div className="my-32 h-px bg-white/10" />

        {/* Studio Statement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-l border-white/20 pl-8"
        >
          <p className="max-w-4xl text-3xl md:text-5xl font-light leading-relaxed">
            Every story entrusted to us becomes part of our legacy.
            Our greatest achievement isn't the photographs we create—
            it's the emotions they preserve.
          </p>

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-white/40">
            Friends Studio
          </p>
        </motion.div>
      </div>
    </section>
  );
}