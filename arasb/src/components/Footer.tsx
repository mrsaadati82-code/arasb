import { Globe, MessageSquare, Send, Share2, Mail, Phone, MapPin } from 'lucide-react';
import { useI18n } from '../i18n';
import { useSettings } from '../api/useApi';

const Footer = () => {
  const { t } = useI18n();
  const { data: settings } = useSettings();

  const contactEmail = settings.email || 'info@arasbtrading.com';
  const contactPhone = settings.phone || '+98 21 8888 8888';
  const siteTitle = settings.site_title || 'ARASB Trading';

  return (
    <footer className="bg-slate-50 pt-24 pb-12 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <span className="text-2xl font-bold tracking-tighter text-slate-900 mb-6 block" dir="ltr">
              ARASB<span className="text-amber-600">TRADING</span>
            </span>
            <p className="text-slate-500 mb-8 leading-relaxed">
              {t('footer.description', 'Leading the way in Iranian exports. Providing premium quality products and professional logistics solutions to global markets.')}
            </p>
            <div className="flex gap-4">
              {[Globe, MessageSquare, Send, Share2].map((Icon, i) => (
                <a key={i} href="#" className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-amber-600 hover:border-amber-600 transition-all">
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">{t('footer.quickLinks', 'Quick Links')}</h4>
            <ul className="space-y-4">
              {[t('nav.home', 'Home'), t('footer.aboutUs', 'About Us'), t('footer.products', 'Products'), t('nav.services', 'Services'), t('nav.contact', 'Contact')].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">{t('footer.productCategories', 'Products')}</h4>
            <ul className="space-y-4">
              {[t('footer.freshFruits', 'Fresh Fruits'), t('footer.driedFruits', 'Dried Fruits'), t('footer.spices', 'Spices'), t('footer.petroleum', 'Petroleum'), t('footer.petrochemicals', 'Petrochemicals')].map((item) => (
                <li key={item}>
                  <a href="#" className="text-slate-500 hover:text-amber-600 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-widest text-slate-900 mb-6">{t('footer.contactInfo', 'Contact Info')}</h4>
            <ul className="space-y-4 text-slate-500">
              <li className="flex items-center gap-3"><Mail size={16} className="text-amber-500" /> {contactEmail}</li>
              <li className="flex items-center gap-3"><Phone size={16} className="text-amber-500" /> {contactPhone}</li>
              <li className="flex items-center gap-3"><MapPin size={16} className="text-amber-500" /> Tehran, Iran</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 text-center text-slate-400 text-sm">
          © {new Date().getFullYear()} {siteTitle}. {t('footer.rights', 'All rights reserved.')}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
