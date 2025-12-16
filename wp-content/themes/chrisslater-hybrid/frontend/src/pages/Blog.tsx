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

    return (
        <div className="container mx-auto px-4 py-20">
            <h1 className="text-4xl font-bold text-white mb-8">Blog (Safe Mode)</h1>

            <div className="grid gap-6">
                {posts.map((post) => (
                    <div key={post.id} className="bg-slate-800 p-6 rounded-lg text-white">
                        <h2
                            className="text-2xl font-bold mb-2"
                            dangerouslySetInnerHTML={{ __html: post.title?.rendered || 'Untitled' }}
                        />
                        <div
                            className="text-slate-300"
                            dangerouslySetInnerHTML={{ __html: post.excerpt?.rendered || '' }}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
