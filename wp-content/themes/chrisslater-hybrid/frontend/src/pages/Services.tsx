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
                    <Card className="hover:border-primary-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3M3.343 15.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">AI Strategy & Consulting</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Identify high-value AI opportunities within your business. I provide roadmaps for integrating LLMs, automations, and intelligent workflows.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto">Learn More</Button>
                    </Card>

                    {/* Service 2 */}
                    <Card className="hover:border-primary-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">Custom App Development</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Full-stack development using React, TypeScript, and Node.js. I build scalable, secure, and lightning-fast applications tailored to your needs.
                        </p>
                        <Button variant="outline" size="sm" className="w-full mt-auto">View Projects</Button>
                    </Card>

                    {/* Service 3 */}
                    <Card className="hover:border-primary-500/50 group">
                        <div className="w-12 h-12 rounded-lg bg-primary-500/10 flex items-center justify-center mb-6 text-primary-400 group-hover:text-primary-300 group-hover:bg-primary-500/20 transition-colors">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"></path></svg>
                        </div>
                        <h3 className="text-xl font-bold font-display text-white mb-3">WordPress to Hybrid</h3>
                        <p className="text-slate-400 mb-6 flex-grow">
                            Get the best of both worlds. Keep your easy WordPress backend while upgrading your frontend to a modern, headless React experience.
                        </p>
                        <Link to="/contact" className="w-full mt-auto">
                            <Button variant="outline" size="sm" className="w-full">See Process</Button>
                        </Link>
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
