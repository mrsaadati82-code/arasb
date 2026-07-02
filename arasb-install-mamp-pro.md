# راهنمای نصب ARASB Prototype روی لوکال با MAMP PRO

## 1) هدف این راهنما
این راهنما برای اجرای نسخه آزمایشی فعلی ARASB روی سیستم لوکال با استفاده از **MAMP PRO** نوشته شده است.

نسخه هدف:
- `arasb-laravel-foundation-v0.9.0.zip`

> این نسخه یک prototype است و برای بررسی UI، flow اولیه و تست‌های توسعه‌ای مناسب است.

---

## 2) پیش‌نیازها
- نصب **MAMP PRO**
- PHP فعال در MAMP
- دسترسی به پوشه Document Root لوکال

---

## 3) فایل مورد نیاز
- `arasb-laravel-foundation-v0.9.0.zip`

---

## 4) ساخت یک Host در MAMP PRO
### پیشنهاد
یک host جدید بسازید مثل:
- `arasb.local`

### در MAMP PRO
- وارد بخش **Hosts** شوید
- یک Host جدید بسازید
- Domain را بگذارید روی:
  - `arasb.local`

---

## 5) انتخاب Document Root
### حالت پیشنهادی
Document Root را روی پوشه:
- `public`

قرار دهید.

یعنی ابتدا فایل zip را extract کنید و سپس document root را روی این مسیر بگذارید:
- `/path/to/arasb-laravel-foundation/public`

این بهترین حالت برای ساختار فعلی پروژه است.

---

## 6) Extract فایل
فایل zip را در یک پوشه مناسب extract کنید.

مثال:
- `/Users/yourname/Sites/arasb-laravel-foundation/`

ساختار بعد از extract باید شامل این موارد باشد:
- `app/`
- `bootstrap/`
- `config/`
- `public/`
- `resources/`
- `storage/`
- `routes/`

---

## 7) تنظیم Host در MAMP PRO
در MAMP PRO:
- Document Root را روی:
  - `/Users/yourname/Sites/arasb-laravel-foundation/public`
  قرار دهید.
- PHP version را روی یکی از نسخه‌های 8.1 یا بالاتر تنظیم کنید.
- Host را ذخیره کنید.
- MAMP PRO را restart کنید.

---

## 8) تست سایت عمومی
در مرورگر باز کنید:
- `http://arasb.local/fa`
- `http://arasb.local/fa/about`
- `http://arasb.local/fa/products`
- `http://arasb.local/fa/contact`
- `http://arasb.local/en`
- `http://arasb.local/ar`

---

## 9) تست پنل مدیریت
در مرورگر باز کنید:
- `http://arasb.local/admin/login`

### ورود آزمایشی
در این نسخه:
- هر ایمیل غیرخالی
- هر رمز غیرخالی

برای ورود کافی است.

مثلاً:
- Email: `admin@arasb.local`
- Password: `123456`

---

## 10) تست صفحات پنل
بعد از ورود، این مسیرها را تست کنید:
- `http://arasb.local/admin`
- `http://arasb.local/admin/languages`
- `http://arasb.local/admin/pages`
- `http://arasb.local/admin/pages/edit?id=1`
- `http://arasb.local/admin/products`
- `http://arasb.local/admin/products/edit?id=1`
- `http://arasb.local/admin/settings`

---

## 11) تست ذخیره prototype-level
### صفحه
- برو به `http://arasb.local/admin/pages/edit?id=1`
- فیلدها را تغییر بده
- ذخیره کن
- پیام موفقیت باید ببینی

### محصول
- برو به `http://arasb.local/admin/products/edit?id=1`
- فیلدها را تغییر بده
- ذخیره کن
- پیام موفقیت باید ببینی

---

## 12) اگر صفحه‌ها باز نشدند
این موارد را بررسی کن:
1. Document Root روی `public` است یا نه
2. PHP host فعال است یا نه
3. MAMP PRO restart شده یا نه
4. فایل‌ها کامل extract شده‌اند یا نه

---

## 13) اگر CSSها لود نشدند
بررسی کن:
- فایل‌های زیر وجود دارند:
  - `public/assets/css/site.css`
  - `public/assets/css/admin.css`
- Document Root اشتباه تنظیم نشده باشد

---

## 14) آیا نیاز به دیتابیس هست؟
در نسخه فعلی prototype:
- **خیر**

این نسخه از فایل‌های JSON برای داده‌های اولیه استفاده می‌کند:
- `storage/data/pages.json`
- `storage/data/products.json`

---

## 15) نکته مهم
این نسخه برای:
- توسعه اولیه
- تست prototype
- بررسی UI و UX

خوب است؛ اما هنوز Laravel production-ready واقعی نیست.

---

## 16) جمع‌بندی
اگر در MAMP PRO، Document Root را روی پوشه `public` بگذاری، نسخه فعلی به‌صورت محلی برای تست prototype باید قابل اجرا و قابل مشاهده باشد.
