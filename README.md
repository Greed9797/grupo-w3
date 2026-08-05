# Grupo W3 — site institucional

Landing de **w3ecommerce.com.br**. React 19 + Vite 7 + Tailwind 3, SPA estática.

```bash
npm install
npm run dev      # servidor local
npm run build    # gera dist/
npm run lint
```

## O blog vive em `/blog`

`w3ecommerce.com.br/blog` serve o blog do Grupo W3, que é **outro projeto**:
Next.js 15 (App Router) com Supabase, área administrativa e publicação
automática de artigos.

Os dois não moram no mesmo repositório de propósito. Um projeto Vercel roda um
framework só — colar os arquivos do Next aqui dentro faria esta landing parar
de buildar, e portar a landing para Next significaria reescrevê-la (Tailwind 3
para 4 é breaking change) com risco de perder o visual. O arranjo evita as duas
coisas:

```
w3ecommerce.com.br/           →  esta landing (Vite)
w3ecommerce.com.br/blog/*     →  projeto do blog (Next.js), via rewrite
```

### Como funciona

1. **`vercel.json` daqui** repassa `/blog` e `/blog/:path*` para o deploy do
   blog. É a única coisa neste repositório que sabe da existência do blog.
2. **`basePath: "/blog"` lá** faz o Next gerar links, assets e rotas já com o
   prefixo. Sem isso a navegação interna do blog apontaria para a raiz do
   domínio e cairia nesta landing.

O visitante não percebe a divisão: mesma origem, mesma barra de endereços,
mesmo domínio nos links compartilhados.

### Ao mexer aqui

- **Não crie uma rota `/blog` nesta SPA.** Ela venceria o rewrite e o blog
  sumiria.
- `vercel.json` não interfere no roteamento da landing: só os dois caminhos
  acima são repassados. Qualquer outra URL continua sendo servida por este
  projeto, com o fallback de SPA de sempre.
- Trocar o endereço do deploy do blog exige atualizar `destination` nos dois
  rewrites.

### Ao mexer no blog

- Mudar ou remover o `basePath` quebra este arranjo.
- Rotas de API também ganham o prefixo: a rota de cron do autoblog fica em
  `/blog/api/cron/autoblog`, e é esse caminho que os jobs agendados chamam.
