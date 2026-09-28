"use client";

import React, { useState } from "react";
import Link from "next/link";
import { playTactileSound } from "@/components/effects/SoundEffects";
import SectionLabel from "@/components/layout/SectionLabel";

interface FaqItem {
  id: string;
  category: string;
  question: string;
  answer: string;
  takeaways: string[];
}

const faqs: FaqItem[] = [
  {
    id: "01",
    category: "Commercial Structuring",
    question: "What are the primary engagement models for retaining Humza’s advisory practice?",
    answer:
      "Engagements are configured across three primary structures tailored to corporate governance requirements: (1) Monthly Advisory Retainer for ongoing CFO-level strategic steering, tax compliance, and board reporting; (2) Fixed-Scope Milestone Mandates for technical projects like IFRS 15/16 transitions, enterprise risk overhauls, or DCF valuations; and (3) Fractional CFO / Transaction Support for M&A due diligence, fundraising rounds, or statutory audit crisis resolution.",
    takeaways: [
      "Transparent milestones tied to board sign-offs and regulatory deliverables.",
      "Clear scopes preventing billable creep or unexpected overhead.",
      "Flexible hybrid models available for high-growth enterprise groups.",
    ],
  },
  {
    id: "02",
    category: "Audit Assurance",
    question: "How does Humza coordinate with Big-4 and Tier-1 statutory audit teams?",
    answer:
      "Rather than acting as a passive client liaison, Humza leads the technical accounting defense. All financial schedules, Right-of-Use asset calculations, impairment models (IAS 36), and revenue recognition matrices (IFRS 15) are pre-assembled in standard external audit workpaper formats with complete cross-referenced documentation. This preempts technical objections and expedites unqualified audit sign-off.",
    takeaways: [
      "Full workpaper binders delivered in Big-4 standard audit structure.",
      "Direct technical defense during audit committee query sessions.",
      "Track record of zero material adjustments on finalized audit schedules.",
    ],
  },
  {
    id: "03",
    category: "Regulatory & Tax",
    question: "What is the protocol for handling FBR tax scrutiny notices and CIR Appeals?",
    answer:
      "Upon receiving audit or assessment notices under Section 122(5A), 161, or 177 of the Income Tax Ordinance 2001, Humza conducts an immediate evidentiary reconciliation between general ledger entries and Computerized Payment Receipts (CPRs). We draft authoritative written rebuttals grounded in High Court and Appellate Tribunal Inland Revenue (ATIR) case law, and coordinate defense representation to vacate arbitrary additions.",
    takeaways: [
      "Rigorous reconciliation preventing unjustified withholding tax leakages.",
      "Evidentiary legal rebuttals grounded in authoritative tax case law.",
      "Expedited processing for legitimate withholding tax cash refund claims.",
    ],
  },
  {
    id: "04",
    category: "Cross-Border Capital",
    question: "Does the practice advise cross-border enterprises operating between Pakistan and the GCC?",
    answer:
      "Yes. A significant segment of our advisory scope focuses on bilateral structuring between Pakistan (SECP / FBR) and the United Arab Emirates (Federal Tax Authority). This includes structuring holding entities, evaluating 9% UAE Corporate Tax vs. 0% Qualifying Free Zone Person (QFZP) exemptions, instituting arm's-length transfer pricing protocols, and optimizing cross-border capital repatriation.",
    takeaways: [
      "Harmonized reporting across Pakistan SECP and UAE Corporate Tax regimes.",
      "Arm’s-length transfer pricing documentation for cross-border services.",
      "Mitigation of double taxation through bilateral tax treaty provisions.",
    ],
  },
  {
    id: "05",
    category: "Governance & Ethics",
    question: "What Non-Disclosure Agreement (NDA) and confidentiality protocols are observed?",
    answer:
      "Confidentiality is an absolute cornerstone of the advisory relationship. Prior to reviewing general ledgers, executive payroll, or corporate trial balances, we execute comprehensive bilateral Non-Disclosure Agreements (NDAs). Furthermore, Humza is bound by the rigorous International Code of Ethics and Conduct established by the Association of Chartered Certified Accountants (ACCA UK).",
    takeaways: [
      "Bilateral institutional NDAs executed prior to any data exchange.",
      "Adherence to strict ACCA UK ethical and professional independence codes.",
      "Encrypted secure data rooms utilized for sensitive board workpapers.",
    ],
  },
];

export default function FaqSection() {
  const [openId, setOpenId] = useState<string | null>("01");

  const toggleAccordion = (id: string) => {
    playTactileSound("click");
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="relative py-20 md:py-28 px-4 sm:px-8 md:px-14 bg-[#050505] section-divider overflow-hidden"
    >
      <div className="max-w-[1420px] mx-auto relative z-10">
        {/* Section Header */}
        <SectionLabel index="09" label="Advisory Protocols & Commercial Governance" />

        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mb-10">
          <div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-[1.04] tracking-[-0.025em] max-w-2xl">
              Engagement terms.{" "}
              <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
                Institutional
              </span>{" "}
              clarity.
            </h2>
            <p className="text-sm md:text-[15px] text-white/60 leading-relaxed max-w-md mt-4">
              Standard commercial frameworks, Big-4 audit coordination, FBR tax defense, and bilateral confidentiality protocols.
            </p>
          </div>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-[11px] font-mono tracking-wide text-white/70 border border-white/[0.1] hover:border-[#E07A38]/50 hover:text-white bg-white/[0.02] hover:bg-white/[0.05] transition-all"
          >
            <span>Have a Specific Mandate Question?</span>
            <span className="text-[#E07A38]">→</span>
          </Link>
        </div>

        {/* Accordion Stack */}
        <div className="space-y-3 max-w-4xl mx-auto">
          {faqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-[#0A0A0A] border-[#E07A38]/40 shadow-[0_8px_30px_rgba(224,122,56,0.08)]"
                    : "bg-[#080808] border-white/[0.06] hover:border-white/[0.12]"
                }`}
              >
                {/* Accordion Header */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full p-5 sm:p-6 text-left flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-mono font-bold tracking-widest text-[#E07A38] uppercase">
                        {faq.category}
                      </span>
                      <span className="text-[9px] font-mono text-white/30">| REF {faq.id}</span>
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {faq.question}
                    </h3>
                  </div>

                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border text-xs font-mono transition-transform duration-300 flex-shrink-0 mt-1 ${
                      isOpen
                        ? "bg-[#E07A38] text-[#0A0A0A] border-[#E07A38] rotate-45"
                        : "bg-white/[0.03] text-white/50 border-white/[0.1]"
                    }`}
                  >
                    +
                  </div>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 border-t border-white/[0.04] text-xs sm:text-[13px] text-white/70 leading-relaxed font-light space-y-4 animate-fade-in">
                    <p>{faq.answer}</p>

                    <div className="p-3.5 rounded-lg bg-white/[0.02] border border-white/[0.05] space-y-2">
                      <span className="text-[9px] font-mono tracking-widest text-[#10B981] uppercase font-bold block">
                        Institutional Governance Takeaways:
                      </span>
                      <ul className="space-y-1.5 text-[11px] text-white/60">
                        {faq.takeaways.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <span className="text-[#10B981] font-bold">•</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
