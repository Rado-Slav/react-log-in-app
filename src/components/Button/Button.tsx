import React from "react";
import "./Button.css";

type ButtonProps = {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  children: React.ReactNode; // Content to be displayed inside the button
  disabled?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  type = "button",
  className = "",
  children,
  disabled = false,
}) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={`custom-button ${className}`}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
