import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import loginCredentials from '../../data/loginCredentials.json';
import './LoginPage.css';
import Form from '../../components/Form/Form';

const LoginPage: React.FC = () => {
  const { t } = useTranslation('translation', { lng: 'bg' });
  const navigate = useNavigate();
  const { login, isAuthenticated } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    const user = loginCredentials.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {

      // Due to asynchronous nature of state changes, we need to make sure...
      // that we navigate to homepage directly after changing state

      login(email, password, () => {
        navigate('/homepage'); // Redirect to success page
      });
      setError(''); // Clear any existing errors
    } else {
      setError(t('login.error')); // Set error if credentials are wrong
    }
  };

  return (
    <div className="login-page">
      <Form
        title={t('login.title')}
        email={email}
        password={password}
        onEmailChange={(e) => setEmail(e.target.value)}
        onPasswordChange={(e) => setPassword(e.target.value)}
        onSubmit={handleLogin}
        error={error}
        forgotPasswordLink="/forgot-password"
        loginButtonLabel={t('login.login_button')}
      />
    </div>
  );
};

export default LoginPage;