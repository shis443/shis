import { createFileRoute, Link } from "@tanstack/react-router";
import profile from "@/assets/profile-v4.jpg";
import apexwild from "@/assets/apexwild-v2.png";
import trinacria from "@/assets/trinacria-v3.png";
import giro360 from "@/assets/giro360-new.png";
import hobby1 from "@/assets/hobby1-new.png";
import hobby2 from "@/assets/hobby2.jpg";
import hobby3 from "@/assets/hobby3.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Shis Ousman — Student, founder, builder of experiences" },
      {
        name: "description",
        content:
          "Co-founder of Giro360 Virtual Tours. Building immersive stays and cinematic digital experiences from Messina, Sicily.",
      },
    ],
  }),
  component: Home,
});

type Card = {
  label: string;
  hoverLabel?: string;
  title: React.ReactNode;
  img?: string;
  imgAlt?: string;
  /** Tailwind background color shown on hover. */
  hoverBg: string;
  /** Tailwind text color shown on hover. */
  hoverText?: string;
  className: string; // grid placement
  imgClassName?: string;
  href?: string;
};

const cards: Card[] = [
  {
    label: "🇪🇹 Shis",
    title: (
      <>
        Shis is a student & founder building <em className="italic">immersive stays</em>,
        cinematic spaces and digital experiences — co-founder of{" "}
        <span className="underline decoration-2 underline-offset-4">Giro360</span>, inspired
        by Sicily, architecture and modern hospitality.
      </>
    ),
    hoverBg: "group-hover:bg-[#f3ede2]",
    className: "md:col-span-2 md:row-span-1",
    href: "/about",
  },
  {
    label: "🏕 ApeXwild",
    hoverLabel: "Hospitality concept",
    title: "Designing a luxury glamping cabin rooted in Sicilian nature.",
    img: apexwild,
    hoverBg: "group-hover:bg-[#e8dcc4]",
    className: "md:col-span-1 md:row-span-2",
    imgClassName: "translate-y-2 group-hover:translate-y-0 group-hover:scale-[1.03]",
    href: "/about",
  },
  {
    label: "🏛 Trinacria",
    hoverLabel: "Tourism platform",
    title: "A digital gateway connecting travellers with authentic Sicily.",
    img: trinacria,
    hoverBg: "group-hover:bg-[#dcd0bd]",
    className: "md:col-span-1",
    href: "/about",
  },
  {
    label: "🎥 Giro360",
    hoverLabel: "Co-founder",
    title: "Immersive virtual tours for destinations and businesses.",
    img: giro360,
    hoverBg: "group-hover:bg-[#cfd9d6]",
    className: "md:col-span-1",
    href: "/about",
  },
  {
    label: "🧵 Mella-Rugz",
    hoverLabel: "Brand identity",
    title: "Hand-crafted rugs with Mediterranean character.",
    img: hobby2,
    hoverBg: "group-hover:bg-[#e6d4c6]",
    className: "md:col-span-1",
    href: "/about",
  },
  {
    label: "📷 Cinematic stills",
    hoverLabel: "Personal work",
    title: "Chasing Sicilian light, frame by frame.",
    img: hobby1,
    hoverBg: "group-hover:bg-[#2a2a28]",
    hoverText: "group-hover:text-[#f3ede2]",
    className: "md:col-span-1",
    href: "/about",
  },
  {
    label: "⚽ Football culture",
    hoverLabel: "Beyond work",
    title: "Stadiums, kits, and stories from the south.",
    img: hobby3,
    hoverBg: "group-hover:bg-[#d8e2d4]",
    className: "md:col-span-2",
    href: "/about",
  },
];

function BentoCard({ card }: { card: Card }) {
  const className = `group relative overflow-hidden rounded-3xl bg-card border border-border/50
    p-6 md:p-7 flex flex-col min-h-[18rem] md:min-h-[22rem]
    transition-all duration-500 ease-out
    hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]
    ${card.hoverBg} ${card.hoverText ?? ""} ${card.className}`;

  const inner = (
    <>
      <div className="flex items-center gap-2 text-sm font-medium relative h-5">
        <span className="absolute inset-0 flex items-center transition-all duration-300 group-hover:-translate-y-2 group-hover:opacity-0">
          {card.label}
        </span>
        <span className="absolute inset-0 flex items-center opacity-0 translate-y-2 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
          {card.hoverLabel ?? card.label}
        </span>
      </div>

      {card.img && (
        <div className="flex-1 my-5 -mx-2 overflow-hidden rounded-2xl">
          <img
            src={card.img}
            alt={card.imgAlt ?? ""}
            loading="lazy"
            className={`h-full w-full transition-all duration-700 ease-out ${card.imgClassName ?? "group-hover:scale-[1.04]"} object-cover`}
          />
        </div>
      )}

      <div
        className={`mt-auto font-display ${card.img ? "text-xl md:text-2xl" : "text-2xl md:text-3xl"} leading-tight tracking-tight`}
      >
        {card.title}
      </div>
    </>
  );

  if (card.href) {
    return (
      <Link to={card.href} className={className}>
        {inner}
      </Link>
    );
  }
  return <div className={className}>{inner}</div>;
}


function Home() {
  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-28">
      {/* Tiny profile signal */}
      <div className="flex items-center gap-3 mb-6 px-2">
        <img src={profile} alt="Shis Ousman" className="h-9 w-9 rounded-full object-cover" />
        <div className="text-sm flex items-center gap-1.5">
          <span aria-label="Ethiopian flag" title="Ethiopia">🇪🇹</span>
          <span className="font-medium">Shis Ousman</span>
          <span className="text-muted-foreground"> · Messina, Sicily</span>
        </div>
      </div>

      <section className="grid grid-cols-1 md:grid-cols-3 auto-rows-[18rem] md:auto-rows-[20rem] gap-4">
        {cards.map((c, i) => (
          <BentoCard key={i} card={c} />
        ))}
      </section>
    </div>
  );
}
