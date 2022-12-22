const { defineConfig } = require("@vue/cli-service");
const SitemapPlugin = require("sitemap-webpack-plugin").default;
const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer");
const TerserPlugin = require("terser-webpack-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

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
const sitemapPlugin = [
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

const bundleAnalyzerPlugin = [
  new BundleAnalyzerPlugin({
    openAnalyzer: false,
    analyzerMode: "static",
    reportFilename: "owl-bundle-report.html",
  }),
];

// const htmlWebpackPlugin = [
//   new HtmlWebpackPlugin({
//     // hash: true,
//     template: "./public/index.html",
//     minify: {
//       collapseWhitespace: true,
//       removeComments: true,
//     },
//   }),
// ];

// const cleanWebpackPlugin = [new CleanWebpackPlugin()];
const miniCssExtractPlugin = [
  new MiniCssExtractPlugin({
    filename: "css/[name].css",
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
      config.module.rules.push({
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      });
      config.optimization = {
        usedExports: true,
        splitChunks: {
          cacheGroups: {
            commons: {
              test: /[\\/]node_modules[\\/]/,
              name: "vendors",
              chunks: "all",
            },
          },
        },
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true,
              },
            },
          }),
        ],
        concatenateModules: true,
      };
      config.plugins.push(
        ...sitemapPlugin,
        ...bundleAnalyzerPlugin,
        // ...htmlWebpackPlugin,
        // ...cleanWebpackPlugin,
        ...miniCssExtractPlugin
      );
    }
  },
});
