import React from 'react';
import { Metadata } from 'next';
import { BudgetForm } from '@/components/BudgetForm';
import { MessageSquare, Mail, MapPin, Clock } from 'lucide-react';
import { CONTACT_CONFIG } from '@/data/contactConfig';

export const metadata: Metadata = {
  title: 'Solicitar Orçamento & Contato | Rota Acadêmica',
  description: 'Entre em contato com a Rota Acadêmica e solicite um orçamento para normalização ABNT, TCC ou consultoria acadêmica.',
  alternates: {
    canonical: 'https://www.rotaacademica.com.br/contato'
  }
};

export default function ContatoPage() {
  return (
    <>
      <section style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '4.5rem 0', textAlign: 'center' }}>
        <div className="container">
          <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Atendimento Rápido</div>
          <h1 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#ffffff', marginBottom: '1rem' }}>
            Vamos encontrar a melhor rota para o seu trabalho?
          </h1>
          <p style={{ fontSize: '1.15rem', color: '#cbd5e1', maxWidth: '750px', margin: '0 auto' }}>
            Explique o que você precisa e entraremos em contato para entender sua demanda e apresentar as possibilidades de atendimento.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3rem',
              alignItems: 'start'
            }}
          >
            {/* Contact Info Box */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              
              <div className="glass-card">
                <h2 style={{ fontSize: '1.5rem', color: '#0f172a', marginBottom: '1rem' }}>
                  Canais de Atendimento
                </h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  
                  <a 
                    href={CONTACT_CONFIG.getWhatsappUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '1rem',
                      padding: '1rem',
                      borderRadius: '12px',
                      backgroundColor: '#f0fdf4',
                      border: '1px solid #bbf7d0',
                      color: '#15803d',
                      fontWeight: 600,
                      transition: 'transform 0.2s'
                    }}
                  >
                    <MessageSquare size={24} />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#166534', fontWeight: 500 }}>WhatsApp Direto</div>
                      <div style={{ fontSize: '1.05rem' }}>{CONTACT_CONFIG.whatsappFormatted}</div>
                    </div>
                  </a>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid var(--border-light)' }}>
                    <Mail size={24} color="#1e40af" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>E-mail Oficial</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>{CONTACT_CONFIG.email}</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid var(--border-light)' }}>
                    <MapPin size={24} color="#0d9488" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Localização & Atendimento</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>Atendimento Online para todo o Brasil & Salvador / BA</div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '12px', backgroundColor: '#f8fafc', border: '1px solid var(--border-light)' }}>
                    <Clock size={24} color="#d97706" />
                    <div>
                      <div style={{ fontSize: '0.8rem', color: '#64748b' }}>Horário de Resposta</div>
                      <div style={{ fontSize: '0.95rem', fontWeight: 600, color: '#0f172a' }}>Segunda a Sábado — Resposta rápida</div>
                    </div>
                  </div>

                </div>
              </div>

              {/* WhatsApp Direct Callout */}
              <div style={{ backgroundColor: '#0f172a', color: '#ffffff', padding: '1.75rem', borderRadius: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#25d366', fontWeight: 600, marginBottom: '0.5rem' }}>
                  <MessageSquare size={20} /> Atendimento Rápido via WhatsApp
                </div>
                <p style={{ fontSize: '0.875rem', color: '#cbd5e1', lineHeight: 1.5, marginBottom: '1rem' }}>
                  Prefere falar diretamente sem preencher o formulário? Clique abaixo para iniciar uma conversa no WhatsApp.
                </p>
                <a 
                  href={CONTACT_CONFIG.getWhatsappUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-whatsapp"
                  style={{ width: '100%', justifyContent: 'center', fontSize: '0.9rem' }}
                >
                  <MessageSquare size={18} /> Iniciar conversa no WhatsApp
                </a>
              </div>

            </div>

            {/* Main Form */}
            <div>
              <BudgetForm />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
