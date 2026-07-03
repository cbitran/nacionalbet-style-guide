<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Progress</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Cor</h2>
      <div class="flex flex-col gap-3 max-w-sm">
        <UProgress :value="62" color="nbprimary" />
        <UProgress :value="40" color="nbsuccess" />
        <UProgress :value="85" color="nberror" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Indeterminado (sem value)</h2>
      <UProgress color="nbprimary" class="max-w-sm" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Com indicador</h2>
      <UProgress :value="55" color="nbprimary" indicator class="max-w-sm" />
    </section>
  </div>
</template>
