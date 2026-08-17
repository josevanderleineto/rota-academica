import React from 'react';
import Link from 'next/link';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ variant = 'dark', size = 'md', showTagline = false }) => {
  const isLight = variant === 'light';

  const iconSizes = {
    sm: 28,
    md: 36,
    lg: 48
  };

  const titleSizes = {
    sm: '1.15rem',
    md: '1.45rem',
    lg: '1.85rem'
  };

  return (
    <Link href="/" className="logo-container" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none' }}>
      <div 
        className="logo-icon-wrapper"
        style={{
          position: 'relative',
          width: `${iconSizes[size]}px`,
          height: `${iconSizes[size]}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: isLight ? 'rgba(255, 255, 255, 0.15)' : 'linear-gradient(135deg, #0f172a, #1e40af)',
          borderRadius: '12px',
          padding: '6px',
          boxShadow: isLight ? '0 2px 8px rgba(0,0,0,0.2)' : '0 4px 12px rgba(30, 64, 175, 0.3)',
          border: isLight ? '1px solid rgba(255,255,255,0.25)' : '1px solid rgba(255,255,255,0.1)'
        }}
      >
        <svg 
          width="100%" 
          height="100%" 
          viewBox="0 0 40 40" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Route path curve */}
          <path 
            d="M 6 32 C 12 24, 18 30, 24 16 C 28 8, 32 12, 34 8" 
            stroke="#0d9488" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            strokeDasharray="1 0"
          />
          {/* Open Book Base */}
          <path 
            d="M8 26L20 20L32 26V32L20 27L8 32V26Z" 
            fill={isLight ? '#ffffff' : '#f8fafc'} 
            opacity="0.9"
          />
          {/* Pin Marker at Destination */}
          <circle cx="24" cy="14" r="4" fill="#3b82f6" stroke="#ffffff" strokeWidth="2" />
        </svg>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <span 
          style={{ 
            fontFamily: "'Outfit', sans-serif", 
            fontWeight: 800, 
            fontSize: titleSizes[size], 
            color: isLight ? '#ffffff' : '#0f172a',
            letterSpacing: '-0.02em',
            lineHeight: 1.1
          }}
        >
          ROTA <span style={{ color: '#1e40af' }}>ACADÊMICA</span>
        </span>
        {showTagline && (
          <span 
            style={{ 
              fontSize: '0.75rem', 
              color: isLight ? '#cbd5e1' : '#64748b', 
              fontWeight: 500,
              letterSpacing: '0.01em',
              marginTop: '2px'
            }}
          >
            Seu caminho para a organização
          </span>
        )}
      </div>
    </Link>
  );
};
