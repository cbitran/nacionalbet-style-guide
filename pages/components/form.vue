<template>
  <div class="max-w-3xl space-y-6">
    <h1 class="text-2xl font-bold">Form</h1>
    <p class="text-xs text-navy-100">
      Nenhuma lib de validação vem por padrão na v2 — aqui uso uma função <code>validate</code> simples.
      Submeta vazio pra ver o erro de verdade.
    </p>

    <UForm :state="state" :validate="validate" class="max-w-sm space-y-4" @submit="onSubmit">
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="voce@exemplo.com" />
      </UFormGroup>

      <UButton type="submit" color="nbprimary">Enviar</UButton>
      <p v-if="submitted" class="text-nbsuccess-500 text-sm">Enviado com sucesso!</p>
    </UForm>
  </div>
</template>

<script setup lang="ts">
const state = reactive({ email: '' })
const submitted = ref(false)

function validate(state: any) {
  const errors = []
  if (!state.email) errors.push({ path: 'email', message: 'Email é obrigatório' })
  return errors
}

function onSubmit() {
  submitted.value = true
}
</script>
