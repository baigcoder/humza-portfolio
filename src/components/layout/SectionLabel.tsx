import React from "react";

interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ index, label, className = "mb-6 md:mb-8" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="inline-flex items-center justify-center h-7 min-w-[2rem] px-2 rounded-[9px] border border-[#C6956C]/30 bg-gradient-to-br from-[#C6956C]/[0.13] to-[#C6956C]/[0.035] text-[10px] font-mono font-semibold text-[#E1B48F] tabular-nums tracking-wider shadow-[inset_0_1px_0_rgba(255,255,255,0.06)]">
        {index}
      </span>
      <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#C6956C]/70 to-transparent" />
      <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.17em] sm:tracking-[0.2em] text-[#F3EFE7]/70 uppercase font-medium">
        {label}
      </span>
    </div>
  );
}
