import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Circuitry } from '../components/Circuitry';
import { Link } from 'react-router-dom';

export default function AgentBuilder() {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState({
        objective: '',
        platform: '',
        voice: '',
    });

    const updateConfig = (key: string, value: string) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => setStep(prev => prev + 1);

    return (
        <div className="pb-20 pt-10 relative min-h-screen">
            <Helmet>
                <title>AI Agent Builder | Chris Slater</title>
                <meta name="description" content="Configure your custom AI Marketing Agent." />
            </Helmet>

            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-accent-500/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2 block animate-pulse">
                        System Configuration
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                        Build Your <span className="text-gradient">Agent</span>.
                    </h1>
                    <p className="text-slate-400 text-lg">Define the intelligence protocol for your autonomous marketing unit.</p>
                </div>

                <div className="flex justify-between mb-8 max-w-xl mx-auto">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${step >= i ? 'bg-primary-500 text-white' : 'bg-slate-800 text-slate-500'
                                } transition-colors duration-300`}>
                                {i}
                            </div>
                            <div className="text-xs text-slate-500 mt-2 font-mono">STEP 0{i}</div>
                        </div>
                    ))}
                </div>

                <Card className="relative overflow-hidden min-h-[400px] flex flex-col justify-center">
                    <Circuitry className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" />

                    {step === 1 && (
                        <div className="animate-fade-in space-y-6">
                            <h2 className="text-2xl font-bold text-white text-center">Primary Directive</h2>
                            <p className="text-slate-400 text-center mb-6">What is the main goal of this agent?</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {['Lead Generation', 'Brand Awareness', 'Customer Support'].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => { updateConfig('objective', opt); nextStep(); }}
                                        className="p-6 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-primary-500/20 hover:border-primary-500/50 transition-all text-left group"
                                    >
                                        <div className="text-white font-bold mb-2 group-hover:text-primary-300">{opt}</div>
                                        <div className="text-slate-500 text-sm">Autonomous execution of {opt.toLowerCase()} protocols.</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-fade-in space-y-6">
                            <h2 className="text-2xl font-bold text-white text-center">Deployment Channel</h2>
                            <p className="text-slate-400 text-center mb-6">Where will this agent operate?</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {['LinkedIn', 'X (Twitter)', 'Email'].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => { updateConfig('platform', opt); nextStep(); }}
                                        className="p-6 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-secondary-500/20 hover:border-secondary-500/50 transition-all text-left group"
                                    >
                                        <div className="text-white font-bold mb-2 group-hover:text-secondary-300">{opt}</div>
                                        <div className="text-slate-500 text-sm">Deploy to {opt} API endpoints.</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-fade-in space-y-6">
                            <h2 className="text-2xl font-bold text-white text-center">Personality Matrix</h2>
                            <p className="text-slate-400 text-center mb-6">Define the tonal output.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {['Professional', 'Witty / Viral', 'Supportive'].map(opt => (
                                    <button
                                        key={opt}
                                        onClick={() => { updateConfig('voice', opt); nextStep(); }}
                                        className="p-6 rounded-xl border border-white/10 bg-slate-900/50 hover:bg-accent-500/20 hover:border-accent-500/50 transition-all text-left group"
                                    >
                                        <div className="text-white font-bold mb-2 group-hover:text-accent-300">{opt}</div>
                                        <div className="text-slate-500 text-sm">Set LLM temperature and system prompt to {opt}.</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {step === 4 && (
                        <div className="animate-fade-in text-center space-y-6">
                            <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto text-green-400 animate-pulse">
                                <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            </div>
                            <h2 className="text-3xl font-bold text-white">Spec Configuration Complete</h2>

                            <div className="bg-slate-950/50 p-6 rounded-xl max-w-sm mx-auto text-left border border-white/10">
                                <div className="flex justify-between mb-2"><span className="text-slate-500">Objective:</span> <span className="text-primary-400 font-mono">{config.objective}</span></div>
                                <div className="flex justify-between mb-2"><span className="text-slate-500">Channel:</span> <span className="text-secondary-400 font-mono">{config.platform}</span></div>
                                <div className="flex justify-between"><span className="text-slate-500">Voice:</span> <span className="text-accent-400 font-mono">{config.voice}</span></div>
                            </div>

                            <div className="pt-6">
                                <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                                    Your agent specification file is ready. Purchase the license to initiate the build and training process.
                                </p>
                                <Link to="/shop">
                                    <Button size="lg" className="w-full md:w-auto shadow-xl shadow-primary-500/20">
                                        Purchase Agent License ($2,500)
                                    </Button>
                                </Link>
                                <div className="mt-4">
                                    <Link to="/contact" className="text-sm text-slate-500 hover:text-white">Need a custom enterprise integration?</Link>
                                </div>
                            </div>
                        </div>
                    )}

                </Card>
            </div>
        </div>
    );
}
