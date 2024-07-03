/* eslint-disable @typescript-eslint/no-var-requires */
import type { Configuration } from "webpack";

import { rules } from "./webpack.rules";
import path from "path";

const CopyWebpackPlugin = require("copy-webpack-plugin");

rules.push({
  test: /\.css$/,
  use: [{ loader: "style-loader" }, { loader: "css-loader" }],
});

export const rendererConfig: Configuration = {
  module: {
    rules,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "./../angular/dist/browser"),
          to: path.resolve(__dirname, ".webpack/renderer/dist"),
        },
      ],
    }),
  ],
  resolve: {
    extensions: [".js", ".ts", ".jsx", ".tsx", ".css"],
  },
};
