import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExcursionCard } from "@/components/ExcursionCard";
import { excursions } from "@/lib/excursions";
import { GEO_LABEL, HERO_IMAGE, HERO_IMAGE_ALT, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Charlottetown Shore Excursions & Port Guide — Prince Edward Island",
  description:
    "Plan shore excursions from Charlottetown, Prince Edward Island — Anne of Green Gables, red sandstone cliffs, lighthouses, Cavendish beaches, Confederation history, and Canada & New England cruise port guides.",
  path: "/",
});

export default function HomePage() {
  const featured = excursions.slice(0, 4);

  return (
    <div>
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <Image
          src={HERO_IMAGE}
          alt={HERO_IMAGE_ALT}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 bg-gradient-to-r from-slate-900/92 via-slate-900/80 to-slate-900/50"
          aria-hidden
        />
        <div className="relative mx-auto grid max-w-6xl lg:grid-cols-2 lg:min-h-[32rem]">
          <div className="flex flex-col justify-center px-4 py-14 md:py-20 lg:py-24">
            <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
              {GEO_LABEL} · Canada &amp; New England
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight md:text-5xl">
              Shore excursions for Charlottetown cruise passengers
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              Anne of Green Gables, red cliffs, lighthouses, Cavendish beaches,
              Confederation history, and fresh PEI lobster — independent guidance
              with clear return-to-ship advice for every port day.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/excursions"
                className="rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
              >
                Browse excursions
              </Link>
              <Link
                href="/charlottetown-cruise-port-guide"
                className="rounded-full border border-slate-400 px-6 py-3 text-sm font-semibold hover:border-white"
              >
                Charlottetown port guide
              </Link>
            </div>
          </div>
          <div className="relative hidden lg:flex flex-col justify-center px-4 py-12">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="text-2xl font-bold text-white">Birthplace of Confederation</p>
              <p className="mt-3 text-slate-200 leading-relaxed">
                Province House, Victoria Row, and red sandstone coastlines — Prince
                Edward Island is a signature stop on Canada &amp; New England cruise
                itineraries.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-6">
          <h2 className="text-lg font-semibold text-amber-950">
            Charlottetown, Prince Edward Island — Canada&apos;s smallest province
          </h2>
          <p className="mt-2 text-amber-950/80 leading-relaxed">
            This site covers cruise passengers visiting{" "}
            <strong>Charlottetown on Prince Edward Island</strong> — not other
            Atlantic Canada ports. PEI delivers literary heritage, dramatic
            coastlines, and Confederation history within easy reach of the cruise
            terminal.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-2xl font-bold text-slate-900">Popular excursions</h2>
          <Link href="/excursions" className="text-sm font-semibold text-blue-800">
            View all →
          </Link>
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((e) => (
            <ExcursionCard key={e.slug} excursion={e} />
          ))}
        </div>
      </section>

      <section className="bg-white border-y border-slate-200">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="text-2xl font-bold text-slate-900">Planning guides</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                href: "/best-charlottetown-shore-excursions",
                label: "Best Charlottetown excursions",
                desc: "Ranked by port time and return confidence",
              },
              {
                href: "/anne-of-green-gables-guide",
                label: "Anne of Green Gables guide",
                desc: "Green Gables, travel time, and cruise fit",
              },
              {
                href: "/one-day-in-charlottetown-from-a-cruise-ship",
                label: "One day in Charlottetown",
                desc: "4, 6, and 8-hour itinerary ideas",
              },
              {
                href: "/prince-edward-island-guide",
                label: "Prince Edward Island guide",
                desc: "Beaches, cliffs, lighthouses, and villages",
              },
              {
                href: "/cavendish-from-charlottetown",
                label: "Cavendish from Charlottetown",
                desc: "Driving time, beaches, and Green Gables",
              },
              {
                href: "/confederation-history-guide",
                label: "Confederation history",
                desc: "1864 conference and Province House",
              },
              {
                href: "/prince-edward-island-lighthouses",
                label: "PEI lighthouses",
                desc: "Coastal icons within reach of the port",
              },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-xl border border-slate-200 p-5 hover:border-blue-300 hover:bg-blue-50/40"
              >
                <p className="font-semibold text-slate-900">{item.label}</p>
                <p className="mt-1 text-sm text-slate-600">{item.desc}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="rounded-xl bg-slate-900 px-8 py-10 text-white text-center">
          <h2 className="text-2xl font-bold">Need help choosing?</h2>
          <p className="mx-auto mt-3 max-w-xl text-slate-300">
            Enquiry-only — tell us your ship schedule and we&apos;ll recommend
            Charlottetown excursions with realistic return timing.
          </p>
          <Link
            href="/enquire"
            className="mt-6 inline-block rounded-full bg-amber-400 px-6 py-3 text-sm font-semibold text-slate-900 hover:bg-amber-300"
          >
            Send an enquiry
          </Link>
        </div>
      </section>
    </div>
  );
}
