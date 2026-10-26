import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import { createTypeScriptImportResolver } from "eslint-import-resolver-typescript";
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
          alphabetize: {
            order: "asc",
          },
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
  {
    ignores: [
      ".next/**",
      "out/**",
      "build/**",
      "storybook-static/**",
      "next-env.d.ts",
    ],
  },
];

export default eslintConfig;
