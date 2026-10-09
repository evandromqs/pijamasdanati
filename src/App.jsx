import React, { useState, useMemo } from 'react';
import {
  Sparkles,
  Heart,
  ShoppingBag,
  MessageCircle,
  Truck,
  CreditCard,
  ShieldCheck,
  CheckCircle2,
  ChevronDown,
  ExternalLink,
  Plus,
  Trash2,
  X,
  Eye,
  Star,
  Gift,
  Send,
  MapPin,
  Clock,
  Menu,
} from 'lucide-react';
import { BrandLogo } from './components/BrandLogo';
import {
  BRAND_INFO,
  CATEGORIES,
  PRODUCTS,
  FEEDBACKS,
  FAQS,
  getWhatsAppUrl,
} from './data/catalogData';

export default function App() {
  const [activeCategory, setActiveCategory] = useState('todos');
  const [selectedSizes, setSelectedSizes] = useState({});
  const [bagItems, setBagItems] = useState([]);
  const [isBagOpen, setIsBagOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState(null);
  const [lightboxImage, setLightboxImage] = useState(null);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Customer checkout preferences to speed up WhatsApp sale
  const [customerName, setCustomerName] = useState('');
  const [customerRegion, setCustomerRegion] = useState('');
  const [paymentPreference, setPaymentPreference] = useState('Pix');

  const filteredProducts = useMemo(() => {
    if (activeCategory === 'todos') return PRODUCTS;
    return PRODUCTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const getSelectedSize = (product) => {
    return selectedSizes[product.id] || product.sizes[1] || product.sizes[0];
  };

  const handleSelectSize = (productId, size) => {
    setSelectedSizes((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToBag = (product) => {
    const size = getSelectedSize(product);
    const key = `${product.id}-${size}`;
    setBagItems((prev) => {
      const existing = prev.find((item) => item.key === key);
      if (existing) {
        return prev.map((item) =>
          item.key === key ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [
        ...prev,
        {
          key,
          id: product.id,
          name: product.name,
          image: product.image,
          size,
          qty: 1,
        },
      ];
    });
    setIsBagOpen(true);
  };

  const handleRemoveFromBag = (key) => {
    setBagItems((prev) => prev.filter((item) => item.key !== key));
  };

  const handleSingleProductWhatsApp = (product) => {
    const size = getSelectedSize(product);
    const msg =
      `Olá Naty! 🌸 Vim pelo site da *Pijamas da Naty* e quero adiantar meu atendimento:\n\n` +
      `🛍️ *Modelo:* ${product.name}\n` +
      `📏 *Tamanho de interesse:* ${size}\n\n` +
      `Poderia me informar as estampas disponíveis e o valor?`;
    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const handleSendBagToWhatsApp = () => {
    if (bagItems.length === 0) return;
    const itemsLines = bagItems
      .map(
        (item, idx) =>
          `${idx + 1}. *${item.name}* — Tam: *${item.size}* (${item.qty}x)`
      )
      .join('\n');

    let msg =
      `Olá Naty! 🌸 Montei minha sacolinha no site da *Pijamas da Naty* para adiantar meu pedido:\n\n` +
      `🛍️ *Peças escolhidas:*\n${itemsLines}\n\n` +
      `💳 *Forma de pagamento preferida:* ${paymentPreference}\n`;

    if (customerName.trim()) {
      msg += `👩 *Meu nome:* ${customerName.trim()}\n`;
    }
    if (customerRegion.trim()) {
      msg += `📍 *Região/Bairro (SP ou CEP):* ${customerRegion.trim()}\n`;
    }

    msg += `\nPode confirmar para mim a disponibilidade e os valores? 💜`;
    window.open(getWhatsAppUrl(msg), '_blank', 'noopener,noreferrer');
  };

  const totalBagCount = bagItems.reduce((acc, item) => acc + item.qty, 0);

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFBFC] text-[#4A4042] text-[18px] pb-24 sm:pb-0">
      {/* 1. TOP ANNOUNCEMENT BAR */}
      <div className="bg-gradient-to-r from-[#921644] via-[#A5335E] to-[#921644] text-white text-[18px] py-3 px-4 text-center font-medium">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5">
          <span className="inline-flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#FEE1DD] shrink-0" />
            <span>Tecido Suede Macio • Envio em até 3 dias</span>
          </span>
          <span className="hidden lg:inline text-white/40">•</span>
          <span className="hidden lg:inline-flex items-center gap-2">
            <MapPin className="w-5 h-5 text-[#FEE1DD] shrink-0" />
            <span>Atendemos Toda São Paulo + Loja Shopee</span>
          </span>
        </div>
      </div>

      {/* 2. STICKY HEADER */}
      <header className="sticky top-0 z-40 bg-[#FFFBFC]/95 backdrop-blur-md border-b border-[#E4D6D9]/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[78px] py-2.5 flex items-center justify-between gap-3">
          <a href="#" className="focus:outline-none">
            <BrandLogo size="sm" showText={true} showTagline={false} />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 text-[18px] font-medium text-[#695A59]">
            <a
              href="#catalogo"
              className="hover:text-[#A5335E] transition-colors"
            >
              Catálogo
            </a>
            <a
              href="#diferenciais"
              className="hover:text-[#A5335E] transition-colors"
            >
              Tecido Suede
            </a>
            <a
              href="#historia"
              className="hover:text-[#A5335E] transition-colors"
            >
              Nossa História
            </a>
            <a
              href="#feedbacks"
              className="hover:text-[#A5335E] transition-colors"
            >
              Clientes
            </a>
            <a
              href="#duvidas"
              className="hover:text-[#A5335E] transition-colors"
            >
              Dúvidas
            </a>
          </nav>

          {/* Header Actions */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => setIsBagOpen(true)}
              className="relative inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-full bg-[#FEE1DD]/80 hover:bg-[#FAD1CD] text-[#921644] text-[18px] font-semibold transition-all cursor-pointer border border-[#CAA79B]/50"
              title="Abrir Minha Sacolinha de Interesse"
            >
              <ShoppingBag className="w-5 h-5 shrink-0" />
              <span className="hidden md:inline">Sacolinha</span>
              <span className="inline-flex items-center justify-center min-w-[28px] h-7 px-2 rounded-full bg-[#A5335E] text-white text-[18px] font-bold">
                {totalBagCount}
              </span>
            </button>

            <a
              href={getWhatsAppUrl(
                'Olá Naty! 🌸 Vim pelo site da Pijamas da Naty e gostaria de ver o catálogo e valores disponíveis!'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 px-5 py-2.5 min-h-[48px] rounded-full bg-[#A5335E] hover:bg-[#921644] text-white text-[18px] font-semibold shadow-sm transition-all"
            >
              <MessageCircle className="w-5 h-5 shrink-0" />
              <span>WhatsApp</span>
            </a>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-3 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full text-[#695A59] bg-[#FBF5F2] hover:bg-[#FEE1DD]/60 border border-[#E4D6D9]"
              aria-label="Abrir menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#FFFBFC] border-b border-[#E4D6D9] px-4 pt-3 pb-6 space-y-2 shadow-lg">
            <a
              href="#catalogo"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3.5 px-4 rounded-2xl hover:bg-[#FEE1DD]/40 font-semibold text-[18px] text-[#695A59]"
            >
              🛍️ Catálogo de Pijamas
            </a>
            <a
              href="#diferenciais"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3.5 px-4 rounded-2xl hover:bg-[#FEE1DD]/40 font-semibold text-[18px] text-[#695A59]"
            >
              ✨ Diferenciais do Tecido Suede
            </a>
            <a
              href="#historia"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3.5 px-4 rounded-2xl hover:bg-[#FEE1DD]/40 font-semibold text-[18px] text-[#695A59]"
            >
              🌸 Onde Tudo Começou (Sobre a Naty)
            </a>
            <a
              href="#feedbacks"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3.5 px-4 rounded-2xl hover:bg-[#FEE1DD]/40 font-semibold text-[18px] text-[#695A59]"
            >
              💜 Depoimentos & Clientes
            </a>
            <a
              href="#duvidas"
              onClick={() => setMobileMenuOpen(false)}
              className="block py-3.5 px-4 rounded-2xl hover:bg-[#FEE1DD]/40 font-semibold text-[18px] text-[#695A59]"
            >
              📦 Pagamentos, Envios e FAQ
            </a>
            <div className="pt-3">
              <a
                href={getWhatsAppUrl(
                  'Olá Naty! 🌸 Vim pelo site e gostaria de ver os pijamas disponíveis!'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-5 rounded-full bg-[#A5335E] text-white font-semibold text-center text-[18px] flex items-center justify-center gap-2.5 shadow-md"
              >
                <MessageCircle className="w-5 h-5 shrink-0" />
                <span>WhatsApp {BRAND_INFO.whatsappDisplay}</span>
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="flex-1">
        {/* 3. HERO SECTION */}
        <section className="relative brand-ambient-glow overflow-hidden pt-8 pb-14 sm:py-20 border-b border-[#E4D6D9]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left Column: Brand Promise & CTAs */}
              <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
                <h1 className="font-serif-brand font-bold text-[36px] sm:text-5xl lg:text-6xl text-[#695A59] leading-[1.12] tracking-tight">
                  O abraço em forma de{' '}
                  <span className="text-[#A5335E]">pijama</span> que suas
                  noites merecem.
                </h1>

                <p className="text-[18px] sm:text-xl text-[#4A4042]/95 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
                  Sinta a delicadeza do nosso{' '}
                  <strong className="text-[#921644] font-semibold">
                    Tecido Suede Ultra Macio
                  </strong>
                  . Peças pensadas para valorizar o seu corpo sem apertar,
                  trazendo conforto térmico, personalidade e autoestima para o
                  seu momento sagrado de descanso.
                </p>

                {/* Primary Hero CTAs */}
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 pt-2">
                  <a
                    href="#catalogo"
                    className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-[#A5335E] hover:bg-[#921644] text-white font-semibold text-[18px] shadow-md hover:shadow-lg transition-all"
                  >
                    <ShoppingBag className="w-5 h-5 shrink-0" />
                    <span>Ver Catálogo de Pijamas</span>
                  </a>

                  <a
                    href={getWhatsAppUrl(
                      'Olá Naty! 🌸 Vim pelo site e quero conhecer as opções de pijamas disponíveis!'
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto min-h-[56px] inline-flex items-center justify-center gap-3 px-7 py-4 rounded-full bg-white hover:bg-[#FEE1DD]/50 text-[#921644] border-2 border-[#CAA79B] font-semibold text-[18px] transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0" />
                    <span>Falar com a Naty</span>
                  </a>
                </div>

                {/* Quick Highlights List */}
                <div className="pt-3 flex flex-col sm:flex-row flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-6 text-[18px] text-[#695A59]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A5335E] shrink-0" />
                    <span>Feminino 20+, Infantil & Masculino</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A5335E] shrink-0" />
                    <span>Não encolhe e não desbota</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#A5335E] shrink-0" />
                    <span>Pix e Cartão</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Visual Showcase (Mobile-Responsive) */}
              <div className="lg:col-span-5 relative">
                <div className="relative mx-auto max-w-lg lg:max-w-none space-y-4">
                  {/* Decorative Soft Circle Behind */}
                  <div className="absolute -inset-4 rounded-[36px] bg-gradient-to-tr from-[#FEE1DD] via-[#FAD1CD]/50 to-transparent blur-xl -z-10" />

                  {/* Main Featured Image Card */}
                  <div className="relative rounded-3xl overflow-hidden border-2 border-white shadow-xl bg-[#FBF5F2]">
                    <img
                      src={`${import.meta.env.BASE_URL}assets/products/pijama-americano-longo-rosa.png`}
                      alt="Nataly Greice vestindo Pijama Americano Rosa Pijamas da Naty"
                      className="w-full h-[380px] sm:h-[420px] object-cover object-top"
                    />
                    <div className="p-4 bg-white/95 backdrop-blur-sm border-t border-[#E4D6D9]">
                      <p className="text-[18px] font-bold text-[#A5335E]">
                        ✨ Conforto que Abraça
                      </p>
                      <p className="text-[18px] font-medium text-[#695A59]">
                        Pijama Americano & Short Doll em Suede
                      </p>
                    </div>
                  </div>

                  {/* Two Secondary Product Previews */}
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md bg-[#FBF5F2]">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/products/pijama-americano-curto-gatinhos.png`}
                        alt="Pijama Americano Suede Gatinhos"
                        className="w-full h-44 sm:h-48 object-cover"
                      />
                    </div>
                    <div className="rounded-2xl overflow-hidden border-2 border-white shadow-md bg-[#FBF5F2]">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/products/kit-mae-filha-azul.png`}
                        alt="Kit Mãe e Filha Pijama Americano Azul"
                        className="w-full h-44 sm:h-48 object-cover"
                      />
                    </div>
                  </div>

                  {/* Official Logo & Social Proof Seal */}
                  <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 border border-[#E4D6D9] card-soft-shadow flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
                    <div className="flex flex-col sm:flex-row items-center gap-3.5">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/brand/logo-circle.png`}
                        alt="Selo Pijamas da Naty"
                        className="w-16 h-16 rounded-full border border-[#CAA79B] shrink-0"
                      />
                      <div>
                        <div className="flex items-center justify-center sm:justify-start gap-1 text-amber-500">
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                          <Star className="w-5 h-5 fill-current" />
                        </div>
                        <p className="text-[18px] font-bold text-[#695A59] mt-1">
                          100% Elogiado pelas Clientes
                        </p>
                        <p className="text-[18px] text-[#4A4042]">
                          &ldquo;Super macio e confortável 💜🥰&rdquo;
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. TRUST BAR / OPERATIONAL PILLARS */}
        <section
          id="diferenciais"
          className="py-12 bg-[#FBF5F2] border-b border-[#E4D6D9]/70"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              <div className="bg-white rounded-3xl p-6 border border-[#E4D6D9]/80 card-soft-shadow flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEE1DD] text-[#A5335E] flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h3 className="font-serif-brand font-bold text-[24px] text-[#695A59]">
                  Tecido Suede Delicado
                </h3>
                <p className="text-[18px] text-[#4A4042]/90 leading-relaxed">
                  Toque ultra macio que acalma a pele, não pinica, não encolhe e
                  mantém as cores vivas.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#E4D6D9]/80 card-soft-shadow flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEE1DD] text-[#A5335E] flex items-center justify-center shrink-0">
                  <Truck className="w-6 h-6" />
                </div>
                <h3 className="font-serif-brand font-bold text-[24px] text-[#695A59]">
                  Envio em até 3 Dias
                </h3>
                <p className="text-[18px] text-[#4A4042]/90 leading-relaxed">
                  Entrega rápida em até 7 dias úteis. Atendemos toda São Paulo e
                  enviamos para todo o Brasil.
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#E4D6D9]/80 card-soft-shadow flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEE1DD] text-[#A5335E] flex items-center justify-center shrink-0">
                  <CreditCard className="w-6 h-6" />
                </div>
                <h3 className="font-serif-brand font-bold text-[24px] text-[#695A59]">
                  Pagamento Facilitado
                </h3>
                <p className="text-[18px] text-[#4A4042]/90 leading-relaxed">
                  Aceitamos Pix, Cartão de Crédito e Cartão de Débito (taxa da
                  operadora pelo comprador).
                </p>
              </div>

              <div className="bg-white rounded-3xl p-6 border border-[#E4D6D9]/80 card-soft-shadow flex flex-col gap-3">
                <div className="w-12 h-12 rounded-2xl bg-[#FEE1DD] text-[#A5335E] flex items-center justify-center shrink-0">
                  <Gift className="w-6 h-6" />
                </div>
                <h3 className="font-serif-brand font-bold text-[24px] text-[#695A59]">
                  Embalagem Afetiva
                </h3>
                <p className="text-[18px] text-[#4A4042]/90 leading-relaxed">
                  Cada pedido vai em sacolinha especial com papel de seda de
                  corações. Perfeito para presentear!
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. INTERACTIVE PRODUCT CATALOG (MAIN OBJECTIVE: ADIANTAR A VENDA) */}
        <section id="catalogo" className="py-14 sm:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
              <div className="w-14 h-0.5 bg-[#CAA79B] mx-auto mb-2" />
              <p className="text-[18px] uppercase tracking-widest font-semibold text-[#A5335E]">
                Catálogo Oficial • Pronta Entrega
              </p>
              <h2 className="font-serif-brand font-bold text-[34px] sm:text-5xl text-[#695A59] leading-tight">
                Escolha seu Pijama e Adiante seu Pedido
              </h2>
              <p className="text-[18px] text-[#4A4042]/90 leading-relaxed">
                Toque no seu tamanho abaixo de cada modelo para consultar as
                estampas e valores direto no WhatsApp da Naty, ou adicione na
                sua{' '}
                <button
                  onClick={() => setIsBagOpen(true)}
                  className="text-[#A5335E] font-bold underline cursor-pointer text-[18px]"
                >
                  Sacolinha de Interesse ({totalBagCount})
                </button>
                .
              </p>
            </div>

            {/* Category Filter Pills (Mobile-Friendly Wrap / Scroll) */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              {CATEGORIES.map((cat) => {
                const isActive = activeCategory === cat.id;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`px-5 py-3 min-h-[50px] rounded-full text-[18px] font-semibold transition-all cursor-pointer flex items-center gap-2 ${
                      isActive
                        ? 'bg-[#A5335E] text-white shadow-md'
                        : 'bg-[#FBF5F2] hover:bg-[#FEE1DD]/70 text-[#695A59] border border-[#E4D6D9]'
                    }`}
                  >
                    {cat.highlight && (
                      <Sparkles
                        className={`w-5 h-5 shrink-0 ${
                          isActive ? 'text-[#FEE1DD]' : 'text-[#A5335E]'
                        }`}
                      />
                    )}
                    <span>{cat.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Product Grid (1 col mobile, 2 cols tablet, 3 cols desktop for comfortable 18px text) */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {filteredProducts.map((product) => {
                const currentSize = getSelectedSize(product);

                return (
                  <div
                    key={product.id}
                    className="group bg-white rounded-3xl border border-[#E4D6D9] overflow-hidden flex flex-col card-soft-shadow card-soft-shadow-hover"
                  >
                    {/* Product Image Area */}
                    <div className="relative aspect-[4/5] bg-[#FBF5F2] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />

                      {/* Top Badge */}
                      <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between gap-2 pointer-events-none">
                        <span
                          className={`px-4 py-1.5 rounded-full text-[18px] font-bold shadow-sm ${
                            product.badgeType === 'berry'
                              ? 'bg-[#A5335E] text-white'
                              : product.badgeType === 'dark'
                              ? 'bg-[#322D33] text-white'
                              : product.badgeType === 'gold'
                              ? 'bg-[#FFF8F6] text-[#921644] border border-[#CAA79B]'
                              : 'bg-[#FEE1DD]/95 text-[#921644]'
                          }`}
                        >
                          {product.badge}
                        </span>
                      </div>

                      {/* Quick View Button Overlay */}
                      <button
                        onClick={() => setQuickViewProduct(product)}
                        className="absolute bottom-3.5 right-3.5 w-12 h-12 rounded-full bg-white/95 hover:bg-white text-[#695A59] hover:text-[#A5335E] shadow-md flex items-center justify-center transition-all cursor-pointer"
                        title="Ver detalhes da peça"
                        aria-label="Ver detalhes da peça"
                      >
                        <Eye className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Product Info Body */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                      <div className="space-y-2.5">
                        <p className="text-[18px] font-semibold text-[#A05F66]">
                          {product.categoryLabel}
                        </p>

                        <h3
                          onClick={() => setQuickViewProduct(product)}
                          className="font-serif-brand font-bold text-[26px] text-[#695A59] group-hover:text-[#A5335E] transition-colors cursor-pointer leading-snug"
                        >
                          {product.name}
                        </h3>

                        <p className="text-[18px] text-[#4A4042]/90 leading-relaxed">
                          {product.shortDescription}
                        </p>
                      </div>

                      <div className="space-y-4 pt-4 border-t border-[#E4D6D9]/70">
                        {/* Fabric Info */}
                        <div className="flex flex-wrap items-center justify-between gap-2">
                          <span className="text-[18px] text-[#8C7A7B] font-medium">
                            Tecido:
                          </span>
                          <span className="text-[18px] font-semibold text-[#695A59] bg-[#FBF5F2] px-3.5 py-1 rounded-full border border-[#E4D6D9]">
                            {product.fabric}
                          </span>
                        </div>

                        {/* Interactive Size Selector */}
                        <div className="space-y-2">
                          <div className="flex flex-wrap items-center justify-between gap-2">
                            <span className="text-[18px] text-[#8C7A7B] font-medium">
                              Escolha o Tamanho:
                            </span>
                            <span className="text-[18px] font-bold text-[#A5335E]">
                              {product.priceLabel}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {product.sizes.map((size) => {
                              const active = currentSize === size;
                              return (
                                <button
                                  key={size}
                                  type="button"
                                  onClick={() =>
                                    handleSelectSize(product.id, size)
                                  }
                                  className={`min-w-[52px] min-h-[48px] px-4 py-2 rounded-xl text-[18px] font-bold transition-all cursor-pointer ${
                                    active
                                      ? 'bg-[#A5335E] text-white shadow-sm'
                                      : 'bg-[#FBF5F2] hover:bg-[#FEE1DD]/60 text-[#695A59] border border-[#E4D6D9]'
                                  }`}
                                >
                                  {size}
                                </button>
                              );
                            })}
                          </div>
                        </div>

                        {/* Full-Width Stacked Mobile-Friendly Action Buttons */}
                        <div className="flex flex-col gap-2.5 pt-2">
                          <button
                            type="button"
                            onClick={() => handleSingleProductWhatsApp(product)}
                            className="w-full min-h-[54px] py-3.5 px-4 rounded-2xl bg-[#A5335E] hover:bg-[#921644] text-white font-semibold text-[18px] flex items-center justify-center gap-2.5 shadow-sm transition-all cursor-pointer"
                          >
                            <MessageCircle className="w-5 h-5 shrink-0" />
                            <span>Verificar no WhatsApp</span>
                          </button>

                          <button
                            type="button"
                            onClick={() => handleAddToBag(product)}
                            className="w-full min-h-[50px] py-3 px-4 rounded-2xl bg-[#FEE1DD] hover:bg-[#FAD1CD] text-[#921644] font-semibold text-[18px] flex items-center justify-center gap-2 transition-all cursor-pointer"
                          >
                            <Plus className="w-5 h-5 shrink-0" />
                            <span>Adicionar à Sacolinha</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Custom Catalog Banner: Infantil, Masculino & Shopee */}
            <div className="mt-12 rounded-3xl bg-gradient-to-r from-[#FEE1DD] via-[#FBF5F2] to-[#FEE1DD] p-6 sm:p-10 border border-[#CAA79B]/50 flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="space-y-3 text-center lg:text-left max-w-2xl">
                <p className="text-[18px] font-bold text-[#921644] uppercase tracking-wider">
                  Atendimento para Toda a Família
                </p>
                <h3 className="font-serif-brand font-bold text-[28px] sm:text-4xl text-[#695A59] leading-tight">
                  Procurando numeração específica, linha Masculina, Infantil ou
                  compra via Shopee?
                </h3>
                <p className="text-[18px] text-[#4A4042]/90 leading-relaxed">
                  A Naty envia fotos reais das estampas disponíveis no seu
                  tamanho agora mesmo pelo WhatsApp, ou você pode conferir nossa
                  loja oficial na Shopee!
                </p>
              </div>
              <div className="w-full lg:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 shrink-0">
                <a
                  href={getWhatsAppUrl(
                    'Olá Naty! 🌸 Gostaria de ver todas as estampas disponíveis no meu tamanho!'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[54px] px-6 py-3.5 rounded-full bg-[#A5335E] hover:bg-[#921644] text-white font-semibold text-[18px] inline-flex items-center justify-center gap-2.5 shadow-sm transition-all"
                >
                  <MessageCircle className="w-5 h-5 shrink-0" />
                  <span>Ver Estampas no WhatsApp</span>
                </a>
                <a
                  href={BRAND_INFO.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[54px] px-6 py-3.5 rounded-full bg-white hover:bg-[#FFFBFC] text-[#695A59] border-2 border-[#CAA79B] font-semibold text-[18px] inline-flex items-center justify-center gap-2.5 transition-all"
                >
                  <span>Visitar Loja Shopee</span>
                  <ExternalLink className="w-5 h-5 text-[#A5335E] shrink-0" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* 6. BRAND STORYTELLING SECTION ("ONDE TUDO COMEÇOU") */}
        <section
          id="historia"
          className="py-16 sm:py-24 bg-[#FBF5F2] border-y border-[#E4D6D9]/80 relative overflow-hidden"
        >
          <div className="w-72 h-72 rounded-full bg-[#FAD1CD]/40 blur-3xl absolute -top-12 -right-12 pointer-events-none" />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
            {/* Slide 1 Header: Onde Tudo Começou */}
            <div className="text-center max-w-xl mx-auto space-y-3">
              <div className="w-16 h-[2px] bg-[#CAA79B] mx-auto mb-3" />
              <h2 className="font-serif-brand font-bold text-[36px] sm:text-5xl text-[#695A59]">
                Onde Tudo Começou
              </h2>
              <p className="text-[18px] sm:text-xl text-[#8C7A7B] font-medium">
                A história de um abraço em forma de roupa.
              </p>
            </div>

            {/* Slide 2: Uma Paixão de Menina + Founder Photo */}
            <div className="bg-[#FFFBFC] rounded-3xl p-6 sm:p-10 lg:p-12 border border-[#E4D6D9] card-soft-shadow">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
                <div className="lg:col-span-7 space-y-5">
                  <div className="border-b border-[#E4D6D9] pb-3">
                    <h3 className="font-serif-brand font-bold text-[30px] sm:text-4xl text-[#695A59]">
                      Uma Paixão de Menina
                    </h3>
                  </div>

                  <div className="space-y-4 text-[18px] text-[#4A4042]/95 leading-relaxed">
                    <p>
                      Sabe aquele momento do dia em que a gente finalmente chega
                      em casa e veste aquela roupa que parece um abraço? Para
                      mim, esse momento sempre foi sagrado.
                    </p>
                    <p>
                      Desde menina, eu sempre fui apaixonada por pijamas
                      delicados, cheios de personalidade e que trouxessem leveza
                      para o meu descanso.
                    </p>
                  </div>

                  <div className="pt-2 flex items-center gap-3">
                    <div className="w-10 h-[2px] bg-[#A5335E]" />
                    <div>
                      <p className="font-serif-brand font-bold text-[24px] text-[#A5335E]">
                        Nataly Greice
                      </p>
                      <p className="text-[18px] text-[#8C7A7B]">
                        Fundadora da Pijamas da Naty ({BRAND_INFO.instagramHandle})
                      </p>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex justify-center">
                  <div className="relative">
                    <div className="w-56 h-56 sm:w-64 sm:h-64 rounded-full p-2 bg-gradient-to-tr from-[#CAA79B] via-[#FEE1DD] to-[#A5335E]/40 shadow-lg">
                      <img
                        src={`${import.meta.env.BASE_URL}assets/brand/nataly-greice.png`}
                        alt="Nataly Greice - Fundadora da Pijamas da Naty"
                        className="w-full h-full rounded-full object-cover border-4 border-white"
                      />
                    </div>
                    <div className="mt-3 sm:mt-0 sm:absolute sm:-bottom-3 sm:right-0 bg-white px-4 py-2 rounded-full border border-[#E4D6D9] shadow-sm flex items-center justify-center gap-2">
                      <Heart className="w-5 h-5 text-[#A5335E] fill-current shrink-0" />
                      <span className="text-[18px] font-semibold text-[#695A59]">
                        Feito com amor
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Slide 3: O Pijama como Autocuidado (Personalidade & Conforto Real) */}
            <div className="space-y-6">
              <div className="border-b border-[#E4D6D9] pb-3">
                <h3 className="font-serif-brand font-bold text-[30px] sm:text-4xl text-[#695A59]">
                  O Pijama como Autocuidado
                </h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Card 1: Personalidade */}
                <div className="bg-[#FFFBFC] rounded-3xl p-7 sm:p-8 border border-[#E4D6D9] card-soft-shadow space-y-3">
                  <div className="inline-flex items-center gap-2.5 text-[#A5335E]">
                    <Sparkles className="w-6 h-6 shrink-0" />
                    <h4 className="font-serif-brand font-bold text-[28px] sm:text-3xl text-[#A5335E]">
                      Personalidade
                    </h4>
                  </div>
                  <p className="text-[18px] text-[#4A4042]/95 leading-relaxed">
                    Buscava peças que fossem mais que &ldquo;roupas de
                    dormir&rdquo;. Queria algo que me fizesse sentir linda e
                    cuidada, mesmo na hora de descansar.
                  </p>
                </div>

                {/* Card 2: Conforto Real */}
                <div className="bg-[#FFFBFC] rounded-3xl p-7 sm:p-8 border border-[#E4D6D9] card-soft-shadow space-y-3">
                  <div className="inline-flex items-center gap-2.5 text-[#A5335E]">
                    <Heart className="w-6 h-6 shrink-0" />
                    <h4 className="font-serif-brand font-bold text-[28px] sm:text-3xl text-[#A5335E]">
                      Conforto Real
                    </h4>
                  </div>
                  <p className="text-[18px] text-[#4A4042]/95 leading-relaxed">
                    O foco sempre foi o toque do tecido na pele. Aquela sensação
                    macia que acalma os sentidos após um dia longo.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. UNBOXING & GIFT EXPERIENCE */}
        <section className="py-16 bg-[#FFFBFC] border-b border-[#E4D6D9]/60">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="rounded-3xl overflow-hidden border border-[#E4D6D9] shadow-md bg-[#FBF5F2]">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/products/arte-institucional-presente.png`}
                    alt="Arte Pijamas da Naty Conforto e Estilo"
                    className="w-full h-72 sm:h-64 object-cover"
                  />
                </div>
                <div className="rounded-3xl overflow-hidden border border-[#E4D6D9] shadow-md bg-[#FBF5F2] sm:mt-6">
                  <img
                    src={`${import.meta.env.BASE_URL}assets/products/pijama-ursinhos-lacos.png`}
                    alt="Embalagem Amei Comprei com papel de seda de corações"
                    className="w-full h-72 sm:h-64 object-cover"
                  />
                </div>
              </div>

              <div className="lg:col-span-7 space-y-5">
                <h2 className="font-serif-brand font-bold text-[32px] sm:text-4xl text-[#695A59] leading-tight">
                  Um pacotinho de amor pensado nos mínimos detalhes
                </h2>
                <p className="text-[18px] text-[#4A4042]/95 leading-relaxed">
                  Na <strong>Pijamas da Naty</strong>, acreditamos que o carinho
                  começa antes mesmo de você vestir a peça. Nossos pedidos são
                  embalados em sacolinhas personalizadas (
                  <em>&ldquo;Amei meu pacotinho&rdquo;</em> /{' '}
                  <em>&ldquo;amei COMPREI&rdquo;</em>) com papel de seda
                  estampado de corações, tornando cada compra um presente
                  inesquecível para você ou para alguém especial.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-5 rounded-2xl bg-[#FBF5F2] border border-[#E4D6D9]">
                    <p className="font-bold text-[18px] text-[#A5335E]">
                      1. Escolha no Site
                    </p>
                    <p className="text-[18px] text-[#695A59] mt-1">
                      Selecione seus modelos e tamanhos favoritos no catálogo.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#FBF5F2] border border-[#E4D6D9]">
                    <p className="font-bold text-[18px] text-[#A5335E]">
                      2. WhatsApp Rápido
                    </p>
                    <p className="text-[18px] text-[#695A59] mt-1">
                      Confirme a estampa e pagamento via Pix ou Cartão.
                    </p>
                  </div>
                  <div className="p-5 rounded-2xl bg-[#FBF5F2] border border-[#E4D6D9]">
                    <p className="font-bold text-[18px] text-[#A5335E]">
                      3. Envio em 3 Dias
                    </p>
                    <p className="text-[18px] text-[#695A59] mt-1">
                      Receba em casa em até 7 dias úteis com todo cuidado.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 8. SOCIAL PROOF / REAL CUSTOMER FEEDBACKS */}
        <section id="feedbacks" className="py-16 sm:py-20 bg-[#FBF5F2]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto space-y-3">
              <h2 className="font-serif-brand font-bold text-[34px] sm:text-5xl text-[#695A59] leading-tight">
                Quem Veste Pijamas da Naty, Se Apaixona
              </h2>
              <p className="text-[18px] text-[#A05F66] italic font-medium">
                &ldquo;Ver o meu trabalho fazendo parte de momentos especiais é
                o que me motiva todos os dias! 🛍️ Obrigada pela confiança!
                🌸&rdquo;
              </p>
            </div>

            {/* Feedbacks Grid (1 col mobile, 2 cols tablet, 3 cols desktop for comfortable 18px text) */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEEDBACKS.map((fb) => (
                <div
                  key={fb.id}
                  className="bg-white rounded-3xl border border-[#E4D6D9] overflow-hidden flex flex-col justify-between card-soft-shadow card-soft-shadow-hover"
                >
                  {/* Authentic Story Screenshot Preview */}
                  <div
                    onClick={() => setLightboxImage(fb.image)}
                    className="relative aspect-[3/4] bg-[#FEE1DD]/30 overflow-hidden cursor-pointer group"
                  >
                    <img
                      src={fb.image}
                      alt={`Depoimento ${fb.clientName}`}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute bottom-3 right-3">
                      <span className="px-4 py-2 rounded-full bg-white/95 text-[18px] font-bold text-[#695A59] shadow-md">
                        Ampliar Print
                      </span>
                    </div>
                  </div>

                  {/* Transcribed Quote */}
                  <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                    <div className="space-y-2.5">
                      <span className="inline-block text-[18px] font-bold text-[#A5335E] bg-[#FEE1DD]/80 px-3.5 py-1 rounded-full">
                        {fb.highlightTag}
                      </span>
                      <p className="text-[18px] font-semibold text-[#4A4042] leading-relaxed">
                        &ldquo;{fb.quote}&rdquo;
                      </p>
                    </div>
                    <div className="pt-3 border-t border-[#E4D6D9]/70">
                      <p className="text-[18px] font-bold text-[#695A59]">
                        {fb.clientName}
                      </p>
                      <p className="text-[18px] text-[#8C7A7B]">
                        {fb.productBought}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 9. FAQ, SHIPPING & PAYMENT CONDITIONS */}
        <section id="duvidas" className="py-16 sm:py-20 bg-[#FFFBFC]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center space-y-3 mb-10">
              <p className="text-[18px] uppercase tracking-widest font-semibold text-[#A5335E]">
                Transparência & Confiança
              </p>
              <h2 className="font-serif-brand font-bold text-[34px] sm:text-4xl text-[#695A59]">
                Dúvidas Frequentes, Envios e Pagamentos
              </h2>
              <p className="text-[18px] text-[#4A4042]/85">
                Tudo o que você precisa saber antes de finalizar seu pedido com a
                Naty.
              </p>
            </div>

            <div className="space-y-4">
              {FAQS.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div
                    key={idx}
                    className="rounded-3xl border border-[#E4D6D9] bg-white overflow-hidden card-soft-shadow"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaqIndex(isOpen ? -1 : idx)}
                      className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF5F2]/60 transition-colors"
                    >
                      <span className="font-serif-brand font-bold text-[22px] sm:text-2xl text-[#695A59] leading-snug">
                        {faq.question}
                      </span>
                      <ChevronDown
                        className={`w-6 h-6 text-[#A5335E] shrink-0 transition-transform duration-200 ${
                          isOpen ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-6 pb-6 pt-2 text-[18px] text-[#4A4042]/95 leading-relaxed border-t border-[#E4D6D9]/40">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      {/* 10. FOOTER */}
      <footer className="bg-[#FBF5F2] border-t border-[#E4D6D9] pt-14 pb-12 text-[18px] text-[#695A59]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-10 border-b border-[#E4D6D9]">
            {/* Col 1: Brand Info */}
            <div className="md:col-span-5 space-y-4">
              <BrandLogo size="md" showText={true} showTagline={true} />
              <p className="text-[18px] text-[#4A4042]/90 max-w-md leading-relaxed">
                A história de um abraço em forma de roupa. Pijamas femininos,
                infantis e masculinos em tecido Suede macio e delicado,
                selecionados com amor por <strong>Nataly Greice</strong>.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={BRAND_INFO.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-full bg-white border border-[#E4D6D9] hover:border-[#A5335E] text-[18px] font-semibold text-[#A5335E] transition-colors"
                >
                  <svg
                    className="w-5 h-5 shrink-0"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  <span>{BRAND_INFO.instagramHandle}</span>
                </a>
                <a
                  href={BRAND_INFO.shopeeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 min-h-[48px] rounded-full bg-white border border-[#E4D6D9] hover:border-[#A5335E] text-[18px] font-semibold text-[#695A59] transition-colors"
                >
                  <ShoppingBag className="w-5 h-5 text-[#A5335E] shrink-0" />
                  <span>Loja Shopee</span>
                </a>
              </div>
            </div>

            {/* Col 2: Quick Links */}
            <div className="md:col-span-3 space-y-3">
              <h4 className="font-serif-brand font-bold text-[24px] text-[#695A59]">
                Navegação
              </h4>
              <ul className="space-y-2.5 text-[18px]">
                <li>
                  <a href="#catalogo" className="hover:text-[#A5335E]">
                    Catálogo de Produtos
                  </a>
                </li>
                <li>
                  <a href="#diferenciais" className="hover:text-[#A5335E]">
                    Diferenciais do Suede
                  </a>
                </li>
                <li>
                  <a href="#historia" className="hover:text-[#A5335E]">
                    Onde Tudo Começou
                  </a>
                </li>
                <li>
                  <a href="#feedbacks" className="hover:text-[#A5335E]">
                    Depoimentos de Clientes
                  </a>
                </li>
                <li>
                  <a href="#duvidas" className="hover:text-[#A5335E]">
                    Dúvidas Frequentes
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Direct Contact & Logistics */}
            <div className="md:col-span-4 space-y-3">
              <h4 className="font-serif-brand font-bold text-[24px] text-[#695A59]">
                Atendimento & Envios
              </h4>
              <ul className="space-y-3 text-[18px] text-[#4A4042]/95">
                <li className="flex items-start gap-2.5">
                  <MessageCircle className="w-5 h-5 text-[#A5335E] shrink-0 mt-1" />
                  <span>
                    WhatsApp:{' '}
                    <a
                      href={getWhatsAppUrl(
                        'Olá Naty! Vim pelo site da Pijamas da Naty!'
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-bold text-[#A5335E] hover:underline"
                    >
                      {BRAND_INFO.whatsappDisplay}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock className="w-5 h-5 text-[#A5335E] shrink-0 mt-1" />
                  <span>
                    Postagem em até 3 dias • Entrega em até 7 dias úteis
                  </span>
                </li>
                <li className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-[#A5335E] shrink-0 mt-1" />
                  <span>Região: Toda São Paulo (e Brasil via Shopee)</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-[#A5335E] shrink-0 mt-1" />
                  <span>Política: Trocas somente com defeito</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[18px] text-[#8C7A7B] text-center sm:text-left">
            <p>
              © {new Date().getFullYear()} Pijamas da Naty • Nataly Greice.
            </p>
            <p>Durma bem. Sonhe alto. Vista Pijamas da Naty ✨</p>
          </div>
        </div>
      </footer>

      {/* STICKY MOBILE BOTTOM ACTION BAR (THUMB-FRIENDLY ERGONOMICS) */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#FFFBFC]/95 backdrop-blur-md border-t border-[#E4D6D9] p-3 flex items-center gap-2.5 shadow-2xl">
        <button
          onClick={() => setIsBagOpen(true)}
          className="flex-1 min-h-[54px] px-4 py-3 rounded-2xl bg-[#FEE1DD] text-[#921644] font-bold text-[18px] flex items-center justify-center gap-2 border border-[#CAA79B]/60 cursor-pointer"
        >
          <ShoppingBag className="w-5 h-5 shrink-0" />
          <span>Sacola ({totalBagCount})</span>
        </button>

        <a
          href={getWhatsAppUrl(
            'Olá Naty! 🌸 Vim pelo site e gostaria de ajuda para escolher meu pijama!'
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 min-h-[54px] px-4 py-3 rounded-2xl bg-[#25D366] text-white font-bold text-[18px] flex items-center justify-center gap-2 shadow-md"
        >
          <MessageCircle className="w-5 h-5 fill-current shrink-0" />
          <span>WhatsApp</span>
        </a>
      </div>

      {/* DESKTOP FLOATING WHATSAPP / BAG BUTTON */}
      <div className="hidden sm:flex fixed bottom-5 right-5 z-40 flex-col items-end gap-3">
        {totalBagCount > 0 && (
          <button
            onClick={() => setIsBagOpen(true)}
            className="px-5 py-3.5 rounded-full bg-[#A5335E] hover:bg-[#921644] text-white font-semibold text-[18px] shadow-lg flex items-center gap-2.5 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            <span>Finalizar Sacolinha ({totalBagCount})</span>
          </button>
        )}

        <a
          href={getWhatsAppUrl(
            'Olá Naty! 🌸 Vim pelo site e gostaria de ajuda para escolher meu pijama!'
          )}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-xl flex items-center justify-center transition-transform hover:scale-105"
          title="Chamar no WhatsApp"
        >
          <MessageCircle className="w-8 h-8 fill-current" />
        </a>
      </div>

      {/* SLIDE-OVER DRAWER: MINHA SACOLINHA DE INTERESSE (ADIANTAR A VENDA) */}
      {isBagOpen && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/45 backdrop-blur-xs">
          <div className="w-full max-w-lg bg-[#FFFBFC] h-full shadow-2xl flex flex-col justify-between overflow-hidden">
            {/* Drawer Header */}
            <div className="p-5 bg-[#FEE1DD]/70 border-b border-[#E4D6D9] flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-[#A5335E] shrink-0" />
                <div>
                  <h3 className="font-serif-brand font-bold text-[24px] text-[#695A59] leading-tight">
                    Minha Sacolinha
                  </h3>
                  <p className="text-[18px] text-[#8C7A7B]">
                    Adiante seu pedido para o WhatsApp da Naty
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsBagOpen(false)}
                className="p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-white/80 hover:bg-white text-[#695A59] cursor-pointer"
                aria-label="Fechar sacolinha"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Drawer Body */}
            <div className="p-5 flex-1 overflow-y-auto space-y-5">
              {bagItems.length === 0 ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-[#FEE1DD]/60 text-[#A5335E] flex items-center justify-center mx-auto">
                    <ShoppingBag className="w-8 h-8" />
                  </div>
                  <div className="space-y-2">
                    <p className="font-serif-brand font-bold text-[24px] text-[#695A59]">
                      Sua sacolinha ainda está vazia
                    </p>
                    <p className="text-[18px] text-[#8C7A7B] max-w-sm mx-auto leading-relaxed">
                      Escolha seus pijamas favoritos no catálogo e toque em
                      &ldquo;Adicionar à Sacolinha&rdquo; para consultar vários
                      modelos de uma só vez!
                    </p>
                  </div>
                </div>
              ) : (
                <>
                  <div className="space-y-3">
                    {bagItems.map((item) => (
                      <div
                        key={item.key}
                        className="p-4 rounded-2xl bg-white border border-[#E4D6D9] flex items-center gap-3.5 shadow-2xs"
                      >
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-16 h-20 rounded-xl object-cover shrink-0 bg-[#FBF5F2]"
                        />
                        <div className="flex-1 min-w-0">
                          <p className="font-serif-brand font-bold text-[20px] text-[#695A59] leading-snug">
                            {item.name}
                          </p>
                          <p className="text-[18px] text-[#A5335E] font-semibold mt-1">
                            Tam: {item.size} • Qtd: {item.qty}
                          </p>
                        </div>
                        <button
                          onClick={() => handleRemoveFromBag(item.key)}
                          className="p-3 min-w-[48px] min-h-[48px] flex items-center justify-center text-[#8C7A7B] hover:text-red-600 cursor-pointer"
                          title="Remover item"
                        >
                          <Trash2 className="w-5 h-5" />
                        </button>
                      </div>
                    ))}
                  </div>

                  {/* Quick Pre-Qualification Fields to Speed Up Sale */}
                  <div className="p-5 rounded-2xl bg-[#FBF5F2] border border-[#E4D6D9] space-y-4">
                    <p className="text-[18px] font-bold text-[#A5335E]">
                      Adiantar Dados para Atendimento (Opcional)
                    </p>

                    <div>
                      <label className="block text-[18px] font-medium text-[#695A59] mb-1.5">
                        Seu Nome
                      </label>
                      <input
                        type="text"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        placeholder="Ex: Maria Silva"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4D6D9] text-[18px] focus:outline-none focus:border-[#A5335E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[18px] font-medium text-[#695A59] mb-1.5">
                        Bairro / Cidade (para entrega)
                      </label>
                      <input
                        type="text"
                        value={customerRegion}
                        onChange={(e) => setCustomerRegion(e.target.value)}
                        placeholder="Ex: Tatuapé - São Paulo / SP"
                        className="w-full px-4 py-3 rounded-xl bg-white border border-[#E4D6D9] text-[18px] focus:outline-none focus:border-[#A5335E]"
                      />
                    </div>

                    <div>
                      <label className="block text-[18px] font-medium text-[#695A59] mb-2">
                        Forma de Pagamento Preferida
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                        {['Pix', 'Cartão de Crédito', 'Cartão de Débito'].map(
                          (method) => (
                            <button
                              key={method}
                              type="button"
                              onClick={() => setPaymentPreference(method)}
                              className={`py-3 px-3 rounded-xl text-[18px] font-semibold border cursor-pointer transition-all ${
                                paymentPreference === method
                                  ? 'bg-[#A5335E] text-white border-[#A5335E]'
                                  : 'bg-white text-[#695A59] border-[#E4D6D9]'
                              }`}
                            >
                              {method}
                            </button>
                          )
                        )}
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>

            {/* Drawer Footer */}
            {bagItems.length > 0 && (
              <div className="p-5 bg-white border-t border-[#E4D6D9] space-y-2.5">
                <button
                  onClick={handleSendBagToWhatsApp}
                  className="w-full min-h-[56px] py-4 px-5 rounded-full bg-[#A5335E] hover:bg-[#921644] text-white font-semibold text-[18px] flex items-center justify-center gap-2.5 shadow-md cursor-pointer transition-all"
                >
                  <Send className="w-5 h-5 shrink-0" />
                  <span>Enviar Pedido no WhatsApp</span>
                </button>
                <p className="text-[18px] text-center text-[#8C7A7B]">
                  WhatsApp {BRAND_INFO.whatsappDisplay}
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* PRODUCT QUICK VIEW MODAL */}
      {quickViewProduct && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-xs overflow-y-auto"
          onClick={() => setQuickViewProduct(null)}
        >
          <div
            className="bg-[#FFFBFC] rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-[#E4D6D9] shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 md:grid-cols-12">
              <div className="md:col-span-6 bg-[#FBF5F2] relative">
                <img
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  className="w-full h-80 md:h-full object-cover"
                />
              </div>
              <div className="md:col-span-6 p-6 flex flex-col justify-between space-y-5">
                <div className="space-y-3.5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="text-[18px] font-bold text-[#A5335E] bg-[#FEE1DD] px-3.5 py-1 rounded-full">
                      {quickViewProduct.categoryLabel}
                    </span>
                    <button
                      onClick={() => setQuickViewProduct(null)}
                      className="p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full hover:bg-[#FEE1DD]/50 text-[#695A59] cursor-pointer"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <h3 className="font-serif-brand font-bold text-[26px] text-[#695A59] leading-snug">
                    {quickViewProduct.name}
                  </h3>

                  <p className="text-[18px] text-[#4A4042]/95 leading-relaxed">
                    {quickViewProduct.shortDescription}
                  </p>

                  <ul className="space-y-2 pt-1">
                    {quickViewProduct.highlights.map((h, i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2.5 text-[18px] text-[#4A4042]"
                      >
                        <CheckCircle2 className="w-5 h-5 text-[#A5335E] shrink-0 mt-1" />
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4 pt-4 border-t border-[#E4D6D9]">
                  <div className="space-y-2">
                    <span className="block text-[18px] text-[#8C7A7B] font-medium">
                      Escolha o Tamanho:
                    </span>
                    <div className="flex items-center gap-2 flex-wrap">
                      {quickViewProduct.sizes.map((sz) => (
                        <button
                          key={sz}
                          onClick={() =>
                            handleSelectSize(quickViewProduct.id, sz)
                          }
                          className={`min-w-[52px] min-h-[48px] px-4 py-2 rounded-xl text-[18px] font-bold cursor-pointer ${
                            getSelectedSize(quickViewProduct) === sz
                              ? 'bg-[#A5335E] text-white'
                              : 'bg-[#FBF5F2] text-[#695A59] border border-[#E4D6D9]'
                          }`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  <button
                    onClick={() =>
                      handleSingleProductWhatsApp(quickViewProduct)
                    }
                    className="w-full min-h-[54px] py-3.5 px-5 rounded-full bg-[#A5335E] hover:bg-[#921644] text-white font-semibold text-[18px] flex items-center justify-center gap-2.5 cursor-pointer"
                  >
                    <MessageCircle className="w-5 h-5 shrink-0" />
                    <span>Verificar no WhatsApp</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* LIGHTBOX FOR FEEDBACK PRINTS */}
      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-xs"
          onClick={() => setLightboxImage(null)}
        >
          <div className="relative max-w-sm w-full">
            <button
              onClick={() => setLightboxImage(null)}
              className="absolute -top-12 right-0 p-2.5 min-w-[48px] min-h-[48px] flex items-center justify-center rounded-full bg-white text-[#695A59] cursor-pointer"
            >
              <X className="w-6 h-6" />
            </button>
            <img
              src={lightboxImage}
              alt="Depoimento ampliado"
              className="w-full rounded-2xl shadow-2xl border-2 border-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}
