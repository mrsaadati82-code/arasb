# معماری پیشنهادی نهایی پروژه ARASB

## 1) هدف سند
این سند، معماری نهایی پیشنهادی برای تبدیل ARASB به یک پلتفرم production-grade را توضیح می‌دهد؛ با حفظ ظاهر فعلی سایت، توسعه صفحات جدید با همان هویت بصری، پنل مدیریت فارسی با UX/UI بسیار قوی، و زیرساختی ماژولار و قابل توسعه.

---

## 2) اصول کلیدی معماری
1. **حفظ ظاهر و هویت بصری فعلی سایت**
2. **گسترش طراحی به تمام صفحات با design system یکپارچه**
3. **پنل مدیریت فارسی با UX ممتاز و حرفه‌ای**
4. **سایت کاربر 3 زبانه: فارسی، انگلیسی، عربی**
5. **معماری ماژولار و قابل توسعه**
6. **SEO-friendly rendering**
7. **قابلیت مدیریت محتوا بدون نیاز به توسعه‌دهنده**
8. **زیرساخت آماده برای آپدیت، بکاپ، گزارش و رشد آینده**

---

## 3) تصمیم اصلی معماری
### پیشنهاد نهایی
- **Frontend Public:** Next.js
- **Admin Panel:** Next.js
- **Backend API:** NestJS
- **Database:** PostgreSQL
- **ORM:** Prisma
- **Shared UI/Types/Config:** packages مشترک در monorepo

---

## 4) معماری کلان سیستم

### 4.1 لایه‌ها
#### لایه 1: Public Web App
- نمایش سایت اصلی برای کاربران
- 3 زبانه
- SEO-friendly
- صفحات محتوا، محصول، خدمات، بلاگ، فرم‌ها

#### لایه 2: Admin Panel
- پنل مدیریت فارسی
- مدیریت محتوا، محصولات، فرم‌ها، سئو، کاربران، تنظیمات، آپدیت‌ها
- UX بسیار قوی برای اپراتور غیرتکنیکال

#### لایه 3: API Backend
- مدیریت داده‌ها، احراز هویت، نقش‌ها، محتوا، محصولات، رسانه، سئو، فرم‌ها و ...

#### لایه 4: Database + Storage
- PostgreSQL برای داده‌های ساختاریافته
- Local/S3-compatible storage برای فایل‌ها

---

## 5) ساختار monorepo پیشنهادی
- `apps/web`
- `apps/admin`
- `apps/api`
- `packages/ui`
- `packages/design-tokens`
- `packages/types`
- `packages/config`
- `docs`

### نقش هر بخش
#### `apps/web`
سایت عمومی با حفظ UI فعلی و توسعه صفحات جدید

#### `apps/admin`
پنل مدیریت فارسی با رابط مدرن و premium

#### `apps/api`
بک‌اند NestJS و تمام منطق کسب‌وکار

#### `packages/ui`
کامپوننت‌های مشترک قابل استفاده بین web و admin در حد نیاز

#### `packages/design-tokens`
رنگ‌ها، spacing، radius، typography، shadows، motion tokens

#### `packages/types`
تایپ‌های مشترک TypeScript

#### `packages/config`
تنظیمات مشترک lint, tsconfig, theme config, env helpers

---

## 6) معماری فرانت‌اند عمومی

## 6.1 هدف
ساخت سایتی که:
- ظاهر فعلی را حفظ کند
- از نظر سئو و سرعت بهتر شود
- برای صفحات جدید هم همان سبک visual را ادامه دهد
- 3 زبانه و fully responsive باشد

## 6.2 اصول UI/UX سایت
- حفظ palette و حس بصری فعلی: slate + amber + white
- حفظ زبان طراحی لوکس/شرکتی/بین‌المللی
- استفاده از spacing باز و premium
- انیمیشن‌های ظریف و نه اغراق‌آمیز
- consistency در کارت‌ها، سکشن‌ها، CTAها و فرم‌ها
- طراحی داخلی صفحات بر اساس همان DNA فعلی

## 6.3 design system سایت
### اجزای پایه
- رنگ‌های اصلی
- فونت‌ها
- heading scale
- button variants
- card variants
- section container
- form components
- badges
- chips
- tabs
- breadcrumbs
- tables
- empty states

### توکن‌های بصری پیشنهادی
- رنگ اصلی تیره: slate/navy
- رنگ accent: amber/gold
- radiusهای بزرگ و مدرن
- shadowهای نرم
- gradients کنترل‌شده
- glass / overlay patterns محدود و هدفمند

## 6.4 ساختار صفحات
- root layout
- locale layout
- shared header/footer
- content templates
- product templates
- blog templates
- landing page templates

---

## 7) معماری پنل مدیریت

## 7.1 هدف
ساخت پنل مدیریتی که:
- کاملاً فارسی باشد
- RTL کامل و polished داشته باشد
- برای استفاده روزمره سریع، واضح و لذت‌بخش باشد
- اپراتور را گیج نکند
- حتی برای کاربر غیرتکنیکال هم راحت باشد

## 7.2 اصول UX پنل
1. **وضوح بالا**: کاربر همیشه بداند کجاست و چه کاری می‌کند.
2. **حداقل اصطکاک**: فرم‌ها کوتاه، واضح و بخش‌بندی‌شده باشند.
3. **ترجیح تجربه کاربری بر پیچیدگی فنی**
4. **طراحی premium و enterprise-like**
5. **جریان‌های کاری کوتاه و منطقی**
6. **جستجوی داخلی و quick actions**
7. **autosave و draft در جاهای لازم**
8. **feedback واضح**: موفقیت، خطا، هشدار، وضعیت انتشار

## 7.3 طراحی ظاهری پنل
### زبان طراحی پیشنهادی
- تم روشن با کنتراست مناسب
- ترکیب سفید، slate، سطوح نرم و accentهای amber/blue کنترل‌شده
- کارت‌های تمیز
- radius مناسب
- typography فارسی خوانا
- skeleton loading خوب
- dialogها و drawerهای حرفه‌ای

### اجزای پنل
- App Shell
- Sidebar هوشمند
- Topbar با جستجو و اعلان‌ها
- Breadcrumb فارسی
- Command bar / quick actions
- Dashboard widgets
- Form layouts چندمرحله‌ای
- Table views حرفه‌ای
- Filter panels
- Media picker
- SEO side panel
- Translation status indicators
- Publish workflow indicators

## 7.4 ویژگی‌های UX خیلی مهم پنل
- فرم‌های بخش‌بندی‌شده با تب‌ها
- sticky action bar
- پیش‌نمایش زنده یا نزدیک به زنده
- هشدار برای خروج بدون ذخیره
- امکان duplicate برای صفحات و محصولات
- وضعیت ترجمه برای هر زبان
- امکان جستجو در محتوای پنل
- bulk actions
- inline help متن کوتاه فارسی

---

## 8) معماری بک‌اند

## 8.1 ماژولار بودن
هر domain به صورت module مستقل پیاده‌سازی شود:
- auth
- users
- roles
- settings
- languages
- media
- pages
- page-builder
- menus
- products
- product-categories
- services
- blog
- forms
- leads
- seo
- redirects
- analytics-config
- updates
- backups
- audit-logs

## 8.2 الگوی داخلی پیشنهادی
- Controller
- Service
- DTO
- Repository/Data access layer
- Policy/Guard
- Mapper/Serializer

## 8.3 اصل مهم
منطق business باید در backend باشد، نه در admin/frontend.

---

## 9) معماری چندزبانه

## 9.1 سایت کاربر
- 3 زبان: fa, en, ar
- URL-based locale
- محتوای مستقل برای هر زبان
- UI ثابت ترجمه‌شده
- SEO fields per locale
- hreflang
- RTL/LTR switching

## 9.2 پنل مدیریت
- فقط فارسی
- محتوای هر زبان در فرم‌های جداگانه یا تب‌بندی‌شده مدیریت شود
- status ترجمه مشخص باشد

---

## 10) معماری CMS و صفحه‌ساز

## 10.1 رویکرد پیشنهادی
در فاز اول، page builder از نوع block-based باشد:
- امن‌تر
- توسعه‌پذیرتر
- کنترل‌پذیرتر
- UX بهتر برای ادمین

## 10.2 نحوه کار
- هر صفحه از بلوک‌ها تشکیل شود
- هر بلوک تنظیمات مشخص داشته باشد
- برای هر بلوک محتوای زبانی جدا وجود داشته باشد
- ترتیب بلوک‌ها قابل مدیریت باشد

## 10.3 بلوک‌های اولیه
- Hero
- Rich Text
- Feature Grid
- Image
- Gallery
- CTA
- FAQ
- Stats
- Product List
- Service List
- Countries Grid
- Contact Form
- Certificates
- Timeline/Process

---

## 11) معماری محصولات
### اهداف
- مدیریت محصولات تجاری/صادراتی
- دسته‌بندی و ترجمه
- صفحه محصول قدرتمند
- فایل‌های ضمیمه
- فرم RFQ
- SEO و schema محصول

### اصل UX
مدیریت محصول در پنل باید شبیه یک flow ساده باشد:
1. اطلاعات پایه
2. ترجمه‌ها
3. تصاویر و فایل‌ها
4. مشخصات
5. سئو
6. انتشار

---

## 12) معماری سئو
- metadata per locale
- canonical
- robots
- hreflang
- schema JSON-LD
- redirects
- sitemap generation
- preview snippets در پنل

---

## 13) معماری آپدیت و بکاپ
### پیشنهاد فنی
در فاز اول، ساختار باید طوری طراحی شود که بعداً Update Manager به آن متصل شود.

### رویکرد بهتر
- artifact-based release
- backup before update
- migrations
- health check after update
- rollback support

### نکته
UI آپدیت در پنل باید ساده و بسیار ایمن باشد.

---

## 14) معماری DevOps
- Docker
- staging environment
- production environment
- CI برای lint/build/test
- CD با approval
- backup policy
- environment-based config

---

## 15) حفظ UI فعلی و توسعه آن
### تصمیم بسیار مهم
ظاهر فعلی سایت **حفظ می‌شود** و به عنوان هویت پایه visual system در نظر گرفته می‌شود.

### کارهای لازم
1. استخراج design tokens از UI فعلی
2. تعریف reusable section patterns
3. تعریف page templates با همان سبک
4. طراحی صفحات جدید با همان DNA
5. پرهیز از شکستن visual consistency

### نتیجه
صفحات جدید مثل About, Product Detail, Blog, Contact, Markets و ... باید طوری طراحی شوند که انگار از ابتدا بخشی از همین سایت بوده‌اند.

---

## 16) جمع‌بندی نهایی
پیشنهاد اصلی این است که **هم‌زمان با شروع ساخت واقعی پروژه، طراحی سیستم و معماری UI هم تثبیت شود**؛ نه اینکه بعداً وصله‌پینه شود. به این صورت:
- UI فعلی حفظ می‌شود
- UX سایت حرفه‌ای‌تر می‌شود
- پنل مدیریت فارسی در سطح بالا طراحی می‌شود
- زیرساخت ماژولار و قابل توسعه شکل می‌گیرد

این معماری هم برای لانچ اولیه مناسب است و هم برای رشد بعدی.
