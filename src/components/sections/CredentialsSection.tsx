"use client";

import React from "react";
import TiltCard from "@/components/effects/TiltCard";
import SectionLabel from "@/components/layout/SectionLabel";

export default function CredentialsSection() {
  return (
    <section id="credentials" className="relative py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#0A0A0A] border-t border-white/[0.06]">
      <div className="max-w-[1420px] mx-auto">
        {/* Section Header */}
        <SectionLabel index="05" label="Professional Credentials & Standards" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.04] tracking-[-0.025em] max-w-2xl">
            Certified authority.{" "}
            <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
              Uncompromising
            </span>{" "}
            standards.
          </h2>
          <p className="text-xs text-white/50 max-w-sm font-light leading-relaxed">
            Globally recognized accreditations underpinning every deliverable.
          </p>
        </div>

        {/* ── Primary Credentials: ACCA + CFA with 3D Tilt ───────── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-4">

          {/* ACCA — Primary Card */}
          <TiltCard maxTilt={5} scale={1.015} className="h-full">
            <div className="group relative h-full rounded-xl border border-[#E07A38]/30 bg-gradient-to-br from-[#120E0A] via-[#0C0B0A] to-[#0A0A0A] overflow-hidden transition-all duration-300 hover:border-[#E07A38]/60 hover:shadow-[0_16px_50px_rgba(224,122,56,0.15)] flex flex-col justify-between">
              {/* Corner Architectural Crosshairs (+) */}
              <span className="absolute top-2.5 left-2.5 z-10 text-[8px] font-mono text-[#E07A38]/30 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute top-2.5 right-2.5 z-10 text-[8px] font-mono text-[#E07A38]/30 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute bottom-2.5 left-2.5 z-10 text-[8px] font-mono text-[#E07A38]/30 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute bottom-2.5 right-2.5 z-10 text-[8px] font-mono text-[#E07A38]/30 select-none group-hover:text-[#E07A38] transition-colors">+</span>

              {/* Ambient glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[radial-gradient(ellipse,rgba(224,122,56,0.16),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              <div className="relative p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badge row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      {/* Stopgap ACCA wordmark — replace with the official logo file when available */}
                      <div
                        role="img"
                        aria-label="ACCA"
                        className="h-11 px-3 rounded-lg bg-white flex items-center justify-center shadow-[0_6px_18px_rgba(0,0,0,0.45)] ring-1 ring-white/20 group-hover:scale-105 transition-transform duration-300"
                      >
                        <span aria-hidden className="font-sans text-[17px] font-extrabold tracking-[-0.02em] leading-none text-[#D6001C]">
                          ACCA
                        </span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold block">ACCA-UK</span>
                        <span className="text-[9px] font-mono text-white/40">Charter № Active</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                      CHARTERED
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-tight group-hover:text-[#FAF8F5] transition-colors">
                    ACCA Chartered Certified Accountant
                  </h3>
                  <p className="text-[11px] font-mono text-white/45 mb-4">
                    Association of Chartered Certified Accountants · London, UK
                  </p>

                  {/* Competency pills */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["Financial Reporting", "Audit & Assurance", "Taxation", "Corporate Governance", "Strategic Business Leadership", "Ethics & Professional Conduct"].map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md text-[9px] font-mono text-white/55 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-3 border-t border-white/[0.06] flex items-center justify-between">
                  <div className="flex items-center gap-4 text-[10px] font-mono text-white/40">
                    <span className="flex items-center gap-1">
                      <svg className="w-3 h-3 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      CPD Compliant
                    </span>
                    <span>·</span>
                    <span>Global Code of Ethics</span>
                  </div>
                  <span className="text-[9px] font-mono text-[#E07A38]/75 font-semibold">ACTIVE & IN GOOD STANDING</span>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* CFA — In Preparation Card */}
          <TiltCard maxTilt={5} scale={1.015} className="h-full">
            <div className="group relative h-full rounded-xl border border-white/[0.08] bg-[#0A0A0A] overflow-hidden transition-all duration-300 hover:border-[#3B82F6]/50 hover:shadow-[0_16px_50px_rgba(59,130,246,0.12)] flex flex-col justify-between">
              {/* Corner Architectural Crosshairs (+) */}
              <span className="absolute top-2.5 left-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#3B82F6] transition-colors">+</span>
              <span className="absolute top-2.5 right-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#3B82F6] transition-colors">+</span>
              <span className="absolute bottom-2.5 left-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#3B82F6] transition-colors">+</span>
              <span className="absolute bottom-2.5 right-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#3B82F6] transition-colors">+</span>

              {/* Ambient glow */}
              <div className="absolute -top-16 -right-16 w-56 h-56 bg-[radial-gradient(ellipse,rgba(59,130,246,0.12),transparent_70%)] pointer-events-none group-hover:scale-110 transition-transform duration-500" />

              <div className="relative p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  {/* Badge row */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-lg bg-[#3B82F6]/10 border border-[#3B82F6]/25 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                        <span className="text-lg font-bold text-[#3B82F6]">C</span>
                      </div>
                      <div>
                        <span className="text-[10px] font-mono tracking-[0.2em] text-[#3B82F6] uppercase font-bold block">CFA</span>
                        <span className="text-[9px] font-mono text-white/40">CFA Institute · USA</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 rounded-full text-[9px] font-mono font-bold tracking-wider text-[#F59E0B] bg-[#F59E0B]/10 border border-[#F59E0B]/25 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F59E0B] animate-pulse" />
                      PREPARING
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-1.5 leading-tight group-hover:text-[#FAF8F5] transition-colors">
                    CFA Charterholder Candidate
                  </h3>
                  <p className="text-[11px] font-mono text-white/45 mb-4">
                    Chartered Financial Analyst · CFA Institute, Charlottesville, VA
                  </p>

                  {/* Focus areas */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {["Equity Valuation", "Fixed Income", "Portfolio Management", "Derivatives & Alt. Investments", "Quantitative Methods", "Ethical Standards"].map((s) => (
                      <span key={s} className="px-2.5 py-1 rounded-md text-[9px] font-mono text-white/55 bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.08] hover:text-white transition-colors cursor-default">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Progress bar */}
                <div className="pt-3 border-t border-white/[0.06]">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[10px] font-mono text-white/40">Preparation Progress</span>
                    <span className="text-[10px] font-mono text-[#3B82F6]">In Progress</span>
                  </div>
                  <div className="w-full h-1.5 rounded-full bg-white/[0.04] overflow-hidden">
                    <div className="h-full rounded-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] w-[35%] transition-all duration-1000" />
                  </div>
                </div>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* ── Secondary Competency Grid ──────────────────────────── */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-4">
          {[
            { code: "IFRS", title: "IFRS / IAS Standards", body: "IFRS 9, 15, 16 & statutory disclosure frameworks", authority: "IASB", icon: "📊" },
            { code: "ISA", title: "Auditing Standards", body: "Risk-based audit, COSO controls & fraud detection", authority: "IAASB", icon: "🛡" },
            { code: "TAX-PK", title: "Pakistan Tax Law", body: "ITO 2001, FBR e-filing, PRA/SRB provincial sales tax", authority: "FBR", icon: "🏛" },
            { code: "FM-VAL", title: "Financial Modelling", body: "3-statement models, DCF, WACC & transaction support", authority: "Corp. Finance", icon: "📈" },
          ].map((c) => (
            <div
              key={c.code}
              className="group rounded-xl border border-white/[0.06] bg-[#0C0C0C] p-4 hover:border-white/[0.12] hover:bg-[#0E0E0E] transition-all duration-300"
            >
              <div className="flex items-center gap-2.5 mb-2.5">
                <span className="text-base">{c.icon}</span>
                <span className="text-[9px] font-mono tracking-[0.15em] text-[#E07A38] uppercase font-bold">{c.code}</span>
              </div>
              <h4 className="text-sm font-bold text-white mb-1 leading-snug">{c.title}</h4>
              <p className="text-[10px] text-white/45 leading-relaxed font-light line-clamp-2">{c.body}</p>
              <div className="mt-3 pt-2 border-t border-white/[0.04] flex items-center gap-1.5 text-[9px] font-mono text-white/30">
                <svg className="w-2.5 h-2.5 text-[#10B981]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{c.authority}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust Banner ───────────────────────────────────────── */}
        <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] px-5 py-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-[10px] font-mono text-white/40">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
            <span>ACCA Global Code of Ethics · CPD Compliant · Regulated under IFAC Member Body</span>
          </div>
          <span className="text-white/25 uppercase tracking-widest">Statutory Standing: Active</span>
        </div>
      </div>
    </section>
  );
}
