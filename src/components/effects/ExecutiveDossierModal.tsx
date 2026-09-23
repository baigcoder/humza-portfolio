"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

export default function ExecutiveDossierModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-dossier", handleOpen);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("open-dossier", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("humza.acca@advisory.pk");
    showToast("✓ Copied: humza.acca@advisory.pk");
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[1200] flex items-center justify-center p-3 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-fade-in select-none"
      onClick={() => setIsOpen(false)}
    >
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[1300] px-5 py-2.5 rounded-full bg-[#181512] text-[#FAF8F5] text-xs font-mono font-medium border border-[#E07A38]/50 shadow-[0_8px_30px_rgba(224,122,56,0.3)] animate-fade-in flex items-center gap-2">
          <span>{toastMsg}</span>
        </div>
      )}

      <div
        className="relative max-w-4xl w-full max-h-[92vh] rounded-2xl bg-[#0C0C0C] border border-white/[0.14] shadow-[0_24px_80px_rgba(0,0,0,0.95),0_0_50px_rgba(224,122,56,0.15)] overflow-hidden flex flex-col select-text"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Dossier Top Bar */}
        <div className="px-6 py-4 border-b border-white/[0.08] bg-[#111111] flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 relative flex-shrink-0">
              <Image src="/images/sun-emblem.svg" alt="Emblem" width={32} height={32} />
            </div>
            <div>
              <span className="text-[10px] font-mono tracking-[0.25em] text-[#E07A38] uppercase font-bold block">
                EXECUTIVE CURRICULUM VITAE
              </span>
              <span className="text-xs text-white/60 font-mono">
                Charter Dossier № PK-ACCA-2024
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-full text-[11px] font-mono font-semibold text-white bg-white/[0.08] hover:bg-[#E07A38] hover:text-[#0A0A0A] border border-white/[0.1] hover:border-[#E07A38] transition-all flex items-center gap-1.5 cursor-pointer"
            >
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4H7v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
              </svg>
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close"
              className="w-8 h-8 rounded-full border border-white/[0.1] text-white/50 hover:text-white hover:border-white/30 flex items-center justify-center transition-colors cursor-pointer"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Dossier Body — Scrollable */}
        <div className="p-6 sm:p-8 md:p-10 overflow-y-auto space-y-8 font-sans">
          {/* Header Section */}
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-white/[0.08]">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight font-sans">
                Humza
              </h2>
              <p className="text-sm font-mono text-[#E07A38] mt-1 font-semibold tracking-wide">
                ACCA Chartered Certified Accountant · Corporate Financial Strategist
              </p>
              <p className="text-xs text-white/50 mt-2 font-light max-w-lg leading-relaxed">
                Operating at the confluence of capital allocation, statutory regulatory architecture, and board governance across Pakistan and the GCC.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] text-xs font-mono space-y-2 min-w-[240px]">
              <div className="flex justify-between">
                <span className="text-white/40">Location:</span>
                <span className="text-white/80">Lahore, Pakistan</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Standing:</span>
                <span className="text-[#10B981] font-semibold">Active · CPD Compliant</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/40">Charter Body:</span>
                <span className="text-white/80">ACCA (London, UK)</span>
              </div>
              <div className="flex justify-between items-center pt-1 border-t border-white/[0.06]">
                <span className="text-white/40">Direct:</span>
                <button
                  onClick={copyEmail}
                  className="text-[#E07A38] hover:underline cursor-pointer"
                >
                  humza.acca@advisory.pk
                </button>
              </div>
            </div>
          </div>

          {/* Section: Chartered Qualifications & Education */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38]" />
              Chartered Qualifications & Academic Standing
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-xl bg-[#111111] border border-[#E07A38]/30">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">ACCA Chartered Certified Accountant</span>
                  <span className="text-[10px] font-mono text-[#10B981] px-2 py-0.5 rounded bg-[#10B981]/10 border border-[#10B981]/20">Chartered</span>
                </div>
                <p className="text-xs font-mono text-white/50 mb-3">Association of Chartered Certified Accountants · London, UK</p>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Complete professional syllabus examined across Strategic Business Leader (SBL), Advanced Audit & Assurance (AAA), Advanced Financial Management (AFM), and Advanced Taxation (ATX).
                </p>
              </div>

              <div className="p-5 rounded-xl bg-[#111111] border border-white/[0.08]">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-bold text-white">CFA Charterholder Candidate</span>
                  <span className="text-[10px] font-mono text-[#E07A38] px-2 py-0.5 rounded bg-[#E07A38]/10 border border-[#E07A38]/20">In Progress</span>
                </div>
                <p className="text-xs font-mono text-white/50 mb-3">CFA Institute · Charlottesville, VA, USA</p>
                <p className="text-xs text-white/70 leading-relaxed font-light">
                  Active curriculum focus on Equity Valuation, Fixed Income Analysis, Derivatives, Alternative Investments, and Global Ethical Standards.
                </p>
              </div>
            </div>
          </div>

          {/* Section: Advisory Competency Matrix */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38]" />
              Core Technical Competencies
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {[
                { title: "Statutory IFRS Reporting", detail: "IFRS 9 (ECL), IFRS 15, IFRS 16 Leases, IAS 12/36" },
                { title: "Internal Audit Architecture", detail: "COSO 2013, SECP CCG 2019, Audit Charters" },
                { title: "Pakistan Taxation (FBR)", detail: "Income Tax Ord. 2001, Super Tax 4C, PRA/SRB" },
                { title: "Corporate Valuation & DCF", detail: "5-Year 3-Statement, WACC, Monte Carlo" },
                { title: "State Bank (SBP) Compliance", detail: "Prudential Regulations, BSD Returns, AML/CFT" },
                { title: "GCC & UAE Corporate Tax", detail: "Federal Decree-Law No. 47, Free Zone Compliance" },
              ].map((c) => (
                <div key={c.title} className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06]">
                  <span className="text-xs font-semibold text-white block mb-1">{c.title}</span>
                  <span className="text-[11px] text-white/45 font-mono block leading-relaxed">{c.detail}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Notable Mandates & Demonstrated Results */}
          <div className="space-y-4">
            <h3 className="text-xs font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38]" />
              Selected Institutional Mandates
            </h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-white block">Multi-Plant IFRS 16 & 15 Technical Conversion</span>
                  <span className="text-[11px] font-mono text-white/40">Industrial Manufacturing Group · ₨2.4B Annual Turnover</span>
                </div>
                <span className="text-xs font-mono text-[#10B981] font-semibold">100% Unqualified Audit Opinion</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-white">Corporate Tax Restructuring & FBR Strategy</span>
                  <span className="text-[11px] font-mono text-white/40">Multi-Entity FMCG & Consumer Goods Holding</span>
                </div>
                <span className="text-xs font-mono text-[#E07A38] font-semibold">₨15M+ Tax Liability Recovered</span>
              </div>
              <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <span className="text-xs font-bold text-white">VC Valuation Model & Series A Advisory</span>
                  <span className="text-[11px] font-mono text-white/40">Series A B2B Tech Logistics Venture</span>
                </div>
                <span className="text-xs font-mono text-[#E07A38] font-semibold">$2.0M Round Closed</span>
              </div>
            </div>
          </div>

          {/* Footer Note */}
          <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-white/40">
            <span>Upholding the International ACCA Code of Ethics and Conduct.</span>
            <span className="text-[#E07A38]">Verified Practitioner Status</span>
          </div>
        </div>
      </div>
    </div>
  );
}
