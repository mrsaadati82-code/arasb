# مدل داده اجرایی MVP برای ARASB

## 1) هدف
این سند، مدل داده اجرایی MVP را با نگاه عملیاتی و سازگار با PHP/MySQL مشخص می‌کند. این نسخه از مدل داده از ERD بزرگ‌تر قبلی استخراج شده و فقط موجودیت‌هایی را نگه می‌دارد که برای شروع واقعی پروژه لازم هستند.

---

## 2) موجودیت‌های داخل MVP
- admins
- roles
- permissions
- admin_role
- role_permission
- languages
- settings
- pages
- page_translations
- page_sections
- page_section_translations
- product_categories
- product_category_translations
- products
- product_translations
- media
- media_translations
- contact_submissions
- seo_entries
- update_packages
- audit_logs

---

## 3) جدول‌ها

## 3.1 admins
- id
- full_name
- email
- mobile
- password_hash
- is_active
- last_login_at
- created_at
- updated_at

## 3.2 roles
- id
- name
- role_key
- description
- is_system
- created_at
- updated_at

## 3.3 permissions
- id
- permission_key
- module_key
- description
- created_at
- updated_at

## 3.4 admin_role
- admin_id
- role_id

## 3.5 role_permission
- role_id
- permission_id

## 3.6 languages
- id
- code
- name
- native_name
- direction
- is_default
- is_active
- sort_order
- created_at
- updated_at

### رکوردهای اولیه
- fa / فارسی / rtl / default
- en / English / ltr
- ar / العربية / rtl

## 3.7 settings
- id
- group_key
- setting_key
- value_type
- value_text
- value_json
- is_public
- created_at
- updated_at

### گروه‌های اولیه
- site
- company
- contact
- social
- seo
- scripts

## 3.8 pages
- id
- page_key
- page_type
- status
- template_key
- show_in_sitemap
- sort_order
- created_by
- updated_by
- created_at
- updated_at

### page_keyهای اولیه
- home
- about
- products
- contact

## 3.9 page_translations
- id
- page_id
- language_code
- title
- slug
- excerpt
- content_json
- meta_title
- meta_description
- canonical_url
- is_published
- created_at
- updated_at

## 3.10 page_sections
این جدول برای حفظ UI دقیق بسیار مهم است.

- id
- page_id
- section_key
- section_type
- sort_order
- is_active
- config_json
- created_at
- updated_at

### section_keyهای اولیه برای home
- hero
- expertise
- products
- showcase
- services
- countries
- process
- commitment
- contact

## 3.11 page_section_translations
- id
- page_section_id
- language_code
- title
- subtitle
- body
- data_json
- created_at
- updated_at

### نکته
برای هر سکشن، data_json می‌تواند متن‌ها، CTAها، itemها و لیست‌ها را نگه دارد بدون اینکه layout آزاد شود.

## 3.12 product_categories
- id
- parent_id
- category_key
- status
- image_media_id
- sort_order
- created_at
- updated_at

## 3.13 product_category_translations
- id
- product_category_id
- language_code
- title
- slug
- description
- meta_title
- meta_description
- created_at
- updated_at

## 3.14 products
- id
- product_category_id
- product_key
- sku
- status
- featured_image_media_id
- gallery_json
- is_featured
- sort_order
- published_at
- created_by
- updated_by
- created_at
- updated_at

## 3.15 product_translations
- id
- product_id
- language_code
- title
- slug
- short_description
- full_description
- features_json
- specifications_json
- meta_title
- meta_description
- canonical_url
- created_at
- updated_at

## 3.16 media
- id
- file_name
- original_name
- extension
- mime_type
- file_size
- storage_disk
- storage_path
- checksum
- width
- height
- uploaded_by
- created_at
- updated_at

## 3.17 media_translations
- id
- media_id
- language_code
- alt_text
- title
- description
- created_at
- updated_at

## 3.18 contact_submissions
- id
- full_name
- email
- mobile
- company_name
- country
- subject
- message
- language_code
- source_page
- status
- ip_address
- user_agent
- created_at
- updated_at

### statusهای اولیه
- new
- in_review
- done
- spam

## 3.19 seo_entries
- id
- entity_type
- entity_id
- language_code
- meta_title
- meta_description
- canonical_url
- robots_index
- robots_follow
- og_title
- og_description
- og_image_media_id
- schema_json
- created_at
- updated_at

## 3.20 update_packages
- id
- version
- package_name
- file_path
- checksum
- manifest_json
- uploaded_by
- status
- log_json
- created_at
- updated_at

## 3.21 audit_logs
- id
- admin_id
- module_key
- action_key
- entity_type
- entity_id
- old_value_json
- new_value_json
- ip_address
- user_agent
- created_at

---

## 4) دلیل استفاده از page_sections
برای حفظ UI دقیق، در MVP نباید page builder آزاد داشته باشیم.

به‌جای آن:
- هر سکشن صفحه شناسه ثابت دارد
- ساختار داده سکشن کنترل‌شده است
- فقط محتوا قابل ویرایش است
- layout از کنترل خارج نمی‌شود

این کار باعث می‌شود:
- ظاهر تاییدشده خراب نشود
- داینامیک‌سازی امن‌تر باشد
- مدیریت محتوا ساده‌تر شود

---

## 5) داده‌های عمومی که از API خوانده می‌شوند
- site settings
- active languages
- homepage sections
- menus later
- products featured
- contact information
- SEO per page/language

---

## 6) داده‌های غیرضروری برای بعد
این‌ها در MVP لازم نیستند:
- blog tables
- leads CRM پیشرفته
- page versions کامل
- redirects manager کامل
- backups catalog کامل
- notification center
- workflow publication پیشرفته

---

## 7) جمع‌بندی
این مدل داده MVP تعادل بین سه نیاز مهم پروژه را حفظ می‌کند:
1. حفظ UI دقیق تاییدشده
2. مدیریت واقعی محتوا و چندزبانه
3. سازگاری با هاست اشتراکی و توسعه مرحله‌ای
