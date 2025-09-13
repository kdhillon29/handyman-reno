import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        waves: "url('/waves.svg')",
      },
      colors: {
        primary: '#F7CF05',
      },

      fontSize: {
        clamp: 'clamp(.5rem, 5vw, 1rem)',
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        'fade-out': {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
          },
        },
        'slide-in': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in': 'fade-in  .8s ease-in-out',
        'fade-out': 'fade-out .8s ease-in-out',
        'slide-in': 'slide-in 1s ease var(--slide-in-delay,0) forwards',
      },
    },
  },
  plugins: [],
};
export default config;
