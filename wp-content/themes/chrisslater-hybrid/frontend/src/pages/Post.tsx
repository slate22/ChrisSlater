import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { Helmet } from 'react-helmet-async';
import { SafeHtml } from '../components/SafeHtml';

const GET_POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      excerpt
      date
      author {
        node {
          name
        }
      }
    }
    page(id: $slug, idType: URI) {
        title
        content
    }
  }
`;

export default function Post() {
    const { slug } = useParams();
    const { loading, error, data } = useQuery(GET_POST, {
        variables: { slug },
    });

    if (loading) return <div className="container mx-auto px-4 py-16">Loading...</div>;
    if (error) return <div className="container mx-auto px-4 py-16">Error loading content.</div>;

    // Check if it's a post or page (naive check, usually you'd separate queries or use Union types)
    const contentNode = data?.post || data?.page;

    if (!contentNode) {
        return <div className="container mx-auto px-4 py-16">Content not found.</div>;
    }

    return (
        <div className="container mx-auto px-4 py-16">
            <Helmet>
                <title>{contentNode.title}</title>
                {/* If we had SEO fields, we'd map them here */}
                <meta name="description" content={contentNode.excerpt ? contentNode.excerpt.replace(/<[^>]+>/g, '') : ''} />
            </Helmet>

            <article>
                <h1 className="text-4xl font-display font-bold mb-6">{contentNode.title}</h1>
                {contentNode.date && (
                    <div className="text-sm text-slate-500 mb-8">
                        {new Date(contentNode.date).toLocaleDateString()}
                        {contentNode.author?.node?.name && ` by ${contentNode.author.node.name}`}
                    </div>
                )}
                <SafeHtml content={contentNode.content} />
            </article>
        </div>
    );
}
