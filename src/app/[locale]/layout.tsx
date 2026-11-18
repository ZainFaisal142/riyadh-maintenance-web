import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { SiteHeader } from "@/components/SiteHeader";
import { getDirection, isLocale, locales } from "@/i18n/config";
import { headerMessages } from "@/i18n/messages";
import "../globals.css";

interface LocaleLayoutProps {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: Pick<LocaleLayoutProps, "params">): Promise<Metadata> {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    return {};
  }

  const messages = headerMessages[localeParam];

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://riyadhelectricianplumber.vercel.app",
    ),
    title: messages.title,
    description: messages.description,
    alternates: {
      canonical: `/${localeParam}`,
      languages: {
        "en-US": "/en-US",
        "ar-SA": "/ar-SA",
        "x-default": "/en-US",
      },
    },
    openGraph: {
      title: messages.title,
      description: messages.description,
      type: "website",
      locale: localeParam === "ar-SA" ? "ar_SA" : "en_US",
    },
    twitter: {
      card: "summary",
      title: messages.title,
      description: messages.description,
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale: localeParam } = await params;
  if (!isLocale(localeParam)) {
    notFound();
  }

  return (
    <html
      dir={getDirection(localeParam)}
      lang={localeParam}
      className="scroll-smooth"
    >
      <head>
        <link href="https://fonts.googleapis.com" rel="preconnect" />
        <link
          crossOrigin="anonymous"
          href="https://fonts.gstatic.com"
          rel="preconnect"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Amiri:wght@700&family=IBM+Plex+Sans+Arabic:wght@400;500;600;700&family=Playfair+Display:wght@600;700&family=Red+Hat+Text:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-card-bg font-body text-charcoal antialiased">
        <SiteHeader locale={localeParam} messages={headerMessages[localeParam]} />
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
