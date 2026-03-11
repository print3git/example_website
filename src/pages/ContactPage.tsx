import { type ChangeEvent, type FormEvent, useState } from "react";

type ContactFormData = {
  fullName: string;
  email: string;
  phone: string;
  watchModel: string;
  serviceNeeded: string;
  issueDescription: string;
  preferredDate: string;
  consent: boolean;
};

type FieldErrors = Partial<Record<keyof ContactFormData, string>>;

const SERVICE_OPTIONS = [
  "Full Mechanical Service",
  "Quartz Battery and Seal Service",
  "Crystal Replacement",
  "Bracelet and Case Refinement",
  "Not Sure - Need Advice"
];

const CONTACT_METHODS = [
  {
    label: "Workshop Phone",
    value: "+44 20 3984 2187",
    supporting: "Mon-Fri 9:00-18:00",
    href: "tel:+442039842187"
  },
  {
    label: "Service Enquiries",
    value: "hello@chronocareatelier.co.uk",
    supporting: "Typical reply within one business day",
    href: "mailto:hello@chronocareatelier.co.uk"
  },
  {
    label: "Workshop Location",
    value: "18 Bridle Lane, Clerkenwell, London EC1M 5RA",
    supporting: "By appointment preferred",
    href: "https://maps.google.com/?q=18+Bridle+Lane,+Clerkenwell,+London+EC1M+5RA"
  },
  {
    label: "Opening Hours",
    value: "Mon-Fri 9:00-18:00, Sat 10:00-15:00, Sun Closed",
    supporting: "Closed on bank holidays",
    href: ""
  }
];

const INITIAL_FORM: ContactFormData = {
  fullName: "",
  email: "",
  phone: "",
  watchModel: "",
  serviceNeeded: "",
  issueDescription: "",
  preferredDate: "",
  consent: false
};

function validateContactForm(values: ContactFormData): FieldErrors {
  const errors: FieldErrors = {};
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const phoneDigits = values.phone.replace(/[^\d]/g, "");

  if (!values.fullName.trim()) {
    errors.fullName = "Please enter your full name.";
  }

  if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email address so we can send your estimate.";
  }

  if (phoneDigits.length < 9) {
    errors.phone = "Enter a valid phone number.";
  }

  if (!values.watchModel.trim()) {
    errors.watchModel = "Please share your watch brand and model.";
  }

  if (!values.serviceNeeded) {
    errors.serviceNeeded = "Select a service option.";
  }

  if (!values.issueDescription.trim()) {
    errors.issueDescription = "Add a short description of the issue.";
  }

  if (!values.preferredDate) {
    errors.preferredDate = "Choose your preferred appointment date.";
  }

  if (!values.consent) {
    errors.consent = "Please confirm consent so we can contact you about your enquiry.";
  }

  return errors;
}

export function ContactPage() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  function handleInputChange(event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
    setErrors((current) => ({ ...current, [name]: undefined }));
    setSubmitStatus("idle");
  }

  function handleConsentChange(event: ChangeEvent<HTMLInputElement>) {
    setFormData((current) => ({ ...current, consent: event.target.checked }));
    setErrors((current) => ({ ...current, consent: undefined }));
    setSubmitStatus("idle");
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const validationErrors = validateContactForm(formData);
    setErrors(validationErrors);
    setSubmitStatus("idle");

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    setIsSubmitting(true);

    try {
      await new Promise((resolve) => {
        window.setTimeout(resolve, 700);
      });

      // Deterministic failure path for UI testing (e.g., john+fail@example.com).
      if (formData.email.toLowerCase().includes("+fail")) {
        throw new Error("Simulated submission failure");
      }

      setSubmitStatus("success");
      setFormData(INITIAL_FORM);
      setErrors({});
    } catch {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="contact-page">
      <section className="section page-hero">
        <div className="container page-hero__inner">
          <p className="kicker">Contact / Booking</p>
          <h1>Request your watch service assessment</h1>
          <p>
            Send us your watch details and issue. We reply within one business day with next steps and
            expected timing.
          </p>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container booking-layout">
          <article className="form-card">
            <header className="section-head">
              <p className="kicker">Booking Form</p>
              <h2>Send your service request</h2>
              <p>Use this form for service assessments, quote requests, or pre-drop-off checks.</p>
            </header>

            <form className="booking-form" noValidate onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="form-field">
                  <label htmlFor="fullName" className="form-field__label">
                    Full name
                  </label>
                  <input
                    id="fullName"
                    name="fullName"
                    className={`input ${errors.fullName ? "input--error" : ""}`.trim()}
                    placeholder="Your full name"
                    autoComplete="name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.fullName)}
                    aria-describedby={errors.fullName ? "fullName-error" : undefined}
                  />
                  {errors.fullName ? (
                    <p id="fullName-error" className="form-field__error">
                      {errors.fullName}
                    </p>
                  ) : null}
                </div>

                <div className="form-field">
                  <label htmlFor="email" className="form-field__label">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className={`input ${errors.email ? "input--error" : ""}`.trim()}
                    placeholder="you@example.com"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? "email-error" : undefined}
                  />
                  {errors.email ? (
                    <p id="email-error" className="form-field__error">
                      {errors.email}
                    </p>
                  ) : null}
                </div>

                <div className="form-field">
                  <label htmlFor="phone" className="form-field__label">
                    Phone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    className={`input ${errors.phone ? "input--error" : ""}`.trim()}
                    placeholder="+44 7XXX XXXXXX"
                    autoComplete="tel"
                    value={formData.phone}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.phone)}
                    aria-describedby={errors.phone ? "phone-error" : undefined}
                  />
                  {errors.phone ? (
                    <p id="phone-error" className="form-field__error">
                      {errors.phone}
                    </p>
                  ) : null}
                </div>

                <div className="form-field">
                  <label htmlFor="watchModel" className="form-field__label">
                    Watch brand and model
                  </label>
                  <input
                    id="watchModel"
                    name="watchModel"
                    className={`input ${errors.watchModel ? "input--error" : ""}`.trim()}
                    placeholder="e.g., Omega Seamaster Diver 300M"
                    value={formData.watchModel}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.watchModel)}
                    aria-describedby={errors.watchModel ? "watchModel-error" : undefined}
                  />
                  {errors.watchModel ? (
                    <p id="watchModel-error" className="form-field__error">
                      {errors.watchModel}
                    </p>
                  ) : null}
                </div>

                <div className="form-field">
                  <label htmlFor="serviceNeeded" className="form-field__label">
                    Service needed
                  </label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    className={`input input--select ${errors.serviceNeeded ? "input--error" : ""}`.trim()}
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.serviceNeeded)}
                    aria-describedby={errors.serviceNeeded ? "serviceNeeded-error" : undefined}
                  >
                    <option value="">Select a service</option>
                    {SERVICE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.serviceNeeded ? (
                    <p id="serviceNeeded-error" className="form-field__error">
                      {errors.serviceNeeded}
                    </p>
                  ) : null}
                </div>

                <div className="form-field">
                  <label htmlFor="preferredDate" className="form-field__label">
                    Preferred appointment date
                  </label>
                  <input
                    id="preferredDate"
                    name="preferredDate"
                    type="date"
                    className={`input ${errors.preferredDate ? "input--error" : ""}`.trim()}
                    value={formData.preferredDate}
                    onChange={handleInputChange}
                    aria-invalid={Boolean(errors.preferredDate)}
                    aria-describedby={errors.preferredDate ? "preferredDate-error" : undefined}
                  />
                  {errors.preferredDate ? (
                    <p id="preferredDate-error" className="form-field__error">
                      {errors.preferredDate}
                    </p>
                  ) : null}
                </div>
              </div>

              <div className="form-field">
                <label htmlFor="issueDescription" className="form-field__label">
                  Issue description
                </label>
                <textarea
                  id="issueDescription"
                  name="issueDescription"
                  className={`input input--textarea ${errors.issueDescription ? "input--error" : ""}`.trim()}
                  placeholder="Describe the issue, recent behaviour, and when it started."
                  value={formData.issueDescription}
                  onChange={handleInputChange}
                  aria-invalid={Boolean(errors.issueDescription)}
                  aria-describedby={errors.issueDescription ? "issueDescription-error" : undefined}
                />
                {errors.issueDescription ? (
                  <p id="issueDescription-error" className="form-field__error">
                    {errors.issueDescription}
                  </p>
                ) : null}
              </div>

              <div className="consent-row">
                <input
                  id="consent"
                  name="consent"
                  type="checkbox"
                  checked={formData.consent}
                  onChange={handleConsentChange}
                  aria-invalid={Boolean(errors.consent)}
                  aria-describedby={errors.consent ? "consent-error" : "consent-text"}
                />
                <label htmlFor="consent" id="consent-text">
                  By submitting this form, you agree to be contacted about your watch service enquiry. We use
                  your details only for service communication.
                </label>
              </div>
              {errors.consent ? (
                <p id="consent-error" className="form-field__error form-field__error--consent">
                  {errors.consent}
                </p>
              ) : null}

              <div className="booking-form__actions">
                <button type="submit" className="btn btn--primary btn--lg" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit Assessment Request"}
                </button>
              </div>

              {submitStatus === "success" ? (
                <p className="form-status form-status--success" role="status" aria-live="polite">
                  Thank you. Your request has been received. We will respond within one business day with next
                  steps.
                </p>
              ) : null}

              {submitStatus === "error" ? (
                <p className="form-status form-status--error" role="alert">
                  Your request could not be submitted right now. Please try again or contact us directly by
                  phone.
                </p>
              ) : null}
            </form>
          </article>

          <aside className="contact-methods" aria-label="Direct contact methods">
            <header className="section-head">
              <p className="kicker">Direct Contact Methods</p>
              <h2>Prefer to reach us directly?</h2>
            </header>

            <div className="contact-methods__grid">
              {CONTACT_METHODS.map((method) => (
                <article key={method.label} className="contact-method-card">
                  <p className="contact-method-card__label">{method.label}</p>
                  {method.href ? (
                    <a
                      href={method.href}
                      className="contact-method-card__value"
                      target={method.href.startsWith("http") ? "_blank" : undefined}
                      rel={method.href.startsWith("http") ? "noreferrer" : undefined}
                    >
                      {method.value}
                    </a>
                  ) : (
                    <p className="contact-method-card__value">{method.value}</p>
                  )}
                  <p className="contact-method-card__support">{method.supporting}</p>
                </article>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="container location-grid">
          <article className="map-card" aria-label="Location context">
            <p className="kicker">Location and Visit Notes</p>
            <h2>Workshop location</h2>
            <p>18 Bridle Lane, Clerkenwell, London EC1M 5RA</p>
            <p className="map-card__meta">
              We are a 6-minute walk from Farringdon Station. Short-stay parking is available on Bridle
              Lane and nearby side streets.
            </p>
            <a
              className="btn btn--secondary btn--md"
              href="https://maps.google.com/?q=18+Bridle+Lane,+Clerkenwell,+London+EC1M+5RA"
              target="_blank"
              rel="noreferrer"
            >
              Open in Maps
            </a>
          </article>

          <article className="visit-card">
            <p className="kicker">Drop-off Guidance</p>
            <h3>What to bring</h3>
            <p>
              Bring the watch and any relevant service history if available. We will complete condition
              logging with you at intake.
            </p>
            <div className="visit-card__chip-row">
              <span>By appointment preferred</span>
              <span>Initial response within one business day</span>
            </div>
          </article>
        </div>
      </section>

      <section className="section section--tinted">
        <div className="container">
          <div className="reassurance-card">
            <p className="kicker">Final Reassurance</p>
            <h2>What happens after you submit</h2>
            <ul>
              <li>Every enquiry starts with assessment and a clear estimate.</li>
              <li>No paid service work begins until you approve scope and price.</li>
              <li>Initial response within one business day.</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
