import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import enCommon from "../locales/en/common.json";
import enHome from "../locales/en/home.json";
import enAbout from "../locales/en/about.json";
import enServices from "../locales/en/services.json";
import enTeams from "../locales/en/teams.json";
import esCommon from "../locales/es/common.json";
import esHome from "../locales/es/home.json";
import esAbout from "../locales/es/about.json";
import esServices from "../locales/es/services.json";
import esTeams from "../locales/es/teams.json";

export const LANGUAGE_CODE_MAP = {
  english: "en",
  inglés: "en",
  spanish: "es",
  español: "es",
  espanol: "es",
  french: "fr",
  francés: "fr",
  français: "fr",
  german: "de",
  alemán: "de",
  deutsch: "de",
  italian: "it",
  italiano: "it",
  portuguese: "pt",
  portugués: "pt",
  português: "pt",
  russian: "ru",
  ruso: "ru",
  русский: "ru",
  chinese: "zh",
  chino: "zh",
};

const DEFAULT_LANGUAGE = "en";

i18n
  .use(LanguageDetector) // auto-detects browser language
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: enCommon, home: enHome, about: enAbout, services: enServices, teams: enTeams },
      es: { common: esCommon, home: esHome, about: esAbout, services: esServices, teams: esTeams },
    },
    fallbackLng: DEFAULT_LANGUAGE,
    supportedLngs: ["en", "es"],
    ns: ["common", "home", "about", "services", "teams"],
    defaultNS: "common",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
