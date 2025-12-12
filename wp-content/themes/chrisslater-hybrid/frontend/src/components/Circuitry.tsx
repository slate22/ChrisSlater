import type { SVGProps } from 'react';

export function Circuitry(props: SVGProps<SVGSVGElement>) {
    return (
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path d="M50 500 L150 500 L200 450" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="50" cy="500" r="4" fill="currentColor" />
            <path d="M600 100 L500 100 L450 150" stroke="currentColor" strokeWidth="2" fill="none" />
            <circle cx="600" cy="100" r="4" fill="currentColor" />
            <path d="M700 300 L650 300 L650 350" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
            <path d="M100 200 L150 200 L150 150" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.5" />
            {/* Add more grid/circuit lines as needed */}
            <circle cx="200" cy="450" r="2" fill="currentColor" opacity="0.5" />
            <circle cx="450" cy="150" r="2" fill="currentColor" opacity="0.5" />
        </svg>
    );
}
