"use client";

import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download } from "lucide-react";
import { profile } from "@/lib/data";

export default function Contact() {
  return (
    <section id="contact" className="px-6 md:px-16 py-28 bg-curtain/40">
      <div className="max-w-3xl mx-auto text-center">
        <span className="eyebrow"> Final Scene — Credits Roll</span>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-display font-bold text-3xl md:text-5xl mt-3 mb-6"
        >
          Ready for the next scene?
        </motion.h2>
        <p className="text-chalkdim mb-10 max-w-xl mx-auto">
          Open to Front-End and Mobile roles. If you&apos;re hiring, or just want to talk React, my inbox is open.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-2 rounded-full bg-marquee text-screen px-6 py-3 font-medium hover:brightness-110 transition"
          >
            <Mail size={18} /> {profile.email}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium hover:border-marquee hover:text-marquee transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium hover:border-marquee hover:text-marquee transition"
          >
            <Github size={18} /> GitHub
          </a>
          <a
            href={profile.cvFile}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/15 px-6 py-3 font-medium hover:border-marquee hover:text-marquee transition"
          >
            <Download size={18} /> View Resume
          </a>
        </div>
        <a
          href={profile.cvFile}
          download
          className="mt-5 inline-flex items-center gap-1.5 text-xs text-chalkdim hover:text-marquee transition"
        >
          ⬇ Download PDF
        </a>
      </div>
    </section>
  );
}
