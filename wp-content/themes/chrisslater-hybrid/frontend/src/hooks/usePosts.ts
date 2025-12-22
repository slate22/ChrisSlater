import { useState, useEffect } from 'react';

export interface Post {
    id: number;
    date: string;
    slug: string;
    title: {
        rendered: string;
    };
    excerpt: {
        rendered: string;
    };
    content: {
        rendered: string;
    };
    _embedded?: {
        'wp:featuredmedia'?: Array<{
            source_url: string;
            alt_text?: string;
        }>;
        author?: Array<{
            name: string;
            avatar_urls?: {
                [key: string]: string;
            };
        }>;
    };
}

export function usePosts() {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchPosts() {
            try {
                // Use the localized root URL or fallback (handle potential trailing slash issues)
                const root = (window as any).wpData?.root || '/wp-json/';
                const endpoint = `${root}wp/v2/posts?_embed`;

                const response = await fetch(endpoint);

                if (!response.ok) {
                    throw new Error(`Error fetching posts: ${response.statusText}`);
                }

                const data = await response.json();
                console.log('SafeWordPressData: Raw Response:', data); // LOGGING DATA

                if (Array.isArray(data)) {
                    // Inject Static Promo Post
                    const promoPost: Post = {
                        id: 10001,
                        date: new Date().toISOString(),
                        slug: 'architect-your-future-with-custom-ai-agents',
                        title: { rendered: 'Beyond Chatbots: How Custom AI Agents Are Revolutionizing Operations' },
                        excerpt: { rendered: 'Stop settling for generic answers. Discover how specialized, autonomous AI agents can handle complex workflows, integrate with your data, and scale your business 24/7.' },
                        content: { rendered: '' }, // Content loaded in Post.tsx
                        _embedded: {
                            'wp:featuredmedia': [{
                                source_url: '/assets/images/ai-circuitry.jpg', // Re-use existing asset or placeholder
                                alt_text: 'AI Circuitry'
                            }],
                            author: [{ name: 'Chris Slater' }]
                        }
                    };
                    setPosts([promoPost, ...data]);
                } else {
                    console.warn('SafeWordPressData: Received non-array data', data);
                    setPosts([]);
                }

            } catch (err: any) {
                console.error('SafeWordPressData: Failed to fetch posts:', err);

                // FALLBACK POST as requested
                setPosts([{
                    id: 9999,
                    date: new Date().toISOString(),
                    slug: 'fallback-post',
                    title: { rendered: 'Fallback: Connection Issue' },
                    excerpt: { rendered: 'We are experiencing trouble connecting to the backend. This is a safe fallback.' },
                    content: { rendered: 'Fallback content.' },
                    _embedded: undefined
                }]);

                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return { posts, loading, error };
}
