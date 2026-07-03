import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-chalkdim">
        <p>© {new Date().getFullYear()} {profile.name}. Built with Next.js &amp; Tailwind CSS.</p>
        <p className="font-mono">{profile.location}</p>
      </div>
    </footer>
  );
}
