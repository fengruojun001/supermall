module.exports = {
    configureWebpack: {

        resolve: {
            // extensions: ['.js', '.vue', '.json'],
            alias: {
                // '@': resolve('src'),
                // 'assets': resolve('src/assets'),
                // 'components': resolve('src/components'),
                // 'views': resolve('src/views'),
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'views': '@/views',
                'network': '@/network'
            }
        },
    },
}