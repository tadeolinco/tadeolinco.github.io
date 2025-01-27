export type ProjectType = {
  title: string;
  startDate: Date;
  endDate: Date | null;
  description: string;
  technologies: string[];
  height: number;
  noCover?: boolean;
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
