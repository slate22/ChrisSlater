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

  // STATIC PROMO POST DATA
  const isPromo = slug === 'architect-your-future-with-custom-ai-agents';
  const promoData = isPromo ? {
    title: 'Beyond Chatbots: How Custom AI Agents Are Revolutionizing Operations',
    content: `
        <h2>Unlock the Power of Autonomous AI</h2>
        <p>The era of simple chatbots is over. We are now entering the age of <strong>Agentic AI</strong>—intelligent systems capable of planning, reasoning, and executing complex tasks autonomously.</p>
        
        <h3>Features that Redefine Productivity</h3>
        <ul>
            <li><strong>Autonomous Execution:</strong> Agents don't just talk; they do. They can browse the web, access APIs, and manipulate files.</li>
            <li><strong>Specialized Knowledge:</strong> Train agents on your specific documents, codebases, or brand guidelines.</li>
            <li><strong>24/7 Operations:</strong> Your AI workforce never sleeps, ensuring business continuity around the clock.</li>
        </ul>

        <h3>Real-World Use Cases</h3>
        <ul>
            <li><strong>Customer Support:</strong> Resolve tickets instantly with agents that can check order status and process refunds.</li>
            <li><strong>Data Analysis:</strong> Feed raw data to an agent and receive actionable insights and visualizations in seconds.</li>
            <li><strong>Content Factory:</strong> Generate SEO-optimized blog posts, social media updates, and newsletters on autopilot.</li>
        </ul>

        <p>Ready to build your workforce?</p>
        <p style="text-align: center; margin-top: 40px;">
            <a href="/agent-builder" class="bg-primary-500 text-white font-bold py-3 px-8 rounded-lg shadow-lg hover:bg-primary-400 transition-all inline-block no-underline">
                Launch Agent Builder &rarr;
            </a>
        </p>
      `,
    excerpt: 'Stop settling for generic answers. Discover how specialized, autonomous AI agents can handle complex workflows...',
    date: new Date().toISOString(),
    featuredImage: { node: { sourceUrl: '/assets/images/ai-circuitry.jpg' } }, // Local asset path
    author: { node: { name: 'Chris Slater' } }
  } : null;

  if (loading && !isPromo) return <div className="container mx-auto px-4 py-16 text-white text-center">Loading...</div>;
  if (error && !isPromo) return <div className="container mx-auto px-4 py-16 text-white text-center">Error loading content.</div>;

  // Check if it's a post or page (naive check, usually you'd separate queries or use Union types)
  const contentNode = isPromo ? promoData : (data?.post || data?.page);

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
