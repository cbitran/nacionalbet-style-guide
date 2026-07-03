<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Button</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Cor</h2>
      <div class="flex flex-wrap gap-3">
        <UButton color="nbprimary">Primary</UButton>
        <UButton color="nbsecondary">Secondary</UButton>
        <UButton color="nbsuccess">Success</UButton>
        <UButton color="nbwarning">Warning</UButton>
        <UButton color="nberror">Danger</UButton>
        <UButton color="gray">Gray</UButton>
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Variant</h2>
      <div class="flex flex-wrap gap-3">
        <UButton color="nbprimary" variant="solid">Solid</UButton>
        <UButton color="nbprimary" variant="outline">Outline</UButton>
        <UButton color="nbprimary" variant="soft">Soft</UButton>
        <UButton color="nbprimary" variant="ghost">Ghost</UButton>
        <UButton color="nbprimary" variant="link">Link</UButton>
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Tamanho</h2>
      <div class="flex flex-wrap items-center gap-3">
        <UButton color="nbprimary" size="2xs">2xs</UButton>
        <UButton color="nbprimary" size="xs">xs</UButton>
        <UButton color="nbprimary" size="sm">sm</UButton>
        <UButton color="nbprimary" size="md">md</UButton>
        <UButton color="nbprimary" size="lg">lg</UButton>
        <UButton color="nbprimary" size="xl">xl</UButton>
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Estados (comportamento real)</h2>
      <div class="flex flex-wrap items-center gap-3">
        <UButton color="nbprimary">Hover / focus me</UButton>
        <UButton color="nbprimary" loading>Loading</UButton>
        <UButton color="nbprimary" disabled>Disabled</UButton>
        <UButton color="nbprimary" icon="i-heroicons-plus">Com ícone</UButton>
      </div>
    </section>
  </div>
</template>
