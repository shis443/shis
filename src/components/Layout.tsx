import { Link, Outlet } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import messina from "@/assets/messina.jpg";

function NavBar() {
  const links = [
    { to: "/" as const, label: "Home" },
    { to: "/about" as const, label: "About" },
    { to: "/contact" as const, label: "Contact" },
  ];
  return (
    <header className="fixed top-4 md:top-6 inset-x-0 z-50 flex justify-center pointer-events-none">
      <nav
        className="pointer-events-auto flex items-center gap-1 px-2 py-2 rounded-full
                   bg-background/60 backdrop-blur-xl backdrop-saturate-150
                   border border-border/60
                   shadow-[0_8px_32px_-8px_rgba(0,0,0,0.18),inset_0_1px_0_0_rgba(255,255,255,0.6)]
                   text-sm"
      >
        {links.map((l) => (
          <Link
            key={l.to}
            to={l.to}
            activeOptions={{ exact: true }}
            activeProps={{ className: "bg-foreground text-background shadow-sm" }}
            className="px-5 py-2 rounded-full text-foreground/70 hover:text-foreground transition-colors"
          >
            {l.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}

function Footer() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/Rome",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <footer className="mt-32 border-t border-border/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-16 grid gap-12 md:grid-cols-3">
        <div className="flex items-center gap-4">
          <img src={messina} alt="Messina" className="h-14 w-14 rounded-full object-cover" />
          <div className="text-sm">
            <div className="font-medium">Messina, Sicily</div>
            <div className="text-muted-foreground tabular-nums">{time}</div>
          </div>
        </div>
        <p className="font-display text-2xl leading-snug">
          Thanks for visiting. Have a beautiful day <span className="text-accent">✦</span>
        </p>
        <div className="flex flex-wrap items-start gap-x-6 gap-y-2 text-sm md:justify-end">
          {[
            ["Instagram", "https://instagram.com/shisadem"],
            ["LinkedIn", "https://linkedin.com/in/shisousman"],
            ["YouTube", "https://youtube.com/@shis_adem"],
            ["X", "https://x.com/yourusername"],
            ["CV", "https://yourdomain.com/cv.pdf"],
          ].map(([label, href]) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="hover:text-accent transition-colors underline-offset-4 hover:underline"
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export function Layout() {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
