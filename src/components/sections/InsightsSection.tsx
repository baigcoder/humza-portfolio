"use client";

import React, { useState } from "react";
import { insightsContent, Article } from "@/content/insights";

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);

  return (
    <section id="insights" className="relative w-full py-24 md:py-32 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-white/[0.08] bg-[#0A0A0A] text-[#FAF8F3]">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E07A38]" />
              <span className="text-xs font-mono tracking-[0.24em] text-[#C45B2B] uppercase">
                05 / PERSPECTIVES & JOURNAL
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F3]">
              Financial Insights
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#7B776F] leading-relaxed">
            Analytical commentaries on technical IFRS standards, liquidity architecture in high-inflation markets, and modern BI adoption.
          </p>
        </div>

        {/* Editorial Articles Index */}
        <div className="space-y-6">
          {insightsContent.map((article) => (
            <article
              key={article.slug}
              onClick={() => setSelectedArticle(selectedArticle?.slug === article.slug ? null : article)}
              className="p-8 rounded-2xl bg-[#111111] border border-white/[0.08] hover:border-[#E07A38]/40 transition-all duration-300 cursor-pointer group shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 mb-4">
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-[#E07A38] uppercase">
                    {article.category}
                  </span>
                  <span className="text-xs text-[#7B776F] font-mono">
                    {article.date} · {article.readTime}
                  </span>
                </div>
                <span className="text-xs text-white/50 group-hover:text-[#E07A38] font-mono transition-colors">
                  {selectedArticle?.slug === article.slug ? "COLLAPSE ARTICLE ↑" : "READ COMPLETE ARTICLE →"}
                </span>
              </div>

              <h3 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#FAF8F3] group-hover:text-[#E07A38] transition-colors mb-4">
                {article.title}
              </h3>

              <p className="text-xs sm:text-sm text-[#FAF8F3]/75 leading-relaxed font-light">
                {article.excerpt}
              </p>

              {/* In-Line Full Article Expansion */}
              {selectedArticle?.slug === article.slug && (
                <div className="mt-8 pt-8 border-t border-white/[0.08] space-y-4 text-sm text-[#FAF8F3]/85 leading-relaxed font-light animate-in fade-in duration-300">
                  {article.content.map((paragraph, idx) => (
                    <p key={idx} className="max-w-4xl">
                      {paragraph}
                    </p>
                  ))}
                  <div className="pt-4 flex items-center gap-3">
                    <span className="text-xs font-mono text-[#E07A38]">Author:</span>
                    <span className="text-xs font-medium text-white">Humza, ACCA</span>
                  </div>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
