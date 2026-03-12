import React, { useState, useEffect } from 'react';
import { renderMarkdown } from '../lib/markdown';

// tiny frontmatter parser that avoids Node-specific APIs like Buffer
function parseFrontmatter(text) {
    if (text.startsWith('---')) {
        const endIdx = text.indexOf('---', 3);
        if (endIdx !== -1) {
            const rawYaml = text.slice(3, endIdx).trim();
            const body = text.slice(endIdx + 3).trim();
            const data = {};
            rawYaml.split(/\r?\n/).forEach((line) => {
                const m = line.match(/^([^:]+):\s*(.*)$/);
                if (m) {
                    let key = m[1].trim();
                    let val = m[2].trim();
                    if ((val.startsWith('"') && val.endsWith('"')) ||
                        (val.startsWith("'") && val.endsWith("'"))) {
                        val = val.slice(1, -1);
                    }
                    data[key] = val;
                }
            });
            return { data, content: body };
        }
    }
    return { data: {}, content: text };
}

export default function WikiEngine({ articlePath = '/wiki/article.md', themeColor }) {
    const [content, setContent] = useState('');
    const [meta, setMeta] = useState({});
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [color, setColor] = useState(themeColor || '');

    useEffect(() => {
        async function loadWiki() {
            try {
                setLoading(true);
                const response = await fetch(articlePath);

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const markdown = await response.text();
                // parse frontmatter using lightweight helper
                const { data, content: rawContent } = parseFrontmatter(markdown);
                const html = renderMarkdown(rawContent);
                setContent(html);
                setMeta(data || {});

                // determine theme color: frontmatter overrides prop
                if (data && (data.themeColor || data.color)) {
                    setColor(data.themeColor || data.color);
                } else if (themeColor) {
                    setColor(themeColor);
                }

                // parse title for document
                if (data && data.title) {
                    document.title = `${data.title} - GDG Querétaro Wiki`;
                }

                setError(null);
            } catch (err) {
                console.error('Failed to load wiki:', err);
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        loadWiki();
    }, [articlePath, themeColor]);

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

    // build inline style for theming
    const wrapperStyle = {};
    if (color) {
        wrapperStyle['--brand-primary'] = color;
        wrapperStyle['--wiki-theme'] = color;
    }

    return (
        <div className="wiki-engine" style={wrapperStyle}>
            <div
                className="prose"
                dangerouslySetInnerHTML={{ __html: content }}
            />
        </div>
    );
}
