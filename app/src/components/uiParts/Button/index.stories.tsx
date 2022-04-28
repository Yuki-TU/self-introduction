import { action } from "@storybook/addon-actions";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import React from "react";
import { Button } from "../";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "uiParts/Button",
  component: Button,
  parameters: {
    docs: {
      description: {
        component: "ボタンコンポーネント",
      },
    },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

// More on args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = Template.bind({});
Primary.args = {
  label: "ボタン",
  onClick: action("click"),
};
Primary.parameters = {
  docs: {
    description: {
      story: "Some story **markdown**",
    },
  },
};
