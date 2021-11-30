module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '112': '28rem',
        '128': '32rem',
        '160': '40rem',
        '176': '44rem',
        '192': '48rem',
        '256': '64rem',
        '384': '96rem',
      },
      colors: {
        "black-transparent": "rgba(0, 0, 0, 0.8)"
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
