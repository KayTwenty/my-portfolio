interface Project {
  title: string;
  description: string;
  link: string;
  stack: string;
  image?: string;
}

export const projects: Project[] = [
  {
    title: "Miski Media",
    description: "A portfolio website for a professional photographer that showcases his work dynamically using a custom made content management system (CMS).",
    link: "https://www.miskimedia.ca/",
    stack: "Next.js, TailwindCSS, TypeScript, Prisma, SQLite",
    image:
      "https://www.miskimedia.ca/logo.png",
  },
  {
    title: "GG Central",
    description: "A website for a local gaming cafe located in Kitchener Ontario. Features booking, full event backend system, tounament management, and more.",
    link: "https://www.ggcentral.ca/",
    stack: "Next.js, TypeScript, TailwindCSS, SQLite, R",
    image:
      "https://www.ggcentral.ca/logo.png",
  },
  {
    title: "Mac Repair Man",
    description:
      "A website for an Apple technician repair shop located in Kitchener Ontario.",
    link: "https://www.macrepairman.ca/",
    stack: "Astro.js, React, CSS, JQuery",
    image: "https://avatars.githubusercontent.com/u/127373412?s=200&v=4",
  },
  {
    title: "CCDeals",
    description:
      "A website that scans the Canada Computers store for deals and discounts on computer hardware.",
    link: "https://ccdeals.ca/",
    stack: "Next.js, TypeScript, Python, SQLite",
    image: "https://cdn-icons-png.flaticon.com/512/10760/10760660.png",
  },
  {
    title: "Oswald's Quest",
    description: "An Open World 2D RPG game made with Java Swing libraries.",
    link: "https://github.com/KayTwenty/OswaldQuest",
    stack: "Java, Swing, Tiled, Aseprite",
    image:
      "https://raw.githubusercontent.com/KayTwenty/OswaldQuest/main/.github/GitIcon.png",
  },
  {
    title: "Midnight Cavern",
    description:
      "A 2D Top Down adventure game constructed with Unity2D and C#.",
    link: "https://midnightcavern.kaytwenty.com/",
    stack: "Unity 2019, C#, Tiled",
    image:
      "https://raw.githubusercontent.com/MidnightCavern/.github/main/assets/cavernlogo.png",
  },
];
