<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Tabs</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (clique real)</h2>
      <UTabs :items="items" class="max-w-sm" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Vertical</h2>
      <UTabs :items="items" orientation="vertical" class="max-w-sm" />
    </section>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'Futebol', content: 'Jogos de futebol ao vivo e pré-jogo.' },
  { label: 'Basquete', content: 'Jogos de basquete ao vivo e pré-jogo.' },
  { label: 'Tênis', content: 'Torneios de tênis em andamento.' },
]
</script>
