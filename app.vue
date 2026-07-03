<template>
  <div class="min-h-screen bg-navy-900 text-white font-sans flex">
    <aside class="w-60 shrink-0 border-r border-navy-700 p-4 flex flex-col gap-3 overflow-y-auto max-h-screen">
      <div class="text-lg font-bold">
        Nacional <span class="text-nbprimary-500">B1</span>
      </div>

      <UInput
        v-model="search"
        icon="i-heroicons-magnifying-glass"
        placeholder="Buscar componente…"
        size="sm"
        color="nbprimary"
      />

      <NuxtLink
        v-if="!search"
        to="/"
        class="block px-3 py-1.5 rounded text-sm text-navy-100 hover:bg-navy-700 hover:text-white"
        active-class="bg-navy-700 text-white"
      >
        Introdução
      </NuxtLink>

      <p v-if="search && filteredNav.length === 0" class="px-3 text-xs text-navy-100">
        Nada encontrado pra "{{ search }}".
      </p>

      <div v-for="group in filteredNav" :key="group.label">
        <button
          type="button"
          class="w-full flex items-center justify-between px-3 py-1 text-[11px] uppercase tracking-wide text-navy-300 hover:text-navy-100"
          @click="toggleGroup(group.label)"
        >
          <span>{{ group.label }} <span class="text-navy-500 normal-case tracking-normal">({{ group.items.length }})</span></span>
          <UIcon
            name="i-heroicons-chevron-down"
            class="transition-transform shrink-0"
            :class="{ '-rotate-90': !isGroupOpen(group) }"
          />
        </button>
        <div v-show="isGroupOpen(group)">
          <NuxtLink
            v-for="item in group.items"
            :key="item.to"
            :to="item.to"
            class="block px-3 py-1.5 rounded text-sm text-navy-100 hover:bg-navy-700 hover:text-white"
            active-class="bg-navy-700 text-white"
          >
            {{ item.label }}
          </NuxtLink>
        </div>
      </div>
    </aside>
    <main class="flex-1 p-8 overflow-y-auto">
      <NuxtPage />
    </main>
    <UNotifications />
  </div>
</template>

<script setup lang="ts">
const nav = [
  {
    label: 'Formulário',
    items: [
      { to: '/components/button', label: 'Button' },
      { to: '/components/input', label: 'Input' },
      { to: '/components/textarea', label: 'Textarea' },
      { to: '/components/checkbox', label: 'Checkbox' },
      { to: '/components/radio-group', label: 'RadioGroup' },
      { to: '/components/toggle', label: 'Toggle' },
      { to: '/components/select', label: 'Select' },
      { to: '/components/select-menu', label: 'SelectMenu' },
      { to: '/components/input-menu', label: 'InputMenu' },
      { to: '/components/range', label: 'Range' },
      { to: '/components/date-picker', label: 'DatePicker' },
      { to: '/components/form-group', label: 'FormGroup' },
      { to: '/components/form', label: 'Form' },
    ],
  },
  {
    label: 'Elementos',
    items: [
      { to: '/components/badge', label: 'Badge' },
      { to: '/components/accordion', label: 'Accordion' },
      { to: '/components/alert', label: 'Alert' },
      { to: '/components/avatar', label: 'Avatar' },
      { to: '/components/card', label: 'Card' },
      { to: '/components/chip', label: 'Chip' },
      { to: '/components/divider', label: 'Divider' },
      { to: '/components/kbd', label: 'Kbd' },
      { to: '/components/icon', label: 'Icon' },
      { to: '/components/link', label: 'Link' },
      { to: '/components/container', label: 'Container' },
      { to: '/components/meter', label: 'Meter' },
      { to: '/components/progress', label: 'Progress' },
      { to: '/components/skeleton', label: 'Skeleton' },
    ],
  },
  {
    label: 'Overlays',
    items: [
      { to: '/components/modal', label: 'Modal' },
      { to: '/components/slideover', label: 'Slideover' },
      { to: '/components/popover', label: 'Popover' },
      { to: '/components/context-menu', label: 'ContextMenu' },
      { to: '/components/command-palette', label: 'CommandPalette' },
      { to: '/components/dropdown', label: 'Dropdown' },
      { to: '/components/tooltip', label: 'Tooltip' },
      { to: '/components/notification', label: 'Notification' },
    ],
  },
  {
    label: 'Navegação',
    items: [
      { to: '/components/tabs', label: 'Tabs' },
      { to: '/components/pagination', label: 'Pagination' },
      { to: '/components/breadcrumb', label: 'Breadcrumb' },
      { to: '/components/horizontal-navigation', label: 'HorizontalNavigation' },
      { to: '/components/vertical-navigation', label: 'VerticalNavigation' },
    ],
  },
  {
    label: 'Dados',
    items: [
      { to: '/components/table', label: 'Table' },
      { to: '/components/carousel', label: 'Carousel' },
    ],
  },
]

const search = ref('')

const openGroups = reactive<Record<string, boolean>>(
  Object.fromEntries(nav.map(g => [g.label, true])),
)

onMounted(() => {
  const saved = localStorage.getItem('nb1-sidebar-groups')
  if (saved) Object.assign(openGroups, JSON.parse(saved))
})

function toggleGroup(label: string) {
  openGroups[label] = !openGroups[label]
  localStorage.setItem('nb1-sidebar-groups', JSON.stringify(openGroups))
}

function isGroupOpen(group: { label: string }) {
  return search.value.trim() ? true : openGroups[group.label]
}

const filteredNav = computed(() => {
  const q = search.value.trim().toLowerCase()
  if (!q) return nav
  return nav
    .map(group => ({ ...group, items: group.items.filter(i => i.label.toLowerCase().includes(q)) }))
    .filter(group => group.items.length > 0)
})
</script>
