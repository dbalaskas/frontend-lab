import type { Config } from 'tailwindcss';
import typography from '@tailwindcss/typography';

export default <Partial<Config>>{
  content: [],
  theme: {
    screens: { // default
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '3xl': '1536px'
    },
    extend: {
      colors: {
        primary: 'red' // colors.green
      }
    }
  },
  plugins: [
    typography
  ]
};
