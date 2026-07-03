<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Pagination</h1>
    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (clique real)</h2>
      <UPagination v-model="page" :page-count="10" :total="100" />
      <p class="text-xs text-navy-100 mt-2">Página atual: {{ page }}</p>
    </section>
  </div>
</template>

<script setup lang="ts">
const page = ref(1)
</script>
