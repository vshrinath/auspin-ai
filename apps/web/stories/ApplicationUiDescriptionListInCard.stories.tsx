import type { Meta, StoryObj } from "@storybook/react";
import { ApplicationUiDescriptionListInCard } from "@salient/ui/components/patterns/application-ui";

const meta: Meta<typeof ApplicationUiDescriptionListInCard> = {
  title: "Application-ui/ApplicationUiDescriptionListInCard",
  component: ApplicationUiDescriptionListInCard,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ApplicationUiDescriptionListInCard>;

export const Default: Story = {
  render: () => <ApplicationUiDescriptionListInCard />,
};
