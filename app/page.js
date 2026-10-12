import Image from "next/image";
import Header from "../components/Header";
import {
  GitHubIcon,
  LinkedInIcon,
  MailIcon,
  PhoneIcon,
  DownloadIcon,
  ArrowIcon,
  PinIcon,
} from "../components/Icons";
import { site } from "../data/site";

function SectionHead({ index, eyebrow, title, children }) {
  return (
    <div className="section-head">
      <p className="eyebrow">
        <span className="eyebrow-num">{index}</span> {eyebrow}
      </p>
      <h2>{title}</h2>
      {children ? <p className="section-sub">{children}</p> : null}
    </div>
  );
}

export default function Home() {
  const year = new Date().getFullYear();

  return (
    <>
      <Header name={site.name} resume={site.resume} />

      <main id="top">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              {site.openToWork ? (
                <p className="status">
                  <span className="status-dot" aria-hidden="true" />
                  {site.openToWorkText}
                </p>
              ) : null}
              <h1>
                {site.name}
                <span className="hero-role">{site.role}</span>
              </h1>
              <p className="hero-headline">{site.headline}</p>
              <p className="hero-intro">{site.intro}</p>

              <div className="hero-actions">
                <a className="btn btn-primary" href="#projects">
                  View my work <ArrowIcon />
                </a>
                <a className="btn btn-ghost" href={site.resume} target="_blank" rel="noopener">
                  <DownloadIcon /> Resume
                </a>
              </div>

              <ul className="hero-meta">
                <li>
                  <PinIcon /> {site.location} · {site.timezone}
                </li>
                <li>
                  <a href={`mailto:${site.email}`}>{site.email}</a>
                </li>
              </ul>
            </div>

            <div className="hero-photo">
              <div className="photo-frame">
                <Image
                  src={site.photo}
                  alt={`${site.name}, ${site.role}`}
                  width={800}
                  height={999}
                  priority
                  sizes="(max-width: 860px) 70vw, 380px"
                />
              </div>
              <div className="photo-socials">
                <a href={site.github} target="_blank" rel="noopener" aria-label="GitHub">
                  <GitHubIcon />
                </a>
                <a href={site.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
                  <LinkedInIcon />
                </a>
                <a href={`mailto:${site.email}`} aria-label="Email">
                  <MailIcon />
                </a>
              </div>
            </div>
          </div>

          <div className="container">
            <dl className="stats">
              {site.stats.map((s) => (
                <div key={s.label} className="stat">
                  <dt>{s.value}</dt>
                  <dd>{s.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── About / What I do ───────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <SectionHead index="01" eyebrow="About" title="Backend first, comfortable across the stack">
              I usually own a feature end to end: the table design, the API, the background job and the
              React screen on top.
            </SectionHead>
            <div className="sides">
              {site.sides.map((side) => (
                <article key={side.tag} className="card side">
                  <p className="tag">{side.tag}</p>
                  <h3>{side.title}</h3>
                  <ul className="ticks">
                    {side.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────── */}
        <section id="experience" className="section section-alt">
          <div className="container">
            <SectionHead index="02" eyebrow="Experience" title="Where I've worked" />
            <ol className="timeline">
              {site.experience.map((job) => (
                <li key={job.company} className="job">
                  <div className="job-side">
                    <p className="job-period">{job.period}</p>
                    <p className="job-place">{job.place}</p>
                  </div>
                  <div className="job-body">
                    <h3>
                      {job.role} <span className="at">at</span> {job.company}
                    </h3>
                    <p className="job-summary">{job.summary}</p>
                    <ul className="ticks">
                      {job.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── Projects ─────────────────────────────────────── */}
        <section id="projects" className="section">
          <div className="container">
            <SectionHead index="03" eyebrow="Projects" title="Selected work">
              Client names are kept private. Happy to go deep on any of these in an interview.
            </SectionHead>
            <div className="projects">
              {site.projects.map((p) => (
                <article key={p.slug} className="card project">
                  <p className="tag">{p.label}</p>
                  <h3>{p.title}</h3>
                  <p className="project-client">{p.client}</p>
                  <p className="project-blurb">{p.blurb}</p>
                  <ul className="ticks">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="chips" aria-label="Tech stack">
                    {p.stack.map((s) => (
                      <li key={s}>{s}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Skills ───────────────────────────────────────── */}
        <section id="skills" className="section section-alt">
          <div className="container">
            <SectionHead index="04" eyebrow="Skills" title="Tools I use every day" />
            <div className="skills">
              {site.skills.map((g) => (
                <div key={g.group} className="skill-row">
                  <h3>{g.group}</h3>
                  <ul className="chips">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="split">
              <article className="card ai-card">
                <p className="tag">AI workflow</p>
                <h3>{site.ai.title}</h3>
                <p>{site.ai.text}</p>
                <ul className="ticks">
                  {site.ai.points.map((p) => (
                    <li key={p}>{p}</li>
                  ))}
                </ul>
              </article>

              <article className="card">
                <p className="tag">Education</p>
                <h3>Background</h3>
                <ul className="edu">
                  {site.education.map((e) => (
                    <li key={e.title}>
                      <p className="edu-title">{e.title}</p>
                      <p className="edu-meta">
                        {e.place} · {e.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </article>
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="section">
          <div className="container">
            <div className="contact">
              <div>
                <p className="eyebrow">
                  <span className="eyebrow-num">05</span> Contact
                </p>
                <h2>Let's talk</h2>
                <p className="section-sub">
                  I'm looking for full-time full stack roles: remote, hybrid or on-site. The quickest way to
                  reach me is email.
                </p>
              </div>
              <ul className="contact-list">
                <li>
                  <a href={`mailto:${site.email}`}>
                    <MailIcon />
                    <span>
                      <small>Email</small>
                      {site.email}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={site.phoneHref}>
                    <PhoneIcon />
                    <span>
                      <small>Phone</small>
                      {site.phone}
                    </span>
                  </a>
                </li>
                <li>
                  <a href={site.linkedin} target="_blank" rel="noopener">
                    <LinkedInIcon />
                    <span>
                      <small>LinkedIn</small>
                      madhav-sharma
                    </span>
                  </a>
                </li>
                <li>
                  <a href={site.github} target="_blank" rel="noopener">
                    <GitHubIcon />
                    <span>
                      <small>GitHub</small>
                      madhav5448
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {year} {site.name}
          </p>
          <p>
            Built with Next.js · <a href={site.resume} target="_blank" rel="noopener">Download resume</a>
          </p>
        </div>
      </footer>
    </>
  );
}
