'use client';

import React, { useState } from 'react';
import { CheckSquare, Square, Sparkles, ArrowRight, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

interface ChecklistItem {
  id: string;
  label: string;
  weight: number;
}

const CHECKLIST_ITEMS: ChecklistItem[] = [
  { id: 'margens', label: 'Margens A4 configuradas (3cm sup/esq e 2cm inf/dir)', weight: 15 },
  { id: 'sumario', label: 'Sumário automático com numeração progressiva de seções', weight: 15 },
  { id: 'pre-textuais', label: 'Capa, Folha de Rosto e Resumo no padrão da instituição', weight: 15 },
  { id: 'paginacao', label: 'Paginação oculta em pré-textuais e exibida a partir da Introdução', weight: 15 },
  { id: 'citacoes', label: 'Citações diretas longas com recuo de 4cm, fonte 10 e espaço simples', weight: 15 },
  { id: 'referencias', label: 'Referências alinhadas à esquerda, espaço simples e ordem alfabética', weight: 15 },
  { id: 'manual', label: 'Adequação ao manual específico da sua Faculdade/Universidade', weight: 10 }
];

export const AbntChecklist: React.FC = () => {
  const [checkedIds, setCheckedIds] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    if (checkedIds.includes(id)) {
      setCheckedIds(checkedIds.filter(i => i !== id));
    } else {
      setCheckedIds([...checkedIds, id]);
    }
  };

  const currentScore = CHECKLIST_ITEMS
    .filter(item => checkedIds.includes(item.id))
    .reduce((sum, item) => sum + item.weight, 0);

  const getScoreStatus = (score: number) => {
    if (score === 100) return { label: 'Pronto para Entrega!', color: '#16a34a', bg: '#dcfce7' };
    if (score >= 60) return { label: 'Atenção aos Detalhes', color: '#d97706', bg: '#fef3c7' };
    return { label: 'Necessita Normalização Urgente', color: '#dc2626', bg: '#fee2e2' };
  };

  const status = getScoreStatus(currentScore);

  return (
    <div 
      style={{
        backgroundColor: '#0f172a',
        color: '#ffffff',
        borderRadius: '1.25rem',
        padding: '2.5rem',
        boxShadow: '0 20px 40px rgba(15, 23, 42, 0.25)',
        border: '1px solid #1e293b'
      }}
    >
      <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
        <div className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>
          <Sparkles size={14} /> Ferramenta Gratuita
        </div>
        <h3 style={{ fontSize: '1.75rem', color: '#ffffff', marginBottom: '0.5rem' }}>
          Diagnóstico Rápido de Normalização ABNT
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>
          Marque os itens que você já revisou no seu trabalho acadêmico para calcular o nível de adequação.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1rem', marginBottom: '2rem' }}>
        {CHECKLIST_ITEMS.map((item) => {
          const isChecked = checkedIds.includes(item.id);
          return (
            <div
              key={item.id}
              onClick={() => toggleItem(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.85rem',
                padding: '1rem',
                backgroundColor: isChecked ? 'rgba(30, 64, 175, 0.2)' : '#1e293b',
                border: isChecked ? '1px solid #3b82f6' : '1px solid #334155',
                borderRadius: '10px',
                cursor: 'pointer',
                transition: 'all 0.2s ease'
              }}
            >
              <div style={{ color: isChecked ? '#38bdf8' : '#64748b' }}>
                {isChecked ? <CheckSquare size={22} /> : <Square size={22} />}
              </div>
              <span style={{ fontSize: '0.875rem', color: isChecked ? '#ffffff' : '#cbd5e1', fontWeight: isChecked ? 600 : 400 }}>
                {item.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Progress & Result Box */}
      <div 
        style={{
          backgroundColor: '#1e293b',
          borderRadius: '12px',
          padding: '1.5rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1.5rem',
          border: '1px solid #334155'
        }}
      >
        <div style={{ flex: '1 1 240px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
            <span>Nível de Adequação ABNT:</span>
            <strong style={{ color: '#38bdf8' }}>{currentScore}%</strong>
          </div>
          
          {/* Progress bar */}
          <div style={{ height: '10px', backgroundColor: '#0f172a', borderRadius: '999px', overflow: 'hidden' }}>
            <div 
              style={{
                height: '100%',
                width: `${currentScore}%`,
                backgroundColor: currentScore >= 80 ? '#10b981' : currentScore >= 50 ? '#f59e0b' : '#ef4444',
                transition: 'width 0.4s ease'
              }}
            />
          </div>
          
          <div style={{ marginTop: '0.75rem', fontSize: '0.85rem' }}>
            Status: <span style={{ padding: '0.2rem 0.6rem', borderRadius: '4px', backgroundColor: status.bg, color: status.color, fontWeight: 700 }}>{status.label}</span>
          </div>
        </div>

        <div>
          <Link href="/contato" className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '0.9rem' }}>
            Normalizar meu Trabalho Agora <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </div>
  );
};
