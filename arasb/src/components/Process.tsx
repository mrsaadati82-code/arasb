import { motion } from 'framer-motion';
import { Search, PackageCheck, Activity, CheckCircle } from 'lucide-react';
import { useI18n } from '../i18n';

const stepKeys = [
  { number: '01', icon: <Search size={24} />, titleKey: 'process.step1.title', descKey: 'process.step1.description' },
  { number: '02', icon: <PackageCheck size={24} />, titleKey: 'process.step2.title', descKey: 'process.step2.description' },
  { number: '03', icon: <Activity size={24} />, titleKey: 'process.step3.title', descKey: 'process.step3.description' },
  { number: '04', icon: <CheckCircle size={24} />, titleKey: 'process.step4.title', descKey: 'process.step4.description' },
] as const;

const Process = () => {
  const { t } = useI18n();

  return (
    <section id="process" className="py-24 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">{t('process.title', 'Our Seamless Export Process')}</h2>
          <p className="text-slate-400">{t('process.description', 'From Iran to your warehouse, we manage every detail.')}</p>
        </div>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-amber-600/0 via-amber-600/50 to-amber-600/0 -translate-y-1/2" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
            {stepKeys.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 rounded-full bg-slate-800 border-2 border-amber-600/30 flex flex-col items-center justify-center mb-8 relative group">
                  <div className="text-amber-500 mb-1 group-hover:scale-110 transition-transform">
                    {step.icon}
                  </div>
                  <span className="text-xs font-bold text-slate-500">
                    {step.number}
                  </span>
                  <div className="absolute inset-0 rounded-full bg-amber-600/10 scale-125 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-4">{t(step.titleKey)}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {t(step.descKey)}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
