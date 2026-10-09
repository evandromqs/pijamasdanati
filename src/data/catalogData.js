export const BRAND_INFO = {
  name: 'Pijamas da Naty',
  altName: 'Pijamas da Nati',
  tagline: 'Conforto em todas as noites',
  subtitle: 'A história de um abraço em forma de roupa.',
  founder: 'Nataly Greice',
  founderInstagram: '@nathallygreice',
  whatsappNumber: '5511948835934',
  whatsappDisplay: '(11) 94883-5934',
  instagramHandle: '@pijamas_danaty',
  instagramUrl: 'https://www.instagram.com/pijamas_danaty/',
  shopeeUrl: 'https://s.shopee.com.br/AAFJfbMLTu',
  shippingTime: 'Envio em até 3 dias',
  deliveryEstimate: 'Entrega em até 7 dias úteis',
  regionsServed: 'Toda São Paulo (e envios para todo o Brasil via Shopee/Correios)',
  exchangePolicy: 'Trocas somente com defeito de fabricação',
};

export function getWhatsAppUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BRAND_INFO.whatsappNumber}?text=${encoded}`;
}

export const CATEGORIES = [
  { id: 'todos', label: 'Todos os Modelos', count: 8 },
  { id: 'americano-calor', label: 'Americano de Calor', highlight: true },
  { id: 'alca-fina', label: 'Regata Alça Fina', highlight: true },
  { id: 'americano-longo', label: 'Americano Longo & Inverno' },
  { id: 'renda', label: 'Renda & Sofisticação' },
  { id: 'familia', label: 'Mãe & Filha / Família' },
];

const BASE = import.meta.env.BASE_URL;

export const PRODUCTS = [
  {
    id: 'americano-curto-gatinhos',
    name: 'Pijama Americano de Calor — Suede Gatinhos',
    category: 'americano-calor',
    categoryLabel: 'Pijama Americano de Calor',
    badge: '⭐ Destaque #1 • Mais Pedido',
    badgeType: 'berry',
    image: `${BASE}assets/products/pijama-americano-curto-gatinhos.png`,
    secondaryImage: `${BASE}assets/products/clean-gatinhos.png`,
    fabric: 'Tecido Suede Macio e Delicado',
    sizes: ['P', 'M', 'G', 'GG'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Modelagem clássica americana com abertura frontal em botões, viés contrastante e shorts soltinho em Suede ultra macio.',
    highlights: [
      'Abertura frontal funcional por botões (prático e elegante)',
      'Tecido Suede fresco com toque aveludado na pele',
      'Não encolhe, não desbota e não dá bolinhas',
      'Modelagem confortável que valoriza o corpo sem apertar',
    ],
  },
  {
    id: 'regata-alca-fina-lavanda',
    name: 'Pijama Regata de Alça Fina — Suede Lavanda',
    category: 'alca-fina',
    categoryLabel: 'Pijama Regata de Alça Fina',
    badge: '⭐ Destaque #2 • Super Fresquinho',
    badgeType: 'berry',
    image: `${BASE}assets/products/pijama-alca-fina-lavanda.png`,
    fabric: 'Tecido Suede Leve & Macio',
    sizes: ['P', 'M', 'G', 'GG'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Dormir bem nunca foi tão estiloso! Regata de alça fina com acabamento em viés branco, lacinho frontal e shorts confortável.',
    highlights: [
      'Toque leve e macio para noites quentes',
      'Tecido com elasticidade suave que se adapta ao seu corpo',
      'Acabamento delicado em viés contrastante e lacinho',
      'Ótima opção para presentear quem você ama',
    ],
  },
  {
    id: 'regata-alca-fina-minnie',
    name: 'Pijama Regata de Alça Fina — Estampa Minnie',
    category: 'alca-fina',
    categoryLabel: 'Pijama Regata de Alça Fina',
    badge: 'Estampa Exclusiva',
    badgeType: 'pastel',
    image: `${BASE}assets/products/pijama-alca-fina-minnie.png`,
    fabric: 'Tecido Suede Macio e Delicado',
    sizes: ['P', 'M', 'G', 'GG'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Conforto que abraça, estilo que encanta! Alças reguláveis e shorts soltinho com estampa divertida e delicada.',
    highlights: [
      'Alças reguláveis para ajuste perfeito nos ombros e busto',
      'Shorts soltinho com elástico suave que não aperta',
      'Estampa divertida e encantadora de alta definição',
      'Você linda e cuidada até na hora de descansar',
    ],
  },
  {
    id: 'short-doll-ursinhos-lacos',
    name: 'Short Doll Suede — Ursinhos Teddy & Laços Pink',
    category: 'alca-fina',
    categoryLabel: 'Pijama Regata de Alça Fina',
    badge: 'Sucesso entre Clientes',
    badgeType: 'gold',
    image: `${BASE}assets/products/pijama-ursinhos-lacos.png`,
    fabric: 'Tecido Suede Macio e Delicado',
    sizes: ['P', 'M', 'G', 'GG'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Fundo creme suave com estampa romântica de ursinhos e laços pink. Um verdadeiro abraço em forma de pijama!',
    highlights: [
      'Toque ultra macio que acalma os sentidos após um dia longo',
      'Estampa fofa e delicada favorita das clientes',
      'Acompanha embalagem especial cheia de carinho',
      'Excelente caimento e durabilidade',
    ],
  },
  {
    id: 'babydoll-preto-renda',
    name: 'Baby Doll Sofisticado — Preto com Renda Delicada',
    category: 'renda',
    categoryLabel: 'Linha Renda & Sofisticação',
    badge: 'Elegância & Charme',
    badgeType: 'dark',
    image: `${BASE}assets/products/babydoll-preto-renda.png`,
    secondaryImage: `${BASE}assets/products/clean-babydoll-renda.png`,
    fabric: 'Toque Leve + Renda Delicada',
    sizes: ['P', 'M', 'G', 'GG'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Sofisticação e conforto para suas noites. Decote em V e barra do shorts trabalhados em renda delicada com lacinhos de cetim.',
    highlights: [
      'Renda macia e elegante que não incomoda a pele',
      'Alças finas e lacinhos de cetim no busto e cintura',
      'Modelagem que valoriza a autoestima feminina',
      'Ideal para momentos especiais e presentes inesquecíveis',
    ],
  },
  {
    id: 'americano-longo-rosa-bebe',
    name: 'Pijama Americano Longo — Rosa Bebê c/ Viés',
    category: 'americano-longo',
    categoryLabel: 'Americano Longo & Inverno',
    badge: 'Clássico Atemporal',
    badgeType: 'pastel',
    image: `${BASE}assets/products/pijama-americano-longo-rosa.png`,
    fabric: 'Tecido Suede Macio e Confortável',
    sizes: ['P', 'M', 'G', 'GG'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Conforto que abraça, noites que renovam! Conjunto longo de botões com gola clássica e viés contrastante.',
    highlights: [
      'Manga longa e calça comprida com caimento impecável',
      'Abertura total por botões (perfeito também para gestantes/amamentação)',
      'Elegante para ficar em casa, viajar ou receber visitas',
      'Conforto térmico sem pesar no corpo',
    ],
  },
  {
    id: 'kit-mae-filha-americano-azul',
    name: 'Kit Família / Mãe & Filha(o) — Pijama Americano',
    category: 'familia',
    categoryLabel: 'Kit Família / Infantil & Masculino',
    badge: '👨‍👩‍👧 Família & Amor',
    badgeType: 'gold',
    image: `${BASE}assets/products/kit-mae-filha-azul.png`,
    fabric: 'Tecido Suede Macio e Delicado',
    sizes: ['Adulto P ao GG', 'Infantil', 'Masculino'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Conjuntos combinando para mãe, filhos e família! Também atendemos público infantil e masculino com o mesmo padrão de maciez.',
    highlights: [
      'Opções para Mulheres (20+), Infantil e Masculino',
      'Acabamento primoroso com botões e viés colorido',
      'Perfeito para fotos em família, viagens e presentes',
      'Consulte as cores e numerações disponíveis no WhatsApp',
    ],
  },
  {
    id: 'pijama-longo-estampados-inverno',
    name: 'Coleção Pijamas Longos Estampados (Margaridas & Menta)',
    category: 'americano-longo',
    categoryLabel: 'Americano Longo & Inverno',
    badge: 'Aprovado pelas Clientes',
    badgeType: 'pastel',
    image: `${BASE}assets/products/pijama-longo-verde-menta.png`,
    secondaryImage: `${BASE}assets/products/pijama-longo-margaridas.png`,
    fabric: 'Tecido Suede Macio e Delicado',
    sizes: ['P', 'M', 'G', 'GG'],
    priceLabel: 'Verificar no WhatsApp',
    shortDescription:
      'Conjuntos longos estampados que unem aconchego térmico e muito estilo para noites frescas.',
    highlights: [
      'Estampas variadas (Verde Menta, Azul Marinho Margaridas e mais)',
      'Modelagem que alonga e valoriza a silhueta',
      'Toque macio que permanece igual após várias lavagens',
      'Consulte o catálogo atualizado de estampas no WhatsApp',
    ],
  },
];

export const FEEDBACKS = [
  {
    id: 'fb-1',
    clientName: 'Cliente Apaixonada',
    productBought: 'Pijama Suede Gatinhos Roxo',
    quote: 'Obrigado Naty eu amei! Super macio e confortável 💜🥰',
    natyReply: 'Fico feliz que tenha gostado 💜',
    image: `${BASE}assets/feedbacks/feedback-gatinhos.png`,
    productThumb: `${BASE}assets/products/pijama-gatinhos-sacola.png`,
    highlightTag: 'Maciez do Tecido Suede',
  },
  {
    id: 'fb-2',
    clientName: 'Cliente Verificada',
    productBought: 'Conjunto Longo Verde Menta',
    quote: 'Fiquei maravilhosa! ✨',
    natyReply: 'Ficou linda demais! Obrigada pela confiança 🌸',
    image: `${BASE}assets/feedbacks/feedback-verde-menta.png`,
    productThumb: `${BASE}assets/products/pijama-longo-verde-menta.png`,
    highlightTag: 'Caimento & Autoestima',
  },
  {
    id: 'fb-3',
    clientName: 'Dona Denise & Carlos',
    productBought: 'Pedido Feminino + Masculino',
    quote: 'Oi linda recebi os meus adorei! Oi linda boa tarde ficou bom o Carlos gostou 🌸',
    natyReply: 'Ai fico feliz, que gosto 🫶🏼',
    image: `${BASE}assets/feedbacks/feedback-dona-denise.png`,
    highlightTag: 'Para Toda a Família',
  },
  {
    id: 'fb-4',
    clientName: 'Rafaela Santos (@rafaelasantospmu)',
    productBought: 'Short Doll Ursinhos & Laços',
    quote: 'Amei, comprei! @pijamas_danaty 💕',
    natyReply: 'Cuidado em cada pacotinho com papel de seda de corações!',
    image: `${BASE}assets/feedbacks/feedback-ursinhos.png`,
    productThumb: `${BASE}assets/products/pijama-ursinhos-lacos.png`,
    highlightTag: 'Experiência de Unboxing',
  },
  {
    id: 'fb-5',
    clientName: 'Cliente Verificada',
    productBought: 'Pijama Longo Margaridas',
    quote: 'Adorei! Super quentinho e confortável para descansar.',
    natyReply: 'Ver o meu trabalho fazendo parte de momentos especiais é o que me motiva!',
    image: `${BASE}assets/feedbacks/feedback-margaridas.png`,
    productThumb: `${BASE}assets/products/pijama-longo-margaridas.png`,
    highlightTag: 'Conforto Real',
  },
];

export const FAQS = [
  {
    question: 'Qual é o diferencial do tecido Suede da Pijamas da Naty?',
    answer:
      'Nosso carro-chefe é o tecido Suede macio e delicado. Ele possui um toque aveludado único que parece um abraço na pele, oferece excelente conforto térmico (não esquenta excessivamente como tecidos sintéticos comuns), tem caimento leve que se adapta ao corpo sem apertar e alta durabilidade — não encolhe e não desbota nas lavagens.',
  },
  {
    question: 'Como faço para saber os valores e estampas disponíveis?',
    answer:
      'Como nossas estampas são exclusivas e o estoque gira rápido, basta clicar em "Consultar no WhatsApp" em qualquer pijama aqui do site ou adicionar suas peças favoritas na Sacolinha de Interesse. A própria Naty vai te atender rapidamente no WhatsApp (11) 94883-5934 enviando fotos e valores das opções disponíveis no seu tamanho!',
  },
  {
    question: 'Qual é o prazo de envio e entrega?',
    answer:
      'Trabalhamos com envio ágil! Seu pacotinho é preparado com todo carinho e postado em até 3 dias. O prazo estimado de entrega é de até 7 dias úteis. Atendemos toda São Paulo diretamente e também enviamos para todo o Brasil (inclusive pela nossa loja na Shopee).',
  },
  {
    question: 'Quais são as formas de pagamento aceitas?',
    answer:
      'Aceitamos pagamentos via Pix, Cartão de Crédito e Cartão de Débito (no débito, a taxa da operadora fica por conta do comprador). Tudo combinado de forma simples, rápida e transparente direto no atendimento.',
  },
  {
    question: 'Vocês também têm pijamas infantis e masculinos?',
    answer:
      'Sim! Além da nossa coleção principal para mulheres (20+), também atendemos o público infantil, masculino e montamos Kits Família / Mãe e Filha combinando. Basta chamar no WhatsApp informando os tamanhos desejados.',
  },
  {
    question: 'Como funciona a política de trocas?',
    answer:
      'Realizamos trocas somente em caso de defeito de fabricação. Para garantir que seu pijama fique perfeito no seu corpo, a Naty te auxilia na escolha do tamanho ideal durante o atendimento no WhatsApp!',
  },
];
