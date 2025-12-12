import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/Button';

export default function NotFound() {
    return (
        <div className="min-h-[60vh] flex items-center justify-center text-center px-4">
            <Helmet>
                <title>404 - Page Not Found | Chris Slater</title>
                <meta name="robots" content="noindex" />
            </Helmet>

            <div className="max-w-md">
                <div className="text-9xl font-display font-bold text-slate-200 mb-4 select-none">404</div>
                <h1 className="text-3xl font-bold text-slate-900 mb-4">Page not found</h1>
                <p className="text-slate-600 mb-8">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link to="/">
                        <Button>Go Home</Button>
                    </Link>
                    <Link to="/services">
                        <Button variant="outline">View Services</Button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
