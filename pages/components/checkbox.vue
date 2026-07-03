<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Checkbox</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (clique real)</h2>
      <div class="flex flex-col gap-3">
        <UCheckbox v-model="checked1" label="Clique pra marcar/desmarcar" />
        <UCheckbox v-model="checked2" label="Já marcado" />
        <UCheckbox label="Disabled" disabled />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const checked1 = ref(false)
const checked2 = ref(true)
</script>
