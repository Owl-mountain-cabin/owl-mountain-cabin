const { defineConfig } = require("@vue/cli-service");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
// const path = require("path");
// const PrerenderSPAPlugin = require("prerender-spa-plugin");
// const paths = require("@/routes/paths");
// const Renderer = PrerenderSPAPlugin.PuppeteerRenderer;
// const routes = paths.map((path) => `${path.path}`);

const paths = [
  {
    path: "/",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: "hourly",
  },
  {
    path: "/home",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: "hourly",
  },
  {
    path: "/menu",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: "hourly",
  },
  {
    path: "/store",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: "hourly",
  },
  {
    path: "/franchise",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: "hourly",
  },
  {
    path: "/company",
    lastmod: new Date().toISOString().slice(0, 10),
    priority: 0.8,
    changefreq: "hourly",
  },
];
const productionPlugins = [
  // new PrerenderSPAPlugin({
  //   staticDir: path.join(__dirname, "dist"),
  //   routes,
  //   renderer: new Renderer({
  //     renderAfterElementExists: "#app",
  //   }),
  // }),
  new SitemapPlugin({
    base: "https://www.owlmtcabin-official.com",
    paths,
    options: {
      filename: "sitemap.xml",
      lastmod: true,
      priority: 0.8,
      changefreq: "hourly",
    },
  }),
];

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
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === "production") {
      config.plugins.push(...productionPlugins);
    }
  },
});
