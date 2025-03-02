// tailwind.config.ts
import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{html,js,jsx,ts,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        xsm: '400px', // Adding a new custom breakpoint named `xsm`
      },
    },
  },
  plugins: [],
};

export default config;
