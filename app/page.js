import Image from "next/image";
import Header from "../components/Header";
import EventLog from "../components/EventLog";
import { GitHubIcon, LinkedInIcon, MailIcon, PhoneIcon, DownloadIcon, PinIcon } from "../components/Icons";
import { site } from "../data/site";

export default function Home() {
  const year = new Date().getFullYear();
  const [featured, ...others] = site.projects;

  return (
    <>
      <Header name={site.name} resume={site.resume} />

      <main id="top">
        {/* ── Hero ─────────────────────────────────────────── */}
        <section className="hero">
          <div className="container">
            <div className="hero-grid">
              <div className="hero-copy">
                {site.openToWork ? (
                  <p className="status">
                    <span className="status-dot" aria-hidden="true" />
                    {site.openToWorkText}
                  </p>
                ) : null}

                <h1 className="hero-name">
                  <span>{site.firstName}</span>
                  <span>{site.lastName}</span>
                </h1>
                <p className="hero-headline">{site.headline}</p>
                <p className="hero-intro">{site.intro}</p>

                <div className="hero-actions">
                  <a className="btn btn-primary" href="#projects">
                    See my work
                  </a>
                  <a className="btn btn-ghost" href={site.resume} target="_blank" rel="noopener">
                    <DownloadIcon /> Download resume
                  </a>
                </div>

                <ul className="hero-links">
                  <li>
                    <PinIcon /> {site.location}
                  </li>
                  <li>
                    <a href={site.github} target="_blank" rel="noopener">
                      <GitHubIcon /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href={site.linkedin} target="_blank" rel="noopener">
                      <LinkedInIcon /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${site.email}`}>
                      <MailIcon /> Email
                    </a>
                  </li>
                </ul>
              </div>

              <div className="hero-photo">
                <div className="photo-block" aria-hidden="true" />
                <div className="photo-frame">
                  <Image
                    src={site.photo}
                    alt={`${site.name}, ${site.role}`}
                    width={800}
                    height={999}
                    priority
                    sizes="(max-width: 900px) 72vw, 400px"
                  />
                </div>
              </div>
            </div>

            <dl className="facts">
              {site.facts.map((f) => (
                <div key={f.value} className="fact">
                  <dt>{f.value}</dt>
                  <dd>{f.label}</dd>
                </div>
              ))}
            </dl>

            <EventLog log={site.heroPanel} />
          </div>
        </section>

        {/* ── About ────────────────────────────────────────── */}
        <section id="about" className="section">
          <div className="container">
            <h2 className="section-title">What I work on</h2>
            <p className="section-sub">
              I usually own a feature from end to end: the table design, the API, the background job and the React
              screen on top.
            </p>
            <div className="sides">
              {site.sides.map((side) => (
                <div key={side.title} className="side">
                  <h3>{side.title}</h3>
                  <p className="side-lead">{side.lead}</p>
                  <ul className="list">
                    {side.points.map((p) => (
                      <li key={p}>{p}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Experience ───────────────────────────────────── */}
        <section id="experience" className="section section-tint">
          <div className="container">
            <h2 className="section-title">Experience</h2>
            <ol className="timeline">
              {site.experience.map((job) => (
                <li key={job.company} className="job">
                  <div className="job-when">
                    <p className="job-period">{job.period}</p>
                    <p className="job-place">{job.place}</p>
                  </div>
                  <div className="job-body">
                    <h3>
                      {job.role}, <span className="job-company">{job.company}</span>
                    </h3>
                    <p className="job-summary">{job.summary}</p>
                    <ul className="list">
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
            <h2 className="section-title">Selected work</h2>
            <p className="section-sub">Client names are kept private. Happy to go deep on any of these in an interview.</p>

            <article className="feature">
              <div className="feature-copy">
                <p className="kind">{featured.kind}</p>
                <h3>{featured.title}</h3>
                <p className="feature-blurb">{featured.blurb}</p>
                <ul className="tags" aria-label="Tech stack">
                  {featured.stack.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </div>
              <ul className="feature-points">
                {featured.points.map((p) => (
                  <li key={p}>
                    <span className="check" aria-hidden="true">
                      ✓
                    </span>
                    {p}
                  </li>
                ))}
              </ul>
            </article>

            <div className="projects">
              {others.map((p) => (
                <article key={p.slug} className="project">
                  <p className="kind">{p.kind}</p>
                  <h3>{p.title}</h3>
                  <p className="project-blurb">{p.blurb}</p>
                  <ul className="list list-small">
                    {p.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                  <ul className="tags" aria-label="Tech stack">
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
        <section id="skills" className="section section-tint">
          <div className="container">
            <h2 className="section-title">Skills</h2>
            <div className="skills">
              {site.skills.map((g) => (
                <div key={g.group} className="skill-row">
                  <h3>{g.group}</h3>
                  <ul className="tags">
                    {g.items.map((i) => (
                      <li key={i}>{i}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="split">
              <div className="split-block">
                <h3>{site.ai.title}</h3>
                <p>{site.ai.text}</p>
              </div>
              <div className="split-block">
                <h3>Education</h3>
                <ul className="edu">
                  {site.education.map((e) => (
                    <li key={e.title}>
                      <p className="edu-title">{e.title}</p>
                      <p className="edu-meta">
                        {e.place}, {e.period}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── Contact ──────────────────────────────────────── */}
        <section id="contact" className="contact">
          <div className="container">
            <h2 className="contact-title">Hiring for a full stack role? Let's talk.</h2>
            <p className="contact-sub">
              Open to remote, hybrid or on-site roles in Indore, Pune, Hyderabad, Noida and Gurugram. Email is the
              quickest way to reach me.
            </p>
            <a className="contact-email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <ul className="contact-links">
              <li>
                <a href={site.phoneHref}>
                  <PhoneIcon /> {site.phone}
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener">
                  <LinkedInIcon /> {site.linkedinLabel}
                </a>
              </li>
              <li>
                <a href={site.github} target="_blank" rel="noopener">
                  <GitHubIcon /> {site.githubLabel}
                </a>
              </li>
              <li>
                <a href={site.resume} target="_blank" rel="noopener">
                  <DownloadIcon /> Resume (PDF)
                </a>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-inner">
          <p>
            © {year} {site.name}
          </p>
          <p>
            {site.location}, {site.timezone}
          </p>
        </div>
      </footer>
    </>
  );
}
