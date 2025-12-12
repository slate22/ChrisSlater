import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';

export function Layout({ children }: { children: React.ReactNode }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const location = useLocation();

    // Handle scroll effect for header
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [location.pathname]);

    return (
        <div className="flex min-h-screen flex-col bg-slate-50 font-sans selection:bg-primary-200 selection:text-primary-900">
            {/* Header */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm border-b border-slate-200/50 py-3' : 'bg-transparent py-5'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link to="/" className="flex items-center gap-2 group">
                        <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-lg shadow-lg group-hover:shadow-primary-500/30 transition-shadow">
                            C
                        </div>
                        <span className="text-xl font-display font-bold text-slate-900 tracking-tight">Chris<span className="text-primary-600">Slater</span></span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex items-center gap-8">
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="/services">Services</NavLink>
                        <NavLink to="/blog">Blog</NavLink>
                        <NavLink to="/about">About</NavLink>
                    </nav>

                    <div className="hidden md:flex items-center gap-4">
                        <Button variant="ghost" size="sm">Log In</Button>
                        <Button size="sm">Get Started</Button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="md:hidden p-2 text-slate-600"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 18 18" /></svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12" /><line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /></svg>
                        )}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-xl p-4 flex flex-col gap-4 animate-fade-in">
                        <Link to="/" className="text-lg font-medium text-slate-700">Home</Link>
                        <Link to="/services" className="text-lg font-medium text-slate-700">Services</Link>
                        <Link to="/blog" className="text-lg font-medium text-slate-700">Blog</Link>
                        <Button className="w-full">Get Started</Button>
                    </div>
                )}
            </header>

            {/* Main Content */}
            <main className="flex-1 pt-20">
                {children}
            </main>

            {/* Footer */}
            <footer className="bg-slate-950 text-slate-200 py-12 border-t border-slate-800">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="col-span-1 md:col-span-2">
                            <span className="text-2xl font-display font-bold text-white tracking-tight">Chris<span className="text-primary-400">Slater</span></span>
                            <p className="mt-4 text-slate-400 max-w-sm">
                                Empowering businesses with AI-driven strategies and custom development solutions.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Navigation</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><Link to="/" className="hover:text-primary-400 transition-colors">Home</Link></li>
                                <li><Link to="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
                                <li><Link to="/blog" className="hover:text-primary-400 transition-colors">Blog</Link></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-white mb-4">Connect</h4>
                            <ul className="space-y-2 text-slate-400">
                                <li><a href="#" className="hover:text-primary-400 transition-colors">Twitter</a></li>
                                <li><a href="#" className="hover:text-primary-400 transition-colors">LinkedIn</a></li>
                                <li><a href="#" className="hover:text-primary-400 transition-colors">GitHub</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Chris Slater. All rights reserved.
                    </div>
                </div>
            </footer>
        </div>
    );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <Link
            to={to}
            className={`text-sm font-medium transition-colors hover:text-primary-600 ${isActive ? 'text-primary-600' : 'text-slate-600'
                }`}
        >
            {children}
        </Link>
    );
}
