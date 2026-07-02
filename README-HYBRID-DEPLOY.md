# ARASB Hybrid Deploy Package

## هدف این پکیج
این بسته برای حالتی ساخته شده که:
- Document Root روی پوشه `public` است
- public site باید دقیقاً همان React UI تاییدشده باشد
- admin و api باید با PHP در همان نصب در دسترس باشند

## ساختار
- `public/index.html` = نسخه build شده React اصلی
- `public/admin/index.php` = پنل ادمین foundation
- `public/api/index.php` = API foundation

## آدرس‌های تست
### Public
- /
- هر مسیر public فرانت React

### Admin
- /admin/login
- /admin
- /admin/settings
- /admin/home-sections
- /admin/contact-submissions

### API
- /api/settings
- /api/languages
- /api/home-sections?locale=fa
- /api/products
- POST /api/contact-submit

## Document Root
باید روی این باشد:
- `.../public`

## نکته مهم
در این پکیج public prototype قبلی حذف شده و جای آن build اصلی React قرار گرفته است.
