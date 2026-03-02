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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1rem' }}>
                <div className="skeleton" style={{ height: '2rem', width: '40%' }}></div>
                <div className="skeleton" style={{ height: '1rem', width: '100%' }}></div>
                <div className="skeleton" style={{ height: '1rem', width: '85%' }}></div>
                <div className="skeleton" style={{ height: '1rem', width: '60%' }}></div>
                <div className="skeleton" style={{ height: '1rem', width: '90%' }}></div>
                <div className="skeleton" style={{ height: '1rem', width: '70%' }}></div>
            </div>
        );
    }

    if (error) {
        return (
            <div style={{
                padding: '1.5rem',
                borderRadius: '1rem',
                background: 'rgba(234, 67, 53, 0.1)',
                border: '1px solid rgba(234, 67, 53, 0.3)',
                color: '#fca5a5',
            }}>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>Error al cargar el artículo</h3>
                <p style={{ marginBottom: '0.5rem' }}>No se pudo cargar el contenido de la wiki.</p>
                <pre style={{ fontSize: '0.75rem', opacity: 0.7 }}>{error}</pre>
                <p style={{ marginTop: '0.5rem', fontSize: '0.875rem' }}>Fuente: <code>{articlePath}</code></p>
            </div>
        );
    }

    return (
        <div
            className="prose"
            dangerouslySetInnerHTML={{ __html: content }}
        />
    );
}
