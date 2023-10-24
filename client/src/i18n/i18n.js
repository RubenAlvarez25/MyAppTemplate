import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import textData from "../textData.json";

const resources = {
  es: {
    translation: textData.es,
  },
  en: {
    translation: textData.en,
  },
};

i18n.use(initReactI18next).init({
  lng: "es",
  resources,
  fallbackLng: "es",
  interpolation: {
    escapeValue: false,
  },
});

export const changeLanguage = (language) => {
  i18n.changeLanguage(language);
};

export default i18n;
