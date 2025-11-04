# Página Estática - Post de Mídia Social

## Visão Geral
Página estática HTML/CSS/JS que replica a interface de um post de mídia social com vídeo, métricas de engajamento e seção de comentários. Desenvolvida para hospedagem na Hostinger.

## Estrutura do Projeto
```
Hostinger/
├── index.html          # Página principal
└── assets/
    ├── style.css       # Estilos da página
    └── script.js       # Funcionalidades interativas
```

## Características Principais
- **Header do Facebook**: Logo branco do Facebook em fundo azul (#1877f2) fixo no topo
- **Informações do Post**: 
  - Avatar circular com iniciais "MM"
  - Nome "Mallik Mirzaie" com botão "Seguir" em azul
  - Data "13 de out." com ícone de privacidade (globo)
  - Botões de menu (três pontos) e fechar (X)
- **Texto do Post**: "99% Failed this mission" em fonte grande
- **Card de Vídeo**: Player Vturb (vid-690a37f763c4486921be62a9) com carregamento ultra rápido
- **Título**: "A Descoberta Científica que Está Chocando Médicos e Mulheres..."
- **Contador Regressivo**: Timer de 15 minutos acima das ofertas com animações e urgência visual
- **Ofertas de Produto**: 3 imagens de ofertas com links para checkout (6, 3 e 2 garrafas)
- **Métricas de Engajamento**: 23 mil curtidas, 8742 comentários, 1,2 mil compartilhamentos
- **Botões de Interação**: Curtir, Comentar, Compartilhar (totalmente funcionais)
- **Seção de Comentários**: 5 comentários realistas com avatares coloridos, nomes, texto, tempo e curtidas
- **Rodapé**: Copyright © 2024 Truque da Sai Rosa com links para Política de Privacidade e Termos de Serviço
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela
- **Performance Otimizada**: Carregamento ultra rápido com preload, fetchpriority, WebP e prevenção de layout shift

## Funcionalidades Interativas
1. **Contador Regressivo**: Timer de 15:00 minutos com:
   - Detecção automática do botão "pitch" do vídeo para iniciar
   - Animação de pulsação no fundo gradiente vermelho
   - Separadores piscantes (:) entre minutos e segundos
   - Persistência do tempo em localStorage para continuidade entre recargas
2. **Player de Vídeo Vturb**: Carregamento prioritário e ultra rápido
3. **Botão Curtir**: Incrementa contador de curtidas e muda cor
4. **Botão Comentar**: Rola a página até a seção de comentários
5. **Botão Compartilhar**: Compartilha via API nativa ou copia link
6. **Curtir Comentários**: Cada comentário pode ser curtido individualmente
7. **Links de Checkout**: 3 ofertas linkadas para mycartpanda.com

## Tecnologias Utilizadas
- HTML5 puro
- CSS3 (Flexbox, Grid, Animações, Gradientes)
- JavaScript Vanilla (sem dependências)
- Ícones SVG inline

## Servidor de Desenvolvimento
O projeto usa um servidor HTTP Python simples na porta 5000:
```bash
python -m http.server 5000 --directory Hostinger
```

## Hospedagem na Hostinger
Para fazer upload na Hostinger:
1. Faça upload de todo o conteúdo da pasta `Hostinger/` para o diretório public_html
2. Certifique-se de que o index.html esteja na raiz do public_html
3. A pasta assets deve estar no mesmo nível que o index.html
4. Nenhuma configuração adicional é necessária

## Data de Criação
02 de Novembro de 2025

## Mudanças Recentes
- [04/11/2025] Otimizações avançadas para nota máxima no PageSpeed Insights:
  - **CLS eliminado (de 0,504 para ~0)**: 
    - Video container com aspect-ratio 16/9 e min-height 281px
    - Todas as imagens com aspect-ratio definido (1:1 para avatares e ofertas)
    - Seção de ofertas com espaço reservado (opacity em vez de display/height)
  - **Lazy loading**: Todas as imagens abaixo da dobra com loading="lazy"
  - **Font optimization**: Adicionado font-display: swap
  - **Display block**: Todas as imagens como display: block para evitar espaços
  - Cache busting implementado (v=20251104f)
  - Removido botão de desenvolvimento que aparecia em produção
- [04/11/2025] Otimização completa para ultra velocidade de carregamento:
  - Adicionado preconnect/dns-prefetch para domínios Vturb e CDN
  - Script do vídeo com fetchpriority="high" e crossorigin para carregamento prioritário
  - Preload do script do player para início imediato
  - Conversão de imagens críticas para formato WebP (redução ~60% no tamanho)
  - Adicionado width/height em todas as imagens para prevenir layout shift
  - CSS otimizado com containment para performance
  - Removidos logs de debug para produção
- [03/11/2025] Implementação de contador regressivo de 15 minutos acima das ofertas:
  - Título "Claim Your Discounted" e subtítulo "Limited-time offer:"
  - Design com fundo gradiente vermelho e animações de pulsação
  - Detecção automática do botão pitch para iniciar contagem
  - Separadores piscantes entre minutos e segundos
- [03/11/2025] Substituição do vídeo Vturb de vid-68fdd186d4cc9d4913d24d18 para vid-690a37f763c4486921be62a9
- [02/11/2025] Criação inicial da página com todos os elementos
- [02/11/2025] Ajuste da proporção do vídeo de 177.78% para 56.25% (16:9)
- [02/11/2025] Remoção do autoplay automático para manter overlay visível
- [02/11/2025] Adição de placeholder visual para o vídeo com gradiente
- [02/11/2025] Correção de z-index para garantir visibilidade dos elementos
- [02/11/2025] Correção da funcionalidade do botão Curtir para exibir incremento visível no contador (23 → 23.001)
- [02/11/2025] Adição de header do Facebook com logo e informações do post (Mallik Mirzaie)
- [02/11/2025] Implementação de texto do post "99% Failed this mission"
- [02/11/2025] Adição de botões de menu e fechar no cabeçalho
