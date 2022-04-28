# コンテナ内の環境

- 環境構築
  - [create-next-app](https://github.com/vercel/next.js/tree/canary/packages/create-next-app)
- Web 開発フレームワーク
  - [Next.js](https://nextjs.org/)
- 言語
  - [TypeScript(\*.ts)](https://www.typescriptlang.org/)
- CSS フレームワーク
  - [TailwindCSS](https://tailwindcss.com/)

# 開発手順

- 利用環境
  - node 16.14.2
- ローカルサーバ起動

```sh
$ yarn dev
```

`http://localhost:3000`にアクセス

- リンター(ESlint)

```sh
$ yarn lint
```

- フォーマッター(Prettier)

```sh
$ yarn format
```

- ビルド

```sh
$ yarn build
```

ビルドを行うと`/app/.next/`にビルドファイル群が作成されます。

- 本番環境起動

```sh
$ yarn start
```

`http://localhost:4000`にアクセス

その前に`yarn build`を実行する必要がある

- storybook 起動

```sh
$ yarn storybook
```

`http://localhost:6006`にアクセス
