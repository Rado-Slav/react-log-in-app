import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../../hooks/ChangeLanguage';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

import './ForgotPasswordPage.css';

// Forgot Password Success Page with Translation 


const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Use the Language Context Hook data
  const { language } = useLanguage();

  const { t } = useTranslation('translation', { lng: language });


  // form submit

  const handleSubmit = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setSuccess(true);
      setError('');
    } else {
      setError(t('forgot_password.error'));
      setSuccess(false);
    }
  };

  return (
    <div className="forgot-password-page">
      <h2>{t('forgot_password.title')}</h2>
      <Input
        label={t('forgot_password.email')}
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Button onClick={handleSubmit}>{t('forgot_password.submit_button')}</Button>
      {error && <p className="error">{error}</p>}
      {success && <p className="success">{t('forgot_password.success')}</p>}
    </div>
  );
};

export default ForgotPasswordPage;