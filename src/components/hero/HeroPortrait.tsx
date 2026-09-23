import React from "react";
import Image from "next/image";

export const HeroPortrait: React.FC = () => {
  return (
    <div className="absolute bottom-0 left-1/2 -translate-x-[48%] z-20 pointer-events-none flex items-end justify-center w-full max-w-[1200px] h-[82svh] max-h-[880px]">
      <div className="relative w-auto h-full flex items-end justify-center">
        {/* Photographic Rim Glow Effect */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-50 blur-xl"
          style={{
            background: "radial-gradient(ellipse at 55% 35%, rgba(224, 122, 56, 0.4) 0%, transparent 65%)",
          }}
        />

        {/* Humza Real Cutout Portrait */}
        <div 
          className="relative h-full w-auto flex items-end"
          style={{
            maskImage: "linear-gradient(to bottom, black 0%, black 86%, transparent 100%)",
            WebkitMaskImage: "linear-gradient(to bottom, black 0%, black 86%, transparent 100%)",
          }}
        >
          <Image
            src="/images/humza-hero.webp"
            alt="Humza - ACCA · Accounting · Finance Professional"
            width={580}
            height={900}
            priority
            quality={95}
            className="h-full w-auto object-contain object-bottom drop-shadow-[0_15px_40px_rgba(0,0,0,0.85)] filter brightness-[1.02] contrast-[1.05]"
          />
        </div>
      </div>
    </div>
  );
};
