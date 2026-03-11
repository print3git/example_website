import { Link } from "react-router-dom";
import { ROUTES } from "../../lib/routes";

const CONTACT = {
  phoneDisplay: "+44 20 3984 2187",
  phoneHref: "tel:+442039842187",
  email: "hello@chronocareatelier.co.uk",
  address: "18 Bridle Lane, Clerkenwell, London EC1M 5RA"
};

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__heading">ChronoCare Atelier</p>
          <p className="site-footer__text">Precision watch repair and maintenance.</p>
          <p className="site-footer__text">Mon-Fri 9:00-18:00, Sat 10:00-15:00</p>
        </div>

        <nav aria-label="Footer" className="site-footer__nav">
          {ROUTES.filter((route) => route.nav).map((route) => (
            <Link key={route.path} to={route.path} className="site-footer__link">
              {route.label}
            </Link>
          ))}
        </nav>

        <div className="site-footer__contact">
          <a href={CONTACT.phoneHref} className="site-footer__link">
            {CONTACT.phoneDisplay}
          </a>
          <a href={`mailto:${CONTACT.email}`} className="site-footer__link">
            {CONTACT.email}
          </a>
          <p className="site-footer__text">{CONTACT.address}</p>
        </div>
      </div>
    </footer>
  );
}
