import { rtlRender, screen } from '@/testing/test-utils';

import { Header } from '../header';

describe('Headerコンポーネントはヘッダー部分の共通コンポーネント', () => {
  describe('ヘッダーには各種メニューがある', () => {
    test('メニューの1つに、HOMEがあり、その文字列が存在する', () => {
      rtlRender(<Header />);
      expect(screen.getByText('HOME')).toBeTruthy();
    });

    test('各メニューは対応するページへのリンクになっている', () => {
      rtlRender(<Header />);

      expect(screen.getByRole('link', { name: 'HOME' })).toHaveAttribute(
        'href',
        '/',
      );
      expect(screen.getByRole('link', { name: 'BLOG' })).toHaveAttribute(
        'href',
        '/blog',
      );
      expect(screen.getByRole('link', { name: 'CONTACT' })).toHaveAttribute(
        'href',
        '/contact',
      );
    });
  });
});
