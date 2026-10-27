"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { paths } from "@/config/paths";

/**
 * ヘッダーコンポーネント
 * @returns コンポーネント
 */
export const Header = () => {
  const router = useRouter();

  const onClickHome = () => router.push(paths.home.getHref());

  return (
    <header className="mx-auto flex w-full px-[15px] md:w-[1230px] md:py-7">
      <div className="flex-1">
        <Image
          className="cursor-pointer"
          src="/logo.png"
          alt="Y's Room"
          width="160"
          height="44"
          onClick={onClickHome}
        />
      </div>
      <Button onClick={onClickHome} label="HOME" />
      <Button onClick={() => router.push(paths.blogs.getHref())} label="BLOG" />
      <Button
        onClick={() => router.push(paths.contact.getHref())}
        label="CONTACT"
      />
    </header>
  );
};
