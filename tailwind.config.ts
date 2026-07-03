import type { Config } from 'tailwindcss'

// Escalas espelhadas do Figma (DS Theme v5 - (NuxtUI v2), mode "Nacional B1")
// e do tokens.css do DS original (success/warning/danger/info não mudaram).
// NuxtUI v2 só trata "primary"/"gray" como slots de tema (app.config.ts), mas
// qualquer cor aqui registrada funciona normalmente via prop color="nbsecondary" etc.
export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        // JetBrains Mono já é usado no DS original pra dados numéricos (odds) —
        // reaproveitado aqui pros valores de token (hex, nomes de variável).
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        nbprimary: {
          50: '#EFFBFF', 100: '#DEF6FF', 200: '#B6F0FF', 300: '#75E7FF', 400: '#2CDCFF',
          500: '#00C5F3', 600: '#00A2D4', 700: '#0081AB', 800: '#006C8D', 900: '#065974', 950: '#04394D',
        },
        nbsecondary: {
          50: '#E6F2FF', 100: '#D2E7FF', 200: '#AED1FF', 300: '#7DB0FF', 400: '#4A7DFF',
          500: '#224CFF', 600: '#001DFF', 700: '#0021FF', 800: '#001CD8', 900: '#071A97', 950: '#050E61',
        },
        navy: {
          50: '#C5D4E3', 100: '#90A8C3', 200: '#6B8AAD', 300: '#4D6B9A', 400: '#3A5585',
          500: '#2E4570', 600: '#243758', 700: '#1A2B47', 800: '#132036', 900: '#0D1B2E', 950: '#071428',
        },
        nbsuccess: {
          50: '#F0FDF4', 100: '#DCFCE7', 200: '#BBF7D0', 300: '#86EFAC', 400: '#4ADE80',
          500: '#22C55E', 600: '#16A34A', 700: '#15803D', 800: '#166534', 900: '#14532D', 950: '#052E16',
        },
        nbwarning: {
          50: '#FEFCE8', 100: '#FEF9C3', 200: '#FEF08A', 300: '#FDE047', 400: '#FACC15',
          500: '#EAB308', 600: '#CA8A04', 700: '#A16207', 800: '#854D0E', 900: '#713F12', 950: '#422006',
        },
        nberror: {
          50: '#FEF2F2', 100: '#FEE2E2', 200: '#FECACA', 300: '#FCA5A5', 400: '#F87171',
          500: '#EF4444', 600: '#DC2626', 700: '#B91C1C', 800: '#991B1B', 900: '#7F1D1D', 950: '#450A0A',
        },
        nbinfo: {
          50: '#FAF5FF', 100: '#F3E8FF', 200: '#E9D5FF', 300: '#D8B4FE', 400: '#C084FC',
          500: '#A855F7', 600: '#9333EA', 700: '#7E22CE', 800: '#6B21A8', 900: '#581C87', 950: '#3B0764',
        },
      },
    },
  },
}
