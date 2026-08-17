'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import { Search, ArrowRight, BookOpen, Clock } from 'lucide-react';

export default function BlogPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');

  const categories = ['Todas', ...Array.from(new Set(BLOG_POSTS.map(p => p.category)))];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          post.keywords.some(k => k.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'Todas' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Conhecimento Compartilhado</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Blog Rota Acadêmica
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto 2rem auto' }}>
            Guias completos, tutoriais práticos sobre ABNT, citações, referências e metodologia de pesquisa.
          </p>

          {/* Search Box */}
          <div style={{ maxWidth: '550px', margin: '0 auto', position: 'relative' }}>
            <input
              type="text"
              placeholder="Pesquisar artigos por tema ou palavra-chave..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: '100%',
                padding: '0.85rem 1.25rem 0.85rem 3rem',
                borderRadius: '999px',
                border: 'none',
                fontSize: '1rem',
                outline: 'none',
                boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
              }}
            />
            <Search size={20} color="#64748b" style={{ position: 'absolute', left: '1.15rem', top: '50%', transform: 'translateY(-50%)' }} />
          </div>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          
          {/* Category Filter Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', justifyContent: 'center', marginBottom: '3rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '999px',
                  border: '1px solid',
                  borderColor: selectedCategory === cat ? '#1e40af' : '#cbd5e1',
                  backgroundColor: selectedCategory === cat ? '#1e40af' : '#ffffff',
                  color: selectedCategory === cat ? '#ffffff' : '#334155',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  cursor: 'pointer',
                  transition: 'all 0.2s ease'
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Posts Grid */}
          {filteredPosts.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '3rem 0', color: '#64748b' }}>
              <p style={{ fontSize: '1.2rem' }}>Nenhum artigo encontrado para a pesquisa "{searchTerm}".</p>
            </div>
          ) : (
            <div 
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: '2rem'
              }}
            >
              {filteredPosts.map((post) => (
                <article key={post.slug} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.85rem' }}>
                      <span className="badge badge-blue" style={{ fontSize: '0.75rem' }}>{post.category}</span>
                      <span style={{ fontSize: '0.8rem', color: '#94a3b8', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>

                    <h2 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.75rem', lineHeight: 1.4 }}>
                      <Link href={`/blog/${post.slug}`} style={{ color: '#0f172a' }}>
                        {post.title}
                      </Link>
                    </h2>

                    <p style={{ fontSize: '0.925rem', color: '#475569', lineHeight: 1.6 }}>
                      {post.excerpt}
                    </p>
                  </div>

                  <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>
                      Por {post.author}
                    </span>
                    <Link href={`/blog/${post.slug}`} style={{ color: '#1e40af', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                      Ler artigo <ArrowRight size={16} />
                    </Link>
                  </div>
                </article>
              ))}
            </div>
          )}

        </div>
      </section>
    </>
  );
}
