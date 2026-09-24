"use client";

import React, { useState } from "react";
import Link from "next/link";
import Counter from "@/components/effects/Counter";
import TiltCard from "@/components/effects/TiltCard";
import CaseStudyDrawer from "@/components/sections/CaseStudyDrawer";
import { playTactileSound } from "@/components/effects/SoundEffects";
import SectionLabel from "@/components/layout/SectionLabel";

const caseStudies = [
  {
    id: "01",
    title: "Multi-Plant IFRS 16 & 15 Technical Conversion",
    client: "Industrial Manufacturing Group · ₨2.4B Turnover",
    category: "Financial Reporting",
    year: "2024",
    challenge: "Complex operating leases across 14 factory facilities requiring urgent IFRS balance sheet transition.",
    solution: "Automated IBR schedules, restated prior-period financials, and trained executive finance personnel.",
    metricValue: 100,
    metricPrefix: "",
    metricSuffix: "%",
    metricDecimals: 0,
    metricLabel: "Unqualified Audit Opinion",
    tags: ["IFRS 16", "IFRS 15", "Consolidation"],
  },
  {
    id: "02",
    title: "Enterprise Risk & Internal Audit Architecture",
    client: "Commercial Infrastructure & Real Estate Group",
    category: "Audit & Assurance",
    year: "2024",
    challenge: "Absent internal audit charter with undetected procurement variance and subcontractor disbursement risks.",
    solution: "Deployed COSO-aligned risk matrix with 42 continuous monitoring checkpoints.",
    metricValue: 40,
    metricPrefix: "",
    metricSuffix: "%",
    metricDecimals: 0,
    metricLabel: "Risk Reduction Achieved",
    tags: ["COSO", "Internal Controls", "Risk"],
  },
  {
    id: "03",
    title: "Corporate Tax Restructuring & FBR Strategy",
    client: "Multi-Entity Consumer Goods Holding",
    category: "Taxation Strategy",
    year: "2023",
    challenge: "Inefficient intercompany models creating double taxation across federal and provincial jurisdictions.",
    solution: "Restructured group tax posture under ITO 2001, reclaiming past withholding deductions.",
    metricValue: 15,
    metricPrefix: "₨",
    metricSuffix: "M+",
    metricDecimals: 0,
    metricLabel: "Annual Tax Saved",
    tags: ["ITO 2001", "WHT Audit", "PRA/SRB"],
  },
  {
    id: "04",
    title: "DCF Valuation & 3-Statement Financial Model",
    client: "Series A B2B Tech Logistics Venture",
    category: "Corporate Finance",
    year: "2023",
    challenge: "No institutional modelling, unit economics, or defensible valuation for VC fundraising.",
    solution: "Built dynamic 5-year 3-statement model, Monte Carlo sensitivity, and DCF valuation deck.",
    metricValue: 2.0,
    metricPrefix: "$",
    metricSuffix: "M",
    metricDecimals: 1,
    metricLabel: "Institutional Round Closed",
    tags: ["DCF", "FP&A", "Venture Capital"],
  },
];

export default function WorkSection() {
  const [selectedCaseId, setSelectedCaseId] = useState<string | null>(null);

  return (
    <section id="work" className="relative py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#050505] border-t border-white/[0.06]">
      <div className="max-w-[1420px] mx-auto">
        {/* Section Header — Compact */}
        <SectionLabel index="04" label="Selected Case Engagements" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.04] tracking-[-0.025em] max-w-2xl">
            Demonstrated results.{" "}
            <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
              Quantified
            </span>{" "}
            impact.
          </h2>
          <p className="text-xs text-white/50 max-w-sm font-light leading-relaxed">
            Resolving intricate accounting complexities and delivering stakeholder assurance.
          </p>
        </div>

        {/* ── Compact Case Grid with 3D Tilt & Animated Metric Tickers ─ */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {caseStudies.map((cs) => (
            <TiltCard key={cs.id} maxTilt={3.5} scale={1.01} className="h-full">
              <div
                onClick={() => {
                  playTactileSound("modal");
                  setSelectedCaseId(cs.id);
                }}
                className="group relative h-full rounded-xl border border-white/[0.08] bg-[#0A0A0A] hover:bg-[#0E0C0A] hover:border-[#E07A38]/50 hover:shadow-[0_16px_44px_rgba(224,122,56,0.12)] transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Corner Architectural Crosshairs (+) */}
                <span className="absolute top-2.5 left-2.5 z-10 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute top-2.5 right-2.5 z-10 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute bottom-2.5 left-2.5 z-10 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute bottom-2.5 right-2.5 z-10 text-[8px] font-mono text-white/25 select-none group-hover:text-[#E07A38] transition-colors">+</span>

                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#E07A38]/[0.08] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top row: Category + Year + Case ID */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-semibold px-2 py-0.5 rounded bg-[#E07A38]/[0.08] border border-[#E07A38]/20">
                          {cs.category}
                        </span>
                        <span className="text-[10px] font-mono text-white/40">{cs.year}</span>
                      </div>
                      <span className="text-[10px] font-mono text-white/25">CASE {cs.id}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-base sm:text-lg font-bold text-white group-hover:text-[#FAF8F3] transition-colors leading-snug mb-1">
                      {cs.title}
                    </h3>

                    {/* Client */}
                    <p className="text-[10px] font-mono text-white/45 mb-4">
                      {cs.client}
                    </p>

                    {/* Challenge → Solution — single compact row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
                      <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3 group-hover:border-white/[0.08] transition-colors">
                        <span className="text-[8px] font-mono tracking-[0.15em] text-[#E07A38]/70 uppercase block mb-1">Challenge</span>
                        <p className="text-[11px] text-white/65 leading-relaxed font-light sm:line-clamp-3">{cs.challenge}</p>
                      </div>
                      <div className="rounded-lg bg-white/[0.02] border border-white/[0.04] p-3 group-hover:border-white/[0.08] transition-colors">
                        <span className="text-[8px] font-mono tracking-[0.15em] text-[#10B981]/70 uppercase block mb-1">Intervention</span>
                        <p className="text-[11px] text-white/65 leading-relaxed font-light sm:line-clamp-3">{cs.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar: Animated Metric + Tags */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
                    {/* Animated Metric Ticker */}
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-bold font-sans text-[#E07A38] leading-none drop-shadow-[0_0_12px_rgba(224,122,56,0.25)]">
                        <Counter
                          value={cs.metricValue}
                          prefix={cs.metricPrefix}
                          suffix={cs.metricSuffix}
                          decimals={cs.metricDecimals}
                        />
                      </span>
                      <span className="text-[9px] font-mono text-white/45 uppercase tracking-wider leading-tight max-w-[120px]">
                        {cs.metricLabel}
                      </span>
                    </div>

                    {/* Tags & Action Link */}
                    <div className="flex items-center gap-2">
                      <div className="hidden xl:flex items-center gap-1">
                        {cs.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2 py-0.5 rounded text-[9px] font-mono text-white/40 bg-white/[0.03] border border-white/[0.06]"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <span className="text-[10px] font-mono text-[#E07A38] group-hover:translate-x-1 transition-transform inline-flex items-center gap-1 font-semibold whitespace-nowrap">
                        <span>Dossier</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>

        {/* ── Compact Bottom CTA ────────────────────────────────── */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-mono tracking-wide text-white/60 border border-white/[0.08] hover:border-[#E07A38]/40 hover:text-white bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38]" />
            <span>Discuss a Similar Engagement</span>
            <span className="text-[#E07A38]">→</span>
          </Link>
        </div>
      </div>

      {/* Slide-out Full Case Dossier Drawer */}
      <CaseStudyDrawer
        caseId={selectedCaseId}
        onClose={() => setSelectedCaseId(null)}
      />
    </section>
  );
}
