import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Preloader from "@/components/Preloader";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["500", "700"],
  variable: "--font-display",
});

const body = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

const SITE_URL = "https://shahenda-shaheen.vercel.app"; // TODO: replace with your real deployed domain

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Shahenda Shaheen — Front-End & Mobile Developer",
    template: "%s · Shahenda Shaheen",
  },
  description:
    "Portfolio of Shahenda Shaheen, Front-End & Mobile Developer building with React, Next.js, React Native and Tailwind CSS.",
  keywords: [
    "Shahenda Shaheen",
    "Front-End Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Mobile Developer Egypt",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Shahenda Shaheen" }],
  creator: "Shahenda Shaheen",
  openGraph: {
    type: "website",
    url: SITE_URL,
    title: "Shahenda Shaheen — Front-End & Mobile Developer",
    description:
      "Front-End & Mobile Developer building with React, Next.js, React Native and Tailwind CSS.",
    siteName: "Shahenda Shaheen — Portfolio",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shahenda Shaheen — Front-End & Mobile Developer",
    description:
      "Front-End & Mobile Developer building with React, Next.js, React Native and Tailwind CSS.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#0A0C10",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body className="bg-screen text-chalk font-body antialiased selection:bg-marquee selection:text-screen">
        <Preloader />
        {children}
      </body>
    </html>
  );
}
