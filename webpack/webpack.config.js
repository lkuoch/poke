/* eslint-disable global-require */
/* eslint-disable import/no-dynamic-require */

const webpackMerge = require("webpack-merge");
const commonConfig = require("./shared/webpack.common.js");

module.exports = ({ env }) => {
  const envConfig = require(`./environments/webpack.${env}.js`);

  return webpackMerge(commonConfig, envConfig);
};
