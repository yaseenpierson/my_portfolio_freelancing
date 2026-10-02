import React from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface ButtonProps extends HTMLMotionProps<'button'> {
  variant?: 'primary' | 'secondary' | 'outline' | 'text';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  asAnchor?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  children,
  icon,
  iconPosition = 'right',
  className = '',
  asAnchor = false,
  href,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-violet-500/50 disabled:opacity-50 cursor-pointer';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs tracking-wider uppercase gap-2',
    md: 'px-6 py-3 text-sm tracking-wide gap-2.5',
    lg: 'px-8 py-4 text-base tracking-wide gap-3',
  };

  const variantStyles = {
    primary: 'bg-violet-600 hover:bg-violet-500 text-white shadow-lg shadow-violet-900/30 hover:shadow-violet-600/40',
    secondary: 'bg-violet-950/60 hover:bg-violet-900/80 text-violet-100 border border-violet-500/30 hover:border-violet-400/60',
    outline: 'border border-violet-500/50 hover:bg-violet-600/10 text-white hover:border-violet-400',
    text: 'text-violet-300 hover:text-white p-0 hover:bg-transparent',
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${className}`;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-block">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="inline-block">{icon}</span>}
    </>
  );

  if (asAnchor && href) {
    return (
      <motion.a
        href={href}
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.97 }}
        className={combinedClasses}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className={combinedClasses}
      {...props}
    >
      {content}
    </motion.button>
  );
};
