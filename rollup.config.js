const nodeResolve = require('@rollup/plugin-node-resolve')
module.exports = {
    input: 'ext/src/bg/background.js',
    preserveModules: true,
    output: {
        dir: 'dist/ext/src/bg',
        format: 'esm',
        
    },
    plugins: [nodeResolve()]
}