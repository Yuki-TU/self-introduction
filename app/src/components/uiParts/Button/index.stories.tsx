import type { Meta, StoryObj } from "@storybook/nextjs-vite";
import { fn } from "storybook/test";
import { Button } from "../";

// More on default export: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: "uiParts/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "ボタンコンポーネント",
      },
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    label: "ボタン",
    onClick: fn(),
  },
  parameters: {
    docs: {
      description: {
        story: "Some story **markdown**",
      },
    },
  },
};
