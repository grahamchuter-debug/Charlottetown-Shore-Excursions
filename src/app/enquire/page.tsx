import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ExcursionLinks } from "@/components/ExcursionLinks";
import { JsonLd } from "@/components/JsonLd";
import { NeedHelpCTA } from "@/components/NeedHelpCTA";
import { PageHero } from "@/components/PageHero";
import { breadcrumbSchema, webPageSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/site";

const path = "/enquire";

export const metadata: Metadata = pageMetadata({
  title: "Enquire — Charlottetown Shore Excursions, Prince Edward Island",
  description:
    "Enquire about shore excursions in Charlottetown, Prince Edward Island. Tell us your ship schedule — enquiry-only, no online booking yet.",
  path,
});

export default function EnquirePage() {
  return (
    <>
      <JsonLd
        data={[
          webPageSchema({
            title: "Enquire About Charlottetown Shore Excursions",
            description: metadata.description as string,
            path,
          }),
          breadcrumbSchema([
            { name: "Home", href: "/" },
            { name: "Enquire" },
          ]),
        ]}
      />
      <div className="mx-auto max-w-6xl px-4 py-10">
        <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Enquire" }]} />
        <PageHero
          eyebrow="Enquiry only — no online booking yet"
          title="Enquire about Charlottetown shore excursions"
          subtitle="Share your ship, port date, and interests — we'll recommend excursions in Charlottetown, Prince Edward Island with realistic return-to-ship timing."
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
            <EnquiryForm />
          </div>
          <div>
            <ExcursionLinks title="Popular excursions" />
            <div className="mt-8">
              <NeedHelpCTA />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
