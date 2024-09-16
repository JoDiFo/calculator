import path from "path";
import { fileURLToPath } from "url";

import { buildConfig } from "./config/webpack/buildConfig.js";

export default (env) => {
  const dirname = path.dirname(fileURLToPath(import.meta.url));
  console.log(dirname)

  const mode = env.mode || "development";
  const isDev = mode === "development";
  const paths = {
    entry: [path.resolve(dirname, "src", "index.js")],
    output: path.resolve(dirname, "dist"),
    html: path.resolve(dirname, "public", "index.html"),
    favIcon: path.resolve(dirname, "public", "favicon.ico"),
  };

  const config = buildConfig({ isDev, mode, paths });
  return config;
};
