<template>
  <div class="max-w-3xl space-y-10">
    <h1 class="text-2xl font-bold">Skeleton</h1>
    <section>
      <h2 class="text-sm uppercase tracking-wide text-navy-100 mb-3">Placeholder de carregamento</h2>
      <div class="flex items-center gap-4">
        <USkeleton class="h-12 w-12 rounded-full" />
        <div class="space-y-2">
          <USkeleton class="h-4 w-[200px]" />
          <USkeleton class="h-4 w-[150px]" />
        </div>
      </div>
    </section>
  </div>
</template>
