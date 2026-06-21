/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: {
          DEFAULT: '#f4f0e8',
          dim: '#e8e3d5',
          dark: '#0a0a0a',
          'dark-dim': '#141414',
        },
        ink: {
          DEFAULT: '#0a0a0a',
          muted: '#6b6b6b',
          subtle: '#9a9a9a',
          dark: '#f4f0e8',
          'dark-muted': '#a8a8a8',
          'dark-subtle': '#666666',
        },
        accent: {
          DEFAULT: '#ff6b35',
          dark: '#ff7d4d',
        },
        line: {
          DEFAULT: '#0a0a0a',
          subtle: '#d4d0c5',
          dark: '#2a2a2a',
          'dark-subtle': '#1f1f1f',
        },
      },
      fontFamily: {
        display: ['Fraunces', 'ui-serif', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(3.5rem, 11vw, 9.5rem)', { lineHeight: '0.92', letterSpacing: '-0.04em' }],
        'display-lg': ['clamp(2.75rem, 7vw, 6rem)', { lineHeight: '0.95', letterSpacing: '-0.035em' }],
        'display-md': ['clamp(2rem, 4.5vw, 3.75rem)', { lineHeight: '1', letterSpacing: '-0.03em' }],
      },
      maxWidth: {
        prose: '65ch',
      },
      transitionTimingFunction: {
        editorial: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
