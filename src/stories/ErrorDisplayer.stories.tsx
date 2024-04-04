import React from "react";
import { StoryFn, Meta } from "@storybook/react";
import ErrorDisplay from "../components/ErrorDisplayer";

export default {
  title: "ErrorDisplayer",
  component: ErrorDisplay,
} as Meta;

type Props = {
  error: string | Error;
  titleMessage: string;
};
const Template: StoryFn<Props> = () => (
  <ErrorDisplay error="ExampleError" titleMessage="Example Error" />
);

export const Default = Template.bind({});
