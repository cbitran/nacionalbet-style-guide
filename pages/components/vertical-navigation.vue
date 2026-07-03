<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">VerticalNavigation</h1>
    <section>
      <UVerticalNavigation :links="links" class="max-w-xs" />
    </section>
  </div>
</template>

<script setup lang="ts">
const links = [
  [{ label: 'Futebol', icon: 'i-heroicons-trophy', to: '/' }, { label: 'Basquete', icon: 'i-heroicons-trophy' }],
  [{ label: 'Configurações', icon: 'i-heroicons-cog-6-tooth' }],
]
</script>
