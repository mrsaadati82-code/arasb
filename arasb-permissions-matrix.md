# ماتریس نقش‌ها و دسترسی‌های پنل مدیریت ARASB

## 1) هدف سند
این سند، نقش‌های اصلی پنل مدیریت فارسی و سطح دسترسی هر نقش را مشخص می‌کند تا مبنای پیاده‌سازی RBAC در بک‌اند و پنل قرار بگیرد.

---

## 2) نقش‌های پیشنهادی
1. مدیر کل
2. مدیر محتوا
3. مدیر محصولات
4. مدیر سئو
5. مترجم
6. اپراتور فرم‌ها
7. ناظر / مشاهده‌گر

کلیدهای پیشنهادی:
- `super_admin`
- `content_manager`
- `product_manager`
- `seo_manager`
- `translator`
- `forms_operator`
- `viewer`

---

## 3) اصول دسترسی
- کمترین سطح دسترسی لازم
- جداسازی مدیریت محتوا از مدیریت سیستم
- مجوز انتشار جدا از ایجاد/ویرایش
- مجوز حذف فقط برای نقش‌های محدود
- دسترسی به سیستم آپدیت فقط برای مدیر کل

---

## 4) ماژول‌های اصلی مجوز
- کاربران
- نقش‌ها و دسترسی‌ها
- تنظیمات
- زبان‌ها
- رسانه
- صفحات
- صفحه‌ساز
- منوها
- محصولات
- دسته‌بندی محصولات
- خدمات
- وبلاگ
- فرم‌ها
- سرنخ‌ها
- سئو
- ریدایرکت‌ها
- گزارش‌ها
- ابزارهای تحلیلی
- بکاپ
- آپدیت
- لاگ‌ها

---

## 5) تعریف مجوزها به تفکیک ماژول

## 5.1 کاربران
- users.view
- users.create
- users.edit
- users.delete
- users.activate

## 5.2 نقش‌ها و دسترسی‌ها
- roles.view
- roles.create
- roles.edit
- roles.delete
- permissions.assign

## 5.3 تنظیمات
- settings.view
- settings.edit

## 5.4 زبان‌ها
- languages.view
- languages.edit

## 5.5 رسانه
- media.view
- media.upload
- media.edit
- media.delete

## 5.6 صفحات
- pages.view
- pages.create
- pages.edit
- pages.delete
- pages.publish
- pages.preview

## 5.7 صفحه‌ساز
- page_builder.view
- page_builder.edit

## 5.8 منوها
- menus.view
- menus.edit

## 5.9 محصولات
- products.view
- products.create
- products.edit
- products.delete
- products.publish

## 5.10 دسته‌بندی محصولات
- product_categories.view
- product_categories.create
- product_categories.edit
- product_categories.delete

## 5.11 خدمات
- services.view
- services.create
- services.edit
- services.delete
- services.publish

## 5.12 وبلاگ
- blog.view
- blog.create
- blog.edit
- blog.delete
- blog.publish

## 5.13 فرم‌ها
- forms.view
- forms.edit

## 5.14 سرنخ‌ها و پیام‌ها
- leads.view
- leads.edit
- leads.export
- leads.assign

## 5.15 سئو
- seo.view
- seo.edit
- redirects.manage
- schema.manage

## 5.16 گزارش‌ها
- reports.view

## 5.17 ابزارهای تحلیلی
- analytics.view
- analytics.edit

## 5.18 بکاپ
- backups.view
- backups.create
- backups.restore

## 5.19 آپدیت
- updates.view
- updates.upload
- updates.validate
- updates.apply
- updates.rollback

## 5.20 لاگ‌ها
- logs.view

---

## 6) ماتریس نقش‌ها

## 6.1 مدیر کل
### توضیح
بیشترین سطح دسترسی؛ مسئول همه بخش‌ها و آپدیت سیستم.

### دسترسی
- همه مجوزها: بله

---

## 6.2 مدیر محتوا
### توضیح
مسئول صفحات، منوها، محتوای سایت، خدمات و در صورت نیاز وبلاگ.

### دسترسی‌های اصلی
- pages.* به جز delete در صورت سیاست سخت‌گیرانه
- page_builder.*
- menus.*
- services.*
- media.view/upload/edit
- blog.view/create/edit/publish
- settings.view
- seo.view

### محدودیت‌ها
- بدون دسترسی به users/roles
- بدون access به updates
- بدون restore backup

---

## 6.3 مدیر محصولات
### توضیح
مسئول دسته‌بندی‌ها، محصولات و فایل‌های مرتبط با آن‌ها.

### دسترسی‌های اصلی
- products.*
- product_categories.*
- media.view/upload/edit
- pages.view
- seo.view
- leads.view در حد RFQهای محصولی در صورت نیاز

### محدودیت‌ها
- بدون users/roles
- بدون updates
- بدون settings.edit

---

## 6.4 مدیر سئو
### توضیح
مسئول متاتگ‌ها، اسکیما، ریدایرکت‌ها، تحلیل اولیه سئو.

### دسترسی‌های اصلی
- seo.view
- seo.edit
- redirects.manage
- schema.manage
- reports.view
- analytics.view
- pages.view
- products.view
- blog.view

### محدودیت‌ها
- بدون create/edit محتوای اصلی مگر توافق شود
- بدون updates

---

## 6.5 مترجم
### توضیح
مسئول ترجمه محتوا در زبان‌های سایت.

### دسترسی‌های اصلی
- pages.view
- pages.edit محدود به translation fields
- products.view
- products.edit محدود به translation fields
- services.view
- services.edit محدود به translation fields
- blog.view
- blog.edit محدود به translation fields
- media.view
- seo.view محدود به متای ترجمه‌شده

### محدودیت‌ها
- بدون publish نهایی
- بدون delete
- بدون settings
- بدون users/roles

---

## 6.6 اپراتور فرم‌ها
### توضیح
مسئول مشاهده و پیگیری فرم‌ها، پیام‌ها و سرنخ‌ها.

### دسترسی‌های اصلی
- forms.view
- leads.view
- leads.edit
- leads.assign
- leads.export
- reports.view محدود به فرم‌ها

### محدودیت‌ها
- بدون ویرایش محتوا
- بدون users/roles
- بدون updates

---

## 6.7 ناظر / مشاهده‌گر
### توضیح
فقط مشاهده گزارش‌ها و برخی بخش‌ها.

### دسترسی‌های اصلی
- dashboard view
- reports.view
- pages.view
- products.view
- blog.view
- leads.view در صورت نیاز

### محدودیت‌ها
- بدون create/edit/delete

---

## 7) جدول خلاصه دسترسی نقش‌ها

| ماژول | مدیر کل | مدیر محتوا | مدیر محصولات | مدیر سئو | مترجم | اپراتور فرم‌ها | ناظر |
|---|---|---|---|---|---|---|---|
| کاربران | کامل | خیر | خیر | خیر | خیر | خیر | خیر |
| نقش‌ها | کامل | خیر | خیر | خیر | خیر | خیر | خیر |
| تنظیمات | کامل | مشاهده | خیر | خیر | خیر | خیر | خیر |
| زبان‌ها | کامل | مشاهده | خیر | خیر | خیر | خیر | خیر |
| رسانه | کامل | زیاد | زیاد | مشاهده | مشاهده | خیر | خیر |
| صفحات | کامل | زیاد | مشاهده | مشاهده | ترجمه محدود | خیر | مشاهده |
| صفحه‌ساز | کامل | بله | خیر | خیر | خیر | خیر | خیر |
| منوها | کامل | بله | خیر | خیر | خیر | خیر | خیر |
| محصولات | کامل | مشاهده | کامل | مشاهده | ترجمه محدود | خیر | مشاهده |
| دسته‌بندی محصول | کامل | خیر | کامل | مشاهده | خیر | خیر | مشاهده |
| خدمات | کامل | کامل | خیر | مشاهده | ترجمه محدود | خیر | مشاهده |
| وبلاگ | کامل | کامل | خیر | مشاهده | ترجمه محدود | خیر | مشاهده |
| فرم‌ها/سرنخ‌ها | کامل | خیر | محدود | خیر | خیر | کامل | محدود |
| سئو | کامل | مشاهده | مشاهده | کامل | محدود | خیر | مشاهده |
| گزارش‌ها | کامل | محدود | محدود | بله | خیر | محدود | بله |
| بکاپ | کامل | خیر | خیر | خیر | خیر | خیر | خیر |
| آپدیت | کامل | خیر | خیر | خیر | خیر | خیر | خیر |
| لاگ‌ها | کامل | خیر | خیر | خیر | خیر | خیر | خیر |

---

## 8) قواعد اجرایی مهم
1. مترجم فقط فیلدهای ترجمه را ویرایش کند.
2. انتشار نهایی صفحات/محصولات حداقل در اختیار مدیر محتوا یا مدیر محصول باشد.
3. آپدیت و rollback فقط مدیر کل.
4. restore backup فقط مدیر کل.
5. حذف کاربران و نقش‌ها فقط مدیر کل.
6. تغییر اسکریپت‌های گوگل/تگ‌منیجر فقط مدیر کل یا با مجوز خاص.

---

## 9) پیشنهاد فازبندی پیاده‌سازی مجوزها
### فاز 1
- super_admin
- content_manager
- product_manager
- seo_manager
- translator

### فاز 2
- forms_operator
- viewer
- custom roles UI

---

## 10) جمع‌بندی
این ماتریس باید مبنای پیاده‌سازی RBAC در backend و کنترل نمایش/ویرایش در پنل باشد. در مرحله بعد می‌توان این سند را به لیست دقیق permission seed و policy map تبدیل کرد.
