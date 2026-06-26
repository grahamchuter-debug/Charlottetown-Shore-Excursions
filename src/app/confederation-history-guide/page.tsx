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

const path = "/confederation-history-guide";

const faqs = [
  {
    question: "Why is Charlottetown called the birthplace of Confederation?",
    answer:
      "Delegates met at Province House in September 1864 for a conference that expanded from a regional meeting into plans for a broader Canadian union — the foundation of modern Canada.",
  },
  {
    question: "Can I visit Province House on a cruise port day?",
    answer:
      "Exterior interpretation and nearby exhibits are always accessible. Interior access varies during restoration and legislative sessions — check current status before your visit.",
  },
  {
    question: "Is Confederation history suitable for a short port call?",
    answer:
      "Yes — heritage sites cluster downtown within walking distance of the cruise terminal. A Confederation-focused tour fits four-to-six-hour port windows.",
  },
];

export const metadata: Metadata = pageMetadata({
  title: "Confederation History Guide — Charlottetown, PEI",
  description:
    "Confederation history guide for cruise passengers — 1864 Charlottetown Conference, Province House, Founders' Hall, and heritage tours from the cruise port.",
  path,
});

export default function ConfederationGuidePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Confederation History Guide",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Confederation History Guide" },
          ]),
          faqSchema(faqs),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Home", href: "/" },
            { name: "Confederation History Guide" },
          ]}
        />
        <PageHero
          eyebrow="Heritage guide"
          title="Confederation history guide"
          subtitle="The 1864 Charlottetown Conference, Province House, and Canada's founding story — explored from the cruise port on foot."
        />

        <div className="mt-10 space-y-10">
          <CruisePassengerSnapshot
            intro="Charlottetown hosted the conference that led to Canadian Confederation — heritage sites sit within minutes of the cruise terminal."
            fields={{
              timeInPort: "4–6 hours works well",
              bestFor: "Canadian history, Province House, museums",
            }}
          />

          <GuideSection title="The 1864 Charlottetown Conference">
            <p>
              In September 1864, delegates from the Province of Canada (Ontario and
              Quebec), Nova Scotia, and New Brunswick arrived in Charlottetown for
              what was intended as a regional discussion about maritime union. The
              conversation expanded into a vision for a broader confederation —
              earning Charlottetown the title Birthplace of Confederation.
            </p>
          </GuideSection>

          <GuideSection title="Province House National Historic Site">
            <p>
              Province House — an elegant neoclassical building completed in 1847 —
              still serves as the seat of Prince Edward Island&apos;s legislature.
              Parks Canada interprets the Confederation story on the grounds and
              through nearby exhibits. The building itself has undergone restoration;
              exterior and interpretive programming remain central to any visit.
            </p>
          </GuideSection>

          <GuideSection title="Confederation Centre of the Arts">
            <p>
              Built on the site of the former colonial legislature, the Confederation
              Centre houses a museum, art gallery, and — in season — the long-running
              <em> Anne of Green Gables — The Musical</em>. It connects national
              history to island culture in one downtown complex.
            </p>
          </GuideSection>

          <GuideSection title="Founders' Hall and the waterfront">
            <p>
              Founders&apos; Hall on the harbour and interpretive panels along the
              boardwalk extend the Confederation narrative to the waterfront cruise
              passengers see from the gangway. A walking tour links these sites in
              2–3 hours.
            </p>
          </GuideSection>

          <GuideSection title="Confederation tours">
            <p>
              The{" "}
              <Link href="/historic-confederation-tour" className="text-blue-800 hover:underline">
                historic Confederation tour
              </Link>{" "}
              and{" "}
              <Link href="/charlottetown-walking-tour" className="text-blue-800 hover:underline">
                Charlottetown walking tour
              </Link>{" "}
              both cover this heritage. Pair a morning Confederation focus with an
              afternoon Green Gables coach run only on extended port days.
            </p>
          </GuideSection>

          <ReturnToShipBlock confidence="High" />
          <FAQSection faqs={faqs} />
          <GuideRelatedLinks
            excursions={[
              { label: "Historic Confederation tour", href: "/historic-confederation-tour" },
            ]}
            guides={[
              { label: "Walking from cruise port", href: "/walking-charlottetown-from-cruise-port" },
            ]}
          />
          <NeedHelpCTA excursion="historic-confederation-tour" />
        </div>
      </div>
    </>
  );
}
