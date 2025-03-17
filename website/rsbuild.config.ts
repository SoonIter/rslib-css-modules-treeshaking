import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSwc } from '@rsbuild/plugin-webpack-swc';
import { webpackProvider } from '@rsbuild/webpack';

export default defineConfig({
  // provider: webpackProvider,
  plugins: [
    // pluginSwc(),
    // pluginReact()
  ],
  output: {
    minify: false,
  },
});
