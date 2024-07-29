// Forgot Password Page

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useLanguage } from "../../hooks/ChangeLanguage";
import loginCredentials from "../../data/loginCredentials.json";

import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

import "./ForgotPasswordPage.css";

const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const [errorKey, setErrorKey] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  const { language } = useLanguage();
  const { t } = useTranslation("translation", { lng: language });

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorKey("forgot_password.error");
      setSuccess(false);
      triggerShake();
      return;
    }

    // Check if the email exists in the registered users' data
    const user = loginCredentials.find((u) => u.email === email);
    if (user) {
      setSuccess(true);
      setErrorKey(null);
      // Logic for sending the reset link can be added here
    } else {
      setErrorKey("forgot_password.email_not_found");
      setSuccess(false);
      triggerShake();
    }
  };

  // Shake Error Label Trigger:

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500); // Duration of the shake animation
  };

  return (
    <div className="forgot-password-page">
      <h2>{t("forgot_password.title")}</h2>
      <Input
        label={t("forgot_password.email")}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubmit}>
        {t("forgot_password.submit_button")}
      </Button>
      {errorKey && (
        <p className={`error ${shake ? "shake" : ""}`}>{t(errorKey)}</p>
      )}
      {success && <p className="success">{t("forgot_password.success")}</p>}
    </div>
  );
};

export default ForgotPasswordPage;
