'use client';

import React, { useState } from 'react';
import { ChevronDown, ShieldCheck } from 'lucide-react';

export interface FAQItem {
  question: string;
  answer: string;
  highlight?: boolean;
}

const FAQS_DATA: FAQItem[] = [
  {
    question: 'A Rota Acadêmica faz normalização ABNT?',
    answer: 'Sim! Adequamos trabalhos acadêmicos às normas ABNT vigentes e às diretrizes específicas do manual da sua instituição de ensino, abrangendo margens, alinhamentos, paginação, sumário, citações e referências.'
  },
  {
    question: 'Vocês formatam TCC?',
    answer: 'Sim, realizamos a formatação gráfica completa de TCCs, monografias, dissertações, teses e artigos científicos, organizando a estrutura pré-textual, textual e pós-textual.'
  },
  {
    question: 'Vocês organizam referências bibliográficas e revisam citações?',
    answer: 'Sim! Efetuamos a checagem rigorosa e o cruzamento 100% entre as citações no corpo do texto (diretas e indiretas) e a lista final de referências (livros, artigos, sites, normas, legislação), eliminando divergências.'
  },
  {
    question: 'Vocês ajudam em projetos de pesquisa?',
    answer: 'Oferecemos consultoria para auxiliar na estruturação e compreensão dos elementos essenciais do projeto: tema, problema de pesquisa, hipóteses, objetivos, justificativa, metodologia e cronograma.'
  },
  {
    question: 'Vocês fazem apresentações de TCC?',
    answer: 'Sim, organizamos a estrutura visual de slides para sua defesa perante a banca examinadora, acompanhada de roteirização do tempo de exposição oral.'
  },
  {
    question: 'O atendimento é online?',
    answer: 'Sim! O atendimento é 100% online para estudantes de todo o Brasil via WhatsApp, e-mail e conferência web, além de atendimento focado em Salvador e região metropolitana da Bahia.'
  },
  {
    question: 'Como funciona o orçamento?',
    answer: 'O orçamento é gratuito e personalizado. Você nos envia os detalhes do seu trabalho (número de páginas, tipo de serviço, prazo e se possui manual próprio), e apresentamos a proposta mais adequada.'
  },
  {
    question: 'Quanto custa uma normalização de TCC?',
    answer: 'O valor varia conforme a quantidade de páginas, complexidade dos elementos (tabelas, figuras, referências) e o prazo de entrega solicitado. Entre em contato para receber um orçamento transparente.'
  },
  {
    question: 'O serviço inclui escrever o TCC por mim?',
    answer: 'Não. A Rota Acadêmica oferece consultoria, orientação, normalização, revisão estrutural e suporte à pesquisa. A autoria intelectual, os resultados e o conteúdo científico permanecem sob total responsabilidade do estudante, respeitando estritamente a ética acadêmica.',
    highlight: true
  }
];

export const FAQAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '800px', margin: '0 auto' }}>
      {FAQS_DATA.map((faq, idx) => {
        const isOpen = openIndex === idx;
        return (
          <div
            key={idx}
            style={{
              backgroundColor: '#ffffff',
              borderRadius: '12px',
              border: faq.highlight ? '2px solid #1e40af' : '1px solid var(--border-light)',
              boxShadow: isOpen ? 'var(--shadow-md)' : 'var(--shadow-sm)',
              overflow: 'hidden',
              transition: 'all 0.2s ease'
            }}
          >
            <button
              onClick={() => toggleFAQ(idx)}
              style={{
                width: '100%',
                padding: '1.25rem 1.5rem',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '1rem',
                background: 'none',
                border: 'none',
                textAlign: 'left',
                cursor: 'pointer',
                fontFamily: 'var(--font-heading)',
                fontSize: '1.05rem',
                fontWeight: 600,
                color: faq.highlight ? '#1e40af' : '#0f172a'
              }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                {faq.highlight && <ShieldCheck size={20} color="#1e40af" />}
                {faq.question}
              </span>
              <ChevronDown
                size={20}
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.3s ease',
                  color: '#64748b'
                }}
              />
            </button>

            {isOpen && (
              <div
                style={{
                  padding: '0 1.5rem 1.25rem 1.5rem',
                  fontSize: '0.95rem',
                  color: '#475569',
                  lineHeight: '1.6',
                  borderTop: '1px solid #f1f5f9',
                  paddingTop: '1rem'
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
