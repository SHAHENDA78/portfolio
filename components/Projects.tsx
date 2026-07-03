"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink, Github, Clapperboard, Film } from "lucide-react";
import { projects, type Project } from "@/lib/data";

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [imgFailed, setImgFailed] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -4 }}
      className="group relative rounded-2xl border border-white/10 bg-curtain overflow-hidden hover:border-marquee/50 transition-colors"
    >
      {/* Screenshot / poster */}
      <div className="relative aspect-video w-full overflow-hidden bg-curtain2">
        {p.cover && !imgFailed ? (
          <Image
            src={p.cover}
            alt={`${p.title} screenshot`}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
            onError={() => setImgFailed(true)}
            className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="h-full w-full flex flex-col items-center justify-center gap-2 bg-[radial-gradient(circle_at_30%_20%,rgba(242,180,65,0.12),transparent_60%)]">
            <Film className="text-marquee/50" size={28} />
            <p className="font-display text-chalkdim/60 text-sm">{p.title}</p>
          </div>
        )}
        {/* Perforated top edge, film-strip signature */}
        <div className="absolute top-0 inset-x-0 flex gap-2 px-4 pt-2 z-10">
          {Array.from({ length: 12 }).map((_, h) => (
            <span key={h} className="h-1.5 w-1.5 rounded-[2px] bg-screen/70" />
          ))}
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center gap-2 text-xs text-marquee font-mono mb-3">
          <Clapperboard size={14} /> {p.reel}
        </div>
        <h3 className="font-display font-bold text-xl mb-2">{p.title}</h3>
        <p className="text-chalkdim text-sm leading-relaxed mb-4">{p.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {p.stack.map((s) => (
            <span
              key={s}
              className="text-[11px] px-2 py-1 rounded-full bg-white/5 border border-white/10 text-chalkdim font-mono"
            >
              {s}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-3 text-sm">
          <a
            href={p.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/15 text-chalk hover:border-marquee hover:text-marquee transition"
          >
            <Github size={15} /> Code
          </a>
          {p.live && (
            <a
              href={p.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-marquee/10 border border-marquee/30 text-marquee hover:bg-marquee hover:text-screen transition"
            >
              <ExternalLink size={15} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-28">
      <div className="max-w-6xl mx-auto">
        <span className="eyebrow"> Scene 03 — Feature Presentation</span>
        <h2 className="font-display font-bold text-3xl md:text-5xl mt-3 mb-14">Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <ProjectCard key={p.slug} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
