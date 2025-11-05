import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationUiSimpleDescriptionListV2 } from "@salient/ui/components/patterns/application-ui";

const meta: Meta<typeof ApplicationUiSimpleDescriptionListV2> = {
  title: "Application-ui/ApplicationUiSimpleDescriptionListV2",
  component: ApplicationUiSimpleDescriptionListV2,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ApplicationUiSimpleDescriptionListV2>;

export const Default: Story = {
  render: () => <ApplicationUiSimpleDescriptionListV2 />,
};
