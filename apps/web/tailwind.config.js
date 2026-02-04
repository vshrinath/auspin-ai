/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Deep Teal - Primary brand color
        'deep-teal': {
          DEFAULT: '#0f3d3a',
          50: '#f0f9f8',
          100: '#d9f0ee',
          200: '#b3e1dd',
          300: '#8dd2cc',
          400: '#67c3bb',
          500: '#41b4aa',
          600: '#2d8a82',
          700: '#1f5f5a',
          800: '#0f3d3a',
          900: '#0a2826',
        },
        // Primary alias (maps to deep-teal for component consistency)
        'primary': {
          DEFAULT: '#0f3d3a',
          50: '#f0f9f8',
          100: '#d9f0ee',
          200: '#b3e1dd',
          300: '#8dd2cc',
          400: '#67c3bb',
          500: '#41b4aa',
          600: '#2d8a82',
          700: '#1f5f5a',
          800: '#0f3d3a',
          900: '#0a2826',
        },
        // Gold Accent - CTA and highlights
        'gold': {
          DEFAULT: '#EAB308',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Accent alias (maps to gold for component consistency)
        'accent': {
          DEFAULT: '#EAB308',
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#EAB308',
          600: '#CA8A04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        // Warm Stone - Backgrounds
        'stone': {
          DEFAULT: '#FAFAF9',
          50: '#FAFAF9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['JetBrains Mono', 'Menlo', 'Monaco', 'Courier New', 'monospace'],
      },
      fontSize: {
        // Mobile-first scale (1.2 ratio)
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      spacing: {
        // 4px base unit for mobile, extends to 8px on desktop
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      boxShadow: {
        'card': '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-in': 'slideIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-50px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      minHeight: {
        'touch-target': '44px',
      },
      minWidth: {
        'touch-target': '44px',
      },
    },
  },
  plugins: [],
};
