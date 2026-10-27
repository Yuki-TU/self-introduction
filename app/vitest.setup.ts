import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach } from "vitest";

// globalsを有効にしていないため、テストごとのクリーンアップを明示する
afterEach(() => {
  cleanup();
});
