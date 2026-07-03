<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">InputMenu</h1>
    <p class="text-xs text-navy-100 -mt-6">Não suporta múltiplos valores — pra isso use SelectMenu.</p>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (busca real)</h2>
      <UInputMenu v-model="selected" :options="options" placeholder="Digite pra filtrar" class="max-w-xs" />
    </section>
  </div>
</template>

<script setup lang="ts">
const selected = ref(null)
const options = ['Futebol', 'Basquete', 'Tênis', 'E-sports', 'Vôlei', 'MMA']
</script>
