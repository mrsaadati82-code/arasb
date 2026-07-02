import { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import { type Locale, type TranslationMap, detectLocale, setDocumentDirection, LANGUAGES } from './types';

interface I18nContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (key: string, fallback?: string) => string;
  direction: 'rtl' | 'ltr';
  translations: TranslationMap;
}

const I18nContext = createContext<I18nContextType>({
  locale: 'en',
  setLocale: () => {},
  t: (key, fallback) => fallback ?? key,
  direction: 'ltr',
  translations: {},
});

export function useI18n() {
  return useContext(I18nContext);
}

// Default translations for each language - these are the static site texts
const defaultTranslations: Record<Locale, TranslationMap> = {
  en: {},
  fa: {
    // Navbar
    'nav.home': 'خانه',
    'nav.products': 'محصولات',
    'nav.services': 'خدمات',
    'nav.process': 'فرآیند',
    'nav.contact': 'تماس',
    'nav.contactUs': 'تماس با ما',
    'nav.globalPartner': 'شریک تجارت جهانی',
    'nav.email': 'info@arasbtrading.com',
    'nav.region': 'تهران، ایران • منطقه خاورمیانه و اروپا',

    // Hero
    'hero.badge': 'شریک صادراتی پیشرو',
    'hero.title1': 'دسترسی شما را توانمند می‌سازیم به',
    'hero.title2': 'صادرات ممتاز ایرانی',
    'hero.description': 'متخصص در تأمین محصولات ممتاز ایرانی برای بازارهای اروپایی و عربی. ما کل چرخه صادرات را با دقت و اطمینان مدیریت می‌کنیم.',
    'hero.exploreProducts': 'مشاهده محصولات',
    'hero.ourServices': 'خدمات ما',
    'hero.scrollToExplore': 'اسکرول کنید',

    // Expertise
    'expertise.title1': 'شریک استراتژیک شما در',
    'expertise.title2': 'لجستیک تجارت جهانی',
    'expertise.description': 'در حالی که ما حامل لجستیکی نیستیم، تیم ما کل فرآیند را با شرکای حمل‌ونقل مورد اعتماد مدیریت می‌کند تا اطمینان حاصل شود بار شما به طور مؤثر و مطابق با الزامات تجارت بین‌الملل حرکت می‌کند.',
    'expertise.item1': 'مدیریت صادرات حرفه‌ای',
    'expertise.item2': 'راه‌حل‌های مقرون‌به‌صرفه دریایی',
    'expertise.item3': 'مانیتورینگ لحظه‌ای ترانزیت اقیانوسی',
    'expertise.item4': 'تخلیه و تحویل نهایی روان',
    'expertise.item5': 'کنترل کیفیت سختگیرانه در مبدأ',
    'expertise.learnMore': 'بیشتر بدانید',
    'expertise.years': 'سال',
    'expertise.experience': 'تجربه صنعتی',

    // Products
    'products.title': 'محصولات برجسته ما',
    'products.description': 'ما طیف متنوعی از محصولات ممتاز ایرانی را با بالاترین استانداردهای صادرات بین‌المللی تأمین می‌کنیم.',
    'products.pistachios.title': 'پسته ممتاز',
    'products.pistachios.description': 'پسته‌های ایرانی انتخابی با کیفیت برتر و بسته‌بندی استاندارد.',
    'products.pistachios.category': 'آجیل',
    'products.saffron.title': 'زعفران نفیس',
    'products.saffron.description': 'نگین‌های زعفران بهترین جهان، از مزارع تأییدشده.',
    'products.saffron.category': 'ادویه‌ها',
    'products.dates.title': 'خرمای طبیعی',
    'products.dates.description': 'خرمای غنی و کاراملی برای توزیع بین‌المللی.',
    'products.dates.category': 'میوه‌های تازه',
    'products.petroleum.title': 'پتروشیمی',
    'products.petroleum.description': 'مواد اولیه ضروری برای صنایع تولید و انرژی جهانی.',
    'products.petroleum.category': 'صنعتی',

    // Services
    'services.title': 'مدیریت صادرات متخصص',
    'services.description': 'آراسپ تریدینگ کل فرآیند تجاری و صادراتی را از طرف شما مدیریت می‌کند و تضمین می‌کند کالاهای شما به صورت کارآمد، مطابق و در زمان مقرر حرکت کنند.',
    'services.compliance': 'نرخ انطباق',
    'services.partnerCountries': 'کشورهای شریک',
    'services.overland.title': 'حمل‌ونقل زمینی',
    'services.overland.description': 'حمل‌ونقل جاده‌ای مطمئن برای صادرات از ایران به اروپا و خاورمیانه.',
    'services.air.title': 'حمل هوایی',
    'services.air.description': 'مدیریت سریع و کنترل‌شده برای کالاهای حساس به زمان و محصولات تازه.',
    'services.maritime.title': 'راه‌حل‌های دریایی',
    'services.maritime.description': 'صادرات فله‌ای و کانتینری مقرون‌به‌صرفه از طریق خطوط کشتیرانی جهانی.',
    'services.origin.title': 'بارگیری در مبدأ',
    'services.origin.description': 'بسته‌بندی حرفه‌ای، پالت‌بندی و پرکردن کانتینر در منبع.',
    'services.quality.title': 'تضمین کیفیت',
    'services.quality.description': 'انتخاب تأمین‌کننده و نظارت بر کیفیت محصول در کل فرآیند.',
    'services.documentation.title': 'مستندات صادرات',
    'services.documentation.description': 'مدیریت کامل مجوزهای صادرات، ترخیص گمرکی و انطباق تجاری.',

    // Showcase
    'showcase.saffron.badge': 'طلای سرخ',
    'showcase.saffron.title1': 'زعفران اصیل',
    'showcase.saffron.title2': 'ایرانی (گرید A)',
    'showcase.saffron.description': 'با عطر شدید و رنگ عمیق شناخته می‌شود، زعفران ما دست‌چین و برای خلوص آزمایش شده در آزمایشگاه‌های بین‌المللی است. تأمین عمده با گواهی کامل برای توزیع‌کنندگان جهانی.',
    'showcase.saffron.purity': 'خلوص ارگانیک',
    'showcase.saffron.grade': 'کیفیت گریید A',
    'showcase.pistachio.badge': 'تعالی مغذی',
    'showcase.pistachio.title1': 'پسته ممتاز',
    'showcase.pistachio.title2': 'ایرانی',
    'showcase.pistachio.description': 'صادرات انواع پسته شامل اکبری، احمدآقایی و فندقی. فرآوری‌شده در تأسیسات پیشرفته با حداکثر تازگی و استانداردهای بهداشتی.',
    'showcase.pistachio.f1': 'اندازه‌های درجه‌بندی متنوع',
    'showcase.pistachio.f2': 'تست آفلاتوکسین و تأییدشده',
    'showcase.pistachio.f3': 'بسته‌بندی صادراتی سفارشی',

    // Process
    'process.title': 'فرآیند صادرات روان ما',
    'process.description': 'از ایران تا انبار شما، هر جزئیات را مدیریت می‌کنیم.',
    'process.step1.title': 'انتخاب و کیفیت',
    'process.step1.description': 'با تأمین‌کنندگان تأییدشده و بازرسان مستقل هماهنگ می‌کنیم تا تعالی محصول تضمین شود.',
    'process.step2.title': 'بارگیری و آماده‌سازی',
    'process.step2.description': 'بسته‌بندی حرفه‌ای و پرکردن کانتینر با رعایت کامل استانداردهای دریایی.',
    'process.step3.title': 'مدیریت مسیر',
    'process.step3.description': 'نظارت مستمر بر مسیر با ردیابی لحظه‌ای و به‌روزرسانی برنامه.',
    'process.step4.title': 'تحویل نهایی',
    'process.step4.description': 'کمک به تخلیه، پشتیبانی ترخیص گمرکی و هماهنگی با نمایندگان محلی.',

    // Countries
    'countries.title': 'گستره جهانی ما',

    // Commitment
    'commitment.title': 'تعهد ما به تعالی',
    'commitment.description': 'هدایت‌شده توسط کیفیت و اعتماد، تجربه صادرات را برای شرکای جهانی‌مان بازتعریف می‌کنیم.',
    'commitment.reliability.title': 'اتکاپذیری',
    'commitment.reliability.desc': 'ردیابی شفاف و ارتباط مستمر در طول مسیر صادرات.',
    'commitment.precision.title': 'دقت',
    'commitment.precision.desc': 'مستندسازی دقیق و مدیریت انطباق برای گمرکی بدون مشکل.',
    'commitment.efficiency.title': 'کارایی',
    'commitment.efficiency.desc': 'مسیرهای لجستیکی بهینه و پردازش سریع برای بارهای حساس به زمان.',
    'commitment.partnership.title': 'شراکت',
    'commitment.partnership.desc': 'تعهد بلندمدت به موفقیت و رشد مشتریان ما در بازارهای جهانی.',

    // Contact
    'contact.title': 'ارتباط برقرار کنید',
    'contact.description': 'آماده تأمین محصولات ممتاز هستید؟ تیم ما برای رفع نیازهای صادراتی شما با حرفه‌ای‌ترین خدمات اینجاست.',
    'contact.email': 'ایمیل',
    'contact.phone': 'تماس',
    'contact.visit': 'مشهد',
    'contact.hours': 'ساعات کاری: شنبه - چهارشنبه، ۹:۰۰ - ۱۸:۰۰ (GMT+3:30)',
    'contact.fullName': 'نام کامل',
    'contact.emailAddress': 'آدرس ایمیل',
    'contact.subject': 'موضوع',
    'contact.message': 'پیام',
    'contact.send': 'ارسال پیام',
    'contact.success': 'پیام شما با موفقیت ارسال شد!',
    'contact.error': 'خطا در ارسال پیام. لطفاً دوباره تلاش کنید.',

    // Footer
    'footer.description': 'پیشگام در صادرات ایران. ارائه محصولات با کیفیت ممتاز و راه‌حل‌های لجستیکی حرفه‌ای به بازارهای جهانی.',
    'footer.quickLinks': 'لینک‌های سریع',
    'footer.aboutUs': 'درباره ما',
    'footer.products': 'محصولات',
    'footer.productCategories': 'دسته‌بندی محصولات',
    'footer.freshFruits': 'میوه‌های تازه',
    'footer.driedFruits': 'آجیل',
    'footer.spices': 'ادویه‌ها',
    'footer.petroleum': 'نفت و پتروشیمی',
    'footer.petrochemicals': 'پتروشیمی',
    'footer.contactInfo': 'اطلاعات تماس',
    'footer.rights': 'تمامی حقوق محفوظ است.',
  },
  ar: {
    // Navbar
    'nav.home': 'الرئيسية',
    'nav.products': 'المنتجات',
    'nav.services': 'الخدمات',
    'nav.process': 'العملية',
    'nav.contact': 'اتصل بنا',
    'nav.contactUs': 'اتصل بنا',
    'nav.globalPartner': 'شريك التصدير العالمي',
    'nav.email': 'info@arasbtrading.com',
    'nav.region': 'طهران، إيران • منطقة الشرق الأوسط وأوروبا',

    // Hero
    'hero.badge': 'شريك تصدير رائد',
    'hero.title1': 'تمكين وصولك إلى',
    'hero.title2': 'الصادرات الإيرانية الممتازة',
    'hero.description': 'متخصصون في توريد المنتجات الإيرانية الممتازة إلى الأسواق الأوروبية والعربية. ندير دورة التصدير الكاملة بدقة وموثوقية.',
    'hero.exploreProducts': 'استكشف المنتجات',
    'hero.ourServices': 'خدماتنا',
    'hero.scrollToExplore': 'اسحب للاستكشاف',

    // Expertise
    'expertise.title1': 'شريكك الاستراتيجي في',
    'expertise.title2': 'لوجستيات التجارة العالمية',
    'expertise.description': 'بينما لسنا شركة نقل لوجستي، يدير فريقنا العملية بأكملها مع شركاء نقل موثوقين لضمان تحرك بضائعك بكفاءة وامتثال كامل لمتطلبات التجارة الدولية.',
    'expertise.item1': 'إدارة تصدير احترافية',
    'expertise.item2': 'حلول بحرية فعالة من حيث التكلفة',
    'expertise.item3': 'مراقبة العبور البحري في الوقت الفعلي',
    'expertise.item4': 'تفريغ وتسليم نهائي سلس',
    'expertise.item5': 'مراقبة جودة صارمة في المنشأ',
    'expertise.learnMore': 'اعرف المزيد عنا',
    'expertise.years': 'سنة',
    'expertise.experience': 'خبرة صناعية',

    // Products
    'products.title': 'منتجاتنا المميزة',
    'products.description': 'نوفر مجموعة متنوعة من المنتجات الإيرانية الممتازة التي تلبي أعلى معايير التصدير الدولية.',
    'products.pistachios.title': 'فستق ممتاز',
    'products.pistachios.description': 'فستق إيراني مختار بجودة فائقة وتغليف متوافق.',
    'products.pistachios.category': 'فواكه مجففة',
    'products.saffron.title': 'زعفران رفيع',
    'products.saffron.description': 'أجود خيوط الزعفران في العالم من مزارع معتمدة.',
    'products.saffron.category': 'توابل',
    'products.dates.title': 'تمر طبيعي',
    'products.dates.description': 'تمر غني كراميلي مُعَد للتوزيع الدولي.',
    'products.dates.category': 'فواكه طازجة',
    'products.petroleum.title': 'بتروكيماويات',
    'products.petroleum.description': 'مواد أساسية للصناعات التحويلية والطاقة العالمية.',
    'products.petroleum.category': 'صناعي',

    // Services
    'services.title': 'إدارة تصدير متخصصة',
    'services.description': 'تدير أرسب تريدنغ العملية التجارية والتصديرية بالكامل نيابة عنك، مما يضمن تحرك بضائعك بكفاءة وامتثال وفي الوقت المحدد.',
    'services.compliance': 'معدل الامتثال',
    'services.partnerCountries': 'دول شريكة',
    'services.overland.title': 'شحنات برية',
    'services.overland.description': 'نقل بردي موثوق للصادرات من إيران إلى أوروبا والشرق الأوسط.',
    'services.air.title': 'شحن جوي',
    'services.air.description': 'معالجة سريعة ومتحكم بها للبضائع الحساسة للوقت والمنتجات الطازجة.',
    'services.maritime.title': 'حلول بحرية',
    'services.maritime.description': 'صادرات فردية وحاوية فعالة من حيث التكلفة عبر خطوط الشحن العالمية.',
    'services.origin.title': 'تحميل في المنشأ',
    'services.origin.description': 'تغليف وت palletization وحشو حاويات احترافي في المصدر.',
    'services.quality.title': 'ضمان الجودة',
    'services.quality.description': 'اختيار الموردين ومراقبة جودة المنتج طوال العملية.',
    'services.documentation.title': 'وثائق التصدير',
    'services.documentation.description': 'إدارة كاملة لتصاريح التصدير والتخليص الجمركي والامتثال التجاري.',

    // Showcase
    'showcase.saffron.badge': 'الذهب الأحمر',
    'showcase.saffron.title1': 'زعفران فارسي',
    'showcase.saffron.title2': 'أصلي (الدرجة A)',
    'showcase.saffron.description': 'معروف برائحته الشديدة ولونه العميق، زعفراننا يُقطف يدوياً ويُختبر للنقاء في مختبرات دولية. نوفر كميات كبيرة بشهادات كاملة للموزعين العالميين.',
    'showcase.saffron.purity': 'نقاء عضوي',
    'showcase.saffron.grade': 'جودة الدرجة A',
    'showcase.pistachio.badge': 'تميز غذائي',
    'showcase.pistachio.title1': 'فستق إيراني',
    'showcase.pistachio.title2': 'ممتاز',
    'showcase.pistachio.description': 'تصدير أنواع الفستق بما في ذلك أكبري وأحمد آقائي وفندقي. معالج في مرافق حديثة لضمان أقصى نضارة ومعايير صحية.',
    'showcase.pistachio.f1': 'أحجام متدرجة متعددة متاحة',
    'showcase.pistachio.f2': 'مختبر الأفلاتوكسين ومعتمد',
    'showcase.pistachio.f3': 'تغليف تصديري مخصص',

    // Process
    'process.title': 'عملية التصدير السلسة لدينا',
    'process.description': 'من إيران إلى مستودعك، ندير كل تفصيلة.',
    'process.step1.title': 'الاختيار والجودة',
    'process.step1.description': 'نسّق مع موردين معتمدين ومفتشين مستقلين لضمان تميز المنتج.',
    'process.step2.title': 'التحميل والتحضير',
    'process.step2.description': 'تغليف احترافي وحشو حاويات مع الامتثال الكامل لمعايير البحر.',
    'process.step3.title': 'إدارة المسار',
    'process.step3.description': 'مراقبة مستمرة للرحلة مع تتبع لحظي وتحديثات الجدول.',
    'process.step4.title': 'التسليم النهائي',
    'process.step4.description': 'المساعدة في التفريغ ودعم التخليص الجمركي والتنسيق مع الوكلاء المحليين.',

    // Countries
    'countries.title': 'وصولنا العالمي',

    // Commitment
    'commitment.title': 'التزامنا بالتميز',
    'commitment.description': 'مدفوعون بالجودة والثقة، نُعيد تعريف تجربة التصدير لشركائنا العالميين.',
    'commitment.reliability.title': 'الموثوقية',
    'commitment.reliability.desc': 'تتبع شفاف وتواصل مستمر طوال رحلة التصدير.',
    'commitment.precision.title': 'الدقة',
    'commitment.precision.desc': 'توثيق دقيق وإدارة امتثال لتخليص جمركي خالٍ من المشاكل.',
    'commitment.efficiency.title': 'الكفاءة',
    'commitment.efficiency.desc': 'مسارات لوجستية محسنة ومعالجة سريعة للشحنات الحساسة للوقت.',
    'commitment.partnership.title': 'الشراكة',
    'commitment.partnership.desc': 'التزام طويل الأمد بنجاح ونمو عملائنا في الأسواق العالمية.',

    // Contact
    'contact.title': 'نتواصل',
    'contact.description': 'هل أنت مستعد لتوريد منتجات ممتازة؟ فريقنا هنا لتلبية احتياجاتك التصديرية برعاية احترافية.',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'اتصل بنا',
    'contact.visit': 'زورنا',
    'contact.hours': 'ساعات العمل: السبت - الأربعاء، 9:00 - 18:00 (GMT+3:30)',
    'contact.fullName': 'الاسم الكامل',
    'contact.emailAddress': 'البريد الإلكتروني',
    'contact.subject': 'الموضوع',
    'contact.message': 'الرسالة',
    'contact.send': 'إرسال الرسالة',
    'contact.success': 'تم إرسال رسالتك بنجاح!',
    'contact.error': 'خطأ في إرسال الرسالة. يرجى المحاولة مرة أخرى.',

    // Footer
    'footer.description': 'رائد في الصادرات الإيرانية. تقديم منتجات عالية الجودة وحلول لوجستية احترافية للأسواق العالمية.',
    'footer.quickLinks': 'روابط سريعة',
    'footer.aboutUs': 'عنّا',
    'footer.products': 'المنتجات',
    'footer.productCategories': 'فئات المنتجات',
    'footer.freshFruits': 'فواكه طازجة',
    'footer.driedFruits': 'فواكه مجففة',
    'footer.spices': 'توابل',
    'footer.petroleum': 'نفط',
    'footer.petrochemicals': 'بتروكيماويات',
    'footer.contactInfo': 'معلومات الاتصال',
    'footer.rights': 'جميع الحقوق محفوظة.',
  },
};

// Complete English translations (the original site text)
defaultTranslations.en = {
  // Navbar
  'nav.home': 'Home',
  'nav.products': 'Products',
  'nav.services': 'Services',
  'nav.process': 'Process',
  'nav.contact': 'Contact',
  'nav.contactUs': 'Contact Us',
  'nav.globalPartner': 'Global Export Partner',
  'nav.email': 'info@arasbtrading.com',
  'nav.region': 'Tehran, Iran • EMEA Region',

  // Hero
  'hero.badge': 'Leading Export Partner',
  'hero.title1': 'Empowering Your Access to',
  'hero.title2': 'Premium Iranian Exports',
  'hero.description': 'Specialized in supplying premium Iranian products to European and Arab markets. We manage the entire export lifecycle with precision and reliability.',
  'hero.exploreProducts': 'Explore Products',
  'hero.ourServices': 'Our Services',
  'hero.scrollToExplore': 'Scroll to explore',

  // Expertise
  'expertise.title1': 'Your Strategic Partner in',
  'expertise.title2': 'Global Trade Logistics',
  'expertise.description': 'While we are not a logistics carrier, our team manages the entire process with trusted transport partners to ensure your cargo moves efficiently and in full compliance with international trade requirements.',
  'expertise.item1': 'Professional Export Management',
  'expertise.item2': 'Cost-Effective Maritime Solutions',
  'expertise.item3': 'Real-time Ocean Transit Monitoring',
  'expertise.item4': 'Seamless Discharge & Final Delivery',
  'expertise.item5': 'Strict Quality Control at Origin',
  'expertise.learnMore': 'Learn More About Us',
  'expertise.years': 'Years',
  'expertise.experience': 'Experience',

  // Products
  'products.title': 'Our Featured Products',
  'products.description': 'We supply a diverse range of premium Iranian products meeting the highest international export standards.',
  'products.pistachios.title': 'Premium Pistachios',
  'products.pistachios.description': 'Selected Iranian pistachios with superior quality and compliant packaging.',
  'products.pistachios.category': 'Dried Fruits',
  'products.saffron.title': 'Exquisite Saffron',
  'products.saffron.description': "The world's finest saffron threads, sourced from certified farms.",
  'products.saffron.category': 'Spices',
  'products.dates.title': 'Natural Dates',
  'products.dates.description': 'Rich, caramel-like dates prepared for international distribution.',
  'products.dates.category': 'Fresh Fruits',
  'products.petroleum.title': 'Petrochemicals',
  'products.petroleum.description': 'Essential materials for global manufacturing and energy industries.',
  'products.petroleum.category': 'Industrial',

  // Services
  'services.title': 'Expert Export Management',
  'services.description': 'Arasb Trading manages the entire commercial and export process on your behalf, ensuring your goods move efficiently, compliantly, and on schedule.',
  'services.compliance': 'Compliance Rate',
  'services.partnerCountries': 'Partner Countries',
  'services.overland.title': 'Overland Shipments',
  'services.overland.description': 'Reliable road transportation for exports from Iran to Europe and the Middle East.',
  'services.air.title': 'Air Freight',
  'services.air.description': 'Fast and controlled handling for time-sensitive goods and fresh produce.',
  'services.maritime.title': 'Maritime Solutions',
  'services.maritime.description': 'Cost-effective bulk and containerized exports through global shipping lines.',
  'services.origin.title': 'Origin Loading',
  'services.origin.description': 'Professional packaging, palletizing, and container stuffing at the source.',
  'services.quality.title': 'Quality Assurance',
  'services.quality.description': 'Supplier selection and product quality monitoring throughout the process.',
  'services.documentation.title': 'Export Documentation',
  'services.documentation.description': 'Full management of export permits, customs clearance, and trade compliance.',

  // Showcase
  'showcase.saffron.badge': 'The Red Gold',
  'showcase.saffron.title1': 'Authentic Persian',
  'showcase.saffron.title2': 'Saffron (Grade A)',
  'showcase.saffron.description': 'Known for its intense aroma and deep color, our saffron is hand-picked and tested for purity in international laboratories. We provide bulk supplies with complete certification for global distributors.',
  'showcase.saffron.purity': 'Organic Purity',
  'showcase.saffron.grade': 'Grade-A Quality',
  'showcase.pistachio.badge': 'Nutritious Excellence',
  'showcase.pistachio.title1': 'Premium Iranian',
  'showcase.pistachio.title2': 'Pistachios',
  'showcase.pistachio.description': 'Exporting variety of pistachio types including Akbari, Ahmad Aghaei, and Fandoghi. Processed in state-of-the-art facilities ensuring maximum freshness and health standards.',
  'showcase.pistachio.f1': 'Multiple grading sizes available',
  'showcase.pistachio.f2': 'Aflatoxin-tested & certified',
  'showcase.pistachio.f3': 'Customized export packaging',

  // Process
  'process.title': 'Our Seamless Export Process',
  'process.description': 'From Iran to your warehouse, we manage every detail.',
  'process.step1.title': 'Selection & Quality',
  'process.step1.description': 'We coordinate with certified suppliers and independent inspectors to guarantee product excellence.',
  'process.step2.title': 'Loading & Prep',
  'process.step2.description': 'Professional packaging and container stuffing ensuring full compliance with maritime standards.',
  'process.step3.title': 'Route Management',
  'process.step3.description': 'Continuous monitoring of the journey with real-time tracking and schedule updates.',
  'process.step4.title': 'Final Delivery',
  'process.step4.description': 'Assisting with discharge, customs clearance support, and coordination with local agents.',

  // Countries
  'countries.title': 'Our Global Reach',

  // Commitment
  'commitment.title': 'Our Commitment to Excellence',
  'commitment.description': 'Driven by quality and trust, we redefine the export experience for our global partners.',
  'commitment.reliability.title': 'Reliability',
  'commitment.reliability.desc': 'Transparent tracking and consistent communication throughout the export journey.',
  'commitment.precision.title': 'Precision',
  'commitment.precision.desc': 'Meticulous documentation and compliance management for hassle-free customs.',
  'commitment.efficiency.title': 'Efficiency',
  'commitment.efficiency.desc': 'Optimized logistics routes and rapid processing for time-sensitive cargo.',
  'commitment.partnership.title': 'Partnership',
  'commitment.partnership.desc': 'Long-term commitment to our clients success and growth in global markets.',

  // Contact
  'contact.title': "Let's Connect",
  'contact.description': 'Ready to source premium products? Our team is here to handle your export needs with professional care.',
  'contact.email': 'Email us',
  'contact.phone': 'Call us',
  'contact.visit': 'Visit us',
  'contact.hours': 'Operating hours: Mon - Fri, 9:00 - 18:00 (GMT+3:30)',
  'contact.fullName': 'Full Name',
  'contact.emailAddress': 'Email Address',
  'contact.subject': 'Subject',
  'contact.message': 'Message',
  'contact.send': 'Send Message',
  'contact.success': 'Your message has been sent successfully!',
  'contact.error': 'Error sending message. Please try again.',

  // Footer
  'footer.description': 'Leading the way in Iranian exports. Providing premium quality products and professional logistics solutions to global markets.',
  'footer.quickLinks': 'Quick Links',
  'footer.aboutUs': 'About Us',
  'footer.products': 'Products',
  'footer.productCategories': 'Products',
  'footer.freshFruits': 'Fresh Fruits',
  'footer.driedFruits': 'Dried Fruits',
  'footer.spices': 'Spices',
  'footer.petroleum': 'Petroleum',
  'footer.petrochemicals': 'Petrochemicals',
  'footer.contactInfo': 'Contact Info',
  'footer.rights': 'All rights reserved.',
};

export { defaultTranslations };

interface I18nProviderProps {
  children: ReactNode;
}

export function I18nProvider({ children }: I18nProviderProps) {
  const [locale, setLocaleState] = useState<Locale>(detectLocale);
  const [translations, setTranslations] = useState<TranslationMap>(
    defaultTranslations[detectLocale()] || defaultTranslations.en
  );

  const t = useCallback((key: string, fallback?: string): string => {
    return translations[key] || fallback || key;
  }, [translations]);

  const setLocale = useCallback((newLocale: Locale) => {
    setLocaleState(newLocale);
    localStorage.setItem('arasb-locale', newLocale);
    setDocumentDirection(newLocale);
    // Load translations for the new locale
    const trans = defaultTranslations[newLocale] || defaultTranslations.en;
    setTranslations(trans);
    // Also try to fetch API translations (for dynamic content)
    fetch(`/api/home-sections?locale=${newLocale}`)
      .then(r => r.json())
      .then(data => {
        if (data.success && data.data) {
          const apiTranslations: TranslationMap = {};
          for (const section of data.data) {
            if (section.translation) {
              const prefix = section.section_key;
              if (section.translation.title) apiTranslations[`api.${prefix}.title`] = section.translation.title;
              if (section.translation.subtitle) apiTranslations[`api.${prefix}.subtitle`] = section.translation.subtitle;
            }
          }
          setTranslations(prev => ({ ...prev, ...apiTranslations }));
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    setDocumentDirection(locale);
    setLocale(locale);
  }, []);

  const direction = LANGUAGES[locale]?.direction || 'ltr';

  return (
    <I18nContext.Provider value={{ locale, setLocale, t, direction, translations }}>
      {children}
    </I18nContext.Provider>
  );
}
