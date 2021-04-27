module.exports = {
    stories: ['../packages/**/*.stories.@(tsx|mdx)'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-storysource',
        '@storybook/addon-actions',
        '@storybook/addon-links',
        '@storybook/addon-knobs',
        '@storybook/addon-a11y',
        '@storybook/addon-postcss',
    ],
    webpackFinal: async config => {
        config.module.rules.push({
            test: /\.(ts|tsx)$/,
            use: [
                { loader: require.resolve('awesome-typescript-loader') },
                { loader: require.resolve('react-docgen-typescript-loader') },
            ],
        });
        config.module.rules.push({
            test: /\.(less)$/,
            use: [
                { loader: require.resolve('style-loader') },
                { loader: require.resolve('css-loader'),
                    options: {
                        modules: {
                            compileType: 'icss',
                        },
                    }
                },
                { loader: require.resolve('less-loader') },
            ],
        });
        config.resolve.extensions.push('.ts', '.tsx', '.less');
        return config;
    },
};
