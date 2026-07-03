<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Dropdown</h1>
    <p class="text-xs text-navy-100 -mt-6">Chamado <code>DropdownMenu</code> na v4 — na v2 real é <code>UDropdown</code>.</p>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (abrir real)</h2>
      <UDropdown :items="items">
        <UButton color="gray" variant="soft" icon="i-heroicons-ellipsis-horizontal" />
      </UDropdown>
    </section>
  </div>
</template>

<script setup lang="ts">
const items = [
  [{ label: 'Editar', icon: 'i-heroicons-pencil-square' }],
  [{ label: 'Excluir', icon: 'i-heroicons-trash' }],
]
</script>
