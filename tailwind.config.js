module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        google: '#dfe1e5',
      },
      boxShadow: {
        google: '0px 1px 6px 0px rgba(31, 32, 36, 0.23)',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
