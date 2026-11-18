import type { Locale } from "@/i18n/config";

export type LocalizedText = string;

interface ServiceDescription {
  title: LocalizedText;
  description: LocalizedText;
}

interface ServiceGroup {
  title: LocalizedText;
  description: LocalizedText;
  prompt: LocalizedText;
  action: LocalizedText;
  items: readonly ServiceDescription[];
}

interface PricingPlan {
  title: LocalizedText;
  category: LocalizedText;
  description: LocalizedText;
  amount: number;
  amountNote: LocalizedText;
  features: readonly LocalizedText[];
  action: LocalizedText;
  featured?: boolean;
}

interface CoverageZone {
  title: LocalizedText;
  description: LocalizedText;
}

interface Testimonial {
  quote: LocalizedText;
  name: LocalizedText;
  role: LocalizedText;
  category: LocalizedText;
}

interface FAQItem {
  question: LocalizedText;
  answer: LocalizedText;
}

export interface LandingContent {
  hero: {
    availability: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    callAction: LocalizedText;
    whatsappAction: LocalizedText;
    pricingAction: LocalizedText;
    rating: LocalizedText;
    hubTitle: LocalizedText;
    electrician: LocalizedText;
    plumber: LocalizedText;
    arrival: LocalizedText;
    arrivalTime: LocalizedText;
  };
  metrics: readonly { value: string; label: LocalizedText }[];
  why: {
    badge: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    benefits: readonly LocalizedText[];
    callAction: LocalizedText;
    whatsappAction: LocalizedText;
  };
  services: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    groups: readonly ServiceGroup[];
  };
  pricing: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    plans: readonly PricingPlan[];
    note: LocalizedText;
  };
  coverage: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    zones: readonly CoverageZone[];
    mapTitle: LocalizedText;
    mapCaption: LocalizedText;
    mapAddress: LocalizedText;
    action: LocalizedText;
  };
  reviews: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    testimonials: readonly Testimonial[];
  };
  faq: {
    eyebrow: LocalizedText;
    title: LocalizedText;
    description: LocalizedText;
    items: readonly FAQItem[];
    prompt: LocalizedText;
    callAction: LocalizedText;
    whatsappAction: LocalizedText;
  };
  footer: {
    description: LocalizedText;
    availability: LocalizedText;
    navigation: LocalizedText;
    tradeServices: LocalizedText;
    contact: LocalizedText;
    address: LocalizedText;
    hours: LocalizedText;
    copyright: LocalizedText;
    faqLink: LocalizedText;
  };
  adLabel: LocalizedText;
}

export const landingContent = {
  "en-US": {
    hero: {
      availability: "Available Now 24/7",
      title: "24/7 Electrician & Plumber in Riyadh",
      description:
        "Facing a blackout, burst pipe, or a tripping distribution board? Our emergency team is based in Al-Munsiyah, with a 15–30 minute arrival window across Riyadh.",
      callAction: "Direct Call · 053 399 5879",
      whatsappAction: "Chat on WhatsApp",
      pricingAction: "View 2026 Rates",
      rating: "5.0 rating · 5,000+ completed repairs",
      hubTitle: "Al-Munsiyah Dispatch Hub",
      electrician: "Emergency electrician",
      plumber: "Emergency plumber",
      arrival: "Arrival window",
      arrivalTime: "15–30 minutes",
    },
    metrics: [
      { value: "+10", label: "Years of experience in Riyadh" },
      { value: "+5,000", label: "Services completed" },
      { value: "100%", label: "Satisfaction guarantee" },
      { value: "24/7", label: "Emergency response" },
    ],
    why: {
      badge: "Dual-certified advantage",
      title: "Electrician + plumber in one visit",
      description:
        "Skip separate callout fees and appointments. Our coordinated team can handle connected electrical and plumbing issues in one visit, with modern diagnostic tools and repair work aligned with Saudi building requirements.",
      benefits: [
        "One coordinated dispatch",
        "Non-destructive diagnostics",
        "Written repair warranty",
      ],
      callAction: "Book a dual-service visit",
      whatsappAction: "Ask on WhatsApp",
    },
    services: {
      eyebrow: "Complete trade solutions",
      title: "Electrical and plumbing services",
      description:
        "From urgent faults to routine maintenance, our technicians support homes and businesses across Riyadh.",
      groups: [
        {
          title: "Electrical services",
          description: "Power restoration and high-load distribution",
          prompt: "Need emergency electrical help?",
          action: "Request an electrician",
          items: [
            {
              title: "Wiring and rewiring",
              description:
                "Troubleshooting short circuits, replacing damaged cables, and rewiring.",
            },
            {
              title: "Distribution boards",
              description:
                "Circuit-breaker faults, earth-leakage checks, and panel upgrades.",
            },
            {
              title: "Lighting and outlets",
              description:
                "Installation and repair of lighting, sockets, switches, and controls.",
            },
            {
              title: "Pumps and water heaters",
              description:
                "Pump controls, pressure switches, and water-heater wiring.",
            },
          ],
        },
        {
          title: "Plumbing services",
          description: "Leak detection and drain clearing",
          prompt: "Dealing with a leak or blockage?",
          action: "Request a plumber",
          items: [
            {
              title: "Non-destructive leak detection",
              description:
                "Acoustic and thermal checks to locate concealed leaks with less disruption.",
            },
            {
              title: "Burst-pipe repair",
              description:
                "Isolation and repair of damaged supply lines, valves, and connections.",
            },
            {
              title: "Drain and blockage clearing",
              description:
                "Mechanical clearing for kitchen drains, toilets, and inspection chambers.",
            },
            {
              title: "Filters and sanitary fixtures",
              description:
                "Water-filter setup, tank care, taps, and concealed flush systems.",
            },
          ],
        },
      ],
    },
    pricing: {
      eyebrow: "Clear, upfront pricing",
      title: "Standard callout fees · 2026",
      description:
        "Know the baseline visit fee before booking. The technician provides an itemized repair quote before any work begins.",
      plans: [
        {
          category: "Scheduled inspection",
          title: "Single-trade inspection",
          description: "Daytime electrician or plumber visit.",
          amount: 99,
          amountNote: "Waived when repair is approved",
          features: [
            "On-site inspection",
            "Diagnostic readings",
            "Itemized quote",
          ],
          action: "Schedule an inspection",
        },
        {
          category: "Immediate priority",
          title: "24/7 emergency dispatch",
          description: "Emergency callout and assessment.",
          amount: 149,
          amountNote: "15–30 minute arrival window",
          features: [
            "Priority day and night response",
            "Mobile workshop dispatch",
            "Written repair warranty",
          ],
          action: "Request urgent help",
          featured: true,
        },
        {
          category: "Combined visit",
          title: "Electrician + plumber",
          description: "Two trades coordinated in one visit.",
          amount: 199,
          amountNote: "One combined visit",
          features: [
            "Electrical and plumbing check",
            "One coordinated dispatch",
            "No duplicate trip fee",
          ],
          action: "Book on WhatsApp",
        },
      ],
      note:
        "Parts and additional repair work are quoted separately and require your approval before work starts.",
    },
    coverage: {
      eyebrow: "Al-Munsiyah dispatch hub",
      title: "Based in Al-Munsiyah, serving Riyadh",
      description:
        "Our dispatch point in Al-Munsiyah supports emergency visits across northeast, east, and greater Riyadh. Arrival times vary with location and traffic.",
      zones: [
        {
          title: "Nearby districts · 15–20 minutes",
          description:
            "Al-Munsiyah, Al-Yarmouk, Qurtubah, Al-Rimal, Granada, and Al-Shuhada.",
        },
        {
          title: "Wider northeast · 20–30 minutes",
          description:
            "Al-Narjis, Al-Yasmin, Al-Malqa, Al-Sahafah, Al-Rawdah, and Al-Hamra.",
        },
        {
          title: "Across Riyadh · 24/7",
          description:
            "Dispatch coverage for homes, residential communities, and commercial facilities.",
        },
      ],
      mapTitle: "Al-Munsiyah · Riyadh",
      mapCaption: "Service coverage area",
      mapAddress: "Al-Munsiyah District, Riyadh, Saudi Arabia",
      action: "Check availability by phone",
    },
    reviews: {
      eyebrow: "Customer feedback",
      title: "Experiences from Riyadh residents",
      description: "Feedback from homeowners across Al-Munsiyah and Riyadh.",
      testimonials: [
        {
          quote:
            "At 2:00 AM on a Friday, our villa breaker failed and the air conditioning lost power. The electrician arrived in Al-Munsiyah in 18 minutes and replaced the faulty breaker safely.",
          name: "Fahad Al-Otaibi",
          role: "Villa owner · Al-Munsiyah",
          category: "Emergency electrical repair",
        },
        {
          quote:
            "We had a concealed bathroom leak affecting a nearby electrical circuit. The plumber and electrician arrived together and resolved both issues in one visit.",
          name: "Eng. Sultan Al-Ghamdi",
          role: "Homeowner · Al-Yarmouk",
          category: "Combined visit",
        },
        {
          quote:
            "The dispatch fee was clear before the visit. They checked the booster pump, replaced the relay, and provided a written warranty.",
          name: "Maha Al-Dossari",
          role: "Resident · Qurtubah",
          category: "Pump repair",
        },
      ],
    },
    faq: {
      eyebrow: "Frequently asked questions",
      title: "Answers about emergency service",
      description:
        "Response times, fees, warranties, and our combined trade visit.",
      items: [
        {
          question: "How soon can a technician arrive?",
          answer:
            "Nearby districts around Al-Munsiyah have a 15–30 minute arrival window. Arrival depends on your location and traffic; call to confirm current availability.",
        },
        {
          question: "How are emergency repair fees calculated?",
          answer:
            "The emergency callout and assessment fee is 149 SAR; scheduled daytime inspections are 99 SAR. After inspection, you receive an itemized repair quote, and work starts only with your approval.",
        },
        {
          question: "Do repairs include a warranty?",
          answer:
            "Repair labor and installation include a six-month written warranty. Manufacturer terms apply to replacement parts.",
        },
        {
          question: "What is the electrician and plumber combined visit?",
          answer:
            "Both trades are dispatched together for connected issues, such as a leak affecting electrical fixtures. The stated combined callout fee is 199 SAR.",
        },
      ],
      prompt: "Have a specific emergency?",
      callAction: "Call 053 399 5879",
      whatsappAction: "WhatsApp",
    },
    footer: {
      description:
        "24/7 electrical and plumbing maintenance in Riyadh, with an emergency dispatch point in Al-Munsiyah.",
      availability: "Emergency dispatch available 24 hours a day",
      navigation: "Quick links",
      tradeServices: "Emergency services",
      contact: "Contact and dispatch",
      address: "Al-Munsiyah District, Riyadh, Saudi Arabia",
      hours: "Open 24 hours · 7 days a week",
      copyright: "© 2026 Riyadh Maintenance Pro. All rights reserved.",
      faqLink: "Frequently asked questions",
    },
    adLabel: "Advertisement",
  },
  "ar-SA": {
    hero: {
      availability: "متاح الآن على مدار 24 ساعة",
      title: "فني كهربائي وسباك للطوارئ في الرياض 24/7",
      description:
        "هل تواجه انقطاعاً في الكهرباء أو انفجار ماسورة أو عطلاً في لوحة التوزيع؟ يتمركز فريق الطوارئ في حي المونسية مع وقت وصول متوقع من 15 إلى 30 دقيقة في الرياض.",
      callAction: "اتصال مباشر · 053 399 5879",
      whatsappAction: "محادثة واتساب",
      pricingAction: "عرض أسعار 2026",
      rating: "تقييم 5.0 · أكثر من 5,000 عملية إصلاح",
      hubTitle: "مركز التوجيه في حي المونسية",
      electrician: "فني كهرباء طوارئ",
      plumber: "سباك طوارئ",
      arrival: "وقت الوصول",
      arrivalTime: "15–30 دقيقة",
    },
    metrics: [
      { value: "+10", label: "سنوات خبرة في الرياض" },
      { value: "+5,000", label: "خدمة صيانة منجزة" },
      { value: "100%", label: "ضمان الرضا" },
      { value: "24/7", label: "استجابة للطوارئ" },
    ],
    why: {
      badge: "ميزة التخصصين في زيارة واحدة",
      title: "كهربائي وسباك في زيارة واحدة",
      description:
        "استغنِ عن رسوم الزيارات المنفصلة وتعدد المواعيد. ينسق فريقنا بين أعمال الكهرباء والسباكة المرتبطة باستخدام أدوات فحص حديثة وبما يتوافق مع متطلبات كود البناء السعودي.",
      benefits: [
        "ترحيل موحد للفنيين",
        "أجهزة فحص دون تكسير",
        "ضمان خطي على الإصلاح",
      ],
      callAction: "احجز زيارة مزدوجة",
      whatsappAction: "استفسر عبر واتساب",
    },
    services: {
      eyebrow: "حلول فنية متكاملة",
      title: "خدمات الكهرباء والسباكة",
      description:
        "من أعطال الطوارئ إلى الصيانة الدورية، نخدم المنازل والمنشآت في أنحاء الرياض.",
      groups: [
        {
          title: "خدمات الكهرباء",
          description: "إعادة التيار ومعالجة الأحمال العالية",
          prompt: "هل تحتاج إلى مساعدة كهربائية عاجلة؟",
          action: "طلب كهربائي",
          items: [
            {
              title: "تمديد وإصلاح الأسلاك",
              description:
                "كشف الالتماسات واستبدال الكابلات التالفة وتمديد الأسلاك.",
            },
            {
              title: "لوحات التوزيع والقواطع",
              description:
                "فحص أعطال القواطع والتسريب الأرضي وتحديث لوحات الكهرباء.",
            },
            {
              title: "الإنارة والأفياش",
              description:
                "تركيب وصيانة الإنارة والمقابس والمفاتيح وأنظمة التحكم.",
            },
            {
              title: "المضخات وسخانات المياه",
              description:
                "صيانة لوحات تحكم المضخات ومفاتيح الضغط وتوصيلات السخانات.",
            },
          ],
        },
        {
          title: "خدمات السباكة",
          description: "كشف التسربات وتسليك المصارف",
          prompt: "هل لديك تسرب أو انسداد؟",
          action: "طلب سباك",
          items: [
            {
              title: "كشف التسربات دون تكسير",
              description:
                "فحص صوتي وحراري لتحديد التسربات المخفية مع تقليل الأضرار.",
            },
            {
              title: "إصلاح المواسير المكسورة",
              description:
                "عزل وإصلاح خطوط المياه والصمامات والوصلات المتضررة.",
            },
            {
              title: "تسليك المصارف والانسدادات",
              description:
                "تسليك ميكانيكي لمصارف المطابخ والمراحيض وغرف التفتيش.",
            },
            {
              title: "الفلاتر والأدوات الصحية",
              description:
                "تركيب فلاتر المياه والعناية بالخزانات والخلاطات وأنظمة الطرد.",
            },
          ],
        },
      ],
    },
    pricing: {
      eyebrow: "تسعير واضح ومسبق",
      title: "رسوم الزيارة الأساسية · 2026",
      description:
        "اعرف رسوم الزيارة الأساسية قبل الحجز. يقدم الفني عرض سعر مفصلاً للإصلاح قبل بدء أي عمل.",
      plans: [
        {
          category: "فحص مجدول",
          title: "فحص تخصص واحد",
          description: "زيارة نهارية لفني كهرباء أو سباكة.",
          amount: 99,
          amountNote: "تُخصم عند اعتماد الإصلاح",
          features: [
            "فحص ميداني",
            "قراءة أجهزة الفحص",
            "عرض سعر مفصل",
          ],
          action: "حجز موعد كشف",
        },
        {
          category: "أولوية فورية",
          title: "ترحيل طوارئ 24/7",
          description: "رسوم زيارة الطوارئ والفحص.",
          amount: 149,
          amountNote: "وقت وصول متوقع 15–30 دقيقة",
          features: [
            "استجابة ليلية ونهارية",
            "إرسال ورشة صيانة متنقلة",
            "ضمان خطي على الإصلاح",
          ],
          action: "طلب فني طوارئ",
          featured: true,
        },
        {
          category: "زيارة مشتركة",
          title: "كهربائي + سباك",
          description: "تخصصان في زيارة منسقة واحدة.",
          amount: 199,
          amountNote: "زيارة مشتركة",
          features: [
            "فحص الكهرباء والسباكة",
            "ترحيل موحد",
            "من دون رسوم انتقال مكررة",
          ],
          action: "الحجز عبر واتساب",
        },
      ],
      note:
        "تُسعّر قطع الغيار وأعمال الإصلاح الإضافية بشكل منفصل، ولا يبدأ العمل إلا بعد موافقتك.",
    },
    coverage: {
      eyebrow: "مركز توجيه حي المونسية",
      title: "مقرنا في المونسية ونخدم الرياض",
      description:
        "يدعم مركز التوجيه في حي المونسية زيارات الطوارئ في شمال وشرق الرياض ومختلف أحيائها. يختلف وقت الوصول حسب الموقع وحركة السير.",
      zones: [
        {
          title: "الأحياء القريبة · 15–20 دقيقة",
          description:
            "المونسية، اليرموك، قرطبة، الرمال، غرناطة، والشهداء.",
        },
        {
          title: "شمال وشرق الرياض · 20–30 دقيقة",
          description:
            "النرجس، الياسمين، الملقا، الصحافة، الروضة، والحمراء.",
        },
        {
          title: "جميع أحياء الرياض · 24/7",
          description:
            "تغطية للمنازل والمجمعات السكنية والمنشآت التجارية.",
        },
      ],
      mapTitle: "حي المونسية · الرياض",
      mapCaption: "نطاق تقديم الخدمة",
      mapAddress: "حي المونسية، الرياض، المملكة العربية السعودية",
      action: "استفسر هاتفياً عن التوفر",
    },
    reviews: {
      eyebrow: "آراء العملاء",
      title: "تجارب سكان الرياض",
      description: "آراء أصحاب المنازل في حي المونسية ومختلف أحياء الرياض.",
      testimonials: [
        {
          quote:
            "في الساعة الثانية صباحاً تعطل قاطع الفيلا وانقطعت الكهرباء عن المكيفات. وصل فني الكهرباء إلى المونسية خلال 18 دقيقة واستبدل القاطع التالف بأمان.",
          name: "فهد العتيبي",
          role: "مالك فيلا · حي المونسية",
          category: "إصلاح كهرباء طارئ",
        },
        {
          quote:
            "كان لدينا تسرب مخفي في الحمام أثر على دائرة كهربائية قريبة. وصل السباك والكهربائي معاً وأنهيا المشكلتين في زيارة واحدة.",
          name: "م. سلطان الغامدي",
          role: "مالك منزل · حي اليرموك",
          category: "زيارة مشتركة",
        },
        {
          quote:
            "تم توضيح رسوم الزيارة مسبقاً. فحصوا مضخة المياه واستبدلوا المرحل وسلموني ضماناً خطياً.",
          name: "مها الدوسري",
          role: "مقيمة · حي قرطبة",
          category: "صيانة مضخات",
        },
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "إجابات حول خدمات الطوارئ",
      description: "مدة الوصول والرسوم والضمان والزيارة المشتركة.",
      items: [
        {
          question: "متى يصل فني الصيانة؟",
          answer:
            "تتراوح مدة الوصول للأحياء القريبة من المونسية بين 15 و30 دقيقة. يعتمد الوصول على موقعك وحركة السير؛ يرجى الاتصال لتأكيد التوفر الحالي.",
        },
        {
          question: "كيف تُحتسب رسوم الإصلاح الطارئ؟",
          answer:
            "رسوم ترحيل الطوارئ والفحص 149 ريالاً، ورسوم الفحص النهاري المجدول 99 ريالاً. بعد الفحص يقدم الفني عرضاً مفصلاً، ولا يبدأ العمل إلا بموافقتك.",
        },
        {
          question: "هل تقدمون ضماناً على الإصلاح؟",
          answer:
            "يشمل العمل والتركيب ضماناً خطياً لمدة ستة أشهر، وتسري شروط الشركة المصنعة على قطع الغيار.",
        },
        {
          question: "ما هي الزيارة المشتركة للكهربائي والسباك؟",
          answer:
            "يتم إرسال فنيي التخصصين معاً للأعطال المرتبطة، مثل تسرب يؤثر على التمديدات الكهربائية. رسوم الزيارة المشتركة المذكورة هي 199 ريالاً.",
        },
      ],
      prompt: "هل تواجه حالة طارئة؟",
      callAction: "اتصل 053 399 5879",
      whatsappAction: "واتساب",
    },
    footer: {
      description:
        "خدمات صيانة الكهرباء والسباكة على مدار الساعة في الرياض، مع مركز طوارئ في حي المونسية.",
      availability: "خدمة الطوارئ متاحة على مدار 24 ساعة",
      navigation: "روابط سريعة",
      tradeServices: "خدمات الطوارئ",
      contact: "التواصل والطوارئ",
      address: "حي المونسية، الرياض، المملكة العربية السعودية",
      hours: "متاح 24 ساعة · طوال أيام الأسبوع",
      copyright: "© 2026 الرياض برو للصيانة. جميع الحقوق محفوظة.",
      faqLink: "الأسئلة الشائعة",
    },
    adLabel: "مساحة إعلانية",
  },
} as const satisfies Record<Locale, LandingContent>;

export function getLandingContent(locale: Locale): LandingContent {
  return landingContent[locale];
}

