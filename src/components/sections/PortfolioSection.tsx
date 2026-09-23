import React from "react";
import { projectsContent } from "@/content/projects";

export const PortfolioSection: React.FC = () => {
  return (
    <section id="portfolio" className="relative w-full py-24 md:py-32 px-6 sm:px-10 md:px-14 lg:px-20 border-t border-white/[0.08] bg-[#0A0A0A] text-[#FAF8F3]">
      <div className="max-w-[1360px] mx-auto">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <span className="w-2 h-2 rounded-full bg-[#E07A38]" />
              <span className="text-xs font-mono tracking-[0.24em] text-[#C45B2B] uppercase">
                03 / SELECTED ENGAGEMENTS & WORK
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#FAF8F3]">
              Financial Case Studies
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-[#7B776F] leading-relaxed">
            Detailed examinations of financial problem solving—spanning statutory reporting overhauls, dynamic modeling, and executive BI architecture.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {projectsContent.map((project) => (
            <article
              key={project.id}
              className="relative p-8 rounded-2xl bg-[#111111] border border-white/[0.08] flex flex-col justify-between hover:border-[#E07A38]/30 transition-all duration-300 group shadow-xl"
            >
              {/* Header Info */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-[#E07A38]">
                    CASE {project.number}
                  </span>
                  <span className="text-[11px] font-mono tracking-widest text-[#7B776F] uppercase">
                    {project.category}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif text-[#FAF8F3] mb-4 group-hover:text-[#E07A38] transition-colors">
                  {project.title}
                </h3>

                <div className="space-y-4 text-xs sm:text-[13px] text-[#FAF8F3]/80 leading-relaxed font-light mb-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#7B776F] uppercase block mb-1">
                      CHALLENGE
                    </span>
                    <p>{project.challenge}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#7B776F] uppercase block mb-1">
                      METHODOLOGICAL APPROACH
                    </span>
                    <p>{project.approach}</p>
                  </div>
                  <div>
                    <span className="text-[10px] font-mono tracking-widest text-[#7B776F] uppercase block mb-1">
                      STATUTORY / STRATEGIC OUTCOME
                    </span>
                    <p className="text-[#FAF8F3] font-normal">{project.outcome}</p>
                  </div>
                </div>
              </div>

              {/* Metrics & Tools Footer */}
              <div className="pt-6 border-t border-white/[0.08]">
                <div className="grid grid-cols-3 gap-2 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="p-2.5 rounded bg-white/[0.02] border border-white/[0.04]">
                      <span className="block text-[10px] text-[#7B776F] font-mono mb-0.5">
                        {m.label}
                      </span>
                      <span className="block text-xs font-semibold text-white truncate">
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {project.tools.map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[10px] rounded bg-white/[0.04] text-[#FAF8F3]/70 font-mono"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
