# Madhav Sharma — Portfolio

Personal portfolio built with Next.js. One page: About, Experience, Projects, Skills, Contact, light/dark theme, resume download.

## Edit the content

All text is in **`data/site.js`**. Change it there, save, push — Vercel redeploys on its own.

| What | Where |
|---|---|
| Text, projects, skills, links | `data/site.js` |
| Photo | `public/madhav.jpg` (keep the same name) |
| Resume | `public/resume.pdf` (keep the same name) |
| Colours | top of `app/globals.css` (`--accent`) |

## Run on your computer

Needs Node.js 20 or newer.

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Push to GitHub (first time)

1. Create an empty repo on github.com named `portfolio` (no README, no .gitignore).
2. In this folder:

```bash
git init
git add .
git commit -m "Portfolio first version"
git branch -M main
git remote add origin https://github.com/madhav5448/portfolio.git
git push -u origin main
```

## Deploy on Vercel (first time)

1. Go to vercel.com → **Sign up with GitHub**.
2. **Add New → Project** → pick the `portfolio` repo → **Import**.
3. Leave every setting as it is (Vercel detects Next.js) → **Deploy**.
4. In about a minute you get a link like `portfolio-xxxx.vercel.app`.
5. To get a nicer link: Project → **Settings → Domains** → edit to `madhav-sharma.vercel.app` (if free).
6. Put the final link in `site.url` in `data/site.js` and push again.

## Update later

```bash
git add .
git commit -m "Update projects"
git push
```

Vercel deploys every push to `main` automatically.
