import type { ReactNode } from "react";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
};

export function SectionHeading({ eyebrow, title, subtitle, actions }: SectionHeadingProps) {
  return (
    <header className="section-heading">
      {eyebrow ? <p className="section-heading__eyebrow">{eyebrow}</p> : null}
      <h2 className="section-heading__title">{title}</h2>
      {subtitle ? <p className="section-heading__subtitle">{subtitle}</p> : null}
      {actions ? <div className="section-heading__actions">{actions}</div> : null}
    </header>
  );
}
