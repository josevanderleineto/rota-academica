import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Award, BookOpen, FileCheck, ShieldCheck, ArrowRight, CheckCircle2, MapPin } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Sobre o Consultor & Rota Acadêmica',
  description: 'Conheça o responsável pela Rota Acadêmica: estudante no último semestre de Biblioteconomia e Documentação (2026.2) e 3º semestre de Direito. Apoio acadêmico responsável.',
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/sobre'
  }
};

export default function SobrePage() {
  return (
    <>
      {/* Header Banner */}
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Conhecimento & Orientação</div>
          <h1 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem' }}>
            Quem está por trás da Rota Acadêmica?
          </h1>
          <p style={{ fontSize: '1.1rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto' }}>
            Experiência em pesquisa bibliográfica, organização da informação e produção acadêmica para transformar sua jornada estudantil.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            
            <div className="glass-card" style={{ marginBottom: '3rem', backgroundColor: '#f8fafc' }}>
              <h2 style={{ fontSize: '1.85rem', marginBottom: '1.25rem', color: '#0f172a' }}>
                Nossa História e Propósito
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                A Rota Acadêmica nasceu da experiência acadêmica e do interesse pela organização da informação, pesquisa e produção científica.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                O responsável pela marca está concluindo o curso de <strong>Biblioteconomia e Documentação</strong>, com formação prevista para <strong>2026.2</strong>, e também cursa <strong>Direito</strong>, atualmente no <strong>3º semestre</strong>.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1.25rem' }}>
                A formação em Biblioteconomia proporciona contato direto com organização da informação, pesquisa bibliográfica, fontes de informação, referências e normalização acadêmica.
              </p>
              <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7 }}>
                A Rota Acadêmica tem como propósito tornar o percurso acadêmico mais organizado, compreensível e seguro para estudantes.
              </p>
            </div>

            {/* Academic Credentials Box */}
            <h2 style={{ fontSize: '1.75rem', marginBottom: '1.5rem', textAlign: 'center', color: '#0f172a' }}>
              Formação Acadêmica & Áreas de Atuação
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
              
              <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
                <Award color="#1e40af" size={32} style={{ marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                  Biblioteconomia e Documentação
                </h3>
                <span className="badge badge-blue" style={{ marginBottom: '1rem' }}>Último semestre — Previsão 2026.2</span>
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6 }}>
                  Apresenta-se como o grande diferencial técnico para serviços de organização da informação, estruturação de fontes de pesquisa, compilação de bases de dados e aplicação rigorosa de normas técnicas (ABNT, APA, Vancouver).
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
                <BookOpen color="#0d9488" size={32} style={{ marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                  Direito
                </h3>
                <span className="badge badge-teal" style={{ marginBottom: '1rem' }}>3º semestre</span>
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6 }}>
                  Formação acadêmica complementar em andamento que acrescenta capacidade de análise textual minuciosa, lógica argumentativa e conhecimento prático na normalização de citações de legislação e jurisprudência.
                </p>
              </div>

              <div style={{ backgroundColor: '#ffffff', padding: '1.75rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-md)' }}>
                <FileCheck color="#d97706" size={32} style={{ marginBottom: '0.75rem' }} />
                <h3 style={{ fontSize: '1.3rem', color: '#0f172a', marginBottom: '0.5rem' }}>
                  Experiência Acadêmica
                </h3>
                <span className="badge badge-gold" style={{ marginBottom: '1rem' }}>Prática em Pesquisa</span>
                <p style={{ fontSize: '0.925rem', color: '#64748b', lineHeight: 1.6 }}>
                  Vivência comprovada na elaboração de projetos de pesquisa, busca bibliográfica em periódicos qualificados, estruturação de monografias e organização de apresentações para eventos científicos.
                </p>
              </div>

            </div>

            {/* Excellence & Quality Commitment */}
            <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '2.5rem', borderRadius: '1.25rem', marginBottom: '3.5rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#38bdf8' }}>
                <Award size={28} />
                <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Compromisso de Qualidade e Rigor Técnico</h3>
              </div>
              <p style={{ fontSize: '1rem', color: '#cbd5e1', lineHeight: 1.7, marginBottom: '1rem' }}>
                A Rota Acadêmica oferece suporte especializado com foco em precisão metodológica, conformidade técnica com normas ABNT e personalização para atender às exigências específicas da sua instituição.
              </p>
              <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6 }}>
                Nossa atuação abrange normalização gráfica, revisão de formatação ABNT, conferência de citações/referências e orientação estrutural para garantir um trabalho impecável e pronto para apresentação.
              </p>
            </div>

            {/* Form Section */}
            <BudgetForm />

          </div>
        </div>
      </section>
    </>
  );
}
