<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Card</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Header + body + footer</h2>
      <UCard class="max-w-sm">
        <template #header>
          <div class="font-semibold">Real Madrid x Barcelona</div>
        </template>
        <p class="text-sm text-navy-100">Odds atualizadas em tempo real.</p>
        <template #footer>
          <UButton color="nbprimary" block>Apostar agora</UButton>
        </template>
      </UCard>
    </section>
  </div>
</template>
