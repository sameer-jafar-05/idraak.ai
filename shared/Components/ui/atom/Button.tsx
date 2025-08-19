// shared/components/ui/atoms/Button.tsx
'use client'; // 1 - Marks this file as a Client Component in Next.js app router.

import React from 'react'; // 2 - React types and API
// simple helper to merge class names without extra deps:
const cn = (...classes: (string | false | null | undefined)[]) =>
  classes.filter(Boolean).join(' '); // 3 - tiny util to join tailwind classes

// 4 - Button props reuse native button attributes + a few custom props
export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
};

const variantClasses: Record<string, string> = {
  primary: 'bg-brand-600 text-white hover:bg-brand-700',
  secondary: 'border border-gray-200 text-gray-700 hover:bg-gray-50',
  ghost: 'bg-transparent text-brand-600 hover:underline',
};

const sizeClasses: Record<string, string> = {
  sm: 'px-3 py-1 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg',
};

// 5 - forwarded ref for maximum reusability (focus control from parent)
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const {
      className,
      children,
      variant = 'primary',
      size = 'md',
      disabled,
      loading,
      ...rest
    } = props;

    // 6 - compute classes using our tokens
    const classes = cn(
      'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
      variantClasses[variant],
      sizeClasses[size],
      disabled || loading ? 'opacity-50 cursor-not-allowed' : '',
      className
    );

    return (
      // 7 - pass all native button props through (type, onClick, aria-*)
      <button ref={ref} className={classes} disabled={disabled || loading} {...rest}>
        {/* 8 - optionally show loading spinner (simple text for now) */}
        {loading ? 'Loading…' : children}
      </button>
    );
  }
);

Button.displayName = 'Button'; // 9 - helpful for debugging/React devtools
export default Button;