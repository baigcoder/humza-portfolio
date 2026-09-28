"use client";

import { lazy, Suspense, useState } from "react";

const ScenarioTools = lazy(() =>
  import("@/components/sections/MetricsBentoSection").then((module) => ({
    default: module.MetricsBentoSection,
  }))
);
const FinanceJournal = lazy(() => import("@/components/sections/JournalSection"));
const InstitutionalGallery = lazy(() => import("@/components/sections/GallerySection"));
const AdvisoryQuestions = lazy(() => import("@/components/sections/FaqSection"));

const resourceComponents = {
  tools: ScenarioTools,
  journal: FinanceJournal,
  gallery: InstitutionalGallery,
  questions: AdvisoryQuestions,
};

type ResourceKey = keyof typeof resourceComponents;

interface ResourceDisclosureProps {
  title: string;
  description: string;
  resource: ResourceKey;
}

export default function ResourceDisclosure({
  title,
  description,
  resource,
}: ResourceDisclosureProps) {
  const [hasOpened, setHasOpened] = useState(false);
  const Content = resourceComponents[resource];

  return (
    <details
      className="group"
      onToggle={(event) => {
        if (event.currentTarget.open) setHasOpened(true);
      }}
    >
      <summary className="flex cursor-pointer list-none items-center gap-5 py-5 sm:py-6 [&::-webkit-details-marker]:hidden">
        <span className="min-w-0 flex-1">
          <span className="block text-base font-semibold text-white transition-colors group-open:text-[#E4B68F] sm:text-lg">
            {title}
          </span>
          <span className="mt-1 block text-xs leading-relaxed text-white/50 sm:text-sm">
            {description}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-white/[0.1] text-[#C6956C] transition-colors group-open:border-[#C6956C]/40 group-open:bg-[#C6956C]/[0.08]"
        >
          <span className="text-lg leading-none transition-transform group-open:rotate-45">+</span>
        </span>
      </summary>
      {hasOpened && (
        <div className="-mx-4 overflow-hidden rounded-xl border border-white/[0.08] bg-[#050505] sm:-mx-6">
          <Suspense
            fallback={
              <p role="status" className="px-6 py-10 text-center text-sm text-white/55">
                Loading {title.toLowerCase()}…
              </p>
            }
          >
            <Content />
          </Suspense>
        </div>
      )}
    </details>
  );
}
