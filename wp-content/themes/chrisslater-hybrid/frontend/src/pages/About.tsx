
import { SEO } from '../components/SEO';
import { Circuitry } from '../components/Circuitry';
import { Card } from '../components/Card';
import { Button } from '../components/Button';
import aiAbstract from '../assets/images/ai-circuitry.jpg';
import chrisInterior from '../assets/images/chris-interior.png';

export default function About() {
    return (
        <div className="pb-20 pt-10 relative overflow-hidden">
            <SEO
                title="About"
                description="AI Strategist and Full Stack Developer bridging the gap between human creativity and machine intelligence."
                url="/about"
            />

            <div className="absolute top-0 left-0 -z-10 opacity-30 w-full h-[800px] pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-transparent to-slate-950 z-10" />
                <img src={aiAbstract} alt="" className="w-full h-full object-cover opacity-60 mix-blend-screen" />
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <div className="max-w-4xl mx-auto">
                    <div className="flex flex-col md:flex-row gap-12 items-center mb-16 animate-fade-in-up">
                        <div className="w-full md:w-1/3 flex justify-center">
                            <div className="relative w-64 h-64">
                                <div className="absolute inset-0 bg-primary-500/20 rounded-full blur-2xl animate-pulse"></div>
                                <div className="relative w-full h-full rounded-2xl overflow-hidden glass-panel border border-white/20 flex items-center justify-center">
                                    <img src={chrisInterior} alt="Chris Slater" className="w-full h-full object-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-2/3">
                            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                                Bridging <span className="text-gradient">Human Creativity</span> & <br />Machine Intelligence
                            </h1>
                            <p className="text-xl text-slate-300 leading-relaxed mb-6">
                                I am an AI Strategist and Full Stack Developer obsessed with the intersection of code, content, and cognitive computing.
                            </p>
                            <p className="text-slate-400 leading-relaxed">
                                For over a decade, I've built digital products that solve real problems. Now, I leverage Generative AI to architect systems that don't just function—they think, adapt, and scale. My mission is to help businesses transition from static web presences to dynamic, intelligent ecosystems.
                            </p>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-8 mb-16">
                        <Card>
                            <h3 className="text-xl font-bold font-display text-white mb-4">Philosophy</h3>
                            <p className="text-slate-400 leading-relaxed">
                                Technology should amplify human potential, not replace it. I build "Hybrid" systems where AI handles the heavy lifting—data analysis, pattern recognition, and automation—allowing humans to focus on strategy, empathy, and creative decision-making.
                            </p>
                        </Card>
                        <Card>
                            <h3 className="text-xl font-bold font-display text-white mb-4">Experience</h3>
                            <p className="text-slate-400 leading-relaxed">
                                From scaling WordPress architectures to high-traffic volumes, to deploying custom RAG (Retrieval-Augmented Generation) applications, I bring a unique blend of traditional engineering discipline and cutting-edge AI experimentation.
                            </p>
                        </Card>
                    </div>

                    <section className="mb-16">
                        <h2 className="text-3xl font-display font-bold text-white mb-8 text-center">Technical Arsenal</h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { title: 'Frontend', skills: 'React 19, TypeScript, Tailwind' },
                                { title: 'Backend', skills: 'Node.js, Python, PHP' },
                                { title: 'AI / LLMs', skills: 'OpenAI API, LangChain, Anthropic' },
                                { title: 'Architecture', skills: 'Headless WP, Next.js, AWS' }
                            ].map((tech, i) => (
                                <div key={i} className="glass-card p-6 rounded-xl text-center hover:bg-white/10 transition-colors">
                                    <div className="text-primary-400 font-bold mb-2">{tech.title}</div>
                                    <div className="text-sm text-slate-400">{tech.skills}</div>
                                </div>
                            ))}
                        </div>
                    </section>

                    <div className="p-8 rounded-2xl bg-gradient-to-r from-primary-900/50 to-slate-900 border border-white/10 text-center relative overflow-hidden">
                        <div className="relative z-10">
                            <h2 className="text-3xl font-display font-bold text-white mb-4">Let's build something intelligent.</h2>
                            <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                                Whether you need a strategic roadmap or a full-scale build, I'm ready to engineer your future.
                            </p>
                            <Button size="lg" onClick={() => window.location.href = '/contact'}>Get in Touch</Button>
                        </div>
                        <Circuitry className="absolute inset-0 opacity-10 pointer-events-none text-white" />
                    </div>
                </div>
            </div>
        </div>
    );
}
