import type { Meta, StoryObj } from "@storybook/nextjs-vite";

import { Article } from "./article";

const meta = {
  component: Article,
  parameters: {
    docs: {
      description: {
        component: "記事の表示",
      },
    },
  },
} satisfies Meta<typeof Article>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: "タイトル",
    text: "テキスト",
  },
  parameters: {
    docs: {
      description: {
        story: "必須パラメータのみ指定",
      },
    },
  },
};

export const FixWidth: Story = {
  args: {
    title: "タイトル",
    text: "テキスト",
    className: "w-[300px]",
  },
  parameters: {
    docs: {
      description: {
        story: "固定幅300pxにした場合のコンポーネント",
      },
    },
  },
};
