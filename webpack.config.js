const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  mode: "production", // Ou 'development'
  entry: "./src/index.tsx",
  devtool: false, // Desative os mapas de origem se não precisar deles
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    library: "MyLibrary",
    libraryTarget: "umd",
    globalObject: "this",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        use: "source-map-loader",
        enforce: "pre",
        exclude: /node_modules/, // Ignora source maps de node_modules
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name].[ext]",
              outputPath: "assets/icons/", // Altere o caminho conforme necessário
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: "src/assets/icon", to: "assets/icon" }],
    }),
  ],
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  ignoreWarnings: [
    {
      module: /node_modules\/w-design-system\/dist\/.*\.js$/,
      message: /Failed to parse source map/,
    },
  ],
};
