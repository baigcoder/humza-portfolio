import { ChevronDown } from "lucide-react";
import SectionLabel from "@/components/layout/SectionLabel";
import { MetricsBentoSection } from "@/components/sections/MetricsBentoSection";
import JournalSection from "@/components/sections/JournalSection";
import GallerySection from "@/components/sections/GallerySection";
import FaqSection from "@/components/sections/FaqSection";

const resources = [
  {
    title: "Financial scenario tools",
    description: "Explore working capital, tax, and lease accounting scenarios.",
    content: <MetricsBentoSection />,
  },
  {
    title: "Finance journal",
    description: "Notes on reporting, governance, tax, and financial planning.",
    content: <JournalSection />,
  },
  {
    title: "Institutional engagement",
    description: "Background on policy dialogue and wider industry participation.",
    content: <GallerySection />,
  },
  {
    title: "Advisory questions",
    description: "Engagement models, process, and common client questions.",
    content: <FaqSection />,
  },
];

export default function ResourcesSection() {
  return (
    <section
      id="resources"
      className="relative px-4 py-20 sm:px-8 md:px-14 md:py-28 bg-[#080807] section-divider"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionLabel index="11" label="Resources" />
        <div className="mb-9 max-w-2xl">
          <h2 className="section-title text-3xl font-bold text-white">
            More to explore, <span className="font-serif italic font-normal text-[#C6956C]">when you need it.</span>
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-white/60 sm:text-[15px]">
            Practical tools, technical notes, and additional background for finance leaders.
          </p>
        </div>

        <div className="divide-y divide-white/[0.08] border-y border-white/[0.08]">
          {resources.map((resource) => (
            <details key={resource.title} className="group">
              <summary className="flex cursor-pointer list-none items-center gap-5 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
                <span className="min-w-0 flex-1">
                  <span className="block text-base font-semibold text-white transition-colors group-open:text-[#E4B68F] sm:text-lg">
                    {resource.title}
                  </span>
                  <span className="mt-1 block text-xs leading-relaxed text-white/50 sm:text-sm">
                    {resource.description}
                  </span>
                </span>
                <ChevronDown
                  aria-hidden="true"
                  className="h-5 w-5 shrink-0 text-[#C6956C] transition-transform duration-200 group-open:rotate-180"
                />
              </summary>
              <div className="-mx-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#050505] sm:-mx-6">
                {resource.content}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
