import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

const Showcase = () => {
  const { t, direction } = useI18n();

  return (
    <section className="py-24 bg-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {/* Saffron Section */}
          <div className={`flex flex-col lg:flex-row items-center gap-16 ${direction === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
            <motion.div 
              initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="text-amber-500 font-bold uppercase tracking-widest mb-4">{t('showcase.saffron.badge', 'The Red Gold')}</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t('showcase.saffron.title1', 'Authentic Persian')} <br />{t('showcase.saffron.title2', 'Saffron (Grade A)')}
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {t('showcase.saffron.description', 'Known for its intense aroma and deep color, our saffron is hand-picked and tested for purity in international laboratories. We provide bulk supplies with complete certification for global distributors.')}
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <p className="text-2xl font-bold text-white">100%</p>
                  <p className="text-sm text-slate-500 uppercase tracking-tighter">{t('showcase.saffron.purity', 'Organic Purity')}</p>
                </div>
                <div>
                  <p className="text-2xl font-bold text-white">{t('showcase.saffron.grade', 'Saffron')}</p>
                  <p className="text-sm text-slate-500 uppercase tracking-tighter">{t('showcase.saffron.grade', 'Grade-A Quality')}</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                <img src="/saffron.jpg" alt="Persian Saffron" className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -top-10 ${direction === 'rtl' ? '-left-10' : '-right-10'} w-64 h-64 bg-amber-500/20 rounded-full blur-3xl z-0`} />
            </motion.div>
          </div>

          {/* Pistachio Section */}
          <div className={`flex flex-col lg:flex-row-reverse items-center gap-16 ${direction === 'rtl' ? '' : ''}`}>
            <motion.div 
              initial={{ opacity: 0, x: direction === 'rtl' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2"
            >
              <h3 className="text-amber-500 font-bold uppercase tracking-widest mb-4">{t('showcase.pistachio.badge', 'Nutritious Excellence')}</h3>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                {t('showcase.pistachio.title1', 'Premium Iranian')} <br />{t('showcase.pistachio.title2', 'Pistachios')}
              </h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                {t('showcase.pistachio.description', 'Exporting variety of pistachio types including Akbari, Ahmad Aghaei, and Fandoghi. Processed in state-of-the-art facilities ensuring maximum freshness and health standards.')}
              </p>
              <ul className="space-y-4 text-slate-300 font-medium">
                {['f1', 'f2', 'f3'].map((f, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                    {t(`showcase.pistachio.${f}`)}
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: direction === 'rtl' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:w-1/2 relative"
            >
              <div className="relative z-10 rounded-[2rem] overflow-hidden border border-slate-800 shadow-2xl">
                <img src="/pistachios.jpg" alt="Iranian Pistachios" className="w-full h-full object-cover" />
              </div>
              <div className={`absolute -bottom-10 ${direction === 'rtl' ? '-right-10' : '-left-10'} w-64 h-64 bg-amber-500/20 rounded-full blur-3xl z-0`} />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
