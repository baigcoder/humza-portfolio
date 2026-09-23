"use client";

import React, { useState, useEffect } from "react";
import { playTactileSound } from "@/components/effects/SoundEffects";

export default function MacroTelemetryBar() {
  const [lahoreTime, setLahoreTime] = useState<string>("--:--:--");
  const [dubaiTime, setDubaiTime] = useState<string>("--:--:--");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const updateTimes = () => {
      const now = new Date();
      // Lahore Time (UTC+5)
      setLahoreTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Karachi",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
      // Dubai Time (UTC+4)
      setDubaiTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Asia/Dubai",
          hour12: false,
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleBarClick = () => {
    playTactileSound("tick");
  };

  return (
    <div
      id="telemetry"
      onClick={handleBarClick}
      className="relative w-full border-y border-white/[0.07] bg-[#070707] select-none overflow-hidden"
    >
      {/* Corner crosshairs */}
      <span className="absolute top-1 left-3 text-[8px] font-mono text-white/20 pointer-events-none">+</span>
      <span className="absolute top-1 right-3 text-[8px] font-mono text-white/20 pointer-events-none">+</span>

      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-14 py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-6 text-[10px] sm:text-[11px] font-mono">
          
          {/* Dual Financial Capital Hub Clocks */}
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Lahore Hub */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
              <span className="text-white/40 uppercase tracking-wider">LAHORE PKT</span>
              <span className="text-white font-semibold tabular-nums tracking-wide">
                {mounted ? lahoreTime : "12:00:00"}
              </span>
              <span className="text-white/25 text-[9px]">(UTC+5)</span>
            </div>

            <div className="h-3 w-[1px] bg-white/[0.1] hidden sm:block" />

            {/* Dubai Hub */}
            <div className="flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38] animate-pulse" />
              <span className="text-white/40 uppercase tracking-wider">DUBAI GST</span>
              <span className="text-white font-semibold tabular-nums tracking-wide">
                {mounted ? dubaiTime : "11:00:00"}
              </span>
              <span className="text-white/25 text-[9px]">(UTC+4)</span>
            </div>
          </div>

          {/* Institutional Macro Benchmarks */}
          <div className="flex items-center flex-wrap gap-4 sm:gap-6 text-white/60">
            {/* SBP Policy Rate */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/35">SBP POLICY:</span>
              <span className="text-[#FAF8F5] font-semibold">17.50%</span>
            </div>

            {/* 6M KIBOR */}
            <div className="flex items-center gap-1.5 hidden md:flex">
              <span className="text-white/35">6M KIBOR:</span>
              <span className="text-[#FAF8F5] font-semibold">16.85%</span>
            </div>

            {/* FBR Filing Status */}
            <div className="flex items-center gap-1.5">
              <span className="text-white/35">FBR CYCLE:</span>
              <span className="px-2 py-0.5 rounded bg-[#10B981]/10 text-[#10B981] border border-[#10B981]/25 text-[9px] font-bold">
                Q1 ADVANCE TAX ACTIVE
              </span>
            </div>

            {/* SECP Status */}
            <div className="flex items-center gap-1.5 hidden lg:flex">
              <span className="text-white/35">SECP:</span>
              <span className="text-[#E07A38] font-semibold">COMPLIANCE ON SCHEDULE</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
