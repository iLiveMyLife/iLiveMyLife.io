const CracoLessPlugin = require('craco-less');

// Mirrors the proven react-scripts 5 setup used by app.iLiveMyLife.io.
module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        javascriptEnabled: true,
                        modifyVars: {
                            '@layout-body-background': '#FFFFFF',
                            '@layout-header-background': '#FFFFFF',
                            '@layout-footer-background': '#FFFFFF',
                        },
                    },
                },
            },
        },
    ],
    babel: {
        plugins: [
            ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }],
        ],
    },
    webpack: {
        configure: (webpackConfig) => {
            // Remove ModuleScopePlugin (allow imports from outside src if needed).
            const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
                ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
            );
            if (scopePluginIndex >= 0) {
                webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
            }

            // Disable code splitting (equivalent to the old customize-cra disableChunk).
            webpackConfig.optimization.splitChunks = { cacheGroups: { default: false } };
            webpackConfig.optimization.runtimeChunk = false;

            return webpackConfig;
        },
    },
};
