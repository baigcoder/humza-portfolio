"use client";

import React, { useEffect } from "react";
import { playTactileSound } from "@/components/effects/SoundEffects";

export interface DetailedCaseStudy {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  challenge: string;
  rootCause: string;
  methodology: {
    phase: string;
    weeks: string;
    title: string;
    tasks: string[];
  }[];
  statutoryBasis: string[];
  boardroomImpact: {
    metric: string;
    label: string;
    description: string;
  }[];
  deliverables: string[];
  tools: string[];
}

export const detailedCaseStudies: Record<string, DetailedCaseStudy> = {
  "01": {
    id: "01",
    number: "01",
    title: "Multi-Plant IFRS 16 & 15 Technical Conversion",
    client: "Industrial Manufacturing Group · ₨2.4B Turnover",
    category: "Financial Reporting & IFRS",
    year: "2024",
    challenge:
      "Complex operating leases across 14 factory facilities, warehouse hubs, and heavy machinery fleets requiring urgent balance sheet capitalization under IFRS 16, alongside bundle-contract revenue recognition realignment under IFRS 15 prior to annual external audit.",
    rootCause:
      "Legacy off-balance-sheet accounting left lease commitments dispersed across divisional operating budgets with no unified discount rate (IBR) or asset-level tracking.",
    methodology: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Lease Contract Discovery & Gap Audit",
        tasks: [
          "Extracted and cataloged 140+ active property, plant, and vehicle lease agreements.",
          "Separated service components (maintenance, security) from pure lease elements to prevent balance sheet inflation.",
          "Formulated defensible Incremental Borrowing Rates (IBR) aligned with plant risk profiles and collateral covenants.",
        ],
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–7",
        title: "Actuarial Modelling & Transition Approach",
        tasks: [
          "Implemented the Modified Retrospective Approach to preserve opening retained earnings integrity without multi-year full restatements.",
          "Built dynamic Excel amortization engines computing Right-of-Use (ROU) assets and split current/non-current lease liabilities.",
          "Engineered IFRS 15 5-step transaction price allocation matrices for multi-year industrial supply agreements.",
        ],
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 8–10",
        title: "Covenant Impact Assessment & ERP Configuration",
        tasks: [
          "Modeled balance sheet gross-up impact on bank debt-to-equity and interest coverage covenants.",
          "Led technical liaison with primary lending consortium to draft covenant clarification addendums.",
          "Mapped new GL chart of accounts in the client ERP for continuous month-end ROU depreciation and interest compounding.",
        ],
      },
      {
        phase: "Phase 4",
        weeks: "Weeks 11–12",
        title: "External Audit Defense & Board Sign-Off",
        tasks: [
          "Prepared comprehensive audit workpaper binder with technical accounting position papers.",
          "Direct defense before Big-4 external audit team, resolving all technical audit queries.",
          "Secured clean, unqualified audit sign-off 21 days ahead of statutory filing deadline.",
        ],
      },
    ],
    statutoryBasis: [
      "IFRS 16 (Leases) — Paragraphs 47–50",
      "IFRS 15 (Revenue from Contracts with Customers)",
      "IAS 36 (Impairment of Assets — CGU Assessment)",
      "SECP Fourth Schedule Disclosure Regulations",
    ],
    boardroomImpact: [
      {
        metric: "100%",
        label: "Audit Opinion",
        description: "Unqualified sign-off achieved with zero material audit adjustments.",
      },
      {
        metric: "₨340M",
        label: "Capitalized Assets",
        description: "Transparent Right-of-Use balance sheet recognition strengthening enterprise asset backing.",
      },
      {
        metric: "21 Days",
        label: "Early Completion",
        description: "Filing completed three weeks ahead of SECP statutory penalty cutoff.",
      },
    ],
    deliverables: [
      "Dynamic IFRS 16 Master Calculation Engine (Automated Excel / VBA)",
      "Technical Position Papers on IBR & Transition Methodology",
      "Board Audit Committee Executive Summary & Covenant Sensitivity Model",
      "ERP General Ledger Account Mapping & Standard Operating Procedure (SOP)",
    ],
    tools: ["IFRS Standards", "Advanced Financial Modelling", "ERP Financials", "Audit Workpapers"],
  },

  "02": {
    id: "02",
    number: "02",
    title: "Enterprise Risk & Internal Audit Architecture",
    client: "Commercial Infrastructure & Real Estate Group",
    category: "Audit & Risk Governance",
    year: "2024",
    challenge:
      "Rapid diversification across 6 commercial real estate projects created severe operational risk blind spots, subcontractor disbursement leakage, and an absent board internal audit charter.",
    rootCause:
      "Decentralized project managers held unilateral procurement approval without automated segregation of duties or independent quantity surveyor certification.",
    methodology: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Enterprise Process Mapping & Leakage Diagnostic",
        tasks: [
          "Conducted forensic audit across ₨1.2B in historical vendor disbursements and subcontract variations.",
          "Mapped procurement-to-pay (P2P) and contractor milestone certification workflows across all job sites.",
          "Identified 42 high-risk control deficiencies susceptible to unauthorized advance payments.",
        ],
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–7",
        title: "COSO Framework Alignment & Charter Drafting",
        tasks: [
          "Drafted official Internal Audit Charter ratified by the Board Audit Committee.",
          "Architected comprehensive Enterprise Risk Register categorized across Financial, Compliance, Operational, and Fraud vectors.",
          "Established dual-authorization matrix enforcing mandatory engineering verification prior to finance release.",
        ],
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 8–10",
        title: "Continuous Monitoring & Whistleblower Protocol",
        tasks: [
          "Designed automated monthly exception reports flagging duplicate invoices, split purchase orders, and unbudgeted variance >3%.",
          "Implemented formal whistleblower policy and vendor code of conduct.",
          "Trained 35 cross-functional department heads on internal control compliance.",
        ],
      },
      {
        phase: "Phase 4",
        weeks: "Weeks 11–12",
        title: "Audit Committee Operationalization",
        tasks: [
          "Instituted quarterly Risk & Audit reporting cadence for independent board directors.",
          "Delivered post-implementation audit confirming zero unauthorized variances over 90 days.",
        ],
      },
    ],
    statutoryBasis: [
      "COSO Internal Control — Integrated Framework (2013)",
      "SECP Listed Companies (Code of Corporate Governance) Regulations",
      "International Standards for the Professional Practice of Internal Auditing (IIA)",
    ],
    boardroomImpact: [
      {
        metric: "40%",
        label: "Risk Reduction",
        description: "Eliminated operational control gaps across procurement and treasury cycles.",
      },
      {
        metric: "₨18.5M",
        label: "Annual Leakage Saved",
        description: "Immediate elimination of unbudgeted subcontractor price inflations.",
      },
      {
        metric: "100%",
        label: "Board Defensibility",
        description: "Full regulatory audit charter established protecting directors from compliance liability.",
      },
    ],
    deliverables: [
      "Board-Approved Internal Audit Charter & Governance Protocol",
      "Dynamic 42-Checkpoint Enterprise Risk Register & Scoring Heatmap",
      "Standard Operating Procedures for Procurement-to-Pay (P2P) Controls",
      "Quarterly Audit Committee Reporting Template & Key Risk Indicators (KRIs)",
    ],
    tools: ["COSO Framework", "Risk Matrix Modeling", "Process Engineering", "Power BI"],
  },

  "03": {
    id: "03",
    number: "03",
    title: "Corporate Tax Restructuring & FBR Strategy",
    client: "Multi-Entity Consumer Goods Holding",
    category: "Corporate Taxation Strategy",
    year: "2023",
    challenge:
      "Holding entity suffered from double taxation across federal and provincial tax authorities (FBR, PRA, SRB), coupled with ₨28M in blocked withholding tax refunds and ongoing scrutiny notices under Section 122(5A).",
    rootCause:
      "Unoptimized intercompany service agreements triggered cascading withholding deductions under Section 153 without statutory exemption certificates.",
    methodology: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Tax Exposure Diagnostic & Scrutiny Analysis",
        tasks: [
          "Conducted forensic reconciliation of CPR (Computerized Payment Receipts) against vendor withholding deductions.",
          "Analyzed open scrutiny notices issued by the Large Taxpayers Office (LTO) and Commissioner Inland Revenue.",
          "Identified unadjusted minimum tax and alternative corporate tax (ACT) credits eligible for carry-forward.",
        ],
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–7",
        title: "Intercompany Restructuring under ITO 2001",
        tasks: [
          "Restructured intra-group shared service agreements to comply with arm's-length transfer pricing principles.",
          "Secured reduced rate and statutory exemption certificates under Section 153/159 from the FBR.",
          "Harmonized provincial sales tax on services (PRA & SRB) to prevent cascading taxation on logistics.",
        ],
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 8–10",
        title: "Audit Defense & CIR Appeals Representation",
        tasks: [
          "Drafted robust factual and legal rebuttal submissions citing High Court and Appellate Tribunal precedents.",
          "Represented the corporate holding before Commissioner Inland Revenue (Appeals), successfully vacating unjustified assessments.",
          "Filed expedited refund applications with complete supporting documentation.",
        ],
      },
      {
        phase: "Phase 4",
        weeks: "Weeks 11–12",
        title: "Super Tax 4C & Ongoing Tax Architecture",
        tasks: [
          "Structured forward-looking group relief provisions under Section 59B of the Income Tax Ordinance 2001.",
          "Calibrated Super Tax 4C liability, optimizing statutory thresholds to legally preserve post-tax margins.",
        ],
      },
    ],
    statutoryBasis: [
      "Income Tax Ordinance 2001 (Sections 4C, 59B, 113, 122, 153, 159)",
      "Punjab Sales Tax on Services Act 2012 (PRA)",
      "Sindh Sales Tax on Services Act 2011 (SRB)",
      "Appellate Tribunal Inland Revenue (ATIR) Precedents",
    ],
    boardroomImpact: [
      {
        metric: "₨15M+",
        label: "Annual Recurring Tax Saved",
        description: "Achieved via elimination of intercompany withholding leakage.",
      },
      {
        metric: "₨22M",
        label: "Refunds Unlocked",
        description: "Successfully processed withheld cash balances directly credited to corporate treasury.",
      },
      {
        metric: "0 Penalties",
        label: "Assessment Sign-Off",
        description: "Vacated erroneous FBR scrutiny additions with zero statutory penalties.",
      },
    ],
    deliverables: [
      "Comprehensive Corporate Tax Restructuring Memorandum",
      "FBR Scrutiny Rebuttal Submissions & Legal Workpaper Dossier",
      "Withholding Tax Reconciliation Matrix & Annual Tax Return Filings",
      "Group Relief & Super Tax Optimization Strategy Document",
    ],
    tools: ["Income Tax Ordinance 2001", "IRIS FBR Portal", "Tax Modeling Workpapers", "PRA / SRB"],
  },

  "04": {
    id: "04",
    number: "04",
    title: "DCF Valuation & 3-Statement Financial Model",
    client: "Series A B2B Tech Logistics Venture",
    category: "Corporate Finance & M&A",
    year: "2023",
    challenge:
      "Venture management sought $2M Series A institutional capital but lacked defensible 5-year dynamic financial statements, cohort unit economics, or a standardized DCF valuation acceptable to venture capital partners.",
    rootCause:
      "Financial data consisted of static accounting ledger exports with no dynamic drivers linking customer acquisition cost (CAC), churn, gross margins, and working capital requirements.",
    methodology: [
      {
        phase: "Phase 1",
        weeks: "Weeks 1–3",
        title: "Historical Unit Economics & Cohort Analysis",
        tasks: [
          "Dissected 24 months of transactional billing data to isolate customer lifetime value (LTV) and payback cycles.",
          "Built driver-based operational revenue bridges linking fleet utilization, route density, and customer cohorts.",
          "Separated fixed technological overhead from variable per-shipment fulfillment costs.",
        ],
      },
      {
        phase: "Phase 2",
        weeks: "Weeks 4–7",
        title: "Dynamic 5-Year Three-Statement Engineering",
        tasks: [
          "Engineered fully integrated, circularity-handled 3-Statement Model (P&L, Balance Sheet, Cash Flow Statement).",
          "Built dynamic debt/convertible note amortization schedule with automated interest compounding.",
          "Programmed real-time toggle switches for Base, Bear, and Bull macroeconomic scenarios.",
        ],
      },
      {
        phase: "Phase 3",
        weeks: "Weeks 8–10",
        title: "Valuation & Monte Carlo Sensitivity",
        tasks: [
          "Constructed Discounted Cash Flow (DCF) model calibrating regional risk-free rates, equity risk premium, and size premium.",
          "Conducted Public Company Comparable (Trading Comps) and Precedent M&A Transaction multiples analysis.",
          "Built two-way sensitivity matrices analyzing enterprise value across WACC (16%–22%) and Terminal Growth (3%–6%).",
        ],
      },
      {
        phase: "Phase 4",
        weeks: "Weeks 11–12",
        title: "Investor Due Diligence Support",
        tasks: [
          "Compiled institutional Virtual Data Room (VDR) financial index.",
          "Participated alongside founding team in technical finance sessions with institutional venture capital analysts.",
          "Assisted in drafting Term Sheet financial covenants and cap table liquidation waterfall.",
        ],
      },
    ],
    statutoryBasis: [
      "International Valuation Standards (IVS 105 — Valuation Approaches)",
      "CFA Institute Financial Modeling & Corporate Valuation Principles",
      "IFRS 13 (Fair Value Measurement)",
    ],
    boardroomImpact: [
      {
        metric: "$2.0M",
        label: "Capital Secured",
        description: "Series A institutional funding round successfully closed on model valuation.",
      },
      {
        metric: "5-Year",
        label: "Dynamic Horizon",
        description: "Board now operates on rolling monthly forecasts with automated variance analysis.",
      },
      {
        metric: "100%",
        label: "Due Diligence Pass",
        description: "Zero formula errors or model breaks during institutional audit review.",
      },
    ],
    deliverables: [
      "Dynamic 5-Year 3-Statement Financial Model (Excel / VBA with Scenario Controls)",
      "Comprehensive DCF & Trading Multiples Valuation Report (48 pages)",
      "Cap Table Waterfall & Anti-Dilution Schedule",
      "Executive Board Investor Pitch Deck (Financial Highlights Appendix)",
    ],
    tools: ["DCF Valuation", "Three-Statement Modeling", "Excel VBA", "Cohort Analytics"],
  },
};

interface CaseStudyDrawerProps {
  caseId: string | null;
  onClose: () => void;
}

export default function CaseStudyDrawer({ caseId, onClose }: CaseStudyDrawerProps) {
  const caseData = caseId ? detailedCaseStudies[caseId] : null;

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        playTactileSound("click");
        onClose();
      }
    };
    if (caseData) {
      playTactileSound("modal");
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [caseData, onClose]);

  if (!caseData) return null;

  const handleRetainClick = () => {
    playTactileSound("success");
    window.dispatchEvent(
      new CustomEvent("set-advisory-scope", {
        detail: caseData.category,
      })
    );
    onClose();
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      setTimeout(() => {
        contactEl.scrollIntoView({ behavior: "smooth" });
      }, 150);
    }
  };

  return (
    <div className="fixed inset-0 z-[200] flex justify-end bg-black/80 backdrop-blur-md transition-opacity duration-300">
      {/* Background backdrop click to close */}
      <div className="absolute inset-0" onClick={() => { playTactileSound("click"); onClose(); }} />

      {/* Drawer Content */}
      <div className="relative w-full max-w-3xl h-full bg-[#0A0A0A] border-l border-white/[0.1] shadow-[-20px_0_60px_rgba(0,0,0,0.9)] flex flex-col z-10 overflow-hidden animate-slide-left">
        
        {/* Architectural Crosshairs */}
        <span className="absolute top-3 left-4 text-[9px] font-mono text-white/20 select-none pointer-events-none">+</span>
        <span className="absolute top-3 right-4 text-[9px] font-mono text-white/20 select-none pointer-events-none">+</span>

        {/* Drawer Header */}
        <div className="p-6 sm:p-8 border-b border-white/[0.08] bg-[#0E0E0E]/90 backdrop-blur-md flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38] animate-pulse" />
              <span className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold">
                CONFIDENTIAL ENGAGEMENT DOSSIER · CASE {caseData.number}
              </span>
              <span className="text-[10px] font-mono text-white/30">| {caseData.year}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-white leading-tight mb-1">
              {caseData.title}
            </h2>
            <p className="text-xs font-mono text-[#E07A38]/90">
              {caseData.client}
            </p>
          </div>

          {/* Close Button */}
          <button
            onClick={() => { playTactileSound("click"); onClose(); }}
            className="w-9 h-9 rounded-full bg-white/[0.05] border border-white/[0.1] flex items-center justify-center text-white/60 hover:text-white hover:bg-white/[0.1] transition-all flex-shrink-0"
            title="Close Dossier (Esc)"
          >
            ✕
          </button>
        </div>

        {/* Drawer Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8 text-white/80 font-sans text-xs sm:text-[13px] leading-relaxed">
          
          {/* Executive Overview & Diagnostic */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E07A38] font-bold">
              01 · Problem Diagnostic & Root Cause
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[9px] font-mono tracking-widest text-white/40 uppercase block mb-1">
                  Mandate Context
                </span>
                <p className="text-white/80 leading-relaxed font-light">
                  {caseData.challenge}
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                <span className="text-[9px] font-mono tracking-widest text-[#E07A38]/80 uppercase block mb-1">
                  Root Cause Uncovered
                </span>
                <p className="text-white/80 leading-relaxed font-light">
                  {caseData.rootCause}
                </p>
              </div>
            </div>
          </div>

          {/* Boardroom Impact Key Metrics */}
          <div className="space-y-3">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E07A38] font-bold">
              02 · Quantified Boardroom Outcomes
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {caseData.boardroomImpact.map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-gradient-to-b from-[#141210] to-[#0A0A0A] border border-[#E07A38]/20"
                >
                  <div className="text-2xl font-bold font-sans text-[#E07A38] mb-1">
                    {item.metric}
                  </div>
                  <div className="text-[10px] font-mono text-white/50 uppercase tracking-wider mb-2">
                    {item.label}
                  </div>
                  <p className="text-[11px] text-white/70 font-light leading-snug">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* 12-Week Execution Roadmap */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono uppercase tracking-[0.2em] text-[#E07A38] font-bold">
              03 · 12-Week Execution Methodology
            </h3>
            <div className="space-y-3">
              {caseData.methodology.map((phase, pIdx) => (
                <div
                  key={pIdx}
                  className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05] hover:border-white/[0.1] transition-colors"
                >
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-[#E07A38]/10 text-[#E07A38] border border-[#E07A38]/20">
                        {phase.phase}
                      </span>
                      <span className="text-[12px] font-bold text-white">
                        {phase.title}
                      </span>
                    </div>
                    <span className="text-[10px] font-mono text-white/40">
                      {phase.weeks}
                    </span>
                  </div>
                  <ul className="space-y-1.5 pl-2 mt-2">
                    {phase.tasks.map((task, tIdx) => (
                      <li key={tIdx} className="flex items-start gap-2 text-white/65 text-[11.5px] font-light">
                        <span className="text-[#E07A38] mt-0.5">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Statutory Frameworks & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Statutory Standards */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] font-mono tracking-widest text-[#10B981] uppercase font-bold block mb-2">
                Statutory Standards Applied
              </span>
              <ul className="space-y-1.5 text-[11px] text-white/70 font-mono">
                {caseData.statutoryBasis.map((std, sIdx) => (
                  <li key={sIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                    <span>{std}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Deliverables */}
            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.05]">
              <span className="text-[10px] font-mono tracking-widest text-[#E07A38] uppercase font-bold block mb-2">
                Tangible Institutional Deliverables
              </span>
              <ul className="space-y-1.5 text-[11px] text-white/70 font-mono">
                {caseData.deliverables.map((del, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38]" />
                    <span>{del}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        {/* Drawer Bottom Action Bar */}
        <div className="p-5 sm:p-6 border-t border-white/[0.08] bg-[#0E0E0E] flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="text-center sm:text-left">
            <span className="text-[10px] font-mono text-white/40 block">Facing a comparable corporate challenge?</span>
            <span className="text-xs font-semibold text-white">Retain Humza for this scope of advisory.</span>
          </div>

          <button
            onClick={handleRetainClick}
            className="w-full sm:w-auto px-6 py-2.5 rounded-full text-xs font-semibold text-[#0A0A0A] bg-white hover:bg-[#FAF8F5] shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(224,122,56,0.45)] transition-all duration-300 hover:scale-[1.03] flex items-center justify-center gap-2"
          >
            <span>Retain for Similar Engagement</span>
            <span className="text-[#E07A38]">→</span>
          </button>
        </div>

      </div>
    </div>
  );
}
