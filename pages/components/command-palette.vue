<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">CommandPalette</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (busca real)</h2>
      <UCommandPalette :groups="groups" class="max-w-sm rounded bg-navy-800" />
    </section>
  </div>
</template>

<script setup lang="ts">
const groups = [
  {
    key: 'esportes',
    commands: [
      { id: 'futebol', label: 'Futebol', icon: 'i-heroicons-trophy' },
      { id: 'basquete', label: 'Basquete', icon: 'i-heroicons-trophy' },
      { id: 'tenis', label: 'Tênis', icon: 'i-heroicons-trophy' },
    ],
  },
]
</script>
