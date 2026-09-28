import React from "react";

export default function MacroTelemetryBar() {
  return (
    <div
      id="telemetry"
      aria-label="Practice coverage and advisory disciplines"
      className="relative w-full border-y border-white/[0.07] bg-[#080808] overflow-hidden"
    >
      <div className="absolute top-0 inset-x-0 h-px hairline-fade" />
      <div className="max-w-[1420px] mx-auto px-4 sm:px-8 md:px-14 py-4 sm:py-5">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.18em] text-white/55">
            Lahore, Pakistan <span className="px-2 text-[#C6956C]">·</span> Serving Pakistan &amp; GCC
          </p>
          <ul className="flex flex-wrap gap-x-4 gap-y-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.12em] text-white/75" aria-label="Advisory disciplines">
            <li>Financial reporting</li>
            <li>Tax</li>
            <li>Governance</li>
            <li>Valuation</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
