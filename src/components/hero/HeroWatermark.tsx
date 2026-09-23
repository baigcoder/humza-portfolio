import React from "react";

export const HeroWatermark: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-between pointer-events-none select-none z-10 px-4 md:px-8 lg:px-14 overflow-hidden">
      {/* Left Typography: ACCA */}
      <div className="text-[17vw] sm:text-[18vw] lg:text-[17vw] font-black tracking-tighter text-[#C45B2B]/[0.07] uppercase leading-none transform translate-y-8 select-none font-sans">
        ACCA
      </div>

      {/* Right Typography: FINANCE */}
      <div className="text-[17vw] sm:text-[18vw] lg:text-[17vw] font-black tracking-tighter text-[#C45B2B]/[0.07] uppercase leading-none transform translate-y-8 select-none font-sans">
        FINANCE
      </div>
    </div>
  );
};
