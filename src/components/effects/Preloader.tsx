"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function Preloader() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    // Smooth progress counter simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 16) + 8;
        return Math.min(100, prev + diff);
      });
    }, 50);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress === 100) {
      const timeout = setTimeout(() => {
        setLoading(false);
        const hideTimeout = setTimeout(() => {
          setHidden(true);
        }, 700);
        return () => clearTimeout(hideTimeout);
      }, 250);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  if (hidden) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] bg-[#050505] flex flex-col items-center justify-center transition-all duration-700 ease-out select-none ${
        loading ? "opacity-100 scale-100" : "opacity-0 scale-[1.03] pointer-events-none"
      }`}
    >
      {/* Background ambient warm halo */}
      <div className="absolute w-[480px] h-[480px] rounded-full bg-[#E07A38]/[0.08] blur-[140px] pointer-events-none animate-ambient-pulse" />

      {/* Outer grid hairlines & architectural crosshairs matching website theme */}
      <div className="absolute inset-8 sm:inset-14 border border-white/[0.05] pointer-events-none">
        <span className="absolute -top-1.5 -left-1.5 text-[10px] font-mono text-white/30 select-none">+</span>
        <span className="absolute -top-1.5 -right-1.5 text-[10px] font-mono text-white/30 select-none">+</span>
        <span className="absolute -bottom-1.5 -left-1.5 text-[10px] font-mono text-white/30 select-none">+</span>
        <span className="absolute -bottom-1.5 -right-1.5 text-[10px] font-mono text-white/30 select-none">+</span>
      </div>

      {/* Central Brand Identity (Same Logo & Text as Navbar Left) */}
      <div className="relative z-10 flex flex-col items-center text-center">
        {/* Sun Emblem with elegant pulsing glow & slow rotation */}
        <div className="relative w-14 h-14 sm:w-16 sm:h-16 mb-6">
          <div className="absolute inset-0 rounded-full bg-[#E07A38]/25 blur-xl animate-pulse" />
          <Image
            src="/images/sun-emblem.svg"
            alt="Humza Logo"
            width={64}
            height={64}
            priority
            className="w-full h-full relative z-10 animate-[spin_14s_linear_infinite]"
          />
        </div>

        {/* Identical Typography as Navbar */}
        <div className="flex flex-col items-center space-y-1.5 mb-8">
          <span className="text-2xl sm:text-3xl font-bold tracking-[0.22em] text-white font-sans drop-shadow-[0_0_24px_rgba(255,255,255,0.2)]">
            HUMZA
          </span>
          <span className="text-[11px] sm:text-xs font-mono tracking-[0.32em] text-[#E07A38] uppercase font-semibold drop-shadow-[0_0_12px_rgba(224,122,56,0.3)]">
            ACCA · FINANCE
          </span>
        </div>

        {/* Minimalist Glowing Progress Meter */}
        <div className="w-52 sm:w-60 space-y-2.5">
          <div className="h-[2px] w-full bg-white/[0.08] rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-[#E07A38] via-[#FF8A3D] to-[#E07A38] shadow-[0_0_12px_rgba(224,122,56,0.9)] transition-all duration-100 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[10px] font-mono text-white/40 tracking-widest pt-0.5">
            <span>PREPARING ADVISORY</span>
            <span className="text-[#E07A38] font-bold font-mono">{progress}%</span>
          </div>
        </div>
      </div>
    </div>
  );
}
