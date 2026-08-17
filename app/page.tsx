import React from 'react';
import Link from 'next/link';
import { 
  BookCheck, 
  FileSpreadsheet, 
  Quote, 
  Compass, 
  GraduationCap, 
  Presentation, 
  Layers, 
  ArrowRight, 
  CheckCircle2, 
  Compass as RouteIcon, 
  MapPin, 
  ShieldCheck, 
  Users, 
  Sparkles,
  Search,
  BookOpen,
  Award,
  FileCheck,
  MessageCircle
} from 'lucide-react';
import { SERVICES_DATA } from '@/data/servicesData';
import { BLOG_POSTS } from '@/data/blogPosts';
import { BudgetForm } from '@/components/BudgetForm';
import { AbntChecklist } from '@/components/AbntChecklist';
import { FAQAccordion } from '@/components/FAQAccordion';

export default function Home() {
  const iconMap: Record<string, React.ReactNode> = {
    BookCheck: <BookCheck size={32} className="srv-icon" />,
    FileSpreadsheet: <FileSpreadsheet size={32} className="srv-icon" />,
    Quote: <Quote size={32} className="srv-icon" />,
    Compass: <Compass size={32} className="srv-icon" />,
    GraduationCap: <GraduationCap size={32} className="srv-icon" />,
    Presentation: <Presentation size={32} className="srv-icon" />,
    Layers: <Layers size={32} className="srv-icon" />
  };

  return (
    <>
      {/* ------------------- HERO SECTION ------------------- */}
      <section 
        style={{
          position: 'relative',
          backgroundColor: '#0f172a',
          color: '#ffffff',
          paddingTop: '5.5rem',
          paddingBottom: '6rem',
          overflow: 'hidden'
        }}
      >
        {/* Subtle Background Route Graphic SVG */}
        <svg 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            opacity: 0.12,
            pointerEvents: 'none'
          }}
          viewBox="0 0 1440 600" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path 
            d="M -100 500 C 300 200, 600 550, 1000 150 C 1200 0, 1400 300, 1600 100" 
            stroke="#38bdf8" 
            strokeWidth="4" 
            strokeDasharray="12 12"
          />
          <circle cx="1000" cy="150" r="16" fill="#3b82f6" opacity="0.8" />
          <circle cx="1000" cy="150" r="8" fill="#ffffff" />
        </svg>

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
            
            {/* Top Pill Badge */}
            <div className="badge badge-teal" style={{ marginBottom: '1.5rem', padding: '0.45rem 1.15rem' }}>
              <Sparkles size={16} /> Seu caminho para uma produção acadêmica organizada
            </div>

            {/* H1 Main Heading */}
            <h1 
              style={{ 
                fontSize: 'clamp(2.2rem, 5vw, 3.6rem)', 
                color: '#ffffff', 
                fontWeight: 800, 
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: '1.5rem'
              }}
            >
              Encontre o melhor caminho para organizar seu <span style={{ background: 'linear-gradient(135deg, #38bdf8, #60a5fa)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>trabalho acadêmico.</span>
            </h1>

            {/* Subtitle */}
            <p 
              style={{ 
                fontSize: 'clamp(1.05rem, 2vw, 1.25rem)', 
                color: '#cbd5e1', 
                lineHeight: 1.6,
                marginBottom: '2.5rem',
                maxWidth: '820px',
                margin: '0 auto 2.5rem auto'
              }}
            >
              Normalização ABNT, consultoria acadêmica, pesquisa, referências e organização de trabalhos para estudantes que querem apresentar seus trabalhos com mais segurança.
            </p>

            {/* Action Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '1rem' }}>
              <Link href="/contato" className="btn btn-primary" style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}>
                Solicitar orçamento <ArrowRight size={18} />
              </Link>
              <Link href="#servicos" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.05rem', backgroundColor: 'rgba(255,255,255,0.1)', color: '#ffffff', borderColor: 'rgba(255,255,255,0.2)' }}>
                Conhecer nossos serviços
              </Link>
            </div>

            {/* Key Trust Signals */}
            <div 
              style={{
                marginTop: '4rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.5rem',
                backgroundColor: 'rgba(30, 41, 59, 0.7)',
                backdropFilter: 'blur(10px)',
                padding: '1.5rem',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.1)'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                <ShieldCheck color="#38bdf8" size={24} />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', textAlign: 'left' }}>
                  <strong>Rigores ABNT</strong><br />NBR 14724 / 6023 / 10520
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                <GraduationCap color="#22c55e" size={24} />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', textAlign: 'left' }}>
                  <strong>Expertise na Área</strong><br />Biblioteconomia & Direito
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'center' }}>
                <MessageCircle color="#25d366" size={24} />
                <span style={{ fontSize: '0.9rem', color: '#e2e8f0', textAlign: 'left' }}>
                  <strong>Atendimento Rápido</strong><br />Suporte direto via WhatsApp
                </span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ------------------- SERVIÇOS SECTION ------------------- */}
      <section id="servicos" className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue">Nossos Serviços</div>
            <h2>Encontre a solução para sua necessidade acadêmica</h2>
            <p>Selecione a modalidade de suporte acadêmico perfeita para o momento atual do seu trabalho.</p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '2rem'
            }}
          >
            {SERVICES_DATA.map((srv) => (
              <div key={srv.id} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div 
                    style={{
                      width: '60px',
                      height: '60px',
                      borderRadius: '14px',
                      backgroundColor: '#eff6ff',
                      color: '#1e40af',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      marginBottom: '1.25rem'
                    }}
                  >
                    {iconMap[srv.iconName] || <BookCheck size={32} />}
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.75rem', color: '#0f172a' }}>
                    {srv.title}
                  </h3>

                  <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>
                    {srv.shortDescription}
                  </p>

                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.5rem' }}>
                    {srv.highlights.slice(0, 2).map((item, idx) => (
                      <li key={idx} style={{ fontSize: '0.85rem', color: '#334155', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                        <CheckCircle2 size={15} color="#0d9488" /> {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <Link 
                    href={`/${srv.slug}`} 
                    style={{ color: '#1e40af', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
                  >
                    Saber mais <ArrowRight size={16} />
                  </Link>

                  <Link 
                    href="/contato" 
                    className="btn btn-secondary"
                    style={{ padding: '0.45rem 1rem', fontSize: '0.825rem' }}
                  >
                    Orçamento
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- DIAGNÓSTICO INTERATIVO ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <AbntChecklist />
        </div>
      </section>

      {/* ------------------- POR QUE ROTA ACADÊMICA? ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
        <div className="container">
          <div className="section-header" style={{ color: '#ffffff' }}>
            <div className="badge badge-teal" style={{ marginBottom: '0.75rem' }}>Diferenciais de Percurso</div>
            <h2 style={{ color: '#ffffff' }}>Cada trabalho tem uma rota. Nós ajudamos você a encontrar o caminho.</h2>
            <p style={{ color: '#94a3b8' }}>
              Entenda por que estudantes escolhem a Rota Acadêmica para organizar sua trajetória científica.
            </p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
              gap: '2rem'
            }}
          >
            {/* Card 1 */}
            <div 
              style={{
                backgroundColor: '#1e293b',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #334155'
              }}
            >
              <div style={{ color: '#38bdf8', marginBottom: '1rem' }}>
                <Layers size={36} />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Organização</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Seu trabalho mais estruturado, limpo e organizado gráfica e conceitualmente.
              </p>
            </div>

            {/* Card 2 */}
            <div 
              style={{
                backgroundColor: '#1e293b',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #334155'
              }}
            >
              <div style={{ color: '#22c55e', marginBottom: '1rem' }}>
                <BookOpen size={36} />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Conhecimento Acadêmico</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Experiência real com pesquisa bibliográfica, fontes de informação e normalização documental.
              </p>
            </div>

            {/* Card 3 */}
            <div 
              style={{
                backgroundColor: '#1e293b',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #334155'
              }}
            >
              <div style={{ color: '#f59e0b', marginBottom: '1rem' }}>
                <Users size={36} />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Atendimento Personalizado</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Cada estudante possui prazos e exigências próprias. Analisamos o manual da sua faculdade.
              </p>
            </div>

            {/* Card 4 */}
            <div 
              style={{
                backgroundColor: '#1e293b',
                padding: '2rem',
                borderRadius: '1rem',
                border: '1px solid #334155'
              }}
            >
              <div style={{ color: '#25d366', marginBottom: '1rem' }}>
                <MessageCircle size={36} />
              </div>
              <h3 style={{ color: '#ffffff', fontSize: '1.25rem', marginBottom: '0.75rem' }}>Suporte Direto</h3>
              <p style={{ color: '#cbd5e1', fontSize: '0.925rem', lineHeight: '1.6' }}>
                Comunicação ágil e atendimento personalizado via WhatsApp em todas as fases do seu projeto.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- COMO FUNCIONA (5 ETAPAS) ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">Metodologia de Atendimento</div>
            <h2>Como funciona o seu atendimento</h2>
            <p>Um percurso simples e transparente em 5 etapas até o seu trabalho pronto.</p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              position: 'relative'
            }}
          >
            {/* Step 1 */}
            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#1e40af', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
                01
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Você entra em contato</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Explique sua necessidade pelo formulário ou WhatsApp.</p>
            </div>

            {/* Step 2 */}
            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#0d9488', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
                02
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Analisamos sua demanda</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Entendemos o tipo de trabalho e o manual específico.</p>
            </div>

            {/* Step 3 */}
            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#d97706', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
                03
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Receba seu orçamento</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Apresentamos o escopo, valor e prazo detalhado.</p>
            </div>

            {/* Step 4 */}
            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#2563eb', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
                04
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Realizamos a consultoria</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Executamos a normalização e revisão combinada.</p>
            </div>

            {/* Step 5 */}
            <div className="glass-card" style={{ padding: '1.75rem 1.25rem', textAlign: 'center' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', backgroundColor: '#10b981', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, fontSize: '1.1rem', marginBottom: '1rem' }}>
                05
              </div>
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem', color: '#0f172a' }}>Você segue sua rota</h3>
              <p style={{ fontSize: '0.875rem', color: '#64748b' }}>Receba o material organizado e entregue com segurança.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------- SOBRE O CONSULTOR (SEÇÃO 2 & 11) ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            {/* Text Box */}
            <div>
              <div className="badge badge-blue" style={{ marginBottom: '1rem' }}>Sobre a Marca</div>
              <h2 style={{ fontSize: '2.25rem', marginBottom: '1.25rem', color: '#0f172a' }}>
                Quem está por trás da Rota Acadêmica?
              </h2>
              <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                "A Rota Acadêmica nasceu da experiência acadêmica e do interesse pela organização da informação, pesquisa e produção científica.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '1.25rem' }}>
                O responsável pela marca está concluindo o curso de <strong>Biblioteconomia e Documentação</strong> (com formação prevista para <strong>2026.2</strong>) e também cursa <strong>Direito</strong>, atualmente no <strong>3º semestre</strong>.
              </p>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: '1.7', marginBottom: '1.5rem' }}>
                A formação em Biblioteconomia proporciona contato direto com organização da informação, pesquisa bibliográfica, fontes de informação, referências e normalização acadêmica. A Rota Acadêmica tem como propósito tornar o percurso acadêmico mais organizado, compreensível e seguro para estudantes."
              </p>

              <Link href="/sobre" className="btn btn-primary">
                Saiba mais sobre a nossa atuação <ArrowRight size={18} />
              </Link>
            </div>

            {/* Academic Credential Cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              
              <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', borderLeft: '5px solid #1e40af' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <Award color="#1e40af" size={24} />
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a' }}>Biblioteconomia e Documentação</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  Último semestre — Formação prevista para <strong>2026.2</strong>.<br />
                  Diferencial direto em organização da informação, pesquisa em bases científicas e normas ABNT.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', borderLeft: '5px solid #0d9488' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <BookOpen color="#0d9488" size={24} />
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a' }}>Direito</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  Em andamento — <strong>3º semestre</strong>.<br />
                  Formação acadêmica complementar fortalecendo a precisão na escrita e estruturação lógica.
                </p>
              </div>

              <div style={{ backgroundColor: '#f8fafc', padding: '1.5rem', borderRadius: '1rem', border: '1px solid var(--border-light)', borderLeft: '5px solid #d97706' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                  <FileCheck color="#d97706" size={24} />
                  <h3 style={{ fontSize: '1.15rem', color: '#0f172a' }}>Prática Acadêmica</h3>
                </div>
                <p style={{ fontSize: '0.9rem', color: '#64748b' }}>
                  Experiência com projetos de pesquisa, normalização ABNT, citações, referências bibliográficas e organização de trabalhos.
                </p>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ------------------- PÚBLICO ALVO ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-teal">Público-Alvo</div>
            <h2>Para quem é a Rota Acadêmica?</h2>
            <p>Nossos serviços são idealizados para estudantes e pesquisadores em diferentes etapas da vida acadêmica.</p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {[
              'Estudantes de graduação',
              'Estudantes preparando TCC',
              'Estudantes de pós-graduação',
              'Alunos elaborando projetos de pesquisa',
              'Estudantes preparando seminários',
              'Pesquisadores iniciantes',
              'Estudantes que precisam adequar trabalhos às normas acadêmicas'
            ].map((target, idx) => (
              <div 
                key={idx}
                style={{
                  backgroundColor: '#ffffff',
                  padding: '1.25rem',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  boxShadow: 'var(--shadow-sm)'
                }}
              >
                <CheckCircle2 size={20} color="#1e40af" />
                <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#1e293b' }}>{target}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------- PREVIEW DO BLOG ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#ffffff' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-blue">Conteúdo Acadêmico</div>
            <h2>Artigos e Guias Educativos</h2>
            <p>Confira nossos guias gratuitos sobre normas ABNT, citações, referências e escrita científica.</p>
          </div>

          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginBottom: '2.5rem'
            }}
          >
            {BLOG_POSTS.slice(0, 3).map((post) => (
              <article key={post.slug} className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '0.75rem' }}>
                    <span className="badge badge-teal" style={{ fontSize: '0.75rem' }}>{post.category}</span>
                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>{post.readTime}</span>
                  </div>
                  <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: '#0f172a', lineHeight: 1.4 }}>
                    <Link href={`/blog/${post.slug}`} style={{ color: '#0f172a' }}>{post.title}</Link>
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: '#64748b', lineHeight: '1.6' }}>{post.excerpt}</p>
                </div>
                <div style={{ marginTop: '1.5rem', paddingTop: '1rem', borderTop: '1px solid #f1f5f9' }}>
                  <Link href={`/blog/${post.slug}`} style={{ color: '#1e40af', fontWeight: 600, fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
                    Ler artigo completo <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <Link href="/blog" className="btn btn-secondary">
              Ver todos os artigos do blog
            </Link>
          </div>
        </div>
      </section>

      {/* ------------------- FAQ SECTION ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#f8fafc' }}>
        <div className="container">
          <div className="section-header">
            <div className="badge badge-gold">Perguntas Frequentes</div>
            <h2>Tire suas dúvidas sobre a Rota Acadêmica</h2>
            <p>Respostas transparentes sobre nossos serviços, prazos e compromisso ético.</p>
          </div>

          <FAQAccordion />
        </div>
      </section>

      {/* ------------------- ORÇAMENTO FINAL ------------------- */}
      <section className="section-padding" style={{ backgroundColor: '#0f172a', color: '#ffffff' }}>
        <div className="container">
          <div 
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
              gap: '3.5rem',
              alignItems: 'center'
            }}
          >
            <div>
              <div className="badge badge-teal" style={{ marginBottom: '1rem' }}>Seu Trabalho Precisa de uma Rota?</div>
              <h2 style={{ fontSize: '2.5rem', color: '#ffffff', marginBottom: '1rem', lineHeight: 1.2 }}>
                Pronto para organizar seu trabalho acadêmico com segurança?
              </h2>
              <p style={{ fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.6', marginBottom: '2rem' }}>
                Conte para nós o que você precisa e receba uma orientação inicial sobre o serviço mais adequado para o seu prazo e instituição.
              </p>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: '#e2e8f0', fontSize: '0.95rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="#38bdf8" /> Orçamento sem compromisso e resposta rápida
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="#38bdf8" /> Análise do manual específico da sua faculdade
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={20} color="#38bdf8" /> Atendimento online em todo o Brasil & Salvador / BA
                </div>
              </div>
            </div>

            <div>
              <BudgetForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
