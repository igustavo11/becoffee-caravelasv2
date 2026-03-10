# 🗺️ Roadmap — BeCoffee Caravelas

Visão geral do planejamento de evolução do site, do front estático até uma plataforma completa de gestão para a cafeteria.

---

## ✅ Fase 0 — Atual (Concluído)

- [x] Landing page institucional (Hero, Serviços, Depoimentos, Reservas, Footer)
- [x] Cardápio digital com filtros por categoria
- [x] Modal de detalhes do produto
- [x] Layout responsivo com Tailwind CSS
- [x] Animações com Framer Motion e Lottie
- [x] Integração com WhatsApp e Instagram

---

## 🔧 Fase 1 — Fundação do Backend

> Objetivo: estruturar a base técnica para suportar todas as fases seguintes.

### 1.1 Infraestrutura
- [ ] Criar repositório separado para o backend (Node.js + Fastify ou NestJS)
- [ ] Configurar banco de dados PostgreSQL (Supabase ou Railway)
- [ ] Configurar Prisma ORM com schema inicial
- [ ] Variáveis de ambiente com validação (Zod + dotenv)
- [ ] Deploy do backend (Railway ou Render)

### 1.2 Autenticação
- [ ] Sistema de login para admin/dona (JWT + Refresh Token)
- [ ] Middleware de proteção de rotas autenticadas
- [ ] Hash de senha com bcrypt
- [ ] Roles de usuário: `ADMIN`, `OWNER`, `CUSTOMER`

### 1.3 API Base
- [ ] CRUD de Categorias (`/api/categories`)
- [ ] CRUD de Produtos (`/api/products`)
- [ ] Upload de imagem de produto (Cloudflare R2 ou Supabase Storage)
- [ ] Paginação, filtros e ordenação nas listagens
- [ ] Documentação automática da API (Swagger/OpenAPI)

---

## 🛍️ Fase 2 — Cardápio Dinâmico

> Objetivo: conectar o front ao banco de dados real, substituindo os dados mockados.

- [ ] Buscar categorias e produtos da API no front
- [ ] Loading skeleton enquanto os dados carregam
- [ ] Página de detalhe do produto com galeria de imagens
- [ ] Busca de produtos por nome
- [ ] Badge de "Destaque" ou "Novidade" nos produtos
- [ ] Produto marcado como indisponível (sem remover do cardápio)
- [ ] SEO: metadata dinâmica por produto e categoria

---

## 💬 Fase 3 — Depoimentos dos Clientes

> Objetivo: permitir que clientes reais deixem seus depoimentos no site.

- [ ] Formulário público de envio de depoimento (nome, texto, avaliação de 1–5 estrelas)
- [ ] Depoimentos ficam em estado `PENDENTE` até aprovação
- [ ] Admin aprova ou rejeita depoimentos pelo painel
- [ ] Exibição dos depoimentos aprovados na landing page
- [ ] Proteção contra spam (rate limiting + honeypot)
- [ ] Opção de vincular depoimento a um produto específico

---

## 🧑‍💼 Fase 4 — Painel Administrativo (Admin Panel)

> Objetivo: interface visual para a dona e admins gerenciarem tudo sem código.

### 4.1 Gestão do Cardápio
- [ ] Listar, criar, editar e arquivar produtos
- [ ] Gerenciar categorias (ordem, ícone, visibilidade)
- [ ] Reordenação dos produtos por drag-and-drop
- [ ] Upload de imagem direto no painel

### 4.2 Gestão de Depoimentos
- [ ] Fila de depoimentos pendentes com aprovação/rejeição em 1 clique
- [ ] Visualizar todos os depoimentos aprovados e rejeitados

### 4.3 Gestão de Usuários
- [ ] Listar usuários cadastrados
- [ ] Alterar role de usuário
- [ ] Desativar/reativar conta

### 4.4 UX do Painel
- [ ] Autenticação segura com redirecionamento
- [ ] Dashboard com resumo rápido (total de produtos, categorias, depoimentos pendentes)
- [ ] Tema escuro/claro
- [ ] Responsivo para uso no celular

---

## 🧾 Fase 5 — Gestão de Ingredientes e Receitas

> Objetivo: a dona cadastra o que compõe cada prato para o sistema calcular custos reais.

### 5.1 Ingredientes
- [ ] CRUD de ingredientes (nome, unidade de medida, custo por unidade)
- [ ] Atualização de preço do ingrediente (com histórico de variação)
- [ ] Categorização de ingredientes (laticínios, grãos, bebidas, etc.)
- [ ] Alerta quando o custo de um ingrediente subir acima de X%

### 5.2 Receitas
- [ ] Vincular ingredientes a um produto com quantidade exata por porção
- [ ] Suporte a sub-receitas (ex: "calda de caramelo" usada em vários pratos)
- [ ] Rendimento da receita (ex: 1 receita rende 10 porções)
- [ ] Histórico de alterações na receita

### 5.3 Ficha Técnica
- [ ] Geração automática da ficha técnica por produto (PDF exportável)
- [ ] Visualização do custo detalhado ingrediente por ingrediente

---

## 📊 Fase 6 — CMV e Análise de Margem

> Objetivo: calcular o custo real de cada prato e revelar quais dão lucro de verdade.

### 6.1 Cálculo Automático
- [ ] Custo de Mercadoria Vendida (CMV) calculado automaticamente por receita
- [ ] Preço de venda vs. custo de produção → margem bruta em R$ e %
- [ ] Recalculo automático ao atualizar preço de ingrediente
- [ ] Fator de multiplicação configurável por produto (desperdício, gás, energia)

### 6.2 Dashboard de Margem
- [ ] Ranking de produtos por margem (do mais lucrativo ao menos)
- [ ] Sinal visual: 🟢 alta margem / 🟡 margem ok / 🔴 margem baixa ou negativa
- [ ] Comparativo de margem por categoria
- [ ] Gráfico de evolução de margem ao longo do tempo

### 6.3 Sugestões Inteligentes
- [ ] **Promover:** produtos com alta margem e baixa saída → gerar sugestão de destaque
- [ ] **Revisar preço:** produtos com margem abaixo do mínimo configurado
- [ ] **Cortar:** produtos com margem negativa e baixa procura por > 30 dias
- [ ] **Substituir ingrediente:** sugerir troca por alternativa mais barata com margem similar
- [ ] Score de rentabilidade por produto (0–100) com explicação textual
