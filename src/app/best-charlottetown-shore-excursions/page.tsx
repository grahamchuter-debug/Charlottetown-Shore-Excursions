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
import { excursions } from "@/lib/excursions";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-charlottetown-shore-excursions";

const faqs = [
  {
    question: "What is the best shore excursion in Charlottetown, Prince Edward Island?",
    answer:
      "For first-time visitors, Anne of Green Gables delivers the iconic PEI experience when you have six or more hours ashore. Downtown walking and Confederation tours suit shorter port calls.",
  },
  {
    question: "Can I do Green Gables and downtown in one port day?",
    answer:
      "Yes on eight-hour calls when booked as a combined tour or with careful independent timing. Four-hour calls should choose one or stay downtown.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Charlottetown Shore Excursions — Prince Edward Island",
  description:
    "Ranked shore excursions for cruise passengers in Charlottetown, Prince Edward Island — return-to-ship confidence, port timing, and seasonal picks.",
  path,
});

export default function BestExcursionsPage() {
  const ranked = [...excursions].sort((a, b) => {
    const order = { High: 0, Moderate: 1, Tight: 2 };
    return order[a.returnConfidence] - order[b.returnConfidence];
  });

  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Charlottetown Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Charlottetown Shore Excursions" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Charlottetown Shore Excursions" },
          ]}
        />
        <PageHero
          eyebrow="Excursion guide"
          title="Best Charlottetown shore excursions"
          subtitle="Independent rankings for cruise passengers — matched to port time, season, and return-to-ship confidence on Prince Edward Island."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="How we rank excursions">
            <p>
              Charlottetown rewards both walkable downtown days and short rural
              drives to Cavendish and the north shore. We prioritise
              return-to-ship confidence, honest driving-time expectations, and
              fit with typical Canada & New England port hours.
            </p>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">
              Ranked by return-to-ship confidence
            </h2>
            <ol className="mt-6 space-y-4">
              {ranked.map((e, i) => (
                <li
                  key={e.slug}
                  className="rounded-xl border border-slate-200 bg-white p-5"
                >
                  <p className="text-sm font-medium text-slate-500">#{i + 1}</p>
                  <Link
                    href={e.path}
                    className="text-lg font-semibold text-blue-800 hover:underline"
                  >
                    {e.shortTitle}
                  </Link>
                  <p className="mt-2 text-slate-700">{e.summary}</p>
                  <p className="mt-2 text-sm text-slate-500">
                    {e.duration} · Return confidence: {e.returnConfidence}
                  </p>
                </li>
              ))}
            </ol>
          </section>

          <GuideSection title="Short port calls (4–5 hours)">
            <p>
              Choose{" "}
              <Link href="/charlottetown-walking-tour" className="text-blue-800 hover:underline">
                downtown walking tours
              </Link>
              ,{" "}
              <Link href="/historic-confederation-tour" className="text-blue-800 hover:underline">
                Confederation heritage
              </Link>
              , or a{" "}
              <Link href="/lobster-experience-tour" className="text-blue-800 hover:underline">
                lobster lunch
              </Link>
              . Skip Green Gables unless your tour guarantees early return.
            </p>
          </GuideSection>

          <GuideSection title="Full port days (8+ hours)">
            <p>
              <Link href="/best-of-prince-edward-island-tour" className="text-blue-800 hover:underline">
                Best-of-PEI tours
              </Link>{" "}
              and{" "}
              <Link href="/cavendish-north-shore-tour" className="text-blue-800 hover:underline">
                Cavendish north shore loops
              </Link>{" "}
              deliver the island overview many passengers want — confirm lunch and
              driving time when you enquire.
            </p>
          </GuideSection>

          <ExcursionLinks />
          <ReturnToShipBlock />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Things to do from a cruise ship", href: "/things-to-do-in-charlottetown-from-a-cruise-ship" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
