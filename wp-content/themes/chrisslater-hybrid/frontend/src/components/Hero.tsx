import { Link } from 'react-router-dom';
import { Button } from './Button';
import { Circuitry } from './Circuitry';

export function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Dynamic Background */}
            <div className="absolute inset-0 bg-slate-950">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(79,70,229,0.15),transparent_50%)]"></div>
                <Circuitry className="absolute inset-0 opacity-40 text-primary-500" preserveAspectRatio="xMidYMid slice" />
            </div>

            <div className="container relative z-10 px-4 md:px-6 text-center max-w-5xl mx-auto">
                <div className="flex flex-wrap justify-center gap-4 mb-8 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-primary-300 text-sm font-medium">
                        <span className="w-2 h-2 rounded-full bg-primary-400 animate-pulse"></span>
                        Available for AI Strategy Roles
                    </div>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-300 text-sm font-medium">
                        <span className="text-amber-400">⚡</span>
                        100x Developer
                    </div>
                </div>

                <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold tracking-tight mb-8 leading-tight">
                    Turn AI Potential into <br />
                    <span className="text-gradient">Production Reality</span>.
                </h1>

                <p className="text-xl md:text-2xl text-slate-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                    Don't just keep up—lead the market. I architect high-performance AI applications that automate workflows, engage users, and drive tangible business growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Link to="/services">
                        <Button size="lg" className="min-w-[180px] shadow-lg shadow-primary-500/20">
                            View Services
                        </Button>
                    </Link>
                    <Link to="/contact">
                        <Button size="lg" variant="outline" className="min-w-[180px]">
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>


        </section>
    );
}
