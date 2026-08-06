import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'danger';
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  type = 'button',
  ...props 
}) => {
  // Shared base layout and typography style definitions
  const baseStyles = 'px-4 py-2 font-semibold rounded-md transition-all duration-200 active:scale-95 text-sm flex items-center justify-center gap-2 disabled:opacity-50 disabled:pointer-events-none';
  
  // Theme variants governing contextual background and text token values
  const variants = {
    primary: 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm shadow-blue-100',
    secondary: 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-gray-200',
    danger: 'bg-red-500 hover:bg-red-600 text-white shadow-sm shadow-red-100',
  };

  return (
    <button 
      type={type} 
      className={`${baseStyles} ${variants[variant]} ${className}`} 
      {...props}
    >
      {children}
    </button>
  );
};
