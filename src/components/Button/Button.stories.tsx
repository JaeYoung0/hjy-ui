import React from "react";
import { Meta } from "@storybook/react/types-6-0";
import { Story } from "@storybook/react";

import Button, { ButtonProps } from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as Meta;

// args 맵핑하기 위한 master template
const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// template을 사용해서 다른 스토리들을 만들기
export const Primary = Template.bind({});
Primary.args = { text: "프라이머리", backgroundColor: "#19CE60" };

export const Secondary = Template.bind({});
Secondary.args = { text: "세컨더리", backgroundColor: "#FF5503" };
