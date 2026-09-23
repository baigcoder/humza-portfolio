"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface CommandItem {
  id: string;
  category: "Navigation" | "Action" | "Contact";
  title: string;
  subtitle: string;
  icon: string;
  badge?: string;
  action: () => void;
}

export default function CommandPalette() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 2500);
  };

  const navigateTo = (hash: string) => {
    setIsOpen(false);
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("humza.acca@advisory.pk");
    showToast("✓ Email copied to clipboard: humza.acca@advisory.pk");
    setIsOpen(false);
  };

  const downloadCV = () => {
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent("open-dossier"));
  };

  const commands: CommandItem[] = [
    {
      id: "about",
      category: "Navigation",
      title: "Executive Profile & Dossier",
      subtitle: "Overview, background, core statistics & credentials",
      icon: "👤",
      action: () => navigateTo("#about"),
    },
    {
      id: "services",
      category: "Navigation",
      title: "Advisory Capabilities & Scope",
      subtitle: "IFRS reporting, internal audit, FBR tax, DCF valuation",
      icon: "⚡",
      badge: "PK · GCC",
      action: () => navigateTo("#services"),
    },
    {
      id: "simulator",
      category: "Navigation",
      title: "Working Capital Liberation Simulator",
      subtitle: "Model cash flow unlocking across revenue & DSO sliders",
      icon: "🧮",
      badge: "Interactive",
      action: () => navigateTo("#simulator"),
    },
    {
      id: "work",
      category: "Navigation",
      title: "Selected Case Engagements",
      subtitle: "Demonstrated client results & quantified audit impact",
      icon: "📁",
      badge: "4 Cases",
      action: () => navigateTo("#work"),
    },
    {
      id: "credentials",
      category: "Navigation",
      title: "Chartered Credentials & Standards",
      subtitle: "ACCA UK Charter, CFA Candidate, IASB & FBR standing",
      icon: "🏆",
      action: () => navigateTo("#credentials"),
    },
    {
      id: "endorsements",
      category: "Navigation",
      title: "Boardroom Endorsements & Peer Citations",
      subtitle: "Verified commentary from corporate CEOs, audit chairs, and VC partners",
      icon: "🎖️",
      badge: "C-Suite",
      action: () => navigateTo("#endorsements"),
    },
    {
      id: "journal",
      category: "Navigation",
      title: "Executive Financial Journal",
      subtitle: "IFRS 16, Pakistan Corporate Tax 2024, COSO controls",
      icon: "📑",
      action: () => navigateTo("#journal"),
    },
    {
      id: "engagements",
      category: "Navigation",
      title: "Leadership & Ministerial Engagements",
      subtitle: "Consultation alongside Finance Minister H.E. Muhammad Aurangzeb",
      icon: "🏛️",
      badge: "Summit",
      action: () => navigateTo("#engagements"),
    },
    {
      id: "faq",
      category: "Navigation",
      title: "Advisory Protocols & Commercial Governance (FAQ)",
      subtitle: "Retainers, Big-4 audit liaison, FBR appeals defense, cross-border GCC",
      icon: "⚖️",
      badge: "Protocol",
      action: () => navigateTo("#faq"),
    },
    {
      id: "contact",
      category: "Navigation",
      title: "Submit Advisory Brief",
      subtitle: "Initiate confidential mandate discussion (24h response)",
      icon: "✉️",
      badge: "Direct",
      action: () => navigateTo("#contact"),
    },
    {
      id: "resume",
      category: "Action",
      title: "View Official Executive Dossier / CV",
      subtitle: "Printable Curriculum Vitae with full technical engagement history",
      icon: "📥",
      badge: "Dossier",
      action: downloadCV,
    },
    {
      id: "copy-email",
      category: "Action",
      title: "Copy Direct Advisory Email",
      subtitle: "humza.acca@advisory.pk",
      icon: "📋",
      action: copyEmail,
    },
  ];

  const filteredCommands = commands.filter(
    (c) =>
      c.title.toLowerCase().includes(query.toLowerCase()) ||
      c.subtitle.toLowerCase().includes(query.toLowerCase()) ||
      c.category.toLowerCase().includes(query.toLowerCase())
  );

  // Global key listener for ⌘K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      } else if (e.key === "Escape" && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Keyboard navigation within list
  const handleInputKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredCommands.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredCommands.length) % (filteredCommands.length || 1));
    } else if (e.key === "Enter" && filteredCommands[selectedIndex]) {
      e.preventDefault();
      filteredCommands[selectedIndex].action();
    }
  };

  return (
    <>
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] px-5 py-2.5 rounded-full bg-[#181512] text-[#FAF8F5] text-xs font-mono font-medium border border-[#E07A38]/50 shadow-[0_8px_30px_rgba(224,122,56,0.3)] animate-fade-in flex items-center gap-2">
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Floating Trigger Button (Bottom Left, Subtle Luxury Pill) */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-5 left-5 z-40 hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#0E0E0E]/80 hover:bg-[#161412] text-white/50 hover:text-white border border-white/[0.08] hover:border-[#E07A38]/40 shadow-lg backdrop-blur-xl transition-all duration-300 text-[11px] font-mono group cursor-pointer"
        aria-label="Open Command Menu"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-[#E07A38] group-hover:scale-125 transition-transform" />
        <span className="tracking-wide">Quick Command</span>
        <span className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[9px] text-white/60">
          ⌘K
        </span>
      </button>

      {/* Backdrop & Modal */}
      {isOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-[90] flex items-start justify-center pt-20 sm:pt-28 px-4 bg-black/75 backdrop-blur-md animate-fade-in"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="w-full max-w-xl rounded-2xl bg-[#0D0D0D] border border-white/[0.14] shadow-[0_24px_80px_rgba(0,0,0,0.9),0_0_40px_rgba(224,122,56,0.15)] overflow-hidden transition-all transform scale-100"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Search Input Bar */}
            <div className="relative flex items-center px-4 py-3.5 border-b border-white/[0.08] bg-[#111111]">
              <span className="text-[#E07A38] text-base mr-3 select-none">✦</span>
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setSelectedIndex(0);
                }}
                onKeyDown={handleInputKeyDown}
                placeholder="Search actions, services, or navigate..."
                className="w-full bg-transparent text-sm text-white placeholder:text-white/35 focus:outline-none font-sans"
              />
              <div className="flex items-center gap-1.5 select-none">
                <span className="px-1.5 py-0.5 rounded bg-white/[0.06] border border-white/[0.08] text-[10px] font-mono text-white/40">
                  ESC
                </span>
              </div>
            </div>

            {/* Command List */}
            <div className="max-h-80 overflow-y-auto p-2 space-y-1">
              {filteredCommands.length === 0 ? (
                <div className="p-8 text-center text-xs font-mono text-white/40">
                  No matching advisory commands found.
                </div>
              ) : (
                filteredCommands.map((cmd, idx) => {
                  const isSelected = idx === selectedIndex;
                  return (
                    <button
                      key={cmd.id}
                      onClick={() => cmd.action()}
                      onMouseEnter={() => setSelectedIndex(idx)}
                      className={`w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl text-left transition-colors cursor-pointer ${
                        isSelected
                          ? "bg-white/[0.07] border border-white/[0.1] text-white"
                          : "text-white/70 hover:bg-white/[0.04] border border-transparent"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-base select-none">{cmd.icon}</span>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[13px] font-medium text-white">
                              {cmd.title}
                            </span>
                            {cmd.badge && (
                              <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-[#E07A38]/10 text-[#E07A38] border border-[#E07A38]/20 font-semibold">
                                {cmd.badge}
                              </span>
                            )}
                          </div>
                          <p className="text-[11px] text-white/40 font-light mt-0.5">
                            {cmd.subtitle}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-[9px] font-mono text-white/30 uppercase tracking-widest hidden sm:inline">
                          {cmd.category}
                        </span>
                        {isSelected && (
                          <span className="text-[#E07A38] text-xs font-mono select-none">
                            ↵
                          </span>
                        )}
                      </div>
                    </button>
                  );
                })
              )}
            </div>

            {/* Footer */}
            <div className="px-4 py-2.5 border-t border-white/[0.06] bg-[#0A0A0A] flex items-center justify-between text-[10px] font-mono text-white/40">
              <div className="flex items-center gap-3">
                <span className="flex items-center gap-1">
                  <kbd className="px-1 rounded bg-white/[0.05] border border-white/[0.08]">↑</kbd>
                  <kbd className="px-1 rounded bg-white/[0.05] border border-white/[0.08]">↓</kbd>
                  <span>to navigate</span>
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 rounded bg-white/[0.05] border border-white/[0.08]">↵</kbd>
                  <span>to select</span>
                </span>
              </div>
              <span className="text-[#E07A38] font-semibold">HUMZA · ACCA</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
