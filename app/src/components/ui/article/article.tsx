import { clsx } from "clsx";

export type ArticleProps = {
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
const Article = (props: ArticleProps) => (
  <section className={clsx(props.className, "my-12")}>
    <h1 className="text-2xl">{props.title}</h1>
    <div className="border-2 border-y-black"></div>
    <p className="mt-5">{props.text}</p>
  </section>
);

export { Article };
