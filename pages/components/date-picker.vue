<template>
  <div class="max-w-3xl space-y-6">
    <h1 class="text-2xl font-bold">DatePicker</h1>
    <UAlert
      color="nbwarning"
      variant="soft"
      title="Não é um componente pronto da v2"
      description="A doc oficial trata DatePicker como uma receita: Popover + v-calendar (pacote separado) + date-fns pra formatar. Requer instalar v-calendar@next e date-fns antes de funcionar de verdade — ainda não instalados aqui."
    />
    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Shell (Popover funcional, calendário pendente)</h2>
      <UPopover>
        <UButton icon="i-heroicons-calendar" color="gray" variant="soft">Escolher data</UButton>
        <template #panel>
          <div class="p-4 text-sm text-navy-100">Calendário real via v-calendar entra aqui quando a dependência for instalada.</div>
        </template>
      </UPopover>
    </section>
  </div>
</template>
