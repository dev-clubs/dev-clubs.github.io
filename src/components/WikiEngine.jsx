import React, { useState, useEffect } from 'react';
import { marked } from 'marked';

export default function WikiEngine({ articlePath = '/wiki/article.md' }) {
    const [content, setContent] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function loadWiki() {
            try {
                setLoading(true);
                const response = await fetch(articlePath);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const markdown = await response.text();
                const html = marked.parse(markdown);
                setContent(html);
                setError(null);
            } catch (err) {
                console.error('Failed to load wiki:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadWiki();
    }, [articlePath]);

    if (loading) {
        return (
            <div className="animate-pulse space-y-4 p-4">
                <div className="h-8 bg-[var(--md-sys-color-surface-variant)] rounded w-1/3"></div>
                <div className="h-4 bg-[var(--md-sys-color-surface-variant)] rounded w-full"></div>
                <div className="h-4 bg-[var(--md-sys-color-surface-variant)] rounded w-5/6"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="p-4 rounded bg-red-900/50 border border-red-500 text-red-100">
                <h3 className="font-bold text-lg mb-2">Error Loading Wiki</h3>
                <p>Could not fetch the documentation content.</p>
                <pre className="mt-2 text-xs opacity-70">{error}</pre>
                <p className="mt-2 text-sm">Attempted Source: <code>{articlePath}</code></p>
            </div>
        );
    }

    return (
        <div
            className="prose prose-invert max-w-none prose-headings:text-[var(--md-sys-color-primary)] prose-a:text-[var(--md-sys-color-primary)]"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
