import { motion } from 'framer-motion';
import { Truck, Plane, Ship, Package, ShieldCheck, FileText } from 'lucide-react';
import { useI18n } from '../i18n';

const serviceKeys = [
  { icon: <Truck size={32} />, titleKey: 'services.overland.title', descKey: 'services.overland.description' },
  { icon: <Plane size={32} />, titleKey: 'services.air.title', descKey: 'services.air.description' },
  { icon: <Ship size={32} />, titleKey: 'services.maritime.title', descKey: 'services.maritime.description' },
  { icon: <Package size={32} />, titleKey: 'services.origin.title', descKey: 'services.origin.description' },
  { icon: <ShieldCheck size={32} />, titleKey: 'services.quality.title', descKey: 'services.quality.description' },
  { icon: <FileText size={32} />, titleKey: 'services.documentation.title', descKey: 'services.documentation.description' },
] as const;

const Services = () => {
  const { t } = useI18n();

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <h2 className="text-4xl font-bold text-slate-900 mb-6">{t('services.title', 'Expert Export Management')}</h2>
            <p className="text-slate-600 text-lg">
              {t('services.description', 'Arasb Trading manages the entire commercial and export process on your behalf, ensuring your goods move efficiently, compliantly, and on schedule.')}
            </p>
          </div>
          <div className="flex gap-4">
            <div className="p-4 bg-amber-50 rounded-2xl border border-amber-100">
              <span className="block text-2xl font-bold text-amber-600">100%</span>
              <span className="text-xs text-slate-500 uppercase tracking-tighter">{t('services.compliance', 'Compliance Rate')}</span>
            </div>
            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100">
              <span className="block text-2xl font-bold text-slate-800">20+</span>
              <span className="text-xs text-slate-500 uppercase tracking-tighter">{t('services.partnerCountries', 'Partner Countries')}</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {serviceKeys.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:border-amber-200 transition-all duration-300 group"
            >
              <div className="w-16 h-16 rounded-2xl bg-white shadow-sm flex items-center justify-center text-amber-600 mb-6 group-hover:bg-amber-600 group-hover:text-white transition-colors duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t(service.titleKey)}</h3>
              <p className="text-slate-600 leading-relaxed">
                {t(service.descKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
