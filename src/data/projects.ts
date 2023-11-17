interface Project {
    title: string;
    description: string;
    link: string;
    stack: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Owalds's Quest🎮",
      description: "Oswald's Quest is an exciting RPG game currently under development using Java. Experience the immersive world and captivating storyline as you embark on a thrilling adventure.",
      link: "https://github.com/KayTwenty/OswaldQuest",
      stack: "Java, Swing",
    },
    {
      title: "Mac Repair Man🛠️",
      description: "A website for an Apple technician repair shop located in Ontario.",
      link: "https://www.macrepairman.ca/",
      stack: "NodeJS, EJS, CSS3, Bootstrap, Docker",
    },
    {
      title: "ExEditor⌨️",
      description: "A Python based IDE with zen features & working language server.",
      link: "https://exeditor.kaytwenty.com/",
      stack: "Python, TKinter",
    },
    {
      title: "SpotVerse🔊",
      description: "A Discord bot which can play high quality music into a Discord Voice call. It supports Youtube, Spotify & Soundcloud.",
      link: "https://spotverse.cc/",
      stack:
        "Discord.JS v14, TypeScript, Nextjs, TailwindCSS, MongoDB",
    },
  ];