import React from 'react';
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
    error,
    forgotPasswordLink,
    loginButtonLabel
}) => (
    <div className="form-container">
        <h2>{title}</h2>
        <Input
            label="Email"
            type="email"
            value={email}
            onChange={onEmailChange}
        />
        <Input
            label="Password"
            type="password"
            value={password}
            onChange={onPasswordChange}
        />
        <Button onClick={onSubmit}>{loginButtonLabel}</Button>
        {error && <p className="error">{error}</p>}
        <a href={forgotPasswordLink}>Forgot Password?</a>
    </div>
);

export default Form;