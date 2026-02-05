interface SkillType {
  title: string;
  icon: string;
  link: string;
}

interface SkillCategory {
  category: string;
  skills: SkillType[];
}

export const skillCategories: SkillCategory[] = [
  {
    category: "Languages",
    skills: [
      {
        title: "JavaScript",
        icon: "https://s2.svgbox.net/files.svg?ic=js",
        link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      },
      {
        title: "Typescript",
        icon: "https://s2.svgbox.net/files.svg?ic=typescript-official",
        link: "https://www.typescriptlang.org/",
      },
      {
        title: "Python",
        icon: "https://s2.svgbox.net/files.svg?ic=python",
        link: "https://www.python.org/",
      },
      {
        title: "Java",
        icon: "https://s2.svgbox.net/files.svg?ic=java",
        link: "https://www.java.com/en/",
      },
      {
        title: "C#",
        icon: "https://s2.svgbox.net/files.svg?ic=csharp",
        link: "https://learn.microsoft.com/en-us/dotnet/csharp/",
      },
      {
        title: "C++",
        icon: "https://s2.svgbox.net/files.svg?ic=cpp",
        link: "https://www.w3schools.com/cpp/",
      },
    ],
  },
  {
    category: "Frontend",
    skills: [
      {
        title: "React",
        icon: "https://s2.svgbox.net/files.svg?ic=reactjs",
        link: "https://reactjs.org/",
      },
      {
        title: "Next JS",
        icon: "https://s2.svgbox.net/files.svg?ic=next",
        link: "https://nextjs.org/",
      },
      {
        title: "Tailwind",
        icon: "https://s2.svgbox.net/files.svg?ic=tailwind",
        link: "https://tailwindcss.com/",
      },
    ],
  },
  {
    category: "Backend",
    skills: [
      {
        title: "Node JS",
        icon: "https://s2.svgbox.net/files.svg?ic=node",
        link: "https://nodejs.org/en/",
      },
      {
        title: "Prisma",
        icon: "https://s2.svgbox.net/files.svg?ic=prisma",
        link: "https://www.prisma.io/",
      },
    ],
  },
  {
    category: "Databases",
    skills: [
      {
        title: "Postgres",
        icon: "https://s2.svgbox.net/files.svg?ic=pgsql",
        link: "https://www.postgresql.org/",
      },
      {
        title: "SQLite",
        icon: "https://s2.svgbox.net/files.svg?ic=sqlite",
        link: "https://www.sqlite.org/index.html",
      },
      {
        title: "Mongo",
        icon: "https://s2.svgbox.net/files.svg?ic=mongo",
        link: "https://www.mongodb.com/",
      },
    ],
  },
  {
    category: "Tools & DevOps",
    skills: [
      {
        title: "Git",
        icon: "https://s2.svgbox.net/files.svg?ic=git",
        link: "https://git-scm.com/",
      },
      {
        title: "Docker",
        icon: "https://s2.svgbox.net/files.svg?ic=docker2",
        link: "https://www.docker.com/",
      },
    ],
  },
];

// Keep for backwards compatibility
export const skills: SkillType[] = skillCategories.flatMap(cat => cat.skills);
