<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">SelectMenu</h1>
    <p class="text-xs text-navy-100 -mt-6">Diferença do InputMenu: suporta <code>multiple</code>.</p>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Único</h2>
      <USelectMenu v-model="single" :options="options" placeholder="Escolha um" class="max-w-xs" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Múltiplo (comportamento real)</h2>
      <USelectMenu v-model="multi" :options="options" multiple placeholder="Escolha vários" class="max-w-xs" />
    </section>
  </div>
</template>

<script setup lang="ts">
const single = ref(null)
const multi = ref([])
const options = ['Futebol', 'Basquete', 'Tênis', 'E-sports']
</script>
