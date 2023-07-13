import type { StorybookConfig } from '@storybook/react-webpack5';


const storybookConfig: StorybookConfig = {
        stories: ['../packages/familie-*/src/**/*.stories.@(tsx|mdx)', '../packages/familie-*/*.stories.@(tsx|mdx)'],
        addons: ['@storybook/addon-essentials', '@storybook/addon-a11y', '@storybook/addon-storysource', '@storybook/addon-mdx-gfm'],
        typescript: {
            check: true,
            checkOptions: {},
            reactDocgen: 'react-docgen-typescript',
            reactDocgenTypescriptOptions: {
                shouldExtractLiteralValuesFromEnum: true,
            },
        },
        framework: {
            name: '@storybook/react-webpack5',
            options: {},
        },
        docs: {
            autodocs: true,
        },
        async webpackFinal(config) {
            if (config.module && config.module.rules) {
                config.module.rules.push({
                    test: /\.(less)$/,
                    use: [{
                        loader: 'style-loader',
                    }, {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                compileType: 'icss',
                            },
                        },
                    }, {
                        loader: require.resolve('less-loader'),
                    }],
                });
                config.module.rules.push({
                    test: /\.mjs$/,
                    include: /node_modules/,
                    type: 'javascript/auto',
                });
            }
            if (config.resolve && config.resolve.extensions) {
                config.resolve.extensions.push('.less');

            }
            return config;
        },

    }
;

export default storybookConfig;
