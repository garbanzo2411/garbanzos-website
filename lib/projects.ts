export type Project = {
    id: string;
    title: string;
    description: string;
    tags: string[];
    screenshot: string;
    href: string;
    accentFrom: string;
    accentTo: string;
}

export const projects: Project[] = [
    {
        id: "001",
        title: "Artist Portfolio Website",
        description:
            "A modern responsive porfolio website showcasing the work and creative vision of Matea Mihaljevic.",
        tags: ["HTML", "CSS", "JavaScript"],
        // Placeholder screenshot
        screenshot: "/screenshots/mateaportfolio.png",
        href: "https://minteart.netlify.app",
        accentFrom: "#C1440E",
        accentTo: "#E8C87A",
    },
    {
        id: "002",
        title: "GRADiEnt",
        description:
            "Worked in a 6 man team to create a intelligent grading and feedback platform that uses AI to provide instant, detailed feedback on student submissions.",
        tags: ["React.js", "Tailwind CSS", "Python", "PostgreSQL"],
        // Screenshot placeholder
        screenshot: "/screenshots/gradientscreenshot.png",
        href: "https://github.com/garbanzo2411/gradient-se",
        accentFrom: "#5C6B73",
        accentTo: "#8FA3AA",
    },
    {
        id: "003",
        title: "UNO",
        description:
            "Worked in a 5 man team to create a online multiplayer UNO game with game logic and a live chat.",
        tags: ["React.js", "CSS", "PostgreSQL"],
        // Screenshot placeholder
        screenshot: "/screenshots/gradientscreenshot.png",
        href: "https://github.com/garbanzo2411/Multiplayer-UNO-Gamblers",
        accentFrom: "#8C350F",
        accentTo: "#E2733C",
    },
    {
        id: "004",
        title: "Job Tracking App",
        description:
            "A job tracking application I made to help me keep track of my job applications and interviews.",
        tags: ["React.js", "CSS"],
        screenshot: "/screenshots/jobtrackingapp.png",
        href: "https://github.com/garbanzo2411/job-tracking-app",
        accentFrom: "#0F172A",
        accentTo: "#60A5FA",
    }
];