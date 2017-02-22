var path = require('path');
var webpack = require('webpack');
var WebpackMd5Hash = require('webpack-md5-hash');
var RemoveWebpackPlugin = require('remove-webpack-plugin');
var merge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var hash = chunkhash = contenthash = '';

// hash = '[hash:8].';
// chunkhash = '[chunkhash:8].';
// contenthash = '[contenthash:8].';


var extractSASS = new ExtractTextPlugin('css/[name].'+ contenthash +'css');

module.exports = merge({
    /**
     * 源文件入口文件
     * 这里的文件在使用html-webpack-plugin的时候会自动将这些资源插入到html中
     */
    entry: {
        // 公共文件
        fly: './index.js'
    },

    // 构建之后的文件目录配置
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/dist/', // html 中引用资源的位置
        filename: 'js/[name].' + chunkhash + 'js',
        chunkFilename: 'js/[name].' + chunkhash + 'js'
    },

    // webpack 开始执行之前的处理
    resolve: {

        // 配置别名
        alias: {},

        fallback: [path.join(__dirname, './node_modules')],

        // 配置哪些文件不需要后缀自动识别
        extensions: ['', '.js']

    },

    //
    module: {
        /*        preLoaders: [
         {
         test: /\.js$/,
         loader: 'baggage?[file].html&[file].css'
         }
         ],*/
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            // 配置css的抽取器、加载器。'-loader'可以省去
            // 这里使用自动添加CSS3 浏览器前缀

            {
                test: /\.scss$/i,
                loader: extractSASS.extract(['css', 'sass!postcss'])
            },

            // 处理html图片
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'file-loader?name=img/[name].' + hash + '[ext]'
            }
        ]
    },
    postcss: function () {
        return [
            require('postcss-sprites')({
                stylesheetPath: './src/css',
                spritePath: './dist/img/sprite',
                filterBy: function (image) {
                    //添加雪碧图规则 只有在sprite文件夹下的图片进行合并
                    if (!/\/sprite\//.test(image.url)) {
                        console.log(image.url);
                        return Promise.reject();
                    }

                    return Promise.resolve();
                },
                groupBy: function (image) {
                    //添加雪碧图规则 在sprite下，如果包含文件夹则单独进行合并
                    var regex = /\/sprite\/([^/]+)\//g;
                    var m = regex.exec(image.url);
                    if (!m) {
                        return Promise.reject();
                    }
                    return Promise.resolve(m[1]); // 'sprite.' + icon + '.png'
                },
                spritesmith: {
                    padding: 20
                }
            }),
            require('autoprefixer')({
                browsers: ["last 6 version"]
            })
        ];
    },

    // 插件
    plugins: [
        // 单独使用link标签加载css并设置路径，
        // 相对于output配置中的publickPath
        extractSASS,
        // 启用文件压缩混淆
        new webpack.optimize.UglifyJsPlugin({
            output: {
                comments: false // 移除所有注释
            },
            compress: {
                warnings: false
            }
        }),
        new RemoveWebpackPlugin('./dist/'),
        new WebpackMd5Hash()
    ]
});
