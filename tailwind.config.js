/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Purna Title"', 'Georgia', 'Cambria', 'serif'],
        body: [
          '"Bricolage Grotesque"',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        dark: '#1a1a1a',
        light: '#e4f2f7',
        primary: '#2980b9',
      },
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
        '3xl': '1920px',
      },
      container: {
        center: true,
        padding: '1.5rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '100%',
          xl: '100%',
          '2xl': '100%',
          '3xl': '100%',
          // lg: '1024px',
          // xl: '1280px',
          // '2xl': '1536px',
          // '3xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
