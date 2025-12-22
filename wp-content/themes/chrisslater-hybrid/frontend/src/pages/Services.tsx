import { Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Circuitry } from '../components/Circuitry';

export default function Services() {
    return (
        <div className="pb-20 pt-10 relative">
            <SEO
                title="Services"
                description="AI Strategy, Custom Development, and Hybrid Architecture services."
                url="/services"
            />

            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-primary-500/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                        Engineering Intelligence
                    </h1>
                    <p className="text-xl text-slate-400 leading-relaxed">
                        I don't just build websites; I architect intelligent systems. From strategic AI integration to high-performance hybrid applications, I help you stay ahead of the curve.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {/* Service 1 */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">🤖</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">AI Strategy & Consulting</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Identify high-value AI opportunities within your business. I provide roadmaps for integrating LLMs, automations, and intelligent workflows.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Book Strategy Session</Button>
                    </Card>

                    {/* Service 2 */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">⚡</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">Custom App Development</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Full-stack development using React, TypeScript, and Node.js. I build scalable, secure, and lightning-fast applications tailored to your needs.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Discuss Your App</Button>
                    </Card>

                    {/* Service 3 */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">🔄</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">WordPress to Hybrid</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Get the best of both worlds. Keep your easy WordPress backend while upgrading your frontend to a modern, headless React experience.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Start Migration</Button>
                    </Card>

                    {/* Service 4: RAG */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">📚</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">RAG Implementation</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Connect your private data to Large Language Models. I build secure Retrieval-Augmented Generation pipelines for "chat with your docs" functionality.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Build RAG System</Button>
                    </Card>

                    {/* Service 5: Agent Training */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">🧠</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">AI Agent Training</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Create autonomous agents that understand your brand voice and specific workflows. I fine-tune prompts and configure agent behavior for maximum reliability.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Train Your Agents</Button>
                    </Card>

                    {/* Service 6: APIs */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">🔌</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">API Integration</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Seamlessly connect disparate systems. I build robust API layers that allow your AI tools, CRM, and website to talk to each other in real-time.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Connect Systems</Button>
                    </Card>

                    {/* Service 7: Performance */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">🚀</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">Performance Optimization</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Speed matters. I audit and optimize your web applications for Core Web Vitals, ensuring lightning-fast load times and smooth interactions.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Optimize Speed</Button>
                    </Card>

                    {/* Service 8: SaaS MVP */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">💎</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">SaaS Prototyping</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Validate your idea fast. I build functional Minimum Viable Products (MVPs) that look premium and work perfectly, ready for investor demo day.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Start Your MVP</Button>
                    </Card>

                    {/* Service 9: Data Pipelines */}
                    <Card className="hover:border-primary-500/50 group flex flex-col">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <span className="text-2xl">🌊</span>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">Data Engineering</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Clean data is the fuel for AI. I design and build reliable data pipelines to collect, process, and store your business intelligence.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto" onClick={() => window.location.href = '/contact'}>Fix Your Data</Button>
                    </Card>
                </div>

                <div className="mt-20 p-8 rounded-2xl bg-white/5 border border-white/10 text-center relative overflow-hidden">
                    <Circuitry className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" />
                    <h2 className="text-3xl font-display font-bold text-white mb-4 relative z-10">Ready to transform your digital presence?</h2>
                    <p className="text-slate-400 mb-8 max-w-2xl mx-auto relative z-10">
                        Book a free 15-minute discovery call to discuss your project.
                    </p>
                    <Button size="lg" className="relative z-10" onClick={() => window.location.href = '/contact'}>Book Discovery Call</Button>
                </div>
            </div>
        </div>
    );
}
