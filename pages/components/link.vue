<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Link</h1>
    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (estado ativo real)</h2>
      <div class="flex flex-wrap gap-4">
        <ULink to="/" active-class="text-nbprimary-400" inactive-class="text-navy-100">Introdução</ULink>
        <ULink to="/components/button" active-class="text-nbprimary-400" inactive-class="text-navy-100">Button</ULink>
        <ULink href="https://ui2.nuxt.com" target="_blank" class="text-nbsecondary-400">Link externo</ULink>
      </div>
    </section>
  </div>
</template>
