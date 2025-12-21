
import type { SVGProps } from 'react';

export function Circuitry(props: SVGProps<SVGSVGElement>) {
    // Paths radiating from the center (400, 300)
    const traces = [
        // Top Connections
        "M400 250 V150 H600",
        "M380 250 V180 H200",
        "M420 250 V120 L480 60",

        // Bottom Connections
        "M400 350 V450 H200",
        "M380 350 V420 H100",
        "M420 350 V480 L480 540",

        // Left Connections
        "M350 300 H200 V100",
        "M350 280 H150 V200",
        "M350 320 H250 V500",

        // Right Connections
        "M450 300 H600 V500",
        "M450 280 H650 V100",
        "M450 320 H550 V400",

        // Angled/PCB style traces
        "M360 260 L320 220 H150",
        "M440 260 L480 220 H650",
        "M360 340 L320 380 H150",
        "M440 340 L480 380 H650",
    ];

    return (
        <svg viewBox="0 0 800 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" {...props}>
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
                <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" opacity="0.1" />
                </pattern>
            </defs>

            <style>
                {`
                    @keyframes pulse-travel {
                        0% { stroke-dashoffset: 1000; opacity: 0; }
                        5% { opacity: 1; }
                        80% { opacity: 1; }
                        100% { stroke-dashoffset: 0; opacity: 0; }
                    }
                    .circuit-pulse {
                        stroke-dasharray: 60 1000;
                        stroke-dashoffset: 1000;
                        animation: pulse-travel 3s linear infinite;
                    }
                    .circuit-pulse:nth-child(2n) {
                        animation-duration: 4s;
                        animation-delay: 1s;
                    }
                    .circuit-pulse:nth-child(3n) {
                        animation-duration: 5s;
                        animation-delay: 2s;
                    }
                `}
            </style>

            {/* Background subtile grid */}
            <rect width="800" height="600" fill="url(#grid)" opacity="0.1" />

            {/* Central AI Chip Representation */}
            <g transform="translate(400, 300)">
                {/* Main Chip Body */}
                <rect x="-60" y="-60" width="120" height="120" rx="8" stroke="currentColor" strokeWidth="2" fill="currentColor" fillOpacity="0.05" />

                {/* Inner Core */}
                <rect x="-40" y="-40" width="80" height="80" rx="4" stroke="currentColor" strokeWidth="1" strokeOpacity="0.5" />
                <rect x="-30" y="-30" width="60" height="60" rx="2" fill="currentColor" fillOpacity="0.1" />

                {/* Corner Pins */}
                <path d="M-50 -60 V-70 M50 -60 V-70 M-50 60 V70 M50 60 V70 M-60 -50 H-70 M-60 50 H-70 M60 -50 H70 M60 50 H70" stroke="currentColor" strokeWidth="2" />

                {/* Center Glow */}
                <circle r="15" fill="currentColor" fillOpacity="0.2" filter="url(#glow)">
                    <animate attributeName="opacity" values="0.2;0.6;0.2" duration="4s" repeatCount="indefinite" />
                </circle>
            </g>

            {/* Circuit Traces */}
            <g>
                {traces.map((d, i) => (
                    <g key={i}>
                        {/* Static dim trace */}
                        <path d={d} stroke="currentColor" strokeWidth="1" strokeOpacity="0.2" fill="none" />
                        {/* Animated glowing pulse */}
                        <path d={d} stroke="currentColor" strokeWidth="2" className="circuit-pulse" filter="url(#glow)" strokeLinecap="round" />
                    </g>
                ))}
            </g>

            {/* Random floating nodes */}
            <circle cx="200" cy="100" r="2" fill="currentColor" opacity="0.4" />
            <circle cx="600" cy="500" r="2" fill="currentColor" opacity="0.4" />
            <circle cx="150" cy="200" r="2" fill="currentColor" opacity="0.4" />
            <circle cx="650" cy="400" r="2" fill="currentColor" opacity="0.4" />

        </svg>
    );
}
