# self-introduction

自己紹介ページのリポジトリです。

この [README.md](./README.md) は開発環境の構築手順になります。
アプリケーション内の操作等は[./app/README.md](./app/README.md)を参照してください。

# 開発手順

- 必要なツール
  - [mise](https://mise.jdx.dev/)（Node.js 24・pnpm 10 を `mise.toml` で管理）

- 環境構築

```sh
$ git clone https://github.com/Yuki-TU/self-introduction.git
$ cd self-introduction
# node / pnpm のインストール
$ mise install
# パッケージインストール(初回または、新たにパッケージが導入された時のみ)
$ mise run install
# 開発サーバー起動
$ mise run dev
```

[http://localhost:3000/](http://localhost:3000/)にアクセス

ビルドやブログページの表示には microCMS の API キー（環境変数 `API_KEY`）が必要です。`app/.env.local` に設定してください。

- タスク一覧

```sh
$ mise tasks
```

`dev` / `build` / `lint` / `test` / `test:e2e` / `storybook` などを実行できます。

- asdf を使っていた場合

mise は asdf のプラグインと互換性があり、`.tool-versions` も読み込めます。このリポジトリでは `mise.toml` を使うので、asdf の設定は不要です。

# VSCode 利用者向け設定

以下の vscode 拡張機能を導入すると、保存と同時にリンター及びフォーマッターが実行され、リアルタイムでエラーを検出します。

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
