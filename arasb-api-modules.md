# ماژول‌های API و محدوده هر ماژول در پروژه ARASB

## 1) هدف سند
این سند، ماژول‌های بک‌اند ARASB را مشخص می‌کند تا ساختار توسعه NestJS شفاف، ماژولار و قابل نگه‌داری باشد.

---

## 2) اصول طراحی ماژول‌ها
- هر ماژول یک domain مشخص داشته باشد
- وابستگی بین ماژول‌ها حداقلی باشد
- DTOها و policyها داخل هر ماژول تعریف شوند
- shared logic فقط در common نگهداری شود
- endpointهای admin/public در صورت لزوم جدا شوند

---

## 3) ماژول‌های هسته‌ای

## 3.1 Auth Module
### مسئولیت
- login
- refresh token
- logout
- current user
- change password

### endpointهای نمونه
- `POST /auth/login`
- `POST /auth/refresh`
- `POST /auth/logout`
- `GET /auth/me`
- `POST /auth/change-password`

---

## 3.2 Users Module
### مسئولیت
- CRUD کاربران
- فعال/غیرفعال‌سازی
- اتصال نقش‌ها

### endpointهای نمونه
- `GET /admin/users`
- `POST /admin/users`
- `PATCH /admin/users/:id`
- `DELETE /admin/users/:id`

---

## 3.3 Roles Module
### مسئولیت
- CRUD نقش‌ها
- تعریف permissions
- تخصیص permission به role

---

## 3.4 Settings Module
### مسئولیت
- تنظیمات عمومی سایت
- اطلاعات شرکت
- تنظیمات تماس
- تنظیمات سئو پیش‌فرض
- تنظیمات اسکریپت‌ها

### endpointهای نمونه
- `GET /admin/settings`
- `PATCH /admin/settings`
- `GET /public/settings/site`

---

## 3.5 Languages Module
### مسئولیت
- مدیریت زبان‌ها
- وضعیت فعال/غیرفعال
- تعیین زبان پیش‌فرض

---

## 3.6 Audit Logs Module
### مسئولیت
- ثبت لاگ فعالیت ادمین‌ها
- گزارش عملیات مهم

---

## 4) ماژول‌های محتوا و CMS

## 4.1 Pages Module
### مسئولیت
- CRUD صفحات
- publication workflow
- ترجمه صفحات
- preview token/preview logic

### endpointهای نمونه
- `GET /admin/pages`
- `POST /admin/pages`
- `GET /admin/pages/:id`
- `PATCH /admin/pages/:id`
- `POST /admin/pages/:id/publish`
- `GET /public/pages/:slug`

---

## 4.2 Page Builder Module
### مسئولیت
- مدیریت بلوک‌های صفحه
- ترتیب بلوک‌ها
- تنظیمات هر بلوک
- translation data برای بلوک‌ها

### endpointهای نمونه
- `GET /admin/pages/:id/blocks`
- `POST /admin/pages/:id/blocks`
- `PATCH /admin/blocks/:id`
- `DELETE /admin/blocks/:id`
- `POST /admin/pages/:id/blocks/reorder`

---

## 4.3 Menus Module
### مسئولیت
- مدیریت منوها و آیتم‌های منو
- منوهای header/footer/mobile

---

## 4.4 Services Module
### مسئولیت
- CRUD خدمات
- ترجمه خدمات
- انتشار
- public fetching

---

## 4.5 Blog Module
### مسئولیت
- دسته‌بندی مقالات
- مقالات
- برچسب‌ها
- انتشار
- public listing/detail

---

## 5) ماژول‌های تجاری

## 5.1 Product Categories Module
### مسئولیت
- CRUD دسته‌بندی محصولات
- دسته‌بندی چندسطحی
- ترجمه

---

## 5.2 Products Module
### مسئولیت
- CRUD محصولات
- ترجمه
- فایل‌ها و تصاویر
- ارتباطات
- publish workflow
- public listing/detail

### endpointهای نمونه
- `GET /admin/products`
- `POST /admin/products`
- `GET /admin/products/:id`
- `PATCH /admin/products/:id`
- `POST /admin/products/:id/publish`
- `GET /public/products`
- `GET /public/products/:categorySlug/:productSlug`

---

## 5.3 Leads Module
### مسئولیت
- مدیریت سرنخ‌های ایجادشده از فرم‌ها
- assign
- status update
- export

---

## 6) ماژول‌های فرم و تعامل با کاربر

## 6.1 Forms Module
### مسئولیت
- تعریف فرم‌ها
- تعریف فیلدها
- دریافت submission
- validation
- notification hooks

### endpointهای نمونه
- `GET /admin/forms`
- `POST /admin/forms`
- `PATCH /admin/forms/:id`
- `POST /public/forms/:key/submit`

---

## 6.2 Notifications Module
### مسئولیت
- اعلان‌های داخل پنل
- ارسال هشدارهای سیستمی
- اعلان فرم‌های جدید

---

## 7) ماژول‌های رسانه و فایل

## 7.1 Media Module
### مسئولیت
- آپلود فایل
- مدیریت فایل‌ها
- metadata
- alt text
- حذف امن

### endpointهای نمونه
- `GET /admin/media`
- `POST /admin/media/upload`
- `PATCH /admin/media/:id`
- `DELETE /admin/media/:id`

---

## 8) ماژول‌های SEO و بازاریابی

## 8.1 SEO Module
### مسئولیت
- metadata entities
- robots options
- canonical
- og/twitter
- schema JSON-LD

---

## 8.2 Redirects Module
### مسئولیت
- مدیریت ریدایرکت‌ها
- 301/302/307/308

---

## 8.3 Analytics Config Module
### مسئولیت
- نگهداری تنظیمات GA4
- GTM
- Search Console verification
- Pixel IDs
- event definitions

---

## 9) ماژول‌های نگه‌داری و پایداری

## 9.1 Backups Module
### مسئولیت
- اجرای بکاپ
- لیست بکاپ‌ها
- restore policy metadata

---

## 9.2 Updates Module
### مسئولیت
- آپلود package یا trigger deploy
- validate package
- apply update
- rollback
- log

---

## 9.3 System Health Module
### مسئولیت
- health checks
- storage status
- db connectivity
- queue/cache status در آینده

---

## 9.4 Jobs Module
### مسئولیت
- اجرای taskهای پس‌زمینه
- نگهداری job logs

---

## 10) ماژول‌های مشترک / Common
- config
- database
- auth guards
- decorators
- interceptors
- exception filters
- validators
- constants
- utils
- pagination helpers
- locale helpers
- slug helpers

---

## 11) پیشنهاد ترتیب پیاده‌سازی ماژول‌ها
### فاز 1
- auth
- users
- roles
- settings
- languages
- media
- pages (foundation)
- products (foundation)
- audit logs پایه

### فاز 2
- page builder
- menus
- services
- forms
- leads
- seo

### فاز 3
- blog
- redirects
- analytics config
- backups
- updates
- system health

---

## 12) جمع‌بندی
ساختار ماژولار فوق باعث می‌شود بک‌اند از ابتدا تمیز، قابل توسعه و قابل مدیریت باشد و هم‌زمان با رشد پنل و سایت، بدون بازنویسی گسترده توسعه پیدا کند.
