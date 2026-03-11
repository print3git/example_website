import { NavLink } from "react-router-dom";
import { PRIMARY_CTA, ROUTES } from "../../lib/routes";
import { ButtonLink } from "../ui/Button";

export function Header() {
  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <NavLink to="/" className="site-logo" aria-label="ChronoCare Atelier home">
          <span className="site-logo__mark" aria-hidden="true">
            CA
          </span>
          <span className="site-logo__text">ChronoCare Atelier</span>
        </NavLink>

        <nav aria-label="Primary" className="site-nav">
          {ROUTES.filter((route) => route.nav).map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              className={({ isActive }) =>
                `site-nav__link ${isActive ? "site-nav__link--active" : ""}`.trim()
              }
            >
              {route.label}
            </NavLink>
          ))}
        </nav>

        <ButtonLink to={PRIMARY_CTA.path} variant="primary" size="sm" className="site-header__cta">
          {PRIMARY_CTA.label}
        </ButtonLink>
      </div>
    </header>
  );
}
