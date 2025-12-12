
import { Helmet } from 'react-helmet-async';

export default function About() {
    return (
        <div className="pb-20">
            <Helmet>
                <title>About | Chris Slater</title>
                <meta name="description" content="Learn more about Chris Slater, a Full-Stack Developer and AI Strategist." />
            </Helmet>

            <section className="bg-slate-50 py-20 px-4 md:px-6">
                <div className="container mx-auto max-w-4xl">
                    <span className="text-primary-600 font-bold tracking-wider text-sm uppercase mb-2 block">The Person Behind the Code</span>
                    <h1 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-8">
                        Hi, I'm Chris. <br />
                        <span className="text-slate-500">I bridge the gap between human creativity and artificial intelligence.</span>
                    </h1>

                    <div className="prose prose-lg text-slate-600 max-w-none">
                        <p>
                            With over a decade of experience in software development, I've seen the web evolve from static pages to rich applications, and now, into the era of AI.
                            My mission is simple: <strong>democratize access to intelligent technology</strong>.
                        </p>
                        <p>
                            I specialize in building hybrid architectures that combine the reliability of established platforms like WordPress with the interactivity of modern frameworks like React and Next.js.
                            But good code isn't enough anymore. You need a strategy to leverage AI for content generation, customer support, and data analysis.
                        </p>
                    </div>
                </div>
            </section>

            <section className="py-20 px-4 md:px-6 border-t border-slate-200">
                <div className="container mx-auto max-w-4xl">
                    <h2 className="text-2xl font-bold font-display text-slate-900 mb-8">Technical Expertise</h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
                            <div className="font-bold text-slate-900 mb-1">Frontend</div>
                            <div className="text-sm text-slate-500">React, Vue, Tailwind</div>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
                            <div className="font-bold text-slate-900 mb-1">Backend</div>
                            <div className="text-sm text-slate-500">Node.js, PHP, Python</div>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
                            <div className="font-bold text-slate-900 mb-1">AI / ML</div>
                            <div className="text-sm text-slate-500">OpenAI API, LangChain</div>
                        </div>
                        <div className="p-4 bg-white border border-slate-200 rounded-lg text-center">
                            <div className="font-bold text-slate-900 mb-1">Platforms</div>
                            <div className="text-sm text-slate-500">WordPress, AWS, Vercel</div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
