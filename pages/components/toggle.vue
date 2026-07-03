<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Toggle</h1>
    <p class="text-xs text-navy-100 -mt-6">
      Chamado <code>Switch</code> na v4 — na v2 real o componente se chama <code>UToggle</code>.
    </p>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (clique real)</h2>
      <div class="flex items-center gap-4">
        <UToggle v-model="on1" />
        <UToggle v-model="on2" color="nbprimary" />
        <UToggle disabled />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const on1 = ref(false)
const on2 = ref(true)
</script>
