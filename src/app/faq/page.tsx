import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/faq";

const faqs = [
  {
    question: "Where do cruise ships dock in Charlottetown, Prince Edward Island?",
    answer:
      "At the Charlottetown waterfront near Peake's Wharf and Confederation Landing, with walking access to Victoria Row and the historic core for many berths.",
  },
  {
    question: "Can I book excursions on this website?",
    answer:
      "No — this site does not take online bookings or confirmations. Email us via the enquire page and we will recommend options matched to your ship schedule. Enquiry-only.",
  },
  {
    question: "How far is Anne of Green Gables from the cruise port?",
    answer:
      "About 35 km — typically 40–50 minutes by coach each way. Allow at least six hours ashore for a comfortable Green Gables tour.",
  },
  {
    question: "How much buffer should I leave before all-aboard?",
    answer:
      "Build at least 45–60 minutes beyond your tour's stated return time, especially for rural drives and summer traffic on PEI roads.",
  },
  {
    question: "What is the best excursion for first-time visitors?",
    answer:
      "Anne of Green Gables for literary heritage and island scenery, or a downtown walking tour covering Confederation history — depending on hours ashore.",
  },
  {
    question: "When is the best time to visit Charlottetown on a cruise?",
    answer:
      "June through September matches most Canada & New England schedules. July and August offer warmest beach weather; May and September are quieter.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQ — Charlottetown Shore Excursions, Prince Edward Island",
  description:
    "Frequently asked questions about Charlottetown, Prince Edward Island cruise port visits, shore excursions, timing, and booking enquiries.",
  path,
});

export default function FAQPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({ title: "FAQ", description: metadata.description as string, path }),
          breadcrumbSchema([{ name: "Home", href: "/" }, { name: "FAQ" }]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "FAQ" }]} />
        <PageHero
          eyebrow="Help centre"
          title="Frequently asked questions"
          subtitle="Charlottetown, Prince Edward Island cruise port and shore excursion answers for cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Geography">
            <p>
              This website is exclusively for{" "}
              <strong>Charlottetown, Prince Edward Island</strong>. PEI is
              Canada&apos;s smallest province — connected to the mainland by the
              Confederation Bridge and reached by cruise ships calling at the
              capital&apos;s waterfront.
            </p>
          </GuideSection>

          <FAQSection faqs={faqs} />
          <ReturnToShipBlock />
          <GuideRelatedLinks
            guides={[
              { label: "Port guide", href: "/charlottetown-cruise-port-guide" },
              { label: "Cruise planner", href: "/cruise-planner" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
