import React from 'react';
import { Metadata } from 'next';
import { Presentation, CheckCircle2 } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Apresentações Acadêmicas e Defesa de TCC | Rota Acadêmica',
  description: 'Organização visual de slides e roteirização para defesa de TCC, bancas examinadoras, seminários e congressos.',
  keywords: ['apresentação de tcc', 'slides tcc', 'defesa de tcc', 'roteiro defesa tcc'],
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/apresentacao-tcc'
  }
};

export default function ApresentacaoTccPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Exposição Oral com Segurança</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Apresentações Acadêmicas e TCC
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto' }}>
            Estruturação de slides impactantes e roteirização estratégica de tempo para encantar a banca examinadora na sua defesa.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div className="glass-card" style={{ marginBottom: '3rem', backgroundColor: '#f8fafc' }}>
            <h2 style={{ fontSize: '1.85rem', color: '#0f172a', marginBottom: '1rem' }}>
              Transmita Segurança perante a Banca Examinadora
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
              Uma apresentação de TCC de sucesso exige síntese. O segredo é transmitir meses de pesquisa em 15 a 20 minutos de forma clara, objetiva e visualmente atraente.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7 }}>
              Evitamos slides poluídos com blocos gigantes de texto e organizamos tópicos visuais estratégicos.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              { title: 'Leiaute Visual de Slides', desc: 'Design clean, tipografia legível e paleta de cores sóbria sem poluição visual.' },
              { title: 'Síntese de Conteúdo', desc: 'Transformação dos capítulos densos em bullets sintéticos e esquemas visuais.' },
              { title: 'Roteiro de Tempo (15 a 20 min)', desc: 'Distribuição dos minutos de fala por seção (Introdução, Metodologia, Resultados e Conclusão).' },
              { title: 'Tabelas e Gráficos Destacados', desc: 'Formatação clara de dados empíricos para rápida compreensão da banca.' }
            ].map((item, i) => (
              <div key={i} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <CheckCircle2 size={24} color="#0d9488" style={{ marginBottom: '0.5rem' }} />
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{item.desc}</p>
              </div>
            ))}
          </div>

          <BudgetForm defaultService="Apresentações Acadêmicas" />

        </div>
      </section>
    </>
  );
}
