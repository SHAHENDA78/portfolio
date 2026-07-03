"use client";

import { motion } from "framer-motion";
import {
  FileCode,
  Palette,
  Braces,
  FileType,
  Atom,
  Layers,
  Smartphone,
  Gem,
  Wind,
  LayoutGrid,
  GitBranch,
  Github,
  Figma,
  Network,
  MonitorSmartphone,
  Blocks,
  type LucideIcon,
} from "lucide-react";
import { skills } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  FileCode,
  Palette,
  Braces,
  FileType,
  Atom,
  Layers,
  Smartphone,
  Gem,
  Wind,
  LayoutGrid,
  GitBranch,
  Github,
  Figma,
  Network,
  MonitorSmartphone,
  Blocks,
};

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-28 bg-curtain/40">
      <div className="max-w-6xl mx-auto">
        <span className="eyebrow"> Scene 02 — Production Stack</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-14">
          Production Stack
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {skills.map((s, i) => {
            const Icon = iconMap[s.icon] ?? Braces;
            return (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.04 }}
                whileHover={{ y: -3 }}
                className="rounded-2xl border border-white/10 bg-curtain2 p-5 flex flex-col items-start gap-3 hover:border-marquee/40 transition-colors"
              >
                <span className="h-10 w-10 rounded-xl bg-marquee/10 text-marquee flex items-center justify-center">
                  <Icon size={20} />
                </span>
                <div>
                  <p className="font-medium text-chalk text-sm leading-tight">{s.name}</p>
                  <p className="eyebrow mt-1 text-[10px]">{s.group}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
