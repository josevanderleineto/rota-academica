'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { CONTACT_CONFIG } from '@/data/contactConfig';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = CONTACT_CONFIG.getWhatsappUrl();

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Rota Acadêmica no WhatsApp"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem',
        backgroundColor: '#25d366',
        color: '#ffffff',
        padding: '0.75rem 1.25rem',
        borderRadius: '9999px',
        boxShadow: '0 8px 24px rgba(37, 211, 102, 0.4)',
        fontWeight: 600,
        fontSize: '0.925rem',
        textDecoration: 'none',
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.3s ease',
        cursor: 'pointer'
      }}
      className="pulse-whatsapp"
    >
      <MessageCircle size={24} fill="#ffffff" stroke="#25d366" />
      <span className="wa-text">Falar no WhatsApp</span>
    </a>
  );
};


