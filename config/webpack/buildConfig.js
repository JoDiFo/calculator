import { configureDevServer } from "./configureDevServer.js";
import { configureOptimization } from "./configureOptimization.js";
import { configurePlugins } from "./configurePlugins.js";
import { configureRules } from "./configureRules.js";

export const buildConfig = (config) => {
  const { isDev, mode, paths } = config;

  return {
    mode,
    target: "web",
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: "[name].[contenthash].js",
      clean: true,
    },
    plugins: configurePlugins(paths.html, paths.favIcon),
    optimization: configureOptimization(),
    module: {
      rules: configureRules(isDev),
    },
    devtool: isDev ? "eval-source-map" : undefined,
    devServer: isDev ? configureDevServer() : undefined,
  };
};
