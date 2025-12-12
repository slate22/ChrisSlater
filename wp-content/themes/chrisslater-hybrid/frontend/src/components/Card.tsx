

interface CardProps {
    title?: string;
    description?: string;
    children?: React.ReactNode;
    className?: string;
    footer?: React.ReactNode;
}

export function Card({ title, description, children, className = "", footer }: CardProps) {
    return (
        <div className={`bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-md transition-shadow duration-300 flex flex-col ${className}`}>
            <div className="p-6 flex-1">
                {title && <h3 className="text-xl font-bold font-display text-slate-900 mb-2">{title}</h3>}
                {description && <p className="text-slate-600 mb-4">{description}</p>}
                {children}
            </div>
            {footer && (
                <div className="px-6 py-4 bg-slate-50 border-t border-slate-100">
                    {footer}
                </div>
            )}
        </div>
    );
}
