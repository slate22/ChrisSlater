import { useQuery, gql } from '@apollo/client';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { Card } from '../components/Card';

const GET_POSTS = gql`
  query GetPosts {
    posts(first: 12) {
      nodes {
        id
        title
        excerpt
        slug
        date
      }
    }
  }
`;

export default function Blog() {
    const { loading, error, data } = useQuery(GET_POSTS);

    if (loading) return <div className="container mx-auto px-4 py-20">Loading posts...</div>;
    if (error) return <div className="container mx-auto px-4 py-20">Error loading posts.</div>;

    const posts = data?.posts?.nodes || [];

    return (
        <div className="pb-20 pt-10">
            <SEO
                title="Blog"
                description="Insights on AI, Web Development, and Digital Strategy."
                url="/blog"
            />

            <div className="absolute top-0 right-0 -z-10 opacity-30">
                <div className="w-[500px] h-[500px] bg-secondary-500/20 blur-[100px] rounded-full"></div>
            </div>

            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-10">Latest Insights</h1>

                {posts.length === 0 ? (
                    <p className="text-slate-400">No posts found.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => {
                            // Strip shortcodes from excerpt if present
                            const rawExcerpt = post.excerpt || '';
                            const cleanExcerpt = rawExcerpt.replace(/\[\/?(?:vc|vp|rev)[^\]]*\]/g, '').replace(/\[[^\]]+\]/g, '');

                            return (
                                <Card key={post.id} className="h-full hover:-translate-y-1 transition-transform duration-300 flex flex-col group border-white/5 hover:border-primary-500/30">
                                    <div className="text-xs font-bold text-primary-400 mb-3 uppercase tracking-wide flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-primary-500"></span>
                                        {new Date(post.date).toLocaleDateString()}
                                    </div>
                                    <Link to={`/${post.slug}`} className="block mb-3">
                                        <h2 className="text-xl font-bold font-display text-white group-hover:text-primary-400 transition-colors leading-tight">
                                            {post.title}
                                        </h2>
                                    </Link>
                                    <div
                                        className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow"
                                        dangerouslySetInnerHTML={{ __html: cleanExcerpt }}
                                    />
                                    <Link to={`/${post.slug}`} className="text-white font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">
                                        Read Article <span className="text-primary-400">&rarr;</span>
                                    </Link>
                                </Card>
                            );
                        })}
                    </div>
                )}
            </div>
        </div>
    );
}
