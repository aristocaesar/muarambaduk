/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/views/**/*.{js,ejs}', './src/public/**/*.svg'],
  theme: {
    colors: {
      'mountain-meadow': {
        50: '#f0fdf4',
        100: '#dcfce7',
        200: '#bbf7d0',
        300: '#86efad',
        400: '#4ade81',
        500: '#25d366',
        600: '#16a34b',
        700: '#15803e',
        800: '#166534',
        900: '#14532d',
        950: '#052e16',
      },
      'cod-gray': {
        50: '#f7f7f7',
        100: '#e3e3e3',
        200: '#c8c8c8',
        300: '#a4a4a4',
        400: '#818181',
        500: '#666666',
        600: '#515151',
        700: '#434343',
        800: '#383838',
        900: '#313131',
        950: '#1e1e1e',
      },
      alabaster: {
        50: '#f9f9f9',
        100: '#f0f0f0',
        200: '#e4e4e4',
        300: '#d1d1d1',
        400: '#b4b4b4',
        500: '#9a9a9a',
        600: '#818181',
        700: '#6a6a6a',
        800: '#5a5a5a',
        900: '#4e4e4e',
        950: '#282828',
      },
      'mine-shaft': {
        50: '#f7f7f7',
        100: '#e3e3e3',
        200: '#c8c8c8',
        300: '#a4a4a4',
        400: '#818181',
        500: '#666666',
        600: '#515151',
        700: '#434343',
        800: '#383838',
        900: '#333333',
        950: '#1a1a1a',
      },
      white: {
        50: '#ffffff',
        100: '#efefef',
        200: '#dcdcdc',
        300: '#bdbdbd',
        400: '#989898',
        500: '#7c7c7c',
        600: '#656565',
        700: '#525252',
        800: '#464646',
        900: '#3d3d3d',
        950: '#292929',
      },
      denim: {
        50: '#f1f7fe',
        100: '#e3eefb',
        200: '#c0ddf7',
        300: '#89c2f0',
        400: '#49a2e7',
        500: '#2287d5',
        600: '#1570bf',
        700: '#115593',
        800: '#12497a',
        900: '#153e65',
        950: '#0e2743',
      },
    },
    container: {
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
