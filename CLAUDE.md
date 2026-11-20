AGENTS.md

## Ambiente (Windows)
- Raiz do tema e do repositório Git: C:\Tema\febtheme (abrir ESTA pasta no VS Code)
- Docker (fora do Git): C:\Tema\ghost-local\compose.yaml
- Gerenciador de pacotes: pnpm, versão fixada no campo "packageManager" (NÃO editar)
- Node: v26 (se aparecerem erros estranhos, avaliar o Node LTS)
- O npm bloqueia scripts de instalação por padrão. O pnpm global foi instalado
  com `npm install -g pnpm@12.20.0 --allow-scripts=pnpm`

## Comandos (rodar dentro de C:\Tema\febtheme)
- `pnpm dev`  → compila CSS/JS e observa mudanças
- `pnpm test` → valida com gscan (rodar ao fim de cada etapa)
- `pnpm zip`  → gera o zip em dist\ (SEMPRE usar este, nunca compactar a pasta à mão)

## Armadilhas já encontradas
- O zip precisa ter package.json, default.hbs e partials/ direto na raiz, sem
  pasta por fora. Pasta extra gera "partial could not be found" em todos os arquivos.
- O compose.yaml mapeia ../febtheme para /var/lib/ghost/content/themes/febtheme.