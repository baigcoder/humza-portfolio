"use client";

import React from "react";
import TiltCard from "@/components/effects/TiltCard";
import { playTactileSound } from "@/components/effects/SoundEffects";
import SectionLabel from "@/components/layout/SectionLabel";

interface Testimonial {
  id: string;
  author: string;
  role: string;
  organization: string;
  location: string;
  quote: string;
  tag: string;
  impactMetric: string;
  impactLabel: string;
}

const testimonials: Testimonial[] = [
  {
    id: "01",
    author: "Tariq Mehmood, FCA",
    role: "Audit Committee Chairperson",
    organization: "PSX-Listed Industrial Conglomerate",
    location: "Lahore / Karachi",
    quote:
      "Humza’s technical restructuring of our multi-plant IFRS 16 schedules and COSO internal controls was executed with surgical precision. His audit binders withstood exhaustive scrutiny from our Big-4 statutory auditors, yielding an unqualified audit opinion three weeks ahead of filing deadlines.",
    tag: "IFRS 16 & Audit Sign-Off",
    impactMetric: "100%",
    impactLabel: "Unqualified Sign-Off",
  },
  {
    id: "02",
    author: "Kamran Shahzad",
    role: "Managing Director & Chief Executive",
    organization: "Precision Engineering & Manufacturing (₨2.4B Turnover)",
    location: "Punjab, Pakistan",
    quote:
      "When our board confronted massive Section 4C Super Tax liabilities and intercompany withholding notices under Section 122(5A), Humza structured an unassailable legal rebuttal and group relief framework. His command over the Income Tax Ordinance 2001 saved us tens of millions in erroneous assessments.",
    tag: "Corporate Tax & FBR Defense",
    impactMetric: "₨15M+",
    impactLabel: "Annual Tax Saved",
  },
  {
    id: "03",
    author: "Zayn Al-Nuaimi",
    role: "Partner & Head of Corporate Capital",
    organization: "Regional Growth Venture Fund",
    location: "Dubai, United Arab Emirates",
    quote:
      "Humza engineered the institutional 5-year dynamic three-statement financial model and DCF valuation for our portfolio logistics scale-up. The clarity of his cohort unit economics and debt amortization waterfalls gave our syndicate total confidence to lead the $2.0M round.",
    tag: "DCF Valuation & Series A",
    impactMetric: "$2.0M",
    impactLabel: "Growth Equity Closed",
  },
  {
    id: "04",
    author: "Ayesha Siddiqui, ACA",
    role: "Group Head of Financial Planning & Treasury",
    organization: "Omnichannel Consumer Retail Network",
    location: "Lahore, Pakistan",
    quote:
      "By diagnosing receivables bottlenecks and revamping our billing reconciliation cadence, Humza accelerated our cash collection cycle by 19 full days, unlocking ₨45M in immediate non-dilutive liquidity into our corporate treasury. He performs with the caliber of a top-tier advisory partner.",
    tag: "Treasury & Working Capital",
    impactMetric: "19 Days",
    impactLabel: "DSO Accelerated",
  },
];

export default function TestimonialsSection() {
  return (
    <section
      id="endorsements"
      className="relative py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#070707] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/3 -right-32 w-96 h-96 rounded-full bg-[#E07A38]/[0.05] blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-[#E07A38]/[0.03] blur-[100px] pointer-events-none" />

      <div className="max-w-[1420px] mx-auto relative z-10">
        {/* Section Header */}
        <SectionLabel index="06" label="Boardroom Endorsements & Peer Citations" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.04] tracking-[-0.025em] max-w-2xl">
              C-Suite authority.{" "}
              <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
                Quantified
              </span>{" "}
              boardroom trust.
            </h2>
            <p className="text-xs text-white/50 max-w-md font-light leading-relaxed mt-1">
              Direct citations from corporate directors, audit committee chairs, and institutional investment partners.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full text-[10px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 flex items-center gap-1.5 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              VERIFIED BOARD CITATIONS
            </span>
          </div>
        </div>

        {/* 2x2 Bento Grid of Boardroom Citations */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {testimonials.map((t) => (
            <TiltCard key={t.id} maxTilt={3.5} scale={1.01} className="h-full">
              <div
                onClick={() => playTactileSound("tick")}
                className="group relative h-full rounded-xl border border-white/[0.08] bg-[#0A0A0A] hover:bg-[#0E0C0A] hover:border-[#E07A38]/50 hover:shadow-[0_16px_44px_rgba(224,122,56,0.12)] transition-all duration-300 p-6 sm:p-7 flex flex-col justify-between overflow-hidden cursor-default"
              >
                {/* Architectural Crosshairs */}
                <span className="absolute top-2.5 left-2.5 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute top-2.5 right-2.5 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute bottom-2.5 left-2.5 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute bottom-2.5 right-2.5 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>

                {/* Decorative Quotation Glyph in background */}
                <span aria-hidden className="absolute top-12 right-5 text-[110px] leading-none font-serif text-white/[0.035] select-none pointer-events-none group-hover:text-[#E07A38]/[0.1] transition-colors">
                  “
                </span>

                <div>
                  {/* Top Badge & Sector Tag */}
                  <div className="flex items-center justify-between gap-2 mb-4">
                    <span className="text-[9px] font-mono font-bold px-2 py-0.5 rounded bg-[#E07A38]/[0.08] text-[#E07A38] border border-[#E07A38]/20 tracking-wider uppercase">
                      {t.tag}
                    </span>
                    <span className="text-[10px] font-mono text-white/40">{t.location}</span>
                  </div>

                  {/* Quote Body */}
                  <p className="font-serif italic text-[15px] sm:text-[16.5px] text-white/85 leading-[1.6] mb-6">
                    “{t.quote}”
                  </p>
                </div>

                {/* Bottom Row: Author Credentials + Quantified Metric */}
                <div className="flex items-end justify-between gap-4 pt-4 border-t border-white/[0.06]">
                  <div>
                    <h4 className="text-sm font-bold text-white group-hover:text-[#FAF8F5] transition-colors">
                      {t.author}
                    </h4>
                    <p className="text-[11px] text-white/60 font-medium">
                      {t.role}
                    </p>
                    <p className="text-[10px] font-mono text-white/40">
                      {t.organization}
                    </p>
                  </div>

                  <div className="text-right flex-shrink-0">
                    <span className="text-lg sm:text-xl font-bold font-sans text-[#E07A38] leading-none block">
                      {t.impactMetric}
                    </span>
                    <span className="text-[9px] font-mono text-white/45 uppercase tracking-wider block mt-0.5">
                      {t.impactLabel}
                    </span>
                  </div>
                </div>

              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
