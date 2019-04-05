import i18next from 'i18next';

export default function initi18Next(lng) {
  return i18next.init({
    lng: lng || 'en',
    debug: false,
    resources: {
      en: {
        translation: {
          "key": "hello world"
        }
      },
      de: {
        translation: {
          "key": "hallo welt"
        }
      }
    }
  });
}