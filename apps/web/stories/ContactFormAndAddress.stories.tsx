import type { Meta, StoryObj } from "@storybook/react";
import { ContactFormAndAddress } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof ContactFormAndAddress> = {
  title: "Feature/ContactFormAndAddress",
  component: ContactFormAndAddress,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContactFormAndAddress>;

export const Default: Story = {
  render: () => <ContactFormAndAddress />,
};
