# ERD و مدل داده اولیه پروژه ARASB

## 1) هدف سند
این سند، مدل داده اولیه و موجودیت‌های اصلی پروژه ARASB را مشخص می‌کند تا مبنای طراحی دیتابیس، API و توسعه ماژول‌های پنل و سایت قرار بگیرد.

پیشنهاد دیتابیس:
- PostgreSQL

پیشنهاد ORM:
- Prisma

---

## 2) اصول طراحی مدل داده
- پشتیبانی کامل از چندزبانه بودن
- جداسازی محتوای ترجمه‌پذیر از داده پایه
- پشتیبانی از draft/published
- قابلیت توسعه‌پذیری برای page builder
- قابلیت audit و log
- پشتیبانی از فایل و رسانه
- سادگی نسبی در فاز 1 و قابلیت توسعه در فازهای بعدی

---

## 3) موجودیت‌های اصلی

### هسته سیستمی
- User
- Role
- Permission
- RolePermission
- UserRole
- Setting
- Language
- AuditLog

### محتوا و CMS
- Page
- PageTranslation
- PageVersion
- PageBlock
- PageBlockTranslation
- Menu
- MenuItem

### محصولات
- ProductCategory
- ProductCategoryTranslation
- Product
- ProductTranslation
- ProductAttribute
- ProductAttributeValue
- ProductAttachment
- ProductRelatedItem

### خدمات
- Service
- ServiceTranslation

### وبلاگ
- BlogCategory
- BlogCategoryTranslation
- BlogPost
- BlogPostTranslation
- BlogTag
- BlogTagTranslation
- BlogPostTag

### رسانه
- Media
- MediaTranslation
- FileFolder

### فرم و سرنخ
- FormDefinition
- FormField
- FormSubmission
- FormSubmissionValue
- Lead

### سئو و مسیرها
- SEOEntry
- RedirectRule
- SlugHistory

### سیستم و زیرساخت
- UpdatePackage
- SystemBackup
- JobLog
- Notification

---

## 4) مدل موجودیت‌ها

## 4.1 Language
هدف: تعریف زبان‌های سایت

فیلدها:
- id
- code (`fa`, `en`, `ar`)
- name
- nativeName
- direction (`rtl`/`ltr`)
- isDefault
- isActive
- sortOrder
- createdAt
- updatedAt

روابط:
- با تمام translation tableها به صورت غیرمستقیم

---

## 4.2 User
فیلدها:
- id
- fullName
- email
- mobile
- passwordHash
- isActive
- lastLoginAt
- createdAt
- updatedAt
- createdBy
- updatedBy

روابط:
- UserRole
- AuditLog
- Notification

---

## 4.3 Role
فیلدها:
- id
- name
- key
- description
- isSystem
- createdAt
- updatedAt

روابط:
- UserRole
- RolePermission

---

## 4.4 Permission
فیلدها:
- id
- key
- module
- description
- createdAt
- updatedAt

نمونه keyها:
- users.view
- users.create
- users.edit
- pages.view
- pages.edit
- products.publish
- seo.manage
- updates.apply

---

## 4.5 UserRole
فیلدها:
- id
- userId
- roleId
- createdAt

---

## 4.6 RolePermission
فیلدها:
- id
- roleId
- permissionId

---

## 4.7 Setting
هدف: تنظیمات عمومی سایت و سیستم

فیلدها:
- id
- groupKey
- key
- valueType
- valueText
- valueJson
- isPublic
- createdAt
- updatedAt

نمونه گروه‌ها:
- site
- company
- contact
- social
- seo
- scripts
- smtp
- security

---

## 4.8 AuditLog
فیلدها:
- id
- userId
- module
- action
- entityType
- entityId
- oldValueJson
- newValueJson
- ipAddress
- userAgent
- createdAt

---

## 5) CMS و صفحات

## 5.1 Page
فیلدها:
- id
- type (`standard`, `landing`, `system`, `product-list`, `service-list`, `blog-list`)
- slugBase
- status (`draft`, `published`, `scheduled`, `archived`)
- parentId
- templateKey
- showInSitemap
- publishedAt
- sortOrder
- createdBy
- updatedBy
- createdAt
- updatedAt

روابط:
- PageTranslation
- PageVersion
- PageBlock
- SEOEntry

---

## 5.2 PageTranslation
فیلدها:
- id
- pageId
- languageCode
- title
- slug
- excerpt
- contentJson
- metaTitle
- metaDescription
- canonicalUrl
- ogTitle
- ogDescription
- ogImageMediaId
- isPublished
- createdAt
- updatedAt

یادداشت:
- contentJson می‌تواند برای block-based content نگهداری شود یا فقط fallback محتوایی باشد.

---

## 5.3 PageVersion
فیلدها:
- id
- pageId
- languageCode
- versionNumber
- snapshotJson
- createdBy
- createdAt

---

## 5.4 PageBlock
فیلدها:
- id
- pageId
- blockType
- blockKey
- sortOrder
- configJson
- isActive
- createdAt
- updatedAt

نمونه blockTypeها:
- hero
- text
- image
- gallery
- cta
- faq
- stats
- products
- services
- countries
- contact-form

---

## 5.5 PageBlockTranslation
فیلدها:
- id
- pageBlockId
- languageCode
- title
- subtitle
- body
- dataJson
- createdAt
- updatedAt

---

## 5.6 Menu
فیلدها:
- id
- key
- title
- location (`header`, `footer`, `mobile`, `sidebar`)
- isActive
- createdAt
- updatedAt

---

## 5.7 MenuItem
فیلدها:
- id
- menuId
- parentId
- type (`custom`, `page`, `product-category`, `service`, `blog-category`)
- refId
- url
- languageCode
- title
- target
- sortOrder
- isActive
- createdAt
- updatedAt

---

## 6) محصولات

## 6.1 ProductCategory
فیلدها:
- id
- parentId
- slugBase
- status
- imageMediaId
- sortOrder
- createdAt
- updatedAt

---

## 6.2 ProductCategoryTranslation
فیلدها:
- id
- productCategoryId
- languageCode
- title
- slug
- description
- metaTitle
- metaDescription
- createdAt
- updatedAt

---

## 6.3 Product
فیلدها:
- id
- sku
- slugBase
- status (`draft`, `published`, `archived`)
- productCategoryId
- featuredImageMediaId
- galleryJson
- minOrderQty
- packagingInfoJson
- shippingInfoJson
- leadTimeText
- isFeatured
- sortOrder
- publishedAt
- createdBy
- updatedBy
- createdAt
- updatedAt

---

## 6.4 ProductTranslation
فیلدها:
- id
- productId
- languageCode
- title
- slug
- shortDescription
- fullDescription
- applications
- featuresJson
- specificationsJson
- faqJson
- metaTitle
- metaDescription
- canonicalUrl
- createdAt
- updatedAt

---

## 6.5 ProductAttribute
فیلدها:
- id
- key
- inputType (`text`, `number`, `select`, `boolean`, `json`)
- sortOrder
- isFilterable
- isVisibleOnPage
- createdAt
- updatedAt

---

## 6.6 ProductAttributeValue
فیلدها:
- id
- productId
- productAttributeId
- valueText
- valueJson
- createdAt
- updatedAt

---

## 6.7 ProductAttachment
فیلدها:
- id
- productId
- mediaId
- type (`catalog`, `certificate`, `analysis`, `datasheet`, `other`)
- title
- languageCode
- sortOrder
- createdAt

---

## 6.8 ProductRelatedItem
فیلدها:
- id
- productId
- relatedProductId
- sortOrder

---

## 7) خدمات

## 7.1 Service
فیلدها:
- id
- slugBase
- status
- featuredImageMediaId
- sortOrder
- createdAt
- updatedAt

## 7.2 ServiceTranslation
فیلدها:
- id
- serviceId
- languageCode
- title
- slug
- shortDescription
- fullDescription
- featuresJson
- processJson
- metaTitle
- metaDescription
- createdAt
- updatedAt

---

## 8) وبلاگ

## 8.1 BlogCategory
فیلدها:
- id
- parentId
- slugBase
- status
- sortOrder
- createdAt
- updatedAt

## 8.2 BlogCategoryTranslation
فیلدها:
- id
- blogCategoryId
- languageCode
- title
- slug
- description
- metaTitle
- metaDescription

## 8.3 BlogPost
فیلدها:
- id
- slugBase
- status
- featuredImageMediaId
- authorUserId
- blogCategoryId
- publishedAt
- createdAt
- updatedAt

## 8.4 BlogPostTranslation
فیلدها:
- id
- blogPostId
- languageCode
- title
- slug
- excerpt
- contentJson
- metaTitle
- metaDescription
- createdAt
- updatedAt

## 8.5 BlogTag
فیلدها:
- id
- key
- createdAt
- updatedAt

## 8.6 BlogTagTranslation
فیلدها:
- id
- blogTagId
- languageCode
- title
- slug

## 8.7 BlogPostTag
فیلدها:
- id
- blogPostId
- blogTagId

---

## 9) رسانه و فایل‌ها

## 9.1 FileFolder
فیلدها:
- id
- parentId
- name
- createdAt
- updatedAt

## 9.2 Media
فیلدها:
- id
- folderId
- fileName
- originalName
- extension
- mimeType
- fileSize
- disk
- path
- checksum
- width
- height
- duration
- uploadedBy
- createdAt
- updatedAt

## 9.3 MediaTranslation
فیلدها:
- id
- mediaId
- languageCode
- altText
- title
- description

---

## 10) فرم‌ها و سرنخ‌ها

## 10.1 FormDefinition
فیلدها:
- id
- key
- title
- targetEntity (`contact`, `rfq`, `newsletter`, `representation`, `supplier`, `custom`)
- isActive
- notifyEmailsJson
- successRedirectUrl
- settingsJson
- createdAt
- updatedAt

## 10.2 FormField
فیلدها:
- id
- formDefinitionId
- fieldKey
- labelJson
- fieldType
- placeholderJson
- isRequired
- validationJson
- sortOrder
- createdAt
- updatedAt

## 10.3 FormSubmission
فیلدها:
- id
- formDefinitionId
- languageCode
- sourcePage
- ipAddress
- userAgent
- status (`new`, `in_review`, `done`, `spam`)
- submittedAt
- createdLeadId

## 10.4 FormSubmissionValue
فیلدها:
- id
- formSubmissionId
- fieldKey
- valueText
- valueJson

## 10.5 Lead
فیلدها:
- id
- source (`contact`, `rfq`, `catalog`, `newsletter`, `manual`)
- fullName
- email
- mobile
- companyName
- country
- notes
- status (`new`, `contacted`, `qualified`, `closed`, `rejected`)
- assignedToUserId
- createdAt
- updatedAt

---

## 11) سئو و مسیرها

## 11.1 SEOEntry
فیلدها:
- id
- entityType (`page`, `product`, `category`, `service`, `blog-post`, `blog-category`, `system`)
- entityId
- languageCode
- metaTitle
- metaDescription
- canonicalUrl
- robotsIndex
- robotsFollow
- ogTitle
- ogDescription
- ogImageMediaId
- twitterTitle
- twitterDescription
- schemaJson
- createdAt
- updatedAt

## 11.2 RedirectRule
فیلدها:
- id
- fromPath
- toPath
- statusCode (`301`, `302`, `307`, `308`)
- isActive
- createdAt
- updatedAt

## 11.3 SlugHistory
فیلدها:
- id
- entityType
- entityId
- languageCode
- oldSlug
- newSlug
- changedAt

---

## 12) سیستم و نگه‌داری

## 12.1 UpdatePackage
فیلدها:
- id
- version
- packageName
- fileMediaId
- checksum
- manifestJson
- uploadedBy
- status (`uploaded`, `validated`, `applied`, `failed`, `rolled_back`)
- logJson
- createdAt
- updatedAt

## 12.2 SystemBackup
فیلدها:
- id
- type (`manual`, `pre-update`, `scheduled`)
- filePath
- sizeBytes
- status
- createdBy
- createdAt

## 12.3 JobLog
فیلدها:
- id
- jobType
- status
- payloadJson
- resultJson
- startedAt
- finishedAt

## 12.4 Notification
فیلدها:
- id
- userId
- title
- body
- type
- isRead
- actionUrl
- createdAt

---

## 13) روابط کلیدی
- User ↔ Role از طریق UserRole
- Role ↔ Permission از طریق RolePermission
- Page ↔ PageTranslation یک‌به‌چند
- Page ↔ PageBlock یک‌به‌چند
- PageBlock ↔ PageBlockTranslation یک‌به‌چند
- ProductCategory ↔ ProductCategoryTranslation یک‌به‌چند
- Product ↔ ProductTranslation یک‌به‌چند
- Product ↔ ProductAttachment یک‌به‌چند
- Product ↔ ProductAttributeValue یک‌به‌چند
- Product ↔ ProductCategory چندبه‌یک
- Service ↔ ServiceTranslation یک‌به‌چند
- BlogPost ↔ BlogPostTranslation یک‌به‌چند
- BlogPost ↔ BlogTag چندبه‌چند
- FormSubmission ↔ FormSubmissionValue یک‌به‌چند
- FormSubmission ↔ Lead اختیاری
- Media با چندین entity قابل ارتباط است
- SEOEntry به entityهای مختلف متصل می‌شود

---

## 14) قواعد مهم طراحی
1. تمام entityهای محتوایی ترجمه‌پذیر باید translation table داشته باشند.
2. slug در سطح translation نگهداری شود.
3. فیلدهای مشترک و غیرزبانی در table اصلی باشند.
4. محتوای block-based در JSON و tableهای translation پشتیبانی شود.
5. audit log برای عملیات مهم ادمین نگهداری شود.
6. تمام statusها enum استاندارد داشته باشند.

---

## 15) موجودیت‌های ضروری فاز 1
برای شروع سریع، پیاده‌سازی اولیه این‌ها کافی است:
- User
- Role
- Permission
- UserRole
- RolePermission
- Setting
- Language
- Media
- Page
- PageTranslation
- ProductCategory
- ProductCategoryTranslation
- Product
- ProductTranslation
- AuditLog

---

## 16) موجودیت‌های فاز 2 و بعد
- PageVersion
- PageBlock
- PageBlockTranslation
- Menu
- MenuItem
- FormDefinition
- FormField
- FormSubmission
- FormSubmissionValue
- Lead
- SEOEntry
- RedirectRule
- Blog* tables
- UpdatePackage
- SystemBackup

---

## 17) جمع‌بندی
این ERD پایه، ساختار لازم برای سایت چندزبانه، پنل فارسی، CMS، مدیریت محصول، فرم‌ها، سئو، رسانه و آپدیت را فراهم می‌کند. در مرحله بعد می‌توان بر اساس این سند، Prisma schema اولیه یا ERD تصویری دقیق‌تری ساخت.
