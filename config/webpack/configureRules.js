import MiniCssExtractPlugin from "mini-css-extract-plugin";

export const configureRules = (isDev) => {
  return [
    {
      test: /\.css$/i,
      use: [isDev ? "style-loader" : MiniCssExtractPlugin.loader, "css-loader"],
    },
  ];
};
