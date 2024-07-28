import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/ChangeLanguage';

// Forgot Password Success Page with Translation 

const ForgotPasswordSuccess: React.FC = () => {

  // Use the Language Context Hook data
  const { language } = useLanguage();

  const { t } = useTranslation('translation', { lng: language });
  return <div>{t('forgot_password.success')}</div>;
};

export default ForgotPasswordSuccess;