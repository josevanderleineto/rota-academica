import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { CheckCircle2, BookCheck, ShieldCheck, ArrowRight, FileText, Settings, Layers } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Normalização ABNT de Trabalhos Acadêmicos | Rota Acadêmica',
  description: 'Serviço profissional de normalização ABNT para TCC, monografias e dissertações. Adequação de capas, sumários, citações, referências e regras da sua faculdade.',
  keywords: [
    'normalização ABNT',
    'normalização de trabalhos acadêmicos',
    'normalização de TCC',
    'onde fazer normalização ABNT',
    'normalização ABNT online',
    'normalização ABNT Salvador'
  ],
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/normalizacao-abnt'
  }
};

export default function NormalizacaoAbntPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Especialidade Técnica</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Normalização ABNT de Trabalhos Acadêmicos
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto' }}>
            Adequação rigorosa e organização visual dos elementos do seu trabalho conforme as normas ABNT vigentes e as exigências específicas da sua instituição de ensino.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div className="glass-card" style={{ marginBottom: '3rem', backgroundColor: '#f8fafc' }}>
            <h2 style={{ fontSize: '1.85rem', color: '#0f172a', marginBottom: '1rem' }}>
              O que é a Normalização Acadêmica?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
              A normalização acadêmica consiste na padronização da estrutura gráfica, conceitual e bibliográfica de um trabalho acadêmico (TCC, monografia, dissertação, tese ou artigo), garantindo que ele siga as diretrizes técnicas estabelecidas pela Associação Brasileira de Normas Técnicas (ABNT) e pelo manual de trabalhos acadêmicos da instituição de ensino do estudante.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7 }}>
              Mais do que apenas ajustar fontes e margens, a normalização organiza a hierarquia dos títulos, a disposição correta dos elementos pré-textuais, a ordenação das referências bibliográficas e a legibilidade perante a banca examinadora e repositórios institucionais.
            </p>
          </div>

          <h2 style={{ fontSize: '1.85rem', color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>
            Elementos Abrangidos no Serviço de Normalização
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            
            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: '#1e40af', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Layers size={20} /> Elementos Pré-Textuais
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Estruturação e ordenação de Capa, Folha de Rosto, Folha de Aprovação, Dedicatória, Agradecimentos, Epígrafe, Resumo em português e língua estrangeira (Abstract), Sumário automático, Lista de Ilustrações, Lista de Tabelas e Lista de Siglas.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: '#0d9488', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <FileText size={20} /> Elementos Textuais
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Padronização da Introdução, Desenvolvimento (Capítulos, Seções primárias, secundárias e terciárias) e Conclusão/Considerações Finais, com controle de numeração progressiva e estilo de parágrafos.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: '#d97706', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <BookCheck size={20} /> Elementos Pós-Textuais
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Organização da lista final de Referências Bibliográficas (ordem alfabética, alinhamento à esquerda, espaço simples), Apêndices (documentos elaborados pelo próprio autor) e Anexos (documentos de terceiros).
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: '#2563eb', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <Settings size={20} /> Apresentação Gráfica
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Configuração exata de margens (3cm sup/esq e 2cm inf/dir), tamanho de papel A4, entrelinhas (1,5 ou simples), fontes (Arial ou Times New Roman 12pt e 10pt) e recuos de parágrafo.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: '#ec4899', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} /> Citações e Notas
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Formatação de citações diretas curtas (entre aspas), citações diretas longas (recuo de 4cm, tamanho 10pt), citações indiretas e notas de rodapé explicativas.
              </p>
            </div>

            <div style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
              <div style={{ color: '#10b981', fontWeight: 700, fontSize: '1.15rem', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={20} /> Tabelas e Ilustrações
              </div>
              <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>
                Adequação do leiaute de tabelas (conforme normas do IBGE/ABNT), quadros, gráficos e figuras, incluindo identificação no topo e indicação obrigatória da fonte na parte inferior.
              </p>
            </div>

          </div>

          {/* Institutional Rules Disclaimer */}
          <div style={{ backgroundColor: '#f1f5f9', padding: '2rem', borderRadius: '12px', borderLeft: '5px solid #1e40af', marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem' }}>
              Respeito às Regras da Sua Instituição de Ensino
            </h3>
            <p style={{ fontSize: '0.975rem', color: '#475569', lineHeight: 1.6 }}>
              Sabemos que muitas universidades (como UFBA, UNEB, UNIFACS, UCSAL, USP, UFRJ, entre outras) possuem manuais internos com particularidades sobre capas, logotipos ou folha de aprovação. Na Rota Acadêmica, a normalização considera tanto as normas ABNT vigentes (NBR 14724, 6023, 10520, 6027) quanto o manual específico disponibilizado pela sua faculdade.
            </p>
          </div>

          {/* Form */}
          <BudgetForm defaultService="Normalização ABNT" />

        </div>
      </section>
    </>
  );
}
