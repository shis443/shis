import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/portrait.jpg";
import hobby1 from "@/assets/youtube-hobby-v2.png";
import bookRichDad from "@/assets/book-rich-dad.jpg";
import bookThinkGrow from "@/assets/book-think-grow.jpg";
import bookInfluence from "@/assets/book-influence.jpg";
import { FaSpotify, FaYoutube } from "react-icons/fa6";
import { SiLetterboxd, SiGoodreads } from "react-icons/si";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Shis Ousman" },
      {
        name: "description",
        content:
          "Student and entrepreneur in Messina, Sicily. Architecture, hospitality, storytelling, and immersive experiences.",
      },
    ],
  }),
  component: About,
});

type SideCard = {
  label: React.ReactNode;
  bg: string;
  hoverBg: string;
  hoverText?: string;
  body: React.ReactNode;
  href?: string;
  className?: string;
};

const portraitCard: SideCard = {
  label: "📷 Portrait",
  bg: "bg-card",
  hoverBg: "group-hover:bg-[#e8dcc4]",
  body: (
    <img src={profile} alt="Shis" className="absolute inset-0 h-full w-full object-cover" />
  ),
  className: "row-span-2",
};

const sideCards: SideCard[] = [
  // Spotify
  {
    label: (
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-black text-[#1DB954]">
        <FaSpotify className="h-4 w-4" />
      </span>
    ),
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#d6e7d8]",
    body: (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-orange-300 via-pink-500 to-purple-600 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
        <div className="mt-3 font-display text-lg text-center leading-tight">
          shisousman
          <div className="text-xs italic text-muted-foreground">the future ceo</div>
        </div>
      </div>
    ),
    href: "https://open.spotify.com/episode/27WIiMw5jITtQfqFycexet",
  },
  // Letterboxd (wide)
  {
    label: (
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-[#14181c]">
        <SiLetterboxd className="h-4 w-4 text-white" />
      </span>
    ),
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#fff1e5]",
    body: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl md:text-5xl font-display font-bold tracking-tight">
          Letterboxd
        </div>
      </div>
    ),
    className: "col-span-2",
    href: "https://letterboxd.com/",
  },
  // Goodreads with 3 book covers
  {
    label: (
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-[#e9e2d0]">
        <SiGoodreads className="h-4 w-4 text-[#382110]" />
      </span>
    ),
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#f1e6d2]",
    body: (
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-3">
        <div className="text-2xl md:text-3xl font-display italic mb-2">goodreads</div>
        <div className="flex items-end justify-center gap-1 translate-y-3 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <img src={bookRichDad} alt="Rich Dad Poor Dad" className="h-20 w-14 object-cover rounded shadow-md -rotate-6" />
          <img src={bookThinkGrow} alt="Think and Grow Rich" className="h-24 w-16 object-cover rounded shadow-md z-10" />
          <img src={bookInfluence} alt="Influence: The Psychology of Persuasion" className="h-20 w-14 object-cover rounded shadow-md rotate-6" />
        </div>
      </div>
    ),
    href: "https://goodreads.com/",
  },
  // Backloggd
  {
    label: (
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-[#2a2a28] text-[#f3ede2] font-bold text-sm">
        B
      </span>
    ),
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#bcdcff]",
    body: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-2xl font-display font-bold underline underline-offset-4">
          Backloggd
        </div>
      </div>
    ),
    href: "#",
  },
  // YouTube (wide)
  {
    label: (
      <span className="inline-flex items-center justify-center h-7 w-7 rounded-md bg-[#FF0000] text-white">
        <FaYoutube className="h-4 w-4" />
      </span>
    ),
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#ffe2e2]",
    body: (
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={hobby1}
          alt=""
          className="h-full w-full transition-transform duration-700 group-hover:scale-105 object-contain"
        />
      </div>
    ),
    className: "col-span-2",
    href: "https://youtube.com/@shis_adem",
  },
];

function Card({ card }: { card: SideCard }) {
  const Wrap: "a" | "div" = card.href ? "a" : "div";
  const props = card.href
    ? { href: card.href, target: "_blank", rel: "noreferrer" }
    : {};
  return (
    <Wrap
      {...(props as Record<string, never>)}
      className={`group relative overflow-hidden rounded-3xl border border-border/50 h-full w-full block ${card.bg} ${card.hoverBg} ${card.hoverText ?? ""}
        transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] ${card.className ?? ""}`}
    >
      <div className="absolute top-4 right-4 z-10">{card.label}</div>
      {card.body}
    </Wrap>
  );
}

function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 pt-24 md:pt-28">
      <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
        {/* LEFT — Bio */}
        <article className="rounded-3xl bg-card border border-border/50 p-8 md:p-12">
          <h1 className="font-display text-4xl md:text-5xl">My journey.</h1>
          <div className="mt-6 h-px bg-border" />
          <div className="mt-8 space-y-5 text-base md:text-[17px] leading-relaxed text-foreground/90">
            <p className="flex items-center gap-2">
              I'm <span aria-label="Ethiopian flag">🇪🇹</span> Shis, a student and entrepreneur currently based in Messina, Sicily 🇮🇹.
            </p>
            <p>
              I've always been drawn to creative ideas — from architecture and cinematic
              visuals to digital experiences that make people feel something. What started as
              curiosity slowly turned into building concepts around tourism, hospitality,
              storytelling and immersive spaces.
            </p>
            <p>
              Living in Sicily has shaped a lot of the way I see design. The landscapes, the
              culture, the slow lifestyle and the atmosphere all inspired me to create
              projects that feel warm, memorable and visually immersive.
            </p>
            <p>
              Right now, I'm focused on building ideas that blend architecture, technology,
              storytelling and tourism into experiences people genuinely connect with —
              currently developing <strong>ApeXwild</strong>, a luxury glamping cabin concept.
            </p>
            <p>
              Outside of work, you'll find me deep in football culture ⚽, cooking
              experiments, night walks in Messina, or chasing cinematic light with a
              camera 📷.
            </p>
          </div>
        </article>

        {/* RIGHT — Bento side: 3 columns × 4 rows */}
        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[9rem] md:auto-rows-[11rem] gap-3 md:gap-4">
          {/* Portrait spans 2 cols × 2 rows */}
          <div className="col-span-2 row-span-2">
            <Card card={portraitCard} />
          </div>
          {/* Spotify 1×2 tall - hidden on mobile, full row on tablet+ */}
          <div className="hidden md:block row-span-2">
            <Card card={sideCards[0]} />
          </div>
          {/* Spotify (mobile) - 2 cols wide */}
          <div className="col-span-2 md:hidden">
            <Card card={sideCards[0]} />
          </div>
          {/* Letterboxd wide */}
          <div className="col-span-2 md:col-span-3">
            <Card card={sideCards[1]} />
          </div>
          {/* Goodreads 1×2 */}
          <div className="col-span-2 md:col-span-1 row-span-2">
            <Card card={sideCards[2]} />
          </div>
          {/* Backloggd */}
          <div className="col-span-2">
            <Card card={sideCards[3]} />
          </div>
          {/* YouTube wide */}
          <div className="col-span-2">
            <Card card={sideCards[4]} />
          </div>
        </div>
      </div>
    </div>
  );
}
