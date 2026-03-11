import { Link } from "react-router-dom";
import { ButtonLink } from "../components/ui/Button";

const metrics = [
  {
    label: "Years in Service",
    value: "14+",
    detail: "Established in London with a focus on mechanical timepieces."
  },
  {
    label: "Watches Serviced",
    value: "6,800+",
    detail: "Across routine maintenance, repairs, and restoration work."
  },
  {
    label: "Average Client Rating",
    value: "4.9/5",
    detail: "Based on post-service feedback forms and verified reviews."
  },
  {
    label: "Service Warranty",
    value: "12 Months",
    detail: "Applied to covered workmanship and replaced service parts."
  }
];

const services = [
  {
    name: "Full Mechanical Service",
    description:
      "Complete movement service with cleaning, lubrication, regulation, and performance checks.",
    price: "From GBP 320",
    turnaround: "10-15 working days"
  },
  {
    name: "Battery and Seal Service",
    description:
      "Battery replacement, gasket renewal, and water-resistance test for quartz models.",
    price: "From GBP 85",
    turnaround: "1-2 working days"
  },
  {
    name: "Crystal Replacement",
    description:
      "Damaged crystal replacement with pressure and finish checks after fitment.",
    price: "From GBP 140",
    turnaround: "3-6 working days"
  },
  {
    name: "Bracelet and Case Refinement",
    description:
      "Controlled polishing and refinishing to improve appearance without over-restoration.",
    price: "From GBP 110",
    turnaround: "4-7 working days"
  }
];

const processSteps = [
  {
    title: "Intake",
    detail: "We document condition, discuss symptoms, and confirm your priorities."
  },
  {
    title: "Diagnostic",
    detail: "Movement and case components are inspected before any work is quoted."
  },
  {
    title: "Approval",
    detail: "You receive a clear estimate and timeline before service starts."
  },
  {
    title: "Service and QA Return",
    detail: "Work is completed, tested, and returned with service notes."
  }
];

const testimonials = [
  {
    quote:
      "Clear communication from start to finish. My Omega now runs consistently and came back cleaner than expected.",
    name: "Daniel R.",
    context: "Omega Seamaster owner",
    rating: "5/5"
  },
  {
    quote:
      "They explained exactly what needed attention and what did not. No upselling, just careful technical work.",
    name: "Maya T.",
    context: "Tudor Black Bay owner",
    rating: "5/5"
  },
  {
    quote:
      "Fast battery and seal service with proper pressure test documentation. Professional at every touchpoint.",
    name: "Peter L.",
    context: "TAG Heuer Formula 1 owner",
    rating: "4.9/5"
  }
];

export function HomePage() {
  return (
    <div className="home-page">
      <section className="section hero hero--home">
        <div className="container hero__grid">
          <div className="hero__content">
            <p className="kicker">London Watch Service Studio</p>
            <h1 className="hero__title">Your Watch, Restored With Workshop-Level Precision</h1>
            <p className="hero__lead">
              We service and repair mechanical, automatic, and luxury watches with clear diagnostics,
              approved estimates, and careful handover.
            </p>
            <div className="hero__actions">
              <ButtonLink to="/contact" size="lg">
                Book a Service Assessment
              </ButtonLink>
              <a href="tel:+442039842187" className="btn btn--secondary btn--lg">
                Call the Workshop
              </a>
            </div>
          </div>

          <aside className="hero__visual" aria-label="Workshop detail preview">
            <div className="hero-panel">
              <div className="hero-panel__dial" aria-hidden="true">
                <span className="hero-panel__dial-center" />
              </div>
              <div className="hero-panel__meta">
                <p>Guaranteed response in under 1 business day</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Trust Metrics</p>
            <h2>Why owners trust ChronoCare Atelier</h2>
            <p>
              Specialist handling, transparent process, and measured quality checks at every stage.
            </p>
          </header>

          <div className="metric-grid">
            {metrics.map((metric) => (
              <article key={metric.label} className="metric-card">
                <p className="metric-card__label">{metric.label}</p>
                <p className="metric-card__value">{metric.value}</p>
                <p className="metric-card__detail">{metric.detail}</p>
              </article>
            ))}
          </div>
          <p className="section-note">Figures updated quarterly from internal service records.</p>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Core Services</p>
            <h2>Services built around long-term watch health</h2>
            <p>
              Choose the level of service you need now, and we will confirm final scope after diagnostic
              inspection.
            </p>
          </header>

          <div className="service-grid service-grid--snapshot">
            {services.map((service) => (
              <article key={service.name} className="service-card">
                <h3>{service.name}</h3>
                <p>{service.description}</p>
                <dl className="service-card__meta">
                  <div>
                    <dt>Starting from</dt>
                    <dd>{service.price}</dd>
                  </div>
                  <div>
                    <dt>Turnaround</dt>
                    <dd>{service.turnaround}</dd>
                  </div>
                </dl>
              </article>
            ))}
          </div>

          <div className="section-action">
            <ButtonLink to="/services" variant="secondary">
              View All Services
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Process Preview</p>
            <h2>A clear service process from intake to return</h2>
            <p>No hidden work, no vague updates, and no service begins without your approval.</p>
          </header>

          <ol className="timeline timeline--compact">
            {processSteps.map((step, index) => (
              <li key={step.title} className="timeline__item">
                <span className="timeline__index">0{index + 1}</span>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
              </li>
            ))}
          </ol>

          <div className="section-action">
            <ButtonLink to="/process" variant="secondary">
              See Full Service Process
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Client Feedback</p>
            <h2>What clients say after service</h2>
            <p>Feedback from owners who trusted us with daily-wear and collector watches.</p>
          </header>

          <div className="testimonial-grid">
            {testimonials.map((item) => (
              <article key={item.name} className="quote-card">
                <p className="quote-card__text">“{item.quote}”</p>
                <p className="quote-card__author">{item.name}</p>
                <p className="quote-card__context">{item.context}</p>
                <p className="quote-card__rating">{item.rating}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <p className="kicker">Ready to Begin</p>
            <h2>Ready to have your watch assessed by a specialist?</h2>
            <p>
              Send us your watch details and we will confirm next steps with a transparent estimate and
              realistic timeline.
            </p>
            <div className="cta-band__actions">
              <ButtonLink to="/contact" size="lg">
                Book a Service Assessment
              </ButtonLink>
              <Link to="/contact" className="text-link">
                Request a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
