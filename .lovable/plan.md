

# Diagnostico: Paginas de Categoria e PDP Inacessiveis

## Causa Raiz

As paginas existem e as rotas estao registradas no `App.tsx`, mas **nenhuma delas esta linkada na navegacao do site**. O usuario nao consegue chegar ate elas porque:

### 1. Header (`src/components/Header.tsx`)
O menu principal nao expoe os hubs de silo. Os links atuais sao:

| Menu Automotivo | Menu Arquitetonico |
|---|---|
| `/automotivo` | `/residencial` |
| `/frota` | `/empresarial` |
| `/ppf` (redirect) | `/phantom-arquitetonico` |

**Faltam**: `/automotivo/solar`, `/automotivo/seguranca`, `/automotivo/ppf`, `/arquitetonico/solar`, `/arquitetonico/seguranca`, `/arquitetonico/decorativo`

### 2. Automotivo.tsx (`src/pages/Automotivo.tsx`)
A pagina mostra produtos diretamente em tabs, mas nao tem **nenhum link** para os hubs de silo (`/automotivo/solar`, `/automotivo/seguranca`, `/automotivo/ppf`) nem para as PDPs individuais.

### 3. Residencial.tsx (`src/pages/Residencial.tsx`)
A pagina exibe 6 categorias de peliculas como cards visuais, mas os cards **nao sao clicaveis** — nao tem `<Link>` para os hubs `/arquitetonico/solar`, `/arquitetonico/seguranca`, `/arquitetonico/decorativo`.

## Plano de Correcao

### Arquivo 1: `src/components/Header.tsx`
Atualizar o `megaMenuItems` para incluir os hubs de silo como sub-itens:

**Automotivo:**
- Para Meu Carro → `/automotivo`
- Para Minha Frota → `/frota`
- Controle Solar → `/automotivo/solar`
- Seguranca → `/automotivo/seguranca`
- PPF Phantom → `/automotivo/ppf`

**Arquitetonico:**
- Para Minha Casa → `/residencial`
- Para Minha Empresa → `/empresarial`
- Controle Solar → `/arquitetonico/solar`
- Seguranca → `/arquitetonico/seguranca`
- Decorativo → `/arquitetonico/decorativo`
- Protecao de Superficies → `/phantom-arquitetonico`

### Arquivo 2: `src/pages/Automotivo.tsx`
Adicionar uma secao de navegacao por silos com 3 cards clicaveis (Controle Solar, Seguranca, PPF) que linkam para os respectivos hubs. Cada card tera:
- Icone representativo
- Titulo do silo
- Breve descricao
- Link para o hub

### Arquivo 3: `src/pages/Residencial.tsx`
Transformar os 6 cards de `filmCategories` em links clicaveis:
- Espelhadas, Transparentes, Refletivas, Neutras → `/arquitetonico/solar`
- Nao Refletivas → `/arquitetonico/solar`
- Antivandalismo e Seguranca → `/arquitetonico/seguranca`

### Resultado Esperado
O usuario podera navegar de qualquer ponto do site ate as paginas de categoria (hubs) e de la ate as PDPs individuais, completando a arvore de navegacao dos silos.

## O que NAO muda
- Rotas no App.tsx (ja estao corretas)
- PDPs individuais (ja existem)
- Hubs de silo (ja existem)
- ArqHubSolar redesenhado (ja funcional)

