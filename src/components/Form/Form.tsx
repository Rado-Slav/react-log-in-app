import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Input from "../Input/Input";
import Button from "../Button/Button";
import "./Form.css";

interface FormProps {
  title: string;
  email: string;
  password: string;
  onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: () => void;
  language: string;
  errorKey?: string | null;
  forgotPasswordLink: string;
  loginButtonLabel: string;
}

const Form: React.FC<FormProps> = ({
  title,
  email,
  password,
  onEmailChange,
  onPasswordChange,
  onSubmit,
  language,
  errorKey,
  forgotPasswordLink,
  loginButtonLabel,
}) => {
  const { t } = useTranslation("translation", { lng: language });
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    if (errorKey) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500); // Duration of the shake animation
    }
  }, [errorKey]);

  const handleButtonClick = () => {
    setIsShaking(true);
    onSubmit();
    setTimeout(() => setIsShaking(false), 500); // Duration of the shake animation
  };

  return (
    <div className="form-container">
      <h2>{title}</h2>
      <Input
        label={t("login.email")}
        type="email"
        value={email}
        onChange={onEmailChange}
      />
      <Input
        label={t("login.password")}
        type="password"
        value={password}
        onChange={onPasswordChange}
      />
      <Button onClick={handleButtonClick}>{loginButtonLabel}</Button>
      {errorKey && (
        <p className={`error ${isShaking ? "shake" : ""}`}>{t(errorKey)}</p>
      )}
      <a href={forgotPasswordLink}>{t("login.forgot_password")}</a>
    </div>
  );
};

export default Form;
