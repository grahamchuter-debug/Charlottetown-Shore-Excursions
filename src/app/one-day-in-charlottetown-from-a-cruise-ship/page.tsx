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

const path = "/one-day-in-charlottetown-from-a-cruise-ship";

const faqs = [
  {
    question: "How much time do I need in Charlottetown, Prince Edward Island?",
    answer:
      "Four hours suits downtown and Victoria Row. Six hours opens Green Gables or a lighthouse tour. Eight hours allows best-of-PEI or Cavendish north shore combos.",
  },
  {
    question: "Should I book an excursion or explore independently?",
    answer:
      "Downtown is walkable from most berths. Green Gables, Cavendish beaches, and lighthouse coasts require transport — organised tours simplify return timing.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "One Day In Charlottetown From A Cruise Ship — Itinerary Guide",
  description:
    "Sample itineraries for 4, 6, and 8 hours ashore in Charlottetown, Prince Edward Island — walking, taxis, excursions, food, photography, and return-to-ship timing.",
  path,
});

export default function OneDayPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "One Day In Charlottetown From A Cruise Ship",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "One Day In Charlottetown" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "One Day In Charlottetown" },
          ]}
        />
        <PageHero
          eyebrow="Itinerary guide"
          title="One day in Charlottetown from a cruise ship"
          subtitle="Practical half-day and full-day plans for cruise passengers — 4, 6, and 8 hours ashore on Prince Edward Island."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot intro="Always subtract 45–60 minutes from your available time for all-aboard buffer. Summer traffic on rural PEI roads can add delay." />

          <GuideSection title="4 hours ashore">
            <p><strong>Best for:</strong> Walkable downtown, Confederation history, harbour photography.</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>0:00–0:15 — Clear customs, exit to Peake&apos;s Wharf / Victoria Row</li>
              <li>0:15–1:15 — Victoria Row shops, Province House exterior, harbour boardwalk</li>
              <li>1:15–1:45 — Lunch at waterfront café or lobster roll</li>
              <li>1:45–2:30 — Confederation Centre exhibits or Founders&apos; Hall</li>
              <li>2:30–3:00 — Last-minute shopping, return walk to terminal</li>
              <li>3:00+ — Onboard buffer before all-aboard</li>
            </ul>
            <p className="mt-3">
              <strong>Walking option:</strong> Self-guided — see{" "}
              <Link href="/walking-charlottetown-from-cruise-port" className="text-blue-800 hover:underline">walking from port</Link>.
              <br />
              <strong>Taxi/excursion:</strong> Skip Green Gables and full-island tours.
            </p>
          </GuideSection>

          <GuideSection title="6 hours ashore">
            <p><strong>Best for:</strong> Anne of Green Gables or lighthouse tour plus downtown.</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>0:00–0:30 — Disembark, board pre-booked coach to Cavendish</li>
              <li>0:30–2:30 — Green Gables Heritage Place and Haunted Wood trails</li>
              <li>2:30–3:30 — Return drive, quick Victoria Row stop if time allows</li>
              <li>3:30–4:15 — Harbour photos or Confederation Centre</li>
              <li>4:15–5:00 — Return to terminal with buffer</li>
            </ul>
            <p className="mt-3">
              <strong>Excursion picks:</strong>{" "}
              <Link href="/anne-of-green-gables-tour" className="text-blue-800 hover:underline">Anne of Green Gables tour</Link>,{" "}
              <Link href="/pei-lighthouse-tour" className="text-blue-800 hover:underline">PEI lighthouse tour</Link>.
            </p>
          </GuideSection>

          <GuideSection title="8 hours ashore">
            <p><strong>Best for:</strong> Cavendish north shore combo, best-of-PEI, or downtown plus rural afternoon.</p>
            <ul className="list-disc pl-5 space-y-2 mt-3">
              <li>0:00–4:00 — Organised Cavendish north shore OR best-of-PEI tour</li>
              <li>4:00–5:30 — Downtown lunch, Victoria Row, Province House photos</li>
              <li>5:30–6:30 — Lobster experience or harbour walk</li>
              <li>6:30–7:15 — Return to ship with generous buffer</li>
            </ul>
            <p className="mt-3">
              <strong>Excursion picks:</strong>{" "}
              <Link href="/cavendish-north-shore-tour" className="text-blue-800 hover:underline">Cavendish north shore</Link>,{" "}
              <Link href="/best-of-prince-edward-island-tour" className="text-blue-800 hover:underline">best of PEI</Link>.
            </p>
          </GuideSection>

          <GuideSection title="Food and photography">
            <p>
              Fresh lobster, mussels, and island potatoes appear on every menu.
              Victoria Row and Peake&apos;s Wharf offer harbour-side dining without
              leaving downtown. Red cliffs and lighthouses reward passengers who
              book coastal tours — see the{" "}
              <Link href="/prince-edward-island-guide" className="text-blue-800 hover:underline">
                PEI guide
              </Link>{" "}
              for scenic highlights.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-charlottetown-from-a-cruise-ship" },
              { label: "Cruise planner", href: "/cruise-planner" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
