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
- **Card de Vídeo**: Player de vídeo com overlay rosa e botão de play com texto "Seu vídeo já começou! Clique para ouvir"
- **Título**: "A Descoberta Científica que Está Chocando Médicos e Mulheres..."
- **Métricas de Engajamento**: 23 mil curtidas, 8742 comentários, 1,2 mil compartilhamentos
- **Botões de Interação**: Curtir, Comentar, Compartilhar (totalmente funcionais)
- **Seção de Comentários**: 5 comentários realistas com avatares coloridos, nomes, texto, tempo e curtidas
- **Rodapé**: Copyright © 2024 Truque da Sai Rosa com links para Política de Privacidade e Termos de Serviço
- **Design Responsivo**: Layout adaptável para diferentes tamanhos de tela

## Funcionalidades Interativas
1. **Player de Vídeo**: Clique no overlay ou no vídeo para reproduzir/pausar
2. **Botão Curtir**: Incrementa contador de curtidas e muda cor
3. **Botão Comentar**: Rola a página até a seção de comentários
4. **Botão Compartilhar**: Compartilha via API nativa ou copia link
5. **Curtir Comentários**: Cada comentário pode ser curtido individualmente
6. **Barra de Progresso**: Mostra progresso da reprodução do vídeo em verde

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
- [02/11/2025] Criação inicial da página com todos os elementos
- [02/11/2025] Ajuste da proporção do vídeo de 177.78% para 56.25% (16:9)
- [02/11/2025] Remoção do autoplay automático para manter overlay visível
- [02/11/2025] Adição de placeholder visual para o vídeo com gradiente
- [02/11/2025] Correção de z-index para garantir visibilidade dos elementos
- [02/11/2025] Correção da funcionalidade do botão Curtir para exibir incremento visível no contador (23 → 23.001)
