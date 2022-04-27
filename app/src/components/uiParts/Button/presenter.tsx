import clsx from "clsx";
import React from "react";

type Props = React.ComponentProps<"button">;
/**
 * ボタンコンポーネント
 * @param param0 buttonタグに準ずる
 * @returns コンポーネント
 */
const ButtonComponent = ({ className, ...props }: Props) => (
  <button
    {...props}
    className={clsx(className, "w-20 text-sm sm:w-32 sm:text-base")}
  />
);

export default ButtonComponent;
