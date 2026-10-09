# 05. Identidade Visual e Inventário de Ativos — Pijamas da Naty

> Guia estético extraído diretamente da logotipo oficial, dos slides de apresentação da marca e das postagens do Instagram presentes na pasta do projeto.

---

## 1. Paleta de Cores Oficial (Extraída da Logo e Lâminas da Marca)

No briefing consta a instrução: *"Cores Principais: incluir da imagem logo"*. Abaixo estão os códigos HEX exatos amostrados digitalmente da logo oficial e dos cards de storytelling da marca:

| Nome da Cor | Código HEX | Papel na Interface (UI) | Referência Visual |
| :--- | :---: | :--- | :--- |
| **Off-White Rosado (Fundo Principal)** | `#FFFBFC` | Background principal da página, transmitindo leveza, limpeza e aconchego. | Fundo dos slides *"Onde Tudo Começou"* e *"O Pijama como Autocuidado"*. |
| **Creme / Blush Suave (Fundo Secundário)** | `#FBF5F2` | Fundo de seções alternadas, cards de depoimentos e áreas de destaque. | Interior claro da logo e cartões suaves. |
| **Rosa Pêssego Pastel (Cor da Marca / Logo)** | `#FEE1DD` | Fundo de badges, ícones de destaque, detalhes decorativos e cabeçalhos suaves. | Círculo principal da logo e ícones de Destaques do Instagram (`#FAD1CD`). |
| **Marsala Rosado / Rosa Queimado** | `#A05F66` | Ícones lineares, bordas sutis, subtítulos e elementos gráficos da marca. | Lua crescente, tipografia da logo e traços dos ícones dos Destaques. |
| **Rosa Rubi / Berry (Destaque & CTAs)** | `#A5335E` | Títulos de pilares (*"Personalidade"*, *"Conforto Real"*), botões de ação primários e links ativos. | Títulos em destaque nos cards de autocuidado (`#9B2C56` a `#B13A66`). |
| **Dourado Champagne / Nude** | `#CAA79B` | Linhas divisórias finas, estrelas decorativas, selos de qualidade e bordas elegantes. | Arco duplo e estrelas ao redor da lua na logotipo. |
| **Taupe Escuro / Marrom Quente (Títulos)** | `#695A59` | Títulos principais (`H1`, `H2`) e textos de destaque — substitui o preto puro para manter a delicadeza. | Títulos *"Uma Paixão de Menina"* e *"O Pijama como Autocuidado"*. |
| **Cinza Chumbo Suave (Corpo de Texto)** | `#4A4042` | Parágrafos corridos, descrições de produtos e informações técnicas com alto contraste e leitura confortável. | Textos descritivos dos cards. |
| **Verde WhatsApp (Conversão)** | `#25D366` | Botões flutuantes ou ícones diretos de atendimento via WhatsApp. | Ação rápida de compra. |

### Sugestão de Variáveis CSS (`:root`)
```css
:root {
  --bg-primary: #FFFBFC;
  --bg-secondary: #FBF5F2;
  --brand-pastel: #FEE1DD;
  --brand-blush: #FAD1CD;
  --brand-marsala: #A05F66;
  --brand-berry: #A5335E;
  --brand-berry-hover: #921644;
  --brand-gold: #CAA79B;
  --text-heading: #695A59;
  --text-body: #4A4042;
  --text-muted: #8C7A7B;
  --border-soft: #E4D6D9;
  --whatsapp-green: #25D366;
}
```

---

## 2. Tipografia Recomendada

A identidade atual da marca combina uma **fonte serifada clássica e feminina** nos títulos com uma **sans-serif limpa e geométrica** nos textos de apoio, além de um toque **script/cursivo** na palavra *"da Naty"* da logo:

1. **Títulos (`H1`, `H2`, `H3`) — Serifada Elegante:**
   - **Sugestão Google Fonts:** `Playfair Display` ou `Cormorant Garamond` (pesos 600/700).
   - *Por quê:* Reproduz fielmente o estilo editorial visto nos slides *"Onde Tudo Começou"*, *"Uma Paixão de Menina"* e *"O Pijama como Autocuidado"*.
2. **Corpo de Texto, Botões e Badges — Sans-Serif Moderna:**
   - **Sugestão Google Fonts:** `Plus Jakarta Sans` (já embutida no próprio arquivo `.docx` do briefing) ou `DM Sans` / `Inter` (pesos 400, 500, 600).
   - *Por quê:* Garante leitura impecável no celular (mobile-first), onde ocorre a maior parte dos acessos vindos do Instagram e WhatsApp.
3. **Detalhe Cursivo / Assinatura (Opcional para acentos visuais):**
   - **Sugestão Google Fonts:** `Dancing Script` ou `Great Vibes` (usada pontualmente em palavras de destaque, remetendo ao lettering *"da Naty"* da logo).

---

## 3. Estilo Visual e Elementos Gráficos

- **Símbolos da Marca:** Lua crescente, pequenas estrelas de 4 pontas (`✨`), corações delicados, laços e flores de cerejeira (`🌸`).
- **Estética dos Cards:** Cantos arredondados suaves (`border-radius: 16px` a `24px`), sombras difusas muito leves em tom rosado (`box-shadow: 0 10px 30px rgba(160, 95, 102, 0.08)`), bordas finas (`1px solid #E4D6D9`) e degradês radiais sutis em rosa pastel no fundo.
- **Fotografia Humanizada:** Valorização da foto circular da fundadora Nataly Greice e das fotos reais vestindo as peças.

---

## 4. Inventário Completo de Arquivos na Pasta do Projeto

Abaixo está o mapeamento de todos os **11 arquivos** presentes na pasta raiz (`c:\Users\evand\OneDrive\Documents\pijamasdanati`) e como cada um pode ser aproveitado na construção do site:

| Arquivo | Dimensões | Tipo / Conteúdo | Uso Recomendado no Site |
| :--- | :---: | :--- | :--- |
| [Briefing - Pijamas da Nati.docx](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/Briefing%20-%20Pijamas%20da%20Nati.docx) | — | Questionário estratégico de briefing preenchido. | Fonte primária de regras de negócio, contatos e escopo. |
| [{29766115-937A-4398-9511-337FC46BB810}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7B29766115-937A-4398-9511-337FC46BB810%7D.png) | `242 × 87` | Slide de título: *"Onde Tudo Começou — A história de um abraço em forma de roupa."* | Referência de layout/tipografia e texto de abertura da seção **Sobre**. |
| [{8B3C483A-AA28-49E1-BB69-842C346295CA}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7B8B3C483A-AA28-49E1-BB69-842C346295CA%7D.png) | `312 × 207` | Slide *"Uma Paixão de Menina"* com texto da história + **foto circular da fundadora Nataly Greice**. | Extrair/recortar a foto da fundadora para a seção **Sobre a Naty** e reproduzir o texto em HTML nativo. |
| [{8463B4E2-8658-4927-949F-56AA9A0F3980}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7B8463B4E2-8658-4927-949F-56AA9A0F3980%7D.png) | `302 × 142` | Slide *"O Pijama como Autocuidado"* com os cards **Personalidade** e **Conforto Real**. | Referência visual fiel para construir os cards de valores em HTML/CSS. |
| [{DAE01BF4-A1A0-4EA7-9AF7-63B53E072295}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7BDAE01BF4-A1A0-4EA7-9AF7-63B53E072295%7D.png) | `610 × 300` | Print do cabeçalho/bio do Instagram `@pijamas_danaty` contendo a **Logo circular** e os **6 ícones de Destaques**. | Recortar a **Logotipo circular** para o Header/Footer (ou recriar em SVG nítido fiel à logo) e usar os ícones como referência. |
| [{AD19DAA7-BFEF-4206-8AA9-57662769B3E9}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7BAD19DAA7-BFEF-4206-8AA9-57662769B3E9%7D.png) | `1033 × 585` | Print do Grid do Instagram com **10 posts** (6 fotos de pijamas/produtos, 1 arte de logo, 1 ilustração institucional, 1 reel de embalagem, 1 reel de humor). | Recortar individualmente as fotos dos produtos do grid para popular os cards iniciais do **Catálogo de Produtos** no site. |
| [{44B583EC-CFC7-455B-81D5-B66FDBF6C791}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7B44B583EC-CFC7-455B-81D5-B66FDBF6C791%7D.png) | `349 × 593` | Story Feedback 01: Pijama azul marinho margaridas (*"Adorei"*). | Exibir no carrossel/mural de **Clientes Reais & Feedbacks** (e/ou foto do modelo longo estampado). |
| [{4A4D5954-0215-45A7-8F8E-96BFD1D4744B}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7B4A4D5954-0215-45A7-8F8E-96BFD1D4744B%7D.png) | `336 × 598` | Story Feedback 02: Pijama roxo de gatinhos + sacola (*"Obrigado Naty eu amei! Super macio e confortável"*). | Exibir no mural de **Feedbacks** e na seção de **Embalagem/Unboxing**. |
| [{5CCC0425-C1E8-4621-A2A6-8434CFC636A1}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7B5CCC0425-C1E8-4621-A2A6-8434CFC636A1%7D.png) | `349 × 596` | Story Feedback 03: Print WhatsApp Dona Denise (*"recebi os meus adorei... ficou bom o Carlos gostou"*). | Exibir no mural de **Feedbacks**. |
| [{9B145134-5A1B-4788-A75A-F48F7A6D0F9A}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7B9B145134-5A1B-4788-A75A-F48F7A6D0F9A%7D.png) | `348 × 597` | Story Clientes 04: Repost `@rafaelasantospmu` — Pijama ursinhos + sacola *"amei COMPREI"* e seda de corações. | Usar tanto no **Catálogo** (modelo Ursinhos), quanto na seção de **Presentes/Embalagem** e **Prova Social**. |
| [{AEFB4F10-F670-4C72-BAEE-6D00DA568CB8}.png](file:///c:/Users/evand/OneDrive/Documents/pijamasdanati/%7BAEFB4F10-F670-4C72-BAEE-6D00DA568CB8%7D.png) | `339 × 591` | Story Feedback 05: Cliente no espelho com pijama longo verde menta (*"Fiquei maravilhosa"*). | Exibir no mural de **Feedbacks** e galeria de clientes. |
