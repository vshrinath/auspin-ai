import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationUiSimpleDescriptionList } from "@salient/ui/components/patterns/application-ui";

const meta: Meta<typeof ApplicationUiSimpleDescriptionList> = {
  title: "Application-ui/ApplicationUiSimpleDescriptionList",
  component: ApplicationUiSimpleDescriptionList,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ApplicationUiSimpleDescriptionList>;

export const Default: Story = {
  render: () => <ApplicationUiSimpleDescriptionList />,
};
