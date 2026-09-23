import React from "react";

interface ArchitecturalFrameProps {
  children: React.ReactNode;
}

export const ArchitecturalFrame: React.FC<ArchitecturalFrameProps> = ({ children }) => {
  return (
    <div className="relative w-full h-[100svh] min-h-[600px] max-h-[1080px] bg-[#070707] text-[#FAF8F3] overflow-hidden select-none">
      {/* 1. Top Horizontal Hairline (spans edge-to-edge) */}
      <div className="pointer-events-none absolute top-[58px] md:top-[64px] left-0 right-0 h-[1px] bg-white/[0.12] z-30" />

      {/* 2. Bottom Horizontal Hairline (spans edge-to-edge) */}
      <div className="pointer-events-none absolute bottom-[18px] md:bottom-[24px] left-0 right-0 h-[1px] bg-white/[0.12] z-30" />

      {/* 3. Left Vertical Hairline (spans top-to-bottom) */}
      <div className="pointer-events-none absolute top-0 bottom-0 left-[24px] sm:left-[36px] md:left-[44px] w-[1px] bg-white/[0.12] z-30" />

      {/* 4. Right Vertical Hairline (spans top-to-bottom) */}
      <div className="pointer-events-none absolute top-0 bottom-0 right-[24px] sm:right-[36px] md:right-[44px] w-[1px] bg-white/[0.12] z-30" />

      {/* Main Page Layout */}
      <div className="relative z-10 w-full h-full flex flex-col">
        {children}
      </div>
    </div>
  );
};
