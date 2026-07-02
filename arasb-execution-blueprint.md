# نقشه اجرایی نهایی ARASB پس از تایید UI

## 1) هدف این سند
این سند، blueprint اجرایی پروژه را بعد از تایید UI نهایی مشخص می‌کند و تعریف می‌کند که از این نقطه به بعد چه چیزی ساخته می‌شود، با چه اولویتی ساخته می‌شود و چه چیزی در MVP قرار می‌گیرد.

---

## 2) بیانیه معماری نهایی

### مسیر مصوب
**Frontend exact React UI + Backend/Admin/API on PHP 8.1 + MySQL compatible with IranServer Linux5**

### تفسیر عملی
- فرانت عمومی سایت همان خروجی تاییدشده UI است
- پنل مدیریت و API در مسیر PHP-compatible پیاده‌سازی می‌شوند
- داده‌ها از MySQL خوانده می‌شوند
- assets مدیریتی در filesystem هاست ذخیره می‌شوند
- استقرار نهایی به صورت بسته قابل آپلود انجام می‌شود

---

## 3) ماژول‌های اصلی سیستم

## 3.1 ماژول هویت و دسترسی
- login/logout
- session-based auth
- roles
- permissions
- password reset later
- login audit

## 3.2 ماژول زبان و ترجمه
- تعریف زبان‌ها
- زبان پیش‌فرض
- فعال/غیرفعال بودن زبان‌ها
- direction هر زبان
- مدیریت فیلدهای ترجمه‌پذیر

## 3.3 ماژول صفحات
- لیست صفحات
- ساخت/ویرایش صفحه
- ترجمه title/slug/content/meta
- وضعیت draft/published
- نسخه اولیه برای homepage و صفحات استاندارد

## 3.4 ماژول محصولات
- دسته‌بندی محصول
- مدیریت محصول
- ترجمه محصول
- تصویر شاخص و گالری
- وضعیت انتشار
- محصولات featured

## 3.5 ماژول رسانه
- upload
- library
- metadata
- alt text per language
- selection for pages/products/SEO

## 3.6 ماژول تماس و سرنخ
- فرم تماس
- ذخیره submissions
- وضعیت رسیدگی
- پنل مشاهده پیام‌ها
- ایجاد lead از submission در فاز بعدی

## 3.7 ماژول تنظیمات
- اطلاعات سایت
- اطلاعات شرکت
- اطلاعات تماس
- شبکه‌های اجتماعی
- اسکریپت‌ها
- تنظیمات SEO پایه

## 3.8 ماژول سئو
- meta title
- meta description
- canonical
- OG image
- hreflang mapping
- sitemap-ready data
- robots policy پایه

## 3.9 ماژول آپدیت و نگه‌داری
- package upload
- validate package
- backup trigger
- update log
- apply update
- rollback later

---

## 4) مرز MVP فنی

### داخل MVP
- admin auth
- roles basic
- languages
- settings
- pages/homepage content
- products
- media
- contact submissions
- seo base
- public API endpoints for homepage/settings/products/contact

### خارج از MVP اولیه
- page builder drag & drop کامل
- وبلاگ کامل
- CRM کامل
- workflow چندمرحله‌ای انتشار
- rollback پیشرفته
- analytics داخلی پیشرفته
- notification center کامل

---

## 5) دیتافلو اصلی

## 5.1 homepage
Admin > settings/pages/translations > database > API > React homepage

## 5.2 products
Admin > products/product translations/media > database > API > React public site

## 5.3 contact form
React contact form > API > validation > database > admin submissions list

## 5.4 SEO
Admin SEO fields > database > API/public render layer > meta tags / sitemap data

---

## 6) ساختار اطلاعات قابل مدیریت در homepage
پیشنهاد اجرایی برای کنترل دقیق بدون تخریب UI:

- hero
  - eyebrow
  - title
  - subtitle
  - CTA labels/links
  - hero image
- expertise
  - section title
  - items
- products showcase
  - section title
  - product cards
- services
  - section title
  - cards
- countries
  - title
  - list
- process
  - title
  - steps
- commitment
  - title
  - items
- contact
  - title
  - text
  - company info

به‌جای page builder آزاد در MVP، از **structured editable sections** استفاده می‌کنیم تا UI دقیق حفظ شود.

---

## 7) سیاست چندزبانه
- زبان‌های فعال: fa, en, ar
- admin فقط فارسی
- public content سه‌زبانه
- slug در سطح translation
- direction بر اساس زبان
- fallback در MVP: اگر ترجمه ناقص بود، زبان پیش‌فرض یا هشدار مدیریتی

---

## 8) سیاست پیاده‌سازی UI عمومی
- هیچ refactor ظاهری بدون نیاز انجام نشود
- data binding باید minimal-invasive باشد
- classes, spacing, breakpoints, animations تا حد ممکن untouched بمانند
- هر سکشن قبل از داینامیک‌سازی snapshot reference داشته باشد

---

## 9) بسته‌های تحویلی هر مرحله
در هر مرحله باید خروجی قابل نصب تولید شود:
- source workspace
- مستندات مرحله
- zip قابل آپلود
- راهنمای نصب/آپدیت

---

## 10) خروجی مرحله بعدی
نزدیک‌ترین خروجی‌هایی که باید ساخته شوند:
1. مدل داده اجرایی MVP
2. نقشه موجودیت‌های دیتابیس MySQL
3. لیست endpointهای API
4. structure پنل مدیریت فارسی
5. foundation backend/admin installable

---

## 11) جمع‌بندی
این blueprint مبنای ادامه رسمی پروژه است. از اینجا به بعد تمرکز روی ساخت سیستم مدیریتی و داده‌ای واقعی است، بدون اینکه UI تاییدشده عمومی قربانی بازطراحی یا rebuild مجدد شود.
