interface Project {
    title: string;
    description: string;
    link: string;
    stack: string;
  }
  
  export const projects: Project[] = [
    {
      title: "Owalds's Quest - Game",
      description: "An Open World 2D RPG game made with Java Swing libaries.",
      link: "https://github.com/KayTwenty/OswaldQuest",
      stack: "Java, Swing",
    },
    {
      title: "Mac Repair Man - Website",
      description: "A website for an Apple technician repair shop located in Kitchener Ontario.",
      link: "https://www.macrepairman.ca/",
      stack: "NodeJS, EJS, CSS3, Bootstrap, Docker",
    },
    {
      title: "LiveVHS - Web App",
      description: "A livestreaming platform with zero censorship, powered by WebRTC and IPFS.",
      link: "https://github.com/KayTwenty/LiveVHS",
      stack: "NextJS, TypeScript, TailwindCSS, PrismaDB, WebRTC",
    },
    {
      title: "SpotVerse - Discord Bot",
      description: "A Discord bot which can play high quality music into a Discord Voice call. It supports Youtube, Spotify & Soundcloud.",
      link: "https://spotverse.cc/",
      stack:
        "Discord.JS v14, TypeScript, Nextjs, TailwindCSS, MongoDB",
    },
    {
      title: "Midnight Cavern - Game",
      description: "A 2D Top Down adventure game made with Unity2D and C#.",
      link: "https://midnightcavern.kaytwenty.com/",
      stack: "Unity2D, C#",
    },
    {
      "title": "RuneEngine - Game Engine",
      "description": "A 2D game engine made with Java and OpenGL.",
      "link": "https://github.com/KayTwenty/RuneEngine",
      "stack": "Java, Gradle, OpenGL, LWJGL"
    }
  ];