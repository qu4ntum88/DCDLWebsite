// postcss.config.cjs
module.exports = {
  plugins: {
    // IMPORTANT CHANGE: Reference the correct PostCSS plugin package
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
};