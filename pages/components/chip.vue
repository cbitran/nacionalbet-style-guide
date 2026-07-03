<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Chip</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Sobre um ícone/avatar</h2>
      <div class="flex flex-wrap items-center gap-6">
        <UChip color="nbprimary" text="3">
          <UButton color="gray" variant="soft" icon="i-heroicons-bell" />
        </UChip>
        <UChip color="nbsuccess" position="bottom-right">
          <UAvatar text="CB" />
        </UChip>
        <UChip color="nberror" :show="false">
          <UAvatar text="CB" />
        </UChip>
      </div>
    </section>
  </div>
</template>
