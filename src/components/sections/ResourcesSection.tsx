import SectionLabel from "@/components/layout/SectionLabel";
import ResourceDisclosure from "@/components/sections/ResourceDisclosure";

const resources = [
  {
    title: "Financial scenario tools",
    description: "Explore working capital, tax, and lease accounting scenarios.",
    resource: "tools",
  },
  {
    title: "Finance journal",
    description: "Notes on reporting, governance, tax, and financial planning.",
    resource: "journal",
  },
  {
    title: "Institutional engagement",
    description: "Background on policy dialogue and wider industry participation.",
    resource: "gallery",
  },
  {
    title: "Advisory questions",
    description: "Engagement models, process, and common client questions.",
    resource: "questions",
  },
] as const;

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
            <ResourceDisclosure key={resource.title} {...resource} />
          ))}
        </div>
      </div>
    </section>
  );
}
