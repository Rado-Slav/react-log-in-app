import React, { useEffect, useState } from 'react';
import './Layout.css';
import { useLanguage } from '../../hooks/ChangeLanguage';
import { useAuth } from '../../hooks/AuthContext';
import Button from '../Button/Button';
import { Link, useNavigate } from 'react-router-dom';
import radich from '../../assets/img/rado.jpeg'; // Import the image
import { useTranslation } from 'react-i18next';

interface LayoutProps {
    children: React.ReactNode; // The content of the page to be rendered inside the layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    const { isAuthenticated } = useAuth();

    const { language, setLanguage } = useLanguage();

    const { t } = useTranslation('translation', { lng: language });

    // Method for changing language using global Context state

    const handleLanguageChange = () => {
        const newLanguage = language === 'en' ? 'bg' : 'en';
        setLanguage(newLanguage);
    };

    const { logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {
        // Log the user out
        logout();

        // Redirect to login page
        navigate('/');
    };


    return (
        <div className="layout-container">
            {/* TODO Create standalone component for Header */}
            <header className="header">
                {isAuthenticated ? <img className="logged-in-img" src={radich} alt="Love Spain" /> : null}
                <Link to="/"><h1>Log In My App</h1></Link>
                <Button onClick={handleLanguageChange}>
                    {language === 'en' ? 'BG' : 'EN'}
                </Button>
                {isAuthenticated ? <Button onClick={handleLogout}>{t('login.logout_button')}</Button>
                    : null}
            </header>
            <main className="main-content">
                {children} {/* Render the page content */}
            </main>
            {/* TODO Create standalone component for Footer */}
            <footer className="footer">
                <p>&copy; {new Date().getFullYear()} Created by Radoslav Mitov. All rights reserved.</p>
                {/* footer links or additional information here */}
            </footer>
        </div>
    );
};

export default Layout;