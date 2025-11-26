interface Project {
  title: string;
  description: string;
  link: string;
  stack: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Adrian Michalski Portfolio",
    description: "A portfolio website for a professional photographer that showcases his work dynamically using a custom made content management system (CMS).",
    link: "https://www.miskimedia.ca/",
    stack: "Next.js, TailwindCSS, TypeScript, Prisma, SQLite",
    image:
      "https://www.miskimedia.ca/logo.png",
  },
  {
    title: "GG Central Website",
    description: "A website for a local gaming cafe located in Kitchener Ontario. Features booking, full event backend system, tounament management, and more.",
    link: "https://www.ggcentral.ca/",
    stack: "Next.js, TypeScript, TailwindCSS, Prisma, PostgreSQL, C++",
  },
  {
    title: "Mac Repair Man Website",
    description:
      "A website for an Apple technician repair shop located in Kitchener Ontario.",
    link: "https://www.macrepairman.ca/",
    stack: "Astro.js, React, CSS, JavaScript",
    image: "https://avatars.githubusercontent.com/u/127373412?s=200&v=4",
  },
  {
    title: "WhoAmEye – Modern Profile Card & Bio Link Platform",
    description:
      "A modern profile card and bio link platform that allows users to create a personalized profile card with links to their social media, websites, and other online content.",
    link: "https://github.com/KayTwenty/WhoAmEye",
    stack: "Next.js, TypeScript, TailwindCSS, Supabase, WebAssembly",
    image: "https://raw.githubusercontent.com/KayTwenty/WhoAmEye/0dbbc489eb56957f929e321e43130cb700c16ec2/public/logo.svg",
  },
  {
    title: "Oswald's Quest - Game",
    description: "An Open World 2D RPG game made with Java Swing libaries.",
    link: "https://github.com/KayTwenty/OswaldQuest",
    stack: "Java, Swing, Tiled, Aseprite",
    image:
      "https://raw.githubusercontent.com/KayTwenty/OswaldQuest/main/.github/GitIcon.png",
  },
  {
    title: "Midnight Cavern - Game",
    description:
      "A 2D Top Down adventure game constructed with Unity2D and C#.",
    link: "https://midnightcavern.kaytwenty.com/",
    stack: "Unity2D, C#, Tiled",
    image:
      "https://raw.githubusercontent.com/MidnightCavern/.github/main/assets/cavernlogo.png",
  },
];
