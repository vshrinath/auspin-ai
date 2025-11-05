import "./tailwind.css";

const preview = {
  parameters: {
    layout: "fullscreen",
    actions: { argTypesRegex: "^on.*" },
    controls: { expanded: true },
    viewport: {
      viewports: {
        responsive: {
          name: 'Responsive',
          styles: {
            width: '100%',
            height: '100%',
          },
        },
      },
    },
  },
};

export default preview;
