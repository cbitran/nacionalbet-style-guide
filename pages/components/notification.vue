<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Notification</h1>
    <p class="text-xs text-navy-100 -mt-6">Chamado <code>Toast</code> na v4 — na v2 real é <code>UNotification</code>, disparado via <code>useToast()</code>.</p>

    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Comportamento (disparo real)</h2>
      <div class="flex gap-3">
        <UButton color="nbsuccess" @click="notify('Aposta confirmada', 'nbsuccess')">Sucesso</UButton>
        <UButton color="nberror" @click="notify('Erro ao processar', 'nberror')">Erro</UButton>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const toast = useToast()
function notify(title: string, color: string) {
  toast.add({ title, color })
}
</script>
