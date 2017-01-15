import webpack from 'webpack'
import {output, src, dll} from '../client/config'


export default  {
    //devtool: false,
    //node: {fs: 'empty'},
    context: process.cwd(),
    profile: true,
    cache: true,
    entry: {
        vendor: ['redom'],
    },
    output: {
        filename: '/assets/js/[name].js',
        path: output,
        library: '[name]',
        libraryTarget: 'umd',
        //sourceMapFilename: '/map/[file].map',
    },
    plugins: [
        new webpack.DllPlugin({
            context: process.cwd(),
            path: dll,
            name: '[name]'
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        // new webpack.optimize.CommonsChunkPlugin('commons'),
        // new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}),
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
                drop_console: true,
                unsafe: true
            }
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /fi/),
        new webpack.NoEmitOnErrorsPlugin()
    ],
    resolve: {
        unsafeCache: true,
        extensions: ['.js', '.pug', '.tag', '.less', '.svg'],
        modules: ['loaders', 'node_modules', 'src']
    }
}