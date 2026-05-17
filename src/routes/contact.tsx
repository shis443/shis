import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { FaInstagram, FaLinkedin, FaFileLines } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Shis Ousman" },
      {
        name: "description",
        content:
          "Open to collaborations, creative projects, tourism concepts and hospitality experiences.",
      },
    ],
  }),
  component: Contact,
});

const EMAIL = "shisousman@gmail.com";

type CardDef = {
  label: string;
  title: string;
  icon: React.ReactNode;
  href: string;
  /** Resting + hover bg */
  bg: string;
  text?: string;
  glowFrom: string;
  glowTo: string;
  className?: string;
};

const ArrowIcon = () => (
  <div className="h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-sm text-foreground shadow-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
    ↗
  </div>
);

const CopyIcon = ({ copied }: { copied: boolean }) => (
  <div className="h-9 w-9 rounded-full bg-white/90 backdrop-blur flex items-center justify-center text-sm text-foreground shadow-sm transition-transform duration-300 group-hover:scale-110">
    {copied ? "✓" : "⎘"}
  </div>
);

const Orb = ({ from, to }: { from: string; to: string }) => (
  <div
    aria-hidden
    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-16 w-16 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110"
    style={{
      background: `radial-gradient(circle at 30% 30%, ${from}, ${to})`,
      boxShadow: `0 8px 24px -4px ${to}80, inset -4px -6px 12px rgba(0,0,0,0.25), inset 4px 4px 10px rgba(255,255,255,0.35)`,
    }}
  />
);

const topCards: CardDef[] = [
  {
    label: "Learn more",
    title: "View CV",
    icon: <FaFileLines className="h-5 w-5" />,
    href: "https://yourdomain.com/cv.pdf",
    bg: "group-hover:bg-[#1f6feb]",
    text: "group-hover:text-white",
    glowFrom: "#9bc4ff",
    glowTo: "#1f6feb",
  },
  {
    label: "Follow",
    title: "Instagram",
    icon: <FaInstagram className="h-5 w-5" />,
    href: "https://www.instagram.com/shis_adem?igsh=eXRvYXNvdjhtanh5&utm_source=qr",
    bg: "group-hover:bg-[#e1306c]",
    text: "group-hover:text-white",
    glowFrom: "#ffb3d1",
    glowTo: "#c1235a",
  },
  {
    label: "Connect",
    title: "LinkedIn",
    icon: <FaLinkedin className="h-5 w-5" />,
    href: "https://www.linkedin.com/in/shis-ousman-792496342",
    bg: "group-hover:bg-[#0a66c2]",
    text: "group-hover:text-white",
    glowFrom: "#8fc1f0",
    glowTo: "#0a66c2",
  },
];

function BigCard({ card }: { card: CardDef }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-3xl border border-border/50 bg-card
        p-6 md:p-7 flex flex-col min-h-[18rem] transition-all duration-500
        hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
        ${card.bg} ${card.text ?? ""} ${card.className ?? ""}`}
    >
      <div className="flex items-start justify-between relative z-10">
        <span className="text-sm opacity-70">{card.label}</span>
        <ArrowIcon />
      </div>
      <Orb from={card.glowFrom} to={card.glowTo} />
      <div className="mt-auto flex items-center gap-3 font-display text-2xl md:text-3xl relative z-10">
        <span className="inline-flex h-9 w-9 items-center justify-center">{card.icon}</span>
        {card.title}
      </div>
    </a>
  );
}

function Contact() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* noop */
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 md:px-6 pt-24 md:pt-28">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topCards.map((c) => (
          <BigCard key={c.title} card={c} />
        ))}
      </section>

      <section className="mt-4 grid grid-cols-1 gap-4">
        <button
          onClick={copy}
          className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-6 md:p-7
            flex flex-col min-h-[14rem] text-left transition-all duration-500
            hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.25)]
            hover:bg-[#ec5a3a] hover:text-white"
        >
          <div className="flex items-start justify-between relative z-10">
            <span className="text-sm opacity-70">{copied ? "Copied!" : "Say Hi"}</span>
            <CopyIcon copied={copied} />
          </div>
          <Orb from="#ffb39e" to="#c43d1f" />
          <div className="mt-auto flex items-center gap-3 font-display text-xl md:text-3xl break-all relative z-10">
            <span className="inline-flex h-9 w-9 items-center justify-center">
              <SiGmail className="h-5 w-5" />
            </span>
            {EMAIL}
          </div>
        </button>
      </section>
    </div>
  );
}
