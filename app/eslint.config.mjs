import nextCoreWebVitals from "eslint-config-next/core-web-vitals";
import prettier from "eslint-config-prettier/flat";
import storybook from "eslint-plugin-storybook";
import tailwindcss from "eslint-plugin-tailwindcss";

const eslintConfig = [
  ...nextCoreWebVitals,
  // class名を整形したりする
  ...tailwindcss.configs["flat/recommended"],
  ...storybook.configs["flat/recommended"],
  // prettierとeslintとの衝突回避
  prettier,
  {
    rules: {
      // import の順番をルール化
      "import/order": [
        "error",
        {
          alphabetize: {
            order: "asc",
          },
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
