import '@testing-library/jest-dom/vitest';

vi.mock('next/navigation', async () => {
  const actual = await vi.importActual('next/navigation');
  return {
    ...actual,
    useRouter: () => {
      return {
        push: vi.fn(),
        replace: vi.fn(),
      };
    },
    usePathname: () => '/',
    useSearchParams: () => ({
      get: vi.fn(),
    }),
  };
});
