import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePassengerSnapshot } from "@/components/CruisePassengerSnapshot";
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

const path = "/charlottetown-cruise-port-guide";

const faqs = [
  {
    question: "Where do cruise ships dock in Charlottetown, Prince Edward Island?",
    answer:
      "Cruise ships typically berth at the Charlottetown waterfront near Peake's Wharf and Confederation Landing — placing passengers within walking distance of Victoria Row and the historic core.",
  },
  {
    question: "Can I walk to downtown from the Charlottetown cruise terminal?",
    answer:
      "Yes — Victoria Row, Province House, and the harbour boardwalk are often 5–15 minutes on foot. Green Gables and north shore beaches require a coach or taxi.",
  },
  {
    question: "What currency is used in Charlottetown?",
    answer:
      "Canadian dollars (CAD). Cards are widely accepted; carry cash for tips and small vendors.",
  },
  {
    question: "How far is Green Gables from the cruise port?",
    answer:
      "About 35 km — roughly 40–50 minutes by road. Plan a dedicated half-day tour rather than trying to fit it into a short downtown visit.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Charlottetown Cruise Port Guide — Prince Edward Island",
  description:
    "Complete guide to the Charlottetown, Prince Edward Island cruise port — where ships dock, walking distances, taxis, weather, currency, and best excursions.",
  path,
});

export default function PortGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Charlottetown Cruise Port Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Charlottetown Cruise Port Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Charlottetown Cruise Port Guide" },
          ]}
        />
        <PageHero
          eyebrow="Port guide · Prince Edward Island"
          title="Charlottetown cruise port guide"
          subtitle="Where ships dock, walking distances to downtown, taxis, weather, and how to plan shore excursions on PEI."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot intro="Charlottetown is one of Atlantic Canada's most walkable cruise ports — but Anne of Green Gables, Cavendish beaches, and lighthouse coasts still require road time. Know your berth and hours ashore before booking." />

          <GuideSection title="Where ships dock">
            <p>
              Cruise vessels call at the <strong>Charlottetown waterfront</strong>{" "}
              near Peake&apos;s Wharf and Confederation Landing — placing passengers
              within walking distance of Victoria Row, the harbour boardwalk, and
              Province House National Historic Site. The approach through the
              Northumberland Strait offers deck views of red sandstone bluffs and
              farmland rolling to the sea.
            </p>
            <p>
              You are in <strong>Charlottetown, Prince Edward Island</strong> — the
              provincial capital and birthplace of Canadian Confederation. See our{" "}
              <Link href="/confederation-history-guide" className="text-blue-800 hover:underline">
                Confederation history guide
              </Link>{" "}
              for context on the 1864 conference.
            </p>
          </GuideSection>

          <GuideSection title="Walking distance to downtown">
            <p>
              Victoria Row — a pedestrian-friendly street of cafés, boutiques, and
              heritage façades — and Peake&apos;s Wharf lie a short walk from most
              cruise berths. Province House and Confederation Centre of the Arts
              are within the historic core.
            </p>
            <p>
              Green Gables in Cavendish is roughly 35 km northwest — not walkable on
              a port day. See{" "}
              <Link href="/walking-charlottetown-from-cruise-port" className="text-blue-800 hover:underline">
                walking from the cruise port
              </Link>{" "}
              for a map-style downtown route.
            </p>
          </GuideSection>

          <GuideSection title="Taxis and transfers">
            <p>
              Taxis queue at the cruise terminal on call days. Fares to Cavendish or
              north shore beaches are metered — round-trip taxi for Green Gables is
              possible but organised tours often provide better value and
              return-to-ship coordination.
            </p>
            <p>
              Ride-hailing availability varies. Confirm options before you leave the
              ship if you plan independent travel beyond downtown.
            </p>
          </GuideSection>

          <GuideSection title="Weather and what to expect">
            <p>
              PEI summers are mild and breezy — July and August are warmest but a
              jacket remains sensible for harbour walks and coastal tours. Fog and
              showers arrive quickly; pack a compact rain layer.
            </p>
            <p>
              See our{" "}
              <Link href="/best-time-to-visit-charlottetown" className="text-blue-800 hover:underline">
                best time to visit
              </Link>{" "}
              guide for month-by-month conditions.
            </p>
          </GuideSection>

          <GuideSection title="Popular excursions from this port">
            <p>
              Anne of Green Gables tours, Cavendish north shore loops, lighthouse
              drives, and downtown walking tours dominate Charlottetown cruise
              schedules. Match your choice to hours ashore using the{" "}
              <Link href="/cruise-planner" className="text-blue-800 hover:underline">
                cruise planner
              </Link>
              .
            </p>
          </GuideSection>

          <ExcursionLinks title="Excursions from Charlottetown" />
          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "One day in Charlottetown", href: "/one-day-in-charlottetown-from-a-cruise-ship" },
              { label: "Anne of Green Gables guide", href: "/anne-of-green-gables-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
