import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '../../hooks/ChangeLanguage';
import Button from '../../components/Button/Button';
import './HomePage.css'; // Import the CSS file for styling
import loveSpainImage from '../../assets/img/love-spain.webp'; // Import the image


const HomePage: React.FC = () => {

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

   // Use the Language Context Hook data
   const { language } = useLanguage();

   const { t } = useTranslation('translation', { lng: language });

  return (
    <div className="login-success-container">
      <h1>{t('login.success')}</h1>
      <p>{t('login.success_message')}</p>
      <img className="welcome-img" src={loveSpainImage} alt="Love Spain" />
      <Button onClick={handleLogout}>{t('login.logout_button')}</Button>
    </div>
  );
};

export default HomePage;