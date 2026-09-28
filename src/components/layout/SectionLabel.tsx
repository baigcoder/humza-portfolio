import React from "react";

interface SectionLabelProps {
  index: string;
  label: string;
  className?: string;
}

export default function SectionLabel({ index, label, className = "mb-6 md:mb-8" }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <span className="inline-flex items-center justify-center h-6 min-w-[2.25rem] px-2 rounded-full border border-[#C6956C]/35 bg-[#C6956C]/[0.08] text-[10px] font-mono font-semibold text-[#C6956C] tabular-nums tracking-wider">
        {index}
      </span>
      <span className="h-px w-8 sm:w-12 bg-gradient-to-r from-[#C6956C]/70 to-transparent" />
      <span className="text-[10.5px] sm:text-[11px] font-mono tracking-[0.22em] text-[#F3EFE7]/65 uppercase font-medium">
        {label}
      </span>
    </div>
  );
}
