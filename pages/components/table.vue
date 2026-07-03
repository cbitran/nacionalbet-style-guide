<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Table</h1>
    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (ordenar real, clique no header)</h2>
      <UTable :rows="rows" :columns="columns" :sort="{ column: 'data', direction: 'desc' }" />
    </section>
  </div>
</template>

<script setup lang="ts">
const columns = [
  { key: 'evento', label: 'Evento', sortable: true },
  { key: 'valor', label: 'Valor', sortable: true },
  { key: 'data', label: 'Data', sortable: true },
]
const rows = [
  { evento: 'Real Madrid x Barcelona', valor: 'R$ 50', data: '2026-07-01' },
  { evento: 'Lakers x Celtics', valor: 'R$ 30', data: '2026-06-28' },
  { evento: 'Djokovic x Alcaraz', valor: 'R$ 80', data: '2026-06-25' },
]
</script>
