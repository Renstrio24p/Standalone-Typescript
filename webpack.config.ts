const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const path = require('path');
const webpack = require('webpack');

type module = {
  mode: string
}

module.exports = (argv: module) => {
  const isProduction = argv.mode === 'production';

  const devServerOptions = {
    port: '3600',
    proxy: {
      '/api': {
        target: 'http://localhost:8800',
        secure: false,
        changeOrigin: true,
      },
    },
    static: {
      directory: path.join(__dirname, 'src'),
      // publicPath: '/'
    },
    open: true,
    hot: !isProduction,
    liveReload: !isProduction,
    historyApiFallback: true,
  };

  return {
    mode: isProduction ? 'production' : 'development',
    entry: './src/index.ts',
    output: {
      path: path.resolve(__dirname, './dist'),
      filename: 'assets/[name].[contenthash].js',
      chunkFilename: 'assets/[name].[contenthash].js',
      // publicPath: '/',
    },
    target: 'web',
    devServer: devServerOptions,
    resolve: {
      extensions: ['.mjs', '.js','.ts', '.json'],
    },
    module: {
      rules: [
        {
          test: /node_modules/,
          use: {
            loader: 'esbuild-loader',
            options: {
              target: 'esnext',
            },
          },
        },
        {
          test: /\.ts?$/,
          use: {
            loader: 'esbuild-loader',
            options: {
              target: 'esnext',
              minify: true,
            },
          },
        },
        {
          test: /\.(c|sa|sc)ss$/,
          exclude: /\.module\.(c|sa|sc)ss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader',
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'css',
                minify: true,
                target: 'es2015',
              },
            },
          ],
        },
        {
          test: /\.module\.(c|sa|sc)ss$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true,
              },
            },
            'sass-loader',
            {
              loader: 'esbuild-loader',
              options: {
                loader: 'css',
                minify: true,
                target: 'es2015',
              },
            },
          ],
        },
        {
          test: /\.(png|jpe?g|gif|svg|webp)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name].[contenthash][ext]',
          },
        },
        {
          test: /\.(mp4|webm|ogg|ogv)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'videos/[name].[contenthash][ext]',
          },
        },
        {
          test: /node_modules\/svelte\/.*\.mjs$/,
          resolve: {
            fullySpecified: false,
          },
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.join(__dirname, './', 'index.html'),
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'src/images',
            to: 'images',
          },
          {
            from: 'src/videos',
            to: 'videos',
          },
        ],
      }),
      new Dotenv(),
    ],
    optimization: {
      minimize: isProduction,
      splitChunks: {
        chunks: 'async',
        minSize: 244 * 1024, // 244 KiB
        cacheGroups: {
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            priority: -10,
          },
          default: {
            minChunks: 2,
            priority: -20,
            reuseExistingChunk: true,
          },
        },
      },
    },
    performance: {
      maxAssetSize: 244000,
      maxEntrypointSize: 244000,
    },
    cache: {
      type: 'filesystem',
    },
    stats: 'errors-warnings',
  };
};
