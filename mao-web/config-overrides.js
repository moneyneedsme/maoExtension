const { override, fixBabelImports } = require('customize-cra');
module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    ibraryDirectory: 'es',
    style: 'css',
  }),
);