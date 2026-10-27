import { render, screen, userEvent } from "@/testing/test-utils";

import { Header } from "../header";

const push = vi.fn();

vi.mock("next/navigation", () => ({
  useRouter: () => ({ push }),
}));

describe("Headerコンポーネントはヘッダー部分の共通コンポーネント", () => {
  beforeEach(() => {
    push.mockClear();
  });

  describe("ヘッダーには各種メニューがある", () => {
    test("メニューの1つに、HOMEがあり、その文字列が存在する", () => {
      render(<Header />);
      expect(screen.getByText("HOME")).toBeTruthy();
    });

    test("HOMEを押すとトップページへ遷移する", async () => {
      render(<Header />);

      await userEvent.click(screen.getByText("HOME"));

      expect(push).toHaveBeenCalledTimes(1);
      expect(push).toHaveBeenCalledWith("/");
    });
  });
});
