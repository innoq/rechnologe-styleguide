module.exports = {
  js: [
    {
      source: "./assets/javascripts/application.js",
      target: "./public/assets/javascripts/application.js"
    }
  ],

  sass: [
    {
      source: "./assets/stylesheets/application.scss",
      target: "./public/assets/stylesheets/application.css"
    }
  ],

  static: [
    {
      source: "./assets/images",
      target: "./public/assets/images"
    }
  ],

  manifest: {
    target: "./public/assets/manifest.json",
    key: "short",
    webRoot: "./public"
  },

  watchDirs: ["./assets", "./components"]
};
