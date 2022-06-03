import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button } from "../components/Button";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "UI/Button",
  component: Button,
  argTypes: {
    color: { control: "select" },
    type: { control: "select" },
    size: { control: "select" },
    shape: { control: "select" },
    fontSize: { control: "select" },
    fontColor: { control: "color" },
    className: { control: "text" },
    style: { control: "object" },
    text: { control: "text" },
    onClick: { action: "clicked" },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  text: "Primary",
  color: "primary",
};

export const Secondary = Template.bind({});
Secondary.args = {
  text: "Secondary",
  color: "secondary",
  fontColor: "#000",
};

export const Success = Template.bind({});
Success.args = {
  text: "Success",
  color: "success",
};

export const Danger = Template.bind({});
Danger.args = {
  text: "Danger",
  color: "danger",
};

export const Warning = Template.bind({});
Warning.args = {
  text: "Warning",
  color: "warning",
};

export const Info = Template.bind({});
Info.args = {
  text: "Info",
  color: "info",
};

export const Small = Template.bind({});
Small.args = {
  text: "Small",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Medium",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  text: "Large",
  size: "large",
};

export const Pill = Template.bind({});
Pill.args = {
  text: "Pill",
  shape: "pill",
};

export const Rounded = Template.bind({});
Rounded.args = {
  text: "Rounded",
  shape: "rounded",
};

export const Square = Template.bind({});
Square.args = {
  text: "Square",
  shape: "square",
};
