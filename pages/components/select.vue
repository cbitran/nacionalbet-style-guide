<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Select</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (abrir/fechar real)</h2>
      <p class="text-xs text-navy-100 mb-3">Clique pra abrir o dropdown e escolher uma opção.</p>
      <USelect v-model="selected" :options="options" placeholder="Escolha uma opção" class="max-w-xs" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Tamanho</h2>
      <div class="flex flex-wrap items-center gap-3">
        <USelect size="sm" :options="options" placeholder="sm" class="max-w-[160px]" />
        <USelect size="md" :options="options" placeholder="md" class="max-w-[160px]" />
        <USelect size="lg" :options="options" placeholder="lg" class="max-w-[160px]" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const selected = ref(null)
const options = ['Futebol', 'Basquete', 'Tênis', 'E-sports']
</script>
