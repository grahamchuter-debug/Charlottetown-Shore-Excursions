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

const path = "/walking-charlottetown-from-cruise-port";

const faqs = [
  {
    question: "How long does it take to walk from the cruise terminal to Victoria Row?",
    answer:
      "Typically 5–10 minutes along the harbour boardwalk to Peake's Wharf and Victoria Row — one of the shortest terminal-to-downtown walks in Atlantic Canada.",
  },
  {
    question: "Is Charlottetown hilly?",
    answer:
      "The waterfront is relatively flat. Streets toward Province House involve gentle grades — manageable for most walkers.",
  },
  {
    question: "Can I walk to Green Gables from the cruise port?",
    answer:
      "No — Cavendish is 35 km away. Green Gables requires a coach tour or taxi.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Walking Charlottetown From The Cruise Port — Map-Style Guide",
  description:
    "Self-guided walking route from Charlottetown cruise port — waterfront, historic centre, Province House, Confederation Centre, shopping, restaurants, and walking times.",
  path,
});

export default function WalkingGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Walking Charlottetown From Cruise Port",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Walking From The Port" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Walking From The Port" },
          ]}
        />
        <PageHero
          eyebrow="Self-guided route"
          title="Walking Charlottetown from the cruise port"
          subtitle="Map-style route — waterfront, historic centre, Province House, Confederation Centre, shopping, restaurants, and realistic walking times."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Charlottetown is among the most walkable cruise ports in Canada — this route keeps you within 2 km of the terminal."
            fields={{
              timeInPort: "4+ hours for full loop",
              bestFor: "Self-guided downtown, Confederation sites",
              returnToShip: "Very high — you control timing",
            }}
          />

          <GuideSection title="Route overview">
            <p>
              <strong>Total distance:</strong> roughly 2–3 km loop ·{" "}
              <strong>Time:</strong> 2–3 hours at a relaxed pace ·{" "}
              <strong>Grade:</strong> easy with gentle inclines inland
            </p>
          </GuideSection>

          <GuideSection title="Stop 1 — Cruise terminal to Peake's Wharf (5–10 min)">
            <p>
              Exit the gangway to the waterfront boardwalk. Peake&apos;s Wharf
              offers harbour views, seasonal vendors, and the first photo
              opportunities of your port day. Confederation Landing Park anchors
              the eastern harbourfront.
            </p>
          </GuideSection>

          <GuideSection title="Stop 2 — Victoria Row (5 min from wharf)">
            <p>
              A pedestrian-friendly block of cafés, boutiques, and heritage
              storefronts. Allow 30–45 minutes for browsing, coffee, or an early
              lunch. Summer tables spill onto the street — a pleasant anchor for
              people-watching.
            </p>
          </GuideSection>

          <GuideSection title="Stop 3 — Province House area (10 min from Victoria Row)">
            <p>
              Walk toward Queen Square and Province House National Historic Site —
              the birthplace of Confederation. Exterior interpretation and grounds
              are accessible even when the building interior is closed. See our{" "}
              <Link href="/confederation-history-guide" className="text-blue-800 hover:underline">
                Confederation history guide
              </Link>
              .
            </p>
          </GuideSection>

          <GuideSection title="Stop 4 — Confederation Centre of the Arts (adjacent)">
            <p>
              Museum exhibits, art gallery, and seasonal theatre programming connect
              island culture to national history. Allow 45–60 minutes if you enter
              the exhibits; exterior architecture rewards a quick photo stop even
              if time is tight.
            </p>
          </GuideSection>

          <GuideSection title="Stop 5 — Great George Street and waterfront return (15–20 min)">
            <p>
              Loop back via Great George Street — heritage churches and Victorian
              streetscape — to the harbour boardwalk and terminal. Add Richmond
              Street shops if you have spare time before all-aboard.
            </p>
          </GuideSection>

          <GuideSection title="Restaurants and timing">
            <p>
              Waterfront dining clusters at Peake&apos;s Wharf and Victoria Row.
              Lobster rolls, mussels, and island chowder appear on most menus.
              Set a phone alarm 90 minutes before all-aboard to begin your return
              walk — the terminal is never far, but summer browsing eats time.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[
              { label: "Charlottetown walking tour", href: "/charlottetown-walking-tour" },
            ]}
            guides={[
              { label: "One day in Charlottetown", href: "/one-day-in-charlottetown-from-a-cruise-ship" },
            ]}
          />
          <NeedHelpCTA excursion="charlottetown-walking-tour" />
        </div>
      </div>
    </>
  );
}
