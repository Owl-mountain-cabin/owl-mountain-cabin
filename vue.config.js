const { defineConfig } = require("@vue/cli-service");
// const path = require("path");
// const PrerenderSPAPlugin = require("prerender-spa-plugin");
// const paths = require("@/routes/paths");
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
// const routes = paths.map((path) => `${path.path}`);

// const productionPlugins = [
//   new PrerenderSPAPlugin({
//     staticDir: path.join(__dirname, "dist"),
//     routes,
//     renderer: new Renderer({
//       renderAfterElementExists: "#app",
//     }),
//   }),
// ];

module.exports = defineConfig({
  transpileDependencies: ["vuetify"],
  devServer: {
    client: {
      overlay: false,
    },
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "@/styles/variables.scss"; @import "@/styles/_mixins.scss";`,
      },
    },
  },
  // configureWebpack: (config) => {
  //   if (process.env.NODE_ENV === "production") {
  //     config.plugins.push(...productionPlugins);
  //   }
  // },
});
