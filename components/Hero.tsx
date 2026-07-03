"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { profile } from "@/lib/data";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[100svh] flex flex-col justify-center px-6 md:px-16 pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient marquee glow */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[420px] w-[420px] rounded-full bg-marquee/10 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-[320px] w-[320px] rounded-full bg-reel/20 blur-[120px]" />

      {/* Film grain */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] bg-grain [background-size:3px_3px]" />

      {/* Sprocket strips, left & right edges */}
      <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-6 flex flex-col justify-evenly opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-2.5 w-2.5 mx-auto rounded-[2px] bg-white/10" />
        ))}
      </div>
      <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-6 flex flex-col justify-evenly opacity-40">
        {Array.from({ length: 16 }).map((_, i) => (
          <span key={i} className="h-2.5 w-2.5 mx-auto rounded-[2px] bg-white/10" />
        ))}
      </div>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="eyebrow mb-6 animate-flicker"
      >
        Now Showing · Front-End &amp; Mobile Developer
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-display font-bold leading-[0.95] text-5xl sm:text-7xl md:text-8xl max-w-4xl"
      >
        {profile.name}
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-6 max-w-xl text-chalkdim text-lg"
      >
        {profile.tagline}
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mt-10 flex flex-wrap items-center gap-4"
      >
        <a
          href={profile.cvFile}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-marquee text-screen px-6 py-3 font-medium hover:brightness-110 transition"
        >
          View Resume
        </a>
        <a
          href="#projects"
          className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium text-chalk hover:border-marquee hover:text-marquee transition"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="inline-flex items-center gap-2 px-2 py-3 font-medium text-chalkdim hover:text-chalk transition"
        >
          <Mail size={18} /> Let&apos;s Talk
        </a>
      </motion.div>

      <motion.a
        href={profile.cvFile}
        download
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-4 inline-flex items-center gap-1.5 text-xs text-chalkdim hover:text-marquee transition w-fit"
      >
        <Download size={13} /> Download PDF
      </motion.a>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="absolute bottom-8 left-6 md:left-16 flex items-center gap-2 text-xs text-chalkdim hover:text-marquee transition"
      >
        <ArrowDown size={14} className="animate-bounce" /> scroll
      </motion.a>
    </section>
  );
}
