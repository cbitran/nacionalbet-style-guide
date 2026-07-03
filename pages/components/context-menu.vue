<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">ContextMenu</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (clique direito real)</h2>
      <div
        class="w-64 h-32 rounded bg-navy-800 flex items-center justify-center text-sm text-navy-100 select-none"
        @contextmenu.prevent="onContextMenu"
      >
        Clique com o botão direito aqui
      </div>

      <UContextMenu v-model="isOpen" :virtual-element="virtualElement">
        <div class="p-2 text-sm space-y-1">
          <div class="px-2 py-1 rounded hover:bg-navy-700 cursor-pointer">Copiar odds</div>
          <div class="px-2 py-1 rounded hover:bg-navy-700 cursor-pointer">Adicionar ao boletim</div>
        </div>
      </UContextMenu>
    </section>
  </div>
</template>

<script setup lang="ts">
const isOpen = ref(false)
const virtualElement = ref({ getBoundingClientRect: () => ({ width: 0, height: 0, top: 0, left: 0, right: 0, bottom: 0 }) })

function onContextMenu(e: MouseEvent) {
  const { clientX, clientY } = e
  virtualElement.value.getBoundingClientRect = () => ({
    width: 0, height: 0, top: clientY, left: clientX, right: clientX, bottom: clientY,
  })
  isOpen.value = true
}
</script>
