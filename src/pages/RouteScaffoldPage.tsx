import { Card } from "../components/ui/Card";
import { SectionHeading } from "../components/ui/SectionHeading";

type SectionItem = {
  name: string;
  notes: string;
};

type RouteScaffoldPageProps = {
  pageTitle: string;
  pageGoal: string;
  pageEyebrow: string;
  sections: SectionItem[];
};

export function RouteScaffoldPage({
  pageTitle,
  pageGoal,
  pageEyebrow,
  sections
}: RouteScaffoldPageProps) {
  return (
    <section className="section section--scaffold">
      <div className="container">
        <SectionHeading eyebrow={pageEyebrow} title={pageTitle} subtitle={pageGoal} />

        <div className="grid grid--cards">
          {sections.map((section) => (
            <Card key={section.name} title={section.name} description={section.notes} />
          ))}
        </div>
      </div>
    </section>
  );
}
