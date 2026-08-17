export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  iconName: string;
  highlights: string[];
  idealFor: string[];
}

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'normalizacao-abnt',
    slug: 'normalizacao-abnt',
    title: 'Normalização ABNT',
    shortDescription: 'Adequação e organização dos elementos do trabalho acadêmico conforme as normas ABNT vigentes e diretrizes institucionais.',
    fullDescription: 'Serviço minucioso de ajuste estrutural e gráfico de trabalhos acadêmicos, alinhando todos os elementos pré-textuais, textuais e pós-textuais às normas ABNT vigentes (como NBR 14724, NBR 6023, NBR 10520, NBR 6027) e ao manual de estilo específico da sua universidade.',
    iconName: 'BookCheck',
    highlights: [
      'Adequação de elementos pré-textuais, textuais e pós-textuais',
      'Configuração de margens, alinhamentos, espaçamentos e fontes',
      'Estruturação de sumários automáticos e listas (figuras, tabelas, siglas)',
      'Ajustes específicos para o manual da sua faculdade/universidade'
    ],
    idealFor: ['Estudantes de graduação', 'Pós-graduandos', 'Pesquisadores', 'Autores de TCC']
  },
  {
    id: 'formatacao-tcc',
    slug: 'formatacao-tcc',
    title: 'Formatação de TCC',
    shortDescription: 'Organização da apresentação gráfica e estrutura de TCCs, monografias, dissertações e teses para uma entrega impecável.',
    fullDescription: 'Formatação completa da estrutura gráfica do seu Trabalho de Conclusão de Curso (TCC), Monografia ou Artigo Científico. Garantimos que a apresentação visual do seu trabalho reflita a qualidade do seu conteúdo científico.',
    iconName: 'FileSpreadsheet',
    highlights: [
      'Organização visual de capítulos e seções numeradas',
      'Padronização de notas de rodapé, tabelas e quadros',
      'Paginação perfeita (oculta em pré-textuais, visível em textuais)',
      'Revisão do leiaute para submissão à banca examinadora'
    ],
    idealFor: ['Formandos de Graduação', 'Especialização', 'Mestrado e Doutorado']
  },
  {
    id: 'referencias-abnt',
    slug: 'referencias-abnt',
    title: 'Citações e Referências',
    shortDescription: 'Auxílio na organização, padronização e checagem de citações diretas, indiretas e lista de referências bibliográficas.',
    fullDescription: 'Organização rigorosa da lista final de referências (livros, artigos, sites, legislação, teses) e verificação da correspondência exata com as citações no corpo do texto (autor-data ou numérico).',
    iconName: 'Quote',
    highlights: [
      'Cruzamento 100% entre citações no texto e lista de referências',
      'Formatação de citação direta curta (no texto) e longa (recuada 4cm)',
      'Padronização de referências de legislação, jurisprudência e normas técnicas',
      'Eliminação de divergências de datas, nomes de autores e títulos'
    ],
    idealFor: ['Estudantes do Direito e Humanas', 'Artigos para periódicos', 'Pesquisadores']
  },
  {
    id: 'projeto-de-pesquisa',
    slug: 'projeto-de-pesquisa',
    title: 'Projetos de Pesquisa',
    shortDescription: 'Consultoria e orientação técnica para organização e estruturação lógica de projetos de pesquisa acadêmica.',
    fullDescription: 'Suporte metodológico e estrutural na definição clara dos componentes essenciais do seu projeto de pesquisa: tema, problema, hipóteses, objetivos (geral e específicos), justificativa, fundamentação e cronograma.',
    iconName: 'Compass',
    highlights: [
      'Estruturação lógica do problema de pesquisa e objetivos',
      'Organização da justificativa e fundamentação teórica',
      'Orientação para elaboração de metodologia e cronograma',
      'Revisão da coerência acadêmica dos componentes'
    ],
    idealFor: ['Candidatos à Seleção de Mestrado/Doutorado', 'Alunos de Iniciação Científica', 'Pré-TCC']
  },
  {
    id: 'consultoria-academica',
    slug: 'consultoria-academica',
    title: 'Consultoria Acadêmica',
    shortDescription: 'Orientação personalizada para estudantes que precisam compreender como organizar e estruturar sua produção acadêmica.',
    fullDescription: 'Sessões e diagnósticos de apoio para tirar dúvidas metodológicas, definir estratégias de busca bibliográfica em bases científicas e organizar a rotina de escrita acadêmica com autonomia.',
    iconName: 'GraduationCap',
    highlights: [
      'Estratégias de pesquisa bibliográfica e busca de fontes confiáveis',
      'Esclarecimento de dúvidas sobre normas e estrutura',
      'Planos de organização de prazos e fluxo de escrita',
      'Orientação técnica e estruturação metodológica personalizada'
    ],
    idealFor: ['Estudantes com bloqueio na escrita', 'Pesquisadores iniciantes', 'Primeiro TCC']
  },
  {
    id: 'apresentacao-tcc',
    slug: 'apresentacao-tcc',
    title: 'Apresentações Acadêmicas',
    shortDescription: 'Organização visual e roteirização estratégica de slides para bancas de TCC, seminários e congressos.',
    fullDescription: 'Transformação do conteúdo denso do seu TCC ou artigo em uma apresentação visualmente atraente, profissional e síntese clara para encantar a banca examinadora.',
    iconName: 'Presentation',
    highlights: [
      'Criação e formatação visual de slides profissionais',
      'Roteirização do tempo de fala (15 a 20 minutos de banca)',
      'Síntese dos tópicos principais (Problema, Metodologia, Resultados)',
      'Dicas para transmissão de segurança durante a exposição oral'
    ],
    idealFor: ['Defesa de TCC', 'Seminários Acadêmicos', 'Apresentação em Congressos']
  },
  {
    id: 'organizacao-trabalhos',
    slug: 'organizacao-trabalhos',
    title: 'Organização de Trabalhos',
    shortDescription: 'Estruturação de relatórios de estágio, artigos científicos, resumos expandidos e papers acadêmicos.',
    fullDescription: 'Organização e estruturação dos elementos textuais de relatórios acadêmicos, papers de disciplinas e resumos para congressos, garantindo fluidez e legibilidade.',
    iconName: 'Layers',
    highlights: [
      'Estruturação de artigos científicos para submissão',
      'Organização de relatórios de estágio e relatórios técnicos',
      'Adequação de resumos simples e expandidos',
      'Revisão de consistência visual e tópicos exigidos pelo docente'
    ],
    idealFor: ['Alunos de qualquer semestre da Graduação e Pós']
  }
];
