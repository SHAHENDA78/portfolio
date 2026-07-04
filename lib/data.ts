export const profile = {
  name: "Shahenda Shaheen",
  role: "Front-End & Mobile Developer",
  location: "Egypt, Menofia",
  phone: "01068257263",
  email: "shahendashaheen1@gmail.com",
  linkedin: "https://www.linkedin.com/in/shahenda-shaheen-6a907423b/",
  github: "https://github.com/SHAHENDA78",
  cvFile: "/Shahenda_Shaheen_CV.pdf",
  tagline: "I build interfaces the way a good film is cut — every frame responsive, every transition intentional.",
  summary:
    "Front-End Developer and Cross-Platform Mobile Developer with 1.5+ years of hands-on experience building responsive web and mobile applications using React.js, Next.js, React Native, and Tailwind CSS. Completed an intensive ITI program delivering real-world projects with exposure to REST APIs. Passionate about building scalable, user-friendly digital products across web and mobile platforms.",
};

export const aboutPoints = [
  {
    q: "Who am I?",
    a: "A Physics graduate turned Front-End & Mobile Developer — someone who traded lab reports for component trees, and never looked back.",
  },
  {
    q: "Why Front-End?",
    a: "Because it's the one layer of software a person actually touches. I like the immediacy of it: change a line, see the screen react.",
  },
  {
    q: "What do I work with?",
    a: "React.js, Next.js and React Native day to day, styled with Tailwind CSS, wired to REST APIs, versioned with Git.",
  },
  {
    q: "What's the goal?",
    a: "To keep shipping production-quality web and mobile products, and to grow into a developer teams trust with the details.",
  },
];

export const skills = [
  { name: "HTML5", group: "Core", icon: "FileCode" },
  { name: "CSS3", group: "Core", icon: "Palette" },
  { name: "JavaScript (ES6+)", group: "Core", icon: "Braces" },
  { name: "TypeScript", group: "Core", icon: "FileType" },
  { name: "React.js", group: "Framework", icon: "Atom" },
  { name: "Next.js", group: "Framework", icon: "Layers" },
  { name: "React Native", group: "Mobile", icon: "Smartphone" },
  { name: "Dart", group: "Mobile", icon: "Gem" },
  { name: "Tailwind CSS", group: "Styling", icon: "Wind" },
  { name: "Bootstrap", group: "Styling", icon: "LayoutGrid" },
  { name: "Git", group: "Tools", icon: "GitBranch" },
  { name: "GitHub", group: "Tools", icon: "Github" },
  { name: "Figma", group: "Tools", icon: "Figma" },
  { name: "REST APIs", group: "Concepts", icon: "Network" },
  { name: "Responsive Design", group: "Concepts", icon: "MonitorSmartphone" },
  { name: "Component Architecture", group: "Concepts", icon: "Blocks" },
];

export type Project = {
  slug: string;
  title: string;
  reel: string; 
  description: string;
  stack: string[];
  github: string;
  live?: string;
  cover?: string;
};

export const projects: Project[] = [
  {
    slug: "cineverse-nextjs",
    title: "CineVerse",
    reel: "Reel 01 — Web",
    description:
      "A responsive movie discovery web app built on Next.js and the TMDB API, with search, favorites and dynamic routing behind a modern UI.",
    stack: ["Next.js", "React", "TMDB API", "Tailwind CSS"],
    github: "https://github.com/SHAHENDA78/CineVerse-NextJS",
    live: "https://cineverse-next.vercel.app",
    cover: "/projects/cineverse.jpg",
  },
  {
    slug: "cineverse-mobile",
    title: "CineVerse Mobile",
    reel: "Reel 02 — Mobile",
    description:
      "The cross-platform companion app, built with React Native — browse, search and save favorite movies on the go.",
    stack: ["React Native", "JavaScript"],
    github: "https://github.com/SHAHENDA78/CineVerse-Mobile",
    cover: "/projects/cineverse-mobile.jpg",
  },
  {
    slug: "luxeshop",
    title: "LuxeShop",
    reel: "Reel 03 — Web",
    description:
      "A modern, responsive e-commerce web app that fetches products dynamically from the Fake Store API, with categories, product details and a smooth shopping flow across devices.",
    stack: ["React.js", "TypeScript", "Vite", "Tailwind CSS", "React Router", "Axios"],
    github: "https://github.com/SHAHENDA78/LuxeShop-React",
    live: "https://luxeshop-react.vercel.app",
    cover: "/projects/luxeshop.jpg",
  },
  {
    slug: "pares-ecommerce",
    title: "Pares E-Commerce",
    reel: "Reel 04 — Web",
    description:
      "A fully responsive multi-page e-commerce storefront built from scratch with Flexbox, Grid and vanilla JavaScript.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    github: "https://github.com/SHAHENDA78/Pares-ECommerce",
    live: "https://pares-e-commerce.vercel.app",
    cover: "/projects/pares.jpg",
  },
];

export type TimelineItem = {
  period: string;
  title: string;
  place: string;
  points: string[];
};

export const experience: TimelineItem[] = [
  {
    period: "Jan 2026 – Jun 2026",
    title: "Front-End Developer Intern",
    place: "Information Technology Institute (ITI)",
    points: [
      "Built 3 production-level responsive web applications using React.js and Next.js",
      "Applied scalable component architecture and reusable UI systems across all projects",
      "Integrated REST APIs for dynamic data handling and real-time content rendering",
      "Worked in an agile team of 5+ trainees, consistently meeting 100% of project deadlines",
      "Optimized UI performance and responsiveness across all screen sizes and devices",
    ],
  },
  {
    period: "Jul 2024 – Dec 2025",
    title: "Front-End & Mobile Developer — Self Study",
    place: "Independent Learning",
    points: [
      "Completed 18+ months of structured self-study covering HTML5, CSS3, JavaScript (ES6+) and React.js",
      "Built 5+ projects applying responsive design, mobile-first principles and reusable UI components",
      "Studied React.js in depth: hooks, state management and component lifecycle patterns",
    ],
  },
];

export const education = {
  degree: "Bachelor of Education — Physics",
  place: "Faculty of Education, Menofia University",
  period: "2020 – 2024",
  detail: "Major: Physics (Science & Education Division) · Grade: Good · 76.33%",
};
