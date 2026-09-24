"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Magnetic from "@/components/effects/Magnetic";
import SectionLabel from "@/components/layout/SectionLabel";

interface ArticleKeyPoint {
  title: string;
  desc: string;
}

interface Article {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  overview: string;
  keyPoints: ArticleKeyPoint[];
  statutoryBasis: string;
  takeaways: string[];
}

const articles: Article[] = [
  {
    id: "01",
    title: "Navigating IFRS 16 Balance Sheet Transition for Multi-Plant Groups",
    category: "Technical Accounting",
    readTime: "6 min",
    date: "Q1 2024",
    summary:
      "IBR determination, Right-of-Use asset impairment testing, and the presentation shift on EBITDA and debt covenants.",
    overview:
      "The mandatory transition to IFRS 16 (Leases) introduces fundamental balance sheet re-engineering for capital-intensive enterprises in Pakistan and the GCC. By eliminating off-balance-sheet operating leases, entities face sudden gross-up of assets and liabilities, shifting key leverage ratios and EBITDA multiples.",
    keyPoints: [
      {
        title: "Incremental Borrowing Rate (IBR) Calibration",
        desc: "Establishing defensible IBRs reflects entity credit risk, lease term, and collateral quality across disparate production plants rather than relying on generic KIBOR benchmarks.",
      },
      {
        title: "ROU Asset Impairment & Disclosures (IAS 36)",
        desc: "Carrying values of Right-of-Use assets must be systematically evaluated under cash-generating unit (CGU) models, particularly where plant utilization fluctuates.",
      },
      {
        title: "Debt Covenant Renegotiation",
        desc: "Proactively engaging lending syndicates to clarify that increased lease liabilities do not represent deteriorating insolvency risk under existing financial covenants.",
      },
    ],
    statutoryBasis: "IFRS 16 Paragraphs 47–50 · IAS 36 Impairment of Assets · SECP S.R.O. Notification",
    takeaways: [
      "Select the Modified Retrospective approach to avoid cumbersome retrospective restatement where historical lease documentation is fragmented.",
      "Uncouple non-lease service components from long-term real estate contracts to prevent unnecessary inflation of lease liabilities.",
      "Brief board audit committees on the artificial EBITDA uplift and corresponding increase in depreciation and finance cost.",
    ],
  },
  {
    id: "02",
    title: "Redesigning Internal Controls for High-Growth Enterprises",
    category: "Risk Assurance",
    readTime: "5 min",
    date: "Q4 2023",
    summary:
      "Deploying risk-based COSO matrices that eliminate procurement vulnerabilities without stalling operational velocity.",
    overview:
      "Rapidly scaling enterprises often outgrow their early accounting systems before instituting formal segregation of duties. This operational gap creates heightened vulnerability to unauthorized disbursements, vendor kickbacks, and inventory shrinkage that undermine stakeholder assurance.",
    keyPoints: [
      {
        title: "COSO 2013 Framework Alignment",
        desc: "Mapping enterprise workflows against the 17 principles of the COSO internal control framework, focusing heavily on control environment and information/communication channels.",
      },
      {
        title: "Segregation of Duties (SoD) in ERP Workflows",
        desc: "Configuring role-based access restrictions within SAP/Oracle/ERP setups so purchase order approval, goods receipt, and payment release cannot be executed by the same individual.",
      },
      {
        title: "Continuous Automated Audit Checkpoints",
        desc: "Replacing cumbersome annual tick-box audits with 42 real-time continuous monitoring exception logs directly flagged to internal audit leadership.",
      },
    ],
    statutoryBasis: "COSO 2013 Internal Control Integrated Framework · SECP Listed Companies Regulations 2019",
    takeaways: [
      "Conduct a forensic baseline audit of vendor master files to eliminate dormant entities and duplicate tax registration numbers.",
      "Empower the Internal Audit Charter with direct dual-reporting lines to the Board Audit Committee rather than executive management.",
      "Document standard operating procedures (SOPs) with visual flowcharts and approval thresholds.",
    ],
  },
  {
    id: "03",
    title: "Pakistan Corporate Tax Reform: Key Exposures & FBR Strategy",
    category: "Statutory Taxation",
    readTime: "7 min",
    date: "Q3 2023",
    summary:
      "Super tax revisions, minimum tax provisions under Section 113, and PRA/SRB sales tax reconciliation for corporate holdings.",
    overview:
      "Successive Federal Finance Acts have substantially heightened corporate tax obligations in Pakistan. Between graduated Super Tax rates under Section 4C, stringent withholding verification, and provincial sales tax audits, companies must shift from year-end compliance to predictive tax architecture.",
    keyPoints: [
      {
        title: "Section 4C Super Tax Optimization",
        desc: "Analyzing income brackets exceeding PKR 150M to appropriately account for graduated 1% to 10% super tax liabilities while evaluating constitutional appellate status.",
      },
      {
        title: "Minimum Tax (Section 113) & Turnover Reconciliation",
        desc: "Managing corporate entities operating on tight gross margins where turnover tax exceeds normal tax liability, tracking 3-year carry-forward credit mechanisms.",
      },
      {
        title: "Provincial (PRA/SRB) vs. Federal (FBR) Harmonization",
        desc: "Resolving jurisdictional friction over taxable service definitions (e.g. IT services, freight forwarding) to prevent debilitating double-tax assessments.",
      },
    ],
    statutoryBasis: "Income Tax Ordinance 2001 (Sections 4C, 113, 165) · Punjab Sales Tax on Services Act 2012",
    takeaways: [
      "Maintain monthly reconciliation schedules between FBR e-filing portal withholdings and bank statements to minimize year-end audit notices.",
      "Structure intercompany shared service agreements with formal transfer pricing documentation complying with Section 108.",
      "Engage competent ACCA representation before the Commissioner Inland Revenue (Appeals) well before adverse assessments become final.",
    ],
  },
  {
    id: "04",
    title: "From Retrospective Bookkeeping to Strategic Capital Velocity",
    category: "Corporate Strategy",
    readTime: "4 min",
    date: "Q2 2023",
    summary:
      "Why executive finance leadership demands predictive 3-statement modelling and scenario planning over historical bookkeeping.",
    overview:
      "Traditional accounting answers 'what happened last quarter.' Strategic financial leadership answers 'what happens if KIBOR shifts 200 bps, or if our major customer delays disbursement by 45 days.' The modern CFO/Advisory practice functions as an operational navigator driving enterprise valuation.",
    keyPoints: [
      {
        title: "Integrated 3-Statement Dynamic Modelling",
        desc: "Interlinking Income Statement, Balance Sheet, and Cash Flow schedules so balance sheet working capital shifts immediately reflect in net liquidity without manual re-keying.",
      },
      {
        title: "13-Week Rolling Cash Flow Forecasting",
        desc: "Instituting high-frequency operational cash forecasting to anticipate short-term treasury bottlenecks, LC retirements, and tax payment deadlines.",
      },
      {
        title: "DCF & Sensitivity Analysis for Institutional Capital",
        desc: "Calibrating WACC and terminal growth rates under Monte Carlo simulation models, giving venture founders defensible valuation benchmarks for Series A rounds.",
      },
    ],
    statutoryBasis: "International Valuation Standards (IVS) · ACCA Strategic Business Leader (SBL) Disciplines",
    takeaways: [
      "Automate general ledger exports into live executive dashboards with visual variance indicators against annual budgeted targets.",
      "Tie operational department KPIs directly to working capital velocity (DSO, DPO, DIO) rather than top-line revenue alone.",
      "Present rolling forecasts to executive leadership and prospective investors with clear bull, base, and stress-test scenarios.",
    ],
  },
];

export default function JournalSection() {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const copyBriefing = (art: Article) => {
    const text = `${art.title}\n\nOverview:\n${art.overview}\n\nStatutory Basis: ${art.statutoryBasis}\n\nAuthor: Humza, ACCA (humza.acca@advisory.pk)`;
    navigator.clipboard.writeText(text);
    showToast("✓ Briefing summary copied to clipboard!");
  };

  // Close modal on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedArticle(null);
    };
    if (selectedArticle) {
      window.addEventListener("keydown", handleKey);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [selectedArticle]);

  return (
    <section
      id="journal"
      className="relative py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#050505] border-t border-white/[0.06]"
    >
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full bg-[#181512] text-[#FAF8F5] text-xs font-mono font-medium border border-[#E07A38]/50 shadow-[0_8px_30px_rgba(224,122,56,0.3)] animate-fade-in flex items-center gap-2">
          <span>{toastMsg}</span>
        </div>
      )}

      <div className="max-w-[1420px] mx-auto">
        {/* Section Header */}
        <SectionLabel index="07" label="Strategic Journal & Insights" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.04] tracking-[-0.025em] max-w-2xl">
              Technical clarity.{" "}
              <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
                Published
              </span>{" "}
              thinking.
            </h2>
            <p className="text-xs text-white/50 max-w-sm font-light leading-relaxed mt-1">
              Analytical perspectives on IFRS, governance, and statutory compliance. Click any brief to read the full analysis.
            </p>
          </div>

          <span className="text-[10px] font-mono text-white/40 tracking-wider">
            4 EXECUTIVE BRIEFS PUBLISHED
          </span>
        </div>

        {/* ── Compact Card Grid ──────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {articles.map((item) => (
            <article
              key={item.id}
              onClick={() => setSelectedArticle(item)}
              className="group relative rounded-xl border border-white/[0.08] bg-[#0A0A0A] hover:bg-[#0E0C0A] overflow-hidden transition-all duration-300 hover:border-[#E07A38]/45 hover:shadow-[0_16px_40px_rgba(224,122,56,0.1)] hover:-translate-y-1.5 cursor-pointer flex flex-col justify-between"
            >
              {/* Top accent bar */}
              <div className="h-[2px] w-full bg-gradient-to-r from-[#E07A38]/40 via-[#E07A38]/20 to-transparent group-hover:from-[#E07A38] group-hover:via-[#FF8A3D] group-hover:to-[#E07A38]/40 transition-all duration-500" />

              <div className="p-5 flex flex-col h-full justify-between">
                <div>
                  {/* Meta */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[9px] font-mono tracking-[0.15em] text-[#E07A38] uppercase font-bold px-2 py-0.5 rounded bg-[#E07A38]/[0.08] border border-[#E07A38]/20">
                      {item.category}
                    </span>
                    <span className="text-[9px] font-mono text-white/30">{item.id}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm sm:text-[15px] font-bold text-white group-hover:text-[#FAF8F3] transition-colors leading-snug mb-2 line-clamp-2 min-h-[2.5rem]">
                    {item.title}
                  </h3>

                  {/* Summary */}
                  <p className="text-[11px] text-white/50 leading-relaxed font-light line-clamp-3 mb-4">
                    {item.summary}
                  </p>
                </div>

                {/* Bottom bar */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between mt-auto">
                  <div className="flex items-center gap-2 text-[9px] font-mono text-white/40">
                    <span>{item.date}</span>
                    <span className="text-white/20">·</span>
                    <span>{item.readTime}</span>
                  </div>
                  <div className="w-7 h-7 rounded-full border border-white/[0.1] flex items-center justify-center group-hover:border-[#E07A38] group-hover:bg-[#E07A38] transition-all duration-300">
                    <span className="text-[10px] text-white/40 group-hover:text-[#050505] font-bold transition-all duration-300 group-hover:translate-x-0.5">
                      →
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* ── Full Executive Article Reader Modal ─────────────────── */}
      {selectedArticle && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[105] flex items-center justify-center p-4 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl animate-fade-in"
          onClick={() => setSelectedArticle(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[88vh] rounded-2xl bg-[#0D0D0D] border border-white/[0.15] shadow-[0_24px_80px_rgba(0,0,0,0.95),0_0_40px_rgba(224,122,56,0.12)] overflow-hidden flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-6 border-b border-white/[0.08] bg-[#111111] flex items-start justify-between gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-2">
                  <span className="text-[9px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold px-2 py-0.5 rounded bg-[#E07A38]/10 border border-[#E07A38]/20">
                    {selectedArticle.category}
                  </span>
                  <span className="text-[10px] font-mono text-white/40">
                    {selectedArticle.date} · {selectedArticle.readTime} Read
                  </span>
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white leading-snug">
                  {selectedArticle.title}
                </h3>
                <p className="text-[11px] font-mono text-white/45 mt-1">
                  Authored by Humza, ACCA · Corporate Advisory Practice
                </p>
              </div>

              <button
                onClick={() => setSelectedArticle(null)}
                className="w-8 h-8 rounded-full bg-white/[0.06] hover:bg-white/[0.14] text-white/60 hover:text-white flex items-center justify-center text-sm font-mono transition-colors flex-shrink-0 cursor-pointer"
                aria-label="Close Article"
              >
                ✕
              </button>
            </div>

            {/* Scrollable Article Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-white/80 font-light text-sm leading-relaxed">
              {/* Executive Overview */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E07A38] font-semibold mb-2">
                  Executive Briefing Overview
                </h4>
                <p className="text-white/70 leading-relaxed font-light">
                  {selectedArticle.overview}
                </p>
              </div>

              {/* Key Technical Analysis Points */}
              <div className="space-y-3">
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E07A38] font-semibold">
                  Technical Architecture & Deliberation
                </h4>
                <div className="space-y-3">
                  {selectedArticle.keyPoints.map((kp, idx) => (
                    <div
                      key={kp.title}
                      className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]"
                    >
                      <div className="flex items-center gap-2 text-xs font-semibold text-white mb-1">
                        <span className="text-[#E07A38] font-mono">0{idx + 1}.</span>
                        <span>{kp.title}</span>
                      </div>
                      <p className="text-xs text-white/60 leading-relaxed font-light">
                        {kp.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Statutory & Regulatory Basis */}
              <div className="p-4 rounded-xl bg-[#14120F] border border-[#E07A38]/20">
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#E07A38] font-bold block mb-1">
                  Statutory & Compliance Authority
                </span>
                <p className="text-xs font-mono text-white/70">
                  {selectedArticle.statutoryBasis}
                </p>
              </div>

              {/* Executive Takeaways */}
              <div>
                <h4 className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#E07A38] font-semibold mb-2">
                  Actionable Takeaways for Corporate Leadership
                </h4>
                <ul className="space-y-2">
                  {selectedArticle.takeaways.map((t, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs text-white/70">
                      <span className="text-[#10B981] mt-0.5 font-bold">✓</span>
                      <span>{t}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Footer Actions */}
            <div className="p-4 sm:p-5 border-t border-white/[0.08] bg-[#0A0A0A] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <button
                onClick={() => copyBriefing(selectedArticle)}
                className="inline-flex items-center gap-2 text-xs font-mono text-white/60 hover:text-white transition-colors cursor-pointer"
              >
                <span>📋 Copy Briefing Summary</span>
              </button>

              <div className="flex items-center gap-3">
                <button
                  onClick={() => setSelectedArticle(null)}
                  className="px-4 py-2 rounded-full text-xs font-mono text-white/60 hover:text-white bg-white/[0.04] hover:bg-white/[0.08] border border-white/[0.08] transition-all cursor-pointer"
                >
                  Close Reader
                </button>
                <Magnetic strength={0.2}>
                  <Link
                    href="#contact"
                    onClick={() => setSelectedArticle(null)}
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-mono font-medium text-[#0A0A0A] bg-white hover:bg-[#FAF8F5] shadow-lg transition-all"
                  >
                    <span>Consult on this Topic</span>
                    <span className="text-[#E07A38]">→</span>
                  </Link>
                </Magnetic>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
