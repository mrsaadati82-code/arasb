import { motion } from 'framer-motion';
import { Shield, Target, Zap, HeartHandshake } from 'lucide-react';
import { useI18n } from '../i18n';

const valueKeys = [
  { icon: <Shield size={32} />, titleKey: 'commitment.reliability.title', descKey: 'commitment.reliability.desc' },
  { icon: <Target size={32} />, titleKey: 'commitment.precision.title', descKey: 'commitment.precision.desc' },
  { icon: <Zap size={32} />, titleKey: 'commitment.efficiency.title', descKey: 'commitment.efficiency.desc' },
  { icon: <HeartHandshake size={32} />, titleKey: 'commitment.partnership.title', descKey: 'commitment.partnership.desc' },
] as const;

const Commitment = () => {
  const { t } = useI18n();

  return (
    <section className="py-24 bg-amber-600 relative overflow-hidden">
      {/* Decorative patterns */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white rounded-full" />
        <div className="absolute bottom-10 right-10 w-60 h-60 border-4 border-white rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{t('commitment.title', 'Our Commitment to Excellence')}</h2>
          <p className="text-amber-100 max-w-2xl mx-auto">
            {t('commitment.description', 'Driven by quality and trust, we redefine the export experience for our global partners.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valueKeys.map((v, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white/10 backdrop-blur-md border border-white/20 rounded-[2rem] text-white"
            >
              <div className="mb-6 text-amber-200">{v.icon}</div>
              <h3 className="text-xl font-bold mb-3">{t(v.titleKey)}</h3>
              <p className="text-amber-50 text-sm leading-relaxed opacity-80">{t(v.descKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Commitment;
