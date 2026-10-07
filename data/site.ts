export const site = {
  name: "Pranav",
  email: "pranavmagdum148@gmail.com",
  resume: "/resume.pdf",
  roles: ["Full-stack developer", "AI-enabled product engineer", "Computer engineering student"],
  social: [
    { label: "GitHub", url: "https://github.com/Pranav-05x" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/pranav-05x" },
  ],
  skills: [
    { group: "Languages", items: "C, C++, JavaScript, TypeScript" },
    { group: "Frontend", items: "React, Next.js, Tailwind CSS" },
    { group: "Backend", items: "Node.js, Express, MongoDB, Bun js, postgreSQL" },
  ],
  projects: [] as { title: string; description: string; tags?: string[]; live?: string; repo?: string }[],
};