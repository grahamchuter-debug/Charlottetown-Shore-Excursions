import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CruisePlanner } from "@/components/CruisePlanner";
import { GuideRelatedLinks } from "@/components/GuideRelatedLinks";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { ReturnToShipBlock } from "@/components/ReturnToShipBlock";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/cruise-planner";

export const metadata: Metadata = pageMetadata({
  title: "Cruise Planner — Charlottetown Shore Excursions",
  description:
    "Match Charlottetown, Prince Edward Island shore excursions to your hours ashore — interactive cruise day planner for cruise passengers.",
  path,
});

export default function CruisePlannerPage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Charlottetown Cruise Planner",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Cruise Planner" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Cruise Planner" }]} />
        <PageHero
          eyebrow="Interactive planner"
          title="Charlottetown cruise planner"
          subtitle="Select your hours ashore in Charlottetown, Prince Edward Island and see excursion suggestions with return-to-ship guidance."
        />

        <div className="mt-10 space-y-10">
          <CruisePlanner />
          <ReturnToShipBlock />
          <GuideRelatedLinks
            guides={[
              {
                label: "One day in Charlottetown",
                href: "/one-day-in-charlottetown-from-a-cruise-ship",
              },
              { label: "Port guide", href: "/charlottetown-cruise-port-guide" },
            ]}
          />
          <NeedHelpCTA />
        </div>
      </div>
    </>
  );
}
