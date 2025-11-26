/* empty css                                 */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderComponent, f as renderSlot, g as renderHead } from '../chunks/astro/server_B3mSX63G.mjs';
import 'kleur/colors';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
export { renderers } from '../renderers.mjs';

const $$Astro$7 = createAstro();
const $$ProfileImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProfileImage;
  const { size } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a href="https://github.com/KayTwenty" aria-label="David Anton's GitHub profile"> <div class="rounded-full cursor-pointer bg-gradient-to-tl from-blue-400/60 to-lightBlue-500/60 shadow-lg ring-[5px] ring-blue-500/10 group transform transition ease-out hover:scale-105 hover:from-blue-400 hover:to-lightBlue-500 hover:shadow-lightBlue-500/25 active:translate-y-px"> <div class="rounded-full p-1"> <img src="https://avatars.githubusercontent.com/kaytwenty" alt="Portrait of David Anton"${addAttribute(`rounded-full ${size === "large" ? "w-16" : "w-10"}`, "class")}> </div> </div> </a>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/profileImage.astro", void 0);

function SocialIconWrapper({ Icon, className }) {
  if (!Icon) return null;
  return /* @__PURE__ */ jsx(Icon, { className, style: { width: "18px", height: "18px" } });
}

const $$Astro$6 = createAstro();
const $$SocialIcon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$SocialIcon;
  const { title, Icon, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} class="group" target="_blank"${addAttribute(title, "aria-label")}> <div class="flex items-center space-x-2"> <div class="flex justify-center sm:mb-0 sm:block"> <div class="rounded-lg bg-gradient-to-tl from-blue-400 to-lightBlue-500/80 p-1 shadow-lg transition-all duration-300 ease-out group-hover:scale-[1.2] group-hover:rounded-[10px] group-hover:shadow-green-500/40 group-active:translate-y-1"> ${renderComponent($$result, "SocialIconWrapper", SocialIconWrapper, { "client:visible": true, "Icon": Icon, "className": "transform text-gray-100 transition delay-100 duration-500 ease-out group-hover:scale-110", "client:component-hydration": "visible", "client:component-path": "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/SocialIconWrapper", "client:component-export": "default" })} </div> </div> <div class="hidden sm:block">${title}</div> </div> </a>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/socialIcon.astro", void 0);

const $$Socials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="flex items-center space-x-7 text-base font-medium leading-none from-green-400 sm:text-lg text-gray-200"> ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "Icon": FaGithub, "title": "GitHub", "link": "https://github.com/KayTwenty" })} ${renderComponent($$result, "SocialIcon", $$SocialIcon, { "Icon": FaLinkedin, "title": "LinkedIn", "link": "https://www.linkedin.com/in/davidantonn/" })} </div>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Socials.astro", void 0);

const $$Astro$5 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { showNav, navRefId } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="pointer-events-none fixed top-6 z-30 w-full grid grid-cols-[1fr,min(640px,100%),1fr] px-4"> ${renderComponent($$result, "Transition", null, { "show": showNav, "refId": navRefId, "client:only": "react", "client:component-hydration": "only", "client:component-path": "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Transition", "client:component-export": "Transition" }, { "default": ($$result2) => renderTemplate` <nav class="pointer-events-auto col-start-2 w-full rounded-2xl bg-white/10 backdrop-blur-md border border-blue-400/20 shadow-surface-glass px-6 py-3 flex items-center justify-between"> <div class="flex items-center space-x-6"> ${renderComponent($$result2, "ProfileImage", $$ProfileImage, { "size": "small" })} </div> ${renderComponent($$result2, "Socials", $$Socials, {})} </nav> ` })} </div>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Navbar.astro", void 0);

const $$Astro$4 = createAstro();
const $$Link = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Link;
  const { title, href } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")} class="hover:underline hover:decoration-blue-300/30 hover:underline-offset-2 hover:text-blue-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70"> ${title} </a>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Link.astro", void 0);

const $$Astro$3 = createAstro();
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="mt-32 pb-20 text-base w-full flex justify-center"> <div class="max-w-3xl w-full flex flex-col items-center gap-4 border-t border-blue-400/30 pt-12"> <div class="flex items-center gap-2 text-gray-200/90 text-center"> <svg class="w-4 h-4 text-blue-400/80" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z"></path> </svg> <span class="text-sm">Built with</span> </div> <div class="flex items-center gap-3 text-gray-300/80 flex-wrap justify-center"> ${renderComponent($$result, "Link", $$Link, { "href": "https://astro.build/", "title": "AstroJS" })} <span class="text-blue-400/50">•</span> ${renderComponent($$result, "Link", $$Link, { "href": "https://reactjs.org/", "title": "ReactJS" })} <span class="text-blue-400/50">•</span> ${renderComponent($$result, "Link", $$Link, { "href": "https://tailwindcss.com", "title": "Tailwind" })} </div> <p class="text-xs text-gray-400/70 mt-3">© ${(/* @__PURE__ */ new Date()).getFullYear()} David Anton. All rights reserved.</p> </div> </footer>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$2 = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Layout;
  const { showNav, navRefId } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><meta name="description" content="Explore the innovative projects and skills of David Anton, a versatile full stack developer proficient in Python and NodeJS. View my work!"><meta name="keywords" content="Full Stack Developer, Python, NodeJS, Web Development, Indie Games, CLI Scripts, Innovative Projects"><title>David Anton - Full Stack Developer</title><!-- Favicon --><link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png"><link rel="icon" type="image/png" sizes="32x32" href="/favicon/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/favicon/favicon-16x16.png"><link rel="manifest" href="/favicon/site.webmanifest"><meta name="msapplication-TileColor" content="#da532c"><!-- Twitter Card --><meta name="twitter:title" content="David Anton - Full Stack Developer Portfolio"><meta name="twitter:description" content="Explore the innovative projects and skills of David Anton, a versatile full stack developer proficient in Python and NodeJS. View my work!"><meta name="twitter:image" content="/icon.jpg"><!-- Open Graph --><meta property="og:title" content="David Anton - Full Stack Developer Portfolio"><meta property="og:description" content="Explore the innovative projects and skills of David Anton, a versatile full stack developer proficient in Python and NodeJS. View my work!"><meta property="og:image" content="/icon.jpg"><meta property="og:url" content="https://kaytwenty.com"><meta property="og:url" content="https://davidanton.codes"><meta property="og:type" content="website"><!-- Schema.org --><script type="application/ld+json">\n        {\n          "@context": "http://schema.org",\n          "@type": "Person",\n          "name": "David Anton",\n          "jobTitle": "Full Stack Developer",\n          "email": "davidanton037@gmail.com"\n        }\n    <\/script><!-- Vercel Analytics --><script defer src="/_vercel/insights/script.js"><\/script>', '</head> <body data-astro-cid-sckkx6r4> <div id="home" class="bg-gray-900 antialiased selection:bg-blue-500/90 selection:text-white min-h-screen" data-astro-cid-sckkx6r4> <svg class="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light" width="100%" height="100%" data-astro-cid-sckkx6r4> <filter id="filterv2" data-astro-cid-sckkx6r4> <feTurbulence type="fractalNoise" baseFrequency="0.90" numOctaves="4" stitchTiles="stitch" data-astro-cid-sckkx6r4></feTurbulence> </filter> <rect width="100%" height="100%" filter="url(#filterv2)" data-astro-cid-sckkx6r4></rect> </svg> ', ' <main role="main" class="relative z-10 grid grid-cols-[1fr,min(640px,100%),1fr] px-4 pt-36 sm:pt-48 text-lg text-rose-100/90 xl:grid-cols-[1fr,minmax(auto,280px),min(640px,100%),minmax(auto,280px),1fr] xl:gap-x-8 xl:px-0 [&>*]:col-start-2 xl:[&>*]:col-start-3" data-astro-cid-sckkx6r4> ', " ", " </main> ", " </div> </body></html>"])), renderHead(), renderComponent($$result, "Navbar", $$Navbar, { "showNav": showNav, "navRefId": navRefId, "data-astro-cid-sckkx6r4": true }), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-sckkx6r4": true }), renderComponent($$result, "GradientBackground", null, { "client:only": "react", "client:component-hydration": "only", "data-astro-cid-sckkx6r4": true, "client:component-path": "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/GradientBackground", "client:component-export": "GradientBackground" }));
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/layouts/Layout.astro", void 0);

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div> <div class="flex items-center space-x-6"> ${renderComponent($$result, "ProfileImage", $$ProfileImage, { "size": "large" })} <div> <h1 class="text-3xl font-medium text-gray-100/80 sm:text-4xl">
David Anton ✌️
</h1> <h2 class="align-middle text-lg leading-6 text-gray-100/50">
Half-Stack Developer | Computer Retail Associate
</h2> </div> </div> <article class="mt-9 text-xl text-gray-100/90 leading-relaxed">
Hey! I'm <span id="age"></span> and I love building things with <span class="font-semibold text-blue-300/90">NodeJS</span> & <span class="font-semibold text-blue-300/90">TypeScript</span>. 
    Whether it's crafting web apps, experimenting with indie game dev, or diving into 3D and resin printing, if it's creative or involves interesting tech, I'm all in.
</article> <div class="mt-9"> ${renderComponent($$result, "Socials", $$Socials, {})} </div> </div> `;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/About.astro", void 0);

const $$Astro$1 = createAstro();
const $$Skill = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Skill;
  const { icon, title, link } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank"> <div class="cursor-pointer flex items-center overflow-hidden rounded-2xl bg-white/5 py-4 px-3 shadow-surface-elevation-low transition duration-300 hover:bg-white/10 hover:shadow-surface-elevation-medium"> <img${addAttribute(icon + "&color=000", "src")}${addAttribute(title, "alt")} class="w-7"> <p class="ml-2 text-xl text-gray-200/90">${title}</p> </div> </a>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Skill.astro", void 0);

const skills = [
  {
    title: "Python",
    icon: "https://s2.svgbox.net/files.svg?ic=python",
    link: "https://www.python.org/"
  },
  {
    title: "Java",
    icon: "https://s2.svgbox.net/files.svg?ic=java",
    link: "https://www.java.com/en/"
  },
  {
    title: "JavaScript",
    icon: "https://s2.svgbox.net/files.svg?ic=js",
    link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
  },
  {
    title: "C#",
    icon: "https://s2.svgbox.net/files.svg?ic=csharp",
    link: "https://learn.microsoft.com/en-us/dotnet/csharp/"
  },
  {
    title: "C++",
    icon: "https://s2.svgbox.net/files.svg?ic=cpp",
    link: "https://www.w3schools.com/cpp/"
  },
  {
    title: "Typescript",
    icon: "https://s2.svgbox.net/files.svg?ic=typescript-official",
    link: "https://www.typescriptlang.org/"
  },
  {
    title: "React",
    icon: "https://s2.svgbox.net/files.svg?ic=reactjs",
    link: "https://reactjs.org/"
  },
  {
    title: "Next JS",
    icon: "https://s2.svgbox.net/files.svg?ic=next",
    link: "https://nextjs.org/"
  },
  {
    title: "Node JS",
    icon: "https://s2.svgbox.net/files.svg?ic=node",
    link: "https://nodejs.org/en/"
  },
  {
    title: "Prisma",
    icon: "https://s2.svgbox.net/files.svg?ic=prisma",
    link: "https://www.prisma.io/"
  },
  {
    title: "Postgres",
    icon: "https://s2.svgbox.net/files.svg?ic=pgsql",
    link: "https://www.postgresql.org/"
  },
  {
    title: "SQLite",
    icon: "https://s2.svgbox.net/files.svg?ic=sqlite",
    link: "https://www.sqlite.org/index.html"
  },
  {
    title: "Mongo",
    icon: "https://s2.svgbox.net/files.svg?ic=mongo",
    link: "https://www.mongodb.com/"
  },
  {
    title: "Tailwind",
    icon: "https://s2.svgbox.net/files.svg?ic=tailwind",
    link: "https://tailwindcss.com/"
  },
  {
    title: "Git",
    icon: "https://s2.svgbox.net/files.svg?ic=git",
    link: "https://git-scm.com/"
  },
  {
    title: "Docker",
    icon: "https://s2.svgbox.net/files.svg?ic=docker2",
    link: "https://www.docker.com/"
  }
];

const $$Skills = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"> <h2 class="text-2xl sm:text-3xl font-medium text-gray-100/80">Skills</h2> <p class="mt-7 text-xl text-gray-100/50">
I have been involved in this endeavor for nearly <span id="experience"></span> years, 
    and it has been a journey filled with valuable lessons and personal growth.
</p> <div class="mt-9 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2"> ${skills.map((skill) => renderTemplate`${renderComponent($$result, "Skill", $$Skill, { "title": skill.title, "icon": skill.icon, "link": skill.link })}`)} </div> </div> `;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Skills.astro", void 0);

const projects = [
  {
    title: "Adrian Michalski Portfolio",
    description: "A portfolio website for a professional photographer that showcases his work dynamically using a custom made content management system (CMS).",
    link: "https://www.miskimedia.ca/",
    stack: "Next.js, TailwindCSS, TypeScript, Prisma, SQLite",
    image: "https://www.miskimedia.ca/logo.png"
  },
  {
    title: "GG Central Website",
    description: "A website for a local gaming cafe located in Kitchener Ontario. Features booking, full event backend system, tounament management, and more.",
    link: "https://www.ggcentral.ca/",
    stack: "Next.js, TypeScript, TailwindCSS, Prisma, PostgreSQL, C++"
  },
  {
    title: "Mac Repair Man Website",
    description: "A website for an Apple technician repair shop located in Kitchener Ontario.",
    link: "https://www.macrepairman.ca/",
    stack: "Astro.js, React, CSS, JavaScript",
    image: "https://avatars.githubusercontent.com/u/127373412?s=200&v=4"
  },
  {
    title: "WhoAmEye – Modern Profile Card & Bio Link Platform",
    description: "A modern profile card and bio link platform that allows users to create a personalized profile card with links to their social media, websites, and other online content.",
    link: "https://github.com/KayTwenty/WhoAmEye",
    stack: "Next.js, TypeScript, TailwindCSS, Supabase, WebAssembly",
    image: "https://raw.githubusercontent.com/KayTwenty/WhoAmEye/0dbbc489eb56957f929e321e43130cb700c16ec2/public/logo.svg"
  },
  {
    title: "Oswald's Quest - Game",
    description: "An Open World 2D RPG game made with Java Swing libaries.",
    link: "https://github.com/KayTwenty/OswaldQuest",
    stack: "Java, Swing, Tiled, Aseprite",
    image: "https://raw.githubusercontent.com/KayTwenty/OswaldQuest/main/.github/GitIcon.png"
  },
  {
    title: "Midnight Cavern - Game",
    description: "A 2D Top Down adventure game constructed with Unity2D and C#.",
    link: "https://midnightcavern.kaytwenty.com/",
    stack: "Unity2D, C#, Tiled",
    image: "https://raw.githubusercontent.com/MidnightCavern/.github/main/assets/cavernlogo.png"
  }
];

const $$Astro = createAstro();
const $$Card = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Card;
  const { title, link, substring, description, image } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(link, "href")} target="_blank" rel="noopener noreferrer" class="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-2xl" data-astro-cid-dohjnao5> <div class="relative w-full rounded-2xl bg-white/5 p-7 shadow-surface-elevation-low transition duration-300 hover:bg-gradient-to-tr hover:from-blue-500/20 hover:to-rose-500/10 hover:shadow-surface-elevation-medium fade-in-card" style="animation: fadeInUp 0.7s cubic-bezier(.39,.575,.565,1) both;" data-astro-cid-dohjnao5> <div class="flex w-full items-center" data-astro-cid-dohjnao5> ${image && renderTemplate`<div class="overflow-hidden rounded-xl mr-5 transition-transform duration-300 group-hover:scale-105 group-hover:shadow-lg" data-astro-cid-dohjnao5> <img${addAttribute(image, "src")}${addAttribute(`Screenshot or logo for project ${title}`, "alt")} class="w-14 h-14 object-cover" data-astro-cid-dohjnao5> </div>`} <div class="grow" data-astro-cid-dohjnao5> <h3 class="text-xl font-medium text-gray-200/80 group-hover:underline underline-offset-4" data-astro-cid-dohjnao5> ${title} </h3> <p class="text-lg text-gray-100/50" data-astro-cid-dohjnao5>${substring}</p> </div> </div> <p class="mt-5 text-xl text-gray-100/80" data-astro-cid-dohjnao5>${description}</p> </div> </a> `;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Card.astro", void 0);

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-16"> <h2 class="text-2xl sm:text-3xl font-medium text-gray-200/80">Projects</h2> <p class="mt-7 text-xl text-gray-200/80">
I"ve build many projects using different technologies. Here are some of my
    notable works.
</p> <div class="mt-9 mb-7 grid grid-cols-1 gap-5"> ${projects.map((project) => renderTemplate`${renderComponent($$result, "Card", $$Card, { "image": project.image, "title": project.title, "link": project.link, "substring": project.stack.trim().split(",").join(" \xB7 "), "description": project.description })}`)} </div> <a href="https://github.com/KayTwenty?tab=repositories" class="text-xl text-gray-200 font-medium hover:underline hover:decoration-blue-300/30 hover:underline-offset-2 hover:text-blue-200/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/70">
View more projects
</a> </div>`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/components/Projects.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "navRefId": "about" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="about"> ${renderComponent($$result2, "About", $$About, {})} </div> ${renderComponent($$result2, "Skills", $$Skills, {})} ${renderComponent($$result2, "Projects", $$Projects, {})} ` })}`;
}, "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/pages/index.astro", void 0);

const $$file = "C:/Users/David Anton/Documents/Code/Website Projects/Kay-Website/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
