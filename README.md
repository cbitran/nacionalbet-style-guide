# Nacional B1 — Style Guide

App Nuxt 4 + `@nuxt/ui@2.22.3` (v2 real, pinada — não a v4 usada no resto do NacionalBet).
Fonte da verdade de tokens: Figma **DS Theme B1 - (NuxtUI v2)**, mode "Nacional B1" da coleção Brand.

## Rodar

```bash
npm install
npm run dev   # http://localhost:3300
```

## Arquitetura de variáveis (4 camadas)

Espelha 1:1 a estrutura de variáveis do Figma:

```
Primitive → Responsive → Semantic → Context → Components
```

| Camada | Onde mora | Exemplo |
|---|---|---|
| **Primitive** | `tailwind.config.ts` (cores customizadas) + `primitives/*` no Figma | `primitives/color/nacionalb1-primary/500` = `#00C5F3` |
| **Responsive** | Figma `Type Scale` (modes Desktop/Mobile) — ainda não espelhado em CSS | `responsive/type/font-size/heading/h1`, `paragraph-spacing/body` (28px desktop / 12px mobile, medido em produção — `development.nacionalbet.io/betting-terms`) |
| **Semantic** | `app.config.ts` (`ui.primary`/`ui.gray`) + Figma `semantic/*` | `semantic/color/primary/default` |
| **Context** | `assets/css/context-tokens.css` (custom properties) + Figma `context/*` | `context/color/text/action-hover` |
| **Components** | `pages/components/*.vue` (demo) — componentes de verdade ainda por criar | `UButton` (Nuxt UI), `LDatePicker` (customizado) |

### Por que Context vive em CSS custom properties, não no Tailwind config

O `@nuxt/ui` v2 só trata `primary`/`gray` como slots de tema reais (`app.config.ts`). A
camada Context do Figma (Text/Surface/Icon/Border × Primary/Secondary/Action/Hover/Focus/
Disabled/Success/Warning/Error/Info — ~44 variáveis) não tem equivalente nativo na v2.
Por isso ela foi replicada como CSS vars em `assets/css/context-tokens.css`, pra qualquer
componente customizado (prefixo `L`) ou estilo bespoke consumir sem hardcode — ex.:
`color: var(--context-color-text-action-hover)`.

Tem também um mode `.theme-casino` (aplicar a classe num ancestral) espelhando o mode
"Casino" da coleção Colors no Figma (superfícies near-black).

## Convenção de nomenclatura de componentes

- **`U` + PascalCase** — componente nativo do `@nuxt/ui` (`UButton`, `UInput`, `UCard`).
- **`L` + PascalCase** — componente customizado, criado pra este DS quando o Nuxt UI
  v2 não cobre (ex.: `LDatePicker`, futuros `LComboBox`/`LStepper`/`LAvatarGroup`).
  Nenhum componente `L` deve usar valor hardcoded — sempre via variável das camadas
  acima (Primitive/Responsive/Semantic/Context).

## Escala tipográfica completa (Figma `Type Scale`)

Estrutura pedida pelo PDF (Heading H1–H6 + Body 2xs–lg). H1–H3 e Body md/xs/2xs já
existiam no DS (valores reais); H4 reaproveita o antigo "title"; **H5, H6, Body/lg e
Body/sm não têm uso real hoje (white-label — podem ser necessários em layouts
futuros) e foram construídos reaproveitando primitivas de font-size já existentes
(`font-size-lg`/`base`/`sm`), não medidos nem inventados do zero.** Pendente de
validação da pessoa responsável pelo Design System.

| Nível | Desktop | Mobile |
|---|---|---|
| H1 | 48 | 28 |
| H2 | 36 | 24 |
| H3 | 28 | 20 |
| H4 | 20 | 18 |
| H5 | 18 | 16 |
| H6 | 16 | 14 |
| Body/lg | 18 | 20 |
| Body/md | 16 | 18 |
| Body/sm | 14 | 16 |
| Body/xs | 13 | 14 |
| Body/2xs | 12 | 12 |

## Pendências conhecidas

- `DatePicker` (`pages/components/date-picker.vue`) ainda não é funcional — a v2 trata
  como receita (Popover + `v-calendar` + `date-fns`, dependências não instaladas).
  Será o primeiro candidato real a `LDatePicker` quando implementado.
- Camada Responsive (Type Scale Desktop/Mobile) ainda não tem espelho em código —
  hoje o app roda só com os valores Desktop fixos do Tailwind/Nuxt UI.
- `semantic/border/width/{xs,sm,md}` (1/2/4px) foram aplicados por convenção de
  mercado, **não medidos** no produto real — ao contrário do paragraph-spacing.
  Ferramentas de navegador estavam fora do ar na sessão; medir quando disponíveis.
