# 自分用npm scriptsのひな形

以下、メモ。

## node.jsとyarnをインストール

## npmパッケージをインストール

```
$ yarn install
```

## ファイルの監視

`/.temp/` に一時ファイルが作成され、ブラウザが立ち上がる

```
$ yarn start
```

## スプライト画像

作成・更新は手動対応のため都度、下記のコマンドを実行

```
$ yarn run sprite
```

## アイコンフォント

作成・更新は手動対応のため都度、下記のコマンドを実行

```
$ yarn run iconfont
```

## pug

### 各ファイルのfilePathという変数

下記のようなルールで記載。末尾に`.html`などが付かない場合は必ず`/`で締める。

+ http://hoge.com/ : `"/"`
+ http://hoge.com/hoge.html : `"/hoge.html"`
+ http://hoge.com/foo/ : `"/foo/"`
+ http://hoge.com/foo/bar.html : `"/foo/bar.html"`


### ファイルの指定

`${depth}` で相対パスによりルートを指す


## 納品ファイル生成

`/build/` にcssのminifyや、.mapなどを省いたファイルを生成

```
$ yarn run build
```

## ディレクトリ構成

srcを編集

+ pug  -> html
+ sass -> css
+ es6  -> js

```
├── .temp/（ビルド後のソース）
│   ├── assets/javascripts/
│   │    │      └── libs/ （browserifyしないjsはここに生成）
│   │    ├── images
│   │    └── stylesheets 等
│   └── index.html
│
├── build/（納品ファイルがここに生成される）
│
├── config/（ルートパスに置かなくてもよい設定ファイル群）
│
├── node_modules/
│   └── パッケージ各種
│
├── src/（ビルド前のソース）
│   ├── copy/（複製するだけのファイル用）
│   │    └── （favicon.ico、iconfont など）
│   ├── iconfonts/
│   │    ├── _icons/ （アイコンフォント用svg）
│   │    ├── _templates/ （アイコンフォント用cssの雛形）
│   │    └── list.html （アイコンフォントの一覧）
│   ├── html/
│   │    ├── _templates/ （共通パーツのhtml）
│   │    └── index.pug
│   ├── images/
│   │    └── sprites/ （スプライト用png）
│   ├── javascripts/
│   │    └── common.js
│   └── stylesheets/
│         ├── _partial/ （共通パーツのcss）
│         └── common.sass
│
├── .git/
├── .gitignore
├── gulpfile.js
├── package.json
└── README.md
```
