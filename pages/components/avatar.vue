<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Avatar</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Tamanho</h2>
      <div class="flex flex-wrap items-center gap-3">
        <UAvatar size="2xs" text="CB" />
        <UAvatar size="sm" text="CB" />
        <UAvatar size="md" text="CB" />
        <UAvatar size="lg" text="CB" />
        <UAvatar size="2xl" text="CB" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Com chip (status online)</h2>
      <div class="flex flex-wrap items-center gap-3">
        <UAvatar text="CB" chip-color="nbsuccess" chip-position="bottom-right" />
        <UAvatar text="CB" chip-color="nberror" chip-position="top-right" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Group (empilhados)</h2>
      <UAvatarGroup size="md" :max="3">
        <UAvatar text="A" />
        <UAvatar text="B" />
        <UAvatar text="C" />
        <UAvatar text="D" />
        <UAvatar text="E" />
      </UAvatarGroup>
    </section>
  </div>
</template>
