import type { ReactNode } from "react";

type CardTone = "default" | "muted";

type CardProps = {
  title: string;
  description?: string;
  tone?: CardTone;
  children?: ReactNode;
};

export function Card({ title, description, tone = "default", children }: CardProps) {
  return (
    <article className={`card card--${tone}`}>
      <h3 className="card__title">{title}</h3>
      {description ? <p className="card__description">{description}</p> : null}
      {children}
    </article>
  );
}
