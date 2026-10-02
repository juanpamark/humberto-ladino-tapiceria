/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0d0e12',
          surface: '#15171e',
          card: '#1c1f29',
          border: '#2a2e3d',
          gold: {
            light: '#fde68a',
            DEFAULT: '#f59e0b',
            dark: '#d97706',
          },
          copper: {
            light: '#f6ad55',
            DEFAULT: '#dd6b20',
            dark: '#c05621',
          }
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        }
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      }
    },
  },
  plugins: [],
}
