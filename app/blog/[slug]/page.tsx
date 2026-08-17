import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { BLOG_POSTS } from '@/data/blogPosts';
import { ArrowLeft, Clock, Calendar, User, Share2, ArrowRight } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({
    slug: post.slug
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return { title: 'Artigo não encontrado' };

  return {
    title: `${post.title} | Blog Rota Acadêmica`,
    description: post.excerpt,
    keywords: post.keywords,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      authors: [post.author]
    },
    alternates: {
      canonical: `https://www.rotaacademica.com.br/blog/${post.slug}`
    }
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: {
      '@type': 'Organization',
      name: post.author
    },
    publisher: {
      '@type': 'Organization',
      name: 'Rota Acadêmica',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.rotaacademica.com.br/logo.png'
      }
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />

      <article style={{ backgroundColor: '#ffffff', paddingBottom: '4rem' }}>
        
        {/* Post Header Banner */}
        <header style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4rem 0 3.5rem 0' }}>
          <div className="container" style={{ maxWidth: '850px' }}>
            <Link href="/blog" style={{ color: '#38bdf8', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem', fontSize: '0.9rem', fontWeight: 600 }}>
              <ArrowLeft size={16} /> Voltar para o Blog
            </Link>

            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
              <span className="badge badge-teal">{post.category}</span>
              <span style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Clock size={14} /> {post.readTime}
              </span>
              <span style={{ fontSize: '0.85rem', color: '#cbd5e1', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                <Calendar size={14} /> {new Date(post.publishedAt).toLocaleDateString('pt-BR')}
              </span>
            </div>

            <h1 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', color: '#ffffff', marginBottom: '1.5rem', lineHeight: 1.25 }}>
              {post.title}
            </h1>

            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.9rem', color: '#94a3b8' }}>
              <User size={16} />
              <span>Escrito por <strong>{post.author}</strong> ({post.authorRole})</span>
            </div>
          </div>
        </header>

        {/* Post Body Content */}
        <div className="container" style={{ maxWidth: '850px', paddingTop: '3.5rem' }}>
          
          <div 
            style={{ 
              fontSize: '1.1rem', 
              lineHeight: 1.8, 
              color: '#334155',
              marginBottom: '3rem'
            }}
            className="blog-article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Author Box */}
          <div style={{ backgroundColor: '#f8fafc', border: '1px solid var(--border-light)', borderRadius: '1rem', padding: '1.75rem', marginBottom: '4rem', display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
            <div style={{ width: '54px', height: '54px', borderRadius: '50%', backgroundColor: '#1e40af', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, flexShrink: 0 }}>
              RA
            </div>
            <div>
              <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.25rem' }}>{post.author}</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b', lineHeight: 1.5 }}>
                Especialistas em normalização ABNT, organização da informação e consultoria acadêmica. Formação em Biblioteconomia & Documentação e Direito.
              </p>
            </div>
          </div>

          {/* Form */}
          <BudgetForm />

        </div>
      </article>
    </>
  );
}

