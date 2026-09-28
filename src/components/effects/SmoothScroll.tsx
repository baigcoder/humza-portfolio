"use client";

import React, { useEffect, useState } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

export default function SmoothScroll() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mousePos, setMousePos] = useState({ x: -1000, y: -1000 });

  useEffect(() => {
    // 1. Initialize luxury Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 1.4,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    // 2. Smooth anchor click navigation with offset
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href === "#" || href === "#!") return;

      const element = document.querySelector(href);
      if (element) {
        e.preventDefault();
        lenis.scrollTo(element as HTMLElement, {
          offset: -82,
          duration: 1.15,
        });
      }
    };
    document.addEventListener("click", handleAnchorClick);

    // 3. Scroll progress & Back to Top listener
    const onScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(Math.min(100, Math.max(0, currentProgress)));
      }
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // 4. Subtle ambient mouse aura tracking
    const onMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // 5. Scroll Reveal Intersection Observer
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            // Stagger siblings that enter together (e.g. a row of grid cards)
            const siblings = el.parentElement ? Array.from(el.parentElement.children) : [];
            const index = siblings.filter((s) => s.classList.contains("reveal-init")).indexOf(el);
            const delay = Math.min(Math.max(index, 0), 5) * 80;
            el.style.transitionDelay = `${delay}ms`;
            el.classList.add("reveal-visible");
            revealObserver.unobserve(el);
            // Hand the element back to its own transitions/transforms (hover lifts etc.)
            window.setTimeout(() => {
              el.classList.remove("reveal-init", "reveal-visible");
              el.style.transitionDelay = "";
            }, 900 + delay);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    const revealElements = document.querySelectorAll(
      "section > div, article, .group\\/card, .reveal-item"
    );
    revealElements.forEach((el) => {
      el.classList.add("reveal-init");
      revealObserver.observe(el);
    });

    // Cleanup
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("mousemove", onMouseMove);
      revealObserver.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ── Precision Scroll Progress Hairline ── */}
      <div
        className="fixed top-0 left-0 h-[2.5px] z-[999] pointer-events-none bg-gradient-to-r from-[#E07A38] via-[#FF8A3D] to-[#E07A38] shadow-[0_0_12px_rgba(224,122,56,0.7)] transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* ── Ambient Interactive Cursor Spotlight (Subtle Desktop Atmosphere) ── */}
      <div
        className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-700 hidden lg:block"
        style={{
          background: `radial-gradient(650px circle at ${mousePos.x}px ${mousePos.y}px, rgba(224, 122, 56, 0.032), transparent 75%)`,
        }}
      />

      {/* ── Floating Back to Top Button ── */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#0E0E0E]/90 backdrop-blur-xl border border-white/[0.14] hover:border-[#E07A38] text-white hover:text-[#E07A38] shadow-[0_8px_30px_rgba(0,0,0,0.85)] hover:shadow-[0_0_24px_rgba(224,122,56,0.4)] flex items-center justify-center transition-all duration-400 cursor-pointer group ${
          showBackToTop
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg
          className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
        </svg>
      </button>
    </>
  );
}
