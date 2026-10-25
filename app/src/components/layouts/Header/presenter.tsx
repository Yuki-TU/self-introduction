import Image from "next/image";
import { MouseEventHandler } from "react";
import Button from "@/components/ui/Button";

type Props = {
  /** ホームボタン・ロゴを押された時の処理 */
  onclickHome: MouseEventHandler<HTMLElement> | undefined;
  onclickBlog: MouseEventHandler<HTMLElement> | undefined;
  onclickContact: MouseEventHandler<HTMLElement> | undefined;
};
/**
 * ヘッダーコンポーネント
 * @param props
 * @returns コンポーネント
 */
const HeaderComponent = (props: Props) => (
  <header className="mx-auto flex w-full px-[15px] md:w-[1230px] md:py-7">
    <div className="flex-1">
      <Image
        className="cursor-pointer"
        src="/logo.png"
        alt="Y's Room"
        width="160"
        height="44"
        onClick={props.onclickHome}
      />
    </div>
    <Button onClick={props.onclickHome} label="HOME" />
    <Button onClick={props.onclickBlog} label="BLOG" />
    <Button onClick={props.onclickContact} label="CONTACT" />
  </header>
);

export default HeaderComponent;
