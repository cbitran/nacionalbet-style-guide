<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Slideover</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (abrir da lateral, real)</h2>
      <UButton color="nbprimary" @click="isOpen = true">Abrir bet slip</UButton>

      <USlideover v-model="isOpen">
        <UCard class="h-full">
          <template #header>
            <div class="font-semibold">Boletim de apostas</div>
          </template>
          <p class="text-sm text-navy-100">2 seleções · retorno estimado R$ 120</p>
          <template #footer>
            <UButton color="nbprimary" block @click="isOpen = false">Fechar</UButton>
          </template>
        </UCard>
      </USlideover>
    </section>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
