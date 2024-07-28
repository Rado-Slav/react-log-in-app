import React, { useState } from 'react';
import './Layout.css';
import { useLanguage } from '../../hooks/ChangeLanguage';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

interface LayoutProps {
    children: React.ReactNode; // The content of the page to be rendered inside the layout
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    const { language, setLanguage } = useLanguage();

    // Method for changing language using global Context state

    const handleLanguageChange = () => {
        const newLanguage = language === 'en' ? 'bg' : 'en';
        setLanguage(newLanguage);
    };


    return (
        <div className="layout-container">
            {/* TODO Create standalone component for Header */}
            <header className="header">
            <Link to="/"><h1>Log In My App</h1></Link>
                <Button onClick={handleLanguageChange}>
                    {language === 'en' ? 'BG' : 'EN'}
                </Button>
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