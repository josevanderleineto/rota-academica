'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Logo } from './Logo';
import { Menu, X, ChevronDown, MessageSquare, PhoneCall } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';
import { CONTACT_CONFIG } from '@/data/contactConfig';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesDropdown, setServicesDropdown] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
    setServicesDropdown(false);
  };

  return (
    <header 
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.95)' : '#ffffff',
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid var(--border-light)',
        boxShadow: isScrolled ? '0 4px 20px rgba(0, 0, 0, 0.08)' : 'none',
        transition: 'all 0.3s ease'
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        <Logo size="md" />

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2rem' }} className="desktop-nav">
          <Link 
            href="/" 
            style={{ 
              fontWeight: pathname === '/' ? 700 : 500, 
              color: pathname === '/' ? '#1e40af' : '#334155',
              fontSize: '0.95rem'
            }}
          >
            Início
          </Link>

          <Link 
            href="/sobre" 
            style={{ 
              fontWeight: pathname === '/sobre' ? 700 : 500, 
              color: pathname === '/sobre' ? '#1e40af' : '#334155',
              fontSize: '0.95rem'
            }}
          >
            Sobre
          </Link>

          {/* Services Dropdown */}
          <div 
            style={{ position: 'relative' }}
            onMouseEnter={() => setServicesDropdown(true)}
            onMouseLeave={() => setServicesDropdown(false)}
          >
            <Link 
              href="/servicos"
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '0.3rem',
                fontWeight: pathname.startsWith('/servicos') || pathname === '/normalizacao-abnt' || pathname === '/formatacao-tcc' ? 700 : 500, 
                color: pathname.startsWith('/servicos') ? '#1e40af' : '#334155',
                fontSize: '0.95rem'
              }}
            >
              Serviços <ChevronDown size={14} />
            </Link>

            {servicesDropdown && (
              <div 
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: '-10px',
                  width: '280px',
                  backgroundColor: '#ffffff',
                  borderRadius: '12px',
                  boxShadow: '0 10px 30px rgba(0, 0, 0, 0.15)',
                  border: '1px solid var(--border-light)',
                  padding: '0.75rem 0',
                  zIndex: 1100,
                  animation: 'fadeIn 0.2s ease'
                }}
              >
                {SERVICES_DATA.map((srv) => (
                  <Link
                    key={srv.id}
                    href={`/${srv.slug}`}
                    style={{
                      display: 'block',
                      padding: '0.6rem 1.25rem',
                      fontSize: '0.875rem',
                      fontWeight: 500,
                      color: pathname === `/${srv.slug}` ? '#1e40af' : '#334155',
                      backgroundColor: pathname === `/${srv.slug}` ? '#f1f5f9' : 'transparent',
                      transition: 'background 0.2s'
                    }}
                    onClick={() => setServicesDropdown(false)}
                  >
                    {srv.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link 
            href="/normalizacao-abnt" 
            style={{ 
              fontWeight: pathname === '/normalizacao-abnt' ? 700 : 500, 
              color: pathname === '/normalizacao-abnt' ? '#1e40af' : '#334155',
              fontSize: '0.95rem'
            }}
          >
            Normalização ABNT
          </Link>

          <Link 
            href="/formatacao-tcc" 
            style={{ 
              fontWeight: pathname === '/formatacao-tcc' ? 700 : 500, 
              color: pathname === '/formatacao-tcc' ? '#1e40af' : '#334155',
              fontSize: '0.95rem'
            }}
          >
            Formatação TCC
          </Link>

          <Link 
            href="/blog" 
            style={{ 
              fontWeight: pathname.startsWith('/blog') ? 700 : 500, 
              color: pathname.startsWith('/blog') ? '#1e40af' : '#334155',
              fontSize: '0.95rem'
            }}
          >
            Blog
          </Link>

          <Link 
            href="/contato" 
            style={{ 
              fontWeight: pathname === '/contato' ? 700 : 500, 
              color: pathname === '/contato' ? '#1e40af' : '#334155',
              fontSize: '0.95rem'
            }}
          >
            Contato
          </Link>
        </nav>

        {/* CTA Actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }} className="desktop-nav">
          <Link href="/contato" className="btn btn-primary" style={{ padding: '0.65rem 1.35rem', fontSize: '0.9rem' }}>
            Solicitar orçamento
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menu"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: '#0f172a',
            cursor: 'pointer',
            padding: '0.5rem'
          }}
          className="mobile-hamburger"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Slide-down Navigation Drawer */}
      {isOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '80px',
            left: 0,
            width: '100%',
            height: 'calc(100vh - 80px)',
            backgroundColor: '#ffffff',
            padding: '2rem 1.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            overflowY: 'auto',
            zIndex: 999,
            borderTop: '1px solid var(--border-light)'
          }}
        >
          <Link href="/" onClick={closeMenu} style={{ fontSize: '1.1rem', fontWeight: 600, paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
            Início
          </Link>
          <Link href="/sobre" onClick={closeMenu} style={{ fontSize: '1.1rem', fontWeight: 600, paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
            Sobre o Consultor
          </Link>
          <Link href="/servicos" onClick={closeMenu} style={{ fontSize: '1.1rem', fontWeight: 600, color: '#1e40af' }}>
            Todos os Serviços
          </Link>
          <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <Link href="/normalizacao-abnt" onClick={closeMenu} style={{ fontSize: '0.95rem', color: '#475569' }}>
              • Normalização ABNT
            </Link>
            <Link href="/formatacao-tcc" onClick={closeMenu} style={{ fontSize: '0.95rem', color: '#475569' }}>
              • Formatação de TCC
            </Link>
            <Link href="/consultoria-academica" onClick={closeMenu} style={{ fontSize: '0.95rem', color: '#475569' }}>
              • Consultoria Acadêmica
            </Link>
            <Link href="/projeto-de-pesquisa" onClick={closeMenu} style={{ fontSize: '0.95rem', color: '#475569' }}>
              • Projetos de Pesquisa
            </Link>
            <Link href="/referencias-abnt" onClick={closeMenu} style={{ fontSize: '0.95rem', color: '#475569' }}>
              • Citações e Referências
            </Link>
            <Link href="/apresentacao-tcc" onClick={closeMenu} style={{ fontSize: '0.95rem', color: '#475569' }}>
              • Apresentações de TCC
            </Link>
          </div>
          <Link href="/blog" onClick={closeMenu} style={{ fontSize: '1.1rem', fontWeight: 600, paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
            Blog Acadêmico
          </Link>
          <Link href="/contato" onClick={closeMenu} style={{ fontSize: '1.1rem', fontWeight: 600, paddingBottom: '0.5rem', borderBottom: '1px solid #f1f5f9' }}>
            Contato
          </Link>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <Link href="/contato" onClick={closeMenu} className="btn btn-primary" style={{ width: '100%' }}>
              Solicitar Orçamento
            </Link>
            <a 
              href={CONTACT_CONFIG.getWhatsappUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp" 
              style={{ width: '100%' }}
            >
              <MessageSquare size={18} /> Falar no WhatsApp
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

