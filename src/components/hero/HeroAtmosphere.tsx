import React from "react";

export const HeroAtmosphere: React.FC = () => {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 1. Primary Photographic Golden Backlight (emanating behind Humza's head & upper torso) */}
      <div 
        className="absolute top-[8%] left-1/2 -translate-x-[45%] w-[850px] h-[680px] rounded-full blur-[90px] opacity-90"
        style={{
          background: "radial-gradient(ellipse at center, rgba(224, 122, 56, 0.92) 0%, rgba(217, 119, 54, 0.82) 28%, rgba(196, 91, 43, 0.6) 48%, rgba(74, 23, 24, 0.75) 68%, transparent 82%)",
        }}
      />

      {/* 2. Secondary Deep Burgundy & Rust Atmospheric Fill */}
      <div 
        className="absolute inset-0 opacity-80"
        style={{
          background: "radial-gradient(circle at 50% 45%, transparent 20%, rgba(74, 23, 24, 0.65) 55%, rgba(20, 20, 20, 0.95) 85%, #0D0D0D 100%)",
        }}
      />

      {/* 3. Subtle Warm Ambient Bounce on Left & Right */}
      <div 
        className="absolute top-1/4 left-[10%] w-[380px] h-[380px] rounded-full blur-[110px] opacity-40"
        style={{
          background: "radial-gradient(circle, rgba(196, 91, 43, 0.45) 0%, rgba(74, 23, 24, 0.25) 60%, transparent 80%)",
        }}
      />
      <div 
        className="absolute top-1/3 right-[10%] w-[400px] h-[400px] rounded-full blur-[110px] opacity-45"
        style={{
          background: "radial-gradient(circle, rgba(217, 119, 54, 0.4) 0%, rgba(74, 23, 24, 0.3) 60%, transparent 80%)",
        }}
      />

      {/* 4. Bottom Grounding Shadow Vignette */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-[280px]"
        style={{
          background: "linear-gradient(to top, #0D0D0D 15%, rgba(13, 13, 13, 0.85) 45%, rgba(13, 13, 13, 0.3) 75%, transparent 100%)",
        }}
      />

      {/* 5. Edge Vignette (Left, Right, Top) */}
      <div 
        className="absolute inset-0"
        style={{
          boxShadow: "inset 0 0 140px 50px #0D0D0D",
        }}
      />
    </div>
  );
};
