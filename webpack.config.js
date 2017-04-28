/**
 * Created by heimao on 2017/4/26.
 */
var path = require('path');
var wevpack = require('webpack');
module.exports = {
    entry:'./src/main.js',
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'/dist/',//然而“publicPath”项则被许多Webpack的插件用于在生产模式和开发模式下下更新内嵌到css、html，img文件里的url值
        filename:'build.js'
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                loader:'vue-loader',
                options:{
                    loader:{
                        //do something
                    }
                }
            },
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/
            },
            {
                test:/\.(png|jpg|gif|svg)$/,
                loader:'file-loader',
                options:{
                    name:'[name].[ext]?[hash]'
                }
            },
            {
                test:/\.css$/,
                loader:"style-loader!css-loader"
            }
        ]
    },
    resolve:{
        alias:{
            vue:'vue/dist/vue.js'
        }
    },
    devServer:{
        historyApiFallback:true,
        noInfo:true,
        inline:true
    },
    performance:{
        hints:false
    },
    devtool:'#eval-source-map'
};

if(process.env.NODE_ENV==='production'){
    modules.exports.devtool = '#source-map';
    modules.exports.plugins = (module.exports.plugins || [])
        .concat([
            new webpack.DefinePlugin({
                'process.env':{
                    NODE_ENV:'"production"'
                }
            }),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap:true,
                compress:{
                    warnings:false
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize:true
            })
        ])

}
