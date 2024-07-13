import type { Preview } from "@storybook/react";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  tags: ["autodocs"]
};

const link = document.createElement('link');
link.href = 'https://fonts.cdnfonts.com/css/open-sauce-one';
link.rel = 'stylesheet';
document.head.appendChild(link);

const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
    body {
        font-family: 'Open Sauce One';
        font-weight: 400; /* Default to regular (400) */
    }
`;
document.head.appendChild(globalStyles);


export default preview;
