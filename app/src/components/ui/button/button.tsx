import { clsx } from "clsx";
import * as React from "react";

export type ButtonProps = React.ComponentProps<"button"> & {
  /** ラベル */
  label?: string;
};

/**
 * ボタンコンポーネント
 * @param param0 buttonタグに準ずる
 * @returns コンポーネント
 */
const Button = ({ className, ...props }: ButtonProps) => (
  <button
    {...props}
    // eslint-plugin-tailwindcssが変数名classNameをクラス名と誤検知するため無効化
    // eslint-disable-next-line tailwindcss/no-custom-classname
    className={clsx(className, "w-20 text-sm sm:w-32 sm:text-base")}
  >
    {props.label}
  </button>
);

export { Button };
