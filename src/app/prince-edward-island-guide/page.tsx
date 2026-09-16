import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
import { FAQSection } from "@/components/FAQSection";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { GuideSection } from "@/components/GuideSection";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/prince-edward-island-guide";

const faqs = [
  {
    question: "What is Prince Edward Island known for?",
    answer:
      "Red sandstone cliffs, white sand beaches, classic lighthouses, Anne of Green Gables literary heritage, fresh seafood — especially lobster — and as the birthplace of Canadian Confederation.",
  },
  {
    question: "Can I see all of PEI on a cruise port day?",
    answer:
      "No — the island is larger than it looks on a map. Focus on Cavendish, the north shore, or Charlottetown downtown depending on your hours ashore.",
  },
  {
    question: "Is PEI good for beach days?",
    answer:
      "Yes in summer — north shore beaches like Brackley and Cavendish are popular. Water remains cool; many visitors wade rather than swim.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Prince Edward Island Guide — Broader PEI Context From Charlottetown",
  description:
    "Broader Prince Edward Island destination guide for cruise visitors — beaches, red cliffs, lighthouses, villages, and national park context beyond a single Cavendish or Anne tour.",
  path,
});

export default function PEIGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Prince Edward Island Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Prince Edward Island Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Prince Edward Island Guide" },
          ]}
        />
        <PageHero
          eyebrow="Pillar guide · Prince Edward Island"
          title="Prince Edward Island guide"
          subtitle="Beaches, red cliffs, lighthouses, seafood, villages, national park, Anne of Green Gables, and scenic drives — the essential PEI reference for cruise passengers."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="PEI packs extraordinary variety into a small island — match your port day to either downtown Charlottetown or a rural half-day loop, not both unless you have eight or more hours ashore."
          />

          <GuideSection title="Red sandstone cliffs and beaches">
            <p>
              PEI&apos;s north shore combines white sand dunes with dramatic red
              sandstone bluffs — especially striking in Prince Edward Island National
              Park. Brackley Beach, Cavendish Beach, and coastal lookouts deliver
              the postcard imagery cruise passengers expect.
            </p>
          </GuideSection>

          <GuideSection title="Lighthouses">
            <p>
              Dozens of lighthouses guard a coast of hidden reefs and shifting
              sandbars. Point Prim, Covehead Harbour, and Victoria-by-the-Sea appear
              on many tours from Charlottetown. See our{" "}
              <Link href="/prince-edward-island-lighthouses" className="text-blue-800 hover:underline">
                PEI lighthouses guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Seafood and lobster">
            <p>
              Atlantic lobster, mussels, and oysters define island dining. Harbour-side
              restaurants and seasonal lobster suppers offer cruise passengers a
              taste of PEI without a full-day commitment. The{" "}
              <Link href="/lobster-experience-tour" className="text-blue-800 hover:underline">
                lobster experience tour
              </Link>{" "}
              focuses on this culinary highlight.
            </p>
          </GuideSection>

          <GuideSection title="Villages and countryside">
            <p>
              Beyond Charlottetown, PEI unfolds as farm lanes, potato fields, dairy
              pastures, and fishing harbours where lobster boats still define the
              economy. Scenic drives reward passengers who have already explored the
              capital on foot.
            </p>
          </GuideSection>

          <GuideSection title="Prince Edward Island National Park">
            <p>
              The national park protects north shore dunes, marshes, and beaches
              between Cavendish and Dalvay. Green Gables Heritage Place sits within
              park boundaries — a natural pairing for{" "}
              <Link href="/cavendish-north-shore-tour" className="text-blue-800 hover:underline">
                Cavendish north shore tours
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Anne of Green Gables">
            <p>
              Lucy Maud Montgomery&apos;s literary landscapes draw readers worldwide.
              Green Gables Heritage Place in Cavendish is the anchor attraction — see
              our{" "}
              <Link href="/anne-of-green-gables-guide" className="text-blue-800 hover:underline">
                Anne of Green Gables guide
              </Link>{" "}
              for cruise-specific planning.
            </p>
          </GuideSection>

          <GuideSection title="Scenic drives">
            <p>
              The north shore drive, Central Coastal Drive, and quiet back roads
              through potato country offer flexible routing for photography and
              village stops. The{" "}
              <Link href="/prince-edward-island-scenic-drive" className="text-blue-800 hover:underline">
                PEI scenic drive excursion
              </Link>{" "}
              samples this landscape within range of the cruise port.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Anne of Green Gables guide", href: "/anne-of-green-gables-guide" },
              { label: "Cavendish from Charlottetown", href: "/cavendish-from-charlottetown" },
              { label: "Confederation history", href: "/confederation-history-guide" },
            ]}
            excursions={[
              { label: "Best of PEI tour", href: "/best-of-prince-edward-island-tour" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
