import webpack from 'webpack'
import LessCleanCSS from 'less-plugin-clean-css'
import LessPluginAutoPrefix from 'less-plugin-autoprefix'
import {output, shared, vendor, IS_CLIENT, IS_SERVER} from '../client/config'


export default  {
    watch: true,
    node: {fs: 'empty'},
    cache: true,
    context: process.cwd(),
    entry: {
        client: ['./client'],
        css: ['./client/less/client'],
    },
    output: {
        path: output,
        filename: '/assets/js/[name].js',
        sourceMapFilename: '[file].map',
        libraryTarget: 'umd'
    },
    plugins: [

        new webpack.DllReferencePlugin({
            context: process.cwd(),
            manifest: require(vendor)
        }),

        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: true,
            options: {
                lessPlugins: [
                    new LessCleanCSS({advanced: true}),
                    new LessPluginAutoPrefix({browsers: ['last 1 versions']})
                ]
            },
        }),


        // new webpack.ProvidePlugin({}),

        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            minimize: true,
            debug: false,
            beautify: false,
            comments: false,
            compress: {
                sequences: true,
                booleans: true,
                loops: true,
                unused: true,
                warnings: false,
                drop_console: false,
                unsafe: true
            }
        }),

        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),

        new webpack.DefinePlugin({
            'process.env.IS_SERVER': IS_SERVER,
            'process.env.IS_CLIENT': IS_CLIENT
        })

    ],
    resolve: {
        unsafeCache: true,
        extensions: ['.js', '.pug', '.less'],
        modules: ['node_modules']
    },
    resolveLoader: {
        modules: ['bin/loaders', 'node_modules']
    },
    module: {
        loaders: [
            {
                test: /\.pug$/,
                exclude: /node_modules/,
                loaders: [
                    {loader: 'fl-loader', query: {name: '[name].html'}},
                    {loader: 'pug-loader'}
                ]
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader', query: {presets: 'env', cacheDirectory: 'tmp'}
            },
            {
                test: /\.less$/,
                exclude: /node_modules/,
                loaders: [
                    {loader: 'file-loader', query: {name: '/assets/css/[name].css'}},
                    {loader: 'less-loader', query: {paths: shared}}]
            }
        ]
    }
}


