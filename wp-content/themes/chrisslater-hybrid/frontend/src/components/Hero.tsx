import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Circuitry } from './Circuitry';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,70,229,0.15),transparent_50%)]"></div>
                <Circuitry className="absolute inset-0 opacity-20 text-primary-500" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium mb-8 animate-fade-in-up">
                    <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                    Available for AI Strategy Roles
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight">
                    Building the <br />
                    <span className="text-gradient">Intelligent Future</span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    I help forward-thinking companies integrate **Artificial Intelligence** into their core products, bridging the gap between complex LLMs and user-centric web applications.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button size="lg" className="min-w-[180px] shadow-lg shadow-primary-500/20">
                        View Services
                    </Button>
                    <Button size="lg" variant="outline" className="min-w-[180px]">
                        Contact Me
                    </Button>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path></svg>
            </div>
        </section>
    );
}
