"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] overflow-hidden">
      {/* Infinite Subtle Architectural Marquee Ribbon */}
      <div className="py-6 border-b border-white/[0.04] overflow-hidden select-none">
        <div className="anim-marquee">
          {Array.from({ length: 4 }).map((_, i) => (
            <span
              key={i}
              className="text-[48px] sm:text-[70px] md:text-[84px] font-black tracking-tighter text-white/[0.03] uppercase whitespace-nowrap mx-8 font-sans"
            >
              HUMZA · ACCA CERTIFIED · FINANCIAL ARCHITECTURE · LAHORE ·
            </span>
          ))}
        </div>
      </div>

      <div className="max-w-[1532px] mx-auto px-4 sm:px-8 md:px-14 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 md:gap-10">
          {/* Col 1: Identity (4 cols) */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <Image src="/images/sun-emblem.svg" alt="" width={28} height={28} />
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-widest text-white uppercase">HUMZA</span>
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#E07A38]">ACCA · FINANCE</span>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm font-light">
              ACCA-qualified financial professional based in Lahore, Pakistan. Advising forward-thinking corporate groups on statutory IFRS reporting, risk-based internal audit assurance, corporate tax optimization, and DCF valuation.
            </p>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-semibold">
              Navigation
            </div>
            <div className="space-y-2 text-xs font-light">
              <Link href="#about" className="block text-white/60 hover:text-white transition-colors">
                About Dossier
              </Link>
              <Link href="#services" className="block text-white/60 hover:text-white transition-colors">
                Advisory Scope
              </Link>
              <Link href="#simulator" className="block text-white/60 hover:text-[#E07A38] transition-colors">
                Capital Simulator
              </Link>
              <Link href="#work" className="block text-white/60 hover:text-white transition-colors">
                Case Engagements
              </Link>
              <Link href="#credentials" className="block text-white/60 hover:text-white transition-colors">
                Credentials & Standards
              </Link>
              <Link href="#journal" className="block text-white/60 hover:text-white transition-colors">
                Strategic Journal
              </Link>
              <Link href="#engagements" className="block text-white/60 hover:text-white transition-colors">
                Ministerial Summit
              </Link>
              <Link href="#contact" className="block text-white/60 hover:text-[#E07A38] transition-colors">
                Submit Brief →
              </Link>
            </div>
          </div>

          {/* Col 3: Practice Disciplines (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-semibold">
              Practice Disciplines
            </div>
            <div className="space-y-1.5 text-xs text-white/60 font-light">
              <p>• Statutory IFRS Financial Reporting</p>
              <p>• Internal Audit & Risk Assurance</p>
              <p>• Corporate Valuation & DCF Models</p>
              <p>• FBR Corporate Tax Strategy</p>
              <p>• SBP & SECP Statutory Compliance</p>
              <p>• UAE / GCC Corporate Tax & VAT</p>
            </div>
          </div>

          {/* Col 4: Direct Inquiries (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#E07A38] uppercase font-semibold">
              Direct Inquiries
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:humza.acca@advisory.pk"
                className="block text-white/80 hover:text-[#E07A38] transition-colors font-mono"
              >
                humza.acca@advisory.pk
              </a>
              <p className="text-white/40">Lahore, Punjab, Pakistan</p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-dossier"))}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#E07A38] hover:underline cursor-pointer"
                >
                  <span>Download Professional Resume</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Hairline */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/30 uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} HUMZA, ACCA. All Professional Rights Reserved.
          </div>
          <div className="flex items-center gap-4">
            <span>Upholding the ACCA Code of Ethics</span>
            <span className="text-[#E07A38]">●</span>
            <span>Lahore, PK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
