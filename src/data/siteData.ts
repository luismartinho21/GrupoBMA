export interface ServiceItem {
  id: string;
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Construção Civil' | 'Remodelações' | 'Armazéns & Coberturas';
  location: string;
  area: string;
  duration: string;
  summary: string;
  specs: string[];
  image: string;
}

export const COMPANY_INFO = {
  name: 'Grupo B.M.A & Filhos, Lda.',
  shortName: 'Grupo B.M.A & Filhos',
  heroBadge: 'EXCELÊNCIA EM CONSTRUÇÃO',
  tagline: 'Do projeto à entrega, somos o seu parceiro de confiança na construção.',
  phoneDisplay: '+351 924 868 864',
  phoneHref: 'tel:+351924868864',
  whatsappBase: 'https://wa.me/351924868864',
  email: 'coo@grupobma.pt',
  website: 'www.grupobma.pt',
  instagram: '@grupobma.pt',
  instagramHref: 'https://instagram.com/grupobma.pt',
  address: 'Quinta da Gramela, Edifício Pombal Fashion, Lojas 26-27',
  postalCode: '3100-348 Pombal',
  region: 'Atuação Nacional — Norte a Sul de Portugal',
};

export const METRICS = [
  { value: '+20', label: 'Anos de Experiência', key: 'experience' },
  { value: '+20', label: 'Profissionais', key: 'team' },
  { value: '1000+', label: 'Projetos Concluídos', key: 'projects' },
  { value: '1000+', label: 'Clientes Satisfeitos', key: 'clients' },
  { value: 'Norte a Sul', label: 'Atuação Nacional', key: 'coverage' },
] as const;

export const SERVICES: ServiceItem[] = [
  {
    id: 'construcao-civil',
    badge: 'Chave-na-Mão',
    title: 'Construção Civil',
    subtitle: 'Moradias, Edifícios & Estruturas',
    description:
      'Execução integral de obras de raiz com acompanhamento técnico permanente, desde fundações e estrutura até aos acabamentos finais.',
    highlights: [
      'Construção de moradias unifamiliares e edifícios',
      'Coordenação completa de arquitetura e especialidades',
      'Controlo rigoroso de prazos, materiais e orçamento',
      'Garantia estrutural e assistência pós-obra',
    ],
    image: './images/hero-roof.jpg',
  },
  {
    id: 'remodelacoes',
    badge: 'Interiores & Exteriores',
    title: 'Remodelações Interiores e Exteriores',
    subtitle: 'Habitação, Comércio & Fachadas',
    description:
      'Renovação completa de espaços residenciais e comerciais com soluções modernas, isolamento térmico e acabamentos de alta durabilidade.',
    highlights: [
      'Remodelação total de cozinhas, casas de banho e salas',
      'Isolamento térmico exterior (ETICS / Capoto) e pintura',
      'Substituição de caixilharias, pavimentos e tetos falsos',
      'Instalações elétricas, canalização e climatização',
    ],
    image: './images/service-renovation.jpg',
  },
  {
    id: 'reabilitacao',
    badge: 'Património & Coberturas',
    title: 'Reabilitação de Imóveis e Telhados',
    subtitle: 'Recuperação Estrutural & Coberturas',
    description:
      'Reabilitação profunda de imóveis antigos, substituição de telhados, impermeabilizações e reforço estrutural para valorizar o seu património.',
    highlights: [
      'Substituição de telhados em painel sanduíche ou telha cerâmica',
      'Impermeabilização de coberturas planas, terraços e caleiras',
      'Reforço estrutural e tratamento de humidades',
      'Eficiência energética e conforto térmico todo o ano',
    ],
    image: './images/service-sandwich.jpg',
  },
  {
    id: 'armazens',
    badge: 'Industrial & Logístico',
    title: 'Armazéns e Pavilhões Metálicos',
    subtitle: 'Naves Industriais & Apoio de Obra',
    description:
      'Construção e revestimento de armazéns, pavilhões industriais e apoio de obra com fornecimento de materiais e execução especializada.',
    highlights: [
      'Estruturas metálicas calculadas e montadas à medida',
      'Coberturas e fachadas em painel sanduíche industrial',
      'Apoio de obra, fornecimento de materiais e execução',
      'Rapidez de montagem com máxima segurança em obra',
    ],
    image: './images/project-pavilion.jpg',
  },
];

export const PROJECTS: ProjectItem[] = [
  {
    id: 'moradia-pombal',
    title: 'Moradia Unifamiliar & Cobertura Antracite',
    category: 'Construção Civil',
    location: 'Pombal, Leiria',
    area: '260 m²',
    duration: 'Chave-na-Mão',
    summary:
      'Construção integral com cobertura em painel sanduíche efeito telha antracite, isolamento térmico reforçado e fachada em pedra natural.',
    specs: ['Construção Nova', 'Cobertura Térmica', 'Acabamentos Premium'],
    image: './images/hero-roof.jpg',
  },
  {
    id: 'pavilhao-guia',
    title: 'Armazém Industrial & Escritórios',
    category: 'Armazéns & Coberturas',
    location: 'Zona Industrial da Guia, Leiria',
    area: '1.450 m²',
    duration: '10 Semanas',
    summary:
      'Execução completa de pavilhão metálico com cobertura em painel sanduíche de alta resistência, zona administrativa envidraçada e logradouro.',
    specs: ['Estrutura Metálica', 'Painel Sanduíche', '1.450 m²'],
    image: './images/project-pavilion.jpg',
  },
  {
    id: 'remodelacao-coimbra',
    title: 'Remodelação Interior & Terraço',
    category: 'Remodelações',
    location: 'Coimbra',
    area: '185 m²',
    duration: '8 Semanas',
    summary:
      'Renovação integral de interiores com pavimento em carvalho natural, microcimento, caixilharia minimalista e ligação ao terraço exterior.',
    specs: ['Remodelação Total', 'Caixilharia Térmica', 'Design Contemporâneo'],
    image: './images/service-renovation.jpg',
  },
  {
    id: 'reabilitacao-santarem',
    title: 'Reabilitação de Cobertura & Estrutura',
    category: 'Armazéns & Coberturas',
    location: 'Santarém',
    area: '820 m²',
    duration: '4 Semanas',
    summary:
      'Substituição completa de cobertura antiga por estrutura galvanizada e painel sanduíche isolado, garantindo estanquidade total.',
    specs: ['Estanquidade Total', 'Isolamento Acústico/Térmico', 'Execução Rápida'],
    image: './images/service-sandwich.jpg',
  },
];

export const PROCESS_STEPS = [
  {
    step: '01',
    title: 'Pré-Orçamento & Diagnóstico',
    description:
      'Simule o seu pré-orçamento online ou agende uma visita técnica para avaliarmos o imóvel e as suas necessidades.',
  },
  {
    step: '02',
    title: 'Proposta Detalhada',
    description:
      'Apresentamos um orçamento claro com especificações técnicas, materiais certificados e prazos definidos.',
  },
  {
    step: '03',
    title: 'Apoio de Obra & Execução',
    description:
      'Equipas próprias multidisciplinares no terreno, com fornecimento de materiais e rigor em cada fase.',
  },
  {
    step: '04',
    title: 'Entrega & Garantia',
    description:
      'Do início ao fim da obra, entregamos soluções práticas, seguras e bem executadas com garantia.',
  },
];
