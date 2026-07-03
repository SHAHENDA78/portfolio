"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="px-6 md:px-16 py-28 bg-curtain/40">
      <div className="max-w-4xl mx-auto">
        <span className="eyebrow"> Scene 04 — Behind the Scenes</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-14">
          Experience
        </h2>

        <div className="relative border-l border-white/10 pl-8 space-y-14">
          {experience.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[38px] top-1 h-3 w-3 rounded-full bg-marquee shadow-[0_0_0_4px_rgba(242,180,65,0.15)]" />
              <p className="eyebrow mb-2">{item.period}</p>
              <h3 className="font-display font-bold text-xl text-chalk">{item.title}</h3>
              <p className="text-marquee text-sm mb-4">{item.place}</p>
              <ul className="space-y-2">
                {item.points.map((pt) => (
                  <li key={pt} className="text-chalkdim text-sm leading-relaxed flex gap-2">
                    <span className="text-marquee">—</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
