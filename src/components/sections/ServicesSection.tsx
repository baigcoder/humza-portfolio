"use client";

import React, { useState } from "react";
import Counter from "@/components/effects/Counter";
import SectionLabel from "@/components/layout/SectionLabel";
import { type LucideIcon, Landmark, ChartColumn, ShieldCheck, TrendingUp, BriefcaseBusiness } from "lucide-react";

function MetricCounter({ value }: { value: string }) {
  const match = value.match(/^([^\d.]*)(\d+(?:\.\d+)?)(.*)$/);
  if (!match) return <span>{value}</span>;
  const [, prefix, numStr, suffix] = match;
  const num = parseFloat(numStr);
  const decimals = numStr.includes(".") ? numStr.split(".")[1].length : 0;
  return (
    <Counter
      value={num}
      decimals={decimals}
      prefix={prefix}
      suffix={suffix}
    />
  );
}

/* ── Market-specific service data ──────────────────────────────── */

type MarketKey = "pk" | "gcc";

interface ServiceCard {
  id: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  tags: string[];
  desc: string;
  useCases: string[];
  deliverables: string[];
  metric: { value: string; label: string };
}

const servicesByMarket: Record<MarketKey, ServiceCard[]> = {
  pk: [
    {
      id: "01",
      title: "FBR Tax Strategy & Compliance",
      subtitle: "Income Tax Ordinance 2001 · WHT · PRA / SRB",
      icon: Landmark,
      tags: ["ITO 2001", "WHT Audit", "PRA / SRB", "FBR e-Filing"],
      desc: "End-to-end corporate tax planning under the Income Tax Ordinance 2001, provincial sales tax frameworks (Punjab Revenue Authority, Sindh Revenue Board), and FBR e-filing compliance. Mitigating withholding tax leakage through systematic reconciliation and representing entities before Commissioner Inland Revenue.",
      useCases: [
        "Annual corporate tax return filing & FBR audit defense for textile exporters",
        "WHT reconciliation for FMCG distributors with 500+ vendor base",
        "SRB/PRA provincial sales tax advisory for tech startups scaling in Karachi & Lahore",
      ],
      deliverables: ["Corporate Tax Returns", "WHT Audit & Recovery", "FBR Compliance Advisory", "Cross-Border Tax Structuring"],
      metric: { value: "₨2.4B+", label: "Tax Exposure Managed" },
    },
    {
      id: "02",
      title: "IFRS Transition & SBP Reporting",
      subtitle: "IFRS 9, 15, 16 · SECP · State Bank Prudential",
      icon: ChartColumn,
      tags: ["IFRS 9/15/16", "SECP", "SBP BSD", "Consolidation"],
      desc: "Full IFRS adoption roadmaps for listed companies and financial institutions, including gap analysis against SECP and SBP prudential requirements. Specializing in IFRS 9 ECL modelling for banks, IFRS 16 lease accounting for real estate conglomerates, and consolidated financial statements for groups listed on PSX.",
      useCases: [
        "IFRS 9 Expected Credit Loss modelling for a scheduled commercial bank (SBP compliance)",
        "IFRS 16 transition for a real estate conglomerate with 200+ lease contracts",
        "First-time IFRS adoption for a PSX-listed manufacturing group",
      ],
      deliverables: ["SECP Statutory Reports", "IFRS 16 Lease Models", "SBP Prudential Returns", "PSX Annual Filings"],
      metric: { value: "45+", label: "Entities Transitioned" },
    },
    {
      id: "03",
      title: "Internal Audit & SECP Governance",
      subtitle: "COSO Framework · Code of Corporate Governance",
      icon: ShieldCheck,
      tags: ["COSO", "CCG 2019", "Risk Matrix", "Internal Audit"],
      desc: "Designing internal audit programs aligned with the SECP Code of Corporate Governance 2019, mapping key process flows across supply chain, treasury, and procurement. Building risk matrices for board audit committees and liaising directly with Big 4 external auditors to achieve unqualified opinions.",
      useCases: [
        "Internal audit charter design for a listed pharmaceutical company (CCG 2019 compliance)",
        "Supply chain control mapping for a multinational FMCG operation in Pakistan",
        "Board audit committee reporting framework for a financial services holding company",
      ],
      deliverables: ["Internal Audit Charters", "CCG Compliance Reports", "Risk Assessment Matrices", "Audit Committee Packs"],
      metric: { value: "100%", label: "Unqualified Opinions" },
    },
    {
      id: "04",
      title: "FP&A & Business Advisory",
      subtitle: "3-Statement Models · KPI Dashboards · Growth Strategy",
      icon: TrendingUp,
      tags: ["3-Statement", "Rolling Forecast", "EBITDA", "Unit Economics"],
      desc: "Dynamic budgeting, rolling forecasts, and executive dashboards for Pakistan's high-growth sectors — textiles, IT services, and agri-tech. Building investor-ready financial models for startups seeking Series A from local and international VCs, and fractional CFO advisory for SMEs navigating economic volatility.",
      useCases: [
        "3-statement financial model for a Lahore-based SaaS startup raising Series A",
        "Rolling cash flow forecast for a Faisalabad textile exporter during LC/PKR volatility",
        "KPI dashboard engineering for a D2C e-commerce brand scaling nationally",
      ],
      deliverables: ["Dynamic 3-Statement Models", "Rolling Cash Flow Forecasts", "KPI Dashboards", "Investor Data Rooms"],
      metric: { value: "$18M+", label: "Capital Raised for Clients" },
    },
    {
      id: "05",
      title: "Corporate Finance & M&A Advisory",
      subtitle: "DCF Valuation · Due Diligence · Capital Structuring",
      icon: BriefcaseBusiness,
      tags: ["DCF", "M&A", "LBO", "NBFC Licensing"],
      desc: "Transaction advisory for mid-market M&A in Pakistan's banking, insurance, and manufacturing sectors. Robust DCF valuations, comparable company analysis, and due diligence support. Advising founders on NBFC/EMI licensing with SBP, and structuring Private Equity and venture capital deals.",
      useCases: [
        "Buy-side due diligence for acquisition of a mid-tier insurance company",
        "DCF valuation & fairness opinion for a minority stake sale in a listed bank",
        "SBP EMI licensing financial projections for a fintech startup",
      ],
      deliverables: ["DCF & LBO Models", "Business Valuations", "M&A Due Diligence Reports", "SBP Licensing Packs"],
      metric: { value: "PKR 8B+", label: "Deal Value Advised" },
    },
  ],
  gcc: [
    {
      id: "01",
      title: "UAE Corporate Tax & VAT Advisory",
      subtitle: "CT Law 2022 · VAT (FTA) · Transfer Pricing",
      icon: Landmark,
      tags: ["CT Law 2022", "VAT FTA", "Transfer Pricing", "Free Zone"],
      desc: "Strategic advisory on the UAE Corporate Tax Law (effective June 2023), including Free Zone Qualifying Income optimization, transfer pricing documentation (TP Local & Master Files), and Federal Tax Authority VAT compliance. Designing group structures that maximize the 0% CT rate for qualifying free zone entities while ensuring substance requirements.",
      useCases: [
        "Corporate Tax impact assessment & restructuring for a DMCC-based trading group",
        "Transfer pricing documentation for a JAFZA manufacturer with related-party transactions",
        "VAT recovery strategy for a Dubai-based real estate developer (Input Tax Apportionment)",
      ],
      deliverables: ["CT Registration & Returns", "TP Documentation", "Free Zone Optimization", "FTA VAT Compliance"],
      metric: { value: "AED 340M+", label: "Revenue Under Advisory" },
    },
    {
      id: "02",
      title: "IFRS & Regulatory Reporting",
      subtitle: "IFRS 17 · CBUAE · ADGM / DIFC Standards",
      icon: ChartColumn,
      tags: ["IFRS 17", "CBUAE", "ADGM", "DIFC"],
      desc: "Full IFRS reporting for UAE-based entities, with specialized expertise in IFRS 17 (Insurance Contracts) for CBUAE-regulated insurers, and IFRS 9 ECL modelling for banks supervised by the Central Bank of the UAE. Supporting ADGM and DIFC-regulated entities with fund accounting and regulatory returns.",
      useCases: [
        "IFRS 17 transition project for a national insurance company (CBUAE mandate)",
        "IFRS 9 ECL staging model for a UAE commercial bank's SME portfolio",
        "ADGM fund administrator reporting for a $200M AUM investment fund",
      ],
      deliverables: ["CBUAE Regulatory Returns", "IFRS 17 Actuarial Models", "ADGM/DIFC Fund Reports", "Group Consolidation"],
      metric: { value: "AED 12B+", label: "Assets Reported On" },
    },
    {
      id: "03",
      title: "Internal Audit & AML/CFT Compliance",
      subtitle: "CBUAE AML Framework · FATF Recommendations",
      icon: ShieldCheck,
      tags: ["AML/CFT", "CBUAE", "FATF", "Sanctions Screening"],
      desc: "Designing enterprise-wide internal audit programs for UAE financial institutions and DNFBPs (Designated Non-Financial Businesses and Professions), ensuring compliance with CBUAE AML/CFT regulations and FATF recommendations. Implementing risk-based KYC/CDD frameworks and sanctions screening protocols.",
      useCases: [
        "AML/CFT compliance framework for a Dubai-based exchange house",
        "Internal audit program design for a real estate brokerage (DNFBP compliance)",
        "Enterprise risk assessment for a KSA-expanding fintech licensed by CBUAE",
      ],
      deliverables: ["AML/CFT Frameworks", "KYC/CDD Procedures", "Sanctions Screening Protocols", "goAML Reporting"],
      metric: { value: "Zero", label: "Regulatory Penalties" },
    },
    {
      id: "04",
      title: "FP&A & Gulf Expansion Strategy",
      subtitle: "Multi-Entity Budgeting · FX Treasury · Feasibility Studies",
      icon: TrendingUp,
      tags: ["Multi-Entity", "FX Hedging", "Feasibility", "KSA Vision 2030"],
      desc: "Dynamic financial planning for Gulf conglomerates operating across UAE, KSA, Bahrain, and Oman. Multi-currency treasury management, consolidated rolling forecasts, and feasibility studies for KSA Vision 2030 projects. Building investor-ready models for entities exploring IPOs on ADX, DFM, or Tadawul.",
      useCases: [
        "Multi-entity budget consolidation for a UAE hospitality group (5 entities across 3 GCC states)",
        "Feasibility study for a KSA Vision 2030 logistics & warehousing project",
        "IPO-readiness financial model for a DFM-listed retail conglomerate",
      ],
      deliverables: ["Multi-Entity Budgets", "FX Treasury Models", "Feasibility Studies", "IPO-Ready Financials"],
      metric: { value: "$45M+", label: "Capital Structured" },
    },
    {
      id: "05",
      title: "M&A and Cross-Border Advisory",
      subtitle: "Deal Structuring · Holdco Design · ADGM SPVs",
      icon: BriefcaseBusiness,
      tags: ["Cross-Border M&A", "Holdco", "ADGM SPV", "Shariah Compliance"],
      desc: "Transaction advisory for cross-border M&A between GCC, South Asia, and Africa. Designing holding company structures through ADGM and DIFC, Shariah-compliant deal structuring for Islamic finance transactions, and due diligence support for sovereign wealth fund co-investments and family office acquisitions.",
      useCases: [
        "Cross-border holdco structuring (ADGM SPV) for a PK-origin conglomerate acquiring a UAE logistics firm",
        "Shariah-compliant sukuk structuring advisory for a KSA-based real estate developer",
        "Buy-side due diligence for a family office acquiring a healthcare chain across GCC",
      ],
      deliverables: ["Holdco Structuring", "Shariah Compliance Advisory", "Cross-Border DD Reports", "ADGM SPV Setup"],
      metric: { value: "AED 1.8B+", label: "Deal Pipeline Advised" },
    },
  ],
};

const marketMeta: Record<MarketKey, { label: string; flag: string; tagline: string }> = {
  pk: { label: "Pakistan", flag: "🇵🇰", tagline: "SECP · FBR · SBP · PSX Regulated Markets" },
  gcc: { label: "Gulf & GCC", flag: "🇦🇪", tagline: "CBUAE · FTA · ADGM · DIFC · KSA Vision 2030" },
};

/* ── Component ─────────────────────────────────────────────────── */

export default function ServicesSection() {
  const [market, setMarket] = useState<MarketKey>("pk");
  const [activeId, setActiveId] = useState<string>("01");
  const services = servicesByMarket[market];
  const meta = marketMeta[market];

  const handleMarketSwitch = (m: MarketKey) => {
    setMarket(m);
    setActiveId("01");
  };

  return (
    <section
      id="services"
      className="relative py-28 md:py-36 px-4 sm:px-8 md:px-14 bg-[#0A0A0A] section-divider overflow-hidden"
    >
      {/* Ambient background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[radial-gradient(ellipse_at_top_right,rgba(224,122,56,0.06),transparent_70%)]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[radial-gradient(ellipse_at_bottom_left,rgba(224,122,56,0.04),transparent_70%)]" />
      </div>

      <div className="max-w-[1420px] mx-auto relative z-10">
        {/* Section Header */}
        <SectionLabel index="02" label="Core Advisory Capabilities" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-white leading-[1.08] tracking-tight max-w-2xl">
            Precision services for{" "}
            <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
              demanding
            </span>{" "}
            capital.
          </h2>
          <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-md">
            Every engagement is executed with the discipline, technical depth, and global ethical rigor demanded by the ACCA charter.
          </p>
        </div>

        {/* ── Market Toggle ─────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-12">
          <div className="inline-flex items-center rounded-full border border-white/[0.1] bg-[#090909] p-1.5 gap-1.5 shadow-[inset_0_2px_8px_rgba(0,0,0,0.8)]">
            {(["pk", "gcc"] as MarketKey[]).map((m) => {
              const isActive = market === m;
              const info = marketMeta[m];
              return (
                <button
                  key={m}
                  onClick={() => handleMarketSwitch(m)}
                  className={`
                    relative px-5 py-2 rounded-full text-xs font-semibold tracking-wide transition-all duration-300 flex items-center gap-2 cursor-pointer
                    ${isActive
                      ? "bg-gradient-to-r from-[#E07A38] to-[#FF8A3D] text-[#050505] shadow-[0_0_24px_rgba(224,122,56,0.45)] scale-[1.02]"
                      : "text-white/60 hover:text-white hover:bg-white/[0.05]"
                    }
                  `}
                >
                  <span className="text-sm">{info.flag}</span>
                  <span>{info.label}</span>
                </button>
              );
            })}
          </div>

          {/* Market jurisdiction tags */}
          <div className="flex items-center gap-2 overflow-x-auto scrollbar-hide">
            <span className="w-4 h-[1px] bg-white/20 flex-shrink-0" />
            <span className="text-[10px] font-mono tracking-widest text-white/35 whitespace-nowrap">
              {meta.tagline}
            </span>
          </div>
        </div>

        {/* ── Interactive Services Accordion ─────────────────────── */}
        <div className="space-y-3 transition-all duration-300" key={market}>
          {services.map((s) => {
            const isActive = activeId === s.id;
            return (
              <div
                key={s.id}
                onClick={() => setActiveId(isActive ? "" : s.id)}
                className={`group rounded-2xl border transition-all duration-400 cursor-pointer overflow-hidden ${
                  isActive
                    ? "bg-gradient-to-br from-[#111111] via-[#0F0F0F] to-[#0E0E0E] border-[#E07A38]/40 shadow-[0_12px_48px_rgba(224,122,56,0.1),0_0_0_1px_rgba(224,122,56,0.08)]"
                    : "bg-[#0D0D0D] border-white/[0.06] hover:border-white/[0.14] hover:bg-[#101010]"
                }`}
              >
                {/* Header Bar */}
                <div className="p-6 sm:p-7 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-5 sm:gap-6 min-w-0">
                    {/* Icon */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-xl transition-all duration-300 flex-shrink-0 ${
                      isActive
                        ? "bg-[#E07A38]/15 shadow-[0_0_24px_rgba(224,122,56,0.15)]"
                        : "bg-white/[0.03] group-hover:bg-white/[0.05]"
                    }`}>
                      <s.icon className={`w-5 h-5 ${isActive ? "text-[#E07A38]" : "text-white/70"}`} strokeWidth={1.6} aria-hidden />
                    </div>

                    <div className="min-w-0">
                      <div className="flex flex-wrap items-center gap-3">
                        <span className={`font-mono text-[11px] font-bold transition-colors px-2 py-0.5 rounded ${
                          isActive ? "text-[#E07A38] bg-[#E07A38]/10" : "text-white/25 group-hover:text-white/50"
                        }`}>
                          {s.id}
                        </span>
                        <h3 className="text-base sm:text-lg md:text-xl font-bold text-white group-hover:text-[#FAF8F3] transition-colors">
                          {s.title}
                        </h3>
                      </div>
                      <p className="text-[11px] sm:text-xs text-white/40 mt-1 font-light hidden sm:block font-mono tracking-wide">
                        {s.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Tags + Expand */}
                  <div className="flex items-center gap-3 flex-shrink-0">
                    <div className="hidden lg:flex items-center gap-1.5">
                      {s.tags.slice(0, 3).map((t) => (
                        <span
                          key={t}
                          className={`px-2.5 py-1 rounded-md text-[10px] font-mono transition-all duration-300 ${
                            isActive
                              ? "text-[#E07A38]/80 bg-[#E07A38]/[0.08] border border-[#E07A38]/20"
                              : "text-white/35 bg-white/[0.02] border border-white/[0.04]"
                          }`}
                        >
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      isActive
                        ? "border-[#E07A38] bg-[#E07A38]/10 text-[#E07A38] rotate-45"
                        : "border-white/[0.1] text-white/40 group-hover:border-white/30 group-hover:text-white"
                    }`}>
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path d="M12 5v14M5 12h14" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Expanded Details Panel */}
                {isActive && (
                  <div className="px-6 pb-8 sm:px-7 sm:pb-8 pt-0 border-t border-white/[0.04] anim-fade-in">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-6">
                      {/* Left — Scope + Use Cases */}
                      <div className="lg:col-span-7 space-y-6">
                        {/* Scope */}
                        <div>
                          <p className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38] uppercase mb-2.5 font-semibold flex items-center gap-2">
                            <span className="w-3 h-[1px] bg-[#E07A38]" />
                            Scope & Methodology
                          </p>
                          <p className="text-sm text-white/65 leading-[1.7] font-light">
                            {s.desc}
                          </p>
                        </div>

                        {/* Market-Specific Use Cases */}
                        <div>
                          <p className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mb-3 font-semibold flex items-center gap-2">
                            <span className="w-3 h-[1px] bg-white/20" />
                            {market === "pk" ? "Pakistan" : "Gulf"} Market Use Cases
                          </p>
                          <div className="space-y-2.5">
                            {s.useCases.map((uc, i) => (
                              <div key={i} className="flex gap-3 items-start group/uc">
                                <span className="mt-1.5 w-5 h-5 rounded-md bg-[#E07A38]/10 flex items-center justify-center text-[10px] text-[#E07A38] font-mono font-bold flex-shrink-0">
                                  {String(i + 1).padStart(2, "0")}
                                </span>
                                <p className="text-xs text-white/55 leading-relaxed font-light group-hover/uc:text-white/70 transition-colors">
                                  {uc}
                                </p>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Right — Deliverables + Metric */}
                      <div className="lg:col-span-5 space-y-6">
                        {/* Key Metric */}
                        <div className="rounded-xl bg-gradient-to-br from-[#E07A38]/[0.08] to-[#E07A38]/[0.02] border border-[#E07A38]/15 p-5">
                          <p className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38]/60 uppercase mb-1 font-semibold">
                            Track Record
                          </p>
                          <p className="text-2xl sm:text-3xl font-bold text-[#E07A38]">
                            <MetricCounter value={s.metric.value} />
                          </p>
                          <p className="text-xs text-white/45 mt-0.5 font-light">
                            {s.metric.label}
                          </p>
                        </div>

                        {/* Deliverables */}
                        <div>
                          <p className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase mb-3 font-semibold flex items-center gap-2">
                            <span className="w-3 h-[1px] bg-white/20" />
                            Key Deliverables
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                            {s.deliverables.map((item) => (
                              <div key={item} className="flex items-center gap-2.5 text-xs text-white/70 py-1.5 px-3 rounded-lg bg-white/[0.02] border border-white/[0.04] hover:border-white/[0.08] transition-colors">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38] flex-shrink-0" />
                                <span>{item}</span>
                              </div>
                            ))}
                          </div>

                          {/* Action Button: Inquire for this Scope */}
                          <div className="pt-4 flex items-center justify-between">
                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                window.dispatchEvent(new CustomEvent("set-advisory-scope", { detail: s.title }));
                                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                              }}
                              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-mono font-semibold text-[#0A0A0A] bg-[#FAF8F5] hover:bg-[#E07A38] hover:text-[#0A0A0A] hover:scale-[1.02] transition-all shadow-[0_4px_20px_rgba(255,255,255,0.2)] cursor-pointer"
                            >
                              <span>Inquire for {s.title.split("&")[0].trim()}</span>
                              <span className="text-[#E07A38]">→</span>
                            </button>
                            <span className="text-[10px] font-mono text-white/35 hidden sm:inline">
                              Retained & Advisory Mandate
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* ── Bottom CTA Bar ────────────────────────────────────── */}
        <div className="mt-14 p-7 sm:p-8 rounded-2xl bg-gradient-to-r from-[#111111] via-[#0E0E0E] to-[#111111] border border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-6 relative overflow-hidden">
          {/* Subtle glow */}
          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[120px] bg-[radial-gradient(ellipse,rgba(224,122,56,0.08),transparent_70%)] pointer-events-none" />

          <div className="relative z-10">
            <h4 className="text-base sm:text-lg font-bold text-white mb-1.5 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#E07A38] animate-pulse" />
              Require a tailored engagement or custom scope?
            </h4>
            <p className="text-xs sm:text-sm text-white/50 font-light">
              From one-off statutory memos to continuous fractional CFO advisory — across Pakistan and GCC jurisdictions.
            </p>
          </div>
          <a
            href="#contact"
            className="relative z-10 inline-flex items-center gap-2.5 px-7 py-3 rounded-full text-xs font-semibold tracking-wide text-[#050505] bg-white hover:bg-[#FAF8F3] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] shadow-[0_4px_24px_rgba(255,255,255,0.1)] flex-shrink-0"
          >
            <span>Initiate Confidential Brief</span>
            <span className="text-[#E07A38] text-sm">→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
