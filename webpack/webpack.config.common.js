/**
 * Common
 *
 * @file webpack.config.common.js
 * @author Jérémy Levron <jeremylevron@19h47.fr> (https://19h47.fr)
 */

// Plugins
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackNotifierPlugin = require('webpack-notifier');
const ESLintPlugin = require('eslint-webpack-plugin');

const resolve = require('./webpack.utils');

module.exports = {
	entry: {
		dist: resolve('lib/index.ts'),
		docs: resolve('lib/index.ts'),
	},
	output: {
		library: 'DisclosureButton',
		libraryTarget: 'umd',
		filename: '../[name]/main.js',
		path: resolve('dist'),
	},
	optimization: {
		splitChunks: {
			// include all types of chunks
			chunks: 'all',
			name: 'vendors',
		},
	},
	devServer: {
		// static: [
		// 	resolve('/')
		// ],
		// compress: true,
		port: 3000,
		// inline: true,
	},
	resolve: {
		alias: {
			'@': resolve('lib'),
			Utils: resolve('lib/utils'),
		},
	},
	module: {
		rules: [
			{
				test: /\.tsx?$/,
				use: 'ts-loader',
				exclude: /node_modules/,
			},
		],
	},
	plugins: [
		new CleanWebpackPlugin({
			cleanOnceBeforeBuildPatterns: [resolve('dist'), resolve('docs')],
		}),
		new HtmlWebpackPlugin({
			filename: resolve('docs/index.html'),
			template: resolve('index.html'),
			inject: false,
		}),
		new WebpackNotifierPlugin({
			title: 'Webpack',
			excludeWarnings: true,
			alwaysNotify: true,
		}),
		new ESLintPlugin(),
	],
};
