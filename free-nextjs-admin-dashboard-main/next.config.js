const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/repo-name' : '',
  assetPrefix: isProd ? '/repo-name/' : '',
  output: 'export',
};
