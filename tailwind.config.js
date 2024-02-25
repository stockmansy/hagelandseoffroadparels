/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./themes/**/*.{html,js}", "./content/*.md"],
  theme: {
    fontFamily: {
      sans: ['Noto Sans', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'blue': '#1fb6ff',
        'purple': '#7e5bef',
        'pink': '#ff49db',
        'orange': '#ff7849',
        'green': '#13ce66',
        'yellow': '#ffc82c',
        'gray-dark': '#273444',
        'gray-normal': '#8492a6',
        'gray-light': '#d3dce6',
  
        'base-color': 'rgb(93, 49, 45)',
        'base-accent': 'rgb(255, 255, 61)',
        'side-color': '#ae8a87',
        'side-color-accent': '#000',
        'link-active': '#467370',
        'link-social': 'rgba(255, 255, 255, 0.3)',
        'link-social-active': '#fff',
        'link-social-hover': 'rgba(255, 255, 255, 0.5)',
        'link-social-background': 'rgba(255, 255, 255, 0.1)'
      },
    }
  },
  plugins: [],
  mode: "jit",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
