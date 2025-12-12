import { ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface CardProps {
    children: ReactNode;
    className?: string;
}

export function Card({ children, className }: CardProps) {
    return (
        <div className={twMerge('glass-card p-6 rounded-xl flex flex-col', className)}>
            {children}
        </div>
    );
}
