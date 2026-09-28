"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { playTactileSound } from "@/components/effects/SoundEffects";
import { Search } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "Credentials", href: "#credentials" },
  { label: "Resources", href: "#resources" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 25);
    window.addEventListener("scroll", onScroll, { passive: true });

    // Track active section for dynamic nav pill lighting
    const sectionIds = [
      "about",
      "services",
      "work",
      "credentials",
      "endorsements",
      "resources",
      "contact",
    ];
    const handleSectionScroll = () => {
      const scrollPosition = window.scrollY + 180;
      let current = "";
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            current = id;
            break;
          }
        }
      }
      setActiveSection(current);
    };
    window.addEventListener("scroll", handleSectionScroll, { passive: true });
    handleSectionScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("scroll", handleSectionScroll);
    };
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    const prevOverflow = root.style.overflow;
    root.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onBreakpoint = () => desktop.matches && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    desktop.addEventListener("change", onBreakpoint);
    return () => {
      root.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
      desktop.removeEventListener("change", onBreakpoint);
    };
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        menuOpen
          ? // no backdrop-filter while open: it would become the containing block for the fixed sheet
            `${scrolled ? "py-2.5" : "py-4"} bg-transparent border-b border-transparent`
          : scrolled
          ? "py-2.5 bg-[#050505]/90 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_12px_40px_rgba(0,0,0,0.9)]"
          : "py-4 bg-transparent"
      }`}
    >
      <div className="max-w-[1532px] mx-auto px-4 sm:px-8 md:px-14 flex items-center justify-between">
        {/* Brand Identity: Sun Emblem + Typography */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-8 h-8 relative transition-transform duration-500 group-hover:rotate-45 flex-shrink-0">
            <Image
              src="/images/sun-emblem.svg"
              alt="Humza Logo"
              width={32}
              height={32}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-[13.5px] font-bold tracking-tight text-white group-hover:text-[#FAF8F3] transition-colors leading-none font-sans">
              HUMZA
            </span>
            <span className="text-[9px] font-mono tracking-[0.22em] text-[#C6956C] uppercase font-medium mt-1 leading-none">
              ACCA · FINANCE
            </span>
          </div>
        </Link>

        {/* Center Nav Capsule with Dynamic Active Indicator */}
        <nav className="hidden lg:flex items-center gap-1 p-1 rounded-full bg-[#0E0E0E]/85 border border-white/[0.09] backdrop-blur-2xl shadow-[0_4px_24px_rgba(0,0,0,0.5)]">
          {navLinks.map((l) => {
            const isActive = activeSection === l.href.replace("#", "");
            return (
              <Link
                key={l.label}
                href={l.href}
                className={`px-4 py-1.5 text-[12.5px] rounded-full transition-all duration-300 tracking-wide cursor-pointer ${
                  isActive
                    ? "bg-white text-[#050505] font-semibold shadow-[0_0_16px_rgba(255,255,255,0.3)] scale-[1.02]"
                    : "text-white/70 hover:text-white hover:bg-white/[0.08] hover:shadow-[0_0_12px_rgba(255,255,255,0.06)] font-medium"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>

        {/* Right Area: Controls & Mobile Hamburger */}
        <div className="flex items-center gap-2 sm:gap-2.5">
          <button
            type="button"
            onClick={() => {
              playTactileSound("click");
              window.dispatchEvent(new CustomEvent("open-command-palette"));
            }}
            aria-label="Open quick search"
            title="Quick search · Ctrl K"
            className="hidden 2xl:inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.035] text-white/60 transition-colors hover:border-[#C6956C]/45 hover:text-white"
          >
            <Search className="h-3.5 w-3.5" aria-hidden />
          </button>

          {/* Executive Dossier Button */}
          <button
            onClick={() => {
              playTactileSound("modal");
              window.dispatchEvent(new CustomEvent("open-dossier"));
            }}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/[0.04] hover:bg-[#C6956C]/15 border border-white/[0.08] hover:border-[#C6956C]/40 text-[11px] font-mono text-white/80 hover:text-white transition-all cursor-pointer shadow-[0_2px_8px_rgba(0,0,0,0.5)]"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6956C]" />
            <span>Dossier</span>
          </button>

          {/* Primary call to action */}
          <Link
            href="#contact"
            className="group hidden xl:inline-flex items-center gap-1.5 pl-4 pr-3.5 py-1.5 rounded-full bg-white text-[#0A0A0A] text-[12.5px] font-semibold tracking-wide shadow-[0_0_18px_rgba(255,255,255,0.18)] hover:shadow-[0_0_24px_rgba(198,149,108,0.45)] transition-shadow duration-300"
          >
            <span>Let&apos;s Talk</span>
            <span className="text-[#C6956C] transition-transform duration-300 group-hover:translate-x-0.5">→</span>
          </Link>

          {/* Mobile/Tablet Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="lg:hidden w-10 h-10 rounded-full bg-[#0E0E0E]/90 border border-white/[0.12] flex flex-col items-center justify-center gap-1.5 cursor-pointer shadow-lg hover:border-white/20 transition-colors"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            <span
              className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "rotate-45 translate-y-[3px]" : ""
              }`}
            />
            <span
              className={`w-4 h-[1.5px] bg-white transition-all duration-300 ${
                menuOpen ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile/Tablet Nav — full-screen sheet behind the header bar */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 -z-10 anim-fade-in" data-lenis-prevent>
          <div
            aria-hidden
            onClick={() => setMenuOpen(false)}
            className="absolute inset-0 bg-[#050505] bg-[radial-gradient(ellipse_80%_50%_at_100%_0%,rgba(198,149,108,0.12),transparent_70%)]"
          />
          <nav
            id="mobile-menu"
            aria-label="Mobile navigation"
            className="relative h-full overflow-y-auto px-4 sm:px-8 pt-[88px] pb-10 flex flex-col"
          >
            <ul className="border-t border-white/[0.08]">
              {navLinks.map((l, i) => {
                const isActive = activeSection === l.href.replace("#", "");
                return (
                  <li key={l.label} className="border-b border-white/[0.08]">
                    <Link
                      href={l.href}
                      onClick={() => setMenuOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className="group flex items-center gap-4 py-3.5 sm:py-4 anim-fade-up anim-initial"
                      style={{ animationDelay: `${40 + i * 35}ms` }}
                    >
                      <span className={`w-6 text-[10px] font-mono tabular-nums ${isActive ? "text-[#C6956C]" : "text-white/30"}`}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className={`flex-1 text-[22px] sm:text-2xl font-semibold tracking-[-0.02em] transition-colors ${isActive ? "text-white" : "text-white/75 group-hover:text-white"}`}>
                        {l.label}
                      </span>
                      <span className={`text-sm transition-transform duration-300 group-hover:translate-x-1 ${isActive ? "text-[#C6956C]" : "text-white/25"}`}>
                        →
                      </span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-command-palette"));
              }}
              className="mt-5 flex w-full items-center justify-between rounded-2xl border border-white/[0.1] bg-white/[0.035] px-5 py-4 text-white/80 transition-colors hover:border-[#C6956C]/40 hover:text-white"
            >
              <span className="flex items-center gap-3 text-sm font-medium"><Search className="h-4 w-4 text-[#C6956C]" aria-hidden />Quick search & navigation</span>
              <span className="font-mono text-[10px] text-white/35">Ctrl K</span>
            </button>

            <button
              onClick={() => {
                setMenuOpen(false);
                window.dispatchEvent(new CustomEvent("open-dossier"));
              }}
              className="mt-6 w-full flex items-center justify-between px-5 py-4 rounded-2xl text-[#0A0A0A] bg-white hover:bg-[#FAF8F5] transition-colors cursor-pointer shadow-[0_0_24px_rgba(255,255,255,0.18)]"
            >
              <span className="text-sm font-semibold">View Executive Dossier / CV</span>
              <span className="text-[#C6956C]">↗</span>
            </button>

            <div className="mt-auto pt-8 flex items-center justify-between text-[10px] font-mono tracking-[0.18em] text-white/35 uppercase">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                Open for Advisory
              </span>
              <span>Lahore · PK</span>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

