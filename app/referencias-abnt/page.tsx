import React from 'react';
import { Metadata } from 'next';
import { Quote, CheckCircle2 } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Citações e Referências ABNT | Rota Acadêmica',
  description: 'Organização e adequação de citações diretas, indiretas e lista de referências bibliográficas (NBR 6023 e NBR 10520) com cruzamento 100% de fontes.',
  keywords: ['referências abnt', 'citações abnt', 'nbr 6023', 'nbr 10520', 'revisão de referências tcc'],
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/referencias-abnt'
  }
};

export default function ReferenciasAbntPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Precisão Bibliográfica</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Citações e Referências ABNT
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto' }}>
            Checagem minuciosa, alinhamento e padronização da sua lista bibliográfica e citações no corpo do texto segundo as normas NBR 6023 e NBR 10520.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div className="glass-card" style={{ marginBottom: '3rem', backgroundColor: '#f8fafc' }}>
            <h2 style={{ fontSize: '1.85rem', color: '#0f172a', marginBottom: '1rem' }}>
              Por que a Revisão de Referências é Vital?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
              Um dos motivos mais frequentes para apontamentos e perda de pontos em bancas de TCC é a divergência entre autores citados no texto e a lista final de referências.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7 }}>
              Com expertise vinda da <strong>Biblioteconomia e Documentação</strong>, realizamos o cruzamento 100% dos dados para que nenhuma citação fique sem sua respectiva fonte.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              { title: 'Cruzamento Autor-Data', desc: 'Conferência exata de grafia do sobrenome e ano de publicação entre o corpo do texto e a lista bibliográfica.' },
              { title: 'Formatação de Livros e Capítulos', desc: 'Adequação de destaque em negrito, indicação de cidade, editora, edição e organizadores.' },
              { title: 'Artigos de Periódicos Científicos', desc: 'Padronização do nome da revista, volume, número de fascículo, páginas inicial/final e código DOI.' },
              { title: 'Legislação e Jurisprudência', desc: 'Formatação especializada para estudantes de Direito (Constituição, Leis, Decretos, Acórdãos e Súmulas).' },
              { title: 'Citações Diretas Longas', desc: 'Ajuste visual de recuo de 4cm, tamanho de fonte 10pt e espaçamento simples em citações de mais de 3 linhas.' },
              { title: 'Documentos e Sites da Web', desc: 'Formatação correta de links (Disponível em:) e datas formais de acesso (Acesso em: dia mês. ano).' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <CheckCircle2 size={24} color="#1e40af" style={{ marginBottom: '0.5rem' }} />
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <BudgetForm defaultService="Citações e Referências" />

        </div>
      </section>
    </>
  );
}
