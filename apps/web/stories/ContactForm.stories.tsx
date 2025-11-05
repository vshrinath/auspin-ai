import type { Meta, StoryObj } from "@storybook/react";
import { ContactForm } from "@salient/ui/components/patterns/Feature";

const meta: Meta<typeof ContactForm> = {
  title: "Feature/ContactForm",
  component: ContactForm,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof ContactForm>;

export const Default: Story = {
  render: () => <ContactForm />,
};
