# case1 CSS を別ファイルとして書き出す

case1 のディレクトリは、mini-css-extract-plugin を活用して CSS を別ファイルとして書き出すためのサンプルコードが含まれています。また、比較対象として、css-loader を使って、CSSを `style` タグで挿入する場合のサンプルコードも含まれています。

## サンプルコードを試す

case1 ディレクトリに移動して、必要な npm パッケージをインストールします。

```sh
npm install
```

インストールが完了したら、↓のコマンドを実行します。ローカルサーバーが起動し、mini-css-extract-plugin を活用して CSS を別ファイルとして書き出しを行った環境が立ち上がります。

```sh
npm run start:extract
```

css-loader を活用して CSS を `style` タグで挿入した環境を立ち上げたい場合は ↓ のコマンドを実行します。

```sh
npm run start:style
```

また、ローカルサーバーの起動が不要な場合は以下のコマンドを活用できます。

開発モードで CSS を別ファイルとして書き出す
```sh
npm run dev:extract
```

開発モードで CSS を `style` タグで挿入する
```sh
npm run dev:style
```

製品モードで CSS を別ファイルとして書き出す
```sh
npm run build:extract
```

製品モードで CSS を `style` タグで挿入する
```sh
npm run build:style
```
