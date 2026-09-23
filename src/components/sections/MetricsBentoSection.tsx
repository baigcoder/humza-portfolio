"use client";

import React, { useState } from "react";
import Counter from "@/components/effects/Counter";
import TiltCard from "@/components/effects/TiltCard";

export const MetricsBentoSection: React.FC = () => {
  const [currency, setCurrency] = useState<"PKR" | "USD">("PKR");
  const [revenue, setRevenue] = useState(3.5); // PKR Billions or USD Millions
  const [dsoReduction, setDsoReduction] = useState(18); // days saved

  // Preset corporate profiles
  const applyPreset = (curr: "PKR" | "USD", rev: number, dso: number) => {
    setCurrency(curr);
    setRevenue(rev);
    setDsoReduction(dso);
  };

  // Calculation:
  // If PKR: revenue in Billions -> (rev * 1,000,000,000 / 365) * dso
  // If USD: revenue in Millions -> (rev * 1,000,000 / 365) * dso
  const totalBase = currency === "PKR" ? revenue * 1000000000 : revenue * 1000000;
  const liberatedCash = Math.round((totalBase / 365) * dsoReduction);

  const formattedCash =
    currency === "PKR"
      ? `₨ ${(liberatedCash / 1000000).toFixed(1)}M`
      : `$ ${(liberatedCash / 1000).toFixed(0)}K`;

  const handleInquire = () => {
    window.dispatchEvent(
      new CustomEvent("set-advisory-scope", {
        detail: "FP&A & Business Advisory",
      })
    );
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="simulator"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#050505] border-t border-white/[0.06] overflow-hidden"
    >
      {/* Background ambient warm illumination */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] rounded-full bg-[#E07A38]/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-[1420px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-3 mb-6">
          <span className="w-2 h-2 rounded-full bg-[#E07A38] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#E07A38] uppercase font-semibold">
            03 · Capital Liberation & Impact Engine
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#E07A38]/60 to-transparent" />
        </div>

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-[1.1] tracking-tight max-w-xl">
              Tangible liquidity.{" "}
              <span className="text-[#E07A38] italic font-serif font-normal drop-shadow-[0_0_24px_rgba(224,122,56,0.35)]">
                Engineered
              </span>{" "}
              cash flow.
            </h2>
            <p className="text-xs text-white/50 max-w-md font-light leading-relaxed mt-1">
              Test how accelerating receivables and rationalizing working capital directly injects non-dilutive liquidity into corporate balance sheets.
            </p>
          </div>

          {/* Currency Toggle */}
          <div className="flex items-center gap-2 p-1 rounded-full bg-[#0E0E0E] border border-white/[0.08]">
            <button
              onClick={() => {
                setCurrency("PKR");
                setRevenue(3.5);
              }}
              className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                currency === "PKR"
                  ? "bg-[#E07A38] text-[#0A0A0A] shadow-[0_0_12px_rgba(224,122,56,0.4)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              PKR (₨)
            </button>
            <button
              onClick={() => {
                setCurrency("USD");
                setRevenue(12);
              }}
              className={`px-3 py-1 rounded-full text-[10px] font-mono font-bold transition-all cursor-pointer ${
                currency === "USD"
                  ? "bg-[#E07A38] text-[#0A0A0A] shadow-[0_0_12px_rgba(224,122,56,0.4)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              USD ($)
            </button>
          </div>
        </div>

        {/* ── Top Bento: 3 Authority Pillars with 3D Tilt ───────── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Card 1: 100% Audit Readiness */}
          <TiltCard maxTilt={4} scale={1.01} className="h-full">
            <div className="group relative h-full rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-6 hover:bg-[#0E0C0A] hover:border-[#E07A38]/40 transition-all duration-300 flex flex-col justify-between">
              <span className="absolute top-2.5 left-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute top-2.5 right-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold block mb-2">
                  STATUTORY RECONCILIATION
                </span>
                <div className="text-3xl font-bold font-sans text-white mb-1 group-hover:text-[#FAF8F5] transition-colors">
                  <Counter value={100} suffix="%" />
                </div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">
                  Audit Reconciliation Precision
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  Zero-tolerance reconciliation between subsidiary ledgers, bank statements, and general ledger accounts, ready for Big-4 sign-off.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[9px] font-mono text-[#10B981]">
                <span>✓</span>
                <span>IFRS & ISA Certified Standard</span>
              </div>
            </div>
          </TiltCard>

          {/* Card 2: 40% Close Acceleration */}
          <TiltCard maxTilt={4} scale={1.01} className="h-full">
            <div className="group relative h-full rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-6 hover:bg-[#0E0C0A] hover:border-[#E07A38]/40 transition-all duration-300 flex flex-col justify-between">
              <span className="absolute top-2.5 left-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute top-2.5 right-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold block mb-2">
                  OPERATIONAL VELOCITY
                </span>
                <div className="text-3xl font-bold font-sans text-white mb-1 group-hover:text-[#FAF8F5] transition-colors">
                  <Counter value={40} suffix="%" />
                </div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">
                  Month-End Cycle Compression
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  Standardized accrual templates, automated reconciliation scripts, and real-time ERP integrations to close faster with zero error drift.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[9px] font-mono text-[#E07A38]">
                <span>⚡</span>
                <span>Fast-Close Framework</span>
              </div>
            </div>
          </TiltCard>

          {/* Card 3: IFRS Mastery */}
          <TiltCard maxTilt={4} scale={1.01} className="h-full">
            <div className="group relative h-full rounded-xl border border-white/[0.08] bg-[#0A0A0A] p-6 hover:bg-[#0E0C0A] hover:border-[#E07A38]/40 transition-all duration-300 flex flex-col justify-between">
              <span className="absolute top-2.5 left-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute top-2.5 right-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <div>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold block mb-2">
                  STATUTORY STANDING
                </span>
                <div className="text-3xl font-bold font-sans text-white mb-1 group-hover:text-[#FAF8F5] transition-colors">
                  IFRS 9/15/16
                </div>
                <h3 className="text-sm font-semibold text-white/90 mb-2">
                  Regulatory Compliance Mastery
                </h3>
                <p className="text-[11px] text-white/50 leading-relaxed font-light">
                  Comprehensive modeling across IFRS 16 Leases, IFRS 15 Revenue recognition, and IFRS 9 ECL for scheduled banks and conglomerates.
                </p>
              </div>
              <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center gap-1.5 text-[9px] font-mono text-white/60">
                <span>🛡️</span>
                <span>SECP & SBP Aligned</span>
              </div>
            </div>
          </TiltCard>
        </div>

        {/* ── Main Interactive Working Capital Simulator Frame ─── */}
        <div className="relative rounded-2xl bg-gradient-to-br from-[#120E0A] via-[#0D0B0A] to-[#0A0A0A] border border-[#E07A38]/30 shadow-[0_20px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(224,122,56,0.1)] p-6 sm:p-8 md:p-10 overflow-hidden">
          {/* Subtle architectural hairline */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse,rgba(224,122,56,0.12),transparent_70%)] pointer-events-none" />

          {/* Quick Presets Bar */}
          <div className="flex flex-wrap items-center justify-between gap-3 mb-8 pb-5 border-b border-white/[0.08]">
            <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/40 font-semibold">
              Industry Modeling Presets:
            </span>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => applyPreset("PKR", 4.5, 24)}
                className="px-3 py-1 rounded-md text-[10px] font-mono bg-white/[0.03] hover:bg-[#E07A38]/15 border border-white/[0.08] hover:border-[#E07A38]/40 text-white/70 hover:text-white transition-all cursor-pointer"
              >
                Textile Exporter (₨4.5B)
              </button>
              <button
                onClick={() => applyPreset("USD", 8.0, 18)}
                className="px-3 py-1 rounded-md text-[10px] font-mono bg-white/[0.03] hover:bg-[#E07A38]/15 border border-white/[0.08] hover:border-[#E07A38]/40 text-white/70 hover:text-white transition-all cursor-pointer"
              >
                Tech Scale-up ($8M)
              </button>
              <button
                onClick={() => applyPreset("PKR", 10.0, 15)}
                className="px-3 py-1 rounded-md text-[10px] font-mono bg-white/[0.03] hover:bg-[#E07A38]/15 border border-white/[0.08] hover:border-[#E07A38]/40 text-white/70 hover:text-white transition-all cursor-pointer"
              >
                FMCG Distributor (₨10B)
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-center">
            {/* Left Controls: Sliders */}
            <div className="lg:col-span-7 space-y-7">
              <div>
                <span className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-bold block mb-1">
                  INTERACTIVE FINANCIAL ENGINE
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Working Capital Liberation Simulator
                </h3>
                <p className="text-xs text-white/50 mt-1 font-light leading-relaxed">
                  Calibrate your organization's annual revenue and projected DSO recovery to model instantaneous liquidity generated without diluting equity or taking on high-interest debt.
                </p>
              </div>

              {/* Slider 1: Annual Revenue */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/70">
                    Annual Turnover ({currency === "PKR" ? "PKR Billions" : "USD Millions"}):
                  </span>
                  <span className="text-base font-bold text-[#E07A38] font-mono">
                    {currency === "PKR" ? `₨ ${revenue.toFixed(1)} Billion` : `$ ${revenue.toFixed(1)} Million`}
                  </span>
                </div>
                <input
                  type="range"
                  min={currency === "PKR" ? 0.5 : 1}
                  max={currency === "PKR" ? 25 : 50}
                  step={currency === "PKR" ? 0.5 : 1}
                  value={revenue}
                  onChange={(e) => setRevenue(Number(e.target.value))}
                  className="slider-amber"
                />
                <div className="flex justify-between text-[9px] font-mono text-white/35">
                  <span>{currency === "PKR" ? "₨0.5B" : "$1M"}</span>
                  <span>{currency === "PKR" ? "₨12.5B" : "$25M"}</span>
                  <span>{currency === "PKR" ? "₨25B" : "$50M"}</span>
                </div>
              </div>

              {/* Slider 2: DSO Days */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-white/70">
                    Receivables Acceleration (DSO Days Saved):
                  </span>
                  <span className="text-base font-bold text-[#E07A38] font-mono">
                    {dsoReduction} Days
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={60}
                  step={1}
                  value={dsoReduction}
                  onChange={(e) => setDsoReduction(Number(e.target.value))}
                  className="slider-amber"
                />
                <div className="flex justify-between text-[9px] font-mono text-white/35">
                  <span>5 Days (Minor Tune)</span>
                  <span>30 Days (Process Overhaul)</span>
                  <span>60 Days (Aggressive Recovery)</span>
                </div>
              </div>
            </div>

            {/* Right Output: Calculated Cash Callout */}
            <div className="lg:col-span-5 p-6 sm:p-8 rounded-xl bg-[#080808] border border-white/[0.1] text-center space-y-4 shadow-[inset_0_2px_12px_rgba(0,0,0,0.8)] relative">
              <span className="text-[10px] font-mono tracking-[0.2em] text-white/40 uppercase block">
                ESTIMATED OPERATING CASH LIBERATED
              </span>
              <div className="text-4xl sm:text-5xl font-bold font-sans tracking-tight text-white drop-shadow-[0_0_28px_rgba(224,122,56,0.35)] font-mono">
                <span className="shimmer-text">{formattedCash}</span>
              </div>
              <p className="text-[11px] text-white/50 leading-relaxed font-light max-w-xs mx-auto">
                Direct non-dilutive liquidity injected into monthly operational working capital, eliminating high-interest KIBOR/bank borrowing.
              </p>
              <div className="pt-2">
                <button
                  onClick={handleInquire}
                  className="w-full py-3 px-6 rounded-full text-xs font-mono font-bold tracking-wider text-[#050505] bg-gradient-to-r from-[#FF8A3D] to-[#E07A38] hover:from-white hover:to-white hover:shadow-[0_0_24px_rgba(255,255,255,0.4)] transition-all duration-300 shadow-[0_4px_20px_rgba(224,122,56,0.3)] cursor-pointer"
                >
                  Discuss Working Capital Strategy →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
