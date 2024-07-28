import React from 'react';
import { useTranslation } from 'react-i18next';
import Input from '../Input/Input';
import Button from '../Button/Button';
import './Form.css';

interface FormProps {
    title: string;
    email: string;
    password: string;
    onEmailChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onPasswordChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => void;
    language: string,
    error?: string;
    forgotPasswordLink: string;
    loginButtonLabel: string;
}

const Form: React.FC<FormProps> = ({
    title,
    email,
    password,
    onEmailChange,
    onPasswordChange,
    onSubmit,
    language,
    error,
    forgotPasswordLink,
    loginButtonLabel,
}) => {
    const { t } = useTranslation('translation', { lng: language });

    return (
        <div className="form-container">
            <h2>{title}</h2>
            <Input
                label={t('login.email')}
                type="email"
                value={email}
                onChange={onEmailChange}
            />
            <Input
                label={t('login.password')}
                type="password"
                value={password}
                onChange={onPasswordChange}
            />
            <Button onClick={onSubmit}>{loginButtonLabel}</Button>
            {error && <p className="error">{error}</p>}
            <a href={forgotPasswordLink}>{t('login.forgot_password')}</a>
        </div>
    );
};

export default Form;