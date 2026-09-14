import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  characters,
  getCharacter,
  getEarth,
  mediumLabel,
  movies,
  timelineEvents,
} from "@/data/spiderverse";

export const Route = createFileRoute("/directory/$characterId")({
  loader: ({ params }) => {
    const character = getCharacter(params.characterId);
    if (!character) throw notFound();
    return { character };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Character not found — The Branching Web" }, { name: "robots", content: "noindex" }],
      };
    }
    const { character } = loaderData;
    const title = `${character.alias} (${character.name}) — The Branching Web`;
    return {
      meta: [
        { title },
        { name: "description", content: character.description },
        { property: "og:title", content: title },
        { property: "og:description", content: character.description },
      ],
    };
  },
  component: CharacterDetail,
});

function CharacterDetail() {
  const { character } = Route.useLoaderData();
  const earth = getEarth(character.earth);
  const events = timelineEvents.filter((e) => e.characters.includes(character.id));
  const films = movies.filter((m) => m.characters.includes(character.id));
  const related = character.related.map(getCharacter).filter(Boolean);

  return (
    <>
      <div className="void-wash relative border-b border-border/60">
        <div
          aria-hidden
          className="absolute inset-x-0 top-0 h-1"
          style={{ backgroundColor: earth?.hex }}
        />
        <div className="mx-auto max-w-7xl px-4 pb-10 pt-12 sm:px-6">
          <Link
            to="/directory"
            className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent hover:underline"
          >
            ← Directory
          </Link>
          <p className="mt-6 font-mono text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
            {earth?.designation}
          </p>
          <h1 className="mt-2 text-6xl leading-[0.9] text-glow sm:text-7xl">{character.alias}</h1>
          <p className="mt-2 text-lg text-muted-foreground">
            {character.name} · {character.realName}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {character.media.map((m) => (
              <span
                key={m}
                className="rounded border border-border px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground/75"
              >
                {mediumLabel[m]}
              </span>
            ))}
            {character.tags.map((t) => (
              <span
                key={t}
                className="rounded border border-accent/40 bg-accent/10 px-2.5 py-1 font-mono text-[0.6rem] uppercase tracking-[0.18em] text-foreground/85"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto grid max-w-7xl gap-4 px-4 py-12 sm:px-6 lg:grid-cols-3">
        <section className="ink-panel rounded-lg p-6 lg:col-span-2">
          <h2 className="text-3xl leading-none">WHO THEY ARE</h2>
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">
            {character.description}
          </p>
          <dl className="mt-6 grid gap-4 sm:grid-cols-2">
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-accent">
                First appearance
              </dt>
              <dd className="mt-1 text-sm text-foreground/85">{character.firstAppearance}</dd>
            </div>
            <div>
              <dt className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-accent">
                Home universe
              </dt>
              <dd className="mt-1 text-sm text-foreground/85">{earth?.description}</dd>
            </div>
          </dl>
        </section>

        <section className="ink-panel rounded-lg p-6">
          <h2 className="text-3xl leading-none">ABILITIES</h2>
          <ul className="mt-3 space-y-2">
            {character.powers.map((p) => (
              <li key={p} className="flex items-center gap-2 text-sm text-muted-foreground">
                <span
                  aria-hidden
                  className="size-1.5 rounded-full"
                  style={{ backgroundColor: earth?.hex }}
                />
                {p}
              </li>
            ))}
          </ul>
        </section>

        <section className="ink-panel rounded-lg p-6 lg:col-span-2">
          <h2 className="text-3xl leading-none">STORY BRANCH POINTS</h2>
          {events.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">
              No comics events logged for this version yet.
            </p>
          ) : (
            <ul className="mt-4 space-y-4">
              {events.map((e) => (
                <li key={e.id} className="border-l-2 border-border pl-4">
                  <p className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-accent">
                    {e.dateRange}
                    {e.crossover ? " · crossover" : ""}
                  </p>
                  <p className="font-display text-2xl leading-none">{e.title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{e.summary}</p>
                </li>
              ))}
            </ul>
          )}
        </section>

        <section className="ink-panel rounded-lg p-6">
          <h2 className="text-3xl leading-none">ON SCREEN</h2>
          {films.length === 0 ? (
            <p className="mt-3 text-sm text-muted-foreground">Comics only, so far.</p>
          ) : (
            <ul className="mt-3 space-y-2">
              {films.map((m) => (
                <li key={m.id} className="text-sm text-muted-foreground">
                  <span className="text-foreground/90">{m.title}</span> · {m.year}
                </li>
              ))}
            </ul>
          )}

          <h3 className="mt-6 font-display text-2xl leading-none">RELATED</h3>
          <div className="mt-3 flex flex-wrap gap-1.5">
            {related.map((r) => (
              <Link
                key={r!.id}
                to="/directory/$characterId"
                params={{ characterId: r!.id }}
                className="rounded border border-border px-2 py-1 text-xs text-foreground/80 hover:border-accent"
              >
                {r!.alias} · {r!.name}
              </Link>
            ))}
          </div>
        </section>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-6 sm:px-6">
        <p className="font-mono text-[0.65rem] uppercase tracking-[0.25em] text-muted-foreground">
          {characters.length} variants in the directory
        </p>
      </div>
    </>
  );
}
