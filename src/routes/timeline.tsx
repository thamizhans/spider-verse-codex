import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { MultiverseStage } from "@/components/MultiverseStage";
import { PageHeader } from "@/components/SiteChrome";
import { getCharacter, getEarth, timelineEvents } from "@/data/spiderverse";

export const Route = createFileRoute("/timeline")({
  head: () => ({
    meta: [
      { title: "Comics Timeline — The Branching Web" },
      {
        name: "description",
        content:
          "The full branching timeline of Spider-Verse comics events, from the first bite to the multiverse crossovers, in an explorable 3D view or a plain list.",
      },
      { property: "og:title", content: "Comics Timeline — The Branching Web" },
      {
        property: "og:description",
        content:
          "Explore Spider-Verse comics events as a branching 3D timeline, or read them as a straightforward chronological list.",
      },
    ],
  }),
  component: TimelinePage,
});

function TimelinePage() {
  const [view, setView] = useState<"3d" | "list">("3d");
  const ordered = [...timelineEvents].sort((a, b) => a.year - b.year);

  return (
    <>
      <PageHeader
        eyebrow="Comics timeline"
        title="THE WHOLE BRANCHING WEB"
        intro="Drag through the multiverse in 3D, or switch to the list view for the same events as plain text."
      />

      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
        <div
          role="tablist"
          aria-label="Timeline view"
          className="inline-flex rounded-full border border-border p-1"
        >
          {(["3d", "list"] as const).map((v) => (
            <button
              key={v}
              role="tab"
              aria-selected={view === v}
              type="button"
              onClick={() => setView(v)}
              className={`rounded-full px-4 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.2em] transition-colors ${
                view === v ? "bg-primary text-primary-foreground" : "text-muted-foreground"
              }`}
            >
              {v === "3d" ? "3D map" : "List view"}
            </button>
          ))}
        </div>
      </div>

      {view === "3d" ? (
        <div className="mx-auto max-w-7xl px-4 pb-16 sm:px-6">
          <MultiverseStage
            mode="page"
            className="h-[72vh] min-h-[520px] w-full rounded-xl border border-border"
          />
          <p className="mt-3 font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted-foreground">
            Click a branch to fly to it · hover a node for its title and year · click a node for the
            summary
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-4xl px-4 pb-16 sm:px-6">
          <ol className="relative border-l border-border pl-6">
            {ordered.map((e) => {
              const earth = getEarth(e.branch);
              const accent = e.crossover ? "#ffd9a0" : earth?.hex ?? "#ff3b5c";
              return (
                <li key={e.id} className="relative pb-10">
                  <span
                    aria-hidden
                    className="absolute -left-[1.9rem] top-1.5 size-3 rounded-full"
                    style={{ backgroundColor: accent, boxShadow: `0 0 12px ${accent}` }}
                  />
                  <p className="font-mono text-[0.62rem] uppercase tracking-[0.25em] text-accent">
                    {e.dateRange} · {earth?.designation ?? (e.crossover ? "Crossover" : e.branch)}
                  </p>
                  <h2 className="mt-1 text-3xl leading-none">{e.title}</h2>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                  {e.issues.length > 0 && (
                    <p className="mt-2 font-mono text-[0.62rem] uppercase tracking-[0.15em] text-muted-foreground">
                      {e.issues.join(" · ")}
                    </p>
                  )}
                  {e.characters.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {e.characters.map((id) => {
                        const c = getCharacter(id);
                        if (!c) return null;
                        return (
                          <Link
                            key={id}
                            to="/directory/$characterId"
                            params={{ characterId: id }}
                            className="rounded border border-border px-2 py-0.5 text-xs text-foreground/80 hover:border-accent"
                          >
                            {c.alias}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </li>
              );
            })}
          </ol>
        </div>
      )}
    </>
  );
}
