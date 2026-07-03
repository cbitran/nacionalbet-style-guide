<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Meter</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Cor</h2>
      <div class="flex flex-col gap-4 max-w-sm">
        <UMeter :value="72" color="nbprimary" label="Limite de aposta" indicator />
        <UMeter :value="40" color="nbwarning" label="Limite de tempo" indicator />
        <UMeter :value="90" color="nberror" label="Limite de perda" indicator />
      </div>
    </section>
  </div>
</template>
