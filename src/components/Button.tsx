import React, { Component } from 'react';
interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  fullWidth?: boolean;
  as?: React.ElementType;
  onClick?: () => void;
  [x: string]: any;
}
const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  as: Component = 'button',
  onClick,
  ...rest
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-md transition-colors';
  const variantStyles = {
    primary: 'bg-[#FF6900] text-white hover:bg-[#E65D00] focus:ring-2 focus:ring-[#FF6900] focus:ring-opacity-50',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 focus:ring-2 focus:ring-gray-300 focus:ring-opacity-50',
    outline: 'bg-transparent border-2 border-[#FF6900] text-[#FF6900] hover:bg-[#FF6900] hover:bg-opacity-10 focus:ring-2 focus:ring-[#FF6900] focus:ring-opacity-50'
  };
  const sizeStyles = {
    small: 'text-sm px-3 py-1.5',
    medium: 'text-base px-4 py-2',
    large: 'text-lg px-6 py-3'
  };
  const widthStyles = fullWidth ? 'w-full' : '';
  const className = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${widthStyles}`;
  return <Component className={className} onClick={onClick} {...rest}>
      {children}
    </Component>;
};
export default Button;