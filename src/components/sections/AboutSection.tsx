"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import Counter from "@/components/effects/Counter";
import TiltCard from "@/components/effects/TiltCard";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 md:py-36 px-4 sm:px-8 md:px-14 bg-[#050505] overflow-hidden border-t border-white/[0.06]">
      {/* Background ambient warm illumination */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] rounded-full bg-[#E07A38]/[0.05] blur-[160px] pointer-events-none" />

      <div className="max-w-[1420px] mx-auto">
        {/* Section Overline */}
        <div className="flex items-center gap-3 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#E07A38] animate-pulse" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#E07A38] uppercase font-semibold">
            01 · About The Practitioner
          </span>
          <span className="h-[1px] w-12 bg-gradient-to-r from-[#E07A38]/60 to-transparent" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Column: Editorial Philosophy & Biography (7 Cols) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[48px] font-bold text-white leading-[1.08] tracking-tight">
              Finance is the language of{" "}
              <span className="text-[#E07A38] italic font-serif font-normal drop-shadow-[0_0_24px_rgba(224,122,56,0.35)]">
                discipline.
              </span>
              <br />
              I make it speak{" "}
              <span className="text-[#E07A38] italic font-serif font-normal drop-shadow-[0_0_24px_rgba(224,122,56,0.35)]">
                clearly.
              </span>
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-white/75 leading-relaxed font-light max-w-xl">
              <p>
                Humza is an ACCA-qualified financial strategist and corporate advisor based in Lahore, Pakistan. Operating at the intersection of regulatory rigor and capital velocity, he advises forward-thinking organizations on complex financial reporting, governance architecture, and strategic growth.
              </p>
              <p className="text-white/50 text-sm">
                His multidisciplinary experience spans full-lifecycle IFRS implementation, internal audit frameworks (COSO aligned), corporate tax restructuring under Pakistani statutes, and DCF valuation models for venture fundraising and M&A transactions.
              </p>
            </div>

            {/* Executive Stat Bento Grid (4 Cards with Animated Tickers) */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
              <div className="group relative p-4 rounded-xl bg-[#0C0C0C] border border-white/[0.08] hover:border-[#E07A38]/50 hover:bg-[#110E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(224,122,56,0.12)] cursor-default">
                <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 group-hover:text-[#FAF8F5] transition-colors">ACCA</div>
                <div className="text-[9px] font-mono tracking-widest text-[#E07A38] uppercase font-medium">Qualified</div>
                <p className="text-[10px] text-white/40 mt-1">Global Authority</p>
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#E07A38]/[0.06] rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              <div className="group relative p-4 rounded-xl bg-[#0C0C0C] border border-white/[0.08] hover:border-[#E07A38]/50 hover:bg-[#110E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(224,122,56,0.12)] cursor-default">
                <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 group-hover:text-[#FAF8F5] transition-colors">IFRS</div>
                <div className="text-[9px] font-mono tracking-widest text-[#E07A38] uppercase font-medium">Specialist</div>
                <p className="text-[10px] text-white/40 mt-1">Standards 9, 15, 16</p>
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#E07A38]/[0.06] rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              <div className="group relative p-4 rounded-xl bg-[#0C0C0C] border border-white/[0.08] hover:border-[#E07A38]/50 hover:bg-[#110E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(224,122,56,0.12)] cursor-default">
                <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 group-hover:text-[#FAF8F5] transition-colors">
                  <Counter value={2.4} decimals={1} prefix="₨ " suffix="B+" />
                </div>
                <div className="text-[9px] font-mono tracking-widest text-[#E07A38] uppercase font-medium">Audit Scope</div>
                <p className="text-[10px] text-white/40 mt-1">Big 4 Sign-offs</p>
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#E07A38]/[0.06] rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>

              <div className="group relative p-4 rounded-xl bg-[#0C0C0C] border border-white/[0.08] hover:border-[#E07A38]/50 hover:bg-[#110E0B] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(224,122,56,0.12)] cursor-default">
                <div className="text-xl sm:text-2xl font-bold text-white mb-0.5 group-hover:text-[#FAF8F5] transition-colors">
                  <Counter value={5} prefix="" suffix="+ Years" />
                </div>
                <div className="text-[9px] font-mono tracking-widest text-[#E07A38] uppercase font-medium">Advisory</div>
                <p className="text-[10px] text-white/40 mt-1">Strategic Impact</p>
                <div className="absolute top-0 right-0 w-12 h-12 bg-[#E07A38]/[0.06] rounded-bl-xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            </div>

            {/* Action link */}
            <div className="pt-2 flex items-center gap-6">
              <button
                type="button"
                onClick={() => window.dispatchEvent(new CustomEvent("open-dossier"))}
                className="group inline-flex items-center gap-2.5 text-xs font-mono tracking-widest text-white hover:text-[#E07A38] uppercase transition-colors cursor-pointer"
              >
                <span>Request Comprehensive Dossier</span>
                <span className="w-6 h-6 rounded-full bg-white/[0.06] group-hover:bg-[#E07A38] group-hover:text-[#050505] flex items-center justify-center transition-all duration-300 text-[#E07A38] group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>

          {/* Right Column: Tailored Portrait Card with 3D Gyroscopic Tilt (5 Cols, Max-W 420px) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end relative">
            <TiltCard maxTilt={6} scale={1.015} className="w-full max-w-[420px]">
              <div className="group relative w-full aspect-[2/3] rounded-2xl overflow-hidden border border-white/[0.12] shadow-[0_24px_60px_rgba(0,0,0,0.85)] bg-[#050505] transition-all duration-500 hover:border-[#E07A38]/50 hover:shadow-[0_30px_80px_rgba(224,122,56,0.18)]">
                
                {/* Corner Architectural Crosshairs (+) */}
                <span className="absolute top-3 left-3 z-10 text-[9px] font-mono text-white/40 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute top-3 right-3 z-10 text-[9px] font-mono text-white/40 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute bottom-3 left-3 z-10 text-[9px] font-mono text-white/40 select-none group-hover:text-[#E07A38] transition-colors">+</span>
                <span className="absolute bottom-3 right-3 z-10 text-[9px] font-mono text-white/40 select-none group-hover:text-[#E07A38] transition-colors">+</span>

                {/* Full Color Executive Portrait with Complete Double-Breasted Suit & Watch Visible */}
                <Image
                  src="/images/humza-about-executive.webp"
                  alt="Humza – ACCA Qualified Finance Expert"
                  fill
                  priority
                  quality={100}
                  unoptimized
                  className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                  sizes="(max-width: 768px) 100vw, 420px"
                />
                
                {/* Subtle Vignette Gradient at bottom for text contrast */}
                <div className="absolute inset-x-0 bottom-0 h-[40%] bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent pointer-events-none" />

                {/* Floating Verified Dossier Card */}
                <div className="absolute bottom-3.5 left-3.5 right-3.5 p-3.5 rounded-xl bg-[#0C0C0C]/90 backdrop-blur-xl border border-white/[0.12] group-hover:border-[#E07A38]/30 transition-colors shadow-2xl flex items-center justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-1.5">
                      <span className="text-sm font-bold text-white tracking-tight">
                        Humza
                      </span>
                      <span className="px-1.5 py-0.5 rounded text-[9px] font-mono text-[#E07A38] bg-[#E07A38]/10 border border-[#E07A38]/25 font-semibold">
                        ACCA
                      </span>
                    </div>
                    <div className="text-[11px] text-white/50 font-light mt-0.5">
                      Corporate Financial Advisory
                    </div>
                  </div>

                  <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-white/80 flex-shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                    <span>Active Practice</span>
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Ambient decorative warm glow */}
            <div className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full bg-[#E07A38]/[0.1] blur-3xl pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}

