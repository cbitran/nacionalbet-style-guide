<template>
  <div class="relative -m-8 p-8 md:p-14 overflow-hidden">
    <!-- glow ambiente, sutil, atrás de tudo -->
    <div
      class="pointer-events-none absolute inset-0 -z-10"
      style="background:
        radial-gradient(900px 420px at 85% -10%, rgba(0,197,243,.14), transparent 60%),
        radial-gradient(700px 460px at -10% 115%, rgba(34,76,255,.14), transparent 60%);"
    />

    <div class="max-w-4xl mx-auto">
      <!-- eyebrow -->
      <div class="flex flex-wrap items-center gap-2 opacity-0 animate-[fadein_.5s_ease-out_forwards]">
        <span class="inline-flex items-center rounded-full border border-navy-700 px-3 py-1 text-xs uppercase tracking-[.14em] text-navy-100">
          Design System
        </span>
        <span class="inline-flex items-center rounded-full border border-nbprimary-500/40 bg-nbprimary-500/10 px-3 py-1 text-xs font-semibold tracking-[.04em] text-nbprimary-400">
          @nuxt/ui v2.22.3 — real, não simulado
        </span>
      </div>

      <!-- hero -->
      <h1 class="mt-6 text-5xl md:text-6xl font-bold leading-[1.05] tracking-tight opacity-0 animate-[fadein_.6s_ease-out_.05s_forwards]">
        Nacional<span class="text-nbprimary-500">&nbsp;B1</span>
      </h1>
      <p class="mt-4 max-w-xl text-lg text-navy-100 leading-relaxed opacity-0 animate-[fadein_.6s_ease-out_.1s_forwards]">
        A vitrine viva do design system — cada componente aqui roda a biblioteca real,
        pra você ver como abre, fecha, reage ao clique, antes de existir numa tela do produto.
      </p>

      <!-- token readout — a prova de que os valores vêm do Figma, não foram inventados -->
      <div class="mt-9 rounded-xl border border-navy-700 bg-navy-800/60 p-4 opacity-0 animate-[fadein_.6s_ease-out_.15s_forwards]">
        <div class="flex items-center justify-between mb-3">
          <span class="text-[11px] uppercase tracking-[.14em] text-navy-100">Tokens ativos agora</span>
          <span class="font-mono text-[11px] text-navy-200">semantic/color/*</span>
        </div>
        <div class="flex flex-wrap gap-x-6 gap-y-3">
          <div v-for="t in tokens" :key="t.name" class="flex items-center gap-2">
            <span class="h-4 w-4 rounded-sm ring-1 ring-white/10 shrink-0" :style="{ background: t.hex }" />
            <div class="leading-tight">
              <div class="font-mono text-[11px] text-white">{{ t.hex }}</div>
              <div class="font-mono text-[10px] text-navy-200">{{ t.name }}</div>
            </div>
          </div>
        </div>
      </div>

      <!-- stats -->
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div v-for="s in stats" :key="s.label" class="rounded-xl border border-navy-700 bg-navy-800 p-5">
          <div class="font-mono text-4xl font-semibold" :style="{ color: s.accent }">{{ s.num }}</div>
          <div class="mt-2 text-sm font-semibold text-white">{{ s.label }}</div>
          <div class="text-xs text-navy-100 leading-snug mt-0.5">{{ s.sub }}</div>
        </div>
      </div>

      <!-- categorias -->
      <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
        <NuxtLink
          v-for="c in categories"
          :key="c.label"
          :to="c.to"
          class="group block rounded-xl border border-navy-700 bg-navy-800 p-5 transition-colors hover:border-nbprimary-500"
        >
          <div class="text-2xl">{{ c.icon }}</div>
          <div class="mt-3 text-[15px] font-semibold text-white">
            {{ c.label }} <span class="text-nbprimary-500 transition-transform inline-block group-hover:translate-x-0.5">→</span>
          </div>
          <div class="text-xs text-navy-100 leading-relaxed mt-1">{{ c.desc }}</div>
        </NuxtLink>
      </div>

      <!-- fonte da verdade -->
      <div class="mt-4 flex items-start gap-3 rounded-xl border border-nbprimary-500/30 p-5"
           style="background: linear-gradient(90deg, rgba(0,197,243,.10), rgba(34,76,255,.05));">
        <UIcon name="i-heroicons-swatch" class="text-xl text-nbprimary-400 shrink-0 mt-0.5" />
        <div>
          <div class="text-[15px] font-semibold text-white">O Figma é a fonte da verdade, não este app</div>
          <p class="text-xs text-navy-100 leading-relaxed mt-1 max-w-2xl">
            Toda cor, tamanho e espaçamento aqui foi lido direto das variáveis do arquivo
            <strong class="text-white">DS Theme B1 - (NuxtUI v2)</strong> — camadas
            <span class="font-mono text-nbprimary-300">Primitive → Responsive → Semantic → Context</span>.
            Este site só existe pra mostrar o comportamento real dos componentes, algo que
            o Dev Mode do Figma não reproduz.
          </p>
        </div>
      </div>

      <!-- footer -->
      <div class="mt-9 pt-6 border-t border-navy-700 flex flex-wrap items-center gap-3 text-xs text-navy-100">
        <span class="inline-flex items-center gap-1.5">
          <span class="h-2 w-2 rounded-full bg-nbsuccess-500" />
          @nuxt/ui 2.22.3 · Nuxt 4 · Vue 3
        </span>
        <span class="text-navy-500">•</span>
        <span>Fonte Outfit · navy + ciano (Nacional B1)</span>
        <span class="text-navy-500">•</span>
        <span>Lumos Gaming</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const tokens = [
  { name: 'primary/default', hex: '#00C5F3' },
  { name: 'secondary/default', hex: '#224CFF' },
  { name: 'alert/success', hex: '#22C55E' },
  { name: 'alert/warning', hex: '#EAB308' },
  { name: 'alert/error', hex: '#EF4444' },
  { name: 'alert/info', hex: '#A855F7' },
]

const stats = [
  { num: '42', label: 'Componentes', sub: 'formulário, elementos, overlays, navegação, dados', accent: '#00C5F3' },
  { num: '4', label: 'Camadas de token', sub: 'Primitive · Responsive · Semantic · Context', accent: '#FFFFFF' },
  { num: '44', label: 'Tokens de contexto', sub: 'text · surface · icon · border, com todos os estados', accent: '#224CFF' },
]

const categories = [
  { icon: '📝', label: 'Formulário', desc: 'Input, Select, Checkbox, Toggle, Form e mais 8.', to: '/components/button' },
  { icon: '🧩', label: 'Elementos', desc: 'Badge, Card, Avatar, Alert, Skeleton e mais 9.', to: '/components/badge' },
  { icon: '🪟', label: 'Overlays', desc: 'Modal, Slideover, Popover, Dropdown, Tooltip.', to: '/components/modal' },
  { icon: '🧭', label: 'Navegação', desc: 'Tabs, Pagination, Breadcrumb, Navigation.', to: '/components/tabs' },
  { icon: '📊', label: 'Dados', desc: 'Table, Carousel.', to: '/components/table' },
]
</script>

<style>
@keyframes fadein {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
@media (prefers-reduced-motion: reduce) {
  [class*="animate-"] { animation: none !important; opacity: 1 !important; }
}
</style>
