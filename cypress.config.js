module.exports = {
  component: {
    devServer: {
      framework: "nuxt",
      bundler: "webpack",
    },
    scrollBehavior: 'center',
    video: false,
    screenshots: false,
  },

  e2e: {
    setupNodeEvents(on, config) {

    },
    scrollBehavior: 'center',
    experimentalStudio: true,
    video: false,
    screenshots: false,
  },

};
