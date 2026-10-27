import * as React from 'react';

import { cn } from '@/utils/cn';

export type ButtonProps = React.ComponentProps<'button'> & {
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

    className={cn(className, 'w-20 text-sm sm:w-32 sm:text-base')}
  >
    {props.label}
  </button>
);

export { Button };
