export type ProjectGroup = "ai" | "web" | "games";

export type Project = {
  title: string;
  /** Small eyebrow line above the title. */
  category: string;
  /** Which filter tab the card belongs to. */
  group: ProjectGroup;
  description: string;
  stack: string[];
  repo?: string;
  /** Deployed site, playable build, anything a visitor can open. */
  live?: string;
  liveLabel?: string;
  /** Competition or venue worth calling out. */
  badge?: string;
};

export const projectGroups: { id: ProjectGroup | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "ai", label: "AI & ML" },
  { id: "web", label: "Web & Product" },
  { id: "games", label: "Games" },
];

export const projects: Project[] = [
  {
    title: "Space Biology Knowledge Engine",
    category: "RAG · Knowledge Graph",
    group: "ai",
    description:
      "A RAG and knowledge-graph system over NASA space-biology literature, built to the Space Apps challenge brief. Took 1st Runner-Up with Team Sirius.",
    stack: ["TypeScript", "React", "Node.js", "RAG"],
    repo: "https://github.com/alvi00/Team_Sirius_Nasa_Space_Apps_Challenge_2025",
    badge: "NASA Space Apps 2025",
  },
  {
    title: "Ask Alvi",
    category: "AI Search Engine",
    group: "ai",
    description:
      "Multi-model AI search engine combining several LLMs with RAG retrieval and function calling, extended to image, music, and video suggestions plus Telegram and Discord interfaces.",
    stack: ["Next.js", "LangChain.js", "Groq", "Mixtral", "Brave Search"],
    repo: "https://github.com/alvi00/ask_alvi_advanced_search_engine",
    live: "https://ask-alvi-ai.vercel.app/",
    liveLabel: "Live site",
  },
  {
    title: "Speech Accent Recognition",
    category: "Deep Learning",
    group: "ai",
    description:
      "Classifies English speakers into nine geographical regions, benchmarking MFCC pipelines with SVM and Random Forest against an end-to-end fine-tuned Wav2Vec 2.0.",
    stack: ["PyTorch", "Wav2Vec 2.0", "Transformers", "Scikit-learn"],
    repo: "https://github.com/alvi00/speech_recognization_systems-group-6",
  },
  {
    title: "Bee Hive Simulation",
    category: "Agent-Based Simulation",
    group: "ai",
    description:
      "Model of nectar collection, honey storage, and bee communication strategies, with an interactive mode and batch parameter sweeps for comparing strategies.",
    stack: ["Python", "NumPy", "Matplotlib"],
    repo: "https://github.com/alvi00/Bee-Hive-Simulation-Project",
  },
  {
    title: "Bangladesh Liberation War Research Center",
    category: "Research Platform",
    group: "web",
    description:
      "A platform for exploring verified documents, images, and stories from the Bangladesh Liberation War, with a scroll-driven archive experience.",
    stack: ["React", "TypeScript", "GSAP"],
    repo: "https://github.com/alvi00/Bangladesh-muktijuddo-gobeshona-kendra",
    live: "https://bangladesh-muktijuddho-gobeshona-ke.vercel.app/",
    liveLabel: "Live site",
  },
  {
    title: "CoWork Booking API",
    category: "Backend · Testing",
    group: "web",
    description:
      "Multi-tenant REST API for coworking room bookings — JWT access and refresh tokens, per-organization rooms and roles, admin reporting, containerised with a pytest smoke suite.",
    stack: ["FastAPI", "SQLAlchemy", "JWT", "Docker", "pytest"],
    repo: "https://github.com/alvi00/ICT_Fest_Hackathon_Preliminary",
    badge: "ICT Fest Hackathon",
  },
  {
    title: "Careplus",
    category: "Healthcare",
    group: "web",
    description:
      "Telemedicine platform connecting patients with healthcare professionals, with appointment scheduling and video consultation built in.",
    stack: ["TypeScript", "React", "Twilio"],
    repo: "https://github.com/alvi00/careplus",
    live: "https://careplus-ebon-three.vercel.app/",
    liveLabel: "Live site",
  },
  {
    title: "Mediconnectify",
    category: "Health · Web",
    group: "web",
    description:
      "Locates nearby doctors and blood donors and estimates a user's stroke risk from health inputs, wrapped in a single web dashboard.",
    stack: ["JavaScript", "HTML", "CSS"],
    repo: "https://github.com/alvi00/Mediconnectify_499_project",
    live: "https://mediconnectify-499-project.vercel.app",
    liveLabel: "Live site",
  },
  {
    title: "Climate Odyssey",
    category: "AR + ML Game",
    group: "games",
    description:
      "Educational adventure built on NASA satellite data and GLOBE protocols — players run water-quality tests in AR, diagnose pollution, and implement fixes that persist in the world.",
    stack: ["Unity", "C#", "AR", "Machine Learning"],
    repo: "https://github.com/alvi00/Climate-Odyssey---Team-BHOTKA_ODHIKAR",
    live: "https://alvi00.itch.io/climate-odyssey-team-bhotka-odhikar",
    liveLabel: "Play on itch.io",
    badge: "NASA Space Apps 2024",
  },
  {
    title: "False Nine",
    category: "Stealth Horror",
    group: "games",
    description:
      "Built for the “Kickoff” jam. Creep past sleeping guardians to the key at the heart of the house — taking it wakes the ghosts, seals the doors, and turns the burglary into a sprint for the exit.",
    stack: ["Unity", "C#", "Game Design"],
    repo: "https://github.com/alvi00/false_nine",
    live: "https://alvi00.itch.io/false-nine",
    liveLabel: "Play on itch.io",
  },
  {
    title: "The Hidden Gems",
    category: "FPS Survival",
    group: "games",
    description:
      "First-person survival game across three monster-infested islands, with an NPC quest-giver, a three-day in-game timer, and gem-retrieval objectives.",
    stack: ["Unity", "FPS", "Level Design"],
    repo: "https://github.com/alvi00/Hidden-Gem",
    live: "https://alvi00.itch.io/the-hidden-gem",
    liveLabel: "Play on itch.io",
  },
  {
    title: "SpaceShooter",
    category: "Arcade · Creative Code",
    group: "games",
    description:
      "Retro arcade shooter written in p5.js — enemy waves, bonus pickups, and high scores that persist through localStorage.",
    stack: ["p5.js", "JavaScript", "Canvas"],
    repo: "https://github.com/alvi00/p5js-r-type-game",
  },
];
