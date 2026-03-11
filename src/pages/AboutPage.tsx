import { ButtonLink } from "../components/ui/Button";

const credentials = [
  {
    label: "Specialist Experience",
    value: "14+ years in watch servicing and movement diagnostics"
  },
  {
    label: "Brand Familiarity",
    value: "Rolex, Omega, Tudor, TAG Heuer, Longines, and select vintage calibres"
  },
  {
    label: "Bench Training",
    value: "Advanced mechanical movement servicing and regulation coursework"
  },
  {
    label: "Annual Throughput",
    value: "500+ watches assessed each year"
  }
];

const standards = [
  {
    title: "Controlled Bench Environment",
    body: "Service takes place in a clean, organised workspace designed for precision component handling."
  },
  {
    title: "Parts Sourcing Policy",
    body: "We prioritise genuine parts and disclose alternatives only when availability requires it."
  },
  {
    title: "Transparent Documentation",
    body: "Findings and recommendations are documented before service and summarised at handover."
  },
  {
    title: "Final QA Discipline",
    body: "Timekeeping, function, and finish checks are completed before release."
  }
];

export function AboutPage() {
  return (
    <div className="about-page">
      <section className="section page-hero">
        <div className="container page-hero__grid">
          <div className="page-hero__content">
            <p className="kicker">About</p>
            <h1>A workshop built around technical care and honest service</h1>
            <p>
              ChronoCare Atelier combines traditional watchmaking discipline with modern service
              communication so clients understand every repair decision.
            </p>
          </div>

          <aside className="page-hero__visual" aria-label="Workshop values overview">
            <div className="hero-panel">
              <p className="hero-panel__kicker">Workshop Principles</p>
              <p className="hero-panel__title">Craft-focused service, clear communication, and measured QA.</p>
              <ul className="hero-panel__list">
                <li>Technical standards you can trust</li>
                <li>Transparent service decisions</li>
                <li>Careful handling from intake to return</li>
              </ul>
            </div>
          </aside>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container story-layout">
          <div className="story-content">
            <p className="kicker">Story</p>
            <h2>Why ChronoCare Atelier was established</h2>
            <p>
              The studio started with one goal: give owners a specialist alternative to vague repair
              experiences. We wanted technical standards you can trust and communication you can actually
              follow.
            </p>
            <p>
              Today, we serve professionals and collectors who value precise workmanship, careful handling,
              and clear timelines over rushed turnover.
            </p>
            <p className="story-content__philosophy">
              We believe watch service should protect both performance and character. Our process is built
              to preserve what matters and explain what changes.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Credentials and Expertise</p>
            <h2>Authority built from specialist bench experience</h2>
          </header>

          <div className="credentials-grid">
            {credentials.map((item) => (
              <article key={item.label} className="credential-card">
                <p className="credential-card__label">{item.label}</p>
                <p className="credential-card__value">{item.value}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Workshop Standards</p>
            <h2>How we maintain quality across every service stage</h2>
          </header>

          <div className="standards-grid">
            {standards.map((standard) => (
              <article key={standard.title} className="standard-card">
                <h3>{standard.title}</h3>
                <p>{standard.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Need a trusted second opinion on your watch condition?</h2>
            <div className="cta-band__actions">
              <ButtonLink to="/contact" size="lg">
                Book a Service Assessment
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
