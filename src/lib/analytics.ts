export type ConversionAction = "phone" | "whatsapp";

declare global {
  interface Window {
    dataLayer?: Array<Record<string, string>>;
  }
}

export function trackConversion(action: ConversionAction) {
  if (typeof window === "undefined") {
    return;
  }

  const event = {
    event: "maintenance_conversion",
    conversion_action: action,
  };

  window.dataLayer = window.dataLayer ?? [];
  window.dataLayer.push(event);
  window.dispatchEvent(new CustomEvent("maintenance:conversion", { detail: event }));
}
