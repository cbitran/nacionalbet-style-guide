<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Textarea</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (autoresize real)</h2>
      <UTextarea v-model="text" autoresize placeholder="Digite e veja crescer" class="max-w-sm" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Tamanho</h2>
      <div class="flex flex-wrap gap-3">
        <UTextarea size="xs" placeholder="xs" class="max-w-[160px]" />
        <UTextarea size="md" placeholder="md" class="max-w-[160px]" />
        <UTextarea size="xl" placeholder="xl" class="max-w-[160px]" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Estados</h2>
      <div class="flex flex-wrap gap-3">
        <UTextarea color="nbprimary" placeholder="Primary" class="max-w-[200px]" />
        <UTextarea disabled placeholder="Disabled" class="max-w-[200px]" />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const text = ref('')
</script>
