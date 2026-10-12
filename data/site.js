// ─────────────────────────────────────────────────────────────
//  ALL WEBSITE TEXT LIVES IN THIS ONE FILE.
//  To change anything on the site, edit it here and push to GitHub.
//  Vercel redeploys automatically.
// ─────────────────────────────────────────────────────────────

export const site = {
  url: "https://madhav-sharma.vercel.app", // change after your first Vercel deploy
  name: "Madhav Sharma",
  role: "Full Stack Developer",
  location: "Indore, India",
  timezone: "IST (UTC+5:30)",
  email: "madhav5448@gmail.com",
  phone: "+91 99771 76638",
  phoneHref: "tel:+919977176638",
  github: "https://github.com/madhav5448",
  linkedin: "https://www.linkedin.com/in/madhav-sharma-26b60916b",
  resume: "/resume.pdf",
  photo: "/madhav.jpg",
  openToWork: true,
  openToWorkText: "Open to full stack, MERN, Node.js and React roles",

  headline: "I build web apps from the database up to the React screen.",
  intro:
    "Full stack developer with 3 years on production apps built with React, Node.js, Express and MySQL on AWS. For the last two and a half years I worked mainly on payment integrations for a membership platform: webhooks from five affiliate platforms, member access, refunds and reconciliation jobs. I prefer finding the real cause of a production problem over patching the symptom.",

  stats: [
    { value: "3 yrs", label: "building production web apps" },
    { value: "5", label: "payment platforms integrated end to end" },
    { value: "End to end", label: "I own features from database to screen" },
  ],

  sides: [
    {
      tag: "Backend",
      title: "Where I spend most of my time",
      points: [
        "Node.js and Express REST APIs with Sequelize and MySQL",
        "Payment webhooks (IPN), idempotency and reconciliation jobs",
        "Cron jobs and queues: AWS SQS, BullMQ with Redis",
        "Schema design, migrations, indexing and query tuning",
        "Docker on AWS ECS, deployed through GitHub Actions",
      ],
    },
    {
      tag: "Frontend",
      title: "Shipped just as often",
      points: [
        "React and Next.js apps, Redux Toolkit, React Router",
        "Material UI and Tailwind, shared design tokens, dark mode",
        "Member dashboards, admin tools and analytics pages",
        "Forms with Formik and Yup, responsive layouts",
        "Course-player style learning pages (Training Hub)",
      ],
    },
  ],

  experience: [
    {
      company: "Clicktrix",
      role: "Full Stack Developer",
      period: "Apr 2024 – Sep 2026",
      place: "Remote · NSW, Australia",
      summary:
        "Membership platform for affiliate marketing products. React, Node, Express, Sequelize, MySQL, AWS ECS.",
      points: [
        "Built and maintained payment webhook handlers for five affiliate platforms, covering product mapping, upsell access, refunds and reconciliation.",
        "Stopped duplicate sales from provider retries with a unique transaction-id constraint, and secured a postback endpoint that had been open to anyone.",
        "Added an alert for sales of unrecognised products. It exposed one product's sales being dropped silently; I fixed the cause and made sure every affected buyer got their account.",
        "Designed one refund and chargeback table shared by all payment platforms, which showed refunds had been under-counted.",
        "Wrote reconciliation cron jobs that compare vendor APIs with the database every five minutes and recover missed webhooks, plus Slack alerts for failures.",
        "Traced a broken onboarding flow to four separate causes, including a model missing two columns and a sync job that was never scheduled, and fixed each one.",
        "Led the Training Hub redesign in React and Material UI: responsive, dark theme, shared design tokens.",
        "Built a buyer survey with admin analytics, login/device analytics, a stable A/B test, and an order lookup API with per-key rate limiting.",
      ],
    },
    {
      company: "Vit Web Development Pvt. Ltd.",
      role: "Software Developer",
      period: "Aug 2023 – Apr 2024",
      place: "Indore",
      summary: "OTT video platform. React, JavaScript, HTML, CSS.",
      points: [
        "Customised an OTT video player with Video.js, adding custom buttons and subtitle support.",
        "Built movie listing pages and cards, and an admin panel with CRUD tables, pagination and loading states.",
        "Integrated APIs with the backend team and made the UI work on desktop and mobile.",
      ],
    },
  ],

  projects: [
    {
      slug: "payments",
      label: "Membership platform · Payments",
      title: "Payment webhooks & reconciliation",
      client: "Affiliate marketing platform (client kept private)",
      blurb:
        "Webhook handlers for five payment platforms that create member accounts and grant access the moment someone buys, with safety nets for everything that can go wrong.",
      points: [
        "Duplicate-safe sales using a unique transaction-id constraint",
        "One refund and chargeback ledger shared by every platform",
        "Reconcile jobs every 5 minutes that recover missed webhooks",
        "Slack alerts for unmapped products and failed jobs",
      ],
      stack: ["Node.js", "Express", "Sequelize", "MySQL", "AWS ECS", "Slack webhooks"],
    },
    {
      slug: "ticket-desk",
      label: "Personal project · AI",
      title: "Ticket Desk: AI email support agent",
      client: "Own project",
      blurb:
        "Support emails arrive through a signed webhook, a worker classifies each one and drafts a reply or refund. Nothing is sent until a person approves it.",
      points: [
        "Agent steps stored as database rows, so prompts and order change without a deploy",
        "Small model for classification, stronger model only for refund checks",
        "AES-256-GCM encrypted API keys and row level security on every table",
        "Built with Claude Code; every change reviewed and tested by me",
      ],
      stack: ["Next.js 16", "TypeScript", "Hono", "BullMQ", "Redis", "Supabase", "Docker"],
    },
    {
      slug: "analytics",
      label: "Client project · Analytics",
      title: "Affiliate analytics dashboard",
      client: "Client kept private",
      blurb:
        "Sales, profitability, upsell rate and refund reports for an affiliate business, with role based access and an email pipeline behind it.",
      points: [
        "Excel and CSV export on every report",
        "Role based access using CASL",
        "Scheduled IMAP pipeline de-duplicated by Message-ID",
        "Fixed IMAP connection leaks and cron crashes",
      ],
      stack: ["React", "Material UI", "Redux Toolkit", "ApexCharts", "Node.js", "MySQL"],
    },
    {
      slug: "dashboards",
      label: "Client work · Frontend",
      title: "Membership dashboards & funnels",
      client: "Several consumer brands (kept private)",
      blurb:
        "Member areas for several brands built from shared React components, plus video sales, quiz and upsell funnel pages tested across mobile and desktop.",
      points: [
        "Shared component library across brands",
        "Images served from Cloudflare R2",
        "Quiz funnels with an AI-voiced presentation",
        "Responsive checks from 320px to 1920px",
      ],
      stack: ["React", "Material UI", "JavaScript", "Cloudflare R2"],
    },
  ],

  skills: [
    { group: "Languages", items: ["JavaScript (ES6+)", "TypeScript", "SQL", "HTML", "CSS"] },
    {
      group: "Frontend",
      items: ["React", "Next.js", "Vite", "Redux Toolkit", "Material UI", "Tailwind CSS", "React Router", "Formik & Yup"],
    },
    {
      group: "Backend",
      items: ["Node.js", "Express", "Sequelize", "REST APIs", "JWT auth", "Webhooks (IPN)", "Cron jobs", "BullMQ", "AWS SQS"],
    },
    { group: "Database", items: ["MySQL", "AWS Aurora", "Migrations", "Indexing", "PostgreSQL (Supabase)"] },
    { group: "Cloud & DevOps", items: ["AWS ECS", "S3", "CloudFront", "Docker", "GitHub Actions", "PM2", "Cloudflare R2"] },
    { group: "AI", items: ["Claude API", "OpenAI API", "Prompt design", "Claude Code", "MCP"] },
    { group: "Integrations", items: ["JVZoo", "Digistore24", "ClickBank", "Explodely", "CheckoutChamp", "SendGrid", "Slack"] },
  ],

  ai: {
    title: "How I use AI at work",
    text: "Claude Code is my daily tool for investigation, refactors and tests. I set up a repo guide (CLAUDE.md), pinned skill packs and an MCP connection to the database. AI speeds up the work; I still read, review and test every change before it ships.",
    points: [
      "Route cheap and strong models by step to control cost",
      "Keep a human approval step before any real action",
      "Store agent steps as config, not code",
    ],
  },

  education: [
    { title: "Bachelor of Engineering", place: "Bansal Institute of Science and Technology, Bhopal", period: "2015 – 2019" },
    { title: "Basics of Web Development (Certification)", place: "Masai School", period: "2022" },
    { title: "Higher Secondary", place: "City Central School, Bhind", period: "2015" },
  ],
};
