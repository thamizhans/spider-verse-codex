/**
 * Mock content for the Spider-Verse reference site.
 * Shapes mirror the planned database tables so swapping to a real
 * backend later only changes the data source, not the components.
 */

export type Medium = "comics" | "animated" | "live-action";

export type Earth = {
  id: string;
  designation: string;
  /** CSS token name used for this universe's accent colour. */
  colorVar: string;
  /** Hex used by the 3D scene (Three.js can't read CSS vars). */
  hex: string;
  description: string;
  primaryCharacter: string;
};

export type Character = {
  id: string;
  name: string;
  alias: string;
  earth: string;
  realName: string;
  firstAppearance: string;
  description: string;
  powers: string[];
  media: Medium[];
  tags: string[];
  appearsIn: string[];
  related: string[];
};

export type TimelineEvent = {
  id: string;
  title: string;
  year: number;
  dateRange: string;
  summary: string;
  branch: string;
  characters: string[];
  issues: string[];
  crossover?: boolean;
};

export type Movie = {
  id: string;
  title: string;
  year: number;
  type: Medium;
  continuity: string;
  cast: string[];
  watchOrder: number;
  summary: string;
  characters: string[];
};

export type Actor = {
  id: string;
  name: string;
  role: string;
  era: string;
  movies: string[];
  note: string;
};

export const earths: Earth[] = [
  {
    id: "earth-616",
    designation: "Earth-616",
    colorVar: "--earth-616",
    hex: "#ff3b5c",
    description:
      "The mainstream comics continuity and the trunk of everything else. Most long-running Spider-Man stories, clones and supporting cast branch out from here.",
    primaryCharacter: "peter-parker",
  },
  {
    id: "earth-1610",
    designation: "Earth-1610",
    colorVar: "--earth-1610",
    hex: "#9d6bff",
    description:
      "The Ultimate line: a re-started, modernised Marvel where Miles Morales takes up the mask after his universe's Peter Parker dies.",
    primaryCharacter: "miles-morales",
  },
  {
    id: "earth-65",
    designation: "Earth-65",
    colorVar: "--earth-65",
    hex: "#3fd8e8",
    description:
      "A world where Gwen Stacy was bitten instead of Peter. Loud, drum-heavy, band-poster energy with a very different set of losses.",
    primaryCharacter: "gwen-stacy",
  },
  {
    id: "earth-928",
    designation: "Earth-928",
    colorVar: "--earth-928",
    hex: "#3fe89a",
    description:
      "A corporate-run future New York stacked in layers, home to Miguel O'Hara and the 2099 generation of heroes.",
    primaryCharacter: "miguel-ohara",
  },
  {
    id: "earth-90214",
    designation: "Earth-90214",
    colorVar: "--earth-90214",
    hex: "#c9cddb",
    description:
      "A 1930s Depression-era world drawn in smoke and shadow, where the mask is closer to a detective's coat than a costume.",
    primaryCharacter: "spider-man-noir",
  },
  {
    id: "earth-8311",
    designation: "Earth-8311",
    colorVar: "--earth-138",
    hex: "#ffc23f",
    description:
      "A funny-animal universe where physics is a punchline and the hero is a spider-bitten pig.",
    primaryCharacter: "peter-porker",
  },
  {
    id: "earth-14512",
    designation: "Earth-14512",
    colorVar: "--earth-928",
    hex: "#6ee7ff",
    description:
      "A neon-lit anime world where the spider and the pilot share a mech: Peni Parker and SP//dr.",
    primaryCharacter: "peni-parker",
  },
  {
    id: "earth-138",
    designation: "Earth-138",
    colorVar: "--earth-138",
    hex: "#ffd23f",
    description:
      "A universe under a corrupt regime, where the web-slinger is also a guitarist and the protest is the point.",
    primaryCharacter: "hobie-brown",
  },
  {
    id: "earth-50101",
    designation: "Earth-50101",
    colorVar: "--earth-616",
    hex: "#ff7a3f",
    description:
      "Mumbai-set continuity where Pavitr Prabhakar swings between monorails and family duty.",
    primaryCharacter: "pavitr-prabhakar",
  },
  {
    id: "earth-982",
    designation: "Earth-982",
    colorVar: "--earth-1610",
    hex: "#c48bff",
    description:
      "A possible future where Peter hung up the webs and his daughter Mayday picked them back up.",
    primaryCharacter: "mayday-parker",
  },
  {
    id: "earth-616b",
    designation: "Earth-616B",
    colorVar: "--earth-65",
    hex: "#4fa3ff",
    description:
      "An older, wearier Peter B. Parker's world — same beats as the mainline, worse decade.",
    primaryCharacter: "peter-b-parker",
  },
];

export const characters: Character[] = [
  {
    id: "peter-parker",
    name: "Peter Parker",
    alias: "Spider-Man",
    earth: "earth-616",
    realName: "Peter Benjamin Parker",
    firstAppearance: "Amazing Fantasy #15 (1962)",
    description:
      "The original. A science kid who got extraordinary abilities and an ordinary amount of luck, and decided the two cancel out into responsibility.",
    powers: ["Wall-crawling", "Enhanced strength and agility", "Danger sense", "Web-shooters"],
    media: ["comics", "animated", "live-action"],
    tags: ["core", "founder"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["miles-morales", "ben-reilly", "cindy-moon"],
  },
  {
    id: "miles-morales",
    name: "Miles Morales",
    alias: "Spider-Man",
    earth: "earth-1610",
    realName: "Miles Gonzalo Morales",
    firstAppearance: "Ultimate Fallout #4 (2011)",
    description:
      "A Brooklyn teenager who inherits a title he never asked for, then quietly proves the mask was never one person's property.",
    powers: ["Venom blast", "Camouflage", "Wall-crawling", "Enhanced agility"],
    media: ["comics", "animated"],
    tags: ["core", "animated-lead"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["peter-b-parker", "gwen-stacy", "hobie-brown"],
  },
  {
    id: "gwen-stacy",
    name: "Gwen Stacy",
    alias: "Spider-Gwen / Ghost-Spider",
    earth: "earth-65",
    realName: "Gwendolyn Maxine Stacy",
    firstAppearance: "Edge of Spider-Verse #2 (2014)",
    description:
      "Drummer, fugitive, hero. Her universe kept the beats of Peter's story and swapped who survived them.",
    powers: ["Wall-crawling", "Precognitive spider-sense", "Web-shooters"],
    media: ["comics", "animated"],
    tags: ["core", "animated-lead"],
    appearsIn: ["spider-verse-2014"],
    related: ["miles-morales", "peter-b-parker"],
  },
  {
    id: "peter-b-parker",
    name: "Peter B. Parker",
    alias: "Spider-Man",
    earth: "earth-616b",
    realName: "Peter Parker",
    firstAppearance: "Animated continuity (2018)",
    description:
      "A version of Peter fifteen years further down a rougher road: divorced, broke, and still the best mentor Miles could have tripped over.",
    powers: ["Wall-crawling", "Enhanced strength", "Spider-sense", "Improvised engineering"],
    media: ["animated"],
    tags: ["animated-lead", "mentor"],
    appearsIn: [],
    related: ["miles-morales", "gwen-stacy"],
  },
  {
    id: "miguel-ohara",
    name: "Miguel O'Hara",
    alias: "Spider-Man 2099",
    earth: "earth-928",
    realName: "Miguel O'Hara",
    firstAppearance: "The Amazing Spider-Man #365 (1992)",
    description:
      "A geneticist who rewrote his own DNA to escape a corporation, and now polices the multiverse with more conviction than warmth.",
    powers: ["Talons", "Organic webbing", "Accelerated vision", "Enhanced strength"],
    media: ["comics", "animated"],
    tags: ["core", "animated-lead", "future"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["miles-morales", "jessica-drew"],
  },
  {
    id: "spider-man-noir",
    name: "Spider-Man Noir",
    alias: "Spider-Man",
    earth: "earth-90214",
    realName: "Peter Parker",
    firstAppearance: "Spider-Man: Noir #1 (2009)",
    description:
      "A 1933 Peter who solves crimes in monochrome, carries a revolver he'd rather not use, and narrates like a man who has read too much Hammett.",
    powers: ["Wall-crawling", "Enhanced reflexes", "Shadow stealth"],
    media: ["comics", "animated"],
    tags: ["core", "period"],
    appearsIn: ["spider-verse-2014"],
    related: ["peter-parker", "miles-morales"],
  },
  {
    id: "peter-porker",
    name: "Peter Porker",
    alias: "Spider-Ham",
    earth: "earth-8311",
    realName: "Peter Porker",
    firstAppearance: "Marvel Tails #1 (1983)",
    description:
      "A spider bit a pig, or a pig bit a spider — the universe declined to clarify. Physics is optional; the punchline is not.",
    powers: ["Cartoon physics", "Wall-crawling", "Hammerspace mallet"],
    media: ["comics", "animated"],
    tags: ["core", "comedy"],
    appearsIn: ["spider-verse-2014"],
    related: ["miles-morales"],
  },
  {
    id: "peni-parker",
    name: "Peni Parker",
    alias: "SP//dr",
    earth: "earth-14512",
    realName: "Peni Parker",
    firstAppearance: "Edge of Spider-Verse #5 (2014)",
    description:
      "A pilot bonded to a radioactive spider that co-flies her father's mech. Grief and machinery, wired together.",
    powers: ["Mech piloting", "Psychic spider-link", "Suit weaponry"],
    media: ["comics", "animated"],
    tags: ["core", "mech"],
    appearsIn: ["spider-verse-2014"],
    related: ["miles-morales", "spider-man-noir"],
  },
  {
    id: "hobie-brown",
    name: "Hobart Brown",
    alias: "Spider-Punk",
    earth: "earth-138",
    realName: "Hobart Brown",
    firstAppearance: "The Amazing Spider-Man #10 (2014)",
    description:
      "Fought a regime with a guitar, a mask and a scene. Refuses hierarchy on principle, including the multiverse's.",
    powers: ["Wall-crawling", "Sonic amplification", "Enhanced strength"],
    media: ["comics", "animated"],
    tags: ["core", "animated-lead"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["miles-morales", "gwen-stacy"],
  },
  {
    id: "pavitr-prabhakar",
    name: "Pavitr Prabhakar",
    alias: "Spider-Man India",
    earth: "earth-50101",
    realName: "Pavitr Prabhakar",
    firstAppearance: "Spider-Man: India #1 (2004)",
    description:
      "Mumbai's web-slinger, whose power came with a mystical inheritance instead of a lab accident — and the same family-sized stakes.",
    powers: ["Wall-crawling", "Enhanced agility", "Mystic-touched spider-sense"],
    media: ["comics", "animated"],
    tags: ["core", "animated-lead"],
    appearsIn: ["spider-verse-2014"],
    related: ["miles-morales", "gwen-stacy"],
  },
  {
    id: "cindy-moon",
    name: "Cindy Moon",
    alias: "Silk",
    earth: "earth-616",
    realName: "Cindy Moon",
    firstAppearance: "The Amazing Spider-Man #1 (2014)",
    description:
      "Bitten by the same spider as Peter, then hidden away for years. Her webbing comes from her fingertips and her hurry comes from lost time.",
    powers: ["Organic webbing", "Silk-sense", "Wall-crawling"],
    media: ["comics"],
    tags: ["core", "comics-only"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["peter-parker", "jessica-drew"],
  },
  {
    id: "jessica-drew",
    name: "Jessica Drew",
    alias: "Spider-Woman",
    earth: "earth-616",
    realName: "Jessica Drew",
    firstAppearance: "Marvel Spotlight #32 (1977)",
    description:
      "Spy, investigator, occasional Avenger. Her powers came from an experiment, not a bite, and she has spent decades outrunning the paperwork.",
    powers: ["Venom blasts", "Pheromone control", "Gliding", "Enhanced strength"],
    media: ["comics"],
    tags: ["core", "comics-only"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["miguel-ohara", "cindy-moon"],
  },
  {
    id: "anya-corazon",
    name: "Anya Corazón",
    alias: "Spider-Girl",
    earth: "earth-616",
    realName: "Araña Corazón",
    firstAppearance: "Amazing Fantasy #1 (2004)",
    description:
      "A student drafted into an ancient spider-war, now one of the multiverse's most reliable field leads.",
    powers: ["Exoskeleton armour", "Enhanced strength", "Precognition"],
    media: ["comics"],
    tags: ["core", "comics-only"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["cindy-moon", "mayday-parker"],
  },
  {
    id: "mayday-parker",
    name: "May Parker",
    alias: "Spider-Girl",
    earth: "earth-982",
    realName: "May 'Mayday' Parker",
    firstAppearance: "What If? #105 (1998)",
    description:
      "Peter's daughter in a future that let him retire. She took the mask anyway, and carries it with less guilt and more basketball.",
    powers: ["Wall-crawling", "Spider-sense", "Enhanced strength"],
    media: ["comics"],
    tags: ["core", "future"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["peter-parker", "anya-corazon"],
  },
  {
    id: "ben-reilly",
    name: "Ben Reilly",
    alias: "Scarlet Spider",
    earth: "earth-616",
    realName: "Ben Reilly",
    firstAppearance: "The Amazing Spider-Man #149 (1975)",
    description:
      "A clone of Peter who lived his own five years on the road, then had to argue about which of them was the copy.",
    powers: ["Wall-crawling", "Impact webbing", "Spider-sense"],
    media: ["comics"],
    tags: ["clone", "comics-only"],
    appearsIn: ["spider-geddon-2018"],
    related: ["peter-parker", "kaine-parker"],
  },
  {
    id: "kaine-parker",
    name: "Kaine Parker",
    alias: "Scarlet Spider",
    earth: "earth-616",
    realName: "Kaine Parker",
    firstAppearance: "Web of Spider-Man #119 (1994)",
    description:
      "The first, unstable clone. Spent years as a threat before deciding that a bad copy can still choose to be useful.",
    powers: ["Mark of Kaine", "Stingers", "Precognitive visions"],
    media: ["comics"],
    tags: ["clone", "comics-only"],
    appearsIn: ["spider-verse-2014", "spider-geddon-2018"],
    related: ["ben-reilly", "peter-parker"],
  },
];

export const timelineEvents: TimelineEvent[] = [
  {
    id: "amazing-fantasy-15",
    title: "The First Bite",
    year: 1962,
    dateRange: "1962",
    summary:
      "The origin that anchors the trunk: one bite, one lesson about responsibility, and a template every later branch either follows or argues with.",
    branch: "earth-616",
    characters: ["peter-parker"],
    issues: ["Amazing Fantasy #15"],
  },
  {
    id: "clone-saga",
    title: "The Clone Question",
    year: 1994,
    dateRange: "1994–1996",
    summary:
      "A long, tangled run in which duplicates of Peter force the mainline continuity to define what makes a person the original.",
    branch: "earth-616",
    characters: ["ben-reilly", "kaine-parker", "peter-parker"],
    issues: ["Web of Spider-Man #117–122", "The Amazing Spider-Man #394+"],
  },
  {
    id: "spider-man-2099",
    title: "A Corporate Future",
    year: 1992,
    dateRange: "1992",
    summary:
      "The 2099 imprint splits a branch far downstream, giving the multiverse a future-facing Spider-Man with talons and a lawyer's problems.",
    branch: "earth-928",
    characters: ["miguel-ohara"],
    issues: ["The Amazing Spider-Man #365", "Spider-Man 2099 #1"],
  },
  {
    id: "ultimate-line",
    title: "A Restarted World",
    year: 2000,
    dateRange: "2000–2011",
    summary:
      "A parallel line rebuilds the mythology from scratch, and eventually hands the mask to Miles Morales.",
    branch: "earth-1610",
    characters: ["miles-morales"],
    issues: ["Ultimate Spider-Man #1", "Ultimate Fallout #4"],
  },
  {
    id: "edge-of-spider-verse",
    title: "Edge of the Web",
    year: 2014,
    dateRange: "2014",
    summary:
      "A run of one-shot introductions opens several new branches at once — Gwen's world, SP//dr's mech, Spider-Punk's regime.",
    branch: "earth-65",
    characters: ["gwen-stacy", "peni-parker", "hobie-brown"],
    issues: ["Edge of Spider-Verse #1–5"],
  },
  {
    id: "spider-verse-2014",
    title: "Spider-Verse",
    year: 2014,
    dateRange: "2014–2015",
    summary:
      "The crossover that gave the concept its name: branches curve inward and touch as Spider-People from across the multiverse are hunted by the Inheritors and have to fight as one group.",
    branch: "crossover",
    characters: [
      "peter-parker",
      "miles-morales",
      "gwen-stacy",
      "miguel-ohara",
      "spider-man-noir",
      "peter-porker",
      "peni-parker",
      "hobie-brown",
      "pavitr-prabhakar",
      "mayday-parker",
      "kaine-parker",
      "cindy-moon",
    ],
    issues: ["The Amazing Spider-Man #9–15", "Spider-Verse #1–2"],
    crossover: true,
  },
  {
    id: "spider-geddon-2018",
    title: "Spider-Geddon",
    year: 2018,
    dateRange: "2018",
    summary:
      "The follow-up event: the surviving Inheritors return, the branches meet again, and several long-running characters pay for the first crossover's loose ends.",
    branch: "crossover",
    characters: [
      "peter-parker",
      "miles-morales",
      "miguel-ohara",
      "ben-reilly",
      "jessica-drew",
      "anya-corazon",
      "cindy-moon",
    ],
    issues: ["Spider-Geddon #0–5", "Superior Spider-Man #1"],
    crossover: true,
  },
  {
    id: "spider-verse-animated",
    title: "The Animated Branch",
    year: 2018,
    dateRange: "2018–present",
    summary:
      "The films take the comics premise and give it its own continuity, canon rules and visual grammar — a branch that now feeds ideas back upstream.",
    branch: "earth-1610",
    characters: ["miles-morales", "gwen-stacy", "peter-b-parker", "miguel-ohara", "hobie-brown"],
    issues: ["Film continuity"],
  },
  {
    id: "live-action-multiverse",
    title: "Three Screens, One Web",
    year: 2021,
    dateRange: "2021",
    summary:
      "The live-action films formally adopt the multiverse, letting three separate movie continuities touch at one point before separating again.",
    branch: "live-action",
    characters: [],
    issues: ["Film continuity"],
    crossover: true,
  },
];

export const movies: Movie[] = [
  {
    id: "into-the-spider-verse",
    title: "Into the Spider-Verse",
    year: 2018,
    type: "animated",
    continuity: "Animated multiverse — Earth-1610",
    cast: [],
    watchOrder: 1,
    summary:
      "Miles Morales meets five other Spider-People pulled into his city and has to decide, alone, whether he is ready.",
    characters: ["miles-morales", "peter-b-parker", "gwen-stacy", "spider-man-noir", "peter-porker", "peni-parker"],
  },
  {
    id: "across-the-spider-verse",
    title: "Across the Spider-Verse",
    year: 2023,
    type: "animated",
    continuity: "Animated multiverse — Earth-1610 / Earth-928",
    cast: [],
    watchOrder: 2,
    summary:
      "A multiverse-wide Spider-Society argues that some losses are load-bearing. Miles refuses the premise and runs.",
    characters: ["miles-morales", "gwen-stacy", "miguel-ohara", "hobie-brown", "pavitr-prabhakar"],
  },
  {
    id: "beyond-the-spider-verse",
    title: "Beyond the Spider-Verse",
    year: 2027,
    type: "animated",
    continuity: "Animated multiverse — finale",
    cast: [],
    watchOrder: 3,
    summary:
      "The announced conclusion of the animated trilogy, picking up directly from the cliffhanger of the second film.",
    characters: ["miles-morales", "gwen-stacy", "peter-b-parker"],
  },
  {
    id: "spider-man-2002",
    title: "Spider-Man",
    year: 2002,
    type: "live-action",
    continuity: "Raimi trilogy",
    cast: ["tobey-maguire"],
    watchOrder: 1,
    summary: "The first modern live-action origin: high school, a bite, and a very red suit.",
    characters: ["peter-parker"],
  },
  {
    id: "spider-man-2-2004",
    title: "Spider-Man 2",
    year: 2004,
    type: "live-action",
    continuity: "Raimi trilogy",
    cast: ["tobey-maguire"],
    watchOrder: 2,
    summary: "A scientist becomes a tragedy, and the hero briefly quits.",
    characters: ["peter-parker"],
  },
  {
    id: "spider-man-3-2007",
    title: "Spider-Man 3",
    year: 2007,
    type: "live-action",
    continuity: "Raimi trilogy",
    cast: ["tobey-maguire"],
    watchOrder: 3,
    summary: "Symbiote, sand, and one dance sequence that outlived the film.",
    characters: ["peter-parker"],
  },
  {
    id: "amazing-spider-man-2012",
    title: "The Amazing Spider-Man",
    year: 2012,
    type: "live-action",
    continuity: "Amazing duology",
    cast: ["andrew-garfield"],
    watchOrder: 4,
    summary: "A re-started continuity with a lankier, sharper Peter and a Gwen who drives the plot.",
    characters: ["peter-parker"],
  },
  {
    id: "amazing-spider-man-2-2014",
    title: "The Amazing Spider-Man 2",
    year: 2014,
    type: "live-action",
    continuity: "Amazing duology",
    cast: ["andrew-garfield"],
    watchOrder: 5,
    summary: "Electricity, a clock tower, and the loss this branch never recovers from.",
    characters: ["peter-parker"],
  },
  {
    id: "civil-war-2016",
    title: "Captain America: Civil War",
    year: 2016,
    type: "live-action",
    continuity: "MCU",
    cast: ["tom-holland"],
    watchOrder: 6,
    summary: "The MCU introduces its Spider-Man mid-argument, borrowed for one airport fight.",
    characters: ["peter-parker"],
  },
  {
    id: "homecoming-2017",
    title: "Spider-Man: Homecoming",
    year: 2017,
    type: "live-action",
    continuity: "MCU",
    cast: ["tom-holland"],
    watchOrder: 7,
    summary: "A high-school movie in a superhero suit, with a working-class villain.",
    characters: ["peter-parker"],
  },
  {
    id: "far-from-home-2019",
    title: "Spider-Man: Far From Home",
    year: 2019,
    type: "live-action",
    continuity: "MCU",
    cast: ["tom-holland"],
    watchOrder: 8,
    summary: "A European school trip, an illusionist, and the first live-action multiverse bluff.",
    characters: ["peter-parker"],
  },
  {
    id: "no-way-home-2021",
    title: "Spider-Man: No Way Home",
    year: 2021,
    type: "live-action",
    continuity: "MCU — live-action crossover",
    cast: ["tom-holland", "tobey-maguire", "andrew-garfield"],
    watchOrder: 9,
    summary:
      "The crossover point: three separate live-action continuities briefly touch, then close back off from each other.",
    characters: ["peter-parker"],
  },
];

export const actors: Actor[] = [
  {
    id: "tobey-maguire",
    name: "Tobey Maguire",
    role: "Peter Parker / Spider-Man",
    era: "Raimi trilogy (2002–2007)",
    movies: ["spider-man-2002", "spider-man-2-2004", "spider-man-3-2007", "no-way-home-2021"],
    note: "Set the earnest, slightly melancholy template that every later screen Peter reacts to.",
  },
  {
    id: "andrew-garfield",
    name: "Andrew Garfield",
    role: "Peter Parker / Spider-Man",
    era: "The Amazing Spider-Man (2012–2014)",
    movies: ["amazing-spider-man-2012", "amazing-spider-man-2-2014", "no-way-home-2021"],
    note: "A quicker, more talkative Spider-Man whose branch was cut short and later revisited.",
  },
  {
    id: "tom-holland",
    name: "Tom Holland",
    role: "Peter Parker / Spider-Man",
    era: "MCU (2016–present)",
    movies: [
      "civil-war-2016",
      "homecoming-2017",
      "far-from-home-2019",
      "no-way-home-2021",
    ],
    note: "The youngest screen Peter, embedded in a shared-universe continuity from the start.",
  },
];

export const adjacentCharacters = [
  {
    id: "daredevil",
    name: "Daredevil",
    realName: "Matt Murdock",
    why: "Shares Spider-Man's New York, his rooftops and several of his enemies. Crosses over constantly — but has no Spider-Verse Earth of his own.",
    label: "Connected, not core Spider-Verse",
    firstAppearance: "Daredevil #1 (1964)",
  },
  {
    id: "deadpool",
    name: "Deadpool",
    realName: "Wade Wilson",
    why: "Started in a separate film continuity entirely and joined the wider multiverse conversation later. Talks about universes more than he visits Peter's.",
    label: "Connected, not core Spider-Verse",
    firstAppearance: "The New Mutants #98 (1991)",
  },
  {
    id: "venom",
    name: "Venom",
    realName: "Eddie Brock (usually)",
    why: "Born directly out of Spider-Man's story, but the symbiote line runs off into its own films and continuities that rarely touch the Spider-Verse proper.",
    label: "Spider-adjacent offshoot",
    firstAppearance: "The Amazing Spider-Man #300 (1988)",
  },
];

/* ---------- helpers ---------- */

export const getCharacter = (id: string) => characters.find((c) => c.id === id);
export const getEarth = (id: string) => earths.find((e) => e.id === id);
export const getEvent = (id: string) => timelineEvents.find((e) => e.id === id);
export const getMovie = (id: string) => movies.find((m) => m.id === id);

export const mediumLabel: Record<Medium, string> = {
  comics: "Comics",
  animated: "Animated",
  "live-action": "Live-action",
};

export const allTags = Array.from(new Set(characters.flatMap((c) => c.tags))).sort();
