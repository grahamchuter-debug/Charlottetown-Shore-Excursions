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

const path = "/cavendish-from-charlottetown";

const faqs = [
  {
    question: "How long does it take to drive from Charlottetown to Cavendish?",
    answer:
      "Roughly 40–50 minutes by coach on typical cruise tour routes — about 35 km northwest through rural PEI.",
  },
  {
    question: "What is there to do in Cavendish besides Green Gables?",
    answer:
      "North shore beaches, dune walks in the national park, Avonlea Village, and coastal lookouts — many tours combine multiple stops.",
  },
  {
    question: "Is Cavendish crowded in summer?",
    answer:
      "July and August are busiest when cruise ships and holiday traffic overlap. Morning tour departures often beat peak crowds.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Cavendish From Charlottetown — Driving Time & Cruise Planning",
  description:
    "How to reach Cavendish and Green Gables from Charlottetown cruise port — driving time, beaches, national park, tour options, and return-to-ship timing.",
  path,
});

export default function CavendishGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Cavendish From Charlottetown",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cavendish From Charlottetown" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Cavendish From Charlottetown" },
          ]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Cavendish from Charlottetown"
          subtitle="Driving time, Green Gables, north shore beaches, and how cruise passengers fit Cavendish into a Charlottetown port day."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Cavendish is the gateway to Green Gables and PEI's most famous beaches — budget 40–50 minutes each way from the cruise terminal."
          />

          <GuideSection title="Driving time and routing">
            <p>
              Cavendish lies roughly 35 km northwest of Charlottetown&apos;s cruise
              terminal via Route 2 and north shore roads. Coach transfers on organised
              tours take 40–50 minutes depending on traffic — longer in peak July
              and August. Independent taxi round-trips are possible but tours
              typically offer better value and schedule coordination.
            </p>
          </GuideSection>

          <GuideSection title="Green Gables Heritage Place">
            <p>
              The anchor attraction in Cavendish — Lucy Maud Montgomery&apos;s
              literary farmhouse and woodland trails. See our{" "}
              <Link href="/anne-of-green-gables-guide" className="text-blue-800 hover:underline">
                Anne of Green Gables guide
              </Link>{" "}
              for site detail and family tips.
            </p>
          </GuideSection>

          <GuideSection title="North shore beaches">
            <p>
              Brackley Beach, Cavendish Beach, and dune boardwalks in Prince Edward
              Island National Park lie minutes from Green Gables. Combined tours
              often include 45–90 minutes of beach time when weather cooperates.
            </p>
          </GuideSection>

          <GuideSection title="Tour options from the cruise port">
            <p>
              Dedicated{" "}
              <Link href="/anne-of-green-gables-tour" className="text-blue-800 hover:underline">
                Anne of Green Gables tours
              </Link>
              ,{" "}
              <Link href="/cavendish-north-shore-tour" className="text-blue-800 hover:underline">
                Cavendish north shore loops
              </Link>
              , and full-day{" "}
              <Link href="/best-of-prince-edward-island-tour" className="text-blue-800 hover:underline">
                best-of-PEI products
              </Link>{" "}
              all route through Cavendish. Match product length to your hours ashore.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[
              { label: "Cavendish north shore tour", href: "/cavendish-north-shore-tour" },
            ]}
            guides={[
              { label: "Anne of Green Gables guide", href: "/anne-of-green-gables-guide" },
            ]}
          />
          <NeedHelpCTA excursion="cavendish-north-shore-tour" />
        </div>
      </div>
    </>
  );
}
