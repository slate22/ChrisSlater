
import { useState, useEffect, useRef } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Circuitry } from '../components/Circuitry';
import { Link } from 'react-router-dom';
import { GeminiOrchestrator, LogEntry, AgentConfig } from '../lib/gemini';

export default function AgentBuilder() {
    const [step, setStep] = useState(1);
    const [config, setConfig] = useState<AgentConfig>({
        name: '',
        description: '',
        complexity: 'Advanced',
    });
    const [logs, setLogs] = useState<LogEntry[]>([]);
    const [isOrchestrating, setIsOrchestrating] = useState(false);
    const [blueprint, setBlueprint] = useState<any>(null);
    const logContainerRef = useRef<HTMLDivElement>(null);

    const updateConfig = (key: keyof AgentConfig, value: string) => {
        setConfig(prev => ({ ...prev, [key]: value }));
    };

    const nextStep = () => {
        if (step === 1 && !config.name) return; // Basic validation
        if (step === 2 && !config.description) return;
        setStep(prev => prev + 1);
    };

    const startOrchestration = async () => {
        setIsOrchestrating(true);
        setLogs([]);
        const orchestrator = new GeminiOrchestrator(config);

        const iterator = orchestrator.orchestrate();

        try {
            let result = await iterator.next();
            while (!result.done) {
                const entry = result.value as unknown as Omit<LogEntry, 'id' | 'timestamp'>;

                const logItem: LogEntry = {
                    id: Math.random().toString(36).substring(2, 9),
                    timestamp: Date.now(),
                    message: entry.message,
                    type: entry.type
                };

                setLogs(prev => [...prev, logItem]);
                result = await iterator.next();
            }

            // Done
            setBlueprint(orchestrator.getBlueprint());
            setIsOrchestrating(false);
            setStep(5); // Go to step 5 (Result)

        } catch (e) {
            console.error(e);
            setIsOrchestrating(false);
        }
    };

    // Auto-scroll logs
    useEffect(() => {
        if (logContainerRef.current) {
            logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
        }
    }, [logs]);

    return (
        <div className="pb-20 pt-10 relative min-h-screen">
            <SEO
                title="AI Agent Builder"
                description="Configure your custom AI Marketing Agent."
                url="/agent-builder"
            />

            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-accent-500/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <span className="text-accent-400 font-mono text-sm tracking-wider uppercase mb-2 block animate-pulse">
                        System Configuration
                    </span>
                    <h1 className="text-4xl md:text-6xl font-display font-bold text-white mb-4">
                        Build Your <span className="text-gradient">Dream Agent</span>.
                    </h1>
                    <p className="text-slate-400 text-lg">
                        Describe any task. Our Gemini-powered engine will architect the solution.
                    </p>
                </div>

                <div className="flex justify-between mb-8 max-w-xl mx-auto">
                    {[1, 2, 3, 4, 5].map((i) => (
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
                        <div className="animate-fade-in space-y-6 max-w-md mx-auto w-full">
                            <h2 className="text-2xl font-bold text-white text-center">Protocol Identity</h2>
                            <p className="text-slate-400 text-center mb-6">Name your autonomous unit.</p>

                            <input
                                type="text"
                                placeholder="e.g., 'Nexus Sales Bot' or 'Research Assistant'"
                                className="w-full bg-slate-900 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary-500 text-center text-lg"
                                value={config.name}
                                onChange={(e) => updateConfig('name', e.target.value)}
                                onKeyDown={(e) => e.key === 'Enter' && config.name && nextStep()}
                                autoFocus
                            />

                            <Button
                                className="w-full mt-4"
                                disabled={!config.name}
                                onClick={nextStep}
                            >
                                Continue &rarr;
                            </Button>
                        </div>
                    )}

                    {step === 2 && (
                        <div className="animate-fade-in space-y-6 max-w-lg mx-auto w-full">
                            <h2 className="text-2xl font-bold text-white text-center">Directive Parameters</h2>
                            <p className="text-slate-400 text-center mb-6">Describe exactly what this agent should do. Be as specific or broad as you like.</p>

                            <textarea
                                placeholder="e.g., 'I want an agent that monitors Reddit for crypto trends, summarizes sentiment, and posts updates to my Discord channel every hour.'"
                                className="w-full bg-slate-900 border border-white/10 p-4 rounded-xl text-white focus:outline-none focus:border-primary-500 h-40 resize-none text-lg leading-relaxed"
                                value={config.description}
                                onChange={(e) => updateConfig('description', e.target.value)}
                                autoFocus
                            ></textarea>

                            <Button
                                className="w-full mt-4"
                                disabled={!config.description}
                                onClick={nextStep}
                            >
                                Analyze Directive &rarr;
                            </Button>
                        </div>
                    )}

                    {step === 3 && (
                        <div className="animate-fade-in space-y-6">
                            <h2 className="text-2xl font-bold text-white text-center">Intelligence Level</h2>
                            <p className="text-slate-400 text-center mb-6">Select the cognitive load required.</p>
                            <div className="grid md:grid-cols-3 gap-4">
                                {['Simple', 'Advanced', 'God Mode'].map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => { updateConfig('complexity', opt as any); setTimeout(nextStep, 100); }}
                                        className={`p-6 rounded-xl border bg-slate-900/50 transition-all text-left group
                                            ${config.complexity === opt ? 'border-primary-500 ring-1 ring-primary-500' : 'border-white/10 hover:bg-slate-800'}`}
                                    >
                                        <div className={`text-white font-bold mb-2 ${opt === 'God Mode' ? 'text-accent-400' : 'group-hover:text-primary-300'}`}>{opt}</div>
                                        <div className="text-slate-500 text-sm">
                                            {opt === 'Simple' && 'Best for basic chatbots and simple tasks.'}
                                            {opt === 'Advanced' && 'Multi-step reasoning and memory.'}
                                            {opt === 'God Mode' && 'Full autonomy. Recursive self-improvement.'}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Step 4: Orchestration Phase */}
                    {step === 4 && (
                        <div className="animate-fade-in text-center space-y-6">
                            {!isOrchestrating && logs.length === 0 ? (
                                <>
                                    <h2 className="text-3xl font-bold text-white">Specs Confirmed</h2>
                                    <div className="bg-slate-950/50 p-6 rounded-xl max-w-sm mx-auto text-left border border-white/10 mb-8 space-y-3">
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider">Identity</div>
                                            <div className="text-white font-bold">{config.name}</div>
                                        </div>
                                        <div>
                                            <div className="text-xs text-slate-500 uppercase tracking-wider">Complexity</div>
                                            <div className={`font-mono text-sm ${config.complexity === 'God Mode' ? 'text-red-400 font-bold' : 'text-primary-400'}`}>
                                                {config.complexity.toUpperCase()}
                                            </div>
                                        </div>
                                    </div>

                                    <Button size="lg" onClick={startOrchestration} className={`shadow-xl ${config.complexity === 'God Mode' ? 'shadow-red-500/20 bg-red-600 hover:bg-red-700 border-red-500' : 'shadow-primary-500/20'}`}>
                                        Initialize Build Sequence
                                    </Button>
                                </>
                            ) : (
                                <div className="max-w-3xl mx-auto w-full">
                                    <div className="flex items-center justify-between mb-2 px-1">
                                        <div className="text-xs font-mono text-primary-400 animate-pulse">
                                            GEMINI ORCHESTRATOR // ACTIVE
                                        </div>
                                        <div className="text-xs text-slate-500">v1.5-Pro</div>
                                    </div>
                                    <div
                                        ref={logContainerRef}
                                        className="h-80 bg-slate-950 font-mono text-xs sm:text-sm p-6 rounded-xl border border-primary-500/30 overflow-y-auto text-left shadow-inner custom-scrollbar"
                                    >
                                        {logs.map((log) => (
                                            <div key={log.id} className="mb-1.5 last:mb-0">
                                                <span className="text-slate-700 mr-3 select-none">[{new Date(log.timestamp).toLocaleTimeString().split(' ')[0]}]</span>
                                                <span className={
                                                    log.type === 'success' ? 'text-green-400' :
                                                        log.type === 'system' ? 'text-primary-400 font-bold' :
                                                            log.type === 'warning' ? 'text-red-500 font-bold' :
                                                                log.type === 'error' ? 'text-red-400' :
                                                                    'text-slate-300'
                                                }>
                                                    {log.message}
                                                </span>
                                            </div>
                                        ))}
                                        {isOrchestrating && (
                                            <div className="animate-pulse text-primary-500">_</div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    )}

                    {/* Step 5: Final Result */}
                    {step === 5 && blueprint && (
                        <div className="animate-fade-in text-center space-y-6">

                            <h2 className="text-3xl font-bold text-white">Agent Blueprint Generated</h2>

                            <div className="bg-slate-950/80 p-8 rounded-xl max-w-2xl mx-auto text-left border border-green-500/30 shadow-2xl relative overflow-hidden group">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-green-500 to-transparent opacity-50"></div>

                                <div className="flex justify-between items-start mb-6">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{blueprint.name}</h3>
                                        <div className="text-xs text-slate-500 font-mono">{blueprint.version} | {blueprint.core_model}</div>
                                    </div>
                                    <div className="text-green-400 bg-green-900/20 px-3 py-1 rounded text-xs font-mono border border-green-900/50">
                                        READY_FOR_DEPLOY
                                    </div>
                                </div>

                                <div className="space-y-6">
                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Original Directive</div>
                                        <div className="text-slate-300 italic text-sm">"{blueprint.description}"</div>
                                    </div>

                                    <div>
                                        <div className="text-xs uppercase tracking-wider text-slate-500 mb-2">Capabilities Matrix</div>
                                        <div className="flex flex-wrap gap-2">
                                            {blueprint.capabilities.map((cap: string, i: number) => (
                                                <span key={i} className="px-2 py-1 bg-slate-800 border border-slate-700 rounded text-xs text-slate-300">
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-6">
                                <p className="text-slate-400 mb-6 max-w-lg mx-auto">
                                    Your custom architecture has been saved to the staging environment.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                    <Link to="/shop">
                                        <Button size="lg" className="shadow-xl shadow-green-500/20 bg-green-600 hover:bg-green-500 border-green-600 text-white min-w-[200px]">
                                            Deploy Agent ($2,500)
                                        </Button>
                                    </Link>
                                    <Button variant="outline" onClick={() => { setStep(1); setConfig({ name: '', description: '', complexity: 'Advanced' }); }} className="text-slate-400 hover:text-white border-slate-700">
                                        Build New Agent
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}

                </Card>
            </div>
        </div>
    );
}

