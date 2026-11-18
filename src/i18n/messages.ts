export interface NavigationItem {
  id: string;
  label: string;
  mobileLabel: string;
}

export interface HeaderMessages {
  title: string;
  description: string;
  emergencyPrefix: string;
  location: string;
  callNow: string;
  whatsapp: string;
  brandName: string;
  brandDescriptor: string;
  navigationLabel: string;
  nav: readonly NavigationItem[];
  switchLanguage: string;
  languageName: string;
  callTechnician: string;
  openMenu: string;
  closeMenu: string;
}

export const headerMessages = {
  "en-US": {
    title:
      "24/7 Emergency & Routine Electrical & Plumbing in Riyadh | Riyadh Maintenance Pro",
    description:
      "24/7 electrical and plumbing maintenance in Riyadh, with emergency dispatch based in Al-Munsiyah.",
    emergencyPrefix: "24/7 Emergency Dispatch",
    location: "Al-Munsiyah HQ",
    callNow: "Call Now",
    whatsapp: "WhatsApp",
    brandName: "Riyadh Maintenance Pro",
    brandDescriptor: "Electricians & Plumbers",
    navigationLabel: "Main navigation",
    nav: [
      { id: "home", label: "Home", mobileLabel: "Home" },
      { id: "services", label: "Services", mobileLabel: "Categorized Services" },
      { id: "pricing", label: "Pricing", mobileLabel: "2026 Pricing Table" },
      {
        id: "why-choose-us",
        label: "Why Choose Us",
        mobileLabel: "Dual-Service Advantage",
      },
      { id: "coverage", label: "Al-Munsiyah HQ", mobileLabel: "Riyadh Coverage" },
      { id: "reviews", label: "Reviews", mobileLabel: "Customer Reviews" },
      { id: "faq", label: "FAQ", mobileLabel: "Frequently Asked Questions" },
      { id: "contact", label: "Contact", mobileLabel: "Contact & Dispatch" },
    ],
    switchLanguage: "Switch language to Arabic",
    languageName: "العربية",
    callTechnician: "Emergency Dispatch",
    openMenu: "Open navigation menu",
    closeMenu: "Close navigation menu",
  },
  "ar-SA": {
    title: "طوارئ وصيانة كهرباء وسباكة 24 ساعة في الرياض | الرياض برو للصيانة",
    description:
      "خدمات صيانة الكهرباء والسباكة على مدار الساعة في الرياض، مع مركز طوارئ في حي المونسية.",
    emergencyPrefix: "مركز طوارئ 24/7",
    location: "مقر حي المونسية",
    callNow: "اتصل الآن",
    whatsapp: "واتساب",
    brandName: "الرياض برو للصيانة",
    brandDescriptor: "كهرباء وسباكة 24 ساعة",
    navigationLabel: "التنقل الرئيسي",
    nav: [
      { id: "home", label: "الرئيسية", mobileLabel: "الرئيسية" },
      { id: "services", label: "الخدمات", mobileLabel: "الخدمات المعتمدة" },
      { id: "pricing", label: "الأسعار", mobileLabel: "جدول أسعار 2026" },
      {
        id: "why-choose-us",
        label: "ميزتنا",
        mobileLabel: "ميزة الكهربائي والسباك",
      },
      { id: "coverage", label: "حي المونسية", mobileLabel: "تغطية الرياض" },
      { id: "reviews", label: "آراء العملاء", mobileLabel: "تقييمات العملاء" },
      { id: "faq", label: "الأسئلة الشائعة", mobileLabel: "الأسئلة الشائعة" },
      { id: "contact", label: "اتصل بنا", mobileLabel: "التواصل والطوارئ" },
    ],
    switchLanguage: "Switch language to English",
    languageName: "English",
    callTechnician: "طلب فني طوارئ",
    openMenu: "فتح قائمة التنقل",
    closeMenu: "إغلاق قائمة التنقل",
  },
} as const satisfies Record<"en-US" | "ar-SA", HeaderMessages>;
