"use client";

import React, { useState } from "react";
import Counter from "@/components/effects/Counter";
import TiltCard from "@/components/effects/TiltCard";
import { playTactileSound } from "@/components/effects/SoundEffects";
import SectionLabel from "@/components/layout/SectionLabel";
import { Zap, Landmark, ChartColumn } from "lucide-react";

type ToolTab = "working-capital" | "super-tax" | "ifrs-16";

export const MetricsBentoSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<ToolTab>("working-capital");

  // --- TAB 1: WORKING CAPITAL ENGINE STATE ---
  const [currency, setCurrency] = useState<"PKR" | "USD">("PKR");
  const [revenue, setRevenue] = useState(3.5); // PKR Billions or USD Millions
  const [dsoReduction, setDsoReduction] = useState(18); // days saved

  const applyPreset = (curr: "PKR" | "USD", rev: number, dso: number) => {
    playTactileSound("click");
    setCurrency(curr);
    setRevenue(rev);
    setDsoReduction(dso);
  };

  const totalBase = currency === "PKR" ? revenue * 1000000000 : revenue * 1000000;
  const liberatedCash = Math.round((totalBase / 365) * dsoReduction);
  const formattedCash =
    currency === "PKR"
      ? `₨ ${(liberatedCash / 1000000).toFixed(1)}M`
      : `$ ${(liberatedCash / 1000).toFixed(0)}K`;

  // --- TAB 2: SUPER TAX 4C STATE ---
  const [taxableIncomePKR, setTaxableIncomePKR] = useState(420); // in PKR Millions (₨420M)
  const [sector, setSector] = useState<"general" | "export" | "heavy">("general");

  // Pakistan ITO 2001 Section 4C Graduated Brackets:
  // <= 150M: 0%
  // 150M - 200M: 1%
  // 200M - 250M: 2%
  // 250M - 300M: 3%
  // 300M - 350M: 4%
  // 350M - 400M: 6%
  // 400M - 500M: 8%
  // > 500M: 10%
  const getSuperTaxRate = (incomeM: number) => {
    if (incomeM <= 150) return 0;
    if (incomeM <= 200) return 1;
    if (incomeM <= 250) return 2;
    if (incomeM <= 300) return 3;
    if (incomeM <= 350) return 4;
    if (incomeM <= 400) return 6;
    if (incomeM <= 500) return 8;
    return 10;
  };

  const superTaxRate = getSuperTaxRate(taxableIncomePKR);
  const normalTaxRate = sector === "export" ? 29 : 29; // Standard corporate rate 29%
  const normalTaxPKR = (taxableIncomePKR * normalTaxRate) / 100;
  const superTaxPKR = (taxableIncomePKR * superTaxRate) / 100;
  const totalTaxPKR = normalTaxPKR + superTaxPKR;
  const effectiveTaxRate = (totalTaxPKR / taxableIncomePKR) * 100;

  // --- TAB 3: IFRS 16 LEASE ENGINE STATE ---
  const [annualLeasePKR, setAnnualLeasePKR] = useState(45); // in PKR Millions (₨45M/year)
  const [leaseTermYears, setLeaseTermYears] = useState(6); // 6 years
  const [ibrPercent, setIbrPercent] = useState(16.5); // 16.5% Incremental Borrowing Rate (KIBOR + spread)

  // Present Value of Ordinary Annuity: PV = PMT * [1 - (1+r)^-n] / r
  const r = ibrPercent / 100;
  const pvAnnuityFactor = r > 0 ? (1 - Math.pow(1 + r, -leaseTermYears)) / r : leaseTermYears;
  const capitalizedROU = Math.round(annualLeasePKR * pvAnnuityFactor);
  const annualDepreciation = (capitalizedROU / leaseTermYears).toFixed(1);
  const year1FinanceCost = (capitalizedROU * r).toFixed(1);
  const ebitdaUplift = annualLeasePKR; // Full lease rent is removed from operating costs above EBITDA

  const handleInquire = (scope: string) => {
    playTactileSound("success");
    window.dispatchEvent(
      new CustomEvent("set-advisory-scope", {
        detail: scope,
      })
    );
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTabChange = (tab: ToolTab) => {
    playTactileSound("click");
    setActiveTab(tab);
  };

  return (
    <section
      id="simulator"
      className="relative w-full py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#050505] section-divider overflow-hidden"
    >
      {/* Background ambient warm illumination */}
      <div className="absolute top-1/2 left-1/3 w-[550px] h-[550px] rounded-full bg-[#E07A38]/[0.04] blur-[150px] pointer-events-none" />

      <div className="max-w-[1420px] mx-auto">
        {/* Section Header */}
        <SectionLabel index="03" label="Capital Engineering & Advisory Toolkit" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.04] tracking-[-0.025em] max-w-2xl">
              Tangible liquidity.{" "}
              <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
                Engineered
              </span>{" "}
              capital impact.
            </h2>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-lg mt-4">
              Select an institutional calculation engine below to model working capital liquidity, Pakistan Section 4C Super Tax liabilities, or IFRS 16 balance sheet capitalization.
            </p>
          </div>

          {/* Master Tool Switcher Tabs */}
          <div className="grid grid-cols-3 sm:flex sm:items-center gap-1.5 p-1.5 rounded-xl bg-[#0E0E0E] border border-white/[0.08] w-full sm:w-auto">
            <button
              onClick={() => handleTabChange("working-capital")}
              className={`px-2 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] leading-tight font-mono font-bold transition-all text-center sm:whitespace-nowrap cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 ${
                activeTab === "working-capital"
                  ? "bg-[#E07A38] text-[#0A0A0A] shadow-[0_0_14px_rgba(224,122,56,0.35)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Zap className="w-3.5 h-3.5" strokeWidth={2} aria-hidden />
              <span>Working Capital DSO</span>
            </button>

            <button
              onClick={() => handleTabChange("super-tax")}
              className={`px-2 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] leading-tight font-mono font-bold transition-all text-center sm:whitespace-nowrap cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 ${
                activeTab === "super-tax"
                  ? "bg-[#E07A38] text-[#0A0A0A] shadow-[0_0_14px_rgba(224,122,56,0.35)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <Landmark className="w-3.5 h-3.5" strokeWidth={2} aria-hidden />
              <span>Super Tax 4C (FBR)</span>
            </button>

            <button
              onClick={() => handleTabChange("ifrs-16")}
              className={`px-2 sm:px-3.5 py-2 sm:py-1.5 rounded-lg text-[10px] sm:text-[11px] leading-tight font-mono font-bold transition-all text-center sm:whitespace-nowrap cursor-pointer flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-1.5 ${
                activeTab === "ifrs-16"
                  ? "bg-[#E07A38] text-[#0A0A0A] shadow-[0_0_14px_rgba(224,122,56,0.35)]"
                  : "text-white/50 hover:text-white"
              }`}
            >
              <ChartColumn className="w-3.5 h-3.5" strokeWidth={2} aria-hidden />
              <span>IFRS 16 Lease Engine</span>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* TAB 1: WORKING CAPITAL DSO SIMULATOR                          */}
        {/* ============================================================== */}
        {activeTab === "working-capital" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 animate-fade-in">
            {/* Left Control Panel */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-3 left-3 text-[8px] font-mono text-white/20 select-none">+</span>
              <span className="absolute top-3 right-3 text-[8px] font-mono text-white/20 select-none">+</span>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#E07A38] uppercase font-bold">
                      ENGINE 01 · DSO WORKING CAPITAL
                    </span>
                  </div>
                  {/* Currency Toggle */}
                  <div className="flex items-center gap-1 p-1 rounded-full bg-[#121212] border border-white/[0.06]">
                    <button
                      onClick={() => { playTactileSound("click"); setCurrency("PKR"); setRevenue(3.5); }}
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold whitespace-nowrap ${
                        currency === "PKR" ? "bg-[#E07A38] text-[#0A0A0A]" : "text-white/40 hover:text-white"
                      }`}
                    >
                      PKR (₨)
                    </button>
                    <button
                      onClick={() => { playTactileSound("click"); setCurrency("USD"); setRevenue(12); }}
                      className={`px-2.5 py-0.5 rounded-full text-[9px] font-mono font-bold whitespace-nowrap ${
                        currency === "USD" ? "bg-[#E07A38] text-[#0A0A0A]" : "text-white/40 hover:text-white"
                      }`}
                    >
                      USD ($)
                    </button>
                  </div>
                </div>

                {/* Corporate Presets */}
                <div className="mb-6">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider block mb-2">
                    Quick Benchmark Presets:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => applyPreset("PKR", 1.2, 14)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-left transition-all"
                    >
                      <span className="block text-[10px] font-semibold text-white">Mid-Tier Industrial</span>
                      <span className="block text-[8px] font-mono text-white/40">₨1.2B Rev · 14d</span>
                    </button>
                    <button
                      onClick={() => applyPreset("PKR", 4.5, 22)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-left transition-all"
                    >
                      <span className="block text-[10px] font-semibold text-white">FMCG Distribution</span>
                      <span className="block text-[8px] font-mono text-white/40">₨4.5B Rev · 22d</span>
                    </button>
                    <button
                      onClick={() => applyPreset("USD", 18, 16)}
                      className="px-2.5 py-1.5 rounded-lg bg-white/[0.03] hover:bg-white/[0.06] border border-white/[0.06] text-left transition-all"
                    >
                      <span className="block text-[10px] font-semibold text-white">Cross-Border Scaleup</span>
                      <span className="block text-[8px] font-mono text-white/40">$18M Rev · 16d</span>
                    </button>
                  </div>
                </div>

                {/* Slider 1: Revenue */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/70">Annual Turnover (Revenue)</span>
                    <span className="text-sm font-mono font-bold text-white">
                      {currency === "PKR" ? `₨ ${revenue.toFixed(1)} Billion` : `$ ${revenue.toFixed(1)} Million`}
                    </span>
                  </div>
                  <input
                    type="range"
                    min={currency === "PKR" ? 0.5 : 2}
                    max={currency === "PKR" ? 15 : 50}
                    step={currency === "PKR" ? 0.25 : 1}
                    value={revenue}
                    onChange={(e) => {
                      playTactileSound("slider");
                      setRevenue(parseFloat(e.target.value));
                    }}
                    className="w-full accent-[#E07A38] bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-white/30 mt-1">
                    <span>{currency === "PKR" ? "₨0.5B" : "$2M"}</span>
                    <span>{currency === "PKR" ? "₨15.0B" : "$50M"}</span>
                  </div>
                </div>

                {/* Slider 2: DSO Days */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/70">DSO Optimization (Receivables Days Accelerated)</span>
                    <span className="text-sm font-mono font-bold text-[#E07A38]">
                      {dsoReduction} Days Saved
                    </span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={45}
                    step={1}
                    value={dsoReduction}
                    onChange={(e) => {
                      playTactileSound("slider");
                      setDsoReduction(parseInt(e.target.value));
                    }}
                    className="w-full accent-[#E07A38] bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-white/30 mt-1">
                    <span>3 Days (Tactical)</span>
                    <span>45 Days (Full Overhaul)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-white/40 flex items-center justify-between">
                <span>Model: Daily Liquidity Cycle = (Revenue / 365) × ΔDSO</span>
                <span className="text-[#10B981]">Instant Treasury Calibration</span>
              </div>
            </div>

            {/* Right Output Bento Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <TiltCard maxTilt={4} scale={1.01} className="h-full">
                <div className="h-full rounded-2xl border border-[#E07A38]/30 bg-gradient-to-br from-[#120E0A] via-[#0C0B0A] to-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_16px_40px_rgba(224,122,56,0.12)]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A38]/[0.12] rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-mono tracking-widest text-[#E07A38] uppercase font-bold px-2 py-0.5 rounded bg-[#E07A38]/10 border border-[#E07A38]/20">
                        Liberated Capital Yield
                      </span>
                      <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
                    </div>

                    <span className="text-xs text-white/50 block mb-1">
                      Non-Dilutive Free Cash Injected to Treasury:
                    </span>
                    <div className="text-4xl sm:text-5xl font-bold font-sans text-white tracking-tight mb-2 text-glow-amber">
                      {formattedCash}
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light mb-6">
                      Equivalent to securing credit facility liquidity without incurring prevailing commercial bank borrowing rates.
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/40">Working Capital Impact:</span>
                        <span className="font-mono text-[#10B981] font-semibold">Immediate Cash Release</span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="text-white/40">Annual Bank Interest Avoided:</span>
                        <span className="font-mono text-white font-semibold">
                          {currency === "PKR"
                            ? `₨ ${((liberatedCash * 0.17) / 1000000).toFixed(1)}M/yr`
                            : `$ ${((liberatedCash * 0.085) / 1000).toFixed(0)}K/yr`}
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleInquire("FP&A & Working Capital Optimization")}
                    className="mt-6 w-full py-3 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#0A0A0A] font-semibold text-xs transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(224,122,56,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Execute Working Capital Retainer</span>
                    <span className="text-[#E07A38]">→</span>
                  </button>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 2: PAKISTAN SUPER TAX SECTION 4C FORECASTER                */}
        {/* ============================================================== */}
        {activeTab === "super-tax" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 animate-fade-in">
            {/* Left Control Panel */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-3 left-3 text-[8px] font-mono text-white/20 select-none">+</span>
              <span className="absolute top-3 right-3 text-[8px] font-mono text-white/20 select-none">+</span>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#E07A38] uppercase font-bold">
                      ENGINE 02 · FBR SECTION 4C SUPER TAX
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25">
                    ITO 2001 (Finance Acts 2022–2024)
                  </span>
                </div>

                {/* Industry Sector Selector */}
                <div className="mb-6">
                  <span className="text-[9px] font-mono text-white/40 uppercase tracking-wider block mb-2">
                    Select Corporate Sector:
                  </span>
                  <div className="grid grid-cols-3 gap-2">
                    <button
                      onClick={() => { playTactileSound("click"); setSector("general"); }}
                      className={`px-2.5 py-2 rounded-lg border text-left transition-all ${
                        sector === "general"
                          ? "bg-[#E07A38]/10 border-[#E07A38]/50 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-white/50 hover:text-white"
                      }`}
                    >
                      <span className="block text-[11px] font-semibold">General Corporate</span>
                      <span className="block text-[9px] font-mono opacity-60">29% Normal + 4C</span>
                    </button>
                    <button
                      onClick={() => { playTactileSound("click"); setSector("export"); }}
                      className={`px-2.5 py-2 rounded-lg border text-left transition-all ${
                        sector === "export"
                          ? "bg-[#E07A38]/10 border-[#E07A38]/50 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-white/50 hover:text-white"
                      }`}
                    >
                      <span className="block text-[11px] font-semibold">Textile & Export</span>
                      <span className="block text-[9px] font-mono opacity-60">Section 65F / Export</span>
                    </button>
                    <button
                      onClick={() => { playTactileSound("click"); setSector("heavy"); }}
                      className={`px-2.5 py-2 rounded-lg border text-left transition-all ${
                        sector === "heavy"
                          ? "bg-[#E07A38]/10 border-[#E07A38]/50 text-white"
                          : "bg-white/[0.02] border-white/[0.06] text-white/50 hover:text-white"
                      }`}
                    >
                      <span className="block text-[11px] font-semibold">Banking / Heavy Ind.</span>
                      <span className="block text-[9px] font-mono opacity-60">Max Tier 10% Slab</span>
                    </button>
                  </div>
                </div>

                {/* Slider: Corporate Taxable Income */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/70">Annual Taxable Income (Profit Before Tax)</span>
                    <span className="text-base font-mono font-bold text-[#E07A38]">
                      ₨ {taxableIncomePKR} Million
                    </span>
                  </div>
                  <input
                    type="range"
                    min={100}
                    max={1500}
                    step={25}
                    value={taxableIncomePKR}
                    onChange={(e) => {
                      playTactileSound("slider");
                      setTaxableIncomePKR(parseInt(e.target.value));
                    }}
                    className="w-full accent-[#E07A38] bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-white/30 mt-1">
                    <span>₨100M (Below 4C)</span>
                    <span>₨500M (Max 10% Bracket)</span>
                    <span>₨1,500M+ (Enterprise)</span>
                  </div>
                </div>

                {/* Graduated Bracket Breakdown */}
                <div className="p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] space-y-2 text-xs">
                  <span className="text-[10px] font-mono tracking-wider text-white/40 uppercase block mb-1">
                    Statutory Rate Applied for ₨{taxableIncomePKR}M Bracket:
                  </span>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Standard Corporate Tax (Sec 20):</span>
                    <span className="font-mono text-white font-semibold">29.0%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-white/60">Super Tax on High Earning (Sec 4C):</span>
                    <span className="font-mono text-[#E07A38] font-bold">+{superTaxRate}.0%</span>
                  </div>
                  <div className="flex justify-between items-center pt-2 border-t border-white/[0.06]">
                    <span className="text-white font-semibold">Combined Statutory Tax Rate:</span>
                    <span className="font-mono text-[#10B981] font-bold text-sm">
                      {effectiveTaxRate.toFixed(1)}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-white/40 flex items-center justify-between">
                <span>Statutory Authority: FBR IRIS e-filing · Section 4C First Schedule</span>
                <span className="text-[#E07A38]">Tax Restructuring Recommended</span>
              </div>
            </div>

            {/* Right Output Bento Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <TiltCard maxTilt={4} scale={1.01} className="h-full">
                <div className="h-full rounded-2xl border border-[#E07A38]/30 bg-gradient-to-br from-[#120E0A] via-[#0C0B0A] to-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_16px_40px_rgba(224,122,56,0.12)]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A38]/[0.12] rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-mono tracking-widest text-[#E07A38] uppercase font-bold px-2 py-0.5 rounded bg-[#E07A38]/10 border border-[#E07A38]/20">
                        Total Corporate Tax Bill
                      </span>
                      <span className="text-[10px] font-mono text-[#E07A38] font-bold">
                        RATE: {effectiveTaxRate.toFixed(1)}%
                      </span>
                    </div>

                    <span className="text-xs text-white/50 block mb-1">
                      Estimated Combined Annual Tax Due to FBR:
                    </span>
                    <div className="text-4xl sm:text-5xl font-bold font-sans text-white tracking-tight mb-2 text-glow-amber">
                      ₨ {totalTaxPKR.toFixed(1)}M
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light mb-6">
                      Comprising ₨{normalTaxPKR.toFixed(1)}M in Standard Corporate Tax and ₨{superTaxPKR.toFixed(1)}M in Section 4C Super Tax liability.
                    </p>

                    {/* Actionable Structuring Levers */}
                    <div className="space-y-2 pt-4 border-t border-white/[0.08]">
                      <span className="text-[9px] font-mono uppercase tracking-wider text-[#E07A38] block">
                        Advisory Structuring Levers Available:
                      </span>
                      <div className="text-[11px] text-white/70 space-y-1.5 font-light">
                        <div className="flex items-start gap-1.5">
                          <span className="text-[#10B981] font-bold">✓</span>
                          <span><strong>Section 59B Group Relief:</strong> Offset losses between group subsidiaries.</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-[#10B981] font-bold">✓</span>
                          <span><strong>Accelerated Depreciation (Third Sched.):</strong> Lower current taxable base.</span>
                        </div>
                        <div className="flex items-start gap-1.5">
                          <span className="text-[#10B981] font-bold">✓</span>
                          <span><strong>WHT Advance Tax Credit (Sec 147):</strong> Prevent unutilized refund lockup.</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleInquire("FBR Corporate Tax Strategy & Section 4C Restructuring")}
                    className="mt-6 w-full py-3 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#0A0A0A] font-semibold text-xs transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(224,122,56,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Request Corporate Tax Advisory</span>
                    <span className="text-[#E07A38]">→</span>
                  </button>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* TAB 3: IFRS 16 LEASE BALANCE SHEET ENGINE                      */}
        {/* ============================================================== */}
        {activeTab === "ifrs-16" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 animate-fade-in">
            {/* Left Control Panel */}
            <div className="lg:col-span-7 rounded-2xl border border-white/[0.08] bg-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
              <span className="absolute top-3 left-3 text-[8px] font-mono text-white/20 select-none">+</span>
              <span className="absolute top-3 right-3 text-[8px] font-mono text-white/20 select-none">+</span>

              <div>
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-mono tracking-widest text-[#E07A38] uppercase font-bold">
                      ENGINE 03 · IFRS 16 LEASE BALANCE SHEET FORECASTER
                    </span>
                  </div>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25">
                    IFRS 16 Standards · SECP Regs
                  </span>
                </div>

                {/* Slider 1: Annual Operating Lease Commitments */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/70">Annual Operating Lease Commitments (Rentals)</span>
                    <span className="text-base font-mono font-bold text-white">
                      ₨ {annualLeasePKR} Million / year
                    </span>
                  </div>
                  <input
                    type="range"
                    min={10}
                    max={250}
                    step={5}
                    value={annualLeasePKR}
                    onChange={(e) => {
                      playTactileSound("slider");
                      setAnnualLeasePKR(parseInt(e.target.value));
                    }}
                    className="w-full accent-[#E07A38] bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-white/30 mt-1">
                    <span>₨10M / yr</span>
                    <span>₨250M / yr (Major Fleet/Facilities)</span>
                  </div>
                </div>

                {/* Slider 2: Lease Term (Years) */}
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/70">Weighted Average Lease Duration</span>
                    <span className="text-sm font-mono font-bold text-[#E07A38]">
                      {leaseTermYears} Years
                    </span>
                  </div>
                  <input
                    type="range"
                    min={3}
                    max={15}
                    step={1}
                    value={leaseTermYears}
                    onChange={(e) => {
                      playTactileSound("slider");
                      setLeaseTermYears(parseInt(e.target.value));
                    }}
                    className="w-full accent-[#E07A38] bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-white/30 mt-1">
                    <span>3 Years</span>
                    <span>15 Years (Long-Term Industrial)</span>
                  </div>
                </div>

                {/* Slider 3: Incremental Borrowing Rate (IBR) */}
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs text-white/70">Incremental Borrowing Rate (IBR / Discount Rate)</span>
                    <span className="text-sm font-mono font-bold text-white">
                      {ibrPercent.toFixed(1)}% (KIBOR + Spread)
                    </span>
                  </div>
                  <input
                    type="range"
                    min={12.0}
                    max={22.0}
                    step={0.5}
                    value={ibrPercent}
                    onChange={(e) => {
                      playTactileSound("slider");
                      setIbrPercent(parseFloat(e.target.value));
                    }}
                    className="w-full accent-[#E07A38] bg-white/10 rounded-lg h-1.5 cursor-pointer"
                  />
                  <div className="flex justify-between text-[9px] font-mono text-white/30 mt-1">
                    <span>12.0%</span>
                    <span>22.0% (Current High-Yield Environment)</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] text-[10px] font-mono text-white/40 flex items-center justify-between">
                <span>Actuarial Model: Present Value of Future Lease Cash Outflows</span>
                <span className="text-[#10B981]">Unqualified Audit Ready</span>
              </div>
            </div>

            {/* Right Output Bento Card */}
            <div className="lg:col-span-5 flex flex-col gap-4">
              <TiltCard maxTilt={4} scale={1.01} className="h-full">
                <div className="h-full rounded-2xl border border-[#E07A38]/30 bg-gradient-to-br from-[#120E0A] via-[#0C0B0A] to-[#0A0A0A] p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-[0_16px_40px_rgba(224,122,56,0.12)]">
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#E07A38]/[0.12] rounded-full blur-3xl pointer-events-none" />

                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-[9px] font-mono tracking-widest text-[#E07A38] uppercase font-bold px-2 py-0.5 rounded bg-[#E07A38]/10 border border-[#E07A38]/20">
                        Capitalized Balance Sheet
                      </span>
                      <span className="text-[10px] font-mono text-[#10B981] font-bold">
                        EBITDA: +₨{ebitdaUplift}M
                      </span>
                    </div>

                    <span className="text-xs text-white/50 block mb-1">
                      Recognized Right-of-Use (ROU) Asset on Balance Sheet:
                    </span>
                    <div className="text-4xl sm:text-5xl font-bold font-sans text-white tracking-tight mb-2 text-glow-amber">
                      ₨ {capitalizedROU}M
                    </div>
                    <p className="text-[11px] text-white/60 leading-relaxed font-light mb-6">
                      Off-balance-sheet leases converted into recognized tangible asset backing, expanding enterprise balance sheet size.
                    </p>

                    <div className="space-y-2 pt-4 border-t border-white/[0.08] text-xs">
                      <div className="flex items-center justify-between">
                        <span className="text-white/40">EBITDA Operational Uplift:</span>
                        <span className="font-mono text-[#10B981] font-bold">+₨ {ebitdaUplift}M / year</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/40">ROU Straight-Line Depreciation:</span>
                        <span className="font-mono text-white font-semibold">₨ {annualDepreciation}M / year</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-white/40">Year 1 Financing Cost (P&L):</span>
                        <span className="font-mono text-[#E07A38] font-semibold">₨ {year1FinanceCost}M</span>
                      </div>
                      <div className="flex items-center justify-between pt-1">
                        <span className="text-white/40">Bank Covenant Review:</span>
                        <span className="font-mono text-white/80">Addendum Required</span>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => handleInquire("IFRS 16 Balance Sheet Technical Transition")}
                    className="mt-6 w-full py-3 rounded-xl bg-white hover:bg-[#FAF8F5] text-[#0A0A0A] font-semibold text-xs transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:shadow-[0_0_25px_rgba(224,122,56,0.4)] flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Retain for IFRS 16 Transition</span>
                    <span className="text-[#E07A38]">→</span>
                  </button>
                </div>
              </TiltCard>
            </div>
          </div>
        )}

      </div>
    </section>
  );
};
