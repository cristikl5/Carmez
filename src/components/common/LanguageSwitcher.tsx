import React, { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { saveLanguage } from "../../i18n";

const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  // Save language to localStorage whenever it changes
  useEffect(() => {
    if (i18n.language) {
      saveLanguage(i18n.language);
    }
  }, [i18n.language]);

  // Ensure the saved language is applied on component mount
  useEffect(() => {
    const savedLang = localStorage.getItem("carmez-language");
    if (
      savedLang &&
      (savedLang === "ro" || savedLang === "ru") &&
      savedLang !== i18n.language
    ) {
      i18n.changeLanguage(savedLang);
    }
  }, [i18n]);

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-2">
      <button
        onClick={() => changeLanguage("ro")}
        className={`text-sm font-bold transition-colors cursor-pointer ${
          i18n.language === "ro"
            ? "text-white"
            : "text-white/60 hover:text-white/80"
        }`}
      >
        RO
      </button>
      <button
        onClick={() => changeLanguage("ru")}
        className={`text-sm font-bold transition-colors cursor-pointer ${
          i18n.language === "ru"
            ? "text-white"
            : "text-white/60 hover:text-white/80"
        }`}
      >
        RU
      </button>
    </div>
  );
};

export default LanguageSwitcher;
