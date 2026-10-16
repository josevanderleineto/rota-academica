import React from 'react';
import Link from 'next/link';
import { Logo } from './Logo';
import { Mail, Phone, MapPin, MessageCircle, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';
import { CONTACT_CONFIG } from '@/data/contactConfig';

export const Footer: React.FC = () => {
  return (
    <footer style={{ backgroundColor: '#0f172a', color: '#cbd5e1', paddingTop: '4rem', paddingBottom: '2rem', borderTop: '1px solid #1e293b' }}>
      <div className="container">
        {/* Top Grid */}
        <div 
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
            gap: '3rem',
            marginBottom: '3.5rem'
          }}
        >
          {/* Column 1: Brand Info */}
          <div>
            <Logo variant="light" size="md" showTagline={true} />
            <p style={{ marginTop: '1.25rem', fontSize: '0.925rem', lineHeight: '1.6', color: '#94a3b8' }}>
              Consultoria e apoio acadêmico especializado em normalização ABNT, formatação de TCC, projetos de pesquisa, referências e estruturação acadêmica.
            </p>
            <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.875rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#38bdf8' }}>
                <MapPin size={16} /> Atendimento Online (Brasil) & Salvador - BA
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94a3b8' }}>
                <Mail size={16} /> jose.vanderlei.nn@gmail.com
              </div>
            </div>
          </div>

          {/* Column 2: Services */}
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '2px solid #1e40af', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Nossos Serviços
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              {SERVICES_DATA.map((srv) => (
                <li key={srv.id}>
                  <Link 
                    href={`/${srv.slug}`} 
                    style={{ color: '#94a3b8', transition: 'color 0.2s ease', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                    className="footer-link"
                  >
                    <ArrowRight size={12} color="#3b82f6" /> {srv.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Links */}
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '2px solid #0d9488', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Navegação
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem' }}>
              <li>
                <Link href="/" style={{ color: '#94a3b8' }}>Página Inicial</Link>
              </li>
              <li>
                <Link href="/sobre" style={{ color: '#94a3b8' }}>Sobre o Consultor</Link>
              </li>
              <li>
                <Link href="/servicos" style={{ color: '#94a3b8' }}>Catálogo de Serviços</Link>
              </li>
              <li>
                <Link href="/blog" style={{ color: '#94a3b8' }}>Blog & Guias ABNT</Link>
              </li>
              <li>
                <Link href="/contato" style={{ color: '#94a3b8' }}>Solicitar Orçamento</Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Fast Contact & Support */}
          <div>
            <h3 style={{ color: '#ffffff', fontSize: '1.1rem', marginBottom: '1.25rem', borderBottom: '2px solid #25d366', paddingBottom: '0.5rem', display: 'inline-block' }}>
              Atendimento Direto
            </h3>
            <div style={{ backgroundColor: '#1e293b', padding: '1.25rem', borderRadius: '12px', border: '1px solid #334155' }}>
              <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: '1.5', marginBottom: '1rem' }}>
                Tire suas dúvidas ou solicite uma proposta rapidamente com a nossa equipe.
              </p>
              <a 
                href={CONTACT_CONFIG.getWhatsappUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-whatsapp"
                style={{ width: '100%', justifyContent: 'center', fontSize: '0.875rem', padding: '0.65rem' }}
              >
                <MessageCircle size={18} /> Falar no WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          style={{
            borderTop: '1px solid #1e293b',
            paddingTop: '2rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.85rem',
            color: '#64748b'
          }}
        >
          <p>© {new Date().getFullYear()} Rota Acadêmica — Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
