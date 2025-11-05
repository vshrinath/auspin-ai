import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationUiDescriptionListWithAvatar } from "@salient/ui/components/patterns/application-ui";

const meta: Meta<typeof ApplicationUiDescriptionListWithAvatar> = {
  title: "Application-ui/ApplicationUiDescriptionListWithAvatar",
  component: ApplicationUiDescriptionListWithAvatar,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ApplicationUiDescriptionListWithAvatar>;

export const Default: Story = {
  render: () => <ApplicationUiDescriptionListWithAvatar />,
};
