import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Globe, Mail } from 'lucide-react';
import { useI18n, type Locale, LANGUAGES } from '../i18n';
import { useSettings } from '../api/useApi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { locale, setLocale, t, direction } = useI18n();
  const { data: settings } = useSettings();

  const siteTitle = settings.site_title || 'ARASB Trading';
  // Split into brand parts for styling
  const brandParts = siteTitle.includes(' ') 
    ? [siteTitle.split(' ')[0], siteTitle.split(' ').slice(1).join(' ')]
    : [siteTitle, ''];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), href: '#' },
    { name: t('nav.products'), href: '#products' },
    { name: t('nav.services'), href: '#services' },
    { name: t('nav.process'), href: '#process' },
    { name: t('nav.contact'), href: '#contact' },
  ];

  const localeCodes: Locale[] = ['en', 'fa', 'ar'];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-transparent py-4'}`}>
      {!isScrolled && (
        <div className="hidden lg:block border-b border-white/10 pb-4 mb-4">
          <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between text-[11px] font-bold uppercase tracking-[0.2em] text-white/60`} dir="ltr">
            <div className="flex gap-8">
              <span className="flex items-center gap-2"><Globe size={12} className="text-amber-500"/>{t('nav.globalPartner')}</span>
              <span className="flex items-center gap-2"><Mail size={12} className="text-amber-500"/>{t('nav.email')}</span>
            </div>
            <div>
              <span>{t('nav.region')}</span>
            </div>
          </div>
        </div>
      )}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex justify-between items-center ${direction === 'rtl' ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center">
            <span className={`text-2xl font-bold tracking-tighter ${isScrolled ? 'text-primary' : 'text-white'}`} dir="ltr">
              ARASB<span className="text-amber-500">TRADING</span>
            </span>
          </div>
          
          <div className="hidden md:block">
            <div className={`${direction === 'rtl' ? 'mr-10' : 'ml-10'} flex items-center ${direction === 'rtl' ? 'space-x-reverse' : ''} space-x-8`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium transition-colors hover:text-amber-500 ${isScrolled ? 'text-slate-700' : 'text-white/90'}`}
                >
                  {link.name}
                </a>
              ))}
              <div className={`flex items-center gap-2 px-3 py-1 border rounded-lg text-xs font-bold ${isScrolled ? 'border-slate-200 text-slate-500' : 'border-white/20 text-white/70'}`}>
                {localeCodes.map((code, i) => (
                  <span key={code}>
                    {i > 0 && <span className={`w-px h-3 inline-block ${isScrolled ? 'bg-slate-200' : 'bg-white/20'} mx-1`} />}
                    <span
                      className={`cursor-pointer transition-colors ${code === locale ? 'text-amber-500' : isScrolled ? 'hover:text-slate-900' : 'hover:text-white'}`}
                      onClick={() => setLocale(code)}
                    >
                      {code.toUpperCase()}
                    </span>
                  </span>
                ))}
              </div>
              <button className="bg-amber-600 hover:bg-amber-700 text-white px-5 py-2 rounded-full text-sm font-semibold transition-all shadow-lg hover:shadow-amber-500/20">
                {t('nav.contactUs')}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${isScrolled ? 'text-slate-700' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <motion.div
        initial={false}
        animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        className="md:hidden overflow-hidden bg-white"
      >
        <div className={`px-2 pt-2 pb-3 space-y-1 sm:px-3 border-b border-slate-100 ${direction === 'rtl' ? 'text-right' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="block px-3 py-2 text-base font-medium text-slate-700 hover:text-amber-600 hover:bg-slate-50 rounded-md"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
          {/* Mobile language switcher */}
          <div className="flex gap-3 px-3 py-2">
            {localeCodes.map(code => (
              <button
                key={code}
                onClick={() => { setLocale(code); setIsOpen(false); }}
                className={`px-3 py-1 rounded-md text-sm font-bold ${code === locale ? 'bg-amber-600 text-white' : 'bg-slate-100 text-slate-700'}`}
              >
                {LANGUAGES[code].nativeName}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </nav>
  );
};

export default Navbar;
