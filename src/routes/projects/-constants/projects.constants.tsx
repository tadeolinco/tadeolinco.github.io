import { ReactNode } from "react";

export type ProjectType = {
  title: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  technologies: string[];
  height: number;
  noCover?: boolean;
  content?: ReactNode;
} & (
  | {
      image?: never;
      video: string;
    }
  | {
      image: string;
      video?: never;
    }
);

export const PROJECTS: ProjectType[] = [
  {
    title: "Portfolio Website",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Modern portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 400,
    video: "/videos/portfolio.mp4",
    content: (
      <div className="space-y-4">
        <p>
          I've always wanted to create a portfolio website, but lacked the
          inspiration for the design. I wanted a gimmick. I like film, and I
          just recently watched a{" "}
          <a
            href="https://www.youtube.com/watch?v=rC0HFwnK_5E&t=156s"
            target="_blank"
            className="underline"
          >
            YouTube clip
          </a>{" "}
          of the business card scene in American Psycho, so that was a start.
        </p>
        <p>
          Initially I just had a white version of the center card, and that's
          it. Played around with some CSS rotations, some gimmick with
          subtitles, but ended up scrapping a lot of the ideas.
        </p>
        <p>
          Took a break and decided to visit Letterboxd, and found out that I
          could export my data from there. There it was, a CSV of all my liked
          films, complete with name and a shortlink to it's Letterboxd film
          page. And each page had its film poster.
        </p>
        <p>
          So I built a webscraper using Playwright to automatically get those
          posters, and made a carousel out of them. Had to hook up a window
          resize listener to check the number of rows to render.
        </p>
        <p>
          I got some feedback that the posters were a bit too distractingly
          pretty, taking away attention from the actual important information
          (which was me).
        </p>
        <p>
          Played around with some CSS filters until I got a good combination of
          a minor blur and grayscale. However, that made me sad since the
          posters warranted some love as well. So its liveliness back on hover.
        </p>
        <p>
          I wanted a bit more interactivity with site. I wanted them to go back
          and look at the card while they were playing around with film
          hovering. Landed with the idea of using the CSS rotations again and
          using a library (
          <a
            href="https://lokeshdhakar.com/projects/color-thief/"
            target="_blank"
            className="underline"
          >
            color-thief
          </a>
          ) to get the color palette of the film poster, and applying that to
          the card.
        </p>
        <p>
          Heavy insipiration from{" "}
          <a href="https://rauno.me/" target="_blank" className="underline">
            rauno.me
          </a>
        </p>
      </div>
    ),
  },

  {
    title: "Unravel Carbon - Dashboards",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboards built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 800,
    image: "/images/dashboards.jpeg",
  },
  {
    title: "Unravel Carbon - Chart Export",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Export built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/chart-export.gif",
  },
  {
    title: "Unravel Carbon - Compare Facilities",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Export built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/compare.gif",
  },
  {
    title: "Unravel Carbon - Climate Program",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 380,
    image: "/images/climate-program.jpeg",
  },
  {
    title: "Unravel Carbon - Portfolio Module",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/portfolio.gif",
  },
  {
    title: "Unravel Carbon - Data upload revamp",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/data-flow.gif",
  },
  {
    title: "Unravel Carbon - Data history",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/data-history.gif",
  },
  {
    title: "Unravel Carbon - ISSB",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 440,
    image: "/images/ISSB.webp",
  },
  {
    title: "Unravel Carbon - Assets Management",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/assets.gif",
  },
  {
    title: "Unravel Carbon - Data export",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/data-export.gif",
  },
  {
    title: "Unravel Carbon - Audit Trail",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/audit.gif",
  },
  {
    title: "Unravel Carbon - Company Builder",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    image: "/images/company-builder.gif",
  },
  {
    title: "Unravel Carbon - Quick Search",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 470,
    video: "/videos/quick-search.mp4",
  },
  {
    title: "Insync",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Dashboard built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 575,
    image: "/images/insync.gif",
  },
  {
    title: "Gastos",
    startDate: new Date("2024-01-15"),
    endDate: null,
    description: "Modern portfolio website built with React and TypeScript",
    technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
    height: 800,
    video: "/videos/gastos.mp4",
    noCover: true,
  },
];
