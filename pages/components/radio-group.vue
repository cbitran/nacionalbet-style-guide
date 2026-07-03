<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">RadioGroup</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (clique real)</h2>
      <URadioGroup v-model="selected" legend="Escolha um esporte" :options="options" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Cor</h2>
      <URadioGroup v-model="selected" color="nbprimary" :options="options" />
    </section>
  </div>
</template>

<script setup lang="ts">
const selected = ref('futebol')
const options = [
  { value: 'futebol', label: 'Futebol' },
  { value: 'basquete', label: 'Basquete' },
  { value: 'tenis', label: 'Tênis' },
]
</script>
