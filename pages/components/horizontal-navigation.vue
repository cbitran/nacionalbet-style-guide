<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">HorizontalNavigation</h1>
    <section>
      <UHorizontalNavigation :links="links" />
    </section>
  </div>
</template>

<script setup lang="ts">
const links = [
  [{ label: 'Futebol', icon: 'i-heroicons-trophy', to: '/' }, { label: 'Basquete', icon: 'i-heroicons-trophy' }],
  [{ label: 'Ao vivo', icon: 'i-heroicons-signal' }],
]
</script>
