import { createFileRoute } from "@tanstack/react-router";
import profile from "@/assets/profile.jpg";
import hobby1 from "@/assets/hobby1.jpg";
import hobby2 from "@/assets/hobby2.jpg";
import hobby3 from "@/assets/hobby3.jpg";

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
  label: string;
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
  {
    label: "🎧 Spotify",
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#d6e7d8]",
    body: (
      <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
        <div className="h-24 w-24 rounded-xl bg-gradient-to-br from-orange-300 via-pink-400 to-purple-500 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3" />
        <div className="mt-3 font-display text-lg">
          Spotify <span className="italic text-accent">playlist</span>
        </div>
      </div>
    ),
    href: "https://spotify.com/",
  },
  {
    label: "🎬 Letterboxd",
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#fff1e5]",
    body: (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-3xl md:text-4xl font-display font-semibold tracking-tight">
          Letterboxd
        </div>
      </div>
    ),
    className: "md:col-span-2",
    href: "https://letterboxd.com/",
  },
  {
    label: "📖 Goodreads",
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#f1e6d2]",
    body: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-display italic">goodreads</div>
        <img
          src={hobby2}
          alt=""
          className="mt-2 h-16 w-24 object-cover rounded-md shadow-md translate-y-4 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>
    ),
    href: "https://goodreads.com/",
  },
  {
    label: "🎮 Backloggd",
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#2a2a28]",
    hoverText: "group-hover:text-[#f3ede2]",
    body: (
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-2xl font-display font-bold underline underline-offset-4">
          Backloggd
        </div>
        <img
          src={hobby3}
          alt=""
          className="mt-2 h-16 w-24 object-cover rounded-md shadow-md translate-y-4 opacity-80 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100"
        />
      </div>
    ),
    href: "#",
  },
  {
    label: "📺 YouTube",
    bg: "bg-card",
    hoverBg: "group-hover:bg-[#ffe2e2]",
    body: (
      <div className="absolute inset-0 flex items-center justify-center">
        <img
          src={hobby1}
          alt=""
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>
    ),
    className: "md:col-span-2",
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
      className={`group relative overflow-hidden rounded-3xl border border-border/50 ${card.bg} ${card.hoverBg} ${card.hoverText ?? ""}
        aspect-square transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)] ${card.className ?? ""}`}
    >
      <div className="absolute top-4 left-5 text-xs font-medium z-10">{card.label}</div>
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
            <p>I'm Shis, a student and entrepreneur currently based in Messina, Sicily 🇮🇹.</p>
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

        {/* RIGHT — Bento side */}
        <div className="grid grid-cols-2 auto-rows-fr gap-4">
          <Card card={portraitCard} />
          <Card card={sideCards[0]} />
          <Card card={sideCards[1]} />
          <Card card={sideCards[2]} />
          <Card card={sideCards[3]} />
        </div>
      </div>
    </div>
  );
}
