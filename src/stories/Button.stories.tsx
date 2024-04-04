import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import { Button } from "@/components/ui/button";

export default {
  title: "Button",
  component: Button,
} as Meta;

const Template: StoryFn = () => (
  <Button variant="outline" className="ml-auto my-2 mx-1">
    Button
  </Button>
);

export const Default = Template.bind({});
