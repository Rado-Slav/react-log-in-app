import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Button from '../../components/Button/Button';
import './HomePage.css'; // Import the CSS file for styling

const HomePage: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLogout = () => {
    // Log out the user
    // You can use your context or state management to handle this
    // For example, if using AuthContext:
    // const { logout } = useAuth();
    // logout();

    // Redirect to login page
    navigate('/');
  };

  return (
    <div className="login-success-container">
      <h1>{t('login.success_title')}</h1>
      <p>{t('login.success_message')}</p>
      <Button onClick={handleLogout}>{t('login.logout_button')}</Button>
    </div>
  );
};

export default HomePage;