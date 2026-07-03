"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";

export default function Education() {
  return (
    <section id="education" className="px-6 md:px-16 py-24">
      <div className="max-w-4xl mx-auto">
        <span className="eyebrow"> Scene 05 — Education</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-10">
          Education
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-white/10 bg-curtain p-6 flex gap-4 items-start"
        >
          <span className="shrink-0 h-11 w-11 rounded-xl bg-marquee/10 text-marquee flex items-center justify-center">
            <GraduationCap size={22} />
          </span>
          <div>
            <h3 className="font-display font-bold text-lg">{education.degree}</h3>
            <p className="text-marquee text-sm mb-1">{education.place}</p>
            <p className="text-chalkdim text-sm">{education.period} · {education.detail}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
