
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/Button';
import { Card } from '../components/Card';

export default function Services() {
    return (
        <div className="pb-20">
            <Helmet>
                <title>Services | Chris Slater</title>
                <meta name="description" content="AI Strategy, Custom Development, and Technical Consulting services." />
            </Helmet>

            {/* Page Header */}
            <section className="bg-slate-900 text-white py-20 px-4 md:px-6 relative overflow-hidden">
                <div className="absolute inset-0 bg-hero-glow opacity-20 blur-3xl" />
                <div className="container mx-auto relative z-10 text-center">
                    <h1 className="text-4xl md:text-5xl font-display font-bold mb-6">Expert Services</h1>
                    <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                        Comprehensive solutions to modernize your business with Artificial Intelligence and cutting-edge web technology.
                    </p>
                </div>
            </section>

            {/* Services Grid */}
            <section className="container mx-auto px-4 md:px-6 py-16 -mt-10">
                <div className="grid md:grid-cols-3 gap-8">
                    <Card
                        title="AI Strategy & Consulting"
                        description="Identify high-impact AI use cases for your business. I help you navigate the complex landscape of LLMs, agents, and automation."
                        className="shadow-xl border-t-4 border-t-primary-500"
                        footer={<Button variant="outline" className="w-full">Book Consultation</Button>}
                    >
                        <ul className="space-y-3 text-slate-600 text-sm mt-4">
                            <li className="flex items-start gap-2">✓ <span>Workflow Automation Audits</span></li>
                            <li className="flex items-start gap-2">✓ <span>Custom Model Fine-tuning Plans</span></li>
                            <li className="flex items-start gap-2">✓ <span>Tech Stack Modernization</span></li>
                        </ul>
                    </Card>

                    <Card
                        title="Custom App Development"
                        description="Full-stack web applications built with React, Node.js, and modern cloud architecture. Scalable, secure, and fast."
                        className="shadow-xl border-t-4 border-t-accent-500"
                        footer={<Button className="w-full">Start a Project</Button>}
                    >
                        <ul className="space-y-3 text-slate-600 text-sm mt-4">
                            <li className="flex items-start gap-2">✓ <span>SaaS Product MVP</span></li>
                            <li className="flex items-start gap-2">✓ <span>Internal Business Tools</span></li>
                            <li className="flex items-start gap-2">✓ <span>API Integrations</span></li>
                        </ul>
                    </Card>

                    <Card
                        title="WordPress to Hybrid"
                        description="Transform your legacy WordPress site into a modern Headless or Hybrid architecture without losing your content."
                        className="shadow-xl border-t-4 border-t-slate-500"
                        footer={<Button variant="outline" className="w-full">Learn More</Button>}
                    >
                        <ul className="space-y-3 text-slate-600 text-sm mt-4">
                            <li className="flex items-start gap-2">✓ <span>Performance Optimization</span></li>
                            <li className="flex items-start gap-2">✓ <span>React Frontend Migration</span></li>
                            <li className="flex items-start gap-2">✓ <span>Secure API Setup</span></li>
                        </ul>
                    </Card>
                </div>
            </section>

            {/* CTA Section */}
            <section className="container mx-auto px-4 md:px-6 py-16 text-center">
                <div className="bg-primary-50 rounded-2xl p-12 border border-primary-100">
                    <h2 className="text-3xl font-display font-bold text-slate-900 mb-4">Ready to upgrade your workflow?</h2>
                    <p className="text-slate-600 mb-8 max-w-xl mx-auto">
                        Whether you need a full technical partner or just a strategic nudge, I'm here to help you build the future.
                    </p>
                    <Button size="lg">Contact Me</Button>
                </div>
            </section>
        </div>
    );
}
