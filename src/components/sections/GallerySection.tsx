"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import TiltCard from "@/components/effects/TiltCard";
import Magnetic from "@/components/effects/Magnetic";

export interface Dignitary {
  name: string;
  role: string;
  badge?: string;
}

export interface GalleryEngagement {
  id: string;
  title: string;
  headline: string;
  date: string;
  location: string;
  category: string;
  image: string;
  description: string;
  dignitaries: Dignitary[];
  deliberations: { index: string; title: string; detail: string }[];
  tags: string[];
  isFeatured?: boolean;
}

const engagements: GalleryEngagement[] = [
  {
    id: "01",
    title: "High-Level Ministerial Consultation on Macro-Fiscal Governance",
    headline: "Consultation alongside Federal Minister for Finance & Revenue H.E. Muhammad Aurangzeb",
    date: "2024",
    location: "Islamabad, Pakistan",
    category: "Ministerial Delegation · Fiscal Architecture",
    image: "/images/gallery/finance-minister-dialogue.webp",
    description:
      "High-level strategic engagement and policy discussion with H.E. Muhammad Aurangzeb, Federal Minister for Finance and Revenue, Government of Pakistan. The consultation addressed macro-economic stabilization, modernization of corporate taxation under the Income Tax Ordinance 2001, and strengthening institutional financial reporting frameworks across national enterprises.",
    dignitaries: [
      {
        name: "H.E. Muhammad Aurangzeb",
        role: "Federal Minister for Finance & Revenue, Government of Pakistan",
        badge: "Federal Cabinet",
      },
      {
        name: "Humza, ACCA",
        role: "Corporate Financial Strategist & Advisory Practitioner",
        badge: "Practitioner",
      },
      {
        name: "Strategic Corporate Dignitary",
        role: "Institutional Banking & Capital Leadership",
        badge: "Institutional",
      },
    ],
    deliberations: [
      {
        index: "01",
        title: "Macro-Fiscal Stabilization & Tax Net Expansion",
        detail:
          "Advancing statutory documentation, minimizing withholding distortions, and structuring efficient corporate compliance under FBR statutes.",
      },
      {
        index: "02",
        title: "IFRS 9, 15 & 16 Corporate Adoption",
        detail:
          "Technical alignment of public and private sector balance sheets with international financial reporting standards for global capital credibility.",
      },
      {
        index: "03",
        title: "Capital Formation & Governance Architecture",
        detail:
          "Institutionalizing transparent internal controls and board governance to stimulate FDI and enterprise transaction velocity.",
      },
    ],
    tags: ["Federal Finance Ministry", "Macro-Fiscal Policy", "FBR Tax Reform", "IFRS Governance"],
    isFeatured: true,
  },
];

// Additional slots for user to expand over time
const upcomingSlots = [
  {
    id: "02",
    title: "Corporate Governance & Audit Committee Roundtable",
    venue: "Lahore / Karachi, Pakistan",
    date: "Scheduled 2024",
    category: "Audit & Assurance Conclave",
    tags: ["SECP Code", "COSO Assurance", "Board Advisory"],
  },
  {
    id: "03",
    title: "GCC Cross-Border Tax & Trade Delegation",
    venue: "Dubai, United Arab Emirates",
    date: "Scheduled 2024/2025",
    category: "Cross-Border Capital Summit",
    tags: ["UAE Corporate Tax", "Transfer Pricing", "Regional Growth"],
  },
];

export default function GallerySection() {
  const [activeItem, setActiveItem] = useState<GalleryEngagement>(engagements[0]);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  // Close lightbox on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightboxOpen(false);
    };
    if (lightboxOpen) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  return (
    <section
      id="engagements"
      className="relative py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#0A0A0A] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 -left-40 w-96 h-96 rounded-full bg-[#E07A38]/[0.05] blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 rounded-full bg-[#E07A38]/[0.04] blur-3xl pointer-events-none" />

      <div className="max-w-[1420px] mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E07A38] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#E07A38] uppercase font-semibold">
            06 · Leadership & High-Level Engagements
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#E07A38]/60 to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-12">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.1] tracking-tight max-w-2xl">
              Dialogue at the{" "}
              <span className="text-[#E07A38] italic font-serif font-normal drop-shadow-[0_0_24px_rgba(224,122,56,0.35)]">
                Apex
              </span>{" "}
              of Fiscal Policy.
            </h2>
            <p className="text-xs text-white/50 max-w-xl font-light leading-relaxed mt-2">
              Documenting strategic ministerial consultations, policymaker delegations, and institutional summits shaping Pakistan&apos;s economic architecture.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono font-medium tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              OFFICIAL DELEGATION ARCHIVE
            </span>
          </div>
        </div>

        {/* ── Featured Showcase Card ──────────────────────────────── */}
        <div className="rounded-2xl md:rounded-3xl bg-[#0E0E0E] border border-white/[0.1] shadow-[0_20px_60px_rgba(0,0,0,0.8)] overflow-hidden transition-all duration-300 hover:border-white/[0.18] mb-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">

            {/* Left Col: High-Res Image with 3D Tilt & Zoom Action (5 cols) */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-center bg-[#070707] border-b lg:border-b-0 lg:border-r border-white/[0.08] relative">
              {/* Corner Crosshairs */}
              <span className="absolute top-3 left-3 z-10 text-[8px] font-mono text-white/20 select-none">+</span>
              <span className="absolute top-3 right-3 z-10 text-[8px] font-mono text-white/20 select-none">+</span>
              <span className="absolute bottom-3 left-3 z-10 text-[8px] font-mono text-white/20 select-none">+</span>
              <span className="absolute bottom-3 right-3 z-10 text-[8px] font-mono text-white/20 select-none">+</span>

              <TiltCard maxTilt={4} scale={1.015} className="w-full">
                <div
                  onClick={() => setLightboxOpen(true)}
                  className="group/img relative w-full aspect-[4/5] rounded-xl overflow-hidden border border-white/[0.12] bg-[#050505] shadow-2xl cursor-pointer hover:border-[#E07A38]/60 transition-all duration-500"
                >
                  <Image
                    src={activeItem.image}
                    alt={activeItem.headline}
                    fill
                    priority
                    sizes="(max-width: 768px) 100vw, 500px"
                    className="object-cover object-top transition-transform duration-700 group-hover/img:scale-[1.03]"
                  />

                  {/* Gradient bottom overlay for subtle mood */}
                  <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#050505]/90 via-[#050505]/30 to-transparent pointer-events-none" />

                  {/* Top Badge: Category */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                    <span className="px-2.5 py-1 rounded-md text-[9px] font-mono font-bold tracking-wider text-[#E07A38] bg-[#0A0A0A]/90 backdrop-blur-md border border-[#E07A38]/30">
                      MINISTERIAL SESSION
                    </span>
                    <span className="px-2 py-0.5 rounded text-[9px] font-mono text-white/70 bg-[#0A0A0A]/80 backdrop-blur-md border border-white/[0.1]">
                      {activeItem.date}
                    </span>
                  </div>

                  {/* Bottom Hover Trigger: Click to Expand */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 rounded-lg bg-[#0C0C0C]/90 backdrop-blur-xl border border-white/[0.12] group-hover/img:border-[#E07A38]/40 transition-colors shadow-lg">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-[#E07A38] animate-pulse" />
                      <span className="text-[10px] font-mono text-white/80 font-medium">
                        {activeItem.location}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono text-[#E07A38] group-hover/img:translate-x-0.5 transition-transform">
                      <span>Expand Photo</span>
                      <span>⤢</span>
                    </span>
                  </div>
                </div>
              </TiltCard>

              {/* Dignitaries Identification Caption below photo */}
              <div className="mt-4 pt-3 border-t border-white/[0.06] text-center">
                <span className="text-[10px] font-mono text-white/40 block">
                  L to R: H.E. Muhammad Aurangzeb · Humza (ACCA) · Senior Dignitary
                </span>
              </div>
            </div>

            {/* Right Col: Comprehensive Executive Briefing Dossier (7 cols) */}
            <div className="lg:col-span-7 p-6 sm:p-8 md:p-10 flex flex-col justify-between">
              <div>
                {/* Meta tags top bar */}
                <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded text-[9px] font-mono uppercase tracking-wider text-[#E07A38] bg-[#E07A38]/10 border border-[#E07A38]/20 font-semibold">
                      {activeItem.category}
                    </span>
                    <span className="text-[11px] font-mono text-white/40">
                      Islamabad Capital Territory
                    </span>
                  </div>
                  <span className="text-[10px] font-mono text-white/30">
                    ARCHIVE RECORD № 2024-FBR-01
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl md:text-[26px] font-bold text-white leading-snug mb-3 tracking-tight">
                  {activeItem.headline}
                </h3>

                {/* Narrative Description */}
                <p className="text-xs sm:text-[13px] text-white/65 leading-relaxed font-light mb-6">
                  {activeItem.description}
                </p>

                {/* Dignitaries Bento Grid */}
                <div className="mb-6">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E07A38] font-bold block mb-2.5">
                    Participating Leadership & Dignitaries
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {activeItem.dignitaries.map((d) => (
                      <div
                        key={d.name}
                        className="p-3 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E07A38]/30 transition-colors"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[8px] font-mono uppercase tracking-wider text-[#E07A38]/80 font-semibold">
                            {d.badge}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                        </div>
                        <div className="text-[12px] font-bold text-white leading-tight mb-1">
                          {d.name}
                        </div>
                        <div className="text-[10px] text-white/45 font-light leading-snug">
                          {d.role}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Deliberations & Advisory Focus Pillars */}
                <div className="mb-6">
                  <span className="text-[9px] font-mono uppercase tracking-[0.2em] text-[#E07A38] font-bold block mb-2.5">
                    Key Deliberation Pillars & Strategic Scope
                  </span>
                  <div className="space-y-2">
                    {activeItem.deliberations.map((item) => (
                      <div
                        key={item.index}
                        className="p-3 rounded-xl bg-[#090909] border border-white/[0.05] hover:border-white/[0.1] transition-colors flex items-start gap-3"
                      >
                        <span className="text-[11px] font-mono text-[#E07A38] font-bold mt-0.5 select-none">
                          {item.index}
                        </span>
                        <div>
                          <div className="text-xs font-semibold text-white mb-0.5">
                            {item.title}
                          </div>
                          <p className="text-[11px] text-white/50 font-light leading-relaxed">
                            {item.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom bar: Tags + Direct CTA */}
              <div className="pt-4 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div className="flex flex-wrap items-center gap-1.5">
                  {activeItem.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 rounded text-[9px] font-mono text-white/45 bg-white/[0.03] border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setLightboxOpen(true)}
                    className="px-4 py-2 rounded-full text-[11px] font-mono text-white/70 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.1] transition-all cursor-pointer"
                  >
                    View High-Res Photo ⤢
                  </button>
                  <Magnetic strength={0.2}>
                    <Link
                      href="#contact"
                      className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-mono font-medium text-[#0A0A0A] bg-white hover:bg-[#FAF8F5] shadow-[0_0_20px_rgba(255,255,255,0.25)] hover:shadow-[0_0_28px_rgba(224,122,56,0.35)] transition-all"
                    >
                      <span>Inquire Mandate</span>
                      <span className="text-[#E07A38]">→</span>
                    </Link>
                  </Magnetic>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Secondary Archive Slots (Built for Easy Future Expansion) ── */}
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 font-semibold">
              Institutional Engagements & Summit Pipeline
            </span>
            <span className="text-[10px] font-mono text-[#E07A38]">
              Archive Active · 1 of 3 Documented
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            {/* Slot 1: Active Feature */}
            <div className="p-4 rounded-xl bg-[#0E0E0E] border border-[#E07A38]/30 relative overflow-hidden">
              <div className="flex items-center justify-between mb-2">
                <span className="text-[9px] font-mono text-[#E07A38] uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-[#E07A38]/10 border border-[#E07A38]/20">
                  Featured Archive
                </span>
                <span className="text-[10px] font-mono text-white/30">2024</span>
              </div>
              <h4 className="text-xs font-bold text-white mb-1 leading-snug">
                Ministerial Policy Consultation · Federal Finance Ministry
              </h4>
              <p className="text-[10px] text-white/45 leading-relaxed font-light line-clamp-2">
                Bilateral consultation alongside H.E. Muhammad Aurangzeb on macro-fiscal governance and tax reforms.
              </p>
            </div>

            {/* Slot 2: Upcoming Conclave */}
            {upcomingSlots.map((slot) => (
              <div
                key={slot.id}
                className="p-4 rounded-xl bg-[#080808] border border-white/[0.06] hover:border-white/[0.12] transition-colors relative"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider px-2 py-0.5 rounded bg-white/[0.03] border border-white/[0.06]">
                    {slot.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/30">{slot.date}</span>
                </div>
                <h4 className="text-xs font-bold text-white/80 mb-1 leading-snug">
                  {slot.title}
                </h4>
                <p className="text-[10px] font-mono text-white/40 leading-relaxed">
                  Venue: {slot.venue}
                </p>
                <div className="mt-2.5 pt-2 border-t border-white/[0.04] flex items-center gap-1.5">
                  {slot.tags.map((tg) => (
                    <span
                      key={tg}
                      className="text-[8px] font-mono text-white/30 px-1.5 py-0.2 rounded bg-white/[0.02]"
                    >
                      {tg}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── High-Resolution Lightbox Modal ────────────────────── */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-8 bg-black/90 backdrop-blur-xl animate-fade-in"
          onClick={() => setLightboxOpen(false)}
        >
          <div
            className="relative max-w-4xl w-full max-h-[92vh] flex flex-col items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute -top-12 right-0 sm:right-0 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center text-sm font-mono transition-colors border border-white/20 cursor-pointer z-10"
              aria-label="Close Lightbox"
            >
              ✕
            </button>

            {/* High-Resolution Framed Image */}
            <div className="relative w-full max-h-[78vh] aspect-[4/5] rounded-2xl overflow-hidden border border-white/[0.2] shadow-[0_24px_80px_rgba(0,0,0,0.95)] bg-[#050505]">
              <Image
                src={activeItem.image}
                alt={activeItem.headline}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 1000px"
                className="object-contain"
              />
            </div>

            {/* Caption Bar */}
            <div className="mt-3 w-full p-3.5 rounded-xl bg-[#0E0E0E]/90 border border-white/[0.1] backdrop-blur-md flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-center sm:text-left">
              <div>
                <div className="text-xs font-bold text-white">
                  {activeItem.headline}
                </div>
                <div className="text-[10px] font-mono text-white/50 mt-0.5">
                  {activeItem.location} · {activeItem.date} · Official Ministerial Archive
                </div>
              </div>
              <span className="text-[10px] font-mono text-[#E07A38] uppercase tracking-wider font-semibold">
                HUMZA · ACCA
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
