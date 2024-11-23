/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        title: ['"Purna Title"', 'Georgia', 'Cambria', 'serif'],
        body: [
          '"Bricolage Grotesque"',
          'Kanit',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        dark: '#0a0a0a',
        light: '#e4f2f7',
        primary: '#1944f1',
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
        // padding: '1rem',
        screens: {
          sm: '100%',
          md: '100%',
          lg: '1024px',
          xl: '1280px',
          '2xl': '1600px',
        },
      },
    },
  },
  plugins: [],
};
