import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet-async';
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
            <Helmet>
                <title>Blog | Chris Slater</title>
                <meta name="description" content="Insights on AI, Web Development, and Digital Strategy." />
            </Helmet>

            <div className="container mx-auto px-4 md:px-6">
                <h1 className="text-4xl font-display font-bold text-slate-900 mb-8">Latest Insights</h1>

                {posts.length === 0 ? (
                    <p>No posts found.</p>
                ) : (
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {posts.map((post: any) => (
                            <Card key={post.id} className="h-full hover:-translate-y-1 transition-transform duration-300">
                                <div className="text-xs font-bold text-primary-600 mb-2 uppercase tracking-wide">
                                    {new Date(post.date).toLocaleDateString()}
                                </div>
                                <Link to={`/${post.slug}`} className="block">
                                    <h2 className="text-xl font-bold font-display text-slate-900 mb-3 hover:text-primary-600 transition-colors">
                                        {post.title}
                                    </h2>
                                </Link>
                                <div
                                    className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-3"
                                    dangerouslySetInnerHTML={{ __html: post.excerpt }}
                                />
                                <Link to={`/${post.slug}`} className="text-primary-600 font-medium text-sm hover:underline">
                                    Read Article &rarr;
                                </Link>
                            </Card>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
