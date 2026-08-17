import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { FileSpreadsheet, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Formatação de TCC, Monografias e Artigos | Rota Acadêmica',
  description: 'Formatação e normalização completa de TCC, monografia, dissertação, artigo científico e relatório acadêmico. Garanta a aprovação gráfica do seu trabalho.',
  keywords: [
    'formatação de tcc',
    'formatação tcc abnt',
    'formatação monografia',
    'formatação de artigo científico',
    'formatação tcc salvador',
    'formatação tcc online'
  ],
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/formatacao-tcc'
  }
};

export default function FormatacaoTccPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Apresentação Gráfica Impecável</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Formatação e Normalização de TCC
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto' }}>
            Organização da apresentação gráfica e estrutura técnica de TCCs, monografias, artigos científicos e relatórios acadêmicos para uma entrega com máxima segurança.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className="badge badge-gold" style={{ marginBottom: '0.75rem' }}>Para Estudantes e Formandos</span>
            <h2 style={{ fontSize: '2rem', color: '#0f172a', marginBottom: '1rem' }}>
              Seu TCC pronto para impressão e submissão à banca
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#475569', maxWidth: '800px', margin: '0 auto' }}>
              O Trabalho de Conclusão de Curso representa a culminância da sua jornada universitária. Não deixe que erros de margem, citações incorretas ou sumários desalinhados comprometam a nota ou a reputação do seu estudo científico.
            </p>
          </div>

          {/* Types of academic papers accepted */}
          <h3 style={{ fontSize: '1.4rem', color: '#0f172a', marginBottom: '1.25rem', textAlign: 'center' }}>
            Trabalhos que Formatamos e Normalizamos:
          </h3>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.25rem', marginBottom: '3.5rem' }}>
            {[
              'Trabalho de Conclusão de Curso (TCC)',
              'Monografia de Graduação e Pós-Graduação',
              'Artigo Científico para Periódicos',
              'Projeto de Pesquisa / Pré-Projeto',
              'Relatório Acadêmico / Relatório de Estágio',
              'Dissertação de Mestrado',
              'Tese de Doutorado',
              'Resumos Simples e Expandidos'
            ].map((type, i) => (
              <div 
                key={i}
                style={{
                  backgroundColor: '#f8fafc',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  fontWeight: 600,
                  color: '#1e293b'
                }}
              >
                <CheckCircle2 size={20} color="#1e40af" />
                <span>{type}</span>
              </div>
            ))}
          </div>

          {/* Highlight Banner Callout */}
          <div 
            style={{
              backgroundColor: '#1e40af',
              color: '#ffffff',
              borderRadius: '1rem',
              padding: '2.5rem',
              textAlign: 'center',
              marginBottom: '3.5rem',
              boxShadow: '0 10px 25px rgba(30, 64, 175, 0.25)'
            }}
          >
            <h3 style={{ fontSize: '1.85rem', color: '#ffffff', marginBottom: '0.75rem' }}>
              Precisa organizar seu TCC? Solicite um orçamento.
            </h3>
            <p style={{ fontSize: '1.05rem', color: '#dbeafe', maxWidth: '650px', margin: '0 auto 1.5rem auto' }}>
              Envie os dados do seu arquivo e receba uma análise do prazo e condições para deixar seu trabalho 100% adequado.
            </p>
            <Link href="#orcamento" className="btn btn-teal" style={{ padding: '0.85rem 2rem', fontSize: '1rem' }}>
              Solicitar Orçamento do TCC <ArrowRight size={18} />
            </Link>
          </div>

          <div id="orcamento">
            <BudgetForm defaultService="Formatação de TCC" />
          </div>

        </div>
      </section>
    </>
  );
}
