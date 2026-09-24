"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "@/components/effects/Magnetic";

// Parallax depth multipliers, applied to the --mx / --my pointer offsets
const STAGE_DEPTH = 0.16;
const BACKTEXT_DEPTH_X = 0.45;
const BACKTEXT_DEPTH_Y = 0.35;
const CHIP_DEPTH = 0.7;

const stageTransform = `translate3d(calc(var(--mx) * ${STAGE_DEPTH}px), calc(var(--my) * ${STAGE_DEPTH}px), 0) scale(1.02)`;

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);

  // Pointer parallax is written to CSS custom properties instead of React
  // state, so moving the mouse never re-renders the hero.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!finePointer || reducedMotion) return;

    let frame = 0;
    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        el.style.setProperty("--mx", ((e.clientX / window.innerWidth - 0.5) * 16).toFixed(2));
        el.style.setProperty("--my", ((e.clientY / window.innerHeight - 0.5) * 10).toFixed(2));
      });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full bg-[#050505] pt-[82px] overflow-hidden select-none [--mx:0] [--my:0]"
    >
      {/* ── Outer Architectural Grid Hairlines ── */}
      <div className="absolute inset-0 pointer-events-none z-20">
        <div className="absolute top-[76px] left-0 right-0 h-[1px] bg-white/[0.08]" />
        <div className="absolute top-0 bottom-0 left-4 sm:left-8 md:left-14 w-[1px] bg-white/[0.08]" />
        <div className="absolute top-0 bottom-0 right-4 sm:right-8 md:right-14 w-[1px] bg-white/[0.08]" />
        <span className="absolute top-[76px] left-4 sm:left-8 md:left-14 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-white/40 select-none">
          +
        </span>
        <span className="absolute top-[76px] right-4 sm:right-8 md:right-14 translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-white/40 select-none">
          +
        </span>
      </div>

      {/* ── Main Hero Stage Frame ── */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-14">
        <div className="relative w-full aspect-[16/9.4] min-h-[620px] sm:min-h-[560px] max-h-[780px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.1] shadow-[0_30px_100px_rgba(0,0,0,0.95)] bg-[#0A0A0A] isolate">

          {/* ── LAYER 1: Cinematic stage artwork ── */}
          <div className="absolute inset-0 z-[1] pointer-events-none anim-scale-in">
            <Image
              src="/images/humza-hero-master-4k.jpg"
              alt="Humza – ACCA Professional"
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-center transition-transform duration-700 ease-out"
              style={{ transform: stageTransform }}
            />
          </div>

          {/* Warm golden backlight bloom */}
          <div
            className="absolute top-[8%] left-[36%] md:left-[40%] w-[520px] h-[520px] rounded-full blur-[90px] opacity-45 pointer-events-none z-[2] animate-ambient-pulse"
            style={{
              background: "radial-gradient(circle, rgba(255, 185, 75, 0.6) 0%, rgba(240, 130, 45, 0.35) 45%, rgba(180, 70, 20, 0.12) 70%, transparent 85%)",
            }}
          />

          {/* Top + bottom grounding vignettes */}
          <div className="absolute inset-x-0 top-0 h-[22%] bg-gradient-to-b from-black/45 to-transparent z-[2] pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent z-[2] pointer-events-none" />

          {/* ── LAYER 2: Back-text ("ACCA" & "FINANCE") passing behind the cutout ── */}
          <div className="hidden sm:flex absolute inset-x-0 bottom-[3%] z-[3] pointer-events-none items-end justify-between px-10 md:px-14 overflow-hidden">
            <div
              className="animate-float-acca transition-transform duration-700 ease-out"
              style={{
                transform: `translate3d(calc(var(--mx) * ${-BACKTEXT_DEPTH_X}px), calc(var(--my) * ${-BACKTEXT_DEPTH_Y}px), 0)`,
              }}
            >
              <span className="hero-backtext block font-bebas text-[18vw] md:text-[200px] lg:text-[230px] leading-none tracking-tight">
                ACCA
              </span>
            </div>
            <div
              className="animate-float-finance transition-transform duration-700 ease-out mr-[-1vw] md:mr-0"
              style={{
                transform: `translate3d(calc(var(--mx) * ${BACKTEXT_DEPTH_X}px), calc(var(--my) * ${BACKTEXT_DEPTH_Y}px), 0)`,
              }}
            >
              <span className="hero-backtext block font-bebas text-[18vw] md:text-[200px] lg:text-[230px] leading-none tracking-tight">
                FINANCE
              </span>
            </div>
          </div>

          {/* ── LAYER 3: Subject cutout, pixel-matched to Layer 1 ── */}
          <div className="absolute inset-0 z-[4] pointer-events-none anim-scale-in">
            <Image
              src="/images/humza-master-4k-cutout.png"
              alt=""
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-center transition-transform duration-700 ease-out"
              style={{ transform: stageTransform }}
            />
          </div>

          {/* ── LAYER 3.5: Torso contrast scrim so the headline reads cleanly ── */}
          <div className="absolute inset-x-0 bottom-0 h-[68%] sm:h-[55%] z-[5] bg-gradient-to-t from-[#050505] via-[#050505]/60 sm:from-[#050505]/90 sm:via-[#050505]/50 to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 48% 40% at 50% 74%, rgba(0, 0, 0, 0.62) 0%, rgba(0, 0, 0, 0.28) 45%, transparent 75%)",
            }}
          />

          {/* Film grain + inner rim highlight for a printed, tactile finish */}
          <div className="grain absolute inset-0 z-[6] pointer-events-none opacity-[0.07] mix-blend-overlay" />
          <div className="absolute inset-0 z-[7] pointer-events-none rounded-[inherit] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_0_0_1px_rgba(255,255,255,0.03)]" />

          {/* ── Frame corner metadata ── */}
          <div className="absolute top-4 left-4 sm:top-6 sm:left-6 z-[9] anim-fade-in delay-300 anim-initial">
            <span className="inline-flex items-center gap-2 pl-2.5 pr-3 py-1.5 rounded-full bg-black/35 backdrop-blur-md border border-white/[0.14] text-[10px] sm:text-[10.5px] font-mono tracking-[0.14em] text-white/85 uppercase">
              <span className="relative flex w-1.5 h-1.5">
                <span className="absolute inset-0 rounded-full bg-[#10B981] animate-ping opacity-70" />
                <span className="relative w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </span>
              Open for Advisory
            </span>
          </div>
          <div className="hidden sm:block absolute top-6 right-6 z-[9] text-right anim-fade-in delay-400 anim-initial">
            <span className="block text-[10px] font-mono tracking-[0.18em] text-white/75 uppercase">Lahore · Pakistan</span>
            <span className="block text-[10px] font-mono tracking-[0.12em] text-white/45 mt-0.5 tabular-nums">31.5204° N — 74.3587° E</span>
          </div>

          {/* Floating credential chips over the backlight (desktop) */}
          <div
            className="hidden lg:block absolute top-[34%] left-[7%] z-[8] transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(calc(var(--mx) * ${-CHIP_DEPTH}px), calc(var(--my) * ${-CHIP_DEPTH}px), 0)` }}
          >
            <div className="anim-fade-up delay-500 anim-initial flex items-center gap-3 pl-2 pr-4 py-2 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/[0.16] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <span className="w-9 h-9 rounded-xl bg-white/[0.1] border border-white/[0.14] flex items-center justify-center font-bebas text-lg text-white tracking-wide">A</span>
              <span>
                <span className="block text-[13px] font-semibold text-white leading-tight">ACCA Qualified</span>
                <span className="block text-[10px] font-mono tracking-[0.12em] text-white/60 uppercase mt-0.5">Chartered Certified</span>
              </span>
            </div>
          </div>
          <div
            className="hidden lg:block absolute top-[24%] right-[7%] z-[8] transition-transform duration-700 ease-out"
            style={{ transform: `translate3d(calc(var(--mx) * ${CHIP_DEPTH}px), calc(var(--my) * ${CHIP_DEPTH}px), 0)` }}
          >
            <div className="anim-fade-up delay-600 anim-initial pl-4 pr-5 py-3 rounded-2xl bg-black/30 backdrop-blur-xl border border-white/[0.16] shadow-[0_18px_40px_rgba(0,0,0,0.35)]">
              <span className="block text-[10px] font-mono tracking-[0.16em] text-white/60 uppercase">Audit Scope</span>
              <span className="block text-2xl font-bold text-white tracking-tight leading-none mt-1">₨ 2.1B+</span>
              <span className="mt-2 flex items-center gap-1.5 text-[10px] font-mono text-[#FFD2A1]/90">
                <span className="w-1 h-1 rounded-full bg-[#FFD2A1]" />
                IFRS 9 · 15 · 16
              </span>
            </div>
          </div>

          {/* ── LAYER 4: Headline & conversion actions ── */}
          <div className="absolute inset-x-0 bottom-0 z-[10] flex flex-col items-center text-center pb-8 sm:pb-10 md:pb-12 px-5 sm:px-6">
            <span className="anim-fade-up anim-initial mb-4 inline-flex items-center gap-2.5 text-[10px] sm:text-[11px] font-mono tracking-[0.26em] text-white/75 uppercase">
              <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#FFB070]" />
              ACCA · Corporate Finance
              <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#FFB070]" />
            </span>

            <h1 className="anim-fade-up anim-initial delay-100 leading-[1.02] mb-4 text-center">
              <span className="block text-[2.1rem] sm:text-5xl md:text-[56px] lg:text-[60px] xl:text-[66px] font-bold tracking-[-0.035em] text-white font-sans drop-shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
                Where Precision
              </span>
              <span className="block text-[2.1rem] sm:text-5xl md:text-[56px] lg:text-[60px] xl:text-[66px] font-serif italic tracking-[-0.01em] mt-0.5 sm:mt-1 pb-1 text-gradient-warm">
                Meets Capital
              </span>
            </h1>

            <p className="anim-fade-up anim-initial delay-200 max-w-[480px] text-center text-[13px] md:text-[14.5px] text-white/80 leading-relaxed mb-6 sm:mb-7 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              ACCA certified finance expert based in Pakistan — driving sustainable growth, compliance, and strategic financial impact.
            </p>

            <div className="anim-fade-up anim-initial delay-300 flex flex-wrap items-center justify-center gap-3">
              <Magnetic strength={0.28}>
                <Link
                  href="#contact"
                  className="group/btn relative inline-flex items-center justify-center px-7 sm:px-8 py-3 text-[13px] sm:text-[13.5px] font-semibold tracking-wide text-[#0A0A0A] bg-white hover:bg-[#FAF8F5] rounded-full shadow-[0_0_24px_rgba(255,255,255,0.35),0_12px_28px_rgba(0,0,0,0.85)] hover:shadow-[0_0_36px_rgba(224,122,56,0.5)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
                >
                  <span>Collaborate With Me</span>
                  <span className="ml-2 text-[#E07A38] transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </Magnetic>
              <Link
                href="#work"
                className="group/ghost inline-flex items-center justify-center px-6 py-3 text-[13px] sm:text-[13.5px] font-medium tracking-wide text-white/90 hover:text-white rounded-full bg-white/[0.06] hover:bg-white/[0.12] backdrop-blur-md border border-white/[0.18] hover:border-white/[0.32] transition-all duration-300"
              >
                <span>View Case Work</span>
                <span className="ml-2 text-white/60 transition-transform duration-300 group-hover/ghost:translate-x-0.5 group-hover/ghost:-translate-y-0.5">↗</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* ── Under-frame editorial rail ── */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-14">
        <div className="relative flex items-center justify-between px-2 sm:px-3 py-4 md:py-5 text-[10px] md:text-[10.5px] font-mono tracking-[0.2em] text-white/40 uppercase">
          <span className="hidden sm:inline">Est. Practice · Lahore — PK</span>
          <Link
            href="#about"
            aria-label="Scroll to About"
            className="group mx-auto sm:mx-0 sm:absolute sm:left-1/2 sm:-translate-x-1/2 inline-flex items-center gap-3 text-white/55 hover:text-white transition-colors"
          >
            <span className="relative h-7 w-px overflow-hidden bg-white/[0.12]">
              <span className="absolute inset-x-0 top-0 h-1/2 bg-gradient-to-b from-transparent to-[#E07A38] animate-scroll-cue" />
            </span>
            <span>Scroll to explore</span>
          </Link>
          <span className="hidden sm:inline">IFRS · Audit · Tax · Valuation</span>
        </div>
      </div>
    </section>
  );
}
