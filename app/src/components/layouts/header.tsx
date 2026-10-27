import Image from 'next/image';

import { Button } from '@/components/ui/button';
import { Link } from '@/components/ui/link';
import { paths } from '@/config/paths';

/**
 * ヘッダーコンポーネント
 * @returns コンポーネント
 */
export const Header = () => {
  return (
    <header className="mx-auto flex w-full px-[15px] md:w-[1230px] md:py-7">
      <div className="flex-1">
        <Link
          className="inline-block text-inherit hover:text-inherit"
          href={paths.home.getHref()}
        >
          <Image src="/logo.png" alt="Y's Room" width="160" height="44" />
        </Link>
      </div>
      <Link
        className="text-inherit hover:text-inherit"
        href={paths.home.getHref()}
      >
        <Button label="HOME" />
      </Link>
      <Link
        className="text-inherit hover:text-inherit"
        href={paths.blogs.getHref()}
      >
        <Button label="BLOG" />
      </Link>
      <Link
        className="text-inherit hover:text-inherit"
        href={paths.contact.getHref()}
      >
        <Button label="CONTACT" />
      </Link>
    </header>
  );
};
