export type SiteRoute = {
  path: string;
  label: string;
  nav: boolean;
};

export const ROUTES: SiteRoute[] = [
  { path: "/", label: "Home", nav: true },
  { path: "/services", label: "Services", nav: true },
  { path: "/process", label: "Service Process", nav: true },
  { path: "/about", label: "About", nav: true },
  { path: "/contact", label: "Contact", nav: true }
];

export const PRIMARY_CTA = {
  label: "Book a Service Assessment",
  path: "/contact"
};
