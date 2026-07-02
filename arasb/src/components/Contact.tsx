import { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useI18n } from '../i18n';
import { useSettings } from '../api/useApi';

const Contact = () => {
  const { t, locale } = useI18n();
  const { data: settings } = useSettings();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const contactEmail = settings.email || 'info@arasbtrading.com';
  const contactPhone = settings.phone || '+98 21 8888 8888';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const res = await fetch('/api/contact-submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({
          full_name: formData.fullName,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          language_code: locale,
          source_page: 'contact',
        }).toString(),
      });

      const data = await res.json();
      if (data.success) {
        setStatus('success');
        setFormData({ fullName: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 rounded-[3rem] overflow-hidden shadow-2xl flex flex-col lg:flex-row">
          <div className="lg:w-1/3 p-12 lg:p-16 bg-amber-600 text-white flex flex-col justify-between">
            <div>
              <h2 className="text-4xl font-bold mb-6">{t('contact.title', "Let's Connect")}</h2>
              <p className="text-amber-100 mb-12">
                {t('contact.description', 'Ready to source premium products? Our team is here to handle your export needs with professional care.')}
              </p>

              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Mail size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-200 mb-1">{t('contact.email', 'Email us')}</p>
                    <p className="font-semibold">{contactEmail}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <Phone size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-200 mb-1">{t('contact.phone', 'Call us')}</p>
                    <p className="font-semibold">{contactPhone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white/10 rounded-xl">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-amber-200 mb-1">{t('contact.visit', 'Visit us')}</p>
                    <p className="font-semibold">Tehran, Iran</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-12 border-t border-white/10">
              <p className="text-sm text-amber-100">{t('contact.hours', 'Operating hours: Sat - Wed, 9:00 - 18:00 (GMT+3:30)')}</p>
            </div>
          </div>

          <div className="lg:w-2/3 p-12 lg:p-16 bg-white">
            {status === 'success' && (
              <div className="mb-8 p-4 rounded-2xl bg-green-50 border border-green-200 text-green-800 font-semibold">
                {t('contact.success', 'Your message has been sent successfully!')}
              </div>
            )}
            {status === 'error' && (
              <div className="mb-8 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-800 font-semibold">
                {t('contact.error', 'Error sending message. Please try again.')}
              </div>
            )}
            <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t('contact.fullName', 'Full Name')}</label>
                <input 
                  type="text" 
                  placeholder={locale === 'fa' ? 'نام کامل' : locale === 'ar' ? 'الاسم الكامل' : 'John Doe'}
                  value={formData.fullName}
                  onChange={e => setFormData(p => ({ ...p, fullName: e.target.value }))}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t('contact.emailAddress', 'Email Address')}</label>
                <input 
                  type="email" 
                  placeholder={locale === 'fa' ? 'ایمیل' : locale === 'ar' ? 'البريد الإلكتروني' : 'john@example.com'}
                  value={formData.email}
                  onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t('contact.subject', 'Subject')}</label>
                <input 
                  type="text" 
                  placeholder={locale === 'fa' ? 'موضوع' : locale === 'ar' ? 'الموضوع' : 'Inquiry about Saffron Export'}
                  value={formData.subject}
                  onChange={e => setFormData(p => ({ ...p, subject: e.target.value }))}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all"
                />
              </div>
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-semibold text-slate-700">{t('contact.message', 'Message')}</label>
                <textarea 
                  rows={4}
                  placeholder={locale === 'fa' ? 'پیام خود را بنویسید...' : locale === 'ar' ? 'اكتب رسالتك...' : 'Tell us about your requirements...'}
                  value={formData.message}
                  onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                  required
                  className="w-full px-6 py-4 rounded-2xl bg-slate-50 border border-slate-100 focus:outline-none focus:ring-2 focus:ring-amber-500 transition-all resize-none"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit" 
                  disabled={status === 'sending'}
                  className="w-full bg-slate-900 text-white px-8 py-4 rounded-2xl font-bold hover:bg-slate-800 transition-all flex items-center justify-center gap-2 group disabled:opacity-60"
                >
                  {status === 'sending' ? '...' : <>{t('contact.send', 'Send Message')} <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></>}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
