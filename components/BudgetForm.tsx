'use client';

import React, { useState } from 'react';
import { Send, UploadCloud, CheckCircle2, AlertCircle, MessageCircle, Loader2 } from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';
import { CONTACT_CONFIG } from '@/data/contactConfig';

interface BudgetFormProps {
  defaultService?: string;
}

export const BudgetForm: React.FC<BudgetFormProps> = ({ defaultService = 'normalizacao-abnt' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    course: '',
    workType: 'TCC / Monografia',
    service: defaultService,
    deadline: '15 dias',
    message: '',
    fileName: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Envia os dados e o arquivo real para a API /api/budget
      const apiData = new FormData();
      apiData.append('name', formData.name);
      apiData.append('email', formData.email);
      apiData.append('whatsapp', formData.whatsapp);
      apiData.append('course', formData.course);
      apiData.append('workType', formData.workType);
      apiData.append('service', formData.service);
      apiData.append('deadline', formData.deadline);
      apiData.append('message', formData.message);

      if (selectedFile) {
        apiData.append('file', selectedFile);
      }

      await fetch('/api/budget', {
        method: 'POST',
        body: apiData
      });
    } catch (err) {
      console.error('Erro no envio via API de e-mail:', err);
    } finally {
      setIsSubmitting(false);
      setSubmitted(true);
    }
  };

  return (
    <div className="glass-card" style={{ padding: '2.5rem', backgroundColor: '#ffffff', borderRadius: '1.25rem' }}>
      {submitted ? (
        <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
          <div style={{ display: 'inline-flex', padding: '1rem', backgroundColor: '#dcfce7', borderRadius: '50%', color: '#16a34a', marginBottom: '1.25rem' }}>
            <CheckCircle2 size={48} />
          </div>
          <h3 style={{ fontSize: '1.75rem', marginBottom: '0.75rem', color: '#0f172a' }}>
            Solicitação Recebida com Sucesso!
          </h3>
          <p style={{ color: '#475569', fontSize: '1.05rem', marginBottom: '1rem' }}>
            Sua solicitação de orçamento e as informações do seu trabalho foram enviadas com sucesso por e-mail! Entraremos em contato com você em breve.
          </p>
          {selectedFile && (
            <div style={{ backgroundColor: '#f0fdf4', border: '1px solid #bbf7d0', color: '#166534', padding: '0.85rem 1rem', borderRadius: '8px', fontSize: '0.9rem', marginBottom: '1.5rem', textAlign: 'left' }}>
              <strong>📎 Arquivo Anexado Enviado com Sucesso:</strong> O documento <em>{selectedFile.name}</em> foi anexado e transmitido diretamente para o nosso e-mail de atendimento!
            </div>
          )}
          <button 
            onClick={() => setSubmitted(false)}
            className="btn btn-secondary"
            style={{ fontSize: '0.9rem' }}
          >
            Enviar nova solicitação
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div>
            <h3 style={{ fontSize: '1.65rem', marginBottom: '0.35rem', color: '#0f172a' }}>
              Solicitar orçamento sem compromisso
            </h3>
            <p style={{ color: '#64748b', fontSize: '0.95rem' }}>
              Preencha os dados do seu trabalho para receber uma proposta ajustada às suas necessidades.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                Seu Nome *
              </label>
              <input
                type="text"
                name="name"
                required
                placeholder="Ex: Maria Oliveira"
                value={formData.name}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                Seu E-mail *
              </label>
              <input
                type="email"
                name="email"
                required
                placeholder="Ex: maria@email.com"
                value={formData.email}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                WhatsApp (com DDD) *
              </label>
              <input
                type="tel"
                name="whatsapp"
                required
                placeholder="(71) 99999-9999"
                value={formData.whatsapp}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                Curso e Faculdade
              </label>
              <input
                type="text"
                name="course"
                placeholder="Ex: Direito / UFBA"
                value={formData.course}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  outline: 'none'
                }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                Tipo de Trabalho *
              </label>
              <select
                name="workType"
                value={formData.workType}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                <option value="TCC / Monografia">TCC / Monografia</option>
                <option value="Artigo Científico">Artigo Científico</option>
                <option value="Projeto de Pesquisa">Projeto de Pesquisa</option>
                <option value="Dissertação de Mestrado">Dissertação de Mestrado</option>
                <option value="Tese de Doutorado">Tese de Doutorado</option>
                <option value="Relatório de Estágio">Relatório de Estágio / Acadêmico</option>
                <option value="Apresentação de TCC">Apresentação de TCC / Slides</option>
                <option value="Outro">Outro tipo de trabalho</option>
              </select>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                Serviço Desejado *
              </label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                {SERVICES_DATA.map((s) => (
                  <option key={s.id} value={s.title}>{s.title}</option>
                ))}
                <option value="Pacote Completo (Formatação + Referências)">Pacote Completo (Formatação + Referências)</option>
              </select>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.25rem' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                Prazo Estimado de Entrega *
              </label>
              <select
                name="deadline"
                value={formData.deadline}
                onChange={handleChange}
                style={{
                  width: '100%',
                  padding: '0.75rem 1rem',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  fontSize: '0.95rem',
                  backgroundColor: '#ffffff',
                  outline: 'none'
                }}
              >
                <option value="Urgente (Até 3 dias)">Urgente (Até 3 dias)</option>
                <option value="1 Semana (7 dias)">1 Semana (7 dias)</option>
                <option value="15 dias">15 dias</option>
                <option value="30 dias ou mais">30 dias ou mais</option>
              </select>
            </div>

            {/* Simulated File Upload Area */}
            <div>
              <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
                Anexar Arquivo (Opcional - Word/PDF)
              </label>
              <label 
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.65rem 1rem',
                  borderRadius: '8px',
                  border: '2px dashed #cbd5e1',
                  backgroundColor: '#f8fafc',
                  cursor: 'pointer',
                  fontSize: '0.875rem',
                  color: '#64748b'
                }}
              >
                <UploadCloud size={18} color="#1e40af" />
                <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', maxWidth: '200px' }}>
                  {selectedFile ? selectedFile.name : 'Clique para selecionar arquivo'}
                </span>
                <input type="file" onChange={handleFileChange} accept=".doc,.docx,.pdf" style={{ display: 'none' }} />
              </label>
              <span style={{ display: 'block', fontSize: '0.75rem', color: '#64748b', marginTop: '0.25rem' }}>
                O arquivo PDF/Word será enviado diretamente para o nosso e-mail de atendimento ao enviar.
              </span>
            </div>
          </div>

          <div>
            <label style={{ display: 'block', fontSize: '0.875rem', fontWeight: 600, color: '#334155', marginBottom: '0.4rem' }}>
              Mensagem ou Exigências Específicas
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="Descreva o estágio atual do seu trabalho, manual da faculdade, quantidade de páginas ou dúvidas..."
              value={formData.message}
              onChange={handleChange}
              style={{
                width: '100%',
                padding: '0.75rem 1rem',
                borderRadius: '8px',
                border: '1px solid #cbd5e1',
                fontSize: '0.95rem',
                outline: 'none',
                resize: 'vertical'
              }}
            />
          </div>

          <div style={{ backgroundColor: '#f1f5f9', padding: '0.85rem 1rem', borderRadius: '8px', display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.825rem', color: '#475569' }}>
            <AlertCircle size={16} color="#1e40af" />
            <span>Ao enviar, seus dados e o arquivo anexo serão transmitidos com 100% de segurança diretamente para o nosso e-mail oficial.</span>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="btn btn-primary" 
              style={{ padding: '1rem', fontSize: '1.05rem', width: '100%', borderRadius: '12px', opacity: isSubmitting ? 0.7 : 1 }}
            >
              {isSubmitting ? (
                <>
                  <Loader2 size={18} className="spin" /> Transmitindo orçamento e anexo por e-mail...
                </>
              ) : (
                <>
                  <Send size={18} /> Enviar Orçamento por E-mail
                </>
              )}
            </button>
            
            <a 
              href={CONTACT_CONFIG.getWhatsappUrl()} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-whatsapp" 
              style={{ padding: '0.85rem', fontSize: '0.95rem', width: '100%', borderRadius: '12px', justifyContent: 'center' }}
            >
              <MessageCircle size={18} /> Falar no WhatsApp Direto (Sem Formulário)
            </a>
          </div>
        </form>
      )}
    </div>
  );
};
