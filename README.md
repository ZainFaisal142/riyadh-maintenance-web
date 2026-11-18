# Riyadh Maintenance Pro

Bilingual emergency electrical and plumbing service website for Riyadh, built with Next.js, TypeScript, and Tailwind CSS.

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The root URL redirects to English; the localized pages are available at `/en-US` and `/ar-SA`.

Copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the canonical production origin before deployment. This value is used for canonical metadata, the sitemap, and robots metadata.

## Build and lint

```bash
npm run build
npm run lint
```

The site includes the bilingual landing page, call/WhatsApp actions, localized metadata, structured data, and reserved fixed-size ad placements. The Al-Munsiyah coverage visual is a provider-free illustration; it does not display live traffic or fleet telemetry.

Phone and WhatsApp clicks emit `maintenance_conversion` events to `window.dataLayer` and dispatch a `maintenance:conversion` browser event. Connect a consent-aware analytics provider before enabling third-party analytics.