module.exports = {
    stories: ['../packages/**/*.stories.@(tsx|mdx)'],
    addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-storysource'],
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
            // propFilter: (prop) => ['label', 'disabled'].includes(prop.name),
        },
    },
    webpackFinal: async config => {
        // config.module.rules.push({
        //     test: /\.(ts|tsx)$/,
        //     use: [
        //         { loader: require.resolve('react-docgen-typescript-loader') },
        //     ],
        // });
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
