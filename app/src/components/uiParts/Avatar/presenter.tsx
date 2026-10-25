import Image from "next/image";
import { ComponentProps } from "react";

type Props = ComponentProps<"div"> & {
  /** 画像 */
  src: string;
  /** 代替文字 */
  alt: string;
  /** 高さ */
  height: number;
  /** 幅 */
  width: number;
};

/**
 * アバタービューコンポーネント
 * @param props src, alt, height, width
 * @returns コンポーネント
 */
const AvatarComponent = (props: Props) => (
  <div className={props.className}>
    <Image
      className="rounded-[50%] object-cover"
      src={props.src}
      alt={props.alt}
      height={props.height}
      width={props.width}
    />
  </div>
);

export default AvatarComponent;
