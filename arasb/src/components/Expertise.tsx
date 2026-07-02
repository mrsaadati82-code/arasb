import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import { useI18n } from '../i18n';

const expertiseItems = ['item1', 'item2', 'item3', 'item4', 'item5'] as const;

const Expertise = () => {
  const { t, direction } = useI18n();

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col lg:flex-row items-center gap-16 ${direction === 'rtl' ? 'lg:flex-row-reverse' : ''}`}>
          <div className="lg:w-1/2">
            <motion.div 
              initial={{ opacity: 0, x: direction === 'rtl' ? 30 : -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000" 
                  alt="Logistics management" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className={`absolute -bottom-8 ${direction === 'rtl' ? '-left-8' : '-right-8'} bg-amber-600 text-white p-8 rounded-3xl shadow-xl hidden md:block`}>
                <p className="text-4xl font-bold mb-1">15+</p>
                <p className="text-sm font-medium opacity-80">{t('expertise.years', 'Years')}<br />{t('expertise.experience', 'Experience')}</p>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, x: direction === 'rtl' ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-slate-900 mb-6 leading-tight">
                {t('expertise.title1', 'Your Strategic Partner in')} <br />
                <span className="text-amber-600">{t('expertise.title2', 'Global Trade Logistics')}</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed text-lg">
                {t('expertise.description', 'While we are not a logistics carrier, our team manages the entire process with trusted transport partners to ensure your cargo moves efficiently and in full compliance with international trade requirements.')}
              </p>
              
              <div className="space-y-4">
                {expertiseItems.map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-amber-600 flex-shrink-0" size={24} />
                    <span className="text-slate-700 font-semibold">{t(`expertise.${item}`)}</span>
                  </div>
                ))}
              </div>

              <div className="mt-10">
                <button className="bg-slate-900 text-white px-8 py-4 rounded-full font-bold hover:bg-slate-800 transition-all">
                  {t('expertise.learnMore', 'Learn More About Us')}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
