import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHeader } from "@/components/SiteChrome";
import { BranchLegend } from "@/components/MultiverseStage";

export const Route = createFileRoute("/what-is-the-spider-verse")({
  head: () => ({
    meta: [
      { title: "What Is the Spider-Verse? — The Branching Web" },
      {
        name: "description",
        content:
          "A short explainer on the Spider-Verse multiverse concept, why so many Spider-People exist, and how the Earth-### numbering system labels each universe.",
      },
      { property: "og:title", content: "What Is the Spider-Verse?" },
      {
        property: "og:description",
        content:
          "The multiverse concept explained, plus how Earth-### designations keep every parallel world straight.",
      },
    ],
  }),
  component: WhatIsIt,
});

const sections = [
  {
    title: "ONE STORY, RE-TOLD FOREVER",
    body: "A spider bites someone; power arrives with a cost. That premise has been re-told for six decades by different writers, in different decades, for different readers. Rather than throw old versions away, the comics decided that all of them happened — each in its own universe.",
  },
  {
    title: "SO WHAT IS 'THE SPIDER-VERSE'?",
    body: "It's the name for the whole set of those versions taken together, and for the stories where they meet. When a crossover pulls a noir detective, a mech pilot, a cartoon pig and two teenagers into the same room, the joke and the point are the same: the mask fits anybody.",
  },
  {
    title: "READING 'EARTH-###'",
    body: "Every parallel world gets a numeric designation. Earth-616 is the mainstream continuity; Earth-1610 is the restarted Ultimate line; Earth-65 is Gwen Stacy's world. The numbers are labels, not rankings — a low number doesn't mean an earlier or more important universe.",
  },
  {
    title: "WHY BRANCHES, NOT A LIST",
    body: "A flat list hides the shape. Most alternate Earths are recognisably a divergence from the main line: one decision, one death, one decade changed. Drawing them as branches off a trunk shows where each split happened, and crossovers become what they actually are — moments where two branches briefly touch.",
  },
];

function WhatIsIt() {
  return (
    <>
      <PageHeader
        eyebrow="The concept"
        title="WHAT IS THE SPIDER-VERSE"
        intro="If you're new to the idea of a multiverse full of Spider-People, start here. Four short answers, then the map."
      />

      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="grid gap-4 md:grid-cols-2">
          {sections.map((section, i) => (
            <article key={section.title} className="ink-panel rounded-lg p-6">
              <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent">
                {String(i + 1).padStart(2, "0")}
              </p>
              <h2 className="mt-2 text-3xl leading-none">{section.title}</h2>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{section.body}</p>
            </article>
          ))}
        </div>

        <h2 className="mt-16 text-4xl leading-none">THE UNIVERSES ON THIS SITE</h2>
        <div className="mt-6">
          <BranchLegend />
        </div>

        <div className="mt-12 flex flex-wrap gap-3">
          <Link
            to="/directory"
            className="rounded-full bg-primary px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-primary-foreground"
          >
            Meet the spider-people
          </Link>
          <Link
            to="/timeline"
            className="rounded-full border border-border px-5 py-2.5 font-mono text-[0.7rem] uppercase tracking-[0.2em] text-foreground/85 hover:border-accent"
          >
            See the branching timeline
          </Link>
        </div>
      </div>
    </>
  );
}
