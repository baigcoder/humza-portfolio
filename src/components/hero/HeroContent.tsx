import React from "react";
import Link from "next/link";

export const HeroContent: React.FC = () => {
  return (
    <div className="relative z-30 flex flex-col items-center text-center max-w-3xl mx-auto px-6 mt-auto pb-14 md:pb-16 pointer-events-auto">
      {/* Eyebrow / Discipline */}
      <div className="inline-flex items-center gap-2 mb-3">
        <span className="text-[11px] md:text-xs font-semibold tracking-[0.24em] text-[#F3EFE7]/80 uppercase">
          ACCA · ACCOUNTING · FINANCE
        </span>
      </div>

      {/* Editorial Dual-Typeface Headline */}
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.6rem] font-bold tracking-tight text-[#FAF8F3] leading-[1.08] mb-4">
        <span className="block font-sans font-bold">
          Where Precision
        </span>
        <span className="block font-serif italic font-normal text-[#FAF8F3] -mt-1 md:-mt-2">
          Meets Finance
        </span>
      </h1>

      {/* Descriptive Paragraph */}
      <p className="max-w-xl text-xs sm:text-sm md:text-[15px] text-[#F3EFE7]/85 leading-relaxed mb-6 font-normal tracking-wide">
        ACCA professional based in Lahore, Pakistan, focused on accounting, financial reporting,
        financial analysis and clear financial decision-making.
      </p>

      {/* Action CTAs */}
      <div className="flex flex-wrap items-center justify-center gap-3">
        <Link
          href="/work"
          className="inline-flex items-center justify-center px-6 py-2.5 text-xs sm:text-sm font-semibold tracking-wide text-[#0D0D0D] bg-[#F3EFE7] hover:bg-white rounded-full shadow-lg shadow-black/30 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
        >
          <span>VIEW MY WORK</span>
          <span className="ml-1.5 text-sm">→</span>
        </Link>

        <a
          href="/cv.pdf"
          download="Humza_ACCA_Resume.pdf"
          className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-medium tracking-wide text-[#FAF8F3] bg-[#141414]/75 hover:bg-[#202020] border border-[rgba(243,239,231,0.18)] hover:border-[rgba(243,239,231,0.35)] rounded-full transition-all duration-200"
        >
          <span>DOWNLOAD CV</span>
          <span className="ml-1.5 text-xs opacity-70">→</span>
        </a>
      </div>
    </div>
  );
};
