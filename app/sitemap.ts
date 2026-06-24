import { MetadataRoute } from "next";

export const dynamic = "force-static";
import { ACCOMMODATIONS } from "@/data/accommodations";
import { ALL_DESTINATIONS } from "@/data/destinations";
import { EXPERIENCE_TYPES } from "@/data/experiences";
import { DAY_TRIPS } from "@/data/day-trips";
import { SAFARI_PACKAGES } from "@/data/safari";
import { SAFARI_CATEGORIES } from "@/data/safari-categories";
import { KILI_ROUTES, KILI_PACKAGES } from "@/data/kilimanjaro";

const BASE_URL = "https://illashimweadventures.com";

type ChangeFreq =
  | "always"
  | "hourly"
  | "daily"
  | "weekly"
  | "monthly"
  | "yearly"
  | "never";

function url(
  path: string,
  priority: number,
  changeFrequency: ChangeFreq = "monthly"
): MetadataRoute.Sitemap[number] {
  return {
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    // Core pages
    url("/", 1.0, "weekly"),
    url("/safari/", 0.9, "weekly"),
    url("/kilimanjaro/", 0.9, "weekly"),
    url("/destinations/", 0.85, "weekly"),
    url("/experiences/", 0.85, "weekly"),
    url("/accommodations/", 0.8, "monthly"),
    url("/day-trips/", 0.8, "monthly"),
    url("/plan-trip/", 0.9, "monthly"),
    url("/quote/", 0.85, "monthly"),
    url("/contact/", 0.8, "monthly"),

    // About cluster
    url("/about/", 0.7, "monthly"),
    url("/about/story/", 0.6, "monthly"),
    url("/about/guides/", 0.6, "monthly"),
    url("/about/why-us/", 0.65, "monthly"),
    url("/about/vehicles/", 0.55, "monthly"),
    url("/about/responsible-tourism/", 0.55, "monthly"),

    // Kilimanjaro cluster
    url("/kilimanjaro/overview/", 0.8, "monthly"),
    url("/kilimanjaro/best-time/", 0.75, "monthly"),
    url("/kilimanjaro/safety/", 0.7, "monthly"),
    url("/kilimanjaro/packing-list/", 0.65, "monthly"),
    url("/kilimanjaro/faqs/", 0.65, "monthly"),

    // Safari cluster
    url("/safari/packages/", 0.85, "weekly"),

    // Resource pages
    url("/guide/", 0.65, "monthly"),
    url("/packing-essentials/", 0.6, "monthly"),
    url("/health-safety/", 0.6, "monthly"),
    url("/cultural-etiquette/", 0.6, "monthly"),
    url("/faq/", 0.65, "monthly"),
    url("/testimonials/", 0.6, "monthly"),


    // Dynamic: accommodations
    ...ACCOMMODATIONS.map((a) => url(`/accommodations/${a.slug}/`, 0.75)),

    // Dynamic: destinations
    ...ALL_DESTINATIONS.map((d) => url(`/destinations/${d.slug}/`, 0.8)),

    // Dynamic: experiences
    ...EXPERIENCE_TYPES.map((e) => url(`/experiences/${e.slug}/`, 0.75)),

    // Dynamic: day trips
    ...DAY_TRIPS.map((t) => url(`/day-trips/${t.slug}/`, 0.7)),

    // Dynamic: safari category browse pages
    ...SAFARI_CATEGORIES.map((c) => url(`/safari/${c.slug}/`, 0.85, "weekly")),

    // Dynamic: safari package detail pages
    ...SAFARI_PACKAGES.map((p) => url(`/safari/packages/${p.slug}/`, 0.8)),

    // Dynamic: kilimanjaro routes
    ...Object.keys(KILI_ROUTES).map((slug) =>
      url(`/kilimanjaro/routes/${slug}/`, 0.8)
    ),

    // Dynamic: kilimanjaro packages
    ...Object.keys(KILI_PACKAGES).map((slug) =>
      url(`/kilimanjaro/packages/${slug}/`, 0.75)
    ),
  ];
}
