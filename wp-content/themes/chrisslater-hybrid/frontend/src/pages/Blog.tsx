import { usePosts } from '../hooks/usePosts';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

export default function Blog() {
    const { posts, loading, error } = usePosts();

    if (loading) return (
        <div className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-2xl text-white">Loading...</h1>
        </div>
    );

    // Note: Error is handled by fallback posts, but we can verify here too
    if (!posts) return null;

    const stripShortcodes = (html: string) => {
        if (!html) return '';
        return html
            .replace(/\[\/?(?:vc|vp|rev)[^\]]*\]/g, '') // Remove specific complex shortcodes
            .replace(/\[[^\]]+\]/g, '') // Remove generic shortcodes
            .replace(/<p>\s*<\/p>/g, '') // Remove empty paragraphs
            .replace(/<br\s*\/?>/gi, ' '); // Replace breaks with spaces
    };

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold text-white mb-8">Blog</h1>

            <div className="grid gap-6">
                {posts.map((post) => (
                    <Link to={`/${post.slug}`} key={post.id} className="block group">
                        <div className="bg-slate-900 border border-white/10 p-8 rounded-2xl hover:border-primary-500/50 transition-colors">
                            <h2
                                className="text-2xl font-bold mb-4 font-display group-hover:text-primary-400 transition-colors"
                                dangerouslySetInnerHTML={{ __html: stripShortcodes(post.title?.rendered || 'Untitled') }}
                            />
                            <div
                                className="text-slate-400 leading-relaxed line-clamp-3"
                                dangerouslySetInnerHTML={{ __html: stripShortcodes(post.excerpt?.rendered || '') }}
                            />
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
