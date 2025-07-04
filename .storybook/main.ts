import { dirname, join } from 'path';
import type { StorybookConfig } from '@storybook/react-webpack5';

const storybookConfig: StorybookConfig = {
    stories: [
        '../packages/familie-*/src/**/*.@(mdx|stories.@(tsx))',
        '../packages/familie-*/*.@(mdx|stories.@(tsx))',
    ],
    addons: [
        getAbsolutePath('@storybook/addon-a11y'),
        getAbsolutePath('@storybook/addon-webpack5-compiler-swc'),
        getAbsolutePath('@storybook/addon-docs'),
    ],
    typescript: {
        check: true,
        checkOptions: {},
        reactDocgen: 'react-docgen-typescript',
        reactDocgenTypescriptOptions: {
            shouldExtractLiteralValuesFromEnum: true,
        },
    },
    framework: {
        name: getAbsolutePath('@storybook/react-webpack5'),
        options: {},
    },
    docs: {},
    async webpackFinal(config) {
        if (config.module && config.module.rules) {
            config.module.rules.push({
                test: /\.(less)$/,
                use: [
                    {
                        loader: 'style-loader',
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                mode: 'icss',
                            },
                            importLoaders: 1,
                        },
                    },
                    {
                        loader: require.resolve('less-loader'),
                    },
                ],
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
};
export default storybookConfig;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getAbsolutePath(value: string): any {
    return dirname(require.resolve(join(value, 'package.json')));
}
