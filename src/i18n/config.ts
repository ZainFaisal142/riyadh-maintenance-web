export const locales = ["en-US", "ar-SA"] as const;

export type Locale = (typeof locales)[number];
export type TextDirection = "ltr" | "rtl";

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value);
}

export function getDirection(locale: Locale): TextDirection {
  return locale === "ar-SA" ? "rtl" : "ltr";
}

export function getOtherLocale(locale: Locale): Locale {
  return locale === "en-US" ? "ar-SA" : "en-US";
}
