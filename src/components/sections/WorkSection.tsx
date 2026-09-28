"use client";

import React, { useState } from "react";
import Link from "next/link";
import CaseStudyDrawer from "@/components/sections/CaseStudyDrawer";
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
  const openCase = (id: string) => setSelectedCaseId(id);

  return (
    <section id="work" className="relative py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#050505] section-divider">
      <div className="max-w-[1420px] mx-auto">
        {/* Section Header — Compact */}
        <SectionLabel index="04" label="Selected Case Engagements" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <h2 className="section-title text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.04] tracking-[-0.025em] max-w-2xl">
            Complex finance.{" "}
            <span className="text-[#C6956C] italic font-serif font-normal text-glow-amber">
              Clear
            </span>{" "}
            outcomes.
          </h2>
          <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-sm">
            Selected engagements across reporting, risk, tax, and corporate finance.
          </p>
        </div>

        {/* Clear, stable case summaries; each card opens the full engagement dossier. */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-6">
          {caseStudies.map((cs) => (
              <article
                key={cs.id}
                role="button"
                tabIndex={0}
                aria-haspopup="dialog"
                onClick={() => openCase(cs.id)}
                onKeyDown={(event) => {
                  if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openCase(cs.id);
                  }
                }}
                className="group relative h-full rounded-2xl border border-white/[0.08] bg-gradient-to-br from-[#11100F] to-[#090909] hover:border-[#C6956C]/35 hover:shadow-[0_18px_48px_rgba(0,0,0,0.35)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6956C]/70 transition-all duration-300 overflow-hidden flex flex-col justify-between cursor-pointer"
              >
                {/* Corner Architectural Crosshairs (+) */}

                {/* Hover glow */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#C6956C]/[0.08] rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                <div className="relative p-6 sm:p-7 flex-1 flex flex-col justify-between">
                  <div>
                    {/* Top row: Category + Year + Case ID */}
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <span className="text-[10px] font-mono tracking-[0.16em] text-[#D4A47C] uppercase font-semibold px-2.5 py-1 rounded-md bg-[#C6956C]/[0.08] border border-[#C6956C]/20">
                          {cs.category}
                        </span>
                        <span className="text-[10px] font-mono text-white/40">{cs.year}</span>
                      </div>
                      <span className="text-[10px] font-mono text-white/25">CASE {cs.id}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#FAF8F3] transition-colors leading-snug mb-1.5">
                      {cs.title}
                    </h3>

                    {/* Client */}
                    <p className="text-xs font-mono text-white/50 mb-5">
                      {cs.client}
                    </p>

                    {/* Challenge → Solution — single compact row */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-5">
                      <div className="rounded-xl bg-black/20 border border-white/[0.06] p-4 group-hover:border-white/[0.1] transition-colors">
                        <span className="text-[9px] font-mono tracking-[0.15em] text-[#D1A27B] uppercase block mb-1.5">Challenge</span>
                        <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-light sm:line-clamp-3">{cs.challenge}</p>
                      </div>
                      <div className="rounded-xl bg-black/20 border border-white/[0.06] p-4 group-hover:border-white/[0.1] transition-colors">
                        <span className="text-[9px] font-mono tracking-[0.15em] text-[#D1A27B] uppercase block mb-1.5">Approach</span>
                        <p className="text-xs sm:text-[13px] text-white/70 leading-relaxed font-light sm:line-clamp-3">{cs.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Bottom bar: Animated Metric + Tags */}
                  <div className="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06]">
                    {/* Animated Metric Ticker */}
                    <div className="flex items-center gap-3">
                      <span className="text-xl sm:text-2xl font-semibold font-sans text-[#D8AD8B] leading-none">
                        {cs.metricPrefix}{cs.metricValue.toLocaleString("en", { minimumFractionDigits: cs.metricDecimals, maximumFractionDigits: cs.metricDecimals })}{cs.metricSuffix}
                      </span>
                      <span className="text-[10px] font-mono text-white/55 uppercase tracking-wider leading-tight max-w-[130px]">
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

                      <span className="text-[11px] font-medium text-white/65 group-hover:text-[#D8AD8B] group-hover:translate-x-0.5 transition-all inline-flex items-center gap-2 whitespace-nowrap">
                        <span>View case</span>
                        <span>→</span>
                      </span>
                    </div>
                  </div>
                </div>
              </article>
          ))}
        </div>

        {/* ── Compact Bottom CTA ────────────────────────────────── */}
        <div className="mt-8 flex items-center justify-center">
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-[11px] font-mono tracking-wide text-white/60 border border-white/[0.08] hover:border-[#C6956C]/40 hover:text-white bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#C6956C]" />
            <span>Discuss a Similar Engagement</span>
            <span className="text-[#C6956C]">→</span>
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
