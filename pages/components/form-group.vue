<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">FormGroup</h1>
    <p class="text-xs text-navy-100 -mt-6">
      <code>error</code> seta automaticamente <code>color="red"</code> no campo filho.
    </p>

    <section class="space-y-4 max-w-sm">
      <UFormGroup label="Nome" help="Como aparece no seu perfil">
        <UInput placeholder="Digite seu nome" />
      </UFormGroup>

      <UFormGroup label="Email" error="Email inválido">
        <UInput placeholder="voce@exemplo.com" />
      </UFormGroup>

      <UFormGroup label="Campo obrigatório" required>
        <UInput placeholder="Obrigatório" />
      </UFormGroup>
    </section>
  </div>
</template>
