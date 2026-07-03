<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Accordion</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (abrir/fechar real)</h2>
      <UAccordion :items="items" />
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Multiple (mais de um aberto)</h2>
      <UAccordion :items="items" multiple />
    </section>
  </div>
</template>

<script setup lang="ts">
const items = [
  { label: 'O que é o Nacional B1?', content: 'É a marca dedicada com Primary #00C5F3 e Secondary #224CFF.' },
  { label: 'Como funciona o saque?', content: 'Processado em até 24h úteis.' },
  { label: 'Posso apostar ao vivo?', content: 'Sim, para os eventos marcados como live.' },
]
</script>
