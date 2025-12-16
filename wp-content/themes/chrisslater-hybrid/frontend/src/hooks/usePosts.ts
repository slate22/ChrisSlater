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
                    setPosts(data);
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
