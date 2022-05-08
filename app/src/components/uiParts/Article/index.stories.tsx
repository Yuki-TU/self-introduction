import { ComponentMeta, ComponentStory } from "@storybook/react";
import React from "react";
import { Article } from "../";

export default {
  title: "uiParts/Article",
  component: Article,
  parameters: {
    docs: {
      description: {
        component: "記事の表示",
      },
    },
  },
} as ComponentMeta<typeof Article>;

const Template: ComponentStory<typeof Article> = (args) => (
  <Article {...args} />
);

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  title: "タイトル",
  text: "テキスト",
};
Primary.parameters = {
  docs: {
    description: {
      story: "必須パラメータのみ指定",
    },
  },
};

export const FixWidth = Template.bind({});
FixWidth.args = {
  title: "タイトル",
  text: "テキスト",
  className: "w-[300px]",
};
FixWidth.parameters = {
  docs: {
    description: {
      story: "固定幅300pxにした場合のコンポーネント",
    },
  },
};
