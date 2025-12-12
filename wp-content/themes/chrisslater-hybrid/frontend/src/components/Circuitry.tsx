
export function Circuitry({ className = "", color = "stroke-primary-400" }: { className?: string, color?: string }) {
    return (
        <svg className={`absolute inset-0 w-full h-full pointer-events-none opacity-50 ${className}`} xmlns="http://www.w3.org/2000/svg">
            <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="2" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                </filter>
            </defs>

            {/* Tech Nodes / Circuit Lines - Left Side */}
            <path
                d="M0,100 Q100,100 150,150 T300,300"
                fill="none"
                strokeWidth="3"
                className={`${color} animate-circuit-fast`}
                strokeDasharray="10 20"
                filter="url(#glow)"
            />
            <path
                d="M-50,200 Q150,200 250,300 T450,500"
                fill="none"
                strokeWidth="2"
                className={`${color} animate-circuit-medium`}
                strokeDasharray="100 200"
                opacity="0.6"
            />

            {/* Right Side - Cyber Waves */}
            <path
                d="M1200,600 Q1100,500 1000,550 T800,400"
                fill="none"
                strokeWidth="3"
                className={`${color} animate-circuit-slow`}
                strokeDasharray="20 40"
                filter="url(#glow)"
            />

            {/* Organic/Tech Crosses */}
            <circle cx="150" cy="150" r="4" className="fill-secondary-400 animate-ping" />
            <circle cx="300" cy="300" r="5" className="fill-primary-300 animate-ping" style={{ animationDelay: '1s' }} />
            <circle cx="800" cy="400" r="4" className="fill-accent-400 animate-ping" style={{ animationDelay: '0.5s' }} />

            {/* Vertical Data Lines (Matrix-ish but coastal rain) */}
            <line x1="20%" y1="0" x2="20%" y2="100%" stroke="url(#gradient-v)" strokeWidth="2" opacity="0.2" strokeDasharray="5 5" />
            <line x1="80%" y1="0" x2="80%" y2="100%" stroke="url(#gradient-v)" strokeWidth="2" opacity="0.2" strokeDasharray="5 5" />

            <defs>
                <linearGradient id="gradient-v" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="transparent" />
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="100%" stopColor="transparent" />
                </linearGradient>
            </defs>
        </svg>
    );
}
