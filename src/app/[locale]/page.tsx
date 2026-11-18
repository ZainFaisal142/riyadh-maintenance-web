import { notFound } from "next/navigation";
import { LandingSections } from "@/components/LandingSections";
import { isLocale } from "@/i18n/config";
import { getLandingContent } from "@/data/landing";

interface LandingPageProps {
  params: Promise<{ locale: string }>;
}

export default async function LandingPage({ params }: LandingPageProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  const content = getLandingContent(localeParam);
  const pageUrl = new URL(
    `/${localeParam}`,
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://riyadhelectricianplumber.vercel.app",
  ).toString();
  const localBusiness = {
    "@context": "https://schema.org",
    "@type": ["Electrician", "Plumber"],
    "@id": `${pageUrl}#riyadh-maintenance-pro`,
    url: pageUrl,
    name: localeParam === "ar-SA" ? "الرياض برو للصيانة" : "Riyadh Maintenance Pro",
    telephone: "+966533995879",
    priceRange: "SAR 99-199",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Al-Munsiyah, Riyadh",
      addressRegion: "Riyadh",
      postalCode: "13253",
      addressCountry: "SA",
    },
    areaServed: {
      "@type": "City",
      name: "Riyadh",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "00:00",
        closes: "23:59",
      },
    ],
  };
  const serviceData = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name:
        localeParam === "ar-SA"
          ? "خدمات صيانة الكهرباء في الرياض"
          : "Electrical maintenance in Riyadh",
      provider: { "@id": localBusiness["@id"] },
      areaServed: "Riyadh",
      serviceType: "Emergency electrical repair",
    },
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name:
        localeParam === "ar-SA"
          ? "خدمات السباكة في الرياض"
          : "Plumbing maintenance in Riyadh",
      provider: { "@id": localBusiness["@id"] },
      areaServed: "Riyadh",
      serviceType: "Emergency plumbing repair",
    },
  ];
  const jsonLd = JSON.stringify([localBusiness, ...serviceData]).replace(
    /</g,
    "\\u003c",
  );

  return (
    <>
      <LandingSections content={content} locale={localeParam} />
      <script
        dangerouslySetInnerHTML={{ __html: jsonLd }}
        type="application/ld+json"
      />
    </>
  );
}
