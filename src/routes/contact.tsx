import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

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

type Card = {
  label: string;
  title: string;
  icon: string; // emoji or short label as visual stand-in
  href: string;
  hoverBg: string;
  hoverText?: string;
  className?: string;
};

const topCards: Card[] = [
  {
    label: "Learn more",
    title: "View CV",
    icon: "📄",
    href: "https://yourdomain.com/cv.pdf",
    hoverBg: "group-hover:bg-[#1f6feb]",
    hoverText: "group-hover:text-white",
  },
  {
    label: "Follow",
    title: "Instagram",
    icon: "📷",
    href: "https://instagram.com/shisadem",
    hoverBg: "group-hover:bg-gradient-to-br group-hover:from-[#f58529] group-hover:via-[#dd2a7b] group-hover:to-[#8134af]",
    hoverText: "group-hover:text-white",
  },
  {
    label: "Connect",
    title: "LinkedIn",
    icon: "in",
    href: "https://linkedin.com/in/shisousman",
    hoverBg: "group-hover:bg-[#0a66c2]",
    hoverText: "group-hover:text-white",
  },
];

function ArrowIcon() {
  return (
    <div className="h-9 w-9 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-sm transition-transform duration-300 group-hover:-rotate-12 group-hover:scale-110">
      ↗
    </div>
  );
}

function CopyIcon({ copied }: { copied: boolean }) {
  return (
    <div className="h-9 w-9 rounded-full bg-background/70 backdrop-blur flex items-center justify-center text-sm transition-transform duration-300 group-hover:scale-110">
      {copied ? "✓" : "⎘"}
    </div>
  );
}

function BigCard({ card }: { card: Card }) {
  return (
    <a
      href={card.href}
      target="_blank"
      rel="noreferrer"
      className={`group relative overflow-hidden rounded-3xl border border-border/50 bg-card
        p-6 md:p-7 flex flex-col min-h-[18rem] transition-all duration-500
        hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]
        ${card.hoverBg} ${card.hoverText ?? ""} ${card.className ?? ""}`}
    >
      <div className="flex items-start justify-between">
        <span className="text-sm text-muted-foreground transition-colors group-hover:text-current/80">
          {card.label}
        </span>
        <ArrowIcon />
      </div>
      <div className="mt-auto flex items-center gap-3 font-display text-2xl md:text-3xl">
        <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/10 text-base">
          {card.icon}
        </span>
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
      {/* Top row */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {topCards.map((c) => (
          <BigCard key={c.title} card={c} />
        ))}
      </section>

      {/* Bottom row: X (small) + Say Hi (wide) */}
      <section className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <a
          href="https://x.com/yourusername"
          target="_blank"
          rel="noreferrer"
          className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-6 md:p-7
            flex flex-col min-h-[14rem] transition-all duration-500
            hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]
            group-hover:bg-[#0a0a0a] hover:bg-[#0a0a0a] hover:text-[#f3ede2]"
        >
          <div className="flex items-start justify-between">
            <span className="text-sm text-muted-foreground group-hover:text-[#f3ede2]/70">Follow</span>
            <ArrowIcon />
          </div>
          <div className="mt-auto flex items-center gap-3 font-display text-2xl md:text-3xl">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/10 group-hover:bg-white/10 text-base">
              𝕏
            </span>
            X (Twitter)
          </div>
        </a>

        <button
          onClick={copy}
          className="group relative overflow-hidden rounded-3xl border border-border/50 bg-card p-6 md:p-7
            flex flex-col min-h-[14rem] text-left transition-all duration-500 md:col-span-2
            hover:-translate-y-1 hover:shadow-[0_20px_50px_-20px_rgba(0,0,0,0.18)]
            hover:bg-[#f1e2c8]"
        >
          <div className="flex items-start justify-between">
            <span className="text-sm text-muted-foreground">
              {copied ? "Copied!" : "Say Hi"}
            </span>
            <CopyIcon copied={copied} />
          </div>
          <div className="mt-auto flex items-center gap-3 font-display text-xl md:text-3xl break-all">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-foreground/10 text-base">
              ✉
            </span>
            {EMAIL}
          </div>
        </button>
      </section>
    </div>
  );
}
