import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          Templates: "Templates",
          Features: "Features",
          Pricing: "Pricing",
          Resources: "Resources",
          "Start Free Trial": "Start Free Trial",
        },
      },
      uz: {
        translation: {
          Templates: "Shablonlar",
          Features: "Xususiyatlar",
          Pricing: "Narxlar",
          Resources: "Resurslar",
          "Start Free Trial": "Bepul sinovdan o'ting",
         
        },
      },
    },
    lng: 'en', 
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });
