import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../../components/Input/Input';
import './ForgotPasswordPage.css';
import Button from '../../components/Button/Button';

// Forgot Password Page Page with Translation 

const ForgotPasswordPage: React.FC = () => {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

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