module.exports = function babelConfig(api) {
    api.cache(false);

    const presets = [
        '@babel/preset-env',
        '@babel/preset-react',
    ];

    const plugins = [
        '@babel/plugin-syntax-dynamic-import',
    ];

    return {
        presets,
        plugins,
    };
};
