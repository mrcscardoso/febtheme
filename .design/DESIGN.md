# Direção visual — febtheme

> Documento de referência para o Claude Code. Fica em `.design/DESIGN.md` e **não entra no zip do tema**.
>
> **Fonte:** o modelo `Modelo.png` (home, desktop, 1440px), salvo em `.design/screenshots/modelo-home-desktop.png`. Este documento **substitui** a versão baseada no export do Relume, que foi descartado.
>
> **Como os valores foram obtidos:** cores por amostragem de pixels; tamanhos e espaços por medição na imagem (tolerância de ±2px); fontes, pesos e espaçamento entre letras por ajuste da largura real dos textos (Poppins e Inter reproduzem as larguras do modelo). Onde algo não está no modelo, aparece marcado.
>
> **Legenda:** sem marca = medido no modelo · **[proposta]** = não existe no modelo, derivado dele, aguarda aprovação · **[decidir]** = escolha pendente (resumo na seção 10).
>
> ## Revisão de 20/11/2026 (decidida pelo autor, prevalece sobre o modelo)
> - **Pílulas:** botões, chips, campos e demais elementos de interface usam `--radius-pill: 999px`. Fotografias e blocos de conteúdo usam `--radius: 8px` (Revisão; era 4px). Imagens em largura total (`kg-width-full`) ficam retas.
> - **Rótulos (tags) sem fundo:** texto azul em caixa-alta, sem pílula de fundo e sem o ponto antes do rótulo do destaque.
> - **Sem divisores:** nenhuma linha separadora no tema (cabeçalho, filtros, newsletter, autor, rodapé). A separação é feita só por espaço. Divisores inseridos pelo autor no editor (card de divisória) continuam aparecendo.
> - **Barra de filtros só nas listas (páginas 2 em diante):** a home vai do destaque direto para as seções; as páginas de tag e de autor vão do cabeçalho direto para a grade (40px / 32px / 24px, `--space-block`).
> - **Cabeçalho no celular (≤ 767px):** à direita, só o ícone de busca e o ícone de menu padrão do tema (hambúrguer/X). O menu abre em tela cheia com as páginas (navegação principal) e o acesso de membros ("Inscrever-se", "Entrar" ou "Minha conta").
> - **Destaque:** sem o link "Ler artigo". Em uma coluna (≤ 991px), segue o formato dos cards: imagem → marcador → título → meta.
> - **Newsletter:** sem o rótulo acima do título e sem ícone no botão "Quero assinar".
> - **Grade de posts:** a mesma da home em todas as listas (home, tag, autor, páginas seguintes, "Leia também"); a opção de lista do Source foi removida. Sem sublinhado ao passar o mouse.
> - **Newsletter redesenhada:** card com fundo sólido (ver item "Newsletter" abaixo), cantos de 8px (`--radius`), sem formas ou detalhes decorativos; título grande e formulário empilhados à esquerda; sem a frase de apoio (a configuração `signup_subheading` foi removida).
> - **Lista de tags na home:** depois das seções de posts, "Todas as tags" — lista simples em colunas, nome + número de artigos.
> - **Post:** sem a caixa de autor no fim.
> - **Rótulos/tags com tamanho único:** todos (tag do post, rótulo do destaque, tag dos cards em todas as listas e "AUTOR") usam Inter 600, 13px, espaço entre letras de 0,08em, caixa-alta, azul. Substitui os tamanhos de 10–11px e os espaçamentos variados da tabela de tipografia.
> - **Página de tag:** sem o rótulo "TAG" acima do título.
> - **Azul do painel sem alteração:** botões, rótulos/tags e rodapé usam exatamente a cor de destaque do Ghost (`--ghost-accent-color`, #3772FF). A decisão #1 passa para a **opção A** (`--color-accent-text` e `--color-accent-solid` = `--color-accent`); texto pequeno em azul fica com contraste 4,0:1.
> - **Separador de seção:** exceção à regra "sem divisores". Depois do título de cada seção da home ("Últimas publicações", seções por tag, "Todas as tags") e de "Leia também" no post, uma linha de 1px em cor sólida única (`--color-rule`, #DEDEDE) ocupa o resto da linha do título, sem detalhe azul. "Ver todos ↗" fica à direita da linha.
> - **Lista de tags vertical:** uma tag por linha (nome + número de artigos).
> - **Newsletter:** fundo escuro (`--color-ink`), texto na cor de fundo do site, texto escuro, texto-padrão do Ghost de convite à inscrição abaixo do título, sem a nota "Sem ruído, sem spam…".
> - **Imagem destacada do post:** na mesma coluna do título e do texto (680px).
> - **Destaque da home em duas colunas:** texto e imagem centralizados na vertical. O título usa `text-wrap: pretty` (não `balance`, que encurtava as linhas de propósito) e tamanho proporcional à coluna de texto: `font-size: clamp(30px, 9.5cqi, var(--fs-hero))`, com a coluna como container (`container-type: inline-size`). Assim as linhas usam toda a largura disponível e a quebra fica estável de 992 a 1920px. Em uma coluna (≤ 991px) segue o tamanho do formato de card (26–34px).
> - **Títulos em Poppins 600** (antes 500): token `--fw-heading: 600`; o tema carrega só o arquivo `poppins-600.woff2`. Vale para todos os títulos, logotipo em texto, nomes das tags, números da 404 e citações.
> - **Ritmo vertical único:** `--space-section` (64 / 56 / 44px) entre seções e `--space-block` (40 / 32 / 24px) entre um título e seu conteúdo, em todas as telas; substitui os valores avulsos da tabela de espaços verticais abaixo.
> - **Título do post** fica na mesma coluna do texto (680px).
> - **Campo de e-mail:** sem borda nem contorno de foco; o balão nativo "Preencha este campo" é substituído por um aviso do tema abaixo do campo.
>
> ## Regra de cor
> **O acento é uma única cor: `#3772FF`.** Não existe segunda cor de destaque. Todo o resto é neutro (`#F9F9F9`, `#121212` e cinzas).
>
> ## Escopo do modelo
> O modelo cobre **só a home em desktop**. Mobile, post, página, tag, autor, 404, paginação e busca são **[proposta]** e usam os mesmos tokens e componentes.

---

## 1. Sensação geral

**Editorial, silencioso e preciso.** O lema do próprio modelo resume: "Um olhar além do óbvio". O design tira o ruído e deixa a leitura e as fotografias aparecerem.

- Fundo quase branco, texto quase preto, **um azul só**.
- A tipografia faz a estrutura: títulos grandes em Poppins Medium e rótulos minúsculos em caixa-alta com letras espaçadas (Inter).
- Fotografias grandes, limpas, com cantos de 8px.
- **Espaço em branco** no lugar de divisores, caixas, cartões, sombras ou fundos cinza.
- Elementos de interface (botões, chips, rótulos, campos) em formato de **pílula**.
- Hierarquia por tamanho e cor (preto, cinza, azul), não por excesso de negrito.

**Evitar:** sombras, gradientes, blocos de fundo cinza, linhas divisórias, bordas em volta dos cards, ícones preenchidos ou coloridos, uma segunda cor de destaque, animações chamativas.

---

## 2. Cores

| Token | Valor | Uso |
|---|---|---|
| `--color-bg` | `#F9F9F9` | Fundo de todo o site |
| `--color-ink` | `#121212` | Texto, títulos, ícones, fundo do chip ativo |
| `--color-muted` | `#626262` | Datas e tempo de leitura, chips inativos, texto de apoio, placeholder |
| `--color-rule` | `#DEDEDE` | Bordas finas de componentes (botão secundário, bookmark). **Não usar como divisor** |
| `--color-field` | `#D5D5D5` | Borda do campo de e-mail |
| `--color-accent` | `#3772FF` | **A cor de acento** (ver regras abaixo) |
| `--color-on-accent` | `#FFFFFF` | Texto sobre o azul |
| `--color-on-accent-rule` | `rgb(255 255 255 / 0.3)` | Reservado (o rodapé não tem mais divisor) |
| `--color-accent-hover` | `color-mix(in srgb, var(--color-accent) 85%, var(--color-ink))` | **[proposta]** Hover de botões (variação do mesmo azul, não uma nova cor) |
| `--color-accent-tint` | `color-mix(in srgb, var(--color-accent) 8%, var(--color-bg))` | **[Revisão]** Tom claro do azul (8%): fundo do callout do editor |
| `--color-surface` | `color-mix(in srgb, var(--color-ink) 5%, var(--color-bg))` | **[proposta]** Fundo de código e citações no post (o modelo não tem superfícies cinza) |

### Onde o azul aparece (e só aí)

1. **Ponto final do logotipo** ("entrelinhas**.**")
2. **Botões primários** (fundo): "Inscrever-se" e "Quero assinar"
3. **Rótulos em caixa-alta:** "EM DESTAQUE / DESIGN", tag de cada card e o link "Ver todos ↗"
4. **Setas de ação:** a de "Ver todos ↗"
5. **Fundo do rodapé**

Nunca usar o azul em parágrafos, títulos, bordas decorativas ou fundos de bloco (exceto o rodapé). O preto `#121212` do chip ativo é neutro, não um segundo acento.

### Contraste (medido)

Mínimo WCAG AA: **4,5:1** para texto normal, 3:1 para texto grande (24px+, ou 18,66px+ em negrito) e para elementos de interface.

| Combinação | Onde | Contraste | Texto normal |
|---|---|---|---|
| `#121212` sobre `#F9F9F9` | Texto geral | 17,8 | ✅ |
| `#626262` sobre `#F9F9F9` | Meta, chips inativos, placeholder | 5,8 | ✅ |
| **`#3772FF` sobre `#F9F9F9`** | Rótulos e "Ver todos" (10–13px) | **4,0** | ❌ |
| **Branco sobre `#3772FF`** | Texto dos botões (14px) e do rodapé (11–13px) | **4,2** | ❌ |
| `#3772FF` sobre `#F9F9F9` | Ponto do logo, setas, anel de foco | 4,0 | ✅ (3:1 para elementos que não são texto) |

**[decidir #1] Os rótulos azuis pequenos e o texto branco sobre azul ficam abaixo de 4,5:1.** Duas saídas, sem criar outra cor:

- **A. Fiel ao modelo (padrão deste documento).** `#3772FF` em tudo. Falha o AA nesses textos pequenos.
- **B. Derivado do mesmo azul.** *(Usada até 20/11/2026; substituída pela A por decisão do autor.)* Onde há texto pequeno, usar `color-mix(in srgb, var(--color-accent) 90%, var(--color-ink))` = `#3368E7`: contraste 4,7 sobre o fundo e 4,9 com texto branco. A diferença visual para `#3772FF` é quase imperceptível.

Para a escolha ser trocada em uma linha, o CSS usa dois tokens que **hoje valem o mesmo que o acento**:

| Token | Uso | A (padrão) | B |
|---|---|---|---|
| `--color-accent-text` | Texto azul sobre fundo claro | `var(--color-accent)` | mix 90% |
| `--color-accent-solid` | Fundo de botões e do rodapé (com texto branco pequeno) | `var(--color-accent)` | mix 90% |

### Integração com o Ghost
- No painel (Configurações → Design e marca), definir a **cor de destaque** como `#3772FF`. O Ghost a expõe como `--ghost-accent-color`, e o Portal e alguns cards do editor a usam.
- No tema: `--color-accent: var(--ghost-accent-color, #3772FF);`
- **Modo escuro:** fora do escopo, porque o modelo não o prevê. Remover a opção de esquema de cores do Source (ou travar em claro).

---

## 3. Tipografia

### Famílias
| Papel | Fonte | Pesos |
|---|---|---|
| Títulos e logotipo em texto | **Poppins** | 600 (Revisão; era 500) |
| Interface e corpo | **Inter** | 400, 500, 600 |

Pilha de reserva: `system-ui, -apple-system, "Segoe UI", Roboto, sans-serif`.

- **Fixas no tema** (sem opção de fonte no painel): remover as configurações de fonte do Source no `package.json` e substituir o carregamento em `partials/typography/` (`fonts.hbs`, `sans.hbs`).
- **Hospedar no próprio tema** (`assets/fonts/`, woff2, subconjunto latino, que cobre o português). Poppins e Inter têm licença OFL. Total: 4 arquivos (Poppins 500; Inter 400, 500, 600).
- Peso 500 para todos os títulos: as larguras do modelo casam com Poppins Medium. As hastes parecem um pouco mais grossas na imagem, provavelmente por renderização; conferir lado a lado.

### Escala (desktop, como no modelo)

| Estilo | Fonte e peso | Tamanho | Altura de linha | Espaço entre letras | Onde |
|---|---|---|---|---|---|
| Título do destaque (H1) | Poppins 500 | 52px (3.25rem) | 1.15 | −0.035em | "Menos ruído. Mais significado." |
| Título da newsletter (H2) | Poppins 500 | 36px (2.25rem) | 1.25 | −0.03em | "Boas ideias merecem…" |
| Título de seção (H2) | Poppins 500 | 28px (1.75rem) | 1.2 | 0 | "Design & criatividade" |
| Título de card (H3) | Poppins 500 | 22px (1.375rem) | 1.5 | 0 | Cards da home |
| Logotipo no cabeçalho | Poppins 500 | 28px | 1 | 0 | "entrelinhas." |
| Logotipo no rodapé | Poppins 500 | 34px (2.125rem) | 1 | 0 | Branco |
| Interface | Inter 500 | 14px | 1.4 | 0 | "Entrar", botões, "Ler artigo", campo de e-mail |
| Texto de apoio | Inter 400 | 14px / 13px | 1.5 | 0 | Frase da newsletter (14px); frase da faixa e tagline do rodapé (13px) |
| Chip e link pequeno | Inter 500 | 13px | 1.2 | 0 | Filtros, "Ver todos" |
| Link do rodapé | Inter 400 | 12px | 1.5 | 0 | Colunas do rodapé |
| Rótulo grande | Inter 600 | 11px | 1.2 | +0.12em, caixa-alta | Faixa "UM OLHAR ALÉM DO ÓBVIO", "NEWSLETTER ENTRELINHAS" |
| Rótulo do destaque | Inter 600 | 11px | 1.2 | +0.02em, caixa-alta | "EM DESTAQUE / DESIGN" |
| Rótulo pequeno | Inter 600 | 10px | 1.2 | +0.10em, caixa-alta | Tag do card; títulos das colunas do rodapé (+0.09em) |
| Meta do destaque | Inter 500 | 11px | 1.2 | +0.03em, caixa-alta | "18 NOV, 2026 · 6 MIN DE LEITURA" |
| Meta do card | Inter 500 | 10px | 1.2 | +0.065em, caixa-alta | "17 NOV, 2026 · 5 MIN" |
| Nota | Inter 400 | 11px | 1.5 | 0 | Aviso sob o formulário, linha de direitos do rodapé |

Detalhes: numerais tabulares (`font-variant-numeric: tabular-nums`) na numeração das seções e nas datas. Ao escolher pesos do Inter (400/500/600), a medição de largura não distingue entre eles: conferir visualmente.

**[decidir #7] Tamanho mínimo.** O modelo usa 10px em rótulos e metas, abaixo do que é confortável de ler. **Recomendação:** mínimo de 11px (rótulo pequeno e meta do card sobem de 10px para 11px).

### Texto do post **[proposta]**
Inter 400, 18px, altura de linha 1.7, `ink`. Títulos internos em Poppins 500: H2 de 32px (1.2) e H3 de 24px (1.3), com o mesmo espaço entre letras de 0 a −0.01em. Coluna de leitura de 680px.

### Escala responsiva **[proposta]**

| Estilo | ≥ 992px | 576–991px | ≤ 575px |
|---|---|---|---|
| Título do destaque | 52px | 44px | 36px |
| Título da newsletter | 36px | 32px | 28px |
| Título de seção | 28px | 26px | 24px |
| Título de card | 22px | 22px | 20px |
| Resto | igual | igual | igual |

---

## 4. Layout e espaço

### Contêiner e breakpoints
- Margem lateral: `clamp(1.25rem, 5vw, 4.5rem)` (**72px a 1440px**, 20px no mínimo).
- Largura máxima do conteúdo: **81rem (1296px)**, centralizado. O rodapé azul ocupa a largura toda.
- Breakpoints: **991px** (tablet) e **575px** (celular).

### Grades (desktop)
| Bloco | Estrutura |
|---|---|
| Destaque | 2 colunas `5fr / 6fr`, espaço de 40px (texto ≈ 571px, imagem ≈ 686px). Texto alinhado **ao topo**. Imagem em proporção **13:8** |
| Cards | 3 colunas iguais, espaço de **28px** (≈ 413px cada). Imagem em proporção **16:10** |
| Newsletter | `1fr / 520px`, alinhada ao topo. Título à esquerda, formulário à direita |
| Rodapé | Bloco da marca à esquerda; duas colunas de links à direita (≈ 100px entre elas), alinhadas à margem direita |

### Espaços verticais (desktop, aproximados)

| Entre | Valor |
|---|---|
| Cabeçalho (altura da linha) | 102px (28px acima e abaixo do botão de 46px) |
| Cabeçalho → primeiro divisor | 24px |
| Faixa de apresentação (divisor → imagem do destaque) | ≈ 80px, texto centralizado na vertical |
| Destaque → divisor do filtro | 48px |
| Divisor → chips | 23px |
| Chips (38px) → divisor seguinte | 42px |
| Divisor → título da seção | 48px |
| Título da seção → grade de cards | 32px |
| Imagem do card → tag | 18px |
| Tag → título do card | 12px |
| Título → meta | 10px |
| Entre uma seção e a próxima | 88px |
| Última seção → divisor da newsletter | 62px |
| Newsletter: acima / abaixo do conteúdo | 60px / 72px |
| Rodapé: altura total | 292px (56px acima do conteúdo, 32px abaixo da linha de direitos) |
| Colunas do rodapé | 28px entre linhas de links |

**Tokens de ritmo (Revisão):** `--space-section` 64px (≥ 992px), 56px (576–991px), 44px (≤ 575px); `--space-block` 40px, 32px, 24px.

Escala de espaço sugerida (múltiplos de 4px): 4 · 8 · 12 · 16 · 20 · 24 · 28 · 32 · 40 · 48 · 56 · 64 · 72 · 88.

---

## 5. Forma e componentes

### Forma
- **Pílula: `--radius-pill: 999px`** em botões (inclusive os do editor), chips de filtro, campos e botão de ícone. Rótulos/tags não têm fundo.
- **`--radius: 8px`** em imagens, vídeos e blocos de conteúdo (callout, bookmark, código, toggle). Avatar de autor: redondo.
- **Divisores:** nenhum (ver Revisão no topo).
- **Sombras:** nenhuma. **Bordas em cards:** nenhuma.

### Componentes

**Botão primário**
- Fundo `--color-accent-solid`, texto `--color-on-accent`, Inter 500 14px, raio de pílula.
- Cabeçalho: altura 46px, padding horizontal ≈ 22px ("Inscrever-se", 130px de largura).
- Newsletter: altura 52px, padding horizontal ≈ 20px, só texto (sem ícone).
- **[proposta]** Hover: `--color-accent-hover`. Foco: contorno de 2px `ink` com afastamento de 2px.

**Chip de filtro**
- Altura 38px, Inter 500 13px, raio de pílula.
- **Ativo:** fundo `ink`, texto `bg`, padding horizontal ≈ 18px.
- **Inativo:** sem fundo, texto `muted`; ≈ 30px entre os textos. **[proposta]** Hover: texto vira `ink`.

**Rótulo (tag) de categoria**
Texto azul em caixa-alta, sem fundo e sem borda (ver tabela de tipografia). O rótulo do destaque usa o formato "EM DESTAQUE / DESIGN", sem ponto antes.

**Linha de meta**
`17 NOV, 2026 · 5 MIN`: data, ponto médio com espaço de ≈ 6px de cada lado, tempo de leitura. Cor `muted`.

**Link com seta**
- "Ver todos ↗": Inter 500 13px, texto e seta azuis (11px).
- **[proposta]** Hover: a seta desliza 3px na direção dela.

**Card de post** (sem borda, sem fundo, sem sombra)
Imagem 16:10 com raio de 8px → tag → título (até 2 linhas, sem corte) → meta. O card inteiro é clicável. Sem sublinhado nem outro efeito de texto ao passar o mouse.

**Campo de e-mail**
Altura 52px, borda 1px `--color-field`, raio de pílula, fundo transparente, padding horizontal ≈ 20px, texto Inter 400 14px, placeholder `muted`. Foco: **sem borda nem contorno**; o fundo clareia levemente (`--color-surface`) para indicar o foco.

**Aviso de validação do campo** (substitui o balão nativo do navegador): texto de 13px em `ink`, com um ícone de alerta azul de 14px à esquerda, 10px abaixo do campo. Mensagens: "Digite seu e-mail para assinar." (vazio) e "Confira o e-mail: parece incompleto." (formato inválido). Some ao digitar. O campo recebe `aria-invalid` e o aviso é anunciado por leitores de tela.

**Ícones**
SVG inline em `partials/icons/`, traço fino de ≈ 1.5px, cor herdada (`currentColor`). Necessários: `search` (20px), `arrow-right` (16px), `arrow-up-right` (11–12px). Sem fonte de ícones.

### Movimento **[proposta]**
Transições de 150–200ms em cor e posição. Respeitar `prefers-reduced-motion: reduce` (sem transições).

**Zoom nas imagens destacadas** (Revisão): ao passar o mouse, a imagem amplia para 105% dentro da moldura (que mantém tamanho, cantos de 8px e recorte), em 0,6s com `cubic-bezier(0.2, 0.7, 0.2, 1)`.
- Destaque da home: gatilho na imagem ou no título do destaque.
- Cards de todas as grades (home, tag, autor, páginas seguintes, "Leia também"): gatilho em qualquer parte do card, já que ele todo é um link; também no foco por teclado.
- Sem zoom com `prefers-reduced-motion: reduce`.

**Selo "Para assinantes"** (Revisão; substitui o cadeado e a estrela): marca, nos cards, posts para membros ou pagos quando o visitante não tem acesso (regra do Ghost: `{{#unless access}}` + visibilidade não pública).
- Pílula sólida em `--color-accent`, 22px de altura, texto "PARA ASSINANTES" branco (Inter 600, 11px, caixa-alta, 0,08em) com um cadeado sólido à esquerda (`partials/icons/padlock.hbs`, caixa de 12px; desenho visível ≈ 9,7px, 1,2× a altura das maiúsculas, centrado na altura das maiúsculas; 4px de espaço até o texto); `title` "Conteúdo para assinantes". Fica antes da data na linha de meta.
- Efeito sutil a cada 3,5s (início após 1s): um halo no tom do azul (35% → 0%) se expande de 0 a 6px ao redor do selo e se desfaz (`box-shadow`, ≈ 1,4s). Sem deslocamento nem rotação.
- Hover/foco no card: só escurece para `--color-accent-hover` (sem movimento vertical).
- Com `prefers-reduced-motion: reduce`: estático.

**Transição entre páginas** (Revisão): View Transitions entre documentos, só em CSS (`@view-transition { navigation: auto; }`).
- Conteúdo: a página que sai some subindo 6px (180ms, `cubic-bezier(0.4, 0, 1, 1)`); a que entra surge vindo 12px de baixo, com fade (320ms, `cubic-bezier(0, 0, 0.2, 1)`).
- Cabeçalho (`view-transition-name: feb-header`): parado durante a troca.
- Com `prefers-reduced-motion: reduce`: desligada. Em navegadores sem suporte (ex.: Firefox): navegação normal, sem efeito.
- Não interfere no Portal, na busca nem na rolagem infinita, que não trocam de documento.

---

## 6. Telas

### 6.1 Cabeçalho e faixa de apresentação (todas as páginas)

**Cabeçalho.** Logotipo à esquerda. À direita, centralizados na vertical e com ≈ 30px entre si: ícone de busca (20px, área de toque de 44px) → "Entrar" (Inter 500 14px, `ink`) → botão "Inscrever-se". **Não há menu no cabeçalho**: a navegação é a barra de filtros (6.2). Sem sombra, fundo `bg`, **estático** (não fixa no topo) **[proposta]**.

Sem divisor abaixo do cabeçalho.

**Faixa de apresentação** logo abaixo: à esquerda, "UM OLHAR ALÉM DO ÓBVIO" (rótulo grande, `ink`); à direita, "Ideias para ver o mundo de outro jeito." (13px, `muted`), alinhada à margem direita.

**Logotipo:** texto "entrelinhas" em Poppins 500 28px com o ponto final em azul. Se o site tiver uma imagem de logo no Ghost, ela tem prioridade. **[decidir #2]**

**Mapeamento no Ghost**
- Logo: `{{#if @site.logo}}` imagem, senão `{{@site.title}}` com o ponto em `::after` (azul).
- Busca: `data-ghost-search`. Entrar: `data-portal="signin"`. Inscrever-se: `data-portal="signup"`.
- "Entrar" e "Inscrever-se" só aparecem com membros ativos (`@site.members_enabled`). Para membro logado (`{{#if @member}}`), "Entrar" vira "Minha conta" (`data-portal="account"`) e o botão some.
- Textos da faixa: duas configurações de texto do tema, com os valores do modelo como padrão **[decidir #5]**.

### 6.2 Home

**1. Destaque**
- Coluna de texto (topo alinhado ao da imagem, com ≈ 14px de respiro):
  1. rótulo `EM DESTAQUE / DESIGN` (azul; a parte depois da barra é a tag principal do post)
  2. título H1, 40px abaixo
  3. meta `18 NOV, 2026 · 6 MIN DE LEITURA`, 40px abaixo do título
- **Sem resumo e sem autor.** O espaço sob o link fica vazio (a imagem é mais alta que o texto).
- Imagem 13:8, raio 8px, `object-fit: cover`, com link para o post. Carrega com prioridade (`loading="eager"`, `fetchpriority="high"`).
- Ghost: `{{#get "posts" filter="featured:true" limit="1"}}`; sem post em destaque, usar o mais recente. Tag = `{{primary_tag.name}}`.

**2. Barra de filtros** — **removida da home** (Revisão). Usada só nas listas (páginas 2 em diante), sem divisores:
- Chips: "Todos os artigos" (ativo na home), Design, Tecnologia, Cultura, Lifestyle.
- Ghost: é a **navegação principal** (`{{navigation}}`), com "Todos os artigos" (URL `/`) como primeiro item. O estado ativo vem da classe `nav-current`; também adicionar `aria-current="page"`.
- Cada chip leva à **página da tag** correspondente (sem JavaScript). **[decidir #3]**
- Aparece na home, tag, autor e listas. **Oculta em post e página**, para foco na leitura. **[decidir #6]**

**3. Seções por tag** (2 seções no modelo, 3 cards cada)
- Linha do título: numeração `01`/`02` (azul, 11px, tabular) → 19px → título da seção (28px) à esquerda; "Ver todos ↗" à direita, alinhado à linha de base do título.
- Grade de 3 cards (ver 5 e 4). Tag do card = `{{primary_tag.name}}`.
- Numeração por contador CSS (`counter-increment` + `decimal-leading-zero`), sem cálculo no template.
- "Ver todos ↗" leva à página da tag da seção.
- Ghost: `{{#get "posts" filter="tag:SLUG" limit="3"}}`, excluindo o post em destaque. O título da seção ("Design & criatividade") **não é o nome da tag** ("Design"); por isso a tag e o título vêm de configurações do tema. **[decidir #4]**
- Datas: `{{date format="D MMM, YYYY"}}` e `text-transform: uppercase`. Tempo: `{{reading_time minute="1 min" minutes="% min"}}` nos cards; "… de leitura" no destaque. Requer **idioma do site em português (Brasil)** em Configurações → Geral, para os meses saírem em português.

**4. Lista de tags** ("Todas as tags")
- Título de seção (28px) + separador → lista simples vertical, uma tag por linha: nome da tag em Poppins 500 18px + número de artigos em meta (11px, caixa-alta, `muted`). Só tags públicas com posts, em ordem alfabética. Hover: nome em azul.
- Ghost: `{{#get "tags" filter="visibility:public" include="count.posts" order="name asc" limit="all"}}`.

**5. Newsletter** (card escuro — Revisão)
- Card com fundo `--color-ink` (#121212), cantos de 8px (`--radius`), padding 72px/64px (56/40 no tablet, 40/24 no celular). Todo o texto (título, convite, aviso de validação, sucesso) na **cor de fundo do site** (`--color-bg`); erro em #FFB4A8. Contraste medido: texto 18,7:1; placeholder 7,3:1; botão e círculo do ícone contra o card 4,5:1; texto do botão e envelope 4,2:1.
- **Ícone:** envelope de traço fino na cor de fundo do site (`partials/icons/mail.hbs`, 30px; 26px no celular) num círculo sólido `--color-accent` de 52px (44px no celular), **à esquerda do título**, centrado na vertical em relação a ele (inclusive com título em 2 linhas); 20px de espaço (14px no celular). A cada 3,5s (início após 1,2s), um halo azul clareado (azul do tema 80% + fundo 20%, a 55% → 0%) se expande até 14px ao redor do círculo (mesmo efeito do selo "Para assinantes") e o envelope dá um pulo de 2px. Hover/foco no card: o envelope sobe 3px e cresce 8%. Estático com `prefers-reduced-motion`.
- Conteúdo à esquerda, empilhado: [ícone + H2 na mesma linha] (44 / 36 / 30px, até 640px) → 16px → texto-padrão do Ghost de convite à inscrição (16px, até 560px) → 32px → campo + botão "Quero assinar" na mesma linha (até 560px, altura 54px; empilham no celular).
- Texto de convite: chave oficial de `@tryghost/theme-translations` ("Don’t miss out on the latest issues. Sign up now to get access to the library of members-only issues."), com tradução pt-BR em `locales-local/pt-BR.json`: "Não perca as últimas edições. Inscreva-se agora para ter acesso à biblioteca de edições exclusivas para membros." O build mescla em `locales/`.
- Campo: fundo na cor de fundo do site a 8% e borda a 18% (translúcidos sobre o escuro), texto na cor de fundo, placeholder a 65%; no foco, sem borda nem contorno, o fundo sobe para 15%. Botão: hover clareia (azul 85% + fundo 15%); foco por teclado com contorno na cor de fundo.
- O título vem da configuração `signup_heading` (padrão: título do site).

### 6.3 Rodapé (todas as páginas)

- Fundo `--color-accent-solid`, largura total, 292px de altura. Texto branco.
- **Esquerda:** logotipo branco (34px, sem ponto azul) e tagline "Para quem não se contenta com a superfície." (13px), 30px abaixo.
- **Direita, duas colunas** alinhadas à margem direita: "EXPLORE" (Design, Tecnologia, Cultura, Lifestyle) e "ENTRELINHAS" (Sobre nós, Contato, Instagram ↗). Título da coluna em rótulo pequeno; links de 12px, uma linha a cada 28px.
- Sem divisor entre os links e a linha de direitos (só espaço).
- **Linha de baixo** (11px): "© 2026 Entrelinhas. Todos os direitos reservados." à esquerda; "Privacidade" e "Termos de uso" à direita (≈ 28px entre eles).
- Ghost:
  - "EXPLORE": `{{navigation}}` (a mesma lista dos chips).
  - Segunda coluna: `{{navigation type="secondary"}}`; título = `{{@site.title}}` em caixa-alta. A seta ↗ do Instagram vem do CSS pela classe do item (`nav-instagram`).
  - Direitos: `© {{date format="YYYY"}} {{@site.title}}. Todos os direitos reservados.`
  - "Privacidade" e "Termos de uso": `{{#get "pages" filter="slug:[privacidade,termos-de-uso]"}}`, de modo que só aparecem se as páginas existirem.
  - Tagline: configuração do tema **[decidir #5]**.

### 6.4 Post **[proposta]**

1. Cabeçalho (sem barra de filtros).
2. Rótulo azul com a tag principal → H1 (52px, na coluna de texto de 680px) → frase de resumo (`custom_excerpt`, Inter 400 20px, `muted`) → meta em caixa-alta: autor · data · tempo de leitura.
3. Imagem destacada em 13:8, raio 8px, **na coluna de texto (680px)**, alinhada ao título e ao corpo, com legenda de 12px em `muted`.
4. Corpo em coluna de **680px** (Inter 18px/1.7).
   - Links: texto `ink`, sublinhado de 2px **azul** com afastamento de 3px; hover: texto fica azul. (Evita texto azul pequeno.)
   - Citação: borda esquerda de 3px azul, texto em Poppins 500 24px.
   - Código e blocos de citação longos: fundo `--color-surface`, raio 8px.
5. **Cards do editor (Koenig)**, todos com os mesmos tokens: imagem e galeria (espaço de 8px), `kg-width-wide` (64rem) e `kg-width-full` (largura da janela), bookmark (borda 1px `--color-rule`, raio 8px, sem sombra), botão (estilo do botão primário, pílula), callout (fundo de 8% do azul, raio 8px), toggle, vídeo, áudio, arquivo, produto, cabeçalho, assinatura.
6. Final: bloco de newsletter da home e **"Leia também"** com 3 cards da home (sem caixa de autor).

### 6.5 Página (Sobre, Contato, Privacidade…) **[proposta]**
Igual ao post, sem meta, sem "Leia também" e sem caixa de autor. Imagem destacada opcional.

### 6.6 Tag, autor e lista de posts **[proposta]**
Cabeçalho da página: (no autor, rótulo azul "AUTOR"; na tag, sem rótulo) → H1 (52px) → descrição (Inter 18px, `muted`, até 640px) → meta com o número de posts. Abaixo, a mesma grade de cards da home (3 colunas), seguida da paginação. Nas páginas de tag e de autor não há barra de filtros; nas listas (páginas 2 em diante), sim.

### 6.7 404, paginação e busca **[proposta]**
- **404** (Revisão): mesmo cabeçalho e rodapé do site (`error-404.hbs` usa o layout `default.hbs`); no miolo, só o aviso, centralizado na horizontal e na vertical do espaço entre cabeçalho e rodapé: "404" em Poppins de 52px azul → título "Página não encontrada" → frase em `muted` → botão "Voltar ao início". Sem lista de posts.
- **Paginação:** links com seta no estilo de "Ler artigo →": "← Mais recentes" e "Mais antigos →", com "Página 2 de 5" centralizado em `muted`.
- **Busca:** o modal do Ghost com `bg`, campo no estilo do campo de e-mail e resultados em linhas com título (Poppins 500, 18px) e meta, separadas por espaço.

### 6.8 Mobile e tablet **[proposta]**
- **Cabeçalho (≤ 767px):** logotipo; à direita, só o ícone de busca e o ícone de menu padrão do tema. O menu (tela cheia, fundo `bg`) lista as páginas em Poppins 500 24px (atual em azul) e, abaixo, o botão "Inscrever-se" em largura total e o link "Entrar" (ou "Minha conta" para membros). Abre e fecha pelo script do tema; trava a rolagem enquanto aberto.
- **Faixa:** só o texto da esquerda; o da direita some em ≤ 767px.
- **Destaque (≤ 991px):** uma coluna no formato dos cards: imagem (16:10) → 18px → marcador → 12px → título (26–34px) → 10px → meta.
- **Filtros:** uma única linha com rolagem horizontal (sem quebra), sem barra de rolagem visível.
- **Cards:** 3 colunas (≥ 992px), 2 colunas (576–991px), 1 coluna (≤ 575px).
- **Newsletter:** uma coluna (texto, depois formulário). No celular o botão ocupa a largura toda, abaixo do campo.
- **Rodapé:** marca; depois as duas colunas lado a lado; depois a linha de direitos em duas linhas empilhadas.

---

## 7. Onde mexer no fork (mapa provável — confirmar no repositório)

Com base nos arquivos que o `gscan` listou no fork:

| Elemento | Arquivos prováveis |
|---|---|
| Cabeçalho, faixa, navegação, busca | `partials/components/header.hbs`, `navigation.hbs`, `partials/search-toggle.hbs` |
| Destaque | `partials/components/featured.hbs` e/ou `header-content.hbs`, `home.hbs` |
| Barra de filtros | `partials/components/navigation.hbs` (ou um partial novo) |
| Seções por tag | `home.hbs` + partial novo (`components/tag-section.hbs`) + `partials/post-card.hbs` |
| Newsletter | `partials/components/cta.hbs` + `partials/email-subscription.hbs` |
| Rodapé | `partials/components/footer.hbs` |
| Fontes | `partials/typography/fonts.hbs` e `sans.hbs`, `assets/fonts/` |
| Ícones | `partials/icons/` (novos: `arrow-right`, `arrow-up-right`) |
| Post, página, tag, autor, 404 | `post.hbs`, `page.hbs`, `tag.hbs`, `author.hbs`, `error-404.hbs` |

Textos fixos novos da interface ("Ler artigo", "Ver todos", "Em destaque"…) passam pelo helper `{{t}}`; antes de criar strings, verificar como o fork organiza os arquivos de tradução em `locales/`.

---

## 8. Acessibilidade (obrigatório)

- Contraste AA, conforme a seção 2 (decisão #1 pendente).
- Foco visível em todo elemento interativo (contorno de 2px; branco sobre o rodapé azul).
- Um único `h1` por página (na home, o título do destaque), sem pular níveis: seções em `h2`, cards em `h3`.
- Cada `<nav>` com `aria-label` ("Principal", "Rodapé"); chip ativo com `aria-current="page"`.
- Botões de ícone (busca) com `aria-label`; áreas de toque de **44×44px** no mobile.
- Imagens com `alt` (`feature_image_alt` quando existir).
- Texto mínimo: ver decisão #7.
- `prefers-reduced-motion` respeitado.

## 9. Desempenho

- 2 famílias e 4 arquivos de fonte (woff2, hospedados no tema). Sem fonte de ícones. Sem bibliotecas novas de CSS/JS.
- Imagens responsivas com `srcset` e os tamanhos de `config.image_sizes` do `package.json` (cards ≈ 413px de largura; destaque ≈ 686px), em 2x para telas de alta densidade.
- `loading="lazy"` em tudo abaixo da primeira dobra; a imagem do destaque carrega com prioridade.

---

## 10. Decisões pendentes (com recomendação)

| # | Decisão | Recomendação |
|---|---|---|
| 1 | Contraste do azul em rótulos pequenos e texto branco sobre azul (seção 2) | **Decidido: A** — `#3772FF` em tudo (Revisão) |
| 2 | "entrelinhas." é o nome real do site? O logotipo é texto com ponto azul ou uma imagem? | Texto com ponto azul, se o nome for esse; título do site no Ghost = "Entrelinhas" |
| 3 | Chips de filtro: links para páginas de tag ou filtro em JavaScript na home | Links para tags (mais simples, sem JS, bom para SEO) |
| 4 | Seções da home: tag e título definidos por configurações do tema ou automáticos | Configurações do tema (tag + título de cada seção, até 2 seções) |
| 5 | Textos de marca (faixa, tagline do rodapé) como configurações no painel ou fixos no template | Configurações no painel |
| 6 | Barra de filtros também em post e página | Ocultar em post e página; mostrar em home, tag, autor e listas |
| 7 | Texto mínimo de 10px (modelo) ou 11px | 11px |
| 8 | Cabeçalho estático ou fixo no topo | Estático |
| 9 | Aprovar as telas que o modelo não mostra (mobile, post, página, tag, autor, 404, paginação, busca) antes das etapas 4 a 6 | Aprovar a seção 6 |

**Fora do tema, para depois:** uma lista cronológica de todos os artigos (`/artigos/`) exigiria uma rota em `routes.yaml`, que é configuração do Ghost e não do tema. No modelo, "Todos os artigos" aponta para a home.

---

## Anexo: tokens base em CSS

```css
:root {
  /* Cor */
  --color-bg: #F9F9F9;
  --color-ink: #121212;
  --color-muted: #626262;
  --color-rule: #DEDEDE;
  --color-field: #D5D5D5;
  --color-accent: var(--ghost-accent-color, #3772FF);
  --color-accent-text: var(--color-accent);   /* decisão #1 */
  --color-accent-solid: var(--color-accent);  /* decisão #1 */
  --color-accent-hover: color-mix(in srgb, var(--color-accent) 85%, var(--color-ink));
  --color-on-accent: #FFFFFF;
  --color-on-accent-rule: rgb(255 255 255 / 0.3);
  --color-surface: color-mix(in srgb, var(--color-ink) 5%, var(--color-bg));

  /* Tipografia */
  --font-heading: "Poppins", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;
  --font-body: "Inter", system-ui, -apple-system, "Segoe UI", Roboto, sans-serif;

  /* Forma e layout */
  --radius: 8px;          /* imagens e blocos de conteúdo */
  --radius-pill: 999px;   /* botões, chips, rótulos, campos */
  --page-padding: clamp(1.25rem, 5vw, 4.5rem);
  --container: 81rem;
  --grid-gap: 1.75rem;
}
```
