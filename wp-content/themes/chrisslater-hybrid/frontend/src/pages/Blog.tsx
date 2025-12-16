import { usePosts } from '../hooks/usePosts';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

export default function Blog() {
    const { posts, loading, error } = usePosts();

    if (loading) return (
        <div className="container mx-auto px-4 py-32 text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary-500 border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-slate-400">Loading insights...</p>
        </div>
    );

    if (error) return (
        <div className="container mx-auto px-4 py-32 text-center text-red-400">
            <p>Error loading posts. Please try again later.</p>
        </div>
    );

    return (
        <div className="pb-20 pt-10 min-h-screen">
            <SEO
                title="Blog"
                description="Insights on AI, Web Development, and Digital Strategy."
                url="/blog"
            />

            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-secondary-500/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-16 relative inline-block">
                    Latest Insights
                    <div className="absolute -bottom-4 left-0 w-20 h-1 bg-gradient-to-r from-primary-500 to-accent-500"></div>
                </h1>

                {posts.length === 0 ? (
                    <p className="text-slate-400">No posts found.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post) => {
                            // Extract data from REST response
                            const title = post.title.rendered;
                            const excerpt = post.excerpt.rendered;
                            const date = new Date(post.date).toLocaleDateString();
                            const slug = post.slug;
                            const featuredImage = post._embedded?.['wp:featuredmedia']?.[0]?.source_url;

                            return (
                                <Card key={post.id} className="h-full hover:-translate-y-1 transition-transform duration-300 flex flex-col group border-white/5 hover:border-primary-500/30 overflow-hidden">

                                    {featuredImage && (
                                        <div className="h-48 w-full overflow-hidden relative">
                                            <div className="absolute inset-0 bg-primary-500/10 group-hover:bg-transparent transition-colors z-10"></div>
                                            <img
                                                src={featuredImage}
                                                alt={title}
                                                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                                loading="lazy"
                                            />
                                        </div>
                                    )}

                                    <div className="p-6 flex flex-col flex-grow">
                                        <div className="text-xs font-bold text-primary-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                            {date}
                                        </div>
                                        <Link to={`/${slug}`} className="block mb-3">
                                            <h2
                                                className="text-xl font-bold font-display text-white group-hover:text-primary-400 transition-colors leading-tight"
                                                dangerouslySetInnerHTML={{ __html: title }}
                                            />
                                        </Link>
                                        <div
                                            className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow"
                                            dangerouslySetInnerHTML={{ __html: excerpt }}
                                        />
                                        <Link to={`/${slug}`} className="text-white font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all mt-auto">
                                            Read Article <span className="text-primary-400">&rarr;</span>
                                        </Link>
                                    </div>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
