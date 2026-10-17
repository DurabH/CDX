"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollable = 
        document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = scrollable > 0 ? window.scrollY / scrollable : 0;
      setProgress(currentProgress);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed inset-x-0 top-0 z-[80] h-1 bg-white/5">
      <motion.div
        className="h-full bg-gradient-to-r from-[#007AFF] via-[#00D4FF] to-[#7dd3fc]"
        style={{
          width: "100%",
          scaleX: progress,
          transformOrigin: "left center",
        }}
      />
    </div>
  );
}

export function SiteShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[#0B0F17] text-white">
      <ScrollProgress />

      <header className="sticky top-0 z-50 border-b border-white/10 bg-[#0B0F17]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link href="/" className="flex items-center gap-3" aria-label="CDX home">
            <div className="relative h-9 w-24 overflow-hidden rounded-lg bg-[#0B0F17] sm:h-10 sm:w-28">
              <Image
                src="/images/branding/CDX_Logo.jpeg"
                alt="CDX logo"
                fill
                priority
                className="object-contain"
              />
            </div>
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`relative text-sm font-medium transition ${
                    active ? "text-white" : "text-slate-300 hover:text-white"
                  }`}
                >
                  {item.label}
                  {active && (
                    <span className="absolute -bottom-2 left-0 h-0.5 w-full rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF]" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:block">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#007AFF] to-[#00D4FF] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_24px_rgba(0,122,255,0.4)] transition hover:scale-[1.01]"
            >
              Book a Call
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-full border border-white/10 p-2 md:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t border-white/10 bg-[#0B0F17] md:hidden"
            >
              <div className="mx-auto flex max-w-7xl flex-col px-4 py-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`rounded-xl px-3 py-2 text-sm font-medium ${
                      pathname === item.href
                        ? "bg-white/5 text-white"
                        : "text-slate-300 hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="relative"
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-white/10 bg-[#0B0F17]">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-12 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="relative h-9 w-24 overflow-hidden rounded-lg bg-[#0B0F17] sm:h-10 sm:w-28">
                <Image
                  src="/images/branding/CDX_Logo.jpeg"
                  alt="CDX logo"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <p className="max-w-md text-sm leading-7 text-slate-400">
              Creative. Develop. Experience. We build premium digital products and brands that move businesses forward.
            </p>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Navigation
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-slate-300">
              Contact
            </p>
            <ul className="space-y-3 text-sm text-slate-400">
              <li>hello@cdx.studio</li>
              <li>+1 (415) 555-0138</li>
              <li>Remote-first, global delivery</li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
