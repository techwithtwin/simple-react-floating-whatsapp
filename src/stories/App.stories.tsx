import type { Meta, StoryFn } from "@storybook/react";
import App from "../App";

export default {
  title: "Simple React Floating Whatsapp",
  component: App,
  argTypes: {},
} as Meta<typeof App>;

const Template: StoryFn<typeof App> = () => <App />;

export const Primary = Template.bind({});
