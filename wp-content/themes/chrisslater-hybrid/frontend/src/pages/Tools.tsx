import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Circuitry } from '../components/Circuitry';

export default function Tools() {
    return (
        <div className="pb-20 pt-10 relative">
            <SEO
                title="AI Tools"
                description="Suite of autonomous agents and developer tools."
                url="/tools"
            />

            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-primary-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        AI Toolkit
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        Deploy powerful autonomous agents to handle complex workflows. From marketing automation to code generation, these tools are designed to multiply your output.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Tool 1: Agent Builder */}
                    <Card className="hover:border-primary-500/50 group h-full flex flex-col relative overflow-hidden">
                        <div className="absolute top-0 right-0 p-4 opacity-50">
                            <Circuitry className="w-24 h-24 text-primary-500" />
                        </div>

                        <div className="w-14 h-14 rounded-xl bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 border border-primary-500/20 shadow-lg shadow-primary-500/5">
                            <span className="text-2xl">⚡</span>
                        </div>

                        <h3 className="text-2xl font-bold font-display text-white mb-2">Agent Builder</h3>
                        <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                            Design and architect custom autonomous agents powered by Gemini. Define protocols, complexity, and capabilities in a simple wizard interface.
                        </p>

                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                            <span className="text-xs font-mono text-primary-400 bg-primary-500/10 px-2 py-1 rounded border border-primary-500/20">v1.0 LIVE</span>
                            <Link to="/agent-builder">
                                <Button size="sm">Launch &rarr;</Button>
                            </Link>
                        </div>
                    </Card>

                    {/* Tool 2: Coming Soon */}
                    <Card className="opacity-75 border-dashed border-slate-700 hover:border-slate-600 h-full flex flex-col relative overflow-hidden bg-slate-900/30">
                        <div className="w-14 h-14 rounded-xl bg-slate-800 flex items-center justify-center mb-6 text-slate-500 border border-white/5">
                            <span className="text-2xl">🎨</span>
                        </div>

                        <h3 className="text-2xl font-bold font-display text-slate-300 mb-2">Ad Creative Suite</h3>
                        <p className="text-slate-500 mb-6 flex-grow leading-relaxed">
                            Generate high-converting ad copy and visual concepts for Facebook and Google Ads using multi-modal AI analysis.
                        </p>

                        <div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
                            <span className="text-xs font-mono text-slate-500 bg-slate-800 px-2 py-1 rounded">IN DEVELOPMENT</span>
                            <Button size="sm" variant="ghost" disabled>Coming Soon</Button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    );
}
