<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Popover</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Modo click</h2>
      <UPopover mode="click">
        <UButton color="nbprimary">Ver odds</UButton>
        <template #panel>
          <div class="p-4 text-sm">Casa 1.85 · Empate 3.20 · Fora 4.10</div>
        </template>
      </UPopover>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Modo hover (real)</h2>
      <UPopover mode="hover" :open-delay="100">
        <UButton color="gray" variant="soft">Passe o mouse</UButton>
        <template #panel>
          <div class="p-4 text-sm">Aparece ao passar o mouse.</div>
        </template>
      </UPopover>
    </section>
  </div>
</template>
