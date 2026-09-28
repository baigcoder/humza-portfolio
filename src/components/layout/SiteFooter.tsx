"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="relative bg-[#050505] border-t border-white/[0.08] overflow-hidden">
      <div className="border-b border-white/[0.06]">
        <div className="max-w-[1532px] mx-auto px-4 sm:px-8 md:px-14 py-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.16em]">
          <span className="text-white/80">Humza <span className="text-[#C6956C]">·</span> ACCA</span>
          <span className="text-white/45">Financial reporting · Governance · Tax · Valuation</span>
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
                <span className="text-[9px] font-mono tracking-[0.2em] text-[#C6956C]">ACCA · FINANCE</span>
              </div>
            </div>
            <p className="text-xs text-white/50 leading-relaxed max-w-sm font-light">
              ACCA-qualified finance professional in Lahore, Pakistan, advising on financial reporting, internal audit, corporate tax, and valuation.
            </p>
          </div>

          {/* Col 2: Navigation (2 cols) */}
          <div className="md:col-span-2 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#C6956C] uppercase font-semibold">
              Navigation
            </div>
            <div className="space-y-2 text-xs font-light">
              <Link href="#about" className="block text-white/60 hover:text-white transition-colors">
                About
              </Link>
              <Link href="#services" className="block text-white/60 hover:text-white transition-colors">
                Services
              </Link>
              <Link href="#simulator" className="block text-white/60 hover:text-[#C6956C] transition-colors">
                Scenario Tools
              </Link>
              <Link href="#work" className="block text-white/60 hover:text-white transition-colors">
                Case Studies
              </Link>
              <Link href="#credentials" className="block text-white/60 hover:text-white transition-colors">
                Credentials & Standards
              </Link>
              <Link href="#endorsements" className="block text-white/60 hover:text-white transition-colors">
                Client Feedback
              </Link>
              <Link href="#journal" className="block text-white/60 hover:text-white transition-colors">
                Strategic Journal
              </Link>
              <Link href="#engagements" className="block text-white/60 hover:text-white transition-colors">
                Institutional Engagement
              </Link>
              <Link href="#faq" className="block text-white/60 hover:text-white transition-colors">
                Advisory Protocols & FAQ
              </Link>
              <Link href="#contact" className="block text-white/60 hover:text-[#C6956C] transition-colors">
                Submit Brief →
              </Link>
            </div>
          </div>

          {/* Col 3: Practice Disciplines (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#C6956C] uppercase font-semibold">
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
            <div className="text-[10px] font-mono tracking-[0.2em] text-[#C6956C] uppercase font-semibold">
              Direct Inquiries
            </div>
            <div className="space-y-2 text-xs">
              <a
                href="mailto:humza.acca@advisory.pk"
                className="block text-white/80 hover:text-[#C6956C] transition-colors font-mono"
              >
                humza.acca@advisory.pk
              </a>
              <p className="text-white/40">Lahore, Punjab, Pakistan</p>
              <div className="pt-2">
                <button
                  type="button"
                  onClick={() => window.dispatchEvent(new CustomEvent("open-dossier"))}
                  className="inline-flex items-center gap-1.5 text-[11px] font-mono text-[#C6956C] hover:underline cursor-pointer"
                >
                  <span>View profile · Save as PDF</span>
                  <span>↗</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Metadata Hairline */}
        <div className="mt-14 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-white/30 uppercase tracking-wider">
          <div>
            © {new Date().getFullYear()} Humza, ACCA · Lahore, Pakistan
          </div>
          <div className="flex items-center gap-4">
            <span>Upholding the ACCA Code of Ethics</span>
            <span className="text-[#C6956C]">●</span>
            <span>Lahore, PK</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
