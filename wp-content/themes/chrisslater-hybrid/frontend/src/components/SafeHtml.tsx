import DOMPurify from 'dompurify';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Utility for merging classes
function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

interface SafeHtmlProps {
    content: string;
    className?: string;
    tagName?: keyof JSX.IntrinsicElements;
}

export function SafeHtml({ content, className, tagName = 'div' }: SafeHtmlProps) {
    const sanitizedContent = DOMPurify.sanitize(content, {
        USE_PROFILES: { html: true },
        ADD_ATTR: ['target', 'allow', 'allowfullscreen', 'frameborder', 'scrolling'], // Allow iframe attributes if needed
        ADD_TAGS: ['iframe'], // Be careful with iframes, but often needed for WP embeds
    });

    const Tag = tagName;

    return (
        <Tag
            className={cn('prose prose-slate max-w-none', className)}
            dangerouslySetInnerHTML={{ __html: sanitizedContent }}
        />
    );
}
