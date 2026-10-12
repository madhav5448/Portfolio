// ─────────────────────────────────────────────────────────────
//  ALL WEBSITE TEXT LIVES IN THIS ONE FILE.
//  Edit here, then `git push` — Vercel redeploys automatically.
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://madhav-sharma.vercel.app",
  name: "Madhav Sharma",
  firstName: "Madhav",
  lastName: "Sharma",
  role: "Full Stack Developer",
  location: "Indore, India",
  timezone: "IST, UTC+5:30",
  email: "madhav5448@gmail.com",
  phone: "+91 99771 76638",
  phoneHref: "tel:+919977176638",
  github: "https://github.com/madhav5448",
  githubLabel: "madhav5448",
  linkedin: "https://www.linkedin.com/in/madhav-sharma-26b60916b",
  linkedinLabel: "madhav-sharma",
  resume: "/resume.pdf",
  photo: "/madhav.jpg",
  openToWork: true,
  openToWorkText: "Open to full stack, Node.js and React roles",

  headline: "Full stack developer building React apps and Node.js APIs.",
  intro:
    "Three years shipping production web apps with React, Node.js, Express and MySQL on AWS. I build member dashboards, admin tools and REST APIs, and I own features end to end: the database table, the API, the background job and the React screen on top. I like finding the real cause of a problem, not patching the symptom.",

  facts: [
    { value: "3 years", label: "shipping production web apps" },
    { value: "React + Node.js", label: "the stack I work in every day" },
    { value: "Database to UI", label: "schema, API, jobs and screens" },
  ],

  // The terminal panel in the hero. Each line plays once on page load.
  heroPanel: {
    label: "Example of a full stack feature going from code to production",
    title: "deploy.log",
    badge: "production",
    command: "git push origin main",
    caption: "How I ship a feature: React screen, Node.js API, database change and deploy, all owned by me.",
    lines: [
      { step: "client", target: "React + MUI", tool: "vite", detail: "member dashboard", result: "build passed", status: "ok" },
      { step: "api", target: "Node + Express", tool: "rest", detail: "/api/members, /api/reports", result: "build passed", status: "ok" },
      { step: "db", target: "MySQL", tool: "sequelize", detail: "add_survey_responses", result: "migration applied", status: "ok" },
      { step: "jobs", target: "cron + queue", tool: "bullmq", detail: "nightly sync", result: "scheduled", status: "ok" },
      { step: "deploy", target: "Docker", tool: "aws ecs", detail: "GitHub Actions", result: "live", status: "ok" },
    ],
  },

  sides: [
    {
      title: "Frontend",
      lead: "React apps people use every day.",
      points: [
        "React and Next.js with Redux Toolkit and React Router",
        "Material UI and Tailwind, shared design tokens, dark mode",
        "Step-by-step in-app guides and setup wizards",
        "Member dashboards, admin panels and analytics pages",
        "Forms with Formik and Yup, tables, charts, responsive layouts",
      ],
    },
    {
      title: "Backend",
      lead: "Node.js APIs and the jobs behind them.",
      points: [
        "REST APIs with Node.js, Express and Sequelize",
        "MySQL schema design, migrations, indexing and query tuning",
        "JWT auth, API keys and per-key rate limits",
        "Cron jobs, queues (BullMQ, AWS SQS) and third-party webhooks",
        "Docker on AWS ECS, deployed through GitHub Actions",
      ],
    },
  ],

  experience: [
    {
      company: "Clicktrix",
      role: "Full Stack Developer",
      period: "Apr 2024 – Sep 2026",
      place: "Remote, NSW Australia",
      summary: "Membership SaaS where members set up social accounts, create AI videos and posts, and learn through guided training. React, MUI, Node.js, Express, MySQL, AWS.",
      points: [
        "Second-largest contributor to the main codebase, across the React frontend and the Node.js API: member dashboard, setup wizard, onboarding, profile and admin panels.",
        "Built the First Week Guide, an in-app guide that walks new members through their first seven days, points at the right control on each page, resumes where they left off and works on phones.",
        "Led the Training Hub redesign into a course-player layout with a lesson sidebar, progress tracking, completion badges and a next-lesson flow, responsive with a dark theme.",
        "Worked on the AI content tools: B-roll and AI talking-head video generator wizards, viral post packs, an AI caption generator and a post scheduler for Instagram, TikTok and Pinterest.",
        "Built the server-rendered landing pages for each niche and product, and the AI stats panel that shows members how their content performs.",
        "Worked on AVA, the in-app AI support assistant: a shared store so the chat survives page changes and tabs, guided steps, and a corrected knowledge base.",
        "Built a buyer survey with admin analytics, login and device analytics, A/B tests, and an order lookup REST API with API key auth and per-key rate limits.",
        "Connected five sales platforms through webhooks so buyers get their account automatically, with duplicate-safe processing, sync jobs and Slack alerts.",
        "Deployed with Docker on AWS ECS through GitHub Actions, including database migrations, and wrote the handover docs.",
      ],
    },
    {
      company: "Vit Web Development",
      role: "Software Developer",
      period: "Aug 2023 – Apr 2024",
      place: "Indore",
      summary: "OTT video streaming platform. React, JavaScript, HTML, CSS.",
      points: [
        "Customised the video player with Video.js, adding custom controls and subtitle support.",
        "Built movie listing pages and cards, and an admin panel with CRUD tables, pagination and loading states.",
        "Integrated the backend APIs and made every screen work on desktop and mobile.",
      ],
    },
  ],

  projects: [
    {
      slug: "membership-platform",
      featured: true,
      kind: "Client work, kept private",
      title: "Membership SaaS platform",
      blurb:
        "A full stack platform where members set up their social media accounts, create AI videos and posts, schedule them and learn through guided training. I worked across the whole product for two and a half years.",
      points: [
        "First Week Guide and Training Hub in React and MUI",
        "B-roll and AI talking-head video generator wizards",
        "AI captions, viral post packs and a post scheduler",
        "Node.js APIs, landing pages, admin tools and analytics",
      ],
      stack: ["React", "Material UI", "Node.js", "Express", "MySQL", "AWS ECS"],
    },
    {
      slug: "ticket-desk",
      kind: "Own project, AI",
      title: "Ticket Desk",
      blurb:
        "An AI email support agent. A worker classifies each incoming email and drafts a reply, and nothing is sent until a person approves it in the dashboard.",
      points: [
        "Next.js dashboard with a Hono API and a BullMQ worker",
        "Agent steps stored as data, so prompts change without a deploy",
        "Encrypted API keys and row level security on every table",
      ],
      stack: ["Next.js", "TypeScript", "Hono", "BullMQ", "Supabase"],
    },
    {
      slug: "analytics",
      kind: "Client work, kept private",
      title: "Sales analytics dashboard",
      blurb:
        "Sales, profit, upsell and refund reports for an online business, with role based access and a scheduled email pipeline behind it.",
      points: [
        "Charts with ApexCharts, Excel and CSV export",
        "Role based access with CASL",
        "IMAP email pipeline with duplicate-safe processing",
      ],
      stack: ["React", "Redux Toolkit", "ApexCharts", "Node.js", "MySQL"],
    },
    {
      slug: "brand-dashboards",
      kind: "Client work, kept private",
      title: "Brand member sites",
      blurb:
        "Member areas and landing pages for several consumer brands, built from shared React components and tested on phones from 320px up to 1920px screens.",
      points: [
        "One shared component library across brands",
        "Images served from Cloudflare R2",
        "Quiz pages with an AI-voiced presentation",
      ],
      stack: ["React", "Material UI", "JavaScript", "Cloudflare R2"],
    },
  ],

  skills: [
    { group: "Frontend", items: ["React", "Next.js", "JavaScript", "TypeScript", "Redux Toolkit", "Material UI", "Tailwind CSS", "React Router", "Formik and Yup", "HTML", "CSS"] },
    { group: "Backend", items: ["Node.js", "Express", "Hono", "REST APIs", "JWT auth", "Sequelize", "Webhooks", "Cron jobs", "BullMQ", "AWS SQS"] },
    { group: "Database", items: ["MySQL", "AWS Aurora", "PostgreSQL on Supabase", "Schema design", "Migrations", "Indexing"] },
    { group: "Cloud", items: ["AWS ECS", "S3", "CloudFront", "Docker", "GitHub Actions", "PM2", "Cloudflare R2"] },
    { group: "AI", items: ["Claude API", "OpenAI API", "Prompt design", "Claude Code", "MCP"] },
    { group: "Tools", items: ["Git", "GitHub", "Postman", "VS Code", "npm", "pnpm", "Slack", "SendGrid"] },
  ],

  ai: {
    title: "How I use AI at work",
    text: "Claude Code is my daily tool for investigation, refactors and tests. I set up a repo guide, pinned skill packs and an MCP connection to the database. AI speeds up the work; I still read, review and test every change before it ships.",
  },

  education: [
    { title: "Bachelor of Engineering", place: "Bansal Institute of Science and Technology, Bhopal", period: "2015 – 2019" },
    { title: "Web Development certification", place: "Masai School", period: "2022" },
    { title: "Higher Secondary", place: "City Central School, Bhind", period: "2015" },
  ],
};
