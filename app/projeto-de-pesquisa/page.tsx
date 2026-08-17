import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { Compass, CheckCircle2, ShieldCheck } from 'lucide-react';
import { BudgetForm } from '@/components/BudgetForm';

export const metadata: Metadata = {
  title: 'Consultoria para Projetos de Pesquisa | Rota Acadêmica',
  description: 'Auxílio técnico e orientação metodológica para estruturação de projetos de pesquisa, pré-projetos de TCC e seleções de Mestrado/Doutorado.',
  keywords: [
    'projeto de pesquisa',
    'consultoria para projeto de pesquisa',
    'como fazer projeto de pesquisa',
    'problema de pesquisa objetivo',
    'pré projeto tcc'
  ],
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/projeto-de-pesquisa'
  }
};

export default function ProjetoDePesquisaPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Estruturação Metodológica</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Consultoria para Projetos de Pesquisa
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto' }}>
            Orientação especializada para organizar e fundamentar os elementos essenciais do seu projeto científico de TCC, Iniciação Científica ou Seleção de Pós-Graduação.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          
          <div className="glass-card" style={{ marginBottom: '3rem', backgroundColor: '#f8fafc' }}>
            <h2 style={{ fontSize: '1.85rem', color: '#0f172a', marginBottom: '1rem' }}>
              O que é um Projeto de Pesquisa Robusto?
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7, marginBottom: '1rem' }}>
              Um projeto de pesquisa bem estruturado é o mapa da sua investigação cientifica. Ele demonstra aos orientadores e bancas examinadoras que o tema é viável, relevante e conduzido com rigor metodológico.
            </p>
            <p style={{ fontSize: '1.05rem', color: '#334155', lineHeight: 1.7 }}>
              A Rota Acadêmica auxilia você a conectar logicamente a pergunta central da sua pesquisa com os objetivos e a metodologia aplicável.
            </p>
          </div>

          <h2 style={{ fontSize: '1.75rem', color: '#0f172a', marginBottom: '1.5rem', textAlign: 'center' }}>
            Elementos Estruturais Abordados na Consultoria
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem', marginBottom: '3.5rem' }}>
            {[
              { title: 'Delimitação do Tema', desc: 'Recorte espacial, temporal e teórico adequado para evitar temas excessivamente amplos.' },
              { title: 'Problema de Pesquisa', desc: 'Formulação da pergunta norteadora investigável e clara.' },
              { title: 'Objetivos Geral e Específicos', desc: 'Definição de metas alcançáveis com verbos no infinitivo (Analisar, Identificar, Comparar).' },
              { title: 'Justificativa Acadêmica', desc: 'Demonstração da relevância teórica, social e prática do tema estudado.' },
              { title: 'Metodologia da Pesquisa', desc: 'Procedimentos de coleta de dados (pesquisa bibliográfica, documental, campo ou estudo de caso).' },
              { title: 'Referencial Teórico Inicial', desc: 'Organização dos autores e conceitos fundamentais para embasar a pesquisa.' },
              { title: 'Cronograma de Execução', desc: 'Divisão temporal das etapas da pesquisa ao longo dos meses.' },
              { title: 'Referências Preliminares', desc: 'Normalização da lista de fontes preliminares conforme ABNT.' }
            ].map((elem, idx) => (
              <div key={idx} style={{ backgroundColor: '#ffffff', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', boxShadow: 'var(--shadow-sm)' }}>
                <CheckCircle2 size={24} color="#0d9488" style={{ marginBottom: '0.5rem' }} />
                <h3 style={{ fontSize: '1.15rem', color: '#0f172a', marginBottom: '0.4rem' }}>{elem.title}</h3>
                <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: 1.6 }}>{elem.desc}</p>
              </div>
            ))}
          </div>

          {/* Ethical Banner */}
          <div style={{ backgroundColor: '#f1f5f9', padding: '2rem', borderRadius: '12px', borderLeft: '5px solid #0d9488', marginBottom: '3.5rem' }}>
            <h3 style={{ fontSize: '1.25rem', color: '#0f172a', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck color="#0d9488" /> Posicionamento Ético e Orientação
            </h3>
            <p style={{ fontSize: '0.975rem', color: '#475569', lineHeight: 1.6 }}>
              A Rota Acadêmica não produz nem comercializa pesquisas acadêmicas para serem apresentadas como se fossem de autoria do estudante. Atuamos com mentoria, revisão e suporte metodológico para o desenvolvimento autônomo do aluno.
            </p>
          </div>

          <BudgetForm defaultService="Projetos de Pesquisa" />

        </div>
      </section>
    </>
  );
}
