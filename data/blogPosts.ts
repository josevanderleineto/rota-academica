export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  publishedAt: string;
  author: string;
  authorRole: string;
  keywords: string[];
  content: string; // Markdown or HTML formatted string
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'como-formatar-tcc-abnt',
    title: 'Como Formatar um TCC Conforme as Normas ABNT Atualizadas (Guia Definitivo)',
    excerpt: 'Aprenda os requisitos essenciais de margens, fontes, espaçamento, elementos pré-textuais e paginação exigidos para formatar seu TCC sem erros.',
    category: 'Formatação ABNT',
    readTime: '7 min de leitura',
    publishedAt: '2026-08-10',
    author: 'Equipe Rota Acadêmica',
    authorRole: 'Consultoria & Pesquisa Bibliográfica',
    keywords: ['como formatar tcc abnt', 'formatação abnt tcc', 'normas abnt tcc', 'margens abnt'],
    content: `
      <h2>Introdução à Formatação ABNT para TCC</h2>
      <p>A etapa final de elaboração do Trabalho de Conclusão de Curso (TCC) envolve não apenas a redação e pesquisa rigorosa, mas também a adequação às normas de apresentação acadêmica. A Associação Brasileira de Normas Técnicas (ABNT) estabelece diretrizes que padronizam a produção científica no Brasil.</p>
      
      <p>Neste guia prático preparado pela <strong>Rota Acadêmica</strong>, apresentamos as principais regras de formatação gráfica para que você estruture seu TCC com clareza e segurança.</p>

      <h3>1. Formatação de Margens e Papel (NBR 14724)</h3>
      <p>Para impressão e visualização padrão em folha A4 (cor branca):</p>
      <ul>
        <li><strong>Margem Superior:</strong> 3,0 cm</li>
        <li><strong>Margem Esquerda:</strong> 3,0 cm</li>
        <li><strong>Margem Inferior:</strong> 2,0 cm</li>
        <li><strong>Margem Direita:</strong> 2,0 cm</li>
      </ul>

      <h3>2. Tipografia e Espaçamento</h3>
      <p>Utilize apenas uma fonte em todo o trabalho (Times New Roman ou Arial):</p>
      <ul>
        <li><strong>Tamanho do texto principal:</strong> 12 pt.</li>
        <li><strong>Espaçamento entre linhas:</strong> 1,5 no corpo do texto.</li>
        <li><strong>Espaçamento de citações longas e notas:</strong> Espaço simples (1,0) e tamanho 10 pt.</li>
        <li><strong>Recuo do parágrafo:</strong> 1,25 cm ou 1,5 cm na primeira linha.</li>
      </ul>

      <h3>3. Estrutura Obrigatória do TCC</h3>
      <p>O trabalho é dividido em três blocos fundamentais:</p>

      <h4>Elementos Pré-Textuais</h4>
      <p>Capa, Folha de Rosto, Folha de Aprovação, Resumo (com Palavras-chave em português e inglês/Abstract), Sumário e Listas (figuras, tabelas, siglas).</p>

      <h4>Elementos Textuais</h4>
      <p>Introdução, Desenvolvimento (Revisão da Literatura, Metodologia, Resultados e Discussão) e Conclusão / Considerações Finais.</p>

      <h4>Elementos Pós-Textuais</h4>
      <p>Referências bibliográficas (obrigatório), Apêndices (produzidos pelo autor) e Anexos (documentos de terceiros).</p>

      <h3>4. Regra de Paginação ABNT</h3>
      <p>Todas as folhas do trabalho devem ser contadas a partir da Folha de Rosto, mas a numeração só deve aparecer no canto superior direito a partir da primeira folha do elemento textual (a Introdução).</p>

      <blockquote style="background: #f1f5f9; padding: 1rem; border-left: 4px solid #1e40af; border-radius: 4px; margin: 1.5rem 0;">
        <strong>Dica da Rota Acadêmica:</strong> Sempre consulte o manual de trabalhos acadêmicos da sua faculdade! Muitas instituições possuem diretrizes próprias para capa, logotipo e folha de aprovação.
      </blockquote>
    `
  },
  {
    slug: 'como-fazer-referencias-bibliograficas',
    title: 'Como Fazer Referências Bibliográficas no Padrão ABNT NBR 6023',
    excerpt: 'Entenda como referenciar livros, artigos científicos, sites, monografias e legislação de forma correta e sem inconsistências.',
    category: 'Referências & Citações',
    readTime: '6 min de leitura',
    publishedAt: '2026-08-12',
    author: 'Equipe Rota Acadêmica',
    authorRole: 'Biblioteconomia & Documentação',
    keywords: ['como fazer referências abnt', 'referência bibliográfica livro', 'referência artigo científico abnt', 'nbr 6023'],
    content: `
      <h2>Desmistificando a NBR 6023 da ABNT</h2>
      <p>A lista de referências bibliográficas ao final do trabalho acadêmico é o elemento pós-textual que atesta a credibilidade e o embasamento teórico da sua pesquisa. Ela reúne todos os documentos efetivamente citados no texto.</p>

      <h3>Regras Gerais de Apresentação</h3>
      <ul>
        <li><strong>Alinhamento:</strong> À esquerda (diferente do corpo do texto que é justificado).</li>
        <li><strong>Espaçamento:</strong> Simples (1,0) entre as linhas da mesma referência.</li>
        <li><strong>Separação:</strong> Espaço simples em branco entre uma referência e outra.</li>
        <li><strong>Ordenação:</strong> Alfabética pelo sobrenome do primeiro autor.</li>
      </ul>

      <h3>1. Referência de Livro (Com um Autor)</h3>
      <p><em>Estrutura:</em> SOBRE NOME, Nome. <strong>Título em negrito</strong>: subtítulo sem negrito. Edição. Local: Editora, ano de publicação.</p>
      <p><em>Exemplo:</em> SILVA, Maria Augusta. <strong>Metodologia da Pesquisa Científica</strong>. 2. ed. São Paulo: Atlas, 2023.</p>

      <h3>2. Referência de Artigo em Periódico Científico</h3>
      <p><em>Estrutura:</em> SOBRENOME, Nome. Título do artigo. <strong>Nome da Revista em Negrito</strong>, Local, v. número do volume, n. número do fascículo, p. página inicial-página final, ano.</p>
      <p><em>Exemplo:</em> OLIVEIRA, Lucas; SANTOS, Beatriz. A importância da informação no ensino superior. <strong>Revista Brasileira de Biblioteconomia</strong>, Salvador, v. 14, n. 2, p. 45-60, 2024.</p>

      <h3>3. Referência de Site ou Documento Online</h3>
      <p><em>Estrutura:</em> AUTOR ou ENTIDADE. <strong>Título da página ou artigo</strong>. Ano. Disponível em: &lt;URL&gt;. Acesso em: dia mês ano.</p>
      <p><em>Exemplo:</em> BRASIL. Ministério da Educação. <strong>Diretrizes curriculares do ensino superior</strong>. 2025. Disponível em: &lt;http://portal.mec.gov.br&gt;. Acesso em: 15 ago. 2026.</p>

      <h3>Precisando de ajuda profissional para organizar suas referências?</h3>
      <p>Na Rota Acadêmica, realizamos a checagem cruzada minuciosa entre as citações do texto e sua lista de referências. <a href="/contato" style="color: #1e40af; font-weight: 600;">Solicite um orçamento sem compromisso</a>.</p>
    `
  },
  {
    slug: 'diferenca-citacao-direta-indireta',
    title: 'Diferença entre Citação Direta e Indireta com Exemplos Práticos ABNT (NBR 10520)',
    excerpt: 'Evite o plágio acadêmico e compreenda o uso adequado de citações curtas, citações longas recuadas e paráfrases.',
    category: 'Citações ABNT',
    readTime: '5 min de leitura',
    publishedAt: '2026-08-14',
    author: 'Equipe Rota Acadêmica',
    authorRole: 'Consultoria Acadêmica',
    keywords: ['citação direta e indireta abnt', 'citação longa recuada 4cm', 'nbr 10520 exemplo', 'como citar autor abnt'],
    content: `
      <h2>O que é Citação Acadêmica?</h2>
      <p>Citação é a menção, no texto, de uma informação extraída de outra fonte. Segundo a norma NBR 10520 da ABNT, as citações servem para fundamentar, ilustrar ou confrontar ideias.</p>

      <h3>1. Citação Direta Curta (Até 3 Linhas)</h3>
      <p>É a cópia ipsis litteris (textual) de um trecho da fonte consultada. Quando tem até três linhas, é inserida no próprio parágrafo, entre aspas duplas, seguida pela indicação do autor, ano e página.</p>
      <p><em>Exemplo:</em> Segundo Souza (2022, p. 15), "a organização da informação possibilita a recuperação rápida do conhecimento registrado".</p>

      <h3>2. Citação Direta Longa (Mais de 3 Linhas)</h3>
      <p>Trechos com mais de três linhas extraídos diretamente da fonte devem ser destacados do texto com:</p>
      <ul>
        <li>Recuo de 4 cm a partir da margem esquerda;</li>
        <li>Fonte em tamanho menor (10 pt);</li>
        <li>Espaçamento simples (1,0) entre linhas;</li>
        <li>Sem aspas e com linha em branco antes e depois.</li>
      </ul>

      <h3>3. Citação Indireta (Paráfrase)</h3>
      <p>Ocorre quando você escreve com suas próprias palavras a ideia de um autor. A indicação da página é opcional, mas o sobrenome do autor e o ano são obrigatórios.</p>
      <p><em>Exemplo:</em> Conforme aponta Ferreira (2024), a estruturação adequada de trabalhos acadêmicos proporciona maior fluidez na leitura e credibilidade perante os avaliadores.</p>

      <h3>Evite o Plágio!</h3>
      <p>Qualquer ideia ou dado que não seja de sua autoria precisa obrigatoriamente ser citado. A equipe da Rota Acadêmica revisa suas citações garantindo rigor acadêmico e segurança jurídica ao seu trabalho.</p>
    `
  },
  {
    slug: 'como-estruturar-projeto-de-pesquisa',
    title: 'Como Estruturar um Projeto de Pesquisa Acadêmica do Zero',
    excerpt: 'Passo a passo para definir problema de pesquisa, objetivos geral e específicos, justificativa, metodologia e cronograma.',
    category: 'Projetos de Pesquisa',
    readTime: '8 min de leitura',
    publishedAt: '2026-08-15',
    author: 'Equipe Rota Acadêmica',
    authorRole: 'Metodologia da Pesquisa',
    keywords: ['como fazer projeto de pesquisa', 'estrutura projeto de pesquisa', 'problema de pesquisa objetivo', 'justificativa tcc'],
    content: `
      <h2>O que é um Projeto de Pesquisa?</h2>
      <p>O projeto de pesquisa é o planejamento detalhado de uma investigação acadêmica. Ele responde a quatro perguntas fundamentais: <strong>O que pesquisar? Por que pesquisar? Como pesquisar? Em quanto tempo?</strong></p>

      <h3>Etapas da Estruturação</h3>
      
      <h4>1. Tema e Delimitação</h4>
      <p>O tema é o assunto amplo. A delimitação recorta o foco espacial, temporal ou temático específico da sua investigação.</p>

      <h4>2. Problema de Pesquisa</h4>
      <p>É a pergunta central que seu estudo pretende responder. Deve ser clara, delimitada e passível de solução metodológica.</p>

      <h4>3. Objetivos</h4>
      <ul>
        <li><strong>Objetivo Geral:</strong> O propósito amplo do trabalho (começa sempre com verbo no infinitivo, ex: Analisar, Investigar, Mapear).</li>
        <li><strong>Objetivos Específicos:</strong> As etapas intermediárias necessárias para atingir o objetivo geral.</li>
      </ul>

      <h4>4. Justificativa</h4>
      <p>Apresentação da relevância acadêmica, social e prática do tema escolhido.</p>

      <h4>5. Metodologia</h4>
      <p>Descrição dos procedimentos técnicos (pesquisa bibliográfica, estudo de caso, campo), abordagem (qualitativa/quantitativa) e instrumentos de coleta de dados.</p>

      <h4>6. Cronograma</h4>
      <p>Tabela que organiza temporalmente cada etapa da pesquisa ao longo dos meses.</p>

      <p>Está montando seu projeto de pesquisa ou seleção de pós-graduação? <a href="/projeto-de-pesquisa" style="color: #1e40af; font-weight: 600;">Conheça nossa consultoria para projetos de pesquisa.</a></p>
    `
  },
  {
    slug: 'o-que-e-normalizacao-academica',
    title: 'O que é Normalização Acadêmica e Por que Ela É Fundamental para seu Trabalho?',
    excerpt: 'Descubra a diferença entre formatação simples e normalização científica e entenda como ela evita a rejeição da sua monografia.',
    category: 'Conceitos Acadêmicos',
    readTime: '5 min de leitura',
    publishedAt: '2026-08-16',
    author: 'Equipe Rota Acadêmica',
    authorRole: 'Organização da Informação',
    keywords: ['o que e normalizacao academica', 'diferença entre formatacao e normalizacao', 'importancia da abnt'],
    content: `
      <h2>Compreendendo a Normalização Acadêmica</h2>
      <p>A normalização acadêmica é o processo de aplicação sistemática de padrões e normas técnicas (como as da ABNT ou diretrizes institucionais) na estruturação de documentos científicos. Ela vai muito além de colocar o texto em fonte Arial 12.</p>

      <h3>Por que a Normalização é Indispensável?</h3>
      <ol>
        <li><strong>Padronização da Comunicação Científica:</strong> Permite que pesquisadores de qualquer região leiam e compreendam a estrutura do seu estudo.</li>
        <li><strong>Rigor e Credibilidade:</strong> Um trabalho bem normalizado transmite profissionalismo e respeito à banca examinadora.</li>
        <li><strong>Rastreabilidade de Fontes:</strong> Facilita a consulta das obras originais que fundamentaram a pesquisa.</li>
        <li><strong>Aprovação sem Retrabalho:</strong> Evita que a secretaria do curso ou a biblioteca recuse seu TCC no momento da entrega final.</li>
      </ol>
    `
  }
];
