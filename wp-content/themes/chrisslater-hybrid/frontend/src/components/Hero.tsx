import { Button } from './Button';
import { Circuitry } from './Circuitry';

export function Hero() {
    return (
        <section className="relative overflow-hidden pt-24 pb-32 md:pt-44 md:pb-64 bg-slate-900">
            {/* Background Effects - FUTURISTIC COASTAL */}
            <div className="absolute inset-0 overflow-hidden">
                {/* 1. Base: Deep "Cyber Ocean" */}
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-ocean-900 to-primary-950" />

                {/* 2. Animated Circuitry Layer */}
                <Circuitry color="stroke-primary-400" className="z-0 opacity-40 max-w-[1920px] mx-auto" />

                {/* 3. Glowing Cyber Orbs */}
                <div className="absolute top-[-20%] left-[10%] w-[600px] h-[600px] bg-primary-500/20 rounded-full blur-[100px] animate-pulse mix-blend-screen" style={{ animationDuration: '4s' }} />
                <div className="absolute bottom-[-10%] right-[-5%] w-[800px] h-[800px] bg-secondary-600/10 rounded-full blur-[120px] mix-blend-screen" />

                {/* 4. Grid Floor (The "Deck") */}
                <div className="absolute bottom-0 w-full h-[50%] bg-[linear-gradient(to_bottom,transparent_0%,rgba(6,182,212,0.1)_100%)] perspective-[500px] transform-style-3d opacity-30" />
            </div>

            <div className="container relative z-10 mx-auto px-4 md:px-6 text-center">

                {/* Cyber Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-sm bg-primary-900/50 border-l-2 border-primary-400 text-primary-200 text-xs font-mono mb-8 animate-fade-in backdrop-blur-md">
                    <span className="w-2 h-2 bg-primary-400 rounded-full animate-ping" />
                    SYSTEM ONLINE: 100x VELOCITY DETECTED
                </div>

                {/* Headline */}
                <h1 className="max-w-6xl mx-auto text-5xl md:text-7xl lg:text-9xl font-display font-bold text-white tracking-tighter leading-none mb-8 animate-slide-up drop-shadow-[0_0_25px_rgba(34,211,238,0.3)]">
                    <span className="block text-stroke-sm text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 opacity-80 mb-2 text-4xl md:text-6xl uppercase tracking-widest">
                        Architecting
                    </span>
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-secondary-300 to-primary-400 animate-gradient-x">
                        The Intelligent Coast
                    </span>
                </h1>

                <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-100/80 mb-12 leading-relaxed animate-slide-up font-light font-mono" style={{ animationDelay: '0.1s' }}>
                    // Fusing generative AI with high-performance web engineering.
                    <br />
                    Experience the next wave of digital evolution.
                </p>

                {/* Buttons: Cyber-Physical Tactile Feel */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>

                    <Button size="lg" className="group relative overflow-hidden bg-primary-500 hover:bg-primary-400 text-black font-bold uppercase tracking-wider px-8 py-6 rounded-none skew-x-[-10deg] border border-primary-400 shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all">
                        <span className="relative z-10 skew-x-[10deg] inline-block">Initiate Project</span>
                        <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                    </Button>

                    <Button variant="outline" size="lg" className="group relative overflow-hidden text-primary-300 border border-primary-500/50 hover:border-primary-400 hover:text-white font-mono px-8 py-6 rounded-none skew-x-[-10deg] backdrop-blur-sm">
                        <span className="relative z-10 skew-x-[10deg] inline-block">Download_Specs</span>
                    </Button>
                </div>

                {/* Tech HUD */}
                <div className="mt-24 pt-8 border-t border-primary-500/20 animate-slide-up relative" style={{ animationDelay: '0.3s' }}>
                    {/* Decorative HUD Lines */}
                    <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-primary-500" />
                    <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-primary-500" />

                    <p className="text-xs font-mono text-primary-400/60 uppercase tracking-widest mb-8">
                        [ Active Protocols ]
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 opacity-80">
                        {['Ag', 'React', 'Ts', 'Wp', 'Py', 'Tw'].map((tech) => (
                            <div key={tech} className="w-16 h-16 flex items-center justify-center border border-primary-500/30 bg-primary-950/30 rounded-full hover:border-primary-400 hover:bg-primary-500/20 hover:scale-110 transition-all cursor-crosshair group relative">
                                <span className="text-sm font-bold text-primary-300 group-hover:text-white font-mono">{tech}</span>
                                <div className="absolute -bottom-2 text-[10px] text-primary-500/50 opacity-0 group-hover:opacity-100 transition-opacity">v.2.0</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
