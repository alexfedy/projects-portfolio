import Project from "@/components/project";

const data = [
  {
    img: "/hh.svg",
    name: "Hedgehog",
    description: "Lightweight and simple task tracker applcation",
    link: "https://hedgehog-todo.vercel.app/",
    technologies: ["Golang", "React", "Vite", "Wails"],
  },
  {
    img: "/avatar_cyan.svg",
    name: "Avatar Gen",
    description: "Generate custom avatars and profile pictures",
    link: "https://random-avatar-generator-pi.vercel.app/",
    technologies: ["Astro", "React", "Tailwind"],
  },
  {
    img: "/SpaceX_logo_black.svg",
    name: "SpaceX Dashboard",
    description: "View accurate SpaceX launche and rocket information",
    link: "https://space-x-dashboard-two.vercel.app/",
    technologies: ["React", "Rest API", "NextUI"],
  },
  {
    img: "/python-3.svg",
    name: "GeoRoute Plotter",
    description:
      "Python-based web scraping tool that extracts data from google maps urls and generates efficient route plot",
    link: "https://github.com/alexfedy/Google-Maps-Distance-Scraper",
    technologies: ["Python", "Selenium", "Chrome Driver"],
  },
  {
    img: "/next.svg",
    name: "Project Manager",
    description: "Full Stack Social Application to share programming projects",
    link: "https://github.com/alexfedy/ProjectManager",
    technologies: [
      "NextJS",
      "Typescript",
      "Prisma",
      "Supabase",
      "NextAuth",
      "Tailwind",
    ],
  },
];

export default function Home() {
  return (
    <main className="max-w-[800px] flex min-h-screen flex-col mx-auto my-10">
      <div className="m-4">
        <p className="tracking-tight text-xs mb-2 px-2 rounded-full bg-slate-100 w-fit">
          Alex Fedorov
        </p>
        <h1 className="font-extrabold text-4xl tracking-tighter">About</h1>
        <div className="my-8">
          <p>
            Hey, I'm a CS Grad and Software Developer. I enjoy creating full
            stack applications and crafting beautiful front-end experiences.
            Recently, I have gotten into DevOps and Software architecture.
            <br />
            <br />
            This portfolio serves to display my work.
          </p>
          <br />
          <div className="flex gap-4">
            <span>
              Visit my{" "}
              <a
                href="https://github.com/alexfedy"
                target="_blank"
                className="underline"
              >
                Github
              </a>{" "}
              to see all my projects and code, and feel free to contact at
              &nbsp;
              <a href="mailto:fedoalex20@gmail.com" className="text-slate-600">
                fedoalex20@gmail.com
              </a>
              .
            </span>
          </div>
        </div>
        <hr />
        <div className="my-4 w-full flex items-center justify-center gap-4">
          <i>"An app is worth a thousand buzzwords"</i>
          <p>- Me</p>
        </div>
        <hr />
        <div className="my-8 flex flex-col gap-4">
          {data.map((item, index) => (
            <div key={index}>
              <Project
                image={item.img}
                name={item.name}
                description={item.description}
                link={item.link}
                technologies={item.technologies}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
