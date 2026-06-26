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

const path = "/prince-edward-island-lighthouses";

const faqs = [
  {
    question: "How many lighthouses are on Prince Edward Island?",
    answer:
      "PEI has dozens of lighthouses and range lights — many accessible to visitors, with several featured on shore excursions from Charlottetown.",
  },
  {
    question: "Which PEI lighthouses are closest to Charlottetown cruise port?",
    answer:
      "Covehead Harbour lighthouse in the national park and Point Prim on the south shore are common tour inclusions within 30–45 minutes of the terminal.",
  },
  {
    question: "Can you climb PEI lighthouses?",
    answer:
      "Some sites allow tower climbs in season; others are exterior viewing only. Confirm access with your tour operator.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Prince Edward Island Lighthouses — Cruise Passenger Guide",
  description:
    "PEI lighthouse guide for cruise passengers — Point Prim, Covehead, Victoria-by-the-Sea, coastal drives from Charlottetown, photography, and tour options.",
  path,
});

export default function LighthousesGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Prince Edward Island Lighthouses",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "PEI Lighthouses" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "PEI Lighthouses" },
          ]}
        />
        <PageHero
          eyebrow="Destination guide"
          title="Prince Edward Island lighthouses"
          subtitle="Classic maritime sentinels, coastal boardwalks, and lighthouse tours within reach of Charlottetown cruise port."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="PEI lighthouses pair naturally with half-day coastal drives — predictable timing and strong return-to-ship confidence on organised tours."
          />

          <GuideSection title="Point Prim Lighthouse">
            <p>
              PEI&apos;s oldest lighthouse — a brick tower overlooking the
              Northumberland Strait on the south shore. The site includes a
              boardwalk and interpretive panels explaining how families kept the
              light through harsh winters. Common on lighthouse circuit tours from
              Charlottetown.
            </p>
          </GuideSection>

          <GuideSection title="Covehead Harbour">
            <p>
              A white wooden tower marking the entrance to Covehead Bay within
              Prince Edward Island National Park — often combined with Cavendish
              and Green Gables routing on north shore tours.
            </p>
          </GuideSection>

          <GuideSection title="Victoria-by-the-Sea">
            <p>
              A tiny arts village where a classic lighthouse overlooks a narrow
              tidal channel. Galleries, a chocolate shop, and harbour walks reward
              passengers who enjoy village-scale coastal charm.
            </p>
          </GuideSection>

          <GuideSection title="Photography tips">
            <p>
              Lighthouses photograph best in early morning or late afternoon light.
              Fog adds atmosphere but may obscure distant headlands. Bring a wind
              layer — every PEI lighthouse is fully exposed to Gulf and strait
              breezes.
            </p>
          </GuideSection>

          <GuideSection title="Lighthouse tours from the cruise port">
            <p>
              The{" "}
              <Link href="/pei-lighthouse-tour" className="text-blue-800 hover:underline">
                PEI lighthouse tour
              </Link>{" "}
              visits multiple sites in a half-day format. Lighthouse stops also
              appear on{" "}
              <Link href="/prince-edward-island-scenic-drive" className="text-blue-800 hover:underline">
                scenic drive
              </Link>{" "}
              and north shore itineraries.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[
              { label: "PEI lighthouse tour", href: "/pei-lighthouse-tour" },
            ]}
            guides={[
              { label: "Prince Edward Island guide", href: "/prince-edward-island-guide" },
            ]}
          />
          <NeedHelpCTA excursion="pei-lighthouse-tour" />
        </div>
      </div>
    </>
  );
}
