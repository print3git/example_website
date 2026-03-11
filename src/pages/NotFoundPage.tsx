import { ButtonLink } from "../components/ui/Button";

export function NotFoundPage() {
  return (
    <section className="section section--scaffold">
      <div className="container not-found">
        <p className="section-heading__eyebrow">404</p>
        <h1 className="not-found__title">Page not found</h1>
        <p className="not-found__text">
          This route does not exist in the current sitemap scaffold.
        </p>
        <ButtonLink to="/" variant="primary">
          Back to Home
        </ButtonLink>
      </div>
    </section>
  );
}
