import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { SERVICES_DATA } from '@/data/servicesData';
import { ArrowRight, CheckCircle2, BookCheck } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Catálogo de Serviços Acadêmicos',
  description: 'Normalização ABNT, formatação de TCC, projetos de pesquisa, consultoria acadêmica, citações, referências e apresentações de TCC.',
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/servicos'
  }
};

export default function ServicosPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Soluções Completas</div>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem' }}>
            Serviços para sua Produção Acadêmica
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto' }}>
            Conheça todos os nossos serviços de normalização, formatação, consultoria e revisão estrutural.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {SERVICES_DATA.map((srv) => (
              <div key={srv.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '0.85rem' }}>
                    {srv.title}
                  </h2>
                  <p style={{ color: '#475569', fontSize: '0.975rem', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                    {srv.fullDescription}
                  </p>

                  <h3 style={{ fontSize: '0.95rem', color: '#1e40af', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    O que inclui:
                  </h3>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.5rem' }}>
                    {srv.highlights.map((h, i) => (
                      <li key={i} style={{ fontSize: '0.875rem', color: '#334155', display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                        <CheckCircle2 size={16} color="#0d9488" style={{ marginTop: '2px', flexShrink: 0 }} /> {h}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1.25rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link href={`/${srv.slug}`} style={{ color: '#1e40af', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    Detalhes do Serviço <ArrowRight size={16} />
                  </Link>
                  <Link href="/contato" className="btn btn-primary" style={{ padding: '0.5rem 1.15rem', fontSize: '0.85rem' }}>
                    Solicitar Orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <BudgetForm />
        </div>
      </section>
    </>
  );
}
