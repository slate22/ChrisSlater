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
                setPosts(data);
            } catch (err: any) {
                console.error('Failed to fetch posts:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchPosts();
    }, []);

    return { posts, loading, error };
}
