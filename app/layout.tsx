import type { Metadata } from 'next';
import './globals.css';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { WhatsAppButton } from '@/components/WhatsAppButton';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rotaacademica.com.br'),
  title: {
    default: 'Rota Acadêmica | Normalização ABNT e Consultoria Acadêmica',
    template: '%s | Rota Acadêmica'
  },
  description: 'Normalização ABNT, formatação de TCC, referências, citações, projetos de pesquisa e consultoria acadêmica. Encontre o melhor caminho para organizar seu trabalho.',
  keywords: [
    'normalização ABNT',
    'normalização de trabalhos acadêmicos',
    'normalização de TCC',
    'formatação ABNT',
    'formatação de TCC',
    'consultoria acadêmica',
    'consultoria para TCC',
    'referências ABNT',
    'citações ABNT',
    'projeto de pesquisa',
    'formatação de trabalhos acadêmicos',
    'revisão de trabalhos acadêmicos',
    'apresentação de TCC',
    'normalização ABNT Salvador',
    'consultoria acadêmica Salvador'
  ],
  authors: [{ name: 'Rota Acadêmica' }],
  creator: 'Rota Acadêmica',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://www.rotaacademica.com.br',
    title: 'Rota Acadêmica | Normalização ABNT e Consultoria Acadêmica',
    description: 'Seu caminho para uma produção acadêmica mais organizada. Suporte com ABNT, TCC, projetos e citações.',
    siteName: 'Rota Acadêmica',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Rota Acadêmica - Consultoria e Normalização ABNT'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rota Acadêmica | Normalização ABNT e Consultoria Acadêmica',
    description: 'Encontre o melhor caminho para organizar seu trabalho acadêmico.'
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.rotaacademica.com.br'
  }
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Rota Acadêmica',
  url: 'https://www.rotaacademica.com.br',
  logo: 'https://www.rotaacademica.com.br/logo.png',
  description: 'Consultoria e apoio acadêmico para estudantes. Normalização ABNT, formatação de TCC, projetos de pesquisa e organização da informação.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Salvador',
    addressRegion: 'BA',
    addressCountry: 'BR'
  },
  areaServed: [
    { '@type': 'AdministrativeArea', name: 'Salvador - BA' },
    { '@type': 'Country', name: 'Brasil' }
  ],
  serviceType: [
    'Normalização ABNT',
    'Formatação de TCC',
    'Consultoria Acadêmica',
    'Projetos de Pesquisa',
    'Organização de Referências Bibliográficas'
  ],
  priceRange: '$$'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning data-scroll-behavior="smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
