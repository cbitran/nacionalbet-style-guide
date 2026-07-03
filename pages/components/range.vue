<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Range</h1>
    <p class="text-xs text-navy-100 -mt-6">Chamado <code>Slider</code> na v4 — na v2 real o componente se chama <code>URange</code>.</p>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (arraste real)</h2>
      <URange v-model="value" color="nbprimary" class="max-w-xs" />
      <p class="text-xs text-navy-100 mt-2">Valor: {{ value }}</p>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Tamanho</h2>
      <div class="flex flex-col gap-4 max-w-xs">
        <URange size="xs" :model-value="30" />
        <URange size="md" :model-value="50" />
        <URange size="xl" :model-value="70" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const value = ref(60)
</script>
