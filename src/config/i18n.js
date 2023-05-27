import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import Backend from "i18next-http-backend";
import kyrLang from "../assets/locales/ky.json";
import ruLang from "../assets/locales/ru.json";

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    lng: "ky",
    fallbackLng: "ky",
    debug: false,

    interpolation: {
      escapeValue: false, // React already escapes the values
    },

    backend: {
      loadPath: "/locales/{{lng}}.json", // Path to the JSON files
    },

    // Specify the supported languages
    supportedLngs: ["ky", "ru"],

    // Specify the resources (JSON files)
    resources: {
      ky: {
        translation: kyrLang,
      },
      ru: {
        translation: ruLang,
      },
    },
  });

export default i18n;
