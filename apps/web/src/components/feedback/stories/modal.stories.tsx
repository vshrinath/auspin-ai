import type { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const Modal = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="text-center">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded"
      >
        Open Modal
      </button>
      {open && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-6 rounded shadow-lg">
            <p>Hello from Modal!</p>
            <button
              onClick={() => setOpen(false)}
              className="mt-4 px-3 py-2 bg-gray-200 rounded"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

const meta: Meta<typeof Modal> = {
  title: "Feedback/Modal",
  component: Modal,
};
export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {};
