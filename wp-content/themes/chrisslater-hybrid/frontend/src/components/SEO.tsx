
import { Helmet } from 'react-helmet-async';

interface SEOProps {
    title: string;
    description?: string;
    image?: string;
    url?: string;
    type?: string;
    publishedTime?: string;
    modifiedTime?: string;
    author?: string;
    noindex?: boolean;
}

export function SEO({
    title,
    description = "Chris Slater - 100x AI Developer building the intelligent future from the Gulf Coast. Expert in AI strategy, React, and Hybrid WordPress solutions.",
    image,
    url,
    type = 'website',
    publishedTime,
    modifiedTime,
    author,
    noindex = false
}: SEOProps) {
    const siteUrl = 'https://chrisslater.ai';
    const defaultImage = `${siteUrl}/wp-content/uploads/2023/12/chris-slater-og.jpg`; // Fallback image (should ideally be real)

    const fullTitle = title.includes('Chris Slater') ? title : `${title} | Chris Slater`;
    const fullUrl = url ? (url.startsWith('http') ? url : `${siteUrl}${url}`) : window.location.href;
    const fullImage = image ? (image.startsWith('http') ? image : `${siteUrl}${image}`) : defaultImage;

    return (
        <Helmet>
            {/* Standard Metadata */}
            <title>{fullTitle}</title>
            <meta name="description" content={description} />
            {noindex && <meta name="robots" content="noindex" />}
            <link rel="canonical" href={fullUrl} />

            {/* Open Graph / Facebook */}
            <meta property="og:type" content={type} />
            <meta property="og:url" content={fullUrl} />
            <meta property="og:title" content={fullTitle} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />
            <meta property="og:site_name" content="Chris Slater" />
            {publishedTime && <meta property="article:published_time" content={publishedTime} />}
            {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
            {author && <meta property="article:author" content={author} />}

            {/* Twitter */}
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={fullUrl} />
            <meta property="twitter:title" content={fullTitle} />
            <meta property="twitter:description" content={description} />
            <meta property="twitter:image" content={fullImage} />
        </Helmet>
    );
}
