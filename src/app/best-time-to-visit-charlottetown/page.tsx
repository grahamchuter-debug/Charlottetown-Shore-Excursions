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
import { charlottetownMonthGuide } from "@/lib/seasonality";
import { breadcrumbSchema, faqSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/best-time-to-visit-charlottetown";

const faqs = [
  {
    question: "When is the best time to cruise to Charlottetown, Prince Edward Island?",
    answer:
      "Late May through September matches most Canada & New England schedules. July–August offer warmest beach weather and peak cruise traffic. June and September are quieter with pleasant conditions.",
  },
  {
    question: "Is Charlottetown cold in summer?",
    answer:
      "July highs can reach the mid-20s °C, but Gulf breezes make it feel cooler on harbour walks. Always pack layers and a rain jacket.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Best Time To Visit Charlottetown — Weather, Beaches & Lobster",
  description:
    "Month-by-month guide to visiting Charlottetown, Prince Edward Island — weather, wind, layers, beach season, lobster season, and cruise timing for passengers.",
  path,
});

export default function BestTimePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Best Time To Visit Charlottetown",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Best Time To Visit" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Best Time To Visit" },
          ]}
        />
        <PageHero
          eyebrow="Seasonal planning"
          title="Best time to visit Charlottetown, Prince Edward Island"
          subtitle="Month-by-month weather, wind, layering advice, beach season, lobster season, and cruise timing for PEI port calls."
        />

        <div className="mt-10 space-y-10">
          <GuideSection title="Season overview">
            <p>
              Canada & New England itineraries typically call at Charlottetown
              between late spring and early autumn. Each month trades off
              temperature, beach conditions, and crowd levels — July and August
              suit generalists who want warmest weather and full excursion menus.
            </p>
          </GuideSection>

          <section>
            <h2 className="text-2xl font-semibold text-slate-900">Month-by-month guide</h2>
            <div className="mt-6 overflow-x-auto">
              <table className="w-full min-w-[720px] text-sm border-collapse">
                <thead>
                  <tr className="border-b border-slate-200 bg-slate-50 text-left">
                    <th className="p-3 font-semibold">Month</th>
                    <th className="p-3 font-semibold">Typical temps</th>
                    <th className="p-3 font-semibold">Wind & fog</th>
                    <th className="p-3 font-semibold">Layers</th>
                    <th className="p-3 font-semibold">Beaches</th>
                    <th className="p-3 font-semibold">Lobster</th>
                    <th className="p-3 font-semibold">Cruise season</th>
                  </tr>
                </thead>
                <tbody>
                  {charlottetownMonthGuide.map((row) => (
                    <tr key={row.month} className="border-b border-slate-100">
                      <td className="p-3 font-medium">{row.month}</td>
                      <td className="p-3 text-slate-700">{row.temp}</td>
                      <td className="p-3 text-slate-700">{row.windFog}</td>
                      <td className="p-3 text-slate-700">{row.layers}</td>
                      <td className="p-3 text-slate-700">{row.beaches}</td>
                      <td className="p-3 text-slate-700">{row.lobster}</td>
                      <td className="p-3 text-slate-700">{row.cruiseSeason}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <GuideSection title="Beach season">
            <p>
              North shore beaches at Cavendish and Brackley are most rewarding June
              through August. Water temperatures remain cool — wading is more common
              than swimming. See{" "}
              <Link href="/cavendish-from-charlottetown" className="text-blue-800 hover:underline">
                Cavendish from Charlottetown
              </Link>{" "}
              for tour routing.
            </p>
          </GuideSection>

          <GuideSection title="Lobster season">
            <p>
              Spring and fall fisheries deliver peak fresh lobster; restaurants serve
              quality product throughout the cruise season. The{" "}
              <Link href="/lobster-experience-tour" className="text-blue-800 hover:underline">
                lobster experience tour
              </Link>{" "}
              focuses on this culinary highlight.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="Moderate" note="Summer peak season adds traffic on rural PEI roads — build buffer regardless of month." />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            guides={[
              { label: "Prince Edward Island guide", href: "/prince-edward-island-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
