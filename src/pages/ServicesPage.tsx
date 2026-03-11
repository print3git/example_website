import { ButtonLink } from "../components/ui/Button";

const serviceDetails = [
  {
    name: "Full Mechanical Service",
    bestFor:
      "Irregular timekeeping, reduced power reserve, overdue maintenance, and dry movement behavior.",
    included: [
      "Full movement disassembly and inspection",
      "Ultrasonic cleaning of movement components",
      "Lubrication to manufacturer-grade standards",
      "Reassembly, regulation, and timing checks",
      "Case and gasket inspection"
    ],
    excluded:
      "Replacement crowns, crystals, and major component fabrication are quoted separately if required.",
    price: "GBP 320-GBP 690",
    turnaround: "10-15 working days"
  },
  {
    name: "Quartz Battery and Seal Service",
    bestFor: "Stopped watch, intermittent function, and moisture concerns after battery life end.",
    included: [
      "Battery replacement",
      "Gasket inspection and replacement where needed",
      "Contact point cleaning",
      "Water-resistance pressure test (where case design supports it)"
    ],
    excluded:
      "Damaged crowns, cracked crystals, and corroded movement modules are scoped separately.",
    price: "GBP 85-GBP 160",
    turnaround: "1-2 working days"
  },
  {
    name: "Crystal Replacement",
    bestFor: "Cracked, chipped, scratched, or compromised crystal integrity.",
    included: [
      "Crystal removal and case-seat preparation",
      "New crystal fitment and sealing",
      "Alignment and visual finish checks",
      "Pressure test where applicable"
    ],
    excluded: "Dial restoration and hand replacement are not part of this service.",
    price: "GBP 140-GBP 340",
    turnaround: "3-6 working days"
  },
  {
    name: "Bracelet and Case Refinement",
    bestFor: "Surface wear, light scratches, uneven finish, and clasp stiffness.",
    included: [
      "Controlled refinishing of case and bracelet surfaces",
      "Edge definition preservation checks",
      "Clasp adjustment and function check",
      "Final clean and visual QA"
    ],
    excluded: "Deep dents, metal filling, and case laser work are quoted separately.",
    price: "GBP 110-GBP 290",
    turnaround: "4-7 working days"
  }
];

const faqItems = [
  {
    question: "Do you begin work before I approve the quote?",
    answer: "No. We assess the watch, send the estimate, and wait for approval before beginning service."
  },
  {
    question: "What warranty do you provide?",
    answer: "We provide a 12-month workmanship warranty on covered service work and replaced service parts."
  },
  {
    question: "Do you test water resistance after seal-related work?",
    answer:
      "Yes, where the watch case design supports pressure testing. Results are included in your service notes."
  },
  {
    question: "Do you only use genuine parts?",
    answer:
      "We prioritise genuine manufacturer parts where available. If unavailable, we explain equivalent options before any decision."
  },
  {
    question: "Can I decline service after diagnostic inspection?",
    answer:
      "Yes. You can decline after receiving your estimate. A diagnostic bench fee may apply depending on complexity."
  },
  {
    question: "How often should a mechanical watch be serviced?",
    answer:
      "Most mechanical watches benefit from service every 4-6 years, depending on usage and manufacturer guidance."
  },
  {
    question: "Can you remove all scratches during refinishing?",
    answer:
      "We focus on controlled refinishing that protects case geometry; not every deep mark can be safely removed."
  },
  {
    question: "Do you service vintage watches?",
    answer: "Yes, case by case. We assess parts risk and service suitability before confirming scope."
  }
];

export function ServicesPage() {
  return (
    <div className="services-page">
      <section className="section page-hero">
        <div className="container page-hero__inner">
          <p className="kicker">Services</p>
          <h1>Specialist watch servicing with transparent scope and pricing</h1>
          <p>
            Every watch is first assessed, then quoted. You approve the work before service begins, so you
            always know what is being done and why.
          </p>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <header className="section-head">
            <p className="kicker">Detailed Services</p>
            <h2>Compare service scope, inclusions, and turnaround</h2>
          </header>

          <div className="service-grid service-grid--detail">
            {serviceDetails.map((service) => (
              <article key={service.name} className="service-card service-card--detail">
                <h3>{service.name}</h3>
                <p className="service-card__bestfor">
                  <strong>Best for:</strong> {service.bestFor}
                </p>

                <h4>Included work</h4>
                <ul className="check-list">
                  {service.included.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <p className="service-card__excluded">
                  <strong>Not included:</strong> {service.excluded}
                </p>

                <dl className="service-card__meta">
                  <div>
                    <dt>Starting range</dt>
                    <dd>{service.price}</dd>
                  </div>
                  <div>
                    <dt>Typical turnaround</dt>
                    <dd>{service.turnaround}</dd>
                  </div>
                </dl>

                <ButtonLink to="/contact" variant="secondary" size="sm">
                  Request Quote
                </ButtonLink>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <header className="section-head">
            <p className="kicker">FAQ</p>
            <h2>Common service questions</h2>
          </header>

          <div className="faq-list">
            {faqItems.map((item) => (
              <details key={item.question} className="faq-item">
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Tell us your watch model and issue, and we will recommend the right service path.</h2>
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
