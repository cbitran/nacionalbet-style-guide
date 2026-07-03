<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Breadcrumb</h1>
    <section>
      <UBreadcrumb :links="links" />
    </section>
  </div>
</template>

<script setup lang="ts">
const links = [
  { label: 'Início', to: '/' },
  { label: 'Futebol', to: '/components' },
  { label: 'Real Madrid x Barcelona' },
]
</script>
