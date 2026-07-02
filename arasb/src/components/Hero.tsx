import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useI18n } from '../i18n';
import { useHomeSections, findSection } from '../api/useApi';

const Hero = () => {
  const { t, locale, direction } = useI18n();
  const { data: sections } = useHomeSections(locale);
  const heroSection = findSection(sections, 'hero');
  const heroT = heroSection?.translation;

  // Use API content if available, fallback to i18n translations
  const badge = heroT?.badge || heroT?.subtitle || t('hero.badge', 'Leading Export Partner');
  const title1 = heroT?.title || t('hero.title1', 'Empowering Your Access to');
  const title2 = t('hero.title2', 'Premium Iranian Exports'); // Keep the gold line static (it's the brand identity)
  const description = heroT?.description || t('hero.description', 'Specialized in supplying premium Iranian products to European and Arab markets. We manage the entire export lifecycle with precision and reliability.');

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900" style={{ paddingTop: '6rem' }}>
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 z-0 scale-105 animate-slow-zoom"
        style={{
          backgroundImage: 'url("/hero-trading.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className={`absolute inset-0 ${direction === 'rtl' ? 'bg-gradient-to-l' : 'bg-gradient-to-r'} from-slate-950/90 via-slate-950/60 to-transparent`} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className={`max-w-3xl ${direction === 'rtl' ? 'mr-0 ml-auto text-right' : ''}`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 text-sm font-semibold mb-6">
              {badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-6">
              {title1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">
                {title2}
              </span>
            </h1>
            <p className="text-xl text-slate-300 mb-10 leading-relaxed max-w-2xl">
              {description}
            </p>
            
            <div className={`flex flex-col sm:flex-row gap-4 ${direction === 'rtl' ? 'sm:flex-row-reverse' : ''}`}>
              <button className="flex items-center justify-center gap-2 bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-amber-600/20">
                {t('hero.exploreProducts', 'Explore Products')} <ArrowRight size={20} className={direction === 'rtl' ? 'rotate-180' : ''} />
              </button>
              <button className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-full font-bold transition-all">
                {t('hero.ourServices', 'Our Services')}
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-widest font-medium">{t('hero.scrollToExplore', 'Scroll to explore')}</span>
        <ChevronDown className="animate-bounce" />
      </motion.div>
    </section>
  );
};

export default Hero;
