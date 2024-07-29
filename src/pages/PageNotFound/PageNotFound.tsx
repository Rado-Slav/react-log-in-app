import React from "react";
import { Link } from "react-router-dom";
import "./PageNotFound.css";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/ChangeLanguage";

const PageNotFound: React.FC = () => {
  // Use the Language Context Hook data
  const { language } = useLanguage();

  const { t } = useTranslation("translation", { lng: language });

  return (
    <div className="page-not-found">
      <h1>404</h1>
      <p>{t("not_found.error")}</p>
      <Link to="/" className="back-home-link">
        {t("not_found.button")}
      </Link>
    </div>
  );
};

export default PageNotFound;
