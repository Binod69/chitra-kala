import { nextui } from '@nextui-org/react';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontWeight: {
        regular: '400',
        bold: '500',
        extrabold: '600',
      },
      boxShadow: {
        btnShadow: '2px 2px 0px 0px  hsl(0, 0%, 6%)',
      },
      colors: {
        colors1: '#F3F3F3',
        colors2: '#FE90E7',
        colors3: '#23A094',
        yellow: '#FFC904',
        colors5: '#0F0F0F',
        colors6: '#3E3E3E',
      },
    },
  },
  darkMode: 'class',
  plugins: [nextui()],
};
