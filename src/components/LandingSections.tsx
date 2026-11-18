import Link from "next/link";
import type { Locale } from "@/i18n/config";
import { headerMessages } from "@/i18n/messages";
import type { LandingContent, LocalizedText } from "@/data/landing";
import { ConversionLink } from "./ConversionLink";
import { HeaderIcon } from "./HeaderIcon";

interface LandingSectionsProps {
  content: LandingContent;
  locale: Locale;
}

function copy(value: LocalizedText) {
  return value;
}

function whatsappUrl(locale: Locale, text: string) {
  const prompt =
    locale === "ar-SA"
      ? `مرحباً، أحتاج إلى خدمة صيانة في الرياض: ${text}`
      : `Hello, I need a maintenance service in Riyadh: ${text}`;

  return `https://wa.me/966533995879?text=${encodeURIComponent(prompt)}`;
}

function SectionHeading({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  id?: string;
}) {
  return (
    <div className="mx-auto mb-12 max-w-3xl space-y-3 text-center sm:mb-16">
      <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-safety-amber">
        {copy(eyebrow)}
      </span>
      <h2
        className="font-display text-2xl font-bold text-slate-navy sm:text-3xl"
        id={id}
      >
        {copy(title)}
      </h2>
      <p className="text-sm leading-6 text-muted-slate sm:text-base">
        {copy(description)}
      </p>
    </div>
  );
}

function AdSlot({
  label,
  size,
}: {
  label: string;
  size: "leaderboard" | "sidebar";
}) {
  return (
    <aside
      aria-label={label}
      className={`ad-slot ad-slot-${size} mx-auto flex items-center justify-center`}
    >
      <span>{label}</span>
    </aside>
  );
}

function HeroSection({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  const { hero } = content;

  return (
    <section
      aria-labelledby="hero-title"
      className="hero-pattern relative overflow-hidden py-14 text-white sm:py-20 lg:py-24"
      id="home"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-amber-500/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl"
      />
      <div className="relative mx-auto grid max-w-container grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <div className="space-y-6 text-center lg:col-span-7 lg:text-start">
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-700 bg-slate-800/80 px-4 py-2 text-xs font-semibold tracking-wide text-emerald-300 sm:text-sm">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500" />
            </span>
            {copy(hero.availability)}
          </div>
          <h1
            className="font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl"
            id="hero-title"
          >
            {copy(hero.title)}
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-7 text-slate-300 lg:mx-0">
            {copy(hero.description)}
          </p>
          <div className="flex flex-col items-stretch justify-center gap-3 pt-1 sm:flex-row sm:flex-wrap sm:items-center lg:justify-start">
            <ConversionLink
              action="phone"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-safety-amber px-6 py-3 text-sm font-bold text-slate-navy shadow-lg transition hover:bg-safety-amber-hover sm:text-base"
              href="tel:0533995879"
            >
              <HeaderIcon className="h-5 w-5" name="phone" />
              {copy(hero.callAction)}
            </ConversionLink>
            <ConversionLink
              action="whatsapp"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded bg-emerald-green px-6 py-3 text-sm font-bold text-white shadow-lg transition hover:bg-emerald-green-dark sm:text-base"
              href={whatsappUrl(locale, copy(hero.whatsappAction))}
              rel="noopener noreferrer"
              target="_blank"
            >
              <HeaderIcon className="h-5 w-5" name="whatsapp" />
              {copy(hero.whatsappAction)}
            </ConversionLink>
            <a
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded border border-slate-600 bg-slate-800/80 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
              href="#pricing"
            >
              {copy(hero.pricingAction)}
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2 lg:justify-start">
            <div
              aria-label={locale === "ar-SA" ? "تقييم 5 من 5" : "Rated 5 out of 5"}
              className="inline-flex min-h-10 items-center gap-2 rounded border border-slate-700 bg-slate-800/90 px-3 py-2 text-xs font-semibold text-white sm:text-sm"
              role="img"
            >
              <span aria-hidden="true" className="text-amber-400">
                ★★★★★
              </span>
              {copy(hero.rating)}
            </div>
            <span className="text-xs text-slate-300 sm:text-sm">
              {locale === "ar-SA"
                ? "معايير كود البناء السعودي"
                : "Saudi building code-aware service"}
            </span>
          </div>
        </div>

        <div className="lg:col-span-5">
          <div className="rounded-lg border border-slate-700 bg-gradient-to-b from-slate-800 to-slate-900 p-6 shadow-2xl sm:p-8">
            <div className="mb-6 flex items-start justify-between gap-4 border-b border-slate-700 pb-4">
              <div>
                <span className="block text-xs font-bold uppercase tracking-wider text-safety-amber">
                  {locale === "ar-SA" ? "وحدة الاستجابة" : "Rapid response"}
                </span>
                <h2 className="mt-1 text-lg font-bold text-white">
                  {copy(hero.hubTitle)}
                </h2>
              </div>
              <HeaderIcon
                className="h-8 w-8 shrink-0 text-safety-amber"
                name="location"
              />
            </div>
            <div className="space-y-3">
              {[hero.electrician, hero.plumber].map((trade) => (
                <div
                  className="flex items-center justify-between gap-3 rounded border border-slate-700 bg-slate-800/80 p-4"
                  key={trade}
                >
                  <span className="flex items-center gap-3 text-sm font-semibold text-white">
                    <span
                      aria-hidden="true"
                      className="flex h-9 w-9 items-center justify-center rounded bg-emerald-500/15 text-emerald-300"
                    >
                      {trade === hero.electrician ? "⚡" : "⌁"}
                    </span>
                    {copy(trade)}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                </div>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between gap-3 rounded border border-emerald-900/50 bg-emerald-950/30 p-4">
              <span className="text-sm text-slate-200">
                {copy(hero.arrival)}
              </span>
              <strong className="text-sm text-emerald-300">
                {copy(hero.arrivalTime)}
              </strong>
            </div>
            <div className="mt-5 grid grid-cols-3 gap-2" aria-hidden="true">
              <span className="h-1 rounded bg-safety-amber/80" />
              <span className="h-1 rounded bg-emerald-400/80" />
              <span className="h-1 rounded bg-sky-400/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsSection({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  return (
    <section
      aria-label={locale === "ar-SA" ? "مؤشرات الخدمة" : "Service highlights"}
      className="relative z-10 border-y border-border-soft bg-white py-8 shadow-sm sm:py-10"
    >
      <div className="mx-auto grid max-w-container grid-cols-2 gap-4 px-4 sm:px-6 md:grid-cols-4 md:gap-6 lg:px-8">
        {content.metrics.map((metric, index) => (
          <div
            className="py-2 text-center"
            key={metric.value + metric.label}
          >
            <span
              className={`mb-1 block font-display text-2xl font-bold tabular-nums sm:text-3xl ${
                index === 1
                  ? "text-safety-amber"
                  : index === 2
                    ? "text-emerald-green"
                    : "text-slate-navy"
              }`}
            >
              {metric.value}
              {index === 0 && (locale === "ar-SA" ? " سنوات" : " Years")}
            </span>
            <span className="text-xs font-medium text-muted-slate sm:text-sm">
              {copy(metric.label)}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function WhySection({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  const { why } = content;
  return (
    <section className="bg-card-bg py-14 sm:py-16" id="why-choose-us">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <article className="relative overflow-hidden rounded-lg border border-slate-700 bg-slate-navy p-6 text-white shadow-xl sm:p-10 lg:p-12">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -end-10 -top-16 h-64 w-64 rounded-full bg-gradient-to-br from-amber-500/10 to-emerald-500/10 blur-2xl"
          />
          <div className="relative grid items-center gap-8 lg:grid-cols-12">
            <div className="space-y-4 lg:col-span-8">
              <span className="inline-flex rounded-full bg-safety-amber px-3 py-1 text-xs font-bold uppercase tracking-wider text-slate-navy">
                {copy(why.badge)}
              </span>
              <h2 className="font-display text-2xl font-bold text-white sm:text-3xl">
                {copy(why.title)}
              </h2>
              <p className="max-w-3xl text-sm leading-7 text-slate-300 sm:text-base">
                {copy(why.description)}
              </p>
              <ul className="grid gap-3 pt-2 text-sm text-slate-200 sm:grid-cols-3">
                {why.benefits.map((benefit) => (
                  <li className="flex items-center gap-2" key={benefit}>
                    <span aria-hidden="true" className="text-safety-amber">
                      ✓
                    </span>
                    {copy(benefit)}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-4">
              <ConversionLink
                action="phone"
                className="inline-flex min-h-12 items-center justify-center rounded bg-safety-amber px-5 py-3 text-center text-sm font-bold text-slate-navy shadow-md transition hover:bg-safety-amber-hover"
                href="tel:0533995879"
              >
                {copy(why.callAction)}
              </ConversionLink>
              <ConversionLink
                action="whatsapp"
                className="inline-flex min-h-12 items-center justify-center rounded bg-emerald-green px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-emerald-green-dark"
                href={whatsappUrl(locale, copy(why.whatsappAction))}
                rel="noopener noreferrer"
                target="_blank"
              >
                {copy(why.whatsappAction)}
              </ConversionLink>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function ServicesSection({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  return (
    <section
      className="border-t border-border-soft bg-white py-16 sm:py-20"
      id="services"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description={content.services.description}
          eyebrow={content.services.eyebrow}
          title={content.services.title}
        />
        <div className="grid gap-6 lg:grid-cols-2">
          {content.services.groups.map((group, groupIndex) => (
            <article
              className="flex flex-col justify-between rounded-lg border border-border-soft bg-card-bg p-5 shadow-sm sm:p-7"
              key={group.title}
            >
              <div>
                <div className="mb-5 flex items-center gap-3 border-b border-border-soft pb-4">
                  <span
                    aria-hidden="true"
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded text-2xl ${
                      groupIndex === 0
                        ? "bg-amber-500/10 text-safety-amber"
                        : "bg-sky-500/10 text-sky-600"
                    }`}
                  >
                    {groupIndex === 0 ? "⚡" : "⌁"}
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-navy">
                      {copy(group.title)}
                    </h3>
                    <p className="mt-1 text-xs text-muted-slate">
                      {copy(group.description)}
                    </p>
                  </div>
                </div>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {group.items.map((service) => (
                    <li
                      className="rounded border border-border-soft bg-white p-4"
                      key={service.title}
                    >
                      <h4 className="mb-2 flex items-center gap-2 text-sm font-bold text-slate-navy">
                        <span
                          aria-hidden="true"
                          className={`h-2 w-2 shrink-0 rounded-full ${
                            groupIndex === 0
                              ? "bg-safety-amber"
                              : "bg-sky-500"
                          }`}
                        />
                        {copy(service.title)}
                      </h4>
                      <p className="text-xs leading-5 text-muted-slate">
                        {copy(service.description)}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-5 flex flex-wrap items-center justify-between gap-2 border-t border-border-soft pt-4">
                <span className="text-xs font-semibold text-slate-600">
                  {copy(group.prompt)}
                </span>
                <ConversionLink
                  action="phone"
                  className="inline-flex min-h-10 items-center gap-1 text-sm font-bold text-safety-amber transition hover:text-safety-amber-hover"
                  href="tel:0533995879"
                >
                  {copy(group.action)}
                  <span aria-hidden="true">{locale === "ar-SA" ? "←" : "→"}</span>
                </ConversionLink>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PricingSection({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  return (
    <section className="bg-white pb-16 sm:pb-20" id="pricing">
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description={content.pricing.description}
          eyebrow={content.pricing.eyebrow}
          title={content.pricing.title}
        />
        <div className="grid items-stretch gap-6 md:grid-cols-3">
          {content.pricing.plans.map((plan) => (
            <article
              className={`relative flex flex-col justify-between rounded-lg p-6 shadow-sm transition-shadow hover:shadow-md sm:p-7 ${
                plan.featured
                  ? "border-2 border-safety-amber bg-white md:scale-[1.03] md:shadow-xl"
                  : "border border-border-soft bg-card-bg"
              }`}
              key={plan.title}
            >
              {plan.featured && (
                <span className="absolute -top-3 start-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-safety-amber px-4 py-1 text-xs font-extrabold text-slate-navy">
                  {locale === "ar-SA" ? "الخيار الأكثر طلباً" : "Most requested"}
                </span>
              )}
              <div className={plan.featured ? "pt-2" : ""}>
                <span className="text-xs font-bold uppercase tracking-wider text-muted-slate">
                  {copy(plan.category)}
                </span>
                <h3 className="mt-2 font-display text-lg font-bold text-slate-navy">
                  {copy(plan.title)}
                </h3>
                <p className="mt-1 min-h-10 text-xs leading-5 text-muted-slate">
                  {copy(plan.description)}
                </p>
                <div className="my-5 flex flex-wrap items-baseline gap-x-2 gap-y-1 border-b border-border-soft pb-5">
                  <span className="font-display text-4xl font-bold tabular-nums text-slate-navy">
                    {plan.amount}
                  </span>
                  <span className="text-sm font-semibold text-muted-slate">
                    {locale === "ar-SA" ? "ريال سعودي" : "SAR"}
                  </span>
                  <span className="w-full text-xs text-muted-slate">
                    {copy(plan.amountNote)}
                  </span>
                </div>
                <ul className="mb-8 space-y-3 text-sm text-charcoal">
                  {plan.features.map((feature) => (
                    <li className="flex items-start gap-2" key={feature}>
                      <span
                        aria-hidden="true"
                        className="mt-0.5 text-emerald-green"
                      >
                        ✓
                      </span>
                      {copy(feature)}
                    </li>
                  ))}
                </ul>
              </div>
              {plan.amount === 199 ? (
                <ConversionLink
                  action="whatsapp"
                  className="inline-flex min-h-12 items-center justify-center rounded bg-emerald-green px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-emerald-green-dark"
                  href={whatsappUrl(locale, copy(plan.title))}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {copy(plan.action)}
                </ConversionLink>
              ) : (
                <ConversionLink
                  action="phone"
                  className={`inline-flex min-h-12 items-center justify-center rounded px-4 py-3 text-center text-sm font-bold transition ${
                    plan.featured
                      ? "bg-safety-amber text-slate-navy hover:bg-safety-amber-hover"
                      : "border-2 border-slate-navy text-slate-navy hover:bg-slate-navy hover:text-white"
                  }`}
                  href="tel:0533995879"
                >
                  {copy(plan.action)}
                </ConversionLink>
              )}
            </article>
          ))}
        </div>
        <p className="mt-8 text-center text-xs leading-5 text-muted-slate">
          {copy(content.pricing.note)}
        </p>
        <div className="mt-8">
          <AdSlot label={copy(content.adLabel)} size="sidebar" />
        </div>
      </div>
    </section>
  );
}

function CoverageSection({ content }: { content: LandingContent }) {
  const { coverage } = content;
  return (
    <section
      className="border-t border-border-soft bg-card-bg py-16 sm:py-20"
      id="coverage"
    >
      <div className="mx-auto grid max-w-container items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="space-y-5">
          <span className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-safety-amber">
            {copy(coverage.eyebrow)}
          </span>
          <h2 className="font-display text-2xl font-bold text-slate-navy sm:text-3xl">
            {copy(coverage.title)}
          </h2>
          <p className="text-sm leading-7 text-muted-slate sm:text-base">
            {copy(coverage.description)}
          </p>
          <ul className="space-y-3">
            {coverage.zones.map((zone) => (
              <li
                className="flex items-start gap-3 rounded border border-border-soft bg-white p-4 shadow-sm"
                key={zone.title}
              >
                <HeaderIcon
                  className="mt-0.5 h-5 w-5 shrink-0 text-safety-amber"
                  name="location"
                />
                <div>
                  <h3 className="text-sm font-bold text-slate-navy">
                    {copy(zone.title)}
                  </h3>
                  <p className="mt-1 text-xs leading-5 text-muted-slate">
                    {copy(zone.description)}
                  </p>
                </div>
              </li>
            ))}
          </ul>
          <ConversionLink
            action="phone"
            className="inline-flex min-h-12 items-center justify-center rounded bg-safety-amber px-5 py-3 text-sm font-bold text-slate-navy shadow transition hover:bg-safety-amber-hover"
            href="tel:0533995879"
          >
            {copy(coverage.action)}
          </ConversionLink>
        </div>

        <div
          aria-label={copy(coverage.mapCaption)}
          className="overflow-hidden rounded-lg border border-slate-700 bg-slate-navy shadow-xl"
          role="img"
        >
          <div className="flex items-center justify-between gap-3 border-b border-slate-700 bg-slate-800 px-4 py-4 text-white sm:px-6">
            <div className="flex items-center gap-2">
              <HeaderIcon className="h-5 w-5 text-safety-amber" name="location" />
              <span className="text-sm font-bold">
                {copy(coverage.mapTitle)}
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-3 py-1 text-xs font-semibold text-emerald-300">
              {copy(coverage.mapCaption)}
            </span>
          </div>
          <div className="coverage-map relative flex min-h-72 items-center justify-center overflow-hidden p-6 text-center sm:min-h-80">
            <svg
              aria-hidden="true"
              className="absolute inset-0 h-full w-full opacity-50"
              preserveAspectRatio="none"
              viewBox="0 0 640 360"
            >
              <path
                d="M-20 240 650 80M80-20l440 400M-10 110 660 275M210-10 170 380"
                fill="none"
                stroke="#64748b"
                strokeDasharray="8 8"
                strokeWidth="2"
              />
              <path
                d="M-20 240 650 80"
                fill="none"
                stroke="#f59e0b"
                strokeWidth="5"
              />
              <path
                d="M80-20l440 400"
                fill="none"
                stroke="#10b981"
                strokeWidth="4"
              />
            </svg>
            <div className="relative z-10 rounded-lg border border-slate-600 bg-slate-950/90 px-6 py-5 text-white shadow-lg">
              <span className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-safety-amber text-xl text-slate-navy">
                <HeaderIcon className="h-6 w-6" name="location" />
              </span>
              <strong className="block text-sm text-amber-400">
                {copy(coverage.mapTitle)}
              </strong>
              <span className="mt-1 block text-xs text-slate-300">
                {copy(coverage.mapAddress)}
              </span>
            </div>
          </div>
          <div className="border-t border-slate-800 bg-slate-950 px-4 py-3 text-xs text-slate-300 sm:px-6">
            {copy(coverage.mapAddress)}
          </div>
        </div>
      </div>
    </section>
  );
}

function ReviewsSection({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  return (
    <section
      aria-labelledby="reviews-title"
      className="mx-auto max-w-container px-4 py-16 sm:px-6 sm:py-20 lg:px-8"
      id="reviews"
    >
      <SectionHeading
        description={content.reviews.description}
        eyebrow={content.reviews.eyebrow}
        id="reviews-title"
        title={content.reviews.title}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {content.reviews.testimonials.map((testimonial) => (
          <article
            className="flex flex-col justify-between rounded-lg border border-border-soft bg-white p-5 shadow-sm transition-shadow hover:shadow-md sm:p-6"
            key={testimonial.name}
          >
            <div>
              <span
                aria-label={locale === "ar-SA" ? "5 نجوم" : "5 stars"}
                className="mb-3 block tracking-widest text-amber-400"
                role="img"
              >
                ★★★★★
              </span>
              <blockquote className="text-sm italic leading-6 text-charcoal">
                “{copy(testimonial.quote)}”
              </blockquote>
            </div>
            <div className="mt-5 flex items-start justify-between gap-3 border-t border-slate-100 pt-4">
              <div>
                <h3 className="text-sm font-bold text-slate-navy">
                  {copy(testimonial.name)}
                </h3>
                <p className="mt-1 text-xs text-muted-slate">
                  {copy(testimonial.role)}
                </p>
              </div>
              <span className="rounded bg-emerald-50 px-2 py-1 text-xs font-semibold text-emerald-800">
                {copy(testimonial.category)}
              </span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

function FAQSection({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  return (
    <section className="border-t border-border-soft bg-white py-16 sm:py-20" id="faq">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          description={content.faq.description}
          eyebrow={content.faq.eyebrow}
          title={content.faq.title}
        />
        <div className="space-y-3">
          {content.faq.items.map((item) => (
            <details
              className="group rounded-lg border border-border-soft bg-card-bg p-4 open:bg-white open:shadow-sm sm:p-5"
              key={item.question}
            >
              <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 font-semibold text-slate-navy marker:content-none">
                <span>{copy(item.question)}</span>
                <span
                  aria-hidden="true"
                  className="shrink-0 text-xl text-muted-slate transition-transform group-open:rotate-180"
                >
                  ⌄
                </span>
              </summary>
              <p className="mt-3 border-t border-border-soft pt-3 text-sm leading-7 text-charcoal">
                {copy(item.answer)}
              </p>
            </details>
          ))}
        </div>
        <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-lg bg-slate-navy p-5 text-center text-white sm:flex-row sm:text-start sm:p-6">
          <div>
            <h3 className="font-bold">{copy(content.faq.prompt)}</h3>
            <p className="mt-1 text-xs text-slate-300">
              {locale === "ar-SA"
                ? "تواصل مباشرة مع فريق الطوارئ."
                : "Speak directly with the emergency dispatch team."}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-2">
            <ConversionLink
              action="phone"
              className="inline-flex min-h-11 items-center justify-center rounded bg-safety-amber px-4 py-2 text-sm font-bold text-slate-navy"
              href="tel:0533995879"
            >
              {copy(content.faq.callAction)}
            </ConversionLink>
            <ConversionLink
              action="whatsapp"
              className="inline-flex min-h-11 items-center justify-center rounded bg-emerald-green px-4 py-2 text-sm font-semibold text-white"
              href={whatsappUrl(locale, copy(content.faq.whatsappAction))}
              rel="noopener noreferrer"
              target="_blank"
            >
              {copy(content.faq.whatsappAction)}
            </ConversionLink>
          </div>
        </div>
      </div>
    </section>
  );
}

function SiteFooter({
  content,
  locale,
}: {
  content: LandingContent;
  locale: Locale;
}) {
  const messages = headerMessages[locale];
  const serviceLinks =
    locale === "ar-SA"
      ? [
          "لوحات التوزيع والقواطع",
          "إصلاح الالتماسات الكهربائية",
          "كشف تسربات المياه",
          "تسليك المصارف",
          "صيانة مضخات المياه",
          "زيارة كهربائي وسباك مشتركة",
        ]
      : [
          "Distribution board repairs",
          "Short-circuit troubleshooting",
          "Hidden leak detection",
          "Drain blockage clearing",
          "Water pump repair",
          "Combined electrician + plumber visit",
        ];

  return (
    <footer
      className="border-t border-slate-800 bg-slate-navy py-12 text-slate-300 sm:py-16"
      id="contact"
    >
      <div className="mx-auto max-w-container px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-12">
          <div className="space-y-4 lg:col-span-4">
            <div className="flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded bg-safety-amber text-slate-navy">
                <HeaderIcon className="h-6 w-6" name="brand" />
              </span>
              <strong className="font-display text-lg text-white">
                {messages.brandName}
              </strong>
            </div>
            <p className="text-sm leading-6 text-slate-400">
              {copy(content.footer.description)}
            </p>
            <p className="flex items-center gap-2 text-xs font-semibold text-emerald-300">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              {copy(content.footer.availability)}
            </p>
          </div>

          <div className="lg:col-span-2">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              {copy(content.footer.navigation)}
            </h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {messages.nav.map((item) => (
                <li key={item.id}>
                  <a
                    className="transition-colors hover:text-safety-amber"
                    href={`#${item.id}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h2 className="mb-3 text-sm font-bold uppercase tracking-wider text-white">
              {copy(content.footer.tradeServices)}
            </h2>
            <ul className="space-y-2 text-sm text-slate-400">
              {serviceLinks.map((service) => (
                <li key={service}>{service}</li>
              ))}
            </ul>
          </div>

          <div className="space-y-3 lg:col-span-3">
            <h2 className="text-sm font-bold uppercase tracking-wider text-white">
              {copy(content.footer.contact)}
            </h2>
            <p className="flex items-start gap-2 text-sm text-slate-300">
              <HeaderIcon className="mt-0.5 h-5 w-5 shrink-0 text-safety-amber" name="location" />
              {copy(content.footer.address)}
            </p>
            <ConversionLink
              action="phone"
              className="flex items-center gap-2 text-sm font-bold text-white transition-colors hover:text-safety-amber"
              href="tel:0533995879"
            >
              <HeaderIcon className="h-5 w-5 text-safety-amber" name="phone" />
              <bdi dir="ltr">053 399 5879</bdi>
            </ConversionLink>
            <ConversionLink
              action="whatsapp"
              className="flex items-center gap-2 text-sm font-semibold text-emerald-300 transition-colors hover:text-emerald-200"
              href="https://wa.me/966533995879"
              rel="noopener noreferrer"
              target="_blank"
            >
              <HeaderIcon className="h-5 w-5" name="whatsapp" />
              WhatsApp
            </ConversionLink>
            <p className="text-sm text-slate-400">
              {copy(content.footer.hours)}
            </p>
            <Link
              className="inline-flex min-h-10 items-center gap-2 rounded border border-slate-700 bg-slate-800 px-3 py-2 text-xs font-semibold text-slate-200 transition-colors hover:bg-slate-700"
              href={`/${locale === "en-US" ? "ar-SA" : "en-US"}`}
            >
              {locale === "ar-SA" ? "View English version" : "عرض النسخة العربية"}
            </Link>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-6 text-center text-xs text-slate-500 sm:flex-row sm:text-start">
          <p>{copy(content.footer.copyright)}</p>
          <a
            className="hover:text-slate-300"
            href="#faq"
          >
            {copy(content.footer.faqLink)}
          </a>
        </div>
      </div>
    </footer>
  );
}

export function LandingSections({ content, locale }: LandingSectionsProps) {
  return (
    <>
      <main>
        <HeroSection content={content} locale={locale} />
        <div className="px-4 py-6 sm:px-6 lg:px-8">
          <AdSlot label={copy(content.adLabel)} size="leaderboard" />
        </div>
        <MetricsSection content={content} locale={locale} />
        <WhySection content={content} locale={locale} />
        <ServicesSection content={content} locale={locale} />
        <PricingSection content={content} locale={locale} />
        <CoverageSection content={content} />
        <ReviewsSection content={content} locale={locale} />
        <FAQSection content={content} locale={locale} />
      </main>
      <SiteFooter content={content} locale={locale} />
    </>
  );
}
