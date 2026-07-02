# Design System پروژه ARASB

## 1) هدف سند
این سند، هویت بصری و قواعد سیستم طراحی ARASB را تعریف می‌کند تا:
- ظاهر فعلی سایت حفظ شود
- صفحات جدید کاملاً یکپارچه ساخته شوند
- پنل مدیریت هم کیفیت بصری بالا و هماهنگ داشته باشد
- توسعه فرانت‌اند در آینده از هم نپاشد

---

## 2) اصول برند و حس بصری
ARASB باید این ویژگی‌ها را منتقل کند:
- حرفه‌ای
- بین‌المللی
- قابل اعتماد
- لوکس اما نه تجملی
- تجاری و صادرات‌محور
- مدرن و تمیز

### DNA بصری فعلی که باید حفظ شود
- پس‌زمینه‌های تیره slate/navy در سکشن‌های کلیدی
- accent کهربایی/طلایی
- فضای سفید زیاد
- تیترهای بزرگ و bold
- کارت‌های گرد و مدرن
- انیمیشن‌های subtle
- کنتراست بالا بین dark و light sections

---

## 3) پالت رنگی پیشنهادی

## 3.1 رنگ‌های اصلی برند
- `brand.navy.950` → `#0f172a`
- `brand.navy.900` → `#111827`
- `brand.slate.800` → `#1f2937`
- `brand.slate.700` → `#334155`

## 3.2 رنگ accent
- `brand.amber.600` → `#d97706`
- `brand.amber.500` → `#f59e0b`
- `brand.amber.400` → `#fbbf24`
- `brand.gold.soft` → `#d4af37`

## 3.3 رنگ‌های سطح و بک‌گراند
- `surface.base` → `#ffffff`
- `surface.soft` → `#f8fafc`
- `surface.muted` → `#f1f5f9`
- `surface.dark` → `#0f172a`

## 3.4 رنگ متن
- `text.primary` → `#0f172a`
- `text.secondary` → `#475569`
- `text.muted` → `#64748b`
- `text.inverse` → `#ffffff`

## 3.5 رنگ‌های وضعیت
- `success` → `#16a34a`
- `warning` → `#f59e0b`
- `danger` → `#dc2626`
- `info` → `#2563eb`

---

## 4) تایپوگرافی

## 4.1 اصول
- تیترها درشت، جسور و با spacing مناسب
- متن بدنه خوانا و تمیز
- استفاده از وزن‌های محدود اما هدفمند
- رعایت تفاوت فارسی، عربی و انگلیسی

## 4.2 مقیاس تیتر پیشنهادی
- Display XL: 64
- Display L: 56
- H1: 48
- H2: 40
- H3: 32
- H4: 24
- H5: 20
- H6: 18
- Body L: 18
- Body M: 16
- Body S: 14
- Caption: 12

## 4.3 وزن‌ها
- 400
- 500
- 600
- 700
- 800

---

## 5) spacing system
پیشنهاد spacing scale:
- 4
- 8
- 12
- 16
- 20
- 24
- 32
- 40
- 48
- 64
- 80
- 96
- 120

اصل مهم:
- سکشن‌ها spacious باشند
- فرم‌ها و کارت‌ها نفس بکشند
- از فشردگی اجتناب شود

---

## 6) radius system
- xs: 8
- sm: 12
- md: 16
- lg: 24
- xl: 32
- pill: 999

برای برند فعلی:
- کارت‌ها عموماً `lg` و `xl`
- CTAها `pill`

---

## 7) shadow system
- soft-1: سایه سبک برای کارت ساده
- soft-2: سایه متوسط برای سکشن شناور
- soft-3: سایه پررنگ برای hero card / panel / dialog

اصل:
- سایه‌ها نرم و diffuse باشند
- از سایه‌های تند و تاریخ‌گذشته اجتناب شود

---

## 8) motion system
- hover transitions: 180–240ms
- section reveal: 300–500ms
- micro interactions: subtle only
- easing نرم و حرفه‌ای

موارد استفاده:
- hover card lift
- button feedback
- fade/slide for content
- drawer/modal transitions

---

## 9) الگوهای سایت عمومی

## 9.1 Section container
- max width ثابت
- padding افقی یکنواخت
- فاصله عمودی generous

## 9.2 Hero pattern
- پس‌زمینه تصویری یا تیره
- overlay gradient
- badge کوچک بالای عنوان
- headline bold
- subheadline خوانا
- CTA primary + secondary

## 9.3 Card pattern
- rounded corners
- layered depth
- hover interaction
- text hierarchy واضح

## 9.4 CTA pattern
- primary: amber solid
- secondary: glass/outline/light
- dark section و light section variant جداگانه

## 9.5 Content split pattern
- تصویر + متن دو ستونه
- آمار/نکات هایلایت شده
- CTA پایین محتوا

---

## 10) الگوهای صفحه محصول
- Hero/intro محصول
- گالری
- مشخصات کلیدی
- توضیح کامل
- بسته‌بندی و حمل
- گواهی‌ها
- FAQ
- فرم RFQ
- related products

باید با همان لحن بصری سایت فعلی طراحی شود.

---

## 11) الگوهای بلاگ و صفحات محتوایی
- هدر تمیز با عنوان و خلاصه
- تصویر شاخص شاخص و premium
- بدنه خوانا
- CTAهای نرم
- بخش related content

---

## 12) سیستم طراحی پنل مدیریت
### تفاوت با سایت عمومی
پنل باید از نظر brand هماهنگ باشد، اما کپی مستقیم از سایت عمومی نباشد.

### ویژگی‌ها
- سطوح روشن
- تراکم اطلاعات کنترل‌شده
- کنتراست عالی
- فرم‌ها و جدول‌های حرفه‌ای
- accentهای محدود و کاربردی

---

## 13) الگوهای کامپوننت پایه
- Button
- Input
- Textarea
- Select
- Checkbox
- Radio
- Tabs
- Badge
- Card
- Modal
- Drawer
- Toast
- Table
- EmptyState
- SectionHeader
- MediaPicker
- LanguageTabs
- StatusBadge

---

## 14) قواعد یکپارچگی
1. هر صفحه جدید باید با همین design tokens ساخته شود.
2. رنگ و spacing سلیقه‌ای تغییر نکند.
3. CTAها زبان بصری یکسان داشته باشند.
4. تیترها و فاصله‌ها consistent باشند.
5. در 3 زبان، layout باید هم‌چنان premium بماند.

---

## 15) جمع‌بندی
این design system تضمین می‌کند که ظاهر فعلی ARASB حفظ شود، و تمام صفحات جدید و پنل مدیریت با کیفیت بالا و انسجام کامل توسعه پیدا کنند.
