import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { enLocal } from "./en";
import { faLocal } from "./fa";

i18n.use(initReactI18next).init({
  lng: "en",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: enLocal,
    fa: faLocal,
  },
});

export default i18n;
