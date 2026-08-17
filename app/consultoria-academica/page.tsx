import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { GraduationCap, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Consultoria Acadêmica Personalizada | Rota Acadêmica',
  description: 'Orientação metodológica e consultoria acadêmica para organização da pesquisa, busca bibliográfica, estrutura de TCC e normas ABNT. Preservando 100% sua autoria.',
  keywords: [
    'consultoria acadêmica',
    'consultoria para TCC',
    'orientação acadêmica online',
    'pesquisa bibliográfica',
    'consultoria tcc salvador'
  ],
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/consultoria-academica'
  }
};

export default function ConsultoriaAcademicaPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Orientação & Estruturação</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Consultoria Acadêmica
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto' }}>
            Orientação estratégica para estudantes que precisam compreender como organizar, pesquisar e apresentar seus trabalhos com clareza e autonomia.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div className="glass-card" style={{ marginBottom: '3rem', backgroundColor: '#f8fafc' }}>
            <h2 style={{ fontSize: '1.85rem', color: '#0f172a', marginBottom: '1rem' }}>
              Como a Consultoria Acadêmica Funciona?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
              A consultoria acadêmica da Rota Acadêmica é um serviço de diagnóstico, mentoria e apoio metodológico voltado para estudantes que se sentem perdidos, travados ou inseguros na elaboração de seus trabalhos científicos.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7 }}>
              Combinando conhecimentos da <strong>Biblioteconomia</strong> (recuperação de dados e organização da informação) e do <strong>Direito</strong>, auxiliamos você a traçar um plano de trabalho eficiente.
            </p>
          </div>

          <h2 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>
            Em quais frentes a Consultoria pode te ajudar?
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              { title: 'Organização da Pesquisa', desc: 'Planejamento do fluxo de leitura, fichamento e cronograma de escrita científica.' },
              { title: 'Pesquisa Bibliográfica', desc: 'Orientação para encontrar artigos qualificados, livros e documentos em bases de dados confiáveis.' },
              { title: 'Estruturação do Trabalho', desc: 'Ajuda na divisão lógica de capítulos, seções, introdução e considerações finais.' },
              { title: 'Organização de Referências', desc: 'Instrução de como armazenar e padronizar citações de forma organizada.' },
              { title: 'Compreensão das Normas', desc: 'Esclarecimento prático sobre como aplicar ABNT, APA ou manuais internos sem mistérios.' },
              { title: 'Preparação de Apresentações', desc: 'Orientação para síntese de conteúdo em slides e defesa diante da banca examinadora.' }
            ].map((frente, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <CheckCircle2 size={24} color="#1e40af" style={{ marginBottom: '0.5rem' }} />
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>{frente.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{frente.desc}</p>
              </div>
            ))}
          </div>

          {/* Explicit Ethical Statement */}
          <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '2.5rem', borderRadius: '1.25rem', marginBottom: '3.5rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem', color: '#10b981' }}>
              <ShieldCheck size={28} />
              <h3 style={{ fontSize: '1.4rem', color: '#ffffff' }}>Autoria Preservada do Estudante</h3>
            </div>
            <p style={{ fontSize: '1.05rem', color: '#cbd5e1', lineHeight: 1.7 }}>
              Deixamos claro que a consultoria acadêmica <strong>não substitui a autoria nem a responsabilidade intelectual do estudante</strong>. Nós ensinamos a metodologia, indicamos os caminhos bibliográficos e corrigimos a estrutura, mas o conteúdo é legitimamente produzido por você.
            </p>
          </div>

          <BudgetForm defaultService="Consultoria Acadêmica" />

        </div>
      </section>
    </>
  );
}
