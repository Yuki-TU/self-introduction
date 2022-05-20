# self-introduction

自己紹介ページのリポジトリです。

この [README.md](./README.md) はホスト側の開発手順になります。
コンテナ内での操作等は[./app/README.md](./app/README.md)を参照してください。

# 開発手順

- 必要なツール

  - docker-compose: 1.29.2
  - docker: 20.10.11

- 環境構築

```shell
$ git clone https://github.com/Yuki-TU/self-introduction.git
$ cd self-introduction
# サービスビルド
$ docker-compose build
# パッケージインストール(初回または、新たにパッケージが導入された時のみ)
$ docker-compose run --rm front yarn install --frozen-lockfile
# コンテナ起動(-dはバックグランドで起動)
$ docker-compose up -d
```

[http://localhost:3000/](http://localhost:3000/)にアクセス

- コンテナ内にログイン

```sh
$ docker-compose exec front sh
```

- コンテナ内のログ確認

```sh
$ docker-compose logs -ft
```

# VSCode 利用者向け設定

以下の vscode 拡張機能を導入すると、保存と同時にリンター及びフォーマッターが実行され、リアルタイムでエラーを検出します。

- [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
