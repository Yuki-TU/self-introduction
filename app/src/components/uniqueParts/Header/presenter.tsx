import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "../../uiParts";

type Props = {
  /** ホームボタン・ロゴを押された時の処理 */
  onclickHome: MouseEventHandler<HTMLElement> | undefined;
  onclickBlog: MouseEventHandler<HTMLElement> | undefined;
};
/**
 * ヘッダーコンポーネント
 * @param props
 * @returns コンポーネント
 */
const HeaderComponent = (props: Props) => (
  <header className="flex px-[15px] mx-auto w-full md:py-7 md:w-[1230px]">
    <div className="flex-1">
      <Image
        className="cursor-pointer"
        src="/logo.png"
        alt="logo"
        objectFit="cover"
        width="100"
        height="55"
        onClick={props.onclickHome}
      />
    </div>
    <Button onClick={props.onclickHome} label="HOME" />
    <Button onClick={props.onclickBlog} label="BLOG" />
    <Button label="CONTACT" />
  </header>
);

export default HeaderComponent;
