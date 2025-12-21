import { useParams } from 'react-router-dom';
import { useQuery, gql } from '@apollo/client';
import { SEO } from '../components/SEO';
import { SafeHtml } from '../components/SafeHtml';

const GET_POST = gql`
  query GetPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      title
      content
      excerpt
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      author {
        node {
          name
        }
      }
    }
    page(id: $slug, idType: URI) {
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
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

  // Helper to strip shortcodes and clean content
  const stripShortcodes = (html: string) => {
    if (!html) return '';
    return html
      .replace(/\[\/?(?:vc|vp|rev)[^\]]*\]/g, '') // Remove specific complex shortcodes
      .replace(/\[[^\]]+\]/g, '') // Remove generic shortcodes
      .replace(/<p>\s*<\/p>/g, '') // Remove empty paragraphs left behind
  };

  if (!contentNode) {
    return <div className="container mx-auto px-4 py-20 text-center text-slate-400">Content not found.</div>;
  }

  const cleanContent = stripShortcodes(contentNode.content);

  return (
    <div className="container mx-auto px-4 py-20 max-w-4xl">
      <SEO
        title={contentNode.title}
        description={contentNode.excerpt ? contentNode.excerpt.replace(/<[^>]+>/g, '') : ''}
        image={contentNode.featuredImage?.node?.sourceUrl}
        url={`/${slug}`}
        type="article"
        publishedTime={contentNode.date}
        author={contentNode.author?.node?.name}
      />

      <article>
        <header className="mb-12 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold mb-6 text-white leading-tight">
            {contentNode.title}
          </h1>
          {contentNode.date && (
            <div className="flex items-center justify-center gap-4 text-sm text-slate-400">
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
                {new Date(contentNode.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
              </span>
            </div>
          )}
        </header>

        <div className="p-8 md:p-12 rounded-2xl glass-panel border border-white/10 bg-slate-900/50">
          <SafeHtml
            content={cleanContent}
            className="prose-invert prose-lg prose-headings:font-display prose-a:text-primary-400 prose-img:rounded-xl"
          />
        </div>
      </article>
    </div>
  );
}
