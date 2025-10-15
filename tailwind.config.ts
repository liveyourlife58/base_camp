import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Military OD Green color scheme
        'od-green': {
          50: '#f0f4f0',
          100: '#d9e2d9',
          200: '#b3c5b3',
          300: '#8da88d',
          400: '#678b67',
          500: '#4a6b4a', // Primary OD Green
          600: '#3d563d',
          700: '#304130',
          800: '#232c23',
          900: '#161716',
        },
        'od-tan': {
          50: '#faf9f7',
          100: '#f3f1ed',
          200: '#e7e3db',
          300: '#d5cfc1',
          400: '#c0b7a3',
          500: '#a8997f',
          600: '#948066',
          700: '#7a6854',
          800: '#655647',
          900: '#53473c',
        },
        'od-brown': {
          50: '#f7f5f3',
          100: '#ede9e4',
          200: '#d9d1c8',
          300: '#c1b4a6',
          400: '#a89684',
          500: '#8f7a6b',
          600: '#7d6a5c',
          700: '#68584c',
          800: '#564a40',
          900: '#473e36',
        },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-geist-mono)', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideInLeft: {
          '0%': { transform: 'translateX(-20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideInRight: {
          '0%': { transform: 'translateX(20px)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
