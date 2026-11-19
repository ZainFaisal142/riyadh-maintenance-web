"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { getOtherLocale, type Locale } from "@/i18n/config";
import type { HeaderMessages } from "@/i18n/messages";
import { ConversionLink } from "./ConversionLink";
import { HeaderIcon, type HeaderIconName } from "./HeaderIcon";

interface SiteHeaderProps {
  locale: Locale;
  messages: HeaderMessages;
}

const navigationIcons: Record<string, HeaderIconName> = {
  home: "brand",
  services: "brand",
  pricing: "brand",
  "why-choose-us": "brand",
  coverage: "location",
  reviews: "brand",
  faq: "brand",
  contact: "phone",
};

export function SiteHeader({ locale, messages }: SiteHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const otherLocale = getOtherLocale(locale);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <div className="sticky top-0 z-50 shadow-md">
      <div className="bg-slate-navy text-slate-200">
        <div className="mx-auto flex max-w-container items-center justify-between gap-2 px-3 py-2 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <HeaderIcon
              className="h-4 w-4 shrink-0 text-safety-amber"
              name="location"
            />
            <span className="truncate text-xs font-semibold tracking-wide sm:text-sm">
              <span className="hidden sm:inline">{messages.emergencyPrefix} | </span>
              {messages.location}
            </span>
          </div>
          <div className="flex shrink-0 items-center gap-2 text-xs sm:gap-4 sm:text-sm">
            <ConversionLink
              action="phone"
              className="inline-flex min-h-10 items-center gap-1 font-bold text-safety-amber transition-colors hover:text-safety-amber-hover"
              href="tel:0533995879"
            >
              <HeaderIcon className="h-4 w-4" name="phone" />
              <span className="hidden sm:inline">{messages.callNow}: </span>
              <bdi dir="ltr">053 399 5879</bdi>
            </ConversionLink>
            <span aria-hidden="true" className="text-slate-600">
              |
            </span>
            <ConversionLink
              action="whatsapp"
              className="inline-flex min-h-10 items-center gap-1 font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
              href="https://wa.me/966533995879"
              rel="noopener noreferrer"
              target="_blank"
            >
              <HeaderIcon className="h-4 w-4" name="whatsapp" />
              <span className="hidden sm:inline">{messages.whatsapp}</span>
              <span className="sr-only sm:hidden">{messages.whatsapp}</span>
            </ConversionLink>
          </div>
        </div>
      </div>

      <header className="border-b border-border-soft bg-white/95 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-container items-center justify-between gap-2 px-3 sm:h-20 sm:px-6 lg:px-8">
          <a
            className="group flex min-w-0 shrink-0 items-center gap-2.5 sm:gap-3"
            href={`/${locale}#home`}
          >
            <Image
              alt=""
              aria-hidden="true"
              className="h-12 w-12 shrink-0 object-contain transition-transform group-hover:scale-105 sm:h-14 sm:w-14"
              height={56}
              src="/images/logo.jpeg"
              width={56}
            />
            <span className="min-w-0">
              <span className="block truncate font-display text-base font-bold leading-tight text-slate-navy sm:text-lg lg:text-xl">
                {messages.brandName}
              </span>
              <span className="block truncate text-[10px] font-semibold uppercase tracking-wide text-muted-slate sm:text-[11px]">
                {messages.brandDescriptor}
              </span>
            </span>
          </a>

          <nav
            aria-label={messages.navigationLabel}
            className="hidden items-center gap-4 text-sm font-medium text-charcoal xl:flex 2xl:gap-5"
          >
            {messages.nav.map((item) => (
              <a
                className="whitespace-nowrap transition-colors hover:text-safety-amber"
                href={`#${item.id}`}
                key={item.id}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2 sm:gap-3">
            <Link
              aria-label={messages.switchLanguage}
              className="inline-flex min-h-10 items-center gap-1.5 rounded border border-border-soft bg-card-bg px-2.5 text-xs font-semibold text-slate-navy shadow-sm transition-colors hover:bg-slate-200 sm:px-3"
              href={`/${otherLocale}`}
              hrefLang={otherLocale}
              lang={otherLocale}
            >
              <HeaderIcon
                className="h-4 w-4 text-muted-slate"
                name="translate"
              />
              <span>{messages.languageName}</span>
            </Link>

            <ConversionLink
              action="phone"
              className="hidden min-h-10 items-center gap-1.5 rounded bg-safety-amber px-3.5 text-xs font-bold text-slate-navy shadow-sm transition-colors hover:bg-safety-amber-hover sm:inline-flex lg:text-sm"
              href="tel:0533995879"
            >
              <HeaderIcon className="h-[17px] w-[17px]" name="phone" />
              <span className="hidden lg:inline">{messages.callTechnician}</span>
              <span className="lg:hidden">{messages.callNow}</span>
            </ConversionLink>

            <button
              aria-controls="mobile-navigation"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? messages.closeMenu : messages.openMenu}
              className="flex h-10 w-10 items-center justify-center rounded text-slate-navy transition-colors hover:bg-slate-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-safety-amber xl:hidden"
              onClick={() => setMenuOpen((open) => !open)}
              type="button"
            >
              <HeaderIcon
                className="h-7 w-7"
                name={menuOpen ? "close" : "menu"}
              />
            </button>
          </div>
        </div>

        {menuOpen && (
          <div
            className="max-h-[calc(100dvh-7rem)] overflow-y-auto border-t border-border-soft bg-white/98 px-4 pb-6 pt-3 shadow-lg xl:hidden"
            id="mobile-navigation"
            onKeyDown={(event) => {
              if (event.key === "Escape") closeMenu();
            }}
          >
            <nav aria-label={messages.navigationLabel}>
              <ul className="grid grid-cols-1 gap-1 text-sm font-medium text-charcoal sm:grid-cols-2">
                {messages.nav.map((item) => (
                  <li key={item.id}>
                    <a
                      className="flex min-h-11 items-center gap-2 rounded px-3 py-2 transition-colors hover:bg-slate-50"
                      href={`#${item.id}`}
                      onClick={closeMenu}
                    >
                      <HeaderIcon
                        className="h-[18px] w-[18px] shrink-0 text-safety-amber"
                        name={navigationIcons[item.id] ?? "brand"}
                      />
                      {item.mobileLabel}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="mt-3 flex flex-col gap-2 border-t border-slate-100 pt-3 sm:flex-row">
              <ConversionLink
                action="phone"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded bg-safety-amber px-4 py-3 text-sm font-bold text-slate-navy shadow-sm transition-colors hover:bg-safety-amber-hover"
                href="tel:0533995879"
              >
                <HeaderIcon className="h-[18px] w-[18px]" name="phone" />
                <span>
                  {messages.callNow} <bdi dir="ltr">053 399 5879</bdi>
                </span>
              </ConversionLink>
              <ConversionLink
                action="whatsapp"
                className="flex min-h-12 w-full items-center justify-center gap-2 rounded bg-emerald-green px-4 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-emerald-green-dark"
                href="https://wa.me/966533995879"
                rel="noopener noreferrer"
                target="_blank"
              >
                <HeaderIcon className="h-[18px] w-[18px]" name="whatsapp" />
                {messages.whatsapp}
              </ConversionLink>
            </div>
          </div>
        )}
      </header>
    </div>
  );
}
