// Page Router Component 

import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/AuthContext';
import LoginPage from '../../pages/LoginPage/LoginPage';
import HomePage from '../../pages/HomePage/HomePage'; // Example protected page
import ForgotPasswordPage from '../../pages/ForgotPasswordPage/ForgotPasswordPage';
import ForgotPasswordSuccess from '../../pages/ForgotPasswordSuccess/ForgotPasswordSuccess';
import PageNotFound from '../../pages/PageNotFound/PageNotFound';

export const AppRoutes: React.FC = () => {
    const { isAuthenticated } = useAuth();

    return (
        <Routes>
            <Route path="/" element={<LoginPage />} />

            {/* Protected Route depending on isAuthenticated value */}
            <Route
                path="/homepage"
                element={isAuthenticated ? <HomePage /> : <Navigate to="/page-not-found" />}
            />
            <Route path="/forgot-password" Component={ForgotPasswordPage} />
            <Route path="/forgot-password-success" Component={ForgotPasswordSuccess} />
            <Route path="/page-not-found" Component={PageNotFound} />
        </Routes>
    );
};