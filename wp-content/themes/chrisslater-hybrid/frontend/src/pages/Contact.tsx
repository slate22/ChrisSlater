import { useState, FormEvent } from 'react';
import { SEO } from '../components/SEO';
import { Button } from '../components/Button';
import { Card } from '../components/Card';
import { Circuitry } from '../components/Circuitry';

export default function Contact() {
    const [submitting, setSubmitting] = useState(false);
    const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitting(true);

        // Simulation of form submission
        // In a real WP setup, you'd POST to a CF7 REST endpoint or a custom route
        setTimeout(() => {
            setSubmitting(false);
            setStatus('success');
        }, 1500);
    };

    return (
        <div className="pb-20 pt-10 relative">
            <SEO
                title="Contact"
                description="Get in touch to discuss your AI or web development project."
                url="/contact"
            />

            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-accent-500/10 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6 max-w-5xl">
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">
                            Let's Talk <br /><span className="text-gradient">Possibilities</span>
                        </h1>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8">
                            Have a project in mind? Interested in how AI can transform your workflow? I'm currently accepting new projects and consulting engagements.
                        </p>

                        <div className="space-y-6">
                            <Card className="flex flex-row items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">Email</div>
                                    <a href="mailto:hello@chrisslater.ai" className="text-white hover:text-primary-400 transition-colors">hello@chrisslater.ai</a>
                                </div>
                            </Card>

                            <Card className="flex flex-row items-center gap-4">
                                <div className="w-10 h-10 rounded-full bg-primary-500/20 flex items-center justify-center text-primary-400">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                </div>
                                <div>
                                    <div className="text-sm text-slate-500 mb-1">Location</div>
                                    <div className="text-white">Global / Remote First</div>
                                </div>
                            </Card>
                        </div>
                    </div>

                    <Card className="relative overflow-hidden">
                        <Circuitry className="absolute top-0 right-0 w-full h-full opacity-5 pointer-events-none" />

                        {status === 'success' ? (
                            <div className="text-center py-12">
                                <div className="w-16 h-16 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Message Sent</h3>
                                <p className="text-slate-400">I'll get back to you shortly.</p>
                                <Button className="mt-6" variant="outline" onClick={() => setStatus('idle')}>Send Another</Button>
                            </div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                                <div>
                                    <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        required
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="Your name"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        required
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="you@company.com"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Message</label>
                                    <textarea
                                        id="message"
                                        required
                                        rows={4}
                                        className="w-full bg-slate-900/50 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary-500 transition-colors"
                                        placeholder="How can I help you?"
                                    ></textarea>
                                </div>
                                <Button type="submit" className="w-full" disabled={submitting}>
                                    {submitting ? 'Transmitting...' : 'Send Message'}
                                </Button>
                            </form>
                        )}
                    </Card>
                </div>
            </div>
        </div>
    );
}
