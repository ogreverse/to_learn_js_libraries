// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
    // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
    // [memo]
    // modeの種類: development, production, none
    // productionにすればoptimization.minimizerという設定が有効になり、圧縮されたファイルが出力される。
    mode: 'development',
    // エントリーポイントの設定
    entry: './src/js/app.js',
    // 出力の設定
    output: {
        // 出力するファイル名
        filename: 'bundle.js',
        // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
        // [memo]
        // OSによってパスが異なるのを防ぐために、path.join()を使用する
        path: path.join(__dirname, 'public/js')
    },
    // developmentモードで有効になる devtool: 'eval' を上書き
    // [memo] 'eval' だとeval()の引数に作成したソースが渡されるので読みづらくなる
    devtool: 'source-map',
    module: {
        // ローダーの設定
        // [memo]
        // ローダーとは画像やCSSなどのJavaScript以外のファイルをJavaScriptで扱えるように変換したり、
        // バンドルする前にモジュールに対して実行する機能
        rules: [{
            // ローダーの処理対象ファイル
            test: /\.js$/,
            // ローダーの処理対象から外すディレクトリ
            exclude: /node_modules/,
            // 利用するローダー
            use: [{
                // babel-loader
                // [memo]
                // ES2015（ES6）のコードをES5のコードに変換するローダー
                loader: 'babel-loader',
                options: {
                    presets: ['env']
                }
            }],
        }]
    }
};