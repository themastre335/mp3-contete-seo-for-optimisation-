import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function SEOContent() {
  const { t } = useLanguage();
  
  return (
    <div className="mt-16 text-gray-300">
      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">{t('howItWorks')}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white/5 p-6 rounded-lg">
            <div className="text-xl mb-2">1. {t('step1Title')}</div>
            <p>{t('step1Description')}</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <div className="text-xl mb-2">2. {t('step2Title')}</div>
            <p>{t('step2Description')}</p>
          </div>
          <div className="bg-white/5 p-6 rounded-lg">
            <div className="text-xl mb-2">3. {t('step3Title')}</div>
            <p>{t('step3Description')}</p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">{t('features')}</h2>
        <ul className="grid md:grid-cols-2 gap-4">
          {t('featuresList').split('|').map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <span className="text-purple-400">✓</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold mb-4 text-white">{t('faq')}</h2>
        <div className="space-y-4">
          {t('faqItems').split('||').map((item, index) => {
            const [q, a] = item.split('|');
            return (
              <details key={index} className="bg-white/5 rounded-lg">
                <summary className="p-4 cursor-pointer font-medium">{q}</summary>
                <div className="p-4 pt-0 text-gray-400">{a}</div>
              </details>
            );
          })}
        </div>
      </section>

      <section className="prose prose-invert max-w-none">
        <h2>{t('aboutTitle')}</h2>
        <div dangerouslySetInnerHTML={{ __html: t('aboutContent') }} />
      </section>
    </div>
  );
}