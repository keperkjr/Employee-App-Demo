// vue.config.js
module.exports = {
    publicPath: 'vue-app',
    chainWebpack: config => {
        config
            .plugin('html')
            .tap(args => {
                args[0].title = "Employee Demo";
                return args;
            })
    }
}