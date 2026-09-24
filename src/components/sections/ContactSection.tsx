"use client";

import React, { useState, useEffect } from "react";
import Magnetic from "@/components/effects/Magnetic";
import SectionLabel from "@/components/layout/SectionLabel";

export default function ContactSection() {
  const [pktTime, setPktTime] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [toastMsg, setToastMsg] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    scope: "IFRS Financial Reporting",
    message: "",
  });

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => setToastMsg(null), 2500);
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    navigator.clipboard.writeText("humza.acca@advisory.pk");
    showToast("✓ Direct email copied: humza.acca@advisory.pk");
  };

  useEffect(() => {
    const handleSetScope = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setFormData((prev) => ({
          ...prev,
          scope: customEvent.detail,
        }));
        showToast(`✓ Scope selected: ${customEvent.detail}`);
      }
    };
    window.addEventListener("set-advisory-scope", handleSetScope);

    const updateTime = () => {
      const now = new Date();
      // UTC+5 for Pakistan Standard Time
      const pkt = new Date(now.getTime() + (5 * 60 + now.getTimezoneOffset()) * 60000);
      setPktTime(
        pkt.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => {
      window.removeEventListener("set-advisory-scope", handleSetScope);
      clearInterval(interval);
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 px-4 sm:px-8 md:px-14 bg-[#0A0A0A] border-t border-white/[0.06] overflow-hidden">
      {/* Toast Alert */}
      {toastMsg && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full bg-[#181512] text-[#FAF8F5] text-xs font-mono font-medium border border-[#E07A38]/50 shadow-[0_8px_30px_rgba(224,122,56,0.3)] animate-fade-in flex items-center gap-2">
          <span>{toastMsg}</span>
        </div>
      )}

      {/* Background radial glow */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[500px] rounded-full bg-[#E07A38]/[0.05] blur-[150px] pointer-events-none" />

      <div className="max-w-[1420px] mx-auto">
        {/* Section Header */}
        <SectionLabel index="10" label="Strategic Engagement" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Column: Direct Contact & Advisory Information */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[50px] font-bold text-white leading-[1.08] tracking-tight mb-4">
                Initiate a dialogue.{" "}
                <span className="text-[#E07A38] italic font-serif font-normal text-glow-amber">
                  Engineer
                </span>{" "}
                value.
              </h2>
              <p className="text-sm text-white/60 leading-relaxed font-light">
                Available for selective retained advisory mandates, corporate audit committees, and high-impact transaction consulting.
              </p>
            </div>

            {/* Live Telemetry Card */}
            <div className="group relative p-6 rounded-2xl bg-[#0E0E0E] border border-white/[0.08] hover:border-[#E07A38]/40 transition-all duration-300 space-y-4 shadow-xl">
              {/* Corner Architectural Crosshairs (+) */}
              <span className="absolute top-2.5 left-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute top-2.5 right-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute bottom-2.5 left-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute bottom-2.5 right-2.5 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>

              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-widest text-[#E07A38] font-semibold">
                  Practicing Headquarters
                </span>
                <span className="px-2.5 py-0.5 rounded-full text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 border border-[#10B981]/25 flex items-center gap-1.5 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  OPEN FOR ADVISORY
                </span>
              </div>

              <div>
                <div className="text-base font-semibold text-white group-hover:text-[#FAF8F5] transition-colors">Lahore, Punjab, Pakistan</div>
                <div className="text-xs font-mono text-white/40">31.5204° N, 74.3587° E</div>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs font-mono text-white/60 border-t border-white/[0.04]">
                <span>Local Time (PKT · UTC+5):</span>
                <span className="text-white font-bold font-mono tracking-wider">{pktTime || "12:00:00 PM"}</span>
              </div>
            </div>

            {/* Direct Channels */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E07A38]/40 hover:bg-[#120E0B] transition-all group">
                <a href="mailto:humza.acca@advisory.pk" className="flex-1">
                  <div className="text-[10px] font-mono text-[#E07A38] uppercase font-semibold">Direct Email</div>
                  <div className="text-sm font-medium text-white group-hover:text-[#FAF8F5] transition-colors">
                    humza.acca@advisory.pk
                  </div>
                </a>
                <div className="flex items-center gap-2">
                  <button
                    onClick={copyEmail}
                    className="px-2.5 py-1 rounded-md text-[10px] font-mono text-white/60 hover:text-white bg-white/[0.05] hover:bg-white/[0.1] border border-white/[0.1] transition-colors cursor-pointer flex items-center gap-1"
                    title="Copy Email"
                  >
                    <span>Copy</span>
                  </button>
                  <a
                    href="mailto:humza.acca@advisory.pk"
                    className="w-7 h-7 rounded-full bg-white/[0.04] group-hover:bg-[#E07A38] group-hover:text-[#050505] flex items-center justify-center text-xs text-white/40 transition-all duration-300 group-hover:translate-x-0.5"
                    aria-label="Send Email"
                  >
                    ↗
                  </a>
                </div>
              </div>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-4 rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-[#E07A38]/40 hover:bg-[#120E0B] transition-all group"
              >
                <div>
                  <div className="text-[10px] font-mono text-[#E07A38] uppercase font-semibold">Professional Network</div>
                  <div className="text-sm font-medium text-white group-hover:text-[#FAF8F5] transition-colors">
                    LinkedIn Verified Profile
                  </div>
                </div>
                <span className="w-7 h-7 rounded-full bg-white/[0.04] group-hover:bg-[#E07A38] group-hover:text-[#050505] flex items-center justify-center text-xs text-white/40 transition-all duration-300 group-hover:translate-x-0.5">
                  ↗
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Confidential Engagement Brief Form */}
          <div className="lg:col-span-7">
            <div className="group relative p-8 sm:p-10 rounded-2xl md:rounded-3xl bg-[#0E0E0E] border border-white/[0.08] shadow-2xl hover:border-white/[0.16] transition-all duration-300">
              {/* Corner Architectural Crosshairs (+) */}
              <span className="absolute top-3 left-3 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute top-3 right-3 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute bottom-3 left-3 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>
              <span className="absolute bottom-3 right-3 z-10 text-[8px] font-mono text-white/20 select-none group-hover:text-[#E07A38] transition-colors">+</span>

              <h3 className="text-xl font-bold text-white mb-2">Confidential Advisory Brief</h3>
              <p className="text-xs text-white/50 mb-6 font-light">
                Submit details regarding your organization's financial architecture or advisory scope.
              </p>

              {formSubmitted ? (
                <div className="p-8 rounded-xl bg-[#141414] border border-[#E07A38]/40 text-center space-y-3 shadow-[0_0_30px_rgba(224,122,56,0.1)]">
                  <div className="w-12 h-12 rounded-full bg-[#E07A38]/20 border border-[#E07A38] text-[#E07A38] flex items-center justify-center mx-auto text-xl shadow-[0_0_20px_rgba(224,122,56,0.3)]">
                    ✓
                  </div>
                  <div className="text-base font-bold text-white">Brief Received Successfully</div>
                  <p className="text-xs text-white/60 max-w-sm mx-auto">
                    Thank you. Your advisory brief has been logged. Humza will review your requirements and respond within 24 business hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5 font-semibold">
                        Your Name / Title
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Tariq Malik, Managing Director"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.09] text-white text-sm focus:outline-none focus:border-[#E07A38] focus:ring-2 focus:ring-[#E07A38]/30 transition-all placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5 font-semibold">
                        Corporate Email
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="tariq@enterprise.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.09] text-white text-sm focus:outline-none focus:border-[#E07A38] focus:ring-2 focus:ring-[#E07A38]/30 transition-all placeholder:text-white/30"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5 font-semibold">
                        Organization / Enterprise
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Apex Industrial Holdings"
                        value={formData.organization}
                        onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.09] text-white text-sm focus:outline-none focus:border-[#E07A38] focus:ring-2 focus:ring-[#E07A38]/30 transition-all placeholder:text-white/30"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5 font-semibold">
                        Engagement Focus
                      </label>
                      <select
                        value={formData.scope}
                        onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.09] text-white text-sm focus:outline-none focus:border-[#E07A38] focus:ring-2 focus:ring-[#E07A38]/30 transition-all cursor-pointer"
                      >
                        <option value="IFRS Financial Reporting">IFRS Financial Reporting (Standards 9, 15, 16)</option>
                        <option value="FBR Tax Strategy & Compliance">FBR Tax Strategy & Compliance (ITO 2001)</option>
                        <option value="IFRS Transition & SBP Reporting">IFRS Transition & SBP Reporting</option>
                        <option value="Internal Audit & SECP Governance">Internal Audit & SECP Governance (COSO)</option>
                        <option value="FP&A & Business Advisory">FP&A & Business Advisory (3-Statement Models)</option>
                        <option value="Corporate Finance & M&A Advisory">Corporate Finance & M&A Advisory (DCF Valuation)</option>
                        <option value="Working Capital & Liquidity Strategy">Working Capital & Liquidity Strategy</option>
                        <option value="GCC & UAE Corporate Tax Advisory">GCC & UAE Corporate Tax Advisory</option>
                        <option value="General Strategic Inquiries">General Strategic Inquiries</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-white/50 mb-1.5 font-semibold">
                      Scope Overview & Objectives
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Outline your timeline, organizational complexity, and core deliverables required..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#141414] border border-white/[0.09] text-white text-sm focus:outline-none focus:border-[#E07A38] focus:ring-2 focus:ring-[#E07A38]/30 transition-all resize-none placeholder:text-white/30"
                    />
                  </div>

                  <Magnetic strength={0.2} className="w-full">
                    <button
                      type="submit"
                      className="w-full py-4 px-8 rounded-full bg-white hover:bg-[#FAF8F5] text-[#0A0A0A] font-semibold text-xs sm:text-[13px] tracking-wide shadow-[0_0_24px_rgba(255,255,255,0.35),0_8px_20px_rgba(0,0,0,0.7)] hover:shadow-[0_0_36px_rgba(224,122,56,0.45)] transition-all duration-300 hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 cursor-pointer group/btn"
                    >
                      <span>Submit Advisory Brief</span>
                      <span className="text-[#E07A38] transition-transform duration-300 group-hover/btn:translate-x-1">→</span>
                    </button>
                  </Magnetic>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
