module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          {
            options: {
              moudules: true,
            },
          },
        ],
      },
    ],
  },
};
