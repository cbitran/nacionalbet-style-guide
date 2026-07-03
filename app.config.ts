// NuxtUI v2: só "primary" e "gray" são slots de tema configuráveis aqui.
// As demais cores (nbsecondary/nbsuccess/nbwarning/nberror/nbinfo) são usadas
// diretamente via prop color="nbsecondary" etc. — funcionam porque estão
// registradas no tailwind.config.ts, não porque viram um "slot" oficial.
//
// Referência real do produto (UI Design v.02, tela de Depósito): quase todo
// elemento interativo usa o ciano Primary como cor de borda/texto padrão, não
// cinza neutro — mesmo em estado "não selecionado". Por isso o default de cor
// dos componentes de formulário abaixo é "nbprimary", não o cinza da v2.
export default defineAppConfig({
  ui: {
    primary: 'nbprimary',
    gray: 'navy',
    input: { default: { color: 'nbprimary' } },
    textarea: { default: { color: 'nbprimary' } },
    select: { default: { color: 'nbprimary' } },
    selectMenu: { default: { color: 'nbprimary' } },
    inputMenu: { default: { color: 'nbprimary' } },
    range: { default: { color: 'nbprimary' } },
    checkbox: { default: { color: 'nbprimary' } },
    radio: { default: { color: 'nbprimary' } },
    radioGroup: { default: { color: 'nbprimary' } },
    toggle: { default: { color: 'nbprimary' } },
  },
})
