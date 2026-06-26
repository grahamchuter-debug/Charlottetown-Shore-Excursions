import type { Metadata } from "next";
import Link from "next/link";
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

const path = "/charlottetown-cruise-ship-schedule";

const faqs = [
  {
    question: "Where can I find my Charlottetown cruise ship schedule?",
    answer:
      "Your cruise line app and daily planner are authoritative. This hub helps you plan excursions around typical Canada & New England call patterns in Charlottetown, Prince Edward Island.",
  },
  {
    question: "How long do ships stay in Charlottetown?",
    answer:
      "Most calls allow six to nine hours ashore. Some itineraries include late departures — always confirm all-aboard time on your sailing.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Charlottetown Cruise Ship Schedule — Prince Edward Island",
  description:
    "Charlottetown, Prince Edward Island cruise ship schedule planning hub — port timing, excursion fit, and how to match tours to your ship's call.",
  path,
});

export default function SchedulePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Charlottetown Cruise Ship Schedule",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cruise Ship Schedule" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Cruise Ship Schedule" },
          ]}
        />
        <PageHero
          eyebrow="Planning hub"
          title="Charlottetown cruise ship schedule"
          subtitle="Plan shore excursions around your ship's call in Charlottetown, Prince Edward Island — timing, buffers, and seasonal products."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Using this schedule hub">
            <p>
              Live ship schedules change frequently. Use your cruise line&apos;s official
              tools for arrival and departure times. This page helps you translate
              your hours ashore into realistic excursion choices.
            </p>
          </GuideSection>

          <GuideSection title="Typical port timing">
            <ul className="list-disc pl-5 space-y-2">
              <li><strong>4 hours:</strong> Downtown walking, Victoria Row, Confederation sites — avoid Green Gables</li>
              <li><strong>6 hours:</strong> Anne of Green Gables, lighthouse tour, or Cavendish loop</li>
              <li><strong>8+ hours:</strong> Best-of-PEI, north shore combos, or downtown plus rural afternoon</li>
            </ul>
            <p className="mt-4">
              Use the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">cruise planner</Link>{" "}
              and{" "}
              <Link href="/one-day-in-charlottetown-from-a-cruise-ship" className="text-blue-800 hover:underline">one-day itineraries</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Canada & New England season">
            <p>
              Most Charlottetown calls occur May through October. Match beach and
              lobster expectations to your visit month via{" "}
              <Link href="/best-time-to-visit-charlottetown" className="text-blue-800 hover:underline">
                best time to visit
              </Link>
              .
            </p>
          </GuideSection>

          <ReturnToShipBlock />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Port guide", href: "/charlottetown-cruise-port-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
