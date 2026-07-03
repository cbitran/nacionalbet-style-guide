<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Alert</h1>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Cor</h2>
      <div class="flex flex-col gap-3">
        <UAlert color="nbprimary" title="Promoção ativa" description="Aposta grátis liberada." />
        <UAlert color="nbsuccess" title="Depósito confirmado" />
        <UAlert color="nbwarning" title="Verifique seus dados" />
        <UAlert color="nberror" title="Erro ao processar aposta" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Variant</h2>
      <div class="flex flex-col gap-3">
        <UAlert color="nbprimary" variant="solid" title="Solid" />
        <UAlert color="nbprimary" variant="outline" title="Outline" />
        <UAlert color="nbprimary" variant="soft" title="Soft" />
        <UAlert color="nbprimary" variant="subtle" title="Subtle" />
      </div>
    </section>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Com botão de fechar (clique real)</h2>
      <UAlert
        v-if="visible"
        color="nbprimary"
        title="Feche pra sumir"
        :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link' }"
        @close="visible = false"
      />
    </section>
  </div>
</template>

<script setup lang="ts">
const visible = ref(true)
</script>
