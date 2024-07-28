import React from 'react';
import { useTranslation } from 'react-i18next';

// Forgot Password Success Page with Translation 

const ForgotPasswordSuccess: React.FC = () => {
  const { t } = useTranslation();
  return <div>{t('forgot_password.success')}</div>;
};

export default ForgotPasswordSuccess;