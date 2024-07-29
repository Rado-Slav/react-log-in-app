// Login Page Screen

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/AuthContext";
import { useLanguage } from "../../hooks/ChangeLanguage";
import loginCredentials from "../../data/loginCredentials.json";
import "./LoginPage.css";
import Form from "../../components/Form/Form";

const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorKey, setErrorKey] = useState<string | null>(null);

  // Use the Language Context Hook data
  const { language } = useLanguage();

  const { t } = useTranslation("translation", { lng: language });

  const handleLogin = () => {
    // Regular expression to validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Check if the email format is valid
    if (!emailRegex.test(email)) {
      setErrorKey("login.invalid_email"); // Set error if email format is invalid
      return;
    }

    // Check local credential DB for matching user email and password
    const user = loginCredentials.find(
      (u) => u.email === email && u.password === password,
    );

    if (user) {
      // Due to asynchronous nature of state changes, we need to make sure...
      // that we navigate to homepage directly after changing state
      login(email, password, () => {
        navigate("/homepage"); // Redirect to success page
      });
      setErrorKey(null); // Clear any existing errors
    } else {
      setErrorKey("login.error"); // Set error if credentials are wrong
    }
  };

  return (
    <div className="login-page">
      <Form
        title={t("login.title")}
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleLogin}
        language={language}
        errorKey={errorKey}
        forgotPasswordLink="/forgot-password"
        loginButtonLabel={t("login.login_button")}
      />
    </div>
  );
};

export default LoginPage;
