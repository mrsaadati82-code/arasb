# برنامه اجرایی فاز 1 پروژه ARASB

## 1) هدف این سند
این سند، برنامه اجرایی فاز 1 را مشخص می‌کند تا پروژه ARASB از وضعیت فعلی لندینگ‌پیج، به یک سیستم production-grade با معماری صحیح و قابل توسعه تبدیل شود.

فاز 1 بر پایه‌سازی صحیح متمرکز است، نه صرفاً اضافه‌کردن چند قابلیت روی پروژه فعلی.

---

## 2) هدف فاز 1
ایجاد زیرساخت فنی و محصولی لازم برای ادامه توسعه، شامل:
- معماری نهایی سیستم
- انتخاب استک نهایی
- ایجاد پایه بک‌اند
- ایجاد پایه فرانت‌اند SEO-friendly
- ایجاد پایه پنل مدیریت فارسی
- ایجاد احراز هویت و نقش‌ها
- ایجاد مدل‌های داده پایه
- آماده‌سازی بستر چندزبانه
- آماده‌سازی بستر CMS و محصولات

---

## 3) خروجی‌های اصلی فاز 1
1. معماری نهایی تاییدشده
2. ساختار مخزن/مخازن پروژه
3. راه‌اندازی backend
4. راه‌اندازی database
5. راه‌اندازی frontend public
6. راه‌اندازی admin panel پایه
7. پیاده‌سازی auth و RBAC پایه
8. پیاده‌سازی settings پایه
9. پیاده‌سازی i18n foundation
10. مستندات شروع توسعه فاز 2

---

## 4) تصمیم‌های فنی پیشنهادی فاز 1

## 4.1 فرانت‌اند عمومی
### پیشنهاد
- **Next.js**

### دلیل
- SEO بهتر
- SSR/SSG/ISR
- routing چندزبانه بهتر
- مناسب برای صفحات محصول و محتوایی

## 4.2 پنل مدیریت
### پیشنهاد
- Next.js admin app یا app مجزا در monorepo
- فارسی و RTL

## 4.3 بک‌اند
### پیشنهاد
- **NestJS**
- REST API

## 4.4 دیتابیس
### پیشنهاد
- **PostgreSQL**

## 4.5 ORM
### پیشنهاد
- **Prisma**

## 4.6 ذخیره‌سازی فایل
### پیشنهاد فاز 1
- Local storage abstraction

### پیشنهاد فاز 2
- S3-compatible storage

## 4.7 استقرار
### پیشنهاد
- Docker-based deployment
- staging + production

---

## 5) ساختار پیشنهادی پروژه

## 5.1 ساختار کلی
### گزینه پیشنهادی
Monorepo

### ساختار نمونه
- `apps/web` → سایت عمومی
- `apps/admin` → پنل مدیریت فارسی
- `apps/api` → بک‌اند NestJS
- `packages/ui` → کامپوننت‌های مشترک
- `packages/config` → تنظیمات مشترک
- `packages/types` → تایپ‌های مشترک

---

## 6) تسک‌های اجرایی فاز 1

## 6.1 تحلیل نهایی و تثبیت محدوده
### تسک‌ها
- نهایی‌سازی sitemap
- نهایی‌سازی ماژول‌های MVP
- نهایی‌سازی نقش‌های پنل
- نهایی‌سازی زبان‌ها و URL strategy
- نهایی‌سازی مدل محصول
- نهایی‌سازی رویکرد update manager

### خروجی
- تایید محدوده فازهای بعدی

---

## 6.2 راه‌اندازی مخزن و معماری پروژه
### تسک‌ها
- ایجاد ساختار monorepo
- تنظیم package manager
- تنظیم workspace configs
- تنظیم lint/format
- تنظیم env strategy
- تنظیم gitignore و conventions

### خروجی
- پایه استاندارد کدنویسی

---

## 6.3 راه‌اندازی بک‌اند NestJS
### تسک‌ها
- bootstrap پروژه NestJS
- تنظیم config module
- تنظیم Prisma
- اتصال PostgreSQL
- ساخت health endpoint
- ساخت base exception handling
- ساخت validation pipeline
- ساخت logging پایه
- ساخت swagger یا API docs پایه

### خروجی
- API پایه قابل اجرا

---

## 6.4 مدل داده پایه
### موجودیت‌های فاز 1
- User
- Role
- Permission
- Setting
- Language
- Media
- Page
- PageTranslation
- ProductCategory
- Product
- ProductTranslation

### تسک‌ها
- طراحی ERD
- طراحی schema prisma
- migration اولیه
- seed اولیه زبان‌ها و نقش‌ها

### خروجی
- دیتابیس اولیه آماده توسعه

---

## 6.5 احراز هویت و نقش‌ها
### تسک‌ها
- login admin
- password hashing
- JWT access token
- refresh token
- logout
- role-based guards
- permission checks
- profile endpoint
- change password

### نقش‌های اولیه
- Super Admin
- Content Manager
- Product Manager
- SEO Manager
- Translator

### خروجی
- امنیت پایه پنل

---

## 6.6 راه‌اندازی پنل مدیریت فارسی
### تسک‌ها
- bootstrap admin app
- تنظیم RTL
- فونت فارسی
- layout پنل
- sidebar
- topbar
- صفحه ورود
- dashboard placeholder
- route guards
- error/loading pages

### ماژول‌های اولیه پنل در فاز 1
- Dashboard
- Login
- Users
- Roles
- Settings
- Languages

### خروجی
- پنل پایه قابل ورود و توسعه

---

## 6.7 راه‌اندازی سایت عمومی
### تسک‌ها
- bootstrap web app
- layout عمومی
- header/footer پایه
- routing چندزبانه
- language switcher واقعی
- middleware یا strategy برای locale
- صفحه home نمونه
- صفحه about نمونه
- صفحه contact نمونه
- error pages

### خروجی
- اسکلت سایت عمومی 3 زبانه

---

## 6.8 زیرساخت i18n
### تسک‌ها
- تعریف زبان‌ها: fa, en, ar
- تعیین strategy مسیرها
- پشتیبانی RTL/LTR
- translation layer برای UI ثابت
- data model برای ترجمه محتوایی
- helperهای locale-aware

### خروجی
- پایه چندزبانه واقعی

---

## 6.9 مدیریت تنظیمات پایه سایت
### تسک‌ها
- site identity
- company info
- contact info
- social links
- default SEO settings
- language settings
- script injection settings placeholder

### خروجی
- بخش تنظیمات پایه

---

## 6.10 مدیریت رسانه پایه
### تسک‌ها
- upload endpoint
- file validation
- media list
- delete endpoint
- alt text structure
- secure file naming

### خروجی
- media foundation برای فازهای بعدی

---

## 6.11 پایه صفحات و CMS
### تسک‌ها
- مدل Page
- مدل PageTranslation
- create/edit page APIs
- page status
- slug management
- locale-aware fetching
- preview strategy definition

### خروجی
- foundation برای CMS

---

## 6.12 پایه محصولات
### تسک‌ها
- مدل ProductCategory
- مدل Product
- مدل ProductTranslation
- CRUD API پایه
- slug و status
- image relation

### خروجی
- foundation برای ماژول محصولات

---

## 6.13 DevOps و محیط‌ها
### تسک‌ها
- docker setup
- docker compose برای dev
- env files strategy
- staging/prod conventions
- build scripts
- release naming
- backup directory conventions

### خروجی
- بستر استقرار قابل اتکا

---

## 6.14 CI/CD پایه
### تسک‌ها
- install/lint/build checks
- test placeholder
- migration checks
- deploy strategy draft

### خروجی
- pipeline پایه

---

## 6.15 مستندسازی
### تسک‌ها
- README جدید پروژه
- setup guide
- env guide
- architecture overview
- roles & permissions draft

### خروجی
- مستندات لازم برای ادامه توسعه

---

## 7) اولویت‌بندی تسک‌ها

## اولویت خیلی بالا
1. معماری و ساختار پروژه
2. backend پایه
3. database و prisma
4. auth و RBAC
5. admin shell فارسی
6. web shell چندزبانه
7. settings و i18n foundation

## اولویت بالا
8. media foundation
9. page foundation
10. product foundation
11. Docker/env setup
12. CI/CD پایه

---

## 8) خروجی‌های قابل دمو در پایان فاز 1
در پایان فاز 1 باید بتوان این موارد را دمو کرد:
- ورود به پنل مدیریت فارسی
- مشاهده داشبورد پایه
- مدیریت کاربران و نقش‌ها
- مدیریت تنظیمات پایه
- تعریف زبان‌ها
- سایت عمومی با 3 زبان
- مسیرهای `/fa`, `/en`, `/ar`
- صفحات نمونه عمومی
- API health
- CRUD پایه برای pages/products در backend

---

## 9) مواردی که عمداً به فاز 2 منتقل می‌شوند
برای جلوگیری از سنگین‌شدن فاز 1، این موارد در فاز 2 تکمیل می‌شوند:
- page builder کامل
- مدیریت منوهای کامل
- مدیریت کامل صفحات
- صفحه‌ساز drag & drop
- لیست و جزئیات محصولات در UI نهایی
- فرم‌های عملیاتی
- وبلاگ
- سئو کامل
- analytics
- update manager کامل

---

## 10) ریسک‌های فاز 1
1. مبهم‌بودن نیازها در محصول نهایی
2. تصمیم دیرهنگام روی استک
3. تلاش برای ساخت همه‌چیز در فاز 1
4. طراحی بیش‌ازحد پیچیده page builder از ابتدا
5. عدم تعریف دقیق نقش‌ها
6. عدم توافق روی ساختار چندزبانه

### راهکار
- محدود نگه‌داشتن فاز 1
- تصمیم‌گیری سریع روی معماری
- تمرکز بر foundation، نه feature overload

---

## 11) تعریف Done برای فاز 1
فاز 1 زمانی تمام‌شده محسوب می‌شود که:
- معماری پروژه نهایی و اجرا شده باشد
- backend/api بالا آمده باشد
- database و migrationها کار کنند
- admin فارسی قابل ورود باشد
- auth و RBAC کار کنند
- web چندزبانه پایه بالا باشد
- foundation صفحات و محصولات ایجاد شده باشد
- مستندات پایه آماده باشد

---

## 12) تخمین زمانی فاز 1
بسته به سرعت اجرا:
- حداقل: 1 هفته فشرده
- واقع‌بینانه: 2 هفته
- محافظه‌کارانه: 3 هفته

پیشنهاد اجرایی: **2 هفته**

---

## 13) پیشنهاد شروع عملیاتی بعد از این سند
قدم بعدی این است که یک سند حتی اجرایی‌تر ساخته شود شامل:
1. backlog دقیق فاز 1 به صورت task-by-task
2. ERD اولیه دیتابیس
3. architecture decision record
4. ساختار نقش‌ها و permission matrix

---

## 14) جمع‌بندی
فاز 1 باید زیرساخت را آن‌قدر درست بسازد که توسعه فازهای بعدی بدون دوباره‌کاری انجام شود. اگر این فاز خوب بسته شود، پیاده‌سازی CMS، محصولات، سئو، فرم‌ها، آنالیتیکس و سیستم آپدیت با ریسک و هزینه کمتر انجام خواهد شد.
