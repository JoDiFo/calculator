export const configureDevServer = () => {
  return {
    port: 5017,
    open: true,
    historyApiFallback: true,
    hot: true,
    client: {
      overlay: true,
    },
  };
};
