# معماری Laravel پروژه ARASB برای Linux5 ایران‌سرور

## 1) هدف
تعریف معماری نهایی اجرایی پروژه روی Laravel، MySQL و DirectAdmin.

---

## 2) اصول
- سازگار با shared hosting
- قابل استقرار با zip
- قابل نگه‌داری
- چندزبانه
- پنل فارسی
- UI premium
- حفظ ظاهر فعلی سایت

---

## 3) ساختار پیشنهادی Laravel
- `app/Http/Controllers/Web`
- `app/Http/Controllers/Admin`
- `app/Models`
- `app/Services`
- `app/Support`
- `database/migrations`
- `resources/views/web`
- `resources/views/admin`
- `resources/views/components`
- `public/assets`
- `routes/web.php`
- `routes/admin.php`

---

## 4) لایه‌ها
### Web Layer
صفحات سایت برای کاربران با 3 زبان

### Admin Layer
پنل مدیریت فارسی

### Domain/Service Layer
منطق کسب‌وکار

### Data Layer
Eloquent + MySQL

---

## 5) چندزبانه
- prefix مسیرها: `/fa`, `/en`, `/ar`
- ترجمه محتوای صفحات و محصولات در جداول translation
- پنل فقط فارسی

---

## 6) UI
### سایت
- بر پایه ظاهر فعلی ARASB
- Blade templates با assetهای مشترک

### پنل
- Blade-based admin UI یا hybrid minimal JS
- تمرکز روی UX

---

## 7) ماژول‌های فاز 1
- Auth
- Settings
- Languages
- Basic Pages
- Admin Dashboard

---

## 8) نصب و استقرار
- build assets
- zip package
- upload to DirectAdmin
- import MySQL
- set env
- run migrations if terminal available or installer flow if needed

---

## 9) جمع‌بندی
این معماری برای هاست فعلی شما عملی‌تر و کم‌ریسک‌تر از معماری Node-based است.
