import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
import checkFile from "eslint-plugin-check-file";
import { importX } from "eslint-plugin-import-x";
import { configs as storybookConfigs } from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";

const eslintConfig = [
  ...nextCoreWebVitals,
  // eslint-plugin-importはESLint 10非対応のため、import系のルールはimport-xを使う
  importX.flatConfigs.recommended,
  importX.flatConfigs.typescript,
  importX.flatConfigs.warnings,
  {
    settings: {
      "import-x/resolver-next": [createTypeScriptImportResolver()],
    },
  },
  // class名を整形したりする
  tailwindcss.configs.recommended,
  {
    settings: {
      tailwindcss: {
        cssConfigPath: "./src/styles/globals.css",
      },
    },
  },
  ...storybookConfigs["flat/recommended"],
  // prettierとeslintとの衝突回避
  prettier,
  {
    rules: {
      // import の順番をルール化
      "import-x/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      // default exportを別名でimportしただけで警告されるため無効化（旧eslint-plugin-importのwarningsには無かったルール）
      "import-x/no-rename-default": "off",
      // 依存方向を shared -> features -> app に制限（bulletproof-react準拠）
      "import-x/no-restricted-paths": [
        "error",
        {
          zones: [
            // feature同士のimportを禁止（組み合わせはappで行う）
            {
              target: "./src/features/blog",
              from: "./src/features",
              except: ["./blog"],
            },
            // featuresからappへのimportを禁止
            {
              target: "./src/features",
              from: "./src/app",
            },
            // 共通モジュールからfeatures・appへのimportを禁止
            {
              target: [
                "./src/components",
                "./src/hooks",
                "./src/lib",
                "./src/types",
                "./src/utils",
              ],
              from: ["./src/features", "./src/app"],
            },
          ],
        },
      ],
      "react/display-name": "off",
    },
  },
  // ファイル名・フォルダ名をkebab-caseに統一（bulletproof-react準拠）
  {
    files: ["src/**/*"],
    // aspidaの規約（_id@string, $api.ts）に従う必要があるため除外
    ignores: ["src/lib/api/**"],
    plugins: { "check-file": checkFile },
    rules: {
      "check-file/filename-naming-convention": [
        "error",
        {
          "**/*.{ts,tsx}": "KEBAB_CASE",
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      "check-file/folder-naming-convention": [
        "error",
        {
          "!(src/app)/**/*": "KEBAB_CASE",
          "!(**/__tests__)/**/*": "KEBAB_CASE",
        },
      ],
    },
  },
  {
    ignores: [
      // aspidaの自動生成ファイル
      "src/lib/api/$api.ts",
      ".next/**",
      "out/**",
      "build/**",
      "storybook-static/**",
      "playwright-report/**",
      "test-results/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
