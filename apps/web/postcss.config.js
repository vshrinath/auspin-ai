module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    // CSS minification in production
    ...(process.env.NODE_ENV === 'production'
      ? {
          cssnano: {
            preset: [
              'default',
              {
                discardComments: {
                  removeAll: true,
                },
                // Optimize CSS for better compression
                normalizeWhitespace: true,
                colormin: true,
                minifyFontValues: true,
                minifySelectors: true,
              },
            ],
          },
        }
      : {}),
  },
};
