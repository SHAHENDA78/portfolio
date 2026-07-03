"use client";

import { useEffect, useState } from "react";
import { Clapperboard } from "lucide-react";

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const fadeTimer = setTimeout(() => setFading(true), 600);
    const removeTimer = setTimeout(() => setVisible(false), 950);
    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      aria-hidden="true"
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center gap-3 bg-screen transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
    >
      <Clapperboard className="text-marquee animate-pulse" size={26} />
      <p className="font-mono text-[11px] tracking-[0.25em] text-chalkdim uppercase">
        Rolling the film…
      </p>
    </div>
  );
}
