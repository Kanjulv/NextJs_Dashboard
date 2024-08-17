const isProd = process.env.NODE_ENV === 'production';

module.exports = {
  basePath: isProd ? '/free-nextjs-admin-dashboard-main' : '',
  assetPrefix: isProd ? '/free-nextjs-admin-dashboard-main/' : '',
  output: 'export',
};
