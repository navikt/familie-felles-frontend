const less = require('rollup-plugin-less');

module.exports = {
    rollup(config) {
        config.plugins.unshift(less({ output: 'dist/styles.css' }));
        return config;
    },
};
