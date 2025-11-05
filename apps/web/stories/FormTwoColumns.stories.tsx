import type { Meta, StoryObj } from "@storybook/react";
import { FormTwoColumns } from "@salient/ui/components/patterns/Navbar";

const meta: Meta<typeof FormTwoColumns> = {
  title: "Navbar/FormTwoColumns",
  component: FormTwoColumns,
  parameters: {
    layout: "fullscreen",
  },
  tags: ["autodocs"],
};

export default meta;

type Story = StoryObj<typeof FormTwoColumns>;

export const Default: Story = {
  render: () => <FormTwoColumns />,
};
