<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Modal</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (abrir/fechar real)</h2>
      <UButton color="nbprimary" @click="isOpen = true">Abrir modal</UButton>

      <UModal v-model="isOpen">
        <UCard>
          <template #header>
            <div class="font-semibold">Confirmar aposta</div>
          </template>
          <p class="text-sm text-navy-100">Você está apostando R$ 50 em Real Madrid.</p>
          <template #footer>
            <div class="flex justify-end gap-2">
              <UButton color="gray" variant="ghost" @click="isOpen = false">Cancelar</UButton>
              <UButton color="nbprimary" @click="isOpen = false">Confirmar</UButton>
            </div>
          </template>
        </UCard>
      </UModal>
    </section>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
</script>
