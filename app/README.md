# 開発環境

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
  - node 24（[mise](https://mise.jdx.dev/) で管理。ルートの `mise.toml` を参照）
- ローカルサーバ起動

```sh
$ pnpm dev
```

`http://localhost:3000`にアクセス

- リンター(ESlint)

```sh
$ pnpm lint
```

- フォーマッター(Prettier)

```sh
$ pnpm format
```

- ビルド

```sh
$ pnpm build
```

ビルドを行うと`/app/.next/`にビルドファイル群が作成されます。

- 本番環境起動

```sh
$ pnpm start
```

`http://localhost:3000`にアクセス

その前に`pnpm build`を実行する必要がある

- テスト（Vitest + Testing Library）

```sh
# ウォッチモード
$ pnpm test
# 1回だけ実行
$ pnpm test:run
```

テストファイルは対象コンポーネントの隣に `*.test.tsx` として置きます。

- E2E テスト（Playwright）

```sh
# 初回のみ、ブラウザをインストール
$ npx playwright install chromium
$ pnpm test:e2e
```

`e2e/` 配下にテストがあります。開発サーバー（ポート 3100）は自動で起動し、microCMS へのリクエストは `e2e/mock-microcms.cjs` でダミーデータに置き換えます。

- storybook 起動

```sh
$ pnpm storybook
```

`http://localhost:6006`にアクセス

# ディレクトリ構成

[bulletproof-react](https://github.com/alan2207/bulletproof-react/blob/master/docs/project-structure.md) を参考にしています。

```
src
+-- app          # App Routerのルーティング（アプリケーション層）。薄く保ち、featuresや共通部品を組み合わせる
+-- components   # 共通コンポーネント
|   +-- ui       # 汎用UI（Button, Article, Avatar）
|   +-- layouts  # レイアウト（Header, Footer）
+-- features     # 機能単位のモジュール（blogなど）。components/ 等をfeatureごとに持つ
+-- lib          # アプリ向けに設定済みのライブラリ（aspida APIクライアント）
+-- types        # 共通の型
+-- utils        # 共通のユーティリティ
+-- styles       # グローバルCSS
```

- バレルファイル（`index.ts`）は使わず、直接importします。
- `@/*` は `src/*` のエイリアスです。
- 依存方向は `components / lib / types / utils` → `features` → `app` の一方向です。逆方向のimportやfeature同士のimportはESLint（`import-x/no-restricted-paths`）でエラーになります。
- 新しいfeatureを追加したら、`eslint.config.mjs` の `no-restricted-paths` にfeature間importの禁止ルールを追加してください。
- aspidaの定義は `src/lib/api` にあり、`pnpm api:build` で `$api.ts` を再生成します。
