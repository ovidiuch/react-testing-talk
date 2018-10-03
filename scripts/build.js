/* eslint-env node */

import { join } from 'path';
import cpy from 'cpy';
import webpack from 'webpack';
// HACK: Do not try this at home!
import { getCosmosConfig } from 'react-cosmos-config';
import enhanceWebpackConfig from 'react-cosmos/dist/server/web/webpack/enhance-webpack-config';
import { getUserWebpackConfig } from 'react-cosmos/dist/server/web/webpack/user-webpack-config';

(async () => {
  const cosmosConfig = getCosmosConfig();
  const userWebpackConfig = getUserWebpackConfig(cosmosConfig);
  const webpackConfig = enhanceWebpackConfig({
    webpack,
    userWebpackConfig,
    shouldExport: true
  });

  // HACK: Do not try this at home!!!
  webpackConfig.output.path = join(__dirname, '../build');
  webpackConfig.entry[1] = join(__dirname, '../pres/index.js');
  webpackConfig.plugins[0].options.filename = 'index.html';

  const compiler = webpack(webpackConfig);
  await new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err) {
        reject(err);
      } else if (stats.hasErrors()) {
        reject();
      } else {
        resolve(stats);
      }
    });
  });

  await copyStatics();
})();

async function copyStatics() {
  return cpy('**/*', `../build`, {
    cwd: join(__dirname, `../static`),
    parents: true
  });
}
