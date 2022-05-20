import clsx from "clsx";
import React from "react";

type Props = {
  className?: string;
  /** 記事のタイトル */
  title: string;
  /** 記事のテキスト */
  text: string;
};

/**
 * 記事コンポーネント
 * @param props title, text, className?
 * @returns コンポーネント
 */
const ArticleComponent = (props: Props) => (
  <section className={clsx(props.className, "my-12")}>
    <h1 className="text-2xl">{props.title}</h1>
    <div className="border-2 border-y-black"></div>
    <p className="mt-5">{props.text}</p>
  </section>
);

export default ArticleComponent;
