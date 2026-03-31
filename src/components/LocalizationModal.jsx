import { useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./LocalizationModal.css";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];

const LOCATIONS = [
  { code: "us", name: "United States", flag: "🇺🇸", currency: "USD" },
  { code: "gb", name: "United Kingdom", flag: "🇬🇧", currency: "GBP" },
  { code: "es", name: "Spain", flag: "🇪🇸", currency: "EUR" },
  { code: "eu", name: "European Union", flag: "🇪🇺", currency: "EUR" },
  { code: "ca", name: "Canada", flag: "🇨🇦", currency: "CAD" },
  { code: "au", name: "Australia", flag: "🇦🇺", currency: "AUD" },
  { code: "jp", name: "Japan", flag: "🇯🇵", currency: "JPY" },
  { code: "cn", name: "China", flag: "🇨🇳", currency: "CNY" },
  { code: "in", name: "India", flag: "🇮🇳", currency: "INR" },
  { code: "br", name: "Brazil", flag: "🇧🇷", currency: "BRL" },
  { code: "mx", name: "Mexico", flag: "🇲🇽", currency: "MXN" },
];

export function LocalizationModal() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language?.startsWith("es") ? "es" : "en");
  const [selectedLocation, setSelectedLocation] = useState("us");

  const currentLanguage = LANGUAGES.find((l) => l.code === selectedLanguage);
  const currentLocation = LOCATIONS.find((l) => l.code === selectedLocation);

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
  };

  const handleLocationChange = (code) => {
    setSelectedLocation(code);
  };

  return (
    <>
      {/* Flag Button in Header */}
      <button
        className="localization-button"
        onClick={() => setOpen(true)}
        title={t("localization.buttonTitle")}
        aria-label={t("localization.buttonAria")}
      >
        <span className="localization-flag">
          {currentLocation?.flag || "🌍"}
        </span>
      </button>

      {open && (
        <div
          className="localization-drawer-overlay"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Localization Drawer */}
      <div
        className={`localization-drawer-content ${!open ? "closed" : ""}`}
        style={{ display: open ? "flex" : "none" }}
        aria-label="Language and location settings"
      >
        <div className="drawer-header">
          <Globe className="drawer-title-icon" />
          <h2 className="drawer-title">{t("localization.drawerTitle")}</h2>
        </div>

        <div className="drawer-body">
          <div className="drawer-section">
            <h3 className="drawer-section-title">{t("localization.languageTitle")}</h3>
            <select
              value={selectedLanguage}
              onChange={(e) => handleLanguageChange(e.target.value)}
              className="select-trigger"
            >
              {LANGUAGES.map((lang) => (
                <option key={lang.code} value={lang.code}>
                  {lang.flag} {lang.name}
                </option>
              ))}
            </select>
          </div>
          <div className="drawer-section">
            <h3 className="drawer-section-title">{t("localization.locationTitle")}</h3>
            <select
              value={selectedLocation}
              onChange={(e) => handleLocationChange(e.target.value)}
              className="select-trigger"
            >
              {LOCATIONS.map((location) => (
                <option key={location.code} value={location.code}>
                  {location.flag} {location.name} ({location.currency})
                </option>
              ))}
            </select>
          </div>

          <button
            className="btn btn-primary"
            onClick={() => {
              i18n.changeLanguage(selectedLanguage);
              setOpen(false);
            }}
          >
            {t("localization.confirm")}
          </button>
        </div>
      </div>
    </>
  );
}
