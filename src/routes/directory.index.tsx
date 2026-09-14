import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHeader } from "@/components/SiteChrome";
import {
  allTags,
  characters,
  earths,
  getEarth,
  mediumLabel,
  type Medium,
} from "@/data/spiderverse";

export const Route = createFileRoute("/directory/")({
  head: () => ({
    meta: [
      { title: "Spider-People Directory — The Branching Web" },
      {
        name: "description",
        content:
          "Browse every Spider-variant in this reference, filterable by Earth, by medium (comics, animated, live-action) and by tag, each with its own detail page.",
      },
      { property: "og:title", content: "Spider-People Directory" },
      {
        property: "og:description",
        content: "Filter Spider-variants by universe, medium and tag across the multiverse.",
      },
    ],
  }),
  component: Directory,
});

const media: Medium[] = ["comics", "animated", "live-action"];

function Directory() {
  const [earth, setEarth] = useState<string>("all");
  const [medium, setMedium] = useState<string>("all");
  const [tag, setTag] = useState<string>("all");
  const [query, setQuery] = useState("");

  const results = useMemo(
    () =>
      characters.filter((c) => {
        if (earth !== "all" && c.earth !== earth) return false;
        if (medium !== "all" && !c.media.includes(medium as Medium)) return false;
        if (tag !== "all" && !c.tags.includes(tag)) return false;
        if (query.trim()) {
          const q = query.toLowerCase();
          const haystack = `${c.name} ${c.alias} ${c.realName} ${c.earth}`.toLowerCase();
          if (!haystack.includes(q)) return false;
        }
        return true;
      }),
    [earth, medium, tag, query],
  );

  const chip = (active: boolean) =>
    `rounded-full border px-3 py-1 font-mono text-[0.65rem] uppercase tracking-[0.18em] transition-colors ${
      active
        ? "border-accent bg-accent/15 text-foreground"
        : "border-border text-muted-foreground hover:text-foreground"
    }`;

  return (
    <>
      <PageHeader
        eyebrow="Directory"
        title="SPIDER-PEOPLE"
        intro="Every variant tracked on this site, with the universe they come from and where you can find them. Filter by Earth, medium or tag."
      />

      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="ink-panel rounded-lg p-5">
          <label className="block">
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
              Search
            </span>
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Name, alias or Earth…"
              className="mt-2 w-full rounded-md border border-input bg-background/70 px-3 py-2 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-accent"
            />
          </label>

          <div className="mt-5 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                Earth
              </span>
              <button type="button" className={chip(earth === "all")} onClick={() => setEarth("all")}>
                All
              </button>
              {earths.map((e) => (
                <button
                  key={e.id}
                  type="button"
                  className={chip(earth === e.id)}
                  onClick={() => setEarth(e.id)}
                >
                  {e.designation}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                Medium
              </span>
              <button
                type="button"
                className={chip(medium === "all")}
                onClick={() => setMedium("all")}
              >
                All
              </button>
              {media.map((m) => (
                <button
                  key={m}
                  type="button"
                  className={chip(medium === m)}
                  onClick={() => setMedium(m)}
                >
                  {mediumLabel[m]}
                </button>
              ))}
            </div>

            <div className="flex flex-wrap items-center gap-2">
              <span className="mr-1 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-muted-foreground">
                Tags
              </span>
              <button type="button" className={chip(tag === "all")} onClick={() => setTag("all")}>
                All
              </button>
              {allTags.map((t) => (
                <button key={t} type="button" className={chip(tag === t)} onClick={() => setTag(t)}>
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-6 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          {results.length} of {characters.length} shown
        </p>

        <ul className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((c) => {
            const e = getEarth(c.earth);
            return (
              <li key={c.id}>
                <Link
                  to="/directory/$characterId"
                  params={{ characterId: c.id }}
                  className="ink-panel hover-lift group relative block h-full overflow-hidden rounded-lg p-5"
                >
                  <div
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-0.5"
                    style={{ backgroundColor: e?.hex }}
                  />
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-accent">
                        {e?.designation}
                      </p>
                      <h2 className="mt-1.5 text-3xl leading-none">{c.alias}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{c.name}</p>
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 size-3 shrink-0 rounded-full animate-pulse-node"
                      style={{ backgroundColor: e?.hex, boxShadow: `0 0 14px ${e?.hex}` }}
                    />
                  </div>
                  <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                    {c.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {c.media.map((m) => (
                      <span
                        key={m}
                        className="rounded border border-border px-2 py-0.5 font-mono text-[0.6rem] uppercase tracking-[0.15em] text-foreground/70"
                      >
                        {mediumLabel[m]}
                      </span>
                    ))}
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>

        {results.length === 0 && (
          <p className="mt-10 text-center text-sm text-muted-foreground">
            No one in this corner of the multiverse matches those filters.
          </p>
        )}
      </div>
    </>
  );
}
