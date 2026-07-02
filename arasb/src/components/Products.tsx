import { motion } from 'framer-motion';
import { useI18n } from '../i18n';
import { useProducts } from '../api/useApi';

// Fallback products when API is unavailable
const fallbackProducts = [
  { titleKey: 'products.saffron.title', descKey: 'products.saffron.description', catKey: 'products.saffron.category', image: '/saffron.jpg' },
  { titleKey: 'products.pistachios.title', descKey: 'products.pistachios.description', catKey: 'products.pistachios.category', image: '/pistachios.jpg' },
  { titleKey: 'products.dates.title', descKey: 'products.dates.description', catKey: 'products.dates.category', image: '/dates.jpg' },
  { titleKey: 'products.petroleum.title', descKey: 'products.petroleum.description', catKey: 'products.petroleum.category', image: '/petroleum.jpg' },
] as const;

const Products = () => {
  const { t, locale } = useI18n();
  const { data: apiProducts } = useProducts(locale);

  // If API returned products, use them; otherwise use fallback translations
  const hasApiProducts = apiProducts && apiProducts.length > 0;

  return (
    <section id="products" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-slate-900 mb-4"
          >
            {t('products.title', 'Our Featured Products')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            {t('products.description', 'We supply a diverse range of premium Iranian products meeting the highest international export standards.')}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {hasApiProducts
            ? apiProducts.map((product, index) => (
                <motion.div
                  key={product.id || index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={product.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                      {product.category}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">{product.title}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {product.description}
                    </p>
                  </div>
                </motion.div>
              ))
            : fallbackProducts.map((product, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-500"
                >
                  <div className="aspect-[4/5] overflow-hidden">
                    <img 
                      src={product.image} 
                      alt={t(product.titleKey)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent flex flex-col justify-end p-6">
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-widest mb-2">
                      {t(product.catKey)}
                    </span>
                    <h3 className="text-white text-xl font-bold mb-2">{t(product.titleKey)}</h3>
                    <p className="text-slate-300 text-sm line-clamp-2 transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                      {t(product.descKey)}
                    </p>
                  </div>
                </motion.div>
              ))
          }
        </div>
      </div>
    </section>
  );
};

export default Products;
