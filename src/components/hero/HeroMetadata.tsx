import React from "react";

export const HeroMetadata: React.FC = () => {
  return (
    <div className="relative z-30 w-full px-6 md:px-12 lg:px-16 pb-4 pt-2 border-t border-[rgba(243,239,231,0.08)]">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between text-[10px] md:text-[11px] font-mono tracking-widest text-[#7B776F] uppercase">
        {/* Left: Location */}
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38]/70 inline-block animate-pulse" />
          <span>LAHORE, PAKISTAN</span>
        </div>

        {/* Center: Core Competencies */}
        <div className="hidden sm:block">
          <span>ACCOUNTING · ANALYSIS · FINANCE</span>
        </div>

        {/* Right: Scroll Prompt */}
        <div className="flex items-center gap-1.5 hover:text-[#FAF8F3] transition-colors cursor-pointer">
          <span>SCROLL TO EXPLORE</span>
          <span className="text-xs">↓</span>
        </div>
      </div>
    </div>
  );
};
