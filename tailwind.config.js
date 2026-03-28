/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', '"Courier New"', 'monospace'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'Consolas', '"Courier New"', 'monospace'],
      },
      colors: {
        accent: '#3fb950',
        'accent-alt': '#00d97e',
        'term-red': '#ff5f57',
        'term-yellow': '#febc2e',
        'term-green': '#28c840',
        gray: {
          50:  '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#21262d',
          900: '#161b22',
          950: '#0d1117',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease forwards',
        'blink':      'blink 1s step-end infinite',
        'scanline':   'scanline 8s linear infinite',
        'glow':       'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%':      { opacity: '0' },
        },
        scanline: {
          '0%':   { top: '-2px' },
          '100%': { top: '100%' },
        },
        glow: {
          from: { textShadow: '0 0 4px #3fb95060' },
          to:   { textShadow: '0 0 14px #3fb950, 0 0 28px #3fb95050' },
        },
      },
    },
  },
  plugins: [],
}

