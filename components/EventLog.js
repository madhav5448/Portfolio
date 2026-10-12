const marks = { ok: "✓", warn: "↺", alert: "!" };

// A small terminal-style panel. Each line fades in once on page load.
export default function EventLog({ log }) {
  return (
    <figure className="log" aria-label={log.label}>
      <div className="log-bar">
        <span className="log-dots" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span className="log-title">{log.title}</span>
        <span className="log-live">
          <span className="log-live-dot" aria-hidden="true" />
          {log.badge}
        </span>
      </div>
      {log.command ? (
        <p className="log-command">
          <span aria-hidden="true">$ </span>
          {log.command}
        </p>
      ) : null}
      <ol className="log-body">
        {log.lines.map((l, i) => (
          <li key={i} className={`log-line is-${l.status}`} style={{ "--i": i }}>
            <span className="log-time">{l.step}</span>
            <span className="log-event">{l.target}</span>
            <span className="log-source">{l.tool}</span>
            <span className="log-detail">{l.detail}</span>
            <span className="log-result">
              <b aria-hidden="true">{marks[l.status]}</b> {l.result}
            </span>
          </li>
        ))}
      </ol>
      <figcaption>{log.caption}</figcaption>
    </figure>
  );
}
