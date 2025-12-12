
import { Helmet } from 'react-helmet-async';
import { Hero } from '../components/Hero';
import { Card } from '../components/Card';
import { Button } from '../components/Button';

export default function Home() {
    return (
        <>
            <Helmet>
                <title>Chris Slater | 100x AI Developer</title>
                <meta name="description" content="Chris Slater - 100x AI Developer building the intelligent future from the Gulf Coast. Expert in AI strategy, React, and Hybrid WordPress solutions." />
            </Helmet>

            <main>
                <Hero />

                {/* Introduction / About Teaser */}
                <section className="py-24 bg-white relative">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="grid md:grid-cols-2 gap-16 items-center">
                            <div className="relative">
                                <div className="aspect-square bg-slate-100 rounded-2xl overflow-hidden relative z-10 shadow-2xl rotate-3">
                                    {/* Placeholder for Chris's Image - Using a gradient for now */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center text-slate-400">
                                        [Chris Slater Image]
                                    </div>
                                </div>
                                <div className="absolute inset-0 bg-primary-100/50 rounded-2xl -rotate-3 scale-105 z-0" />
                            </div>
                            <div>
                                <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-6">
                                    Hi, I'm <span className="text-primary-600">Chris Slater</span>.
                                </h2>
                                <h3 className="text-xl text-slate-600 font-medium mb-6">
                                    Living near the Gulf, coding for the World.
                                </h3>
                                <p className="text-slate-600 leading-relaxed mb-6 text-lg">
                                    I'm not just a developer; I'm an AI strategist obsessed with velocity and quality.
                                    By leveraging the latest in Generative AI and modern frameworks, I build software
                                    at a pace and quality that traditional methods can't match.
                                </p>
                                <p className="text-slate-600 leading-relaxed mb-8 text-lg">
                                    Whether it's a hybrid WordPress/React masterpiece or a complex AI-driven application,
                                    I bring the calm focus of the coast to the chaotic world of tech.
                                </p>
                                <Button variant="secondary" className="bg-secondary-100 text-secondary-900 hover:bg-secondary-200 border-secondary-200">
                                    More About Me &rarr;
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Services / Value Props */}
                <section className="py-24 bg-slate-50 border-t border-slate-200">
                    <div className="container mx-auto px-4 md:px-6 text-center max-w-4xl">
                        <span className="text-primary-600 font-semibold tracking-wider uppercase text-sm mb-4 block">What I Do</span>
                        <h2 className="text-3xl md:text-5xl font-display font-bold text-slate-900 mb-16">
                            Innovation at <span className="text-primary-500">100x Speed</span>
                        </h2>

                        <div className="grid md:grid-cols-3 gap-8 text-left">
                            <Card className="hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-primary-500">
                                <div className="h-12 w-12 bg-primary-100 rounded-lg flex items-center justify-center text-primary-600 mb-6 text-2xl">
                                    🤖
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">AI Strategy & Integration</h3>
                                <p className="text-slate-600">
                                    I don't just use AI; I bake it into the core of your product. LLM integration, RAG pipelines, and automated workflows.
                                </p>
                            </Card>
                            <Card className="hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-secondary-500">
                                <div className="h-12 w-12 bg-secondary-100 rounded-lg flex items-center justify-center text-secondary-600 mb-6 text-2xl">
                                    🌊
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Hybrid Architectures</h3>
                                <p className="text-slate-600">
                                    Best of both worlds. Headless WordPress for easy content management, React for a blazing fast, app-like frontend experience.
                                </p>
                            </Card>
                            <Card className="hover:-translate-y-2 transition-transform duration-300 border-t-4 border-t-accent-500">
                                <div className="h-12 w-12 bg-accent-100 rounded-lg flex items-center justify-center text-accent-600 mb-6 text-2xl">
                                    🚀
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Rapid Prototyping</h3>
                                <p className="text-slate-600">
                                    From idea to MVP in days, not months. I use advanced AI coding agents to accelerate the development lifecycle.
                                </p>
                            </Card>
                        </div>
                    </div>
                </section>

                {/* Call to Action */}
                <section className="py-24 bg-slate-900 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary-900 via-slate-900 to-slate-900"></div>
                    <div className="container mx-auto px-4 text-center relative z-10">
                        <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
                            Ready to ride the wave?
                        </h2>
                        <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                            Let's discuss how we can leverage AI to transform your business or build your next big idea.
                        </p>
                        <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 border-none shadow-xl">
                            Get in Touch
                        </Button>
                    </div>
                </section>
            </main>
        </>
    );
}
