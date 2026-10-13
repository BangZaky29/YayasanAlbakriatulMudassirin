/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#faf9f6',
        'paper-warm': '#f4f1ea',
        'paper-subtle': '#eeebd9',
        'deep-forest': '#09452b',
        'forest-dark': '#05291a',
        'forest-light': '#125e3c',
        'earthy-gold': '#d97706',
        'warm-terracotta': '#c2593f',
        ink: '#1a1d1a',
        'ink-muted': '#5c635b',
      },
      fontFamily: {
        serif: ['Newsreader', 'Georgia', 'serif'],
        display: ['Cinzel', 'serif'],
        sans: ['Plus Jakarta Sans', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'gutter': '1.5rem',
        'gutter-mobile': '1rem',
        'margin': '3rem',
        'margin-tablet': '2rem',
        'margin-mobile': '1.25rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'ping-slow': 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
    },
  },
  plugins: [],
};
