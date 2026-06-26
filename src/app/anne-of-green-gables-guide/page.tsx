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

const path = "/anne-of-green-gables-guide";

const faqs = [
  {
    question: "What is Green Gables Heritage Place?",
    answer:
      "A Parks Canada site preserving the farmhouse and landscapes that inspired Lucy Maud Montgomery's Anne of Green Gables novels — located in Cavendish, northwest of Charlottetown.",
  },
  {
    question: "Can cruise passengers visit Green Gables on a port day?",
    answer:
      "Yes with at least six hours ashore. Transfer time from Charlottetown cruise terminal is roughly 40–50 minutes each way by coach.",
  },
  {
    question: "Is Green Gables good for families?",
    answer:
      "Excellent — children familiar with Anne Shirley enjoy the farmhouse, trails, and interpretive exhibits. Supervise young children on woodland paths.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Anne of Green Gables Guide — Charlottetown Cruise Passengers",
  description:
    "Anne of Green Gables guide for cruise passengers — Lucy Maud Montgomery, Green Gables Heritage Place, travel time from Charlottetown, photography, families, and tour planning.",
  path,
});

export default function AnneGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Anne of Green Gables Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Anne of Green Gables Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Anne of Green Gables Guide" },
          ]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Anne of Green Gables guide"
          subtitle="Lucy Maud Montgomery, Green Gables Heritage Place, cruise suitability, travel time, photography, and family planning from Charlottetown."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Green Gables is the reason many passengers choose a Charlottetown cruise call — plan for 40–50 minutes driving each way and at least 60–90 minutes on site."
            fields={{
              timeInPort: "6–8 hours recommended",
              bestFor: "Literature, families, Cavendish scenery",
            }}
          />

          <GuideSection title="Lucy Maud Montgomery and the story">
            <p>
              Lucy Maud Montgomery published <em>Anne of Green Gables</em> in 1908,
              drawing on the landscapes and communities around Cavendish where she
              grew up. Anne Shirley — the red-haired orphan with an irrepressible
              imagination — became a global literary icon and put Prince Edward
              Island on the map for generations of readers.
            </p>
          </GuideSection>

          <GuideSection title="Green Gables Heritage Place">
            <p>
              Parks Canada operates the preserved green-gabled farmhouse, barnyard,
              and woodland trails including the Haunted Wood and Lovers Lane.
              Interpretive exhibits connect fiction to island life in the early
              twentieth century. Allow 60–90 minutes for a thorough visit.
            </p>
          </GuideSection>

          <GuideSection title="Travel time from Charlottetown cruise port">
            <p>
              Green Gables sits roughly 35 km northwest of the cruise terminal —
              about 40–50 minutes by coach through rural PEI. This is not feasible
              on four-hour port calls. See{" "}
              <Link href="/cavendish-from-charlottetown" className="text-blue-800 hover:underline">
                Cavendish from Charlottetown
              </Link>{" "}
              for routing detail.
            </p>
          </GuideSection>

          <GuideSection title="Cruise suitability">
            <p>
              Dedicated Anne tours are among the most popular Charlottetown shore
              excursions. Operators schedule around cruise all-aboard times with
              high return-to-ship confidence on standard products. Combining Green
              Gables with a full downtown walking tour on the same day requires
              eight or more hours ashore.
            </p>
          </GuideSection>

          <GuideSection title="Photography">
            <p>
              The farmhouse, red-clay lanes, and Cavendish farmland offer classic
              PEI imagery. Morning light before tour-bus peaks suits exterior shots.
              Woodland trails are shaded — bring a versatile lens for farm and forest
              scenes.
            </p>
          </GuideSection>

          <GuideSection title="Families">
            <p>
              Children who know the stories respond enthusiastically; newcomers still
              enjoy the farmhouse and trails with guide interpretation. Pair with a
              north shore beach stop on combined tours for a balanced family day.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[
              { label: "Anne of Green Gables tour", href: "/anne-of-green-gables-tour" },
            ]}
            guides={[
              { label: "Cavendish from Charlottetown", href: "/cavendish-from-charlottetown" },
              { label: "Prince Edward Island guide", href: "/prince-edward-island-guide" },
            ]}
          />
          <NeedHelpCTA excursion="anne-of-green-gables-tour" />
        </div>
      </div>
    </>
  );
}
