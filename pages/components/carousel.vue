<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Carousel</h1>
    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (arraste/setas real)</h2>
      <UCarousel
        :items="items"
        arrows
        indicators
        :ui="{
          item: 'flex-none w-full snap-center',
          indicators: { active: 'bg-nbprimary-500 dark:bg-nbprimary-500', inactive: 'bg-white/20 dark:bg-white/20' },
        }"
        class="max-w-sm mx-auto"
      >
        <template #default="{ item }">
          <div class="h-32 w-full flex items-center justify-center bg-navy-800 rounded text-navy-100">
            {{ item }}
          </div>
        </template>
      </UCarousel>
    </section>
  </div>
</template>

<script setup lang="ts">
const items = ['Slide 1', 'Slide 2', 'Slide 3']
</script>
