import { ReactNode, ButtonHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { clsx } from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
}

export function Button({
    children,
    className,
    variant = 'primary',
    size = 'md',
    ...props
}: ButtonProps) {
    const variants = {
        primary: 'bg-primary-600 hover:bg-primary-500 text-white shadow-lg shadow-primary-900/20 border border-transparent',
        secondary: 'bg-slate-800 hover:bg-slate-700 text-white border border-white/10',
        outline: 'bg-transparent border border-white/20 text-white hover:bg-white/5 hover:border-white/40',
        ghost: 'bg-transparent text-slate-300 hover:text-white hover:bg-white/5',
    };

    const sizes = {
        sm: 'px-3 py-1.5 text-sm',
        md: 'px-5 py-2.5 text-base',
        lg: 'px-8 py-4 text-lg font-semibold',
    };

    return (
        <button
            className={twMerge(clsx(
                'inline-flex items-center justify-center rounded-lg transition-all duration-200 active:scale-95 disabled:opacity-50 disabled:pointer-events-none',
                variants[variant],
                sizes[size],
                className
            ))}
            {...props}
        >
            {children}
        </button>
    );
}
