import { useState } from "react";
import { Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./LocalizationModal.css";
import CustomSelect from "./CustomSelect";

const LANGUAGES = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "es", name: "Español", flag: "🇪🇸" },
];



export function LocalizationModal() {
  const { t, i18n } = useTranslation();
  const [open, setOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(i18n.language?.startsWith("es") ? "es" : "en");

  const currentLanguage = LANGUAGES.find((l) => l.code === selectedLanguage);
  

  const handleLanguageChange = (code) => {
    setSelectedLanguage(code);
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
          {currentLanguage?.flag || "🌍"}
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
            <CustomSelect
              value={selectedLanguage}
              onChange={handleLanguageChange}
              options={LANGUAGES}
            />
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
