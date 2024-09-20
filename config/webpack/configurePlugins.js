import HTMLWebpackPlugin from "html-webpack-plugin";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";

export const configurePlugins = (htmlPath, faviconPath) => {
  return [
    new HTMLWebpackPlugin({
      favicon: faviconPath,
      template: htmlPath,
    }),
    new MiniCssExtractPlugin(),
    new webpack.ProgressPlugin(),
  ];
};
