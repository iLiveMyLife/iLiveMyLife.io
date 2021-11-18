const { injectBabelPlugin } = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');
const { override, fixBabelImports, addLessLoader, disableChunk, removeModuleScopePlugin } = require('customize-cra');
// replace moment with dayjs const AntdDayjsWebpackPlugin = require('antd-dayjs-webpack-plugin');

module.exports = override(
    fixBabelImports('import', {
        libraryName: 'antd',
        libraryDirectory: 'es',
        style: true,
    }),
    addLessLoader({
        javascriptEnabled: true,
        importLoaders: true,
        modifyVars: {
            //'@primary-color': '#1DA57A',
            "@layout-body-background": "#FFFFFF",
            "@layout-header-background": "#FFFFFF",
            "@layout-footer-background": "#FFFFFF"
        },
    }),
    disableChunk(),
    removeModuleScopePlugin(),
    /* Is it a correct way to add plugin?
    function(config) {
        config.plugins = (config.plugins || []).concat([
            new AntdDayjsWebpackPlugin()
        ]);

        return config;
    }
    */
);
/* Old configuration.
module.exports = function override(config, env) {
    config = injectBabelPlugin(['import', { libraryName: 'antd', style: true }], config);
    config = rewireLess.withLoaderOptions({
      modifyVars: {
          "@layout-body-background": "#FFFFFF",
          "@layout-header-background": "#FFFFFF",
          "@layout-footer-background": "#FFFFFF"
      },
      javascriptEnabled: true
    })(config, env);
    return config;
};
*/
