export const SITE_NAME = "Charlottetown Shore Excursions";
export const SITE_URL = "https://charlottetownshoreexcursions.com";
export const SITE_DESCRIPTION =
  "Independent shore excursion guides for cruise passengers visiting Charlottetown, Prince Edward Island — Anne of Green Gables, red sandstone cliffs, lighthouses, Cavendish beaches, Confederation history, and Canada & New England port planning.";
export const GEO_LABEL = "Charlottetown, Prince Edward Island";

export const HERO_IMAGE = "/images/charlottetown-hero.png";
export const HERO_IMAGE_ALT =
  "Red sandstone cliffs and white sand beach along the Prince Edward Island coast near Charlottetown";

export function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

export function pageTitle(title: string): string {
  return title;
}

export function pageMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(HERO_IMAGE);
  return {
    title: pageTitle(title),
    description,
    alternates: { canonical: url },
    openGraph: {
      title: pageTitle(title),
      description,
      url,
      type: "website" as const,
      siteName: SITE_NAME,
      locale: "en_CA",
      images: [{ url: ogImage, alt: HERO_IMAGE_ALT }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: pageTitle(title),
      description,
      images: [ogImage],
    },
  };
}
