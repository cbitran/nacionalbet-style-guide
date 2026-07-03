<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Input</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (foco real)</h2>
      <p class="text-xs text-navy-100 mb-3">Clique no campo — o ring de foco usa a cor primary do Nacional B1.</p>
      <UInput placeholder="Clique aqui e veja o foco" class="max-w-xs" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Tamanho</h2>
      <div class="flex flex-wrap items-center gap-3">
        <UInput size="2xs" placeholder="2xs" class="max-w-[140px]" />
        <UInput size="sm" placeholder="sm" class="max-w-[140px]" />
        <UInput size="md" placeholder="md" class="max-w-[140px]" />
        <UInput size="lg" placeholder="lg" class="max-w-[140px]" />
        <UInput size="xl" placeholder="xl" class="max-w-[140px]" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Com ícone / estados</h2>
      <div class="flex flex-wrap items-center gap-3">
        <UInput icon="i-heroicons-magnifying-glass" placeholder="Com ícone" class="max-w-xs" />
        <UInput placeholder="Disabled" disabled class="max-w-xs" />
      </div>
    </section>
  </div>
</template>
