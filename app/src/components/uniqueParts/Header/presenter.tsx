import Image from "next/image";
import { MouseEventHandler } from "react";
import { Button } from "../../uiParts";

type Props = {
  /** ホームボタン・ロゴを押された時の処理 */
  onclickHome: MouseEventHandler<HTMLElement> | undefined;
};
/**
 * ヘッダーコンポーネント
 * @param props
 * @returns コンポーネント
 */
const HeaderComponent = (props: Props) => (
  <header className="sm:py-7">
    <div className="flex px-[15px] mx-auto max-w-[1230px]">
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
      <Button onClick={props.onclickHome}>HOME</Button>
      <Button>ABOUT</Button>
      <Button>CONTACT</Button>
    </div>
  </header>
);

export default HeaderComponent;
