<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Divider</h1>
    <p class="text-xs text-navy-100 -mt-6">Chamado <code>Separator</code> na v4 — na v2 real é <code>UDivider</code>.</p>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Type</h2>
      <div class="space-y-4 max-w-sm">
        <UDivider type="solid" />
        <UDivider type="dashed" />
        <UDivider type="dotted" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Com label</h2>
      <UDivider label="ou" class="max-w-sm" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Vertical</h2>
      <div class="flex items-center h-12 gap-3">
        <span>Início</span>
        <UDivider orientation="vertical" />
        <span>Ao vivo</span>
        <UDivider orientation="vertical" />
        <span>Encerrados</span>
      </div>
    </section>
  </div>
</template>
