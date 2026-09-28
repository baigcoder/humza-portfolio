"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Magnetic from "@/components/effects/Magnetic";

export default function HeroSection() {
  const [mouseOffset, setMouseOffset] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const finePointer = window.matchMedia("(pointer: fine)");
    if (reduceMotion.matches || !finePointer.matches) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 16;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;
      setMouseOffset({ x, y });
    };
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section id="hero" className="relative w-full bg-[#050505] pt-[82px] pb-12 overflow-hidden select-none">
      {/* ── Outer Architectural Grid Hairlines (Image 1 & 2 Signature) ── */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {/* Top Horizontal Hairline across entire viewport */}
        <div className="absolute top-[76px] left-0 right-0 h-[1px] bg-white/[0.08]" />

        {/* Left Vertical Hairline */}
        <div className="absolute top-0 bottom-0 left-4 sm:left-8 md:left-14 w-[1px] bg-white/[0.08]" />

        {/* Right Vertical Hairline */}
        <div className="absolute top-0 bottom-0 right-4 sm:right-8 md:right-14 w-[1px] bg-white/[0.08]" />

        {/* Intersection Crosshair (+) Markers */}
        <span className="absolute top-[76px] left-4 sm:left-8 md:left-14 -translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-white/40 select-none">
          +
        </span>
        <span className="absolute top-[76px] right-4 sm:right-8 md:right-14 translate-x-1/2 -translate-y-1/2 text-[10px] font-mono text-white/40 select-none">
          +
        </span>
      </div>

      {/* ── Main Hero Stage Frame ── */}
      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-14">
        <div className="hero-stage relative w-full aspect-[16/9.4] min-h-[540px] max-h-[780px] rounded-2xl md:rounded-3xl overflow-hidden border border-white/[0.1] shadow-[0_30px_100px_rgba(0,0,0,0.95)] bg-[#0A0A0A]">

          {/* Editorial identity markers */}
          <div className="absolute top-5 left-5 sm:top-7 sm:left-7 z-[12] flex items-center gap-2.5 rounded-full border border-white/15 bg-black/35 px-3.5 py-2 backdrop-blur-md animate-fade-in">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[9px] sm:text-[10px] font-mono uppercase tracking-[0.18em] text-white/85">Independent advisory · Lahore</span>
          </div>
          <div className="absolute top-5 right-5 sm:top-7 sm:right-7 z-[12] hidden sm:flex flex-col items-end text-[9px] font-mono uppercase tracking-[0.2em] text-white/55 drop-shadow-lg">
            <span>Finance / Strategy</span>
            <span className="mt-1 text-white/35">PK · GCC</span>
          </div>

          {/* Desktop editorial statement: the portrait becomes the right-hand focal point. */}
          <div className="absolute left-[7%] top-[23%] z-[10] hidden max-w-[47%] text-left lg:block xl:left-[8%] xl:top-[25%]">
            <div className="hero-copy-enter mb-6 flex items-center gap-3 text-[10px] font-mono font-semibold uppercase tracking-[0.24em] text-[#F2A06A]">
              <span className="h-px w-8 bg-[#E07A38]" />
              Strategic finance · Corporate advisory
            </div>
            <h1 className="hero-copy-enter hero-copy-delay-1 max-w-[600px] text-[clamp(3.2rem,5.2vw,5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-white [text-wrap:balance]">
              Where precision
              <span className="mt-2 block font-serif font-normal italic tracking-[-0.055em] text-[#F0B17F]">meets capital.</span>
            </h1>
            <p className="hero-copy-enter hero-copy-delay-2 mt-6 max-w-[410px] text-sm leading-7 text-white/70 xl:text-base">
              Clear financial thinking for complex decisions, ambitious businesses, and enduring growth.
            </p>
            <div className="hero-copy-enter hero-copy-delay-3 mt-8 flex flex-wrap items-center gap-3">
              <Magnetic strength={0.18}>
                <Link href="#contact" className="group inline-flex items-center gap-3 rounded-full bg-[#F3EFE7] px-6 py-3.5 text-xs font-semibold text-[#111] shadow-[0_8px_30px_rgba(0,0,0,0.32)] transition-all duration-300 hover:bg-white hover:shadow-[0_0_32px_rgba(224,122,56,0.28)]">
                  Start a conversation
                  <span className="text-[#C45B2B] transition-transform duration-300 group-hover:translate-x-1">↗</span>
                </Link>
              </Magnetic>
              <Link href="#work" className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/15 px-5 py-3.5 text-xs font-medium text-white/85 backdrop-blur-sm transition-colors hover:border-white/45 hover:text-white">
                Explore selected work <span aria-hidden="true">↓</span>
              </Link>
            </div>
          </div>

          <div className="absolute bottom-7 left-7 z-[10] hidden items-center gap-3 text-[9px] font-mono uppercase tracking-[0.18em] text-white/55 lg:flex xl:left-9">
            <span className="h-8 w-px bg-gradient-to-b from-[#E07A38] to-transparent" />
            Reporting <span className="text-white/25">/</span> Governance <span className="text-white/25">/</span> Capital
          </div>
          <a href="#telemetry" aria-label="Scroll to explore" className="absolute bottom-7 right-8 z-[10] hidden items-center gap-3 text-[9px] font-mono uppercase tracking-[0.18em] text-white/55 transition-colors hover:text-white lg:flex">
            Scroll to explore <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 text-xs">↓</span>
          </a>

          {/* ── STAGE LAYER 1: Ultra HD 4K Master Cinematic Artwork ── */}
          <div className="absolute inset-0 z-[1] select-none pointer-events-none">
            <Image
              src="/images/humza-hero-master-4k.jpg"
              alt="Humza – ACCA Professional"
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-center transition-transform duration-1000 ease-out hero-master-image"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.16}px, ${mouseOffset.y * 0.16}px, 0) scale(1.02)`,
              }}
            />
          </div>

          {/* Luminous warm golden backlight shine matching given reference */}
          <div
            className="absolute top-[8%] left-[36%] md:left-[40%] w-[520px] h-[520px] rounded-full blur-[90px] opacity-45 pointer-events-none z-[2]"
            style={{
              background: "radial-gradient(circle, rgba(255, 185, 75, 0.6) 0%, rgba(240, 130, 45, 0.35) 45%, rgba(180, 70, 20, 0.12) 70%, transparent 85%)",
            }}
          />

          {/* Bottom vignette — smooth grounding gradient for text clarity */}
          <div className="absolute inset-x-0 bottom-0 h-[38%] bg-gradient-to-t from-[#050505]/95 via-[#050505]/50 to-transparent z-[2] pointer-events-none" />

          {/* ── STAGE LAYER 2: Animated 3D Back-Text ("ACCA" & "FINANCE") ── */}
          {/* Rendered at Layer 3, passing BEHIND Humza's cutout silhouette on Layer 4 */}
          <div className="absolute inset-x-0 bottom-[3%] z-[3] pointer-events-none select-none flex items-end justify-between px-6 sm:px-10 md:px-14 overflow-hidden">
            {/* Left Word: "ACCA" */}
            <div
              className="animate-float-acca transition-transform duration-700 ease-out"
              style={{
                transform: `translate3d(${-mouseOffset.x * 0.45}px, ${-mouseOffset.y * 0.35}px, 0)`,
              }}
            >
              <span className="font-bebas text-[20vw] sm:text-[18vw] md:text-[200px] lg:text-[230px] leading-none tracking-tight text-[#F08E74]/[0.78] drop-shadow-[0_0_25px_rgba(235,115,75,0.3)]">
                ACCA
              </span>
            </div>

            {/* Right Word: "FINANCE" (Tucks behind Humza's back & chest) */}
            <div
              className="animate-float-finance transition-transform duration-700 ease-out mr-[-3vw] sm:mr-[-1vw] md:mr-0"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.45}px, ${mouseOffset.y * 0.35}px, 0)`,
              }}
            >
              <span className="font-bebas text-[20vw] sm:text-[18vw] md:text-[200px] lg:text-[230px] leading-none tracking-tight text-[#F08E74]/[0.78] drop-shadow-[0_0_25px_rgba(235,115,75,0.3)]">
                FINANCE
              </span>
            </div>
          </div>

          {/* ── STAGE LAYER 3: Pixel-Matched 4K Humza Silhouette Cutout ── */}
          {/* Sits directly over Layer 2 so the letters pass physically behind Humza */}
          <div className="absolute inset-0 z-[4] select-none pointer-events-none">
            <Image
              src="/images/humza-master-4k-cutout.png"
              alt=""
              fill
              priority
              quality={100}
              unoptimized
              className="object-cover object-center transition-transform duration-1000 ease-out hero-master-image"
              style={{
                transform: `translate3d(${mouseOffset.x * 0.16}px, ${mouseOffset.y * 0.16}px, 0) scale(1.02)`,
              }}
            />
          </div>

          {/* ── STAGE LAYER 3.5: Targeted Torso Contrast Darkening ── */}
          {/* Darkens the body/shirt directly under the headline so the white text pops with high clarity */}
          <div className="absolute inset-x-0 bottom-0 h-[52%] z-[5] bg-gradient-to-t from-[#050505]/85 via-[#050505]/45 to-transparent pointer-events-none" />
          <div
            className="absolute inset-0 z-[5] pointer-events-none"
            style={{
              background: "radial-gradient(ellipse 46% 38% at 49% 68%, rgba(0, 0, 0, 0.58) 0%, rgba(0, 0, 0, 0.25) 45%, transparent 75%)",
            }}
          />

          {/* ── STAGE LAYER 4: Foreground Editorial Headline & Conversion Action ── */}
          <div className="absolute inset-x-0 bottom-0 z-[10] flex flex-col items-center text-center pb-7 sm:pb-9 md:pb-12 px-6 lg:hidden">
            {/* Headline */}
            <h1 className="anim-fade-up leading-[1.04] mb-3 text-center">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-bold tracking-tight text-white font-sans drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                Where Precision
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[54px] xl:text-[60px] font-serif italic text-white/95 tracking-[-0.01em] mt-0.5 sm:mt-1 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)]">
                Meets Capital
              </span>
            </h1>

            {/* Subheading */}
            <p className="anim-fade-up delay-100 max-w-[500px] text-center text-xs sm:text-[13px] md:text-[14.5px] text-white/90 leading-relaxed font-normal mb-5 sm:mb-6 drop-shadow-[0_2px_14px_rgba(0,0,0,0.95)]">
              ACCA Certified Finance Expert based in Pakistan, driving sustainable growth, compliance, and strategic financial impact.
            </p>

            {/* Primary Action Button (Magnetic Glowing Pill) */}
            <div className="anim-fade-up delay-200">
              <Magnetic strength={0.28}>
                <Link
                  href="#contact"
                  className="group/btn relative inline-flex items-center justify-center px-8 py-3 text-xs sm:text-[13.5px] font-semibold tracking-wide text-[#0A0A0A] bg-white hover:bg-[#FAF8F5] rounded-full shadow-[0_0_24px_rgba(255,255,255,0.4),0_12px_28px_rgba(0,0,0,0.85)] hover:shadow-[0_0_36px_rgba(224,122,56,0.45)] transition-all duration-300 hover:scale-[1.04] active:scale-[0.98]"
                >
                  <span>Collaborate With Me</span>
                  <span className="ml-2 text-[#E07A38] transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                </Link>
              </Magnetic>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
