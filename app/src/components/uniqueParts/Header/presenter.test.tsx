import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HeaderComponent from "./presenter";

describe("Headerコンポーネントはヘッダー部分の共通コンポーネント", () => {
  describe("ヘッダーには各種メニューがある", () => {
    test("メニューの1つに、HOMEがあり、その文字列が存在する", () => {
      const { getByText } = render(<HeaderComponent onclickHome={jest.fn()} />);
      expect(getByText("HOME")).toBeTruthy();
    });
    test("HOMEを押すとonclickHomeが呼ばれる", async () => {
      const onClickMock = jest.fn();
      render(<HeaderComponent onclickHome={onClickMock} />);

      // クリック
      const user = userEvent.setup();
      const homeMenu = screen.getByText("HOME");
      await user.pointer({ target: homeMenu, keys: "[MouseLeft]" });

      expect(onClickMock).toHaveBeenCalledTimes(1);
    });
  });
});
