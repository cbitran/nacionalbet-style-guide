<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Badge</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Cor</h2>
      <div class="flex flex-wrap gap-3">
        <UBadge color="nbprimary">Primary</UBadge>
        <UBadge color="nbsecondary">Secondary</UBadge>
        <UBadge color="nbsuccess">Success</UBadge>
        <UBadge color="nbwarning">Warning</UBadge>
        <UBadge color="nberror">Danger</UBadge>
        <UBadge color="gray">Gray</UBadge>
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Variant</h2>
      <div class="flex flex-wrap gap-3">
        <UBadge color="nbprimary" variant="solid">Solid</UBadge>
        <UBadge color="nbprimary" variant="outline">Outline</UBadge>
        <UBadge color="nbprimary" variant="soft">Soft</UBadge>
        <UBadge color="nbprimary" variant="subtle">Subtle</UBadge>
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Tamanho</h2>
      <div class="flex flex-wrap items-center gap-3">
        <UBadge color="nbprimary" size="xs">xs</UBadge>
        <UBadge color="nbprimary" size="sm">sm</UBadge>
        <UBadge color="nbprimary" size="md">md</UBadge>
        <UBadge color="nbprimary" size="lg">lg</UBadge>
      </div>
    </section>
  </div>
</template>
