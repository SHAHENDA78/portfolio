"use client";

import { motion } from "framer-motion";
import { aboutPoints, profile } from "@/lib/data";

export default function About() {
  return (
    <section id="about" className="px-6 md:px-16 py-28">
      <div className="max-w-6xl mx-auto">
        <span className="eyebrow"> Scene 01 — About</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-6">About</h2>
        <p className="max-w-2xl text-chalkdim mb-14">{profile.summary}</p>

        <div className="grid md:grid-cols-2 gap-5">
          {aboutPoints.map((p, i) => (
            <motion.div
              key={p.q}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="rounded-2xl border border-white/10 bg-curtain p-6 hover:border-marquee/40 transition-colors"
            >
              <p className="font-display text-marquee font-bold mb-2">{p.q}</p>
              <p className="text-chalkdim leading-relaxed">{p.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
