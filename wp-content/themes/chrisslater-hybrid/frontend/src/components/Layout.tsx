import { ReactNode, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from './Button';
import { useCart } from '../context/CartContext';

interface LayoutProps {
    children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const { cartCount } = useCart();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => setMobileMenuOpen(false), [pathname]);

    const navLinks = [
        { name: 'About', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'Blog', path: '/blog' },
        { name: 'Shop', path: '/shop' },
    ];

    return (
        <div className="min-h-screen bg-slate-950 text-slate-200 selection:bg-primary-500 selection:text-white">
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-slate-950/80 backdrop-blur-md border-white/10 py-4' : 'bg-transparent border-transparent py-6'
                    }`}
            >
                <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                    <Link to="/" className="text-2xl font-display font-bold text-white tracking-tight flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center">
                            <span className="text-white text-sm">CS</span>
                        </div>
                        Chris Slater
                    </Link>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className={`text-sm font-medium transition-colors hover:text-primary-400 ${pathname === link.path ? 'text-primary-400' : 'text-slate-300'
                                    }`}
                            >
                                {link.name}
                            </Link>
                        ))}
                        <div className="flex items-center gap-4 ml-4">
                            <Link to="/agent-builder">
                                <Button size="sm" className="bg-gradient-to-r from-accent-500 to-primary-500 hover:from-accent-400 hover:to-primary-400 border-none shadow-lg shadow-primary-500/20">
                                    Build Agent
                                </Button>
                            </Link>
                            {cartCount > 0 && (
                                <Link to="/cart" className="relative p-2 text-slate-300 hover:text-white">
                                    <svg className="w-6 h-6 border-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" /></svg>
                                    <span className="absolute top-0 right-0 w-4 h-4 bg-primary-500 text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                                        {cartCount}
                                    </span>
                                </Link>
                            )}
                        </div>
                    </nav>

                    {/* Mobile Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path></svg>
                    </button>
                </div>
            </header>

            {/* Mobile Menu */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-40 bg-slate-950 pt-24 px-6 md:hidden">
                    <div className="flex flex-col gap-6 text-center">
                        {navLinks.map(link => (
                            <Link
                                key={link.path}
                                to={link.path}
                                className="text-2xl font-display font-bold text-slate-200"
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}

            <main className="pt-20">
                {children}
            </main>

            <footer className="border-t border-white/5 bg-slate-950 py-12 mt-20">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500 text-sm">
                        &copy; {new Date().getFullYear()} Chris Slater. Built with WordPress & React 19.
                    </p>
                </div>
            </footer>
        </div>
    );
}
