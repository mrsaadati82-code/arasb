import { motion } from 'framer-motion';
import { useI18n } from '../i18n';

const countries = [
  'Turkey', 'Tajikistan', 'Saudi Arabia', 'Russia', 'Qatar', 'Pakistan', 
  'Uzbekistan', 'Oman', 'Lebanon', 'Kuwait', 'Iraq', 'Iran', 'India', 
  'Georgia', 'EU', 'UAE', 'China', 'Bahrain', 'Azerbaijan', 'Armenia'
];

const Countries = () => {
  const { t } = useI18n();

  return (
    <section className="py-20 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-slate-800 uppercase tracking-widest">{t('countries.title', 'Our Global Reach')}</h2>
          <div className="w-24 h-1 bg-amber-500 mx-auto mt-4 rounded-full" />
        </div>

        <div className="relative">
          <div className="flex flex-wrap justify-center gap-6">
            {countries.map((country, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-6 py-3 rounded-xl bg-slate-50 border border-slate-100 text-slate-600 font-semibold shadow-sm hover:border-amber-200 hover:text-amber-600 transition-all cursor-default"
              >
                {country}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countries;
