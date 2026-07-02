# عیب‌یابی اجرای ARASB روی هاست ایران‌سرور پس از تست v0.9.1

## 1) نتیجه تست‌های انجام‌شده
بر اساس تست کاربر:

### تست‌های انجام‌شده
- `https://1.arasbtrading.com/index.php/fa` → `ARASB - Page not found`
- `https://1.arasbtrading.com/fa` → `HTTP ERROR 500`
- `https://1.arasbtrading.com/` → `ARASB - Page not found`
- `https://1.arasbtrading.com/index.php` → redirect به `/en` و سپس `HTTP ERROR 500`
- تست admin نیز رفتار مشابه داشته است.

---

## 2) تحلیل دقیق وضعیت
این نتایج چند نکته مهم را ثابت می‌کنند:

### نکته 1
فایل `index.php` در حال اجراست.
چون:
- `/` پیام سفارشی `ARASB - Page not found` می‌دهد
- `/index.php` redirect داخلی پروژه را انجام می‌دهد

پس مشکل از این نیست که فایل اجرا نمی‌شود.

### نکته 2
rewrite برای مسیرهای تمیز مثل `/fa` فعال شده یا حداقل درخواست به سطحی می‌رسد که دیگر 404 ساده آپاچی نیست؛ اما در ادامه execution داخل PHP/route/view یا asset path به خطای 500 می‌خورد.

### نکته 3
مشکل `/index.php/fa` نشان می‌دهد که path parsing فعلی در `public/index.php` هنوز با محیط واقعی هاست ایران‌سرور کاملاً سازگار نشده است.

---

## 3) نتیجه فنی
مشکل فعلی ترکیبی از این موارد است:
1. parsing مسیر در `public/index.php`
2. parsing مسیر در `public/admin/index.php`
3. احتمال ناسازگاری rewrite/base path با ساب‌دامین فعلی
4. احتمال وجود خطای PHP runtime که به‌دلیل خاموش بودن نمایش خطاها فقط به صورت HTTP 500 دیده می‌شود

---

## 4) نتیجه مهم اجرایی
در این مرحله:
- foundation به مرحله تست نزدیک شده
- اما هنوز برای هاست ایران‌سرور نیاز به یک دور **hardening مخصوص shared hosting** دارد
- قبل از نصب مجدد توسط کاربر، بهتر است نسخه بعدی با debug موقت، path handling امن‌تر و fallback سازگارتر ساخته شود

---

## 5) پیشنهاد مرحله بعد
نسخه بعدی باید شامل این موارد باشد:
1. debug mode موقت برای نمایش خطاهای PHP
2. path normalization امن‌تر
3. fallback برای `/`, `/index.php`, `/fa`, `/index.php/fa`
4. admin path normalization امن‌تر
5. کاهش وابستگی به rewrite fragile
6. نسخه مخصوص troubleshooting هاست اشتراکی

---

## 6) تصمیم پیشنهادی
در حال حاضر بهترین کار این است که کاربر نصب جدید انجام ندهد و نسخه بعدی به‌صورت ویژه برای رفع این خطاها ساخته شود.
