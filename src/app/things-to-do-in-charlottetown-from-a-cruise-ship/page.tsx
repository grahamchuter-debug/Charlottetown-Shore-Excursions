import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/things-to-do-in-charlottetown-from-a-cruise-ship";

const faqs = [
  {
    question: "What can I do in Charlottetown without booking an excursion?",
    answer:
      "Walk Victoria Row, explore Peake's Wharf, visit Confederation Centre of the Arts, and photograph Province House — all within minutes of the cruise terminal.",
  },
  {
    question: "Is Anne of Green Gables worth it on a cruise port day?",
    answer:
      "Yes for most first-time PEI visitors with six or more hours ashore. Allow 40–50 minutes driving each way plus 60–90 minutes at Green Gables Heritage Place.",
  },
  {
    question: "What is unique to Prince Edward Island?",
    answer:
      "Literary heritage at Green Gables, red sandstone cliffs, classic lighthouses, fresh lobster, and Confederation history — a combination few cruise ports match.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Things To Do In Charlottetown From A Cruise Ship",
  description:
    "Things to do in Charlottetown, Prince Edward Island from a cruise ship — downtown walks, Anne of Green Gables, beaches, lighthouses, lobster, and Confederation sites.",
  path,
});

export default function ThingsToDoPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Things To Do In Charlottetown From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Things To Do From A Cruise Ship" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Things To Do From A Cruise Ship" },
          ]}
        />
        <PageHero
          eyebrow="Port day ideas"
          title="Things to do in Charlottetown from a cruise ship"
          subtitle="Downtown walks, Anne of Green Gables, north shore beaches, lighthouses, lobster lunches, and Confederation heritage — matched to your hours ashore."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Walkable from the cruise terminal">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <strong>Victoria Row</strong> — cafés, shops, and Victorian streetscape
              </li>
              <li>
                <strong>Peake&apos;s Wharf</strong> — harbour boardwalk and waterfront dining
              </li>
              <li>
                <strong>Province House area</strong> — Confederation birthplace interpretation
              </li>
              <li>
                <strong>Confederation Centre of the Arts</strong> — exhibits and seasonal theatre
              </li>
            </ul>
            <p className="mt-3">
              See{" "}
              <Link href="/walking-charlottetown-from-cruise-port" className="text-blue-800 hover:underline">
                walking from the cruise port
              </Link>{" "}
              for timing and route detail.
            </p>
          </GuideSection>

          <GuideSection title="Half-day coach excursions">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/anne-of-green-gables-tour" className="text-blue-800 hover:underline">
                  Anne of Green Gables tour
                </Link>{" "}
                — Green Gables Heritage Place and Cavendish countryside
              </li>
              <li>
                <Link href="/pei-lighthouse-tour" className="text-blue-800 hover:underline">
                  PEI lighthouse tour
                </Link>{" "}
                — coastal icons and harbour villages
              </li>
              <li>
                <Link href="/lobster-experience-tour" className="text-blue-800 hover:underline">
                  Lobster experience
                </Link>{" "}
                — fresh Atlantic seafood near the harbour
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Full-day options">
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <Link href="/cavendish-north-shore-tour" className="text-blue-800 hover:underline">
                  Cavendish & north shore
                </Link>{" "}
                — beaches, dunes, and Green Gables country
              </li>
              <li>
                <Link href="/best-of-prince-edward-island-tour" className="text-blue-800 hover:underline">
                  Best of PEI
                </Link>{" "}
                — island sampler for eight-hour port calls
              </li>
            </ul>
          </GuideSection>

          <GuideSection title="Photography and scenery">
            <p>
              Red sandstone cliffs, white sand beaches, farm lanes, and classic
              lighthouses define PEI&apos;s visual identity. The{" "}
              <Link href="/prince-edward-island-guide" className="text-blue-800 hover:underline">
                Prince Edward Island guide
              </Link>{" "}
              covers the best coastal lookouts and seasonal light.
            </p>
          </GuideSection>

          <ExcursionLinks />
          <ReturnToShipBlock />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Charlottetown", href: "/one-day-in-charlottetown-from-a-cruise-ship" },
              { label: "Best excursions", href: "/best-charlottetown-shore-excursions" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
